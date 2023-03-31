import { Grid } from "@mui/material";
import "./Contact.css";
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts',
//   params: { query: 'wsgr.com' },
//   headers: {
//     'X-RapidAPI-Key': '787a25d693msh1b0ea50ffd5c24bp1bf72djsn137123751a26',
//     'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
//   }
// };

// // Send a GET request to the API endpoint with the query parameter
// axios(options)
//   .then(response => {
//     // Handle successful response here
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle error here
//     console.error('Error sending request:', error);
//   });

const Contact = () => {
  return <>

  
<div  className="container">
    <form method="post" action="/contact">
    <h1  className="text-center">Contact Us</h1>
    {/* {% csrf_token %} */}
        <div  className="form-group">
            <label for="name">Name</label>
            <input type="text"  className="form-control" id="name" name="name" placeholder="Enter your Name"/>
        </div>

        <div  className="form-group">
            <label for="email">Email address</label>
            <input type="email"  className="form-control" id="email" name="email" placeholder="Enter Your Email"/>
        </div>
        
        <div  className="form-group">
            <label for="phone">Phone Number</label>
            <input type="phone"  className="form-control" id="phone" name="phone" placeholder="Enter Your Phone Number"/>
        </div>      
        
        <div  className="form-group">
            <label for="desc">Tell me about what you want to contact me for...</label>
            <textarea  className="form-control" id="message" rows="3" name="message"></textarea>
        </div>
        
        <div className="butt">
        <button  className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>

</div>
  </>;
};

export default Contact;
