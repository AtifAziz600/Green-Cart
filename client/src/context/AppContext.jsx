import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true); // in here with the conditinal rendering method we can say that user is logged in or not same with the profile image backend
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setProducts([]);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
