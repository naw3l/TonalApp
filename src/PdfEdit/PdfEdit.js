import React from "react";

class PdfEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  handleChangeProduct(e) {
    this.props.onProductChange(e.target.value);
  }

  handleChangePrice(e) {
    this.props.onPriceChange(e.target.value);
  }

  render() {
    const product = this.props.product;
    const price = this.props.price;
    return (
      <div className="pdf-edit">
        <h1>PdfEdit</h1>
        <ul>
          <li>
            <input value={product} name="product" onChange={e => this.handleChangeProduct(e)} />
          </li>
          <li>
            <input value={price} name="price" onChange={e => this.handleChangePrice(e)} />
          </li>
        </ul>
      </div>
    );
  }
}

export default PdfEdit;
