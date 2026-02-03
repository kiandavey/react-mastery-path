import { useState, useEffect } from 'react';

export default function Arena4() {

    const [money, setMoney] = useState(0);
    const [inventory, setInventory] = useState([
                        {id: 1, name: "Soda", price: 2, stock: 5}, 
                        {id: 2, name: "Chips", price: 1, stock: 0}, 
                        {id: 3, name: "Candy", price: 3, stock: 10}]);
    const [statusMessage, setStatusMessage] = useState("");

    function purchase(item) {
        if(item.stock <= 0) {
            setStatusMessage("Out of stock")
            return;
        } 

        if (money < item.price) { 
           setStatusMessage("Need more money")
           return;
        } 

        setMoney(prev => prev - item.price);

        setInventory(prevInventory => 
            prevInventory.map(i => 
                i.id === item.id
                ? {...i, stock: i.stock - 1}
                : i
            )
        );

        setStatusMessage(`Dispensing ${item.name}`);
    }

    useEffect(() => {
        if(!statusMessage) return;

        const timer = setTimeout(() => {
            setStatusMessage("");
        }, 3000);

        return () => clearTimeout(timer);

    }, [statusMessage]);

    return (
        <div>
            <h2 style={{color: 'orange'}}>Arena Challenge 4: Vending</h2>

            <div>
                <p>Current Balance: {money}$</p>
                <button onClick={() => setMoney(money + 1)}>Insert 1$</button>
                <button onClick={() => {setMoney(0)}}>Refund</button>
            </div>

            <div>
                <strong>Inventory: </strong>
                <ul>
                    {inventory.map(item => (
                        <li key={item.id}>
                        <strong onClick={() => purchase(item)}>Name: </strong> {item.name} <br/>
                        <strong>Price: </strong> {item.price}$<br/>
                        <strong>Stock: </strong> {item.stock} 
                        </li>
                    ))}
                </ul>
            </div>

            <strong>Status Message: {statusMessage}</strong>

        </div>
    );
}