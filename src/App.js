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

const OkendoStarRating = ({ productId }) => {
  const widgetContainer = useRef(null);

  const initialiseWidget = () =>
    window.okeWidgetApi.initWidget(widgetContainer.current);

  useEffect(() => {
    if (window.okeWidgetApi?.initWidget) {
      initialiseWidget();
    } else {
      document.addEventListener('oke-script-loaded', initialiseWidget);
    }

    return () => {
      document.removeEventListener('oke-script-loaded', initialiseWidget);
    }
    
  }, [productId]);

  return (
    <div
      ref={widgetContainer}
      data-oke-star-rating
      data-oke-reviews-product-id={`shopify-${productId}`}
    ></div>
  );
};

const OkendoReviewsWidget = ({ productId }) => {
  const widgetContainer = useRef(null);

  const initialiseWidget = () =>
    window.okeWidgetApi.initWidget(widgetContainer.current);

  useEffect(() => {
    if (window.okeWidgetApi?.initWidget) {
      initialiseWidget();
    } else {
      document.addEventListener('oke-script-loaded', initialiseWidget);
    }

    return () => {
      document.removeEventListener('oke-script-loaded', initialiseWidget);
    }

  }, [productId]);

  return (
    <div
      ref={widgetContainer}
      data-oke-widget
      data-oke-reviews-product-id={`shopify-${productId}`}
    ></div>
  );
};

export default App;
