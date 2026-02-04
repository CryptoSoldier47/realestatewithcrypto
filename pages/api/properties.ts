import { NextRequest, NextResponse } from 'next/server';

// Mock properties data - replace with database calls
const mockProperties = [
  {
    id: '1',
    title: 'Luxury Penthouse - Manhattan',
    location: 'New York, USA',
    price: '15 ETH',
    priceUSD: '$45,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    image: '/properties/penthouse.jpg',
    seller: '0x1234...5678',
    status: 'available',
    description: 'Stunning penthouse with Central Park views',
  },
  {
    id: '2',
    title: 'Modern Villa - Miami Beach',
    location: 'Miami, USA',
    price: '12 ETH',
    priceUSD: '$36,000',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    image: '/properties/villa.jpg',
    seller: '0x1234...5678',
    status: 'available',
    description: 'Oceanfront villa with private beach access',
  },
  {
    id: '3',
    title: 'Downtown Apartment - Singapore',
    location: 'Singapore',
    price: '8 ETH',
    priceUSD: '$24,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: '/properties/apartment.jpg',
    seller: '0x1234...5678',
    status: 'available',
    description: 'Modern apartment in prestigious location',
  },
  {
    id: '4',
    title: 'Historic Townhouse - London',
    location: 'London, UK',
    price: '10 ETH',
    priceUSD: '$30,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: '/properties/townhouse.jpg',
    seller: '0x1234...5678',
    status: 'pending',
    description: 'Charming townhouse in Mayfair',
  },
];

export async function GET(request: NextRequest) {
  try {
    // You can add query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    let filtered = mockProperties;

    if (status) {
      filtered = filtered.filter(p => p.status === status);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      properties: filtered,
      total: filtered.length,
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, location, price, bedrooms, bathrooms, area, description, seller } = body;

    // Validate input
    if (!title || !location || !price || !seller) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would save to database
    const newProperty = {
      id: String(mockProperties.length + 1),
      title,
      location,
      price,
      priceUSD: '$0',
      bedrooms,
      bathrooms,
      area,
      description,
      seller,
      status: 'available',
      image: '/properties/default.jpg',
    };

    mockProperties.push(newProperty);

    return NextResponse.json(
      { success: true, property: newProperty },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating property:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create property' },
      { status: 500 }
    );
  }
}
