import { Grid } from "@mui/material";
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import "./crypto.js"
import "./home.css";
// const API_KEY='c72935ad55414fff8970f610a1230096';
// const symbols = ['AAPL', 'GOOGL', 'BTC/USD'];
// const interval = '1day';
//const time_period = 1;

const Home = () => {
  const [stockData, setStockData] = useState({});
  const [cryptoData, setCryptoData] = useState({});
  const [error, setError] = useState(null);

  const stockSymbol = 'AAPL';
  const cryptoSymbol = 'BTC/USD';

  const API_KEY = 'c72935ad55414fff8970f610a1230096';

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/quote?symbol=${stockSymbol}&apikey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }

        const data = await response.json();
        setStockData(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/quote?symbol=${cryptoSymbol}&apikey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch crypto data');
        }

        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    fetchStockData();
    fetchCryptoData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }



  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        {/* <div className="home1">
       
        <div className="home"><h3>Welcome To The World of Stock Market</h3></div>
        </div> */}

        <p></p>
      </Grid>
    </Grid>
    <div className="home1">

      <div className="home"><h2>Welcome To The World of Stock Market</h2></div>
    </div>
    <hr />
    <section>
      <div className="video-slider video-slider--fullscreen"><video playsinline src="https://jilllong.us1.advisor.ws/sites/jilllong.us1.advisor.ws/files/hiking.mp4" loop="1" muted="1" autoplay="1" poster="https://jilllong.us1.advisor.ws/sites/jilllong.us1.advisor.ws/files/hiking.jpg" type="video/mp4"></video>
        <div className="video-slider__caption video-slider--fullscreen__caption">

          {/* <button>Start Here</button> */}
        </div>
      </div>
    </section>

    <div className="stock_data">
      <h2>Stock Data</h2>
      <p>High Price: {stockData.high}</p>
      <p>Low Price: {stockData.low}</p>
      <p>Company Name: {stockData.name}</p>
      <p className="Para">
        The stock market refers to the collection of markets and exchanges where publicly-traded companies' stocks are bought and sold. It is a crucial component of the global financial system, providing companies with a way to raise capital and investors with a way to invest in those companies. The stock market can be highly volatile, with stock prices rising and falling rapidly based on a variety of factors such as economic indicators, company performance, and geopolitical events. Investors use a variety of strategies to try and predict future price movements and maximize their returns, including technical analysis, fundamental analysis, and market timing. However, investing in the stock market also carries significant risks, and it is important to carefully consider one's financial goals and risk tolerance before making any investment decisions.
      </p>
      {/* <h2>Crypto Data</h2>
      <p>Price: {cryptoData.price}</p>
      <p>Exchange Rate: {cryptoData.exchange_rate}</p>
      <p>Market Cap: {cryptoData.market_cap}</p> */}
    </div>

    <div className="start">
      <h1 className="text-align-center">Are You Ready To Be Intentional About Your Financial Future?</h1>
      <p className="text-align-center"><a class="button primary" href="#block-intentionalliving" title="start here">Start Here</a> </p>
    </div>

    {/* </section> */}
    {/* <footer>
          <div className="img121">
          <a href="https://instagram.com/1310amit21?igshid=ZDdkNTZiNTM=" target="_blank"><div className="img"><img src="https://cdn-icons-png.flaticon.com/512/15/2111463.png" ></img></div></a>
          <a href="https://instagram.com/1310amit21?igshid=ZDdkNTZiNTM=" target="_blank"><div className="img"><img src="https://cdn-icons-png.flaticon.com/15/15/124010.png" ></img></div></a>
          <a href="https://instagram.com/1310amit21?igshid=ZDdkNTZiNTM=" target="_blank"><div className="img"><img src="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" ></img></div></a>
          <a href="https://instagram.com/1310amit21?igshid=ZDdkNTZiNTM=" target="_blank"><div className="img"><img src="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" ></img></div></a>
          </div>
        </footer> */}
    {/* <crypto/> */}
    {/* <div className="dummy_page">
      Mobile responsive footer
    </div> */}


    {/* <div className="video-slider video-slider--fullscreen"><video playsinline src="https://jilllong.us1.advisor.ws/sites/jilllong.us1.advisor.ws/files/hiking.mp4" loop="1" muted="1" autoplay="1" poster="https://jilllong.us1.advisor.ws/sites/jilllong.us1.advisor.ws/files/hiking.jpg" type="video/mp4"></video>
      <div className="video-slider__caption video-slider--fullscreen__caption"> */}
    {/* <h1 className="text-align-center">Are You Ready To Be Intentional About Your Financial Future?</h1>

        <p className="text-align-center"><a class="button primary" href="#block-intentionalliving" title="start here">Start Here</a></p>

      </div>
      </div> */}

    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Social</li>
            <h1>Products</h1>
            <li>Get in touch</li>
          </ul>
        </div>


        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </div>
        <div className="col">
          <h1>Quick links</h1>
          <ul>
            <li>Contact us</li>
            <li>Invest</li>
            <li>Open Stock</li>
          </ul>
        </div>
        <div className="col social">
          <h1>Social</h1>
          <ul>
            {/* <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;" /></li>
            <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;" /></li>
            <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;" /></li> */}
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </>;
};

export default Home;