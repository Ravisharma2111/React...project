import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard';


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category)=> {
const updatedList =   Menu.filter((curElem) => {
return curElem.category === category;
})
setMenuData(updatedList);
  };

  return (
    <>
    <nav className='navbar'>
    <div className='btn-group'>
    <button className='btn-group__item' onClick={ () =>  filterItem('breakfast')}>breakfast</button>
    <button className='btn-group__item'onClick={ () => filterItem('lunch')}>Lunch</button>
    <button className='btn-group__item' onClick={ () =>filterItem('evening')} >evening</button>
    <button className='btn-group__item' onClick={ () => filterItem('dinner')} >dinner</button>
    <button className='btn-group__item' onClick={  () => setMenuData('Menu')} >All</button>
    
    
    </div>

    </nav>

    <MenuCard MenuCard={MenuCard} />
    </>
    );
  };

export default Resturant;








