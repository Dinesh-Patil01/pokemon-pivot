

// import PokemonCard from '@/components/PokemonCard';

// const Home = () => {
//   const samplePokemon = {
//     id: 1,
//     name: 'Bulbasaur',
//     types: ['Grass', 'Poison'],
//     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <PokemonCard {...samplePokemon} />
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import PokedexGrid from '../components/PokedexGrid';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <PokedexGrid />
    </div>
  );
};

export default Home;
