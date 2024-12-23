
// 'use client';

// import React, { useState, useEffect, lazy, Suspense } from 'react';

// const PokemonCard = lazy(() => import('../components/PokemonCard'));

// interface Pokemon {
//   id: number;
//   name: string;
//   types: string[];
//   sprite: string;
// }

// const SkeletonCard: React.FC = () => (
//   <div className="bg-gray-200 rounded-lg p-4 animate-pulse shadow-lg">
//     <div className="h-24 bg-gray-300 rounded mb-4"></div>
//     <div className="h-6 bg-gray-300 rounded mb-2"></div>
//     <div className="h-4 bg-gray-300 rounded"></div>
//   </div>
// );

// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     console.error('Error Boundary Caught:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div className="text-red-500 text-center">Something went wrong. Please try again later.</div>;
//     }
//     return this.props.children;
//   }
// }

// const PokedexGrid: React.FC = () => {
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
//   const [search, setSearch] = useState('');
//   const [sortOption, setSortOption] = useState<'name' | 'id'>('id');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const itemsPerPage = 10;

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
//         const data = await response.json();
//         const formattedData = data.results.map((pokemon: any, index: number) => ({
//           id: index + 1,
//           name: pokemon.name,
//           types: ['unknown'],
//           sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
//         }));
//         setPokemonList(formattedData);
//       } catch (error) {
//         console.error('Failed to fetch Pokémon:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemon();
//   }, []);

//   const filteredPokemon = pokemonList
//     .filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => (sortOption === 'name' ? a.name.localeCompare(b.name) : a.id - b.id));

//   const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
//   const displayedPokemon = filteredPokemon.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <ErrorBoundary>
//       <div
//         className="min-h-screen w-full bg-cover bg-center flex flex-col items-center"
//         style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/abstract-cyberpunk-gaming-wallpaper-background-3d-illustration-rendering-metaverse-virtual-reality-game_42100-4781.jpg")` }}
//       >
//         <div className="container mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg min-h-screen">
//         <h1 className="text-3xl font-bold text-center mb-8">Pokémon Explorer</h1>
//           <div className="flex justify-between mb-6 items-center">
//             <input
//               type="text"
//               placeholder="Search Pokémon"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="border border-gray-300 rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/4"
//             />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value as 'name' | 'id')}
//               className="border border-gray-300 rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4"
//             >
//               <option value="id">Sort by ID</option>
//               <option value="name">Sort by Name</option>
//             </select>
//           </div>

//           {loading ? (
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {Array.from({ length: itemsPerPage }).map((_, index) => (
//                 <SkeletonCard key={index} />
//               ))}
//             </div>
//           ) : (
//             <Suspense fallback={<div>Loading Pokémon...</div>}>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {displayedPokemon.map((pokemon) => (
//                   <PokemonCard key={pokemon.id} {...pokemon} className="hover:scale-105 transition-transform shadow-lg" />
//                 ))}
//               </div>
//             </Suspense>
//           )}

//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 mr-2 rounded-lg shadow ${
//                 currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
//               }`}
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-lg shadow ${
//                 currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default PokedexGrid;


'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';

const PokemonCard = lazy(() => import('../components/PokemonCard'));

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const SkeletonCard: React.FC = () => (
  <div className="bg-gray-200 rounded-lg p-4 animate-pulse shadow-lg">
    <div className="h-24 bg-gray-300 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
  </div>
);

// Define props for ErrorBoundary, including `children`.
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 text-center">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const PokedexGrid: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState<'name' | 'id'>('id');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();
        const formattedData = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          types: ['unknown'],
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemonList(formattedData);
      } catch (error) {
        console.error('Failed to fetch Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortOption === 'name' ? a.name.localeCompare(b.name) : a.id - b.id));

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const displayedPokemon = filteredPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <ErrorBoundary>
      <div
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/abstract-cyberpunk-gaming-wallpaper-background-3d-illustration-rendering-metaverse-virtual-reality-game_42100-4781.jpg")`,
        }}
      >
        <div className="container mx-auto p-6  bg-opacity-80 shadow-lg rounded-lg min-h-screen">
          <h1 className="text-5xl font-bold text-center mb-8 text-white">"Pokémon Explorer"</h1>
          <div className="flex justify-between mb-6 items-center">
            <input
              type="text"
              placeholder="Search Pokémon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/4"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'name' | 'id')}
              className="border border-gray-300 rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4"
            >
              <option value="id">Sort by ID</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <Suspense fallback={<div>Loading Pokémon...</div>}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {displayedPokemon.map((pokemon) => (
                  <PokemonCard
                    key={pokemon.id}
                    {...pokemon}
                    className="hover:scale-105 transition-transform shadow-lg"
                  />
                ))}
              </div>
            </Suspense>
          )}

          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 mr-2 rounded-lg shadow ${
                currentPage === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg shadow ${
                currentPage === totalPages
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default PokedexGrid;
