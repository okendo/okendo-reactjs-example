import React, { Component, useEffect, useRef } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Okendo Cosmetics
        </header>
        <div className="okendo-widget-container">
          <h2>Star Rating</h2>
          <OkendoStarRating productId="11516559628"></OkendoStarRating>
        </div>
        <div className="okendo-widget-container">
          <h2>Reviews Widget</h2>
          <OkendoReviewsWidget productId="11516559628"></OkendoReviewsWidget>
        </div>
      </div>
    );
  }
}

const OkendoStarRating = (props) => {
  const widgetContainer = useRef(null);

  const initialiseReviewsWidget = () => {
    window.okeWidgetApi.initWidget(widgetContainer.current);
  }

  useEffect(() => {
    if (window.okeWidgetApi) {
      initialiseReviewsWidget();
    }
    else {
      window.addEventListener('oke-script-loaded', initialiseReviewsWidget);
    }
  }, []);

  return (
    <div ref={widgetContainer} data-oke-star-rating data-oke-reviews-product-id={`shopify-${props.productId}`}></div>
  );
}

const OkendoReviewsWidget = (props) => {
  const widgetContainer = useRef(null);

  const initialiseReviewsWidget = () => {
    window.okeWidgetApi.initWidget(widgetContainer.current);
  }

  useEffect(() => {
    if (window.okeWidgetApi) {
      initialiseReviewsWidget();
    }
    else {
      window.addEventListener('oke-script-loaded', initialiseReviewsWidget);
    }
  }, []);

  return (
    <div ref={widgetContainer} data-oke-widget data-oke-reviews-product-id={`shopify-${props.productId}`}></div>
  );
}

export default App;
