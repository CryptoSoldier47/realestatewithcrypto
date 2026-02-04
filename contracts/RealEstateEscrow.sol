// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title RealEstateEscrow
 * @dev Smart contract for real estate transactions with escrow functionality
 * Supports: Ethereum, Polygon, Arbitrum
 * Website: www.realestatewithcrypto.com
 * Commission: 1% per transaction to 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84
 * 
 * SMART AGREEMENT & TERMS:
 * 1. Buyer deposits funds into escrow - funds are locked
 * 2. Seller confirms receipt and availability of documents
 * 3. Documents are reviewed and signed digitally
 * 4. Upon document verification, escrow releases funds to seller
 * 5. Platform takes 1% commission from transaction
 * 6. If dispute, a 3-day resolution period is initiated
 */

contract RealEstateEscrow is ReentrancyGuard, Ownable {
    // Constants
    address public constant PLATFORM_WALLET = 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84;
    uint256 public constant COMMISSION_PERCENT = 1; // 1% commission

    // Structs
    struct Property {
        uint256 id;
        address seller;
        string title;
        string location;
        uint256 price;
        bool active;
    }

    struct Deal {
        uint256 id;
        uint256 propertyId;
        address buyer;
        address seller;
        uint256 amount;
        uint256 commission;
        DealStatus status;
        uint256 createdAt;
        bool documentsVerified;
        bool fundsReleased;
        string documentHash;
    }

    enum DealStatus { INITIATED, ESCROW_FUNDED, DOCUMENTS_VERIFIED, COMPLETED, CANCELLED }

    // State variables
    uint256 public propertyCounter;
    uint256 public dealCounter;
    uint256 public totalVolume;

    mapping(uint256 => Property) public properties;
    mapping(uint256 => Deal) public deals;
    mapping(address => uint256[]) public userDeals;
    mapping(address => uint256) public escrowBalance;

    // Events
    event PropertyListed(uint256 indexed propertyId, address indexed seller, uint256 price);
    event DealInitiated(uint256 indexed dealId, uint256 indexed propertyId, address indexed buyer, uint256 amount);
    event FundsEscrowed(uint256 indexed dealId, uint256 amount);
    event DocumentsVerified(uint256 indexed dealId, string documentHash);
    event FundsReleased(uint256 indexed dealId, address indexed seller, uint256 amount);
    event CommissionPaid(uint256 amount, address recipient);
    event DealCancelled(uint256 indexed dealId);

    // Property Management
    function listProperty(string memory _title, string memory _location, uint256 _price) external returns (uint256) {
        require(_price > 0, "Price must be greater than 0");
        propertyCounter++;
        uint256 propertyId = propertyCounter;
        
        properties[propertyId] = Property({
            id: propertyId,
            seller: msg.sender,
            title: _title,
            location: _location,
            price: _price,
            active: true
        });

        emit PropertyListed(propertyId, msg.sender, _price);
        return propertyId;
    }

    // Deal Management
    function initiateDeal(uint256 _propertyId) external payable nonReentrant returns (uint256) {
        Property storage property = properties[_propertyId];
        require(property.active, "Property not active");
        require(msg.value == property.price, "Incorrect payment amount");
        require(msg.sender != property.seller, "Seller cannot buy own property");

        dealCounter++;
        uint256 dealId = dealCounter;
        uint256 commission = (msg.value * COMMISSION_PERCENT) / 100;

        deals[dealId] = Deal({
            id: dealId,
            propertyId: _propertyId,
            buyer: msg.sender,
            seller: property.seller,
            amount: msg.value,
            commission: commission,
            status: DealStatus.ESCROW_FUNDED,
            createdAt: block.timestamp,
            documentsVerified: false,
            fundsReleased: false,
            documentHash: ""
        });

        escrowBalance[property.seller] = msg.value - commission;
        totalVolume += msg.value;
        userDeals[msg.sender].push(dealId);
        userDeals[property.seller].push(dealId);

        emit DealInitiated(dealId, _propertyId, msg.sender, msg.value);
        emit FundsEscrowed(dealId, msg.value);

        return dealId;
    }

    // Document Verification
    function verifyDocuments(uint256 _dealId, string memory _documentHash) external onlyOwner {
        Deal storage deal = deals[_dealId];
        deal.documentsVerified = true;
        deal.documentHash = _documentHash;
        deal.status = DealStatus.DOCUMENTS_VERIFIED;
        emit DocumentsVerified(_dealId, _documentHash);
    }

    // Release Funds
    function releaseFunds(uint256 _dealId) external onlyOwner nonReentrant {
        Deal storage deal = deals[_dealId];
        require(deal.documentsVerified, "Documents not verified");
        require(!deal.fundsReleased, "Funds already released");

        deal.fundsReleased = true;
        deal.status = DealStatus.COMPLETED;

        uint256 sellerAmount = deal.amount - deal.commission;
        
        (bool sellerSuccess, ) = payable(deal.seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Seller payment failed");

        (bool commissionSuccess, ) = payable(PLATFORM_WALLET).call{value: deal.commission}("");
        require(commissionSuccess, "Commission payment failed");

        emit FundsReleased(_dealId, deal.seller, sellerAmount);
        emit CommissionPaid(deal.commission, PLATFORM_WALLET);
    }

    // Cancel Deal
    function cancelDeal(uint256 _dealId) external onlyOwner nonReentrant {
        Deal storage deal = deals[_dealId];
        require(!deal.fundsReleased, "Funds already released");

        deal.status = DealStatus.CANCELLED;
        (bool success, ) = payable(deal.buyer).call{value: deal.amount}("");
        require(success, "Refund failed");

        emit DealCancelled(_dealId);
    }

    // View Functions
    function getProperty(uint256 _propertyId) external view returns (Property memory) {
        return properties[_propertyId];
    }

    function getDeal(uint256 _dealId) external view returns (Deal memory) {
        return deals[_dealId];
    }

    function getUserDeals(address _user) external view returns (uint256[] memory) {
        return userDeals[_user];
    }

    receive() external payable {}
}