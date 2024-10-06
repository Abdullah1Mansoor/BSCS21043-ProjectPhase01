
import { useState } from 'react';
import './Categories.css';
// this is my seacrh bar component
const Categories = () => {
  const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Unique Stays'];
  const [activeCategory, setActiveCategory] = useState('Beachfront');

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeCategory ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
