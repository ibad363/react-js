import React, { useState } from 'react'

function ShoppingList() {
    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newItem = {
            name,
            quantity
        }

        setItems((prevList) => ([...prevList, newItem]))

        setName("")
        setQuantity("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder='Item Name' value={name} onChange={e => setName(e.target.value)}/> <br />
            <input type="text" required placeholder='Item Quantity' value={quantity} onChange={e => setQuantity(e.target.value)}/> <br />
            <button type='submit'>Add Item</button>
        </form>
        <h3>Shopping List</h3>
        {items.map((items,index) => (
            <ul key={index}>
                {items.name} - Quantity {items.quantity}
            </ul>
        ))}
    </div>
  )
}

export default ShoppingList
