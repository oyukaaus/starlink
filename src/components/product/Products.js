// ProductPage.js
import React from 'react';
import './Product.css';
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp'
import p3 from '../../assets/p3.jpeg'

const ProductPage = () => {
    return (
        <div className="product-page" style={{ marginTop: 40 }}>
            {/* <h1>Product Page</h1> */}
            <div className="product-container">
                {/* First Product */}
                <div className="product">
                    <img src={p2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description of Product 2</p>
                    <button>Add to Cart</button>
                </div>
                {/* Second Product */}
                <div className="product">
                    <img src={p3} alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description of Product 3</p>
                    <button>Add to Cart</button>
                </div>
                {/* Third Product */}
                <div className="product">
                    <img src={p2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description of Product 2</p>
                    <button>Add to Cart</button>
                </div>
                {/* Fourth Product */}
                <div className="product">
                    <img src={p3} alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description of Product 3</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src={p2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description of Product 2</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src={p3} alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description of Product 3</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
