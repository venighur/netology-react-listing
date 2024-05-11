import React from "react";
import { Item } from '../types/Item';

type ListingProps = {
  items: Item[];
}

function Listing({ items = [] }: ListingProps) {
  const quantityClassname = (q: number) => {
    if (q < 10) {
      return "level-low";
    } else if (q > 20) {
      return "level-high";
    } else {
      return "level-medium";
    }
  };

  const currencyByCode = (code: string) => {
    if (code === "USD") {
      return "$";
    } else if (code === "EUR") {
      return "€";
    } else {
      return `${code} `;
    }
  };

  const cutTitle = (title: string) => {
    if (title.length > 50) {
      return title.slice(0, 50) + "...";
    }

    return title;
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.listingId} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.img} alt={item.title}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{cutTitle(item.title)}</p>
            <p className="item-price">{currencyByCode(item.currencyCode)}
              {item.price}
            </p>
            <p className={`item-quantity ${quantityClassname(item.quantity)}`}>
              {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing;