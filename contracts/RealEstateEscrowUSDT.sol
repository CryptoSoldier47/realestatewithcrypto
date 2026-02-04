// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title RealEstateEscrowUSDT
 * @dev Multi-chain USDT Escrow for Real Estate
 * Supports: Polygon, Arbitrum, TRON
 * TRON Address: TKkpYpPfJmEw8yxXDJLPuAFbmYi7jo7JKR
 * Arbitrum Address: 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84
 * Commission: 1% per transaction
 */

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateEscrowUSDT is ReentrancyGuard, Ownable {
    
    address public constant PLATFORM_WALLET = 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84;
    uint256 public constant COMMISSION_PERCENT = 1;
    
    IERC20 public usdtToken;
    uint256 public dealCounter;
    uint256 public totalVolume;

    struct USDTDeal {
        uint256 id;
        address buyer;
        address seller;
        uint256 amount;
        uint256 commission;
        bool fundsReleased;
    }

    mapping(uint256 => USDTDeal) public deals;
    mapping(address => uint256[]) public userDeals;

    event DealInitiated(uint256 indexed dealId, address indexed buyer, address indexed seller, uint256 amount);
    event FundsReleased(uint256 indexed dealId, address indexed seller, uint256 amount);

    constructor(address _usdtToken) {
        usdtToken = IERC20(_usdtToken);
    }

    function initiateDeal(address _seller, uint256 _amount) external nonReentrant returns (uint256) {
        require(_amount > 0, "Amount must be greater than 0");
        require(msg.sender != _seller, "Seller cannot be buyer");

        require(usdtToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");

        dealCounter++;
        uint256 dealId = dealCounter;
        uint256 commission = (_amount * COMMISSION_PERCENT) / 100;

        deals[dealId] = USDTDeal({
            id: dealId,
            buyer: msg.sender,
            seller: _seller,
            amount: _amount,
            commission: commission,
            fundsReleased: false
        });

        userDeals[msg.sender].push(dealId);
        userDeals[_seller].push(dealId);
        totalVolume += _amount;

        emit DealInitiated(dealId, msg.sender, _seller, _amount);
        return dealId;
    }

    function releaseFunds(uint256 _dealId) external onlyOwner nonReentrant {
        USDTDeal storage deal = deals[_dealId];
        require(!deal.fundsReleased, "Funds already released");

        deal.fundsReleased = true;
        uint256 sellerAmount = deal.amount - deal.commission;

        require(usdtToken.transfer(deal.seller, sellerAmount), "Seller transfer failed");
        require(usdtToken.transfer(PLATFORM_WALLET, deal.commission), "Commission transfer failed");

        emit FundsReleased(_dealId, deal.seller, sellerAmount);
    }

    function cancelDeal(uint256 _dealId) external onlyOwner nonReentrant {
        USDTDeal storage deal = deals[_dealId];
        require(!deal.fundsReleased, "Funds already released");
        require(usdtToken.transfer(deal.buyer, deal.amount), "Refund failed");
    }

    function getDeal(uint256 _dealId) external view returns (USDTDeal memory) {
        return deals[_dealId];
    }

    function getUserDeals(address _user) external view returns (uint256[] memory) {
        return userDeals[_user];
    }
}