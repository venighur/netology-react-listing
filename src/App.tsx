import React from 'react';
import './App.css';
import Listing from './components/Listing';
import esty from './etsy.json';
import { Item } from './types/Item';

function App() {
  const items = esty.filter(item => item.state === "active").map(item => {
    return {
      listingId: item.listing_id,
      url: item.url,
      img: item.MainImage && item.MainImage.url_170x135,
      title: item.title,
      currencyCode: item.currency_code,
      price: item.price,
      quantity: item.quantity
    }
  });

  return (
    <Listing items={items as Item[]} />
  );
}

export default App;
