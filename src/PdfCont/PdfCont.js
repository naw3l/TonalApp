import React from "react";
import './PdfCont.css';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfSave from "../PdfSave/PdfSave";
import PdfEdit from "../PdfEdit";

class PdfCont extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.state = { product: 'Hamburguesa', price: '10' };
  }

  handleProductChange(product) {
    this.setState({product: product});
  }

  handlePriceChange(price) {
    this.setState({price: price});
  }

  render() {
    const product = this.state.product;
    const price = this.state.price;
    return (
      <div>
        <div className='PdfContainer'>
        <div className='PdfViewer'>
          <PDFViewer>
            <PdfSave 
            product={product}
            price={price}/>
          </PDFViewer>
        </div>
        <div className='PdfEdit'>
          <PdfEdit 
            product={product} 
            price={price}
            onProductChange={this.handleProductChange} 
            onPriceChange={this.handlePriceChange}></PdfEdit>
        </div>
        </div>
        <div className='PdfButton'>
          <PDFDownloadLink document={<PdfSave  
            product={product}
            price={price}/>} fileName={"Tonal.pdf"}> 
            <button> Descargar PDF </button> 
          </PDFDownloadLink> 
        </div>
      </div>
    );
  }
}

export default PdfCont;