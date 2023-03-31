import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
const products = [
  { id: 1, name: "GOOGL", price: 100000, limit: 5 },
  { id: 2, name: "APPLE", price: 200, limit: 5 },
  { id: 3, name: "SCL", price: 300, limit: 5 },
];
const Dashboard = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  const [coins, setCoins] = useState(1000000);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const handlePurchase = (productId) => {
    const product = products.find((p) => p.id === productId);

    // Check if user has enough coins
    if (coins < product.price) {
      alert("Insufficient coins!");
      return;
    }

    // Check if user has reached purchase limit for this product
    const purchasedProductCount = purchasedProducts.filter(
      (p) => p.id === productId
    ).length;
    if (purchasedProductCount >= product.limit) {
      alert("You have reached the purchase limit for this product!");
      return;
    }

    // Deduct coins from user balance and add purchased product to list
    setCoins(coins - product.price);
    setPurchasedProducts([...purchasedProducts, product]);
  };
  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h4'>Welcome</Typography>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        <Typography variant='h6'>Coins: {userData.coins}</Typography>
        <div>
          
      <h1>Dashboard</h1>
      <p>Coins: {coins}</p>
      <h2>Available products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} coins
            <button onClick={() => handlePurchase(product.id)}>Buy</button>
          </li>
        ))}
      </ul>
      <h2>Purchased products:</h2>
      <ul>
        {purchasedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} coins
          </li>
        ))}
      </ul>
        </div>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;