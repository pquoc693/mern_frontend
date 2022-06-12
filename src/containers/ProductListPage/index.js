import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';

import {
  useParams,
} from "react-router-dom";

import './style.css';

const ProductListPage = (props) => {

  const product = useSelector(state => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000
  });
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const { slug } = params;
    dispatch(getProductsBySlug(slug));
  }, []);
  console.log('product', product)
  return (
    <Layout>
      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardHeader">
                <div>{params.slug} mobile under {priceRange[key]}</div>
                <button>view all</button>
              </div>
              <div style={{ display: 'flex' }}>
                {
                  product.productsByPrice[key].map((product, index) =>
                    <div className="productContainer" key={index}>
                      <div className="productImgContainer">
                        <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                      </div>
                      <div className="productInfo">
                        <div style={{ margin: '5px 0' }}>{product.name}</div>
                        <div>
                          <span>4.3</span>&nbsp;
                          <span>3353</span>
                        </div>
                        <div className="productPrice">{product.price}</div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          );
        })
      }
    </Layout>
  )

}

export default ProductListPage 