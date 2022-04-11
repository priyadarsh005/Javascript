import React from 'react';
import './App.css';


const App = ({ items }) => {

    const renderRows = () => {
        return items.map(item => (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        ))
    }

    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

export default App;
