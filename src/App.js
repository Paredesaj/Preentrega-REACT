import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { CardList } from './components/CardList';
import Loader from './components/Loader';
import ItemDetail from './components/ItemDetail';
import QuienesSomos from './components/QuienesSomos';
import { ItemProvider } from './ItemContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (item, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const getTotalItems = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    new Promise(resolve => setTimeout(() => resolve(), 3000))
      .then(() => {
        return fetch('https://66ac0d49f009b9d5c730fd4f.mockapi.io/stock');
      })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ItemProvider>
      <Router>
        <div>
          <NavBar cartArticle={getTotalItems()} />
          <Routes>
            <Route path="/" element={
              <>
                <ItemListContainer greetings="Bienvenidos a " greetings1="STADIUM" />
                {loading ? <Loader /> : <CardList data={data} loading={loading} addToCart={addToCart} />}
              </>
            } />
            <Route path="/detail/:id" element={<ItemDetail />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
          </Routes>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
