import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({
  availableTypes,
  selectedTypes,
  onTypeSelect,
}) => {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter(t => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-4 py-2 rounded ${
            selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
