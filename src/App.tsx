import React from 'react';

import './styles/app.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleGoods from "./pages/SingleGoods";

import data from './utils/data.json'

function App() {
  return (
      <div className="wrapper">
          <div className="container">
              <SingleGoods
                  categories={data[0].categories}
                  characteristics={data[0].characteristics}
                  description={data[0].description}
                  id={data[0].id}
                  media={data[0].media}
                  name={data[0].name}
                  price={data[0].price}
                  tags={data[0].tags}
              />
          </div>
      </div>
  );
}

export default App;
