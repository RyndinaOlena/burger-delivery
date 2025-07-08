import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';
import SuccessModal from './components/SuccessModal';


function App() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOrderComplete = () => {
    setIsSuccessModalOpen(true);
    clearCart();
  };
  

  return (
    <Router >
      <div className="min-h-screen bg-gray-50">
        <Header 
          cartCount={getTotalItems()} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/menu" 
              element={<MenuPage onAddToCart={addToCart} />} 
            />
          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          totalPrice={getTotalPrice()}
          onOrderNow={() => {
            setIsCartOpen(false);
            setIsOrderModalOpen(true);
          }}
        />

        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          cartItems={cartItems}
          totalPrice={getTotalPrice()}
          onOrderComplete={handleOrderComplete}
        />

        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;