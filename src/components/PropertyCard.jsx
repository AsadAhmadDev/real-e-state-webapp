import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
      <p>{property.city}, {property.state}</p>
      <p>Owner: {property.ownerName}</p>
      <p>Contact: {property.contactNumber}</p>
    </div>
  );
};

export default PropertyCard;
