import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { walletAddress, fullName, email, documentType, documentUrl } = body;

    if (!walletAddress || !fullName || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate document
    if (!documentUrl) {
      return NextResponse.json(
        { success: false, error: 'Document required for KYC' },
        { status: 400 }
      );
    }

    // Here you would call a KYC service like Onfido, Jumio, or Sumsub
    // For now, we'll create a mock verification record
    const kycRecord = {
      id: Date.now().toString(),
      walletAddress,
      fullName,
      email,
      documentType,
      status: 'pending_review', // pending_review, verified, rejected
      submittedAt: new Date().toISOString(),
      verifiedAt: null,
    };

    // Store in database
    // await db.kycRecords.create(kycRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'KYC submission received. Verification in progress.',
        kycId: kycRecord.id,
        status: kycRecord.status,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing KYC:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process KYC' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('wallet');

    if (!walletAddress) {
      return NextResponse.json(
        { success: false, error: 'Wallet address required' },
        { status: 400 }
      );
    }

    // Fetch KYC status from database
    // const kycRecord = await db.kycRecords.findOne({ walletAddress });

    return NextResponse.json({
      success: true,
      kycStatus: 'pending_review', // mock response
      verificationCompleted: false,
    });
  } catch (error) {
    console.error('Error fetching KYC status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch KYC status' },
      { status: 500 }
    );
  }
}
