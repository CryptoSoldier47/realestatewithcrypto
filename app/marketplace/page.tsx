'use client';

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import Link from 'next/link';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceUSD: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  seller: string;
  status: 'available' | 'pending' | 'sold';
}

export default function Marketplace() {
  const { isConnected, address } = useAccount();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        const data = await response.json();
        setProperties(data.properties || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Please Connect Your Wallet</h1>
          <p className="text-gray-300 mb-8">You need to connect a wallet to browse properties</p>
        </div>
      </div>
    );
  }

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.status === filter);

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Property Marketplace</h1>
          <p className="text-gray-300">Browse and invest in premium properties with cryptocurrency</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-4 flex-wrap">
          {['all', 'available', 'pending', 'sold'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading properties...</p>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No properties found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{property.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        property.status === 'available' ? 'bg-green-600/20 text-green-400' :
                        property.status === 'pending' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">📍 {property.location}</p>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">{property.bedrooms}</div>
                        <div className="text-gray-500 text-xs">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">{property.bathrooms}</div>
                        <div className="text-gray-500 text-xs">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">{property.area}</div>
                        <div className="text-gray-500 text-xs">sqft</div>
                      </div>
                    </div>

                    <div className="border-t border-slate-700 pt-4">
                      <div className="text-gray-400 text-sm mb-1">Price</div>
                      <div className="text-2xl font-bold text-white">{property.price}</div>
                      <div className="text-sm text-gray-500">≈ {property.priceUSD} USD</div>
                    </div>

                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
