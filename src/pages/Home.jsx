import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing');
        setProperties(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const featuredProperties = properties.slice(0, 4);
  const forSaleProperties = properties.filter(p => p.forSale === true).slice(0, 4);
  const forRentProperties = properties.filter(p => p.forRent === true).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Home in One Click</h1>
            <p className="text-gray-700 mb-6">Search properties for sale and rent with ease.</p>
            {/* Search bar or banner can be added here */}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="font-bold mb-2">Buy Properties</h3>
              <p>Find the best properties for sale.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="font-bold mb-2">Rent Properties</h3>
              <p>Explore rental properties easily.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="font-bold mb-2">Sell Properties</h3>
              <p>List your property for sale.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="font-bold mb-2">Property Management</h3>
              <p>Manage your properties efficiently.</p>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
          {loading && <p>Loading featured properties...</p>}
          {error && <p className="text-red-600">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Properties for Sale Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Best Properties Available For Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {forSaleProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Properties for Rent Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Find The Perfect Rental Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {forRentProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="mb-12 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch with Us</h2>
          <p className="mb-6">Subscribe now for exclusive property insights and deals.</p>
          <form className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg text-gray-800 w-64"
              required
            />
            <button type="submit" className="bg-white text-blue-600 px-6 rounded-r-lg font-semibold">
              Subscribe
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          &copy; 2024 RealEstate. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default Home;
