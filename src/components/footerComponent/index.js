import { Fragment } from 'react';
import './style.css';

const FooterComponent = () =>{
  return(
    <Fragment>
      <hr/>
      <div className="total-price-container">
        <h2>Total Price: </h2>
        <h2>₹0.00</h2>
      </div>
      <button className="clear-all-btn">Clear All</button>
    </Fragment>
  );
}

export default FooterComponent;