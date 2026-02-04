export default function handler(req, res) {
  try {
    const { wallet, dealId, method } = req.query;

    if (req.method === 'GET') {
      // Get deals by wallet or dealId
      const mockDeals = [
        {
          id: '1',
          buyerWallet: wallet || '0x1234567890123456789012345678901234567890',
          propertyId: '1',
          amount: '15 ETH',
          status: 'completed',
          createdAt: '2026-02-01T10:00:00Z',
        },
      ];

      const filtered = wallet
        ? mockDeals.filter(d => d.buyerWallet.toLowerCase() === wallet.toString().toLowerCase())
        : mockDeals;

      return res.status(200).json({
        success: true,
        deals: filtered,
        total: filtered.length,
      });
    }

    if (req.method === 'POST') {
      // Create new deal
      const { buyerWallet, sellerWallet, propertyId, amount } = req.body;

      if (!buyerWallet || !sellerWallet || !propertyId || !amount) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
        });
      }

      const newDeal = {
        id: Date.now().toString(),
        buyerWallet,
        sellerWallet,
        propertyId,
        amount,
        status: 'initiated',
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json({
        success: true,
        deal: newDeal,
      });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error handling deal request:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process request',
    });
  }
}