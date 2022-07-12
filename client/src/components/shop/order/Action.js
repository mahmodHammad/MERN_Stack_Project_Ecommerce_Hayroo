import { createOrder, handlePromoCode } from "./FetchApi";

import { applyPromo} from "../partials/Mixins";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
  try {
    let responseData = await getBrainTreeToken();
    if (responseData && responseData) {
      setState({
        clientToken: responseData.clientToken,
        success: responseData.success,
      });
      console.log(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkPromoCode = async(code)=>{
   const d =  handlePromoCode(code)
   const {active, discount} = d
  //  TODO uncomment
  //  if(active){
    if(true){
    const afterDiscount = applyPromo(10/100)
    console.log("afterDiscount",afterDiscount)
    // const newPrice = (discount/100)
   }else{
    alert("not valid PromoCode")
   }
   console.log("DDDD",d)
   console.log("active",active)
   console.log("discount",discount)

}
export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {

  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    let nonce;
    let paymentData = {
      amountTotal: totalCost(),
      paymentMethod: "Cash",
    };
    
       
        getPaymentProcess(paymentData)
          .then(async (res) => {
            if (res) {
              let orderData = {
                allProduct: JSON.parse(localStorage.getItem("cart")),
                user: JSON.parse(localStorage.getItem("jwt")).user._id,
                amount: totalCost(),
                transactionId: "123444",
                address: state.address,
                phone: state.phone,
              };
              try {
                let resposeData = await createOrder(orderData);
                if (resposeData.success) {
                  localStorage.setItem("cart", JSON.stringify([]));
                  dispatch({ type: "cartProduct", payload: null });
                  dispatch({ type: "cartTotalCost", payload: null });
                  dispatch({ type: "orderSuccess", payload: true });
                  setState({ clientToken: "", instance: {} });
                  dispatch({ type: "loading", payload: false });
                  return history.push("/");
                } else if (resposeData.error) {
                  console.log(resposeData.error);
                }
              } catch (error) {
                console.log(error);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      
      
  }
};


/*

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {
  console.log("HEYYYYY",state);
  // TODO REVERT
  // if (!state.address) {
    if (false) {
    setState({ ...state, error: "Please provide your address" });
  } else if (false) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    let nonce;
  console.log("state.instance.requestPaymentMethod",
   state.instance.requestPaymentMethod);


        // dispatch({ type: "loading", payload: true });
        nonce = data.nonce;
        // let paymentData = {
        //   amountTotal: totalCost(),
        //   paymentMethod: "paypal",
        // };
        // console.log("paymentData",paymentData)
        // getPaymentProcess(paymentData)
        
          // dispatch({ type: "loading", payload: false });

            if (true) {
              let orderData = {
                allProduct: JSON.parse(localStorage.getItem("cart")),
                user: JSON.parse(localStorage.getItem("jwt")).user._id,
                amount: 100,
                transactionId: "efwufhwaiuf",
                address: state.address,
                phone: state.phone,
              };

              console.log("orderData",orderData)
                let resposeData = await createOrder(orderData);
                console.log("resposeData",resposeData)
                if (true) {
                  localStorage.setItem("cart", JSON.stringify([]));
                  dispatch({ type: "cartProduct", payload: null });
                  dispatch({ type: "cartTotalCost", payload: null });
                  dispatch({ type: "orderSuccess", payload: true });
                  setState({ clientToken: "", instance: {} });
                  dispatch({ type: "loading", payload: false });
                  return history.push("/");
                } else if (resposeData.error) {
                  console.log(resposeData.error);
                }
              
            }
        
      
      // .catch((error) => {
      //   console.log(error);
      //   setState({ ...state, error: error.message });
      // });
  }
};
*/