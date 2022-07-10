import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";


const pageContext = createContext();

const PageContent = () => {
  return (
    <Fragment>
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-10">
       
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
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




