import React from 'react';

// Example JSON data (could be fetched from an API or stored in a separate file)
const cardData = [
  {
    id: 1,
    title: "Hypocritical Face",
    image: "https://storage.googleapis.com/a1aa/image/PdLfsBfqOmmDp0zeaCsMMA8WyxMcNLwKuB5GexNht9kRqO3PB.jpg",
    description: "An abstract art of a face with multiple layers."
  },
  {
    id: 2,
    title: "Monster Gravity",
    image: "https://storage.googleapis.com/a1aa/image/HskVyt3CdTp4BJolktO3Jj3oPxinlkvJ6oyoFb6ne8DT15eTA.jpg",
    description: "A colorful abstract art with various characters."
  },
  {
    id: 3,
    title: "Vibrant Geometrics",
    image: "https://storage.googleapis.com/a1aa/image/fPTHWUhB2i0YNS779Loyz2mzrW0BrdXptR6CmJFeH8Uiqz9TA.jpg",
    description: "Abstract art with vibrant colors and geometric shapes."
  },
  {
    id: 4,
    title: "Hypocritical Face",
    image: "https://storage.googleapis.com/a1aa/image/PdLfsBfqOmmDp0zeaCsMMA8WyxMcNLwKuB5GexNht9kRqO3PB.jpg",
    description: "An abstract art of a face with multiple layers."
  },
  {
    id: 5,
    title: "Monster Gravity",
    image: "https://storage.googleapis.com/a1aa/image/HskVyt3CdTp4BJolktO3Jj3oPxinlkvJ6oyoFb6ne8DT15eTA.jpg",
    description: "A colorful abstract art with various characters."
  },
  {
    id: 6,
    title: "Vibrant Geometrics",
    image: "https://storage.googleapis.com/a1aa/image/fPTHWUhB2i0YNS779Loyz2mzrW0BrdXptR6CmJFeH8Uiqz9TA.jpg",
    description: "Abstract art with vibrant colors and geometric shapes."
  }
];

const AITab = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <a className="text-white font-semibold" href="#">
            Latest
          </a>
          <a className="text-gray-400" href="#">
            Popular
          </a>
          <a className="text-purple-500" href="#">
            Premium
          </a>
        </div>
        <div>
          <i className="fas fa-sliders-h text-white"></i>
        </div>
      </nav>

      {/* Grid with dynamic cards from JSON */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg border border-black p-4 text-center max-w-xs mx-auto">
            <div className="flex justify-center items-center mb-4">
              <img
                alt={card.title}
                className="rounded-t-lg"
                height="150"
                src={card.image}
                width="250"
              />
            </div>
            <h2 className="text-gray-900 font-semibold mb-2 text-sm">{card.title}</h2>
            <p className="text-gray-600 mb-4 text-xs">{card.description}</p>
            <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-full border border-black hover:bg-gray-100 text-xs">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AITab;