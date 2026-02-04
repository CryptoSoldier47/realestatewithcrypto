import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      buyerAddress,
      sellerAddress,
      propertyId,
      amount,
      currency,
      escrowAddress,
    } = body;

    if (!buyerAddress || !sellerAddress || !propertyId || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create deal record
    const deal = {
      id: `deal_${Date.now()}`,
      buyerAddress,
      sellerAddress,
      propertyId,
      amount,
      currency: currency || 'ETH',
      escrowAddress,
      status: 'escrow_pending', // escrow_pending, escrow_funded, documents_pending, completed, failed
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      escrowDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
    };

    // Store in database
    // await db.deals.create(deal);

    return NextResponse.json(
      {
        success: true,
        deal,
        message: 'Deal created. Please initiate escrow payment.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating deal:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create deal' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('wallet');
    const dealId = searchParams.get('dealId');

    if (dealId) {
      // Fetch single deal
      // const deal = await db.deals.findOne({ id: dealId });
      return NextResponse.json({
        success: true,
        deal: {
          id: dealId,
          status: 'escrow_funded',
          amount: '10 ETH',
          currency: 'ETH',
        },
      });
    }

    if (!walletAddress) {
      return NextResponse.json(
        { success: false, error: 'Wallet address required' },
        { status: 400 }
      );
    }

    // Fetch user's deals
    // const deals = await db.deals.find({
    //   $or: [{ buyerAddress: walletAddress }, { sellerAddress: walletAddress }]
    // });

    return NextResponse.json({
      success: true,
      deals: [], // mock response
      total: 0,
    });
  } catch (error) {
    console.error('Error fetching deals:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch deals' },
      { status: 500 }
    );
  }
}
