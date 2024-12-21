
import React from 'react';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <img src={sprite} alt={name} className="w-full h-24 object-contain mb-4" />
      <h2 className="text-xl font-bold text-gray-700 text-center">{name}</h2>
      <p className="text-center text-gray-500">ID: {id}</p>
      <div className="flex justify-center space-x-2 mt-2">
        {types.map((type) => (
          <span
            key={type}
            className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
