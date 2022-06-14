import React from 'react'
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import './style.css';

const ProductListPage = (props) => {

  const params = useParams();
  const [searchParams] = useSearchParams();

  const slug = params.slug;
  const cid = searchParams.get('cid');
  const type = searchParams.get('type');

  // console.log('params', params.slug)
  // console.log('searchParams', searchParams.get('cid'))

  const renderProduct = () => {
    let content = null;
    switch (type) {
      case 'store':
        content = <ProductStore {...props} slug={slug} />;
        break;
      case 'page':
        content = <ProductPage {...props} cid={cid} type={type} />
        break;
      default:
        content = null;
    }

    return content;
  }

  return (
    <Layout>
      {renderProduct()}
    </Layout>
  )

}

export default ProductListPage 