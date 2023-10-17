import React from 'react'

const Menu = ({items}) => {

    return (
        <>
{items.map((data)=>{ 
    const {id,title,price,img,category,desc} = data;
    return(
        
    
        <div key={id} className='grid grid-cols-6 m-5'>

        <img src={img} alt={title} width="200px"/>
        <h1 className='font-bold'>{title}</h1>
        <h1 className='font-semibold'>$ {price}</h1>
        <h1 className='font-semibold'>{category}</h1>
        <h1>{desc}</h1>
</div>

    )

})}
    </>
  )
}

export default Menu