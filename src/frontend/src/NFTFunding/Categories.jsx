import React from 'react';
import Card from './CardNFT';
import CategoriesBar from './CategoriesBar';
import masicon from "../assets/mas.png"; // Importa el icono aquí

const Categories = () => {
  const collections = [
    {
      title: 'Tecate Comuna',
      description: '9.2K items - 10.8K ETH',
    },
    // Otros elementos de colección pueden ir aquí si los tienes
  ];

  return (
    <div className="bg-[#0b0c0c] text-white p-4">
  <div className="flex items-center justify-between">
    {/* Título "Explore collections" a la izquierda */}
    <h2 className="text-5xl font-bold mb-4 mt-8 ml-8">Explore collections</h2>

    {/* Botón "Create a Project" con el icono al lado */}
    <div className="flex items-center">
      <button
        type="button"
        className="mr-4 text-white bg-secondary hover:bg-secondary-ligth focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 text-center md:text-left dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center"
      >
        <img src={masicon} className="h-6 w-6 mr-2" alt="Add Icon" /> {/* Añade margen a la derecha del icono */}
        Create a Project
      </button>
    </div>
  </div>
  
  <CategoriesBar />
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
    {collections.map((collection, index) => (
      <Card
        key={index}
        title={collection.title}
        description={collection.description}
        image={collection.image}
      />
    ))}
  </div>
</div>

  );
};

export default Categories;
