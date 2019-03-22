import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Okendo Cosmetics
        </header>
        <div className="okendo-widget-container">
          <OkendoReviewsWidget productId="11516559628"></OkendoReviewsWidget>
        </div>
      </div>
    );
  }
}

class OkendoReviewsWidget extends Component {
  render() {
    return <div id="oke-reviews-widget"
      data-oke-reviews-widget
      data-oke-reviews-product-id={`shopify-${this.props.productId}`}>
    </div>;
  }

  componentDidMount() {
    const reviewsWidget = window.document.querySelector('#oke-reviews-widget');
    window.okendoInitApi.initReviewsWidget(reviewsWidget);
  }
}

export default App;
