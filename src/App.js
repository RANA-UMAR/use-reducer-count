import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';
const allCategories =['All',...new Set(data.map((data)=> data.category))] 
  console.log(allCategories);

  
const App=()=> {
  const [menuItems, setMenuItems] = useState(data);
  const [category, setCategories] = useState(allCategories);

  const filterItems = (categlog) => {
    if (categlog === 'All') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((currElement) => currElement.category === categlog);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className='text-center font-bold text-3xl'>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;