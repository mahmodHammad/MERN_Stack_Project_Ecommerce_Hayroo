import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import RecommendedProducts from "./recommendedProducts";


const pageContext = createContext();

const PageContent = () => {
  return (
    <Fragment>
      
    {/* Category, Search & Filter Section */}
    <section className="m-4 md:mx-8 md:my-10">
      <h1 style={{marginTop:"150px",textAlign:"center"}}>
       Your Recommended Products
      </h1>
    </section>
    {/* Product Section */}
    <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
 
      <RecommendedProducts />
    </section>
  </Fragment>
  );
};

export const RecommendPage = () => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
    return (
    <Fragment>
       <pageContext.Provider value={{ data, dispatch }}>
        <Layout children={<PageContent />} />
        </pageContext.Provider>
    </Fragment>
    );
  
};

export default RecommendPage;




