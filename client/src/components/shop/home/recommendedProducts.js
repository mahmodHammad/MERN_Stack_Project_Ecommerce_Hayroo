import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const SingleProduct = (props) => {
  // const { data, dispatch } = useContext(HomeContext);
  const products  =[

    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
            "1657651672443_71JlLmT7cJL._AC_SL1001_.jpg",
            "1657651672904_31d0zUixFBL._AC_SL1001_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "phone",
            "Silver"
        ],
        "_id": "62cdc1d9c1584900165664b2",
        "pName": "Joyroom JR-EL115 Wired Earphones with Microphone - Silver",
        "pDescription": "Built in microphone Compatible with multiple devices Comfortable to wear\n\n",
        "pPrice": 67,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:47:53.257Z",
        "updatedAt": "2022-07-12T18:47:53.257Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 50,
        "pImages": [
            "1657651570080_71ttLkQrnfL._AC_SL1500_.jpg",
            "1657651570551_31D6Ekh9YHL._AC_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "usb",
            "battery"
        ],
        "_id": "62cdc173c158490016566497",
        "pName": "Joyroom JR-T012 Dual Ports Output Portable Power Bank",
        "pDescription": "Joyroom JR-T012 Dual USB Power Bank - 10000mAh, 2x USB-A\n\nExtend the working time of your rechargeable devices using this Joyroom JR-T012 power bank!\n\nElegant and lightweight, the Joyroom JR-T012 power bank is made of high-quality ABS and plastic. It has four available ports, two for charging devices (2x USB-A) and two for charging power bank (Type-C, Micro USB). Four LED lights inform about remaining power, and a safety chip preserves your devices from overcharging, over-voltage, etc.",
        "pPrice": 155,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:46:11.551Z",
        "updatedAt": "2022-07-12T18:46:11.551Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 20,
        "pImages": [
            "1657651497181_51g8sUeO-wL._AC_SL1000_.jpg",
            "1657651497219_51Z1jkudQGL._AC_SL1000_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "battery ",
            "phone"
        ],
        "_id": "62cdc129c158490016566493",
        "pName": "Xiaomi Redmi Airdots TWS Bluetooth 5.0 Earphone",
        "pDescription": "Never miss a single beat of your favorite song with the excellent Xiaomi Mi True Wireless Earbuds. Engineered with the advanced Bluetooth 5.0 technology, these earbuds provide a rapid transfer rate. It also modifies the stability of the sound, thereby allowing you to enjoy the sound quality without any interruption. Get relieved from the irritation of tangled wires by using these Xiaomi Mi Earbuds. They offer a perfect fit in your ears so that you can wear them comfortably and enjoy the high-quality sound of timeless music. Thanks to the high-class design of these Xiaomi Earbuds, there is no discrepancy between the sound of the left and right ear. Moreover, the long-lasting battery life of these earbuds makes them your loyal companion for long journeys.",
        "pPrice": 400,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:44:57.550Z",
        "updatedAt": "2022-07-12T18:44:57.550Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 25,
        "pImages": [
            "1657651408191_41HtIBgBqWL._AC_SL1200_ - Copy.jpg",
            "1657651408230_41HtIBgBqWL._AC_SL1200_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "Phone ",
            "Holder"
        ],
        "_id": "62cdc0d0c15849001656648f",
        "pName": "Joyroom JR-OK3 Car Dashboard Phone Holder",
        "pDescription": "Brand: Joyroom\nType: Mobile Phone Car Holder\nThe clamping arm can be adjusted flexibly\nThe holder can be extended to 25cm and the telescopic arm can be rotated by 210 degrees, which can meet your different usage needs\nBuilt-in universal turning ball, adjust the angle at any time\nCompatible with 4-6.7 inch mobile phones\nProduct material: ABS + silicone\nNet Weight: 176.5 gm\nProduct size: 177 x 155 x 109 mm",
        "pPrice": 83,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:43:28.604Z",
        "updatedAt": "2022-07-12T18:43:28.604Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 10,
        "pImages": [
            "1657651275574_516oewkAyZL._AC_SL1200_ - Copy.jpg",
            "1657651275667_516oewkAyZL._AC_SL1200_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "Charger ",
            "USB "
        ],
        "_id": "62cdc04cc158490016566479",
        "pName": "Q5003 CHOETECH USB Charger,",
        "pDescription": "【Qualcomm Quick Charge 3.0】 This USB Charger allows you to charge a Quick Charge Compatible device up to 4x faster than standard chargers, by charging a phone With QC 3.0 up to 80% in 35 minutes, at a rate approximately 1% every minute.",
        "pPrice": 500,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
            {
                "createdAt": "2022-07-12T19:01:34.341Z",
                "_id": "62cdca8d258ac90016d4d073",
                "review": "Nice!",
                "user": "62c9d44b1ec8b80016fc7264",
                "rating": "5"
            }
        ],
        "createdAt": "2022-07-12T18:41:16.111Z",
        "updatedAt": "2022-07-12T19:25:01.128Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
            "1657651079985_21JwIOBnDnL._AC_.jpg",
            "1657651079986_31aL0W0ctkL._AC_.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "ram",
            "battery "
        ],
        "_id": "62cdbf88c158490016566471",
        "pName": "Nokia 110 (2019) ",
        "pDescription": "Brand: Nokia Operating System Type: Series 30 Chipset manufacturer: Other Battery Capacity in mAh:Removable Li-Ion 800 mAh battery Display Size (Inch): 1.77INCH Cellular Network Technology: 2G",
        "pPrice": 579,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:38:00.266Z",
        "updatedAt": "2022-07-12T18:38:00.266Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
            "1657649008475_51MmKaMSNkS._AC_SL1000_.jpg",
            "1657649008687_Samsung-Galaxy-Note-20.jpg"
        ],
        "pOffer": "0",
        "pFeatures": [
            "256GB",
            "5G",
            "yellow"
        ],
        "_id": "62cdb77117e71400160ebbf0",
        "pName": "SAMSUNG Galaxy Note 20",
        "pDescription": "The phone comes with 6.7-inch Infinity-O display with Dynamic AMOLED technology detailed images with true-to-life colors. Designed as per the prevailing industry standards, it scores high on the aspect of utility. The quality material used in its construction makes it durable",
        "pPrice": 18469,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T18:03:29.217Z",
        "updatedAt": "2022-07-12T18:03:29.217Z",
        "__v": 0
    },
    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
            "1657648287702_1.jpg",
            "1657648287760_3.jpg"
        ],
        "pOffer": "10",
        "pFeatures": [
            "256GB",
            "5G",
            "Violet"
        ],
        "_id": "62cdb4a0154da70016141cf4",
        "pName": "Samsung Galaxy S21+",
        "pDescription": "The fastest chip ever in Galaxy Witness the fastest chip ever in a Galaxy With a 5nm processor on board you get seamless multitasking and hyperfast content streaming Contour Cut Camera DesignThe real metal finish on the main camera adds unity to the design and accentuates the luxury of the haze texture Its an iconic new camera design made to turn heads Intelligent BatteryPower through your day And then more Galaxy S21 5Gs battery is big and smart learning your app usage style to optimise power consumption 8K Video",
        "pPrice": 23999,
        "pCategory": {
            "_id": "62cd8558a314e40016404caf",
            "cName": "Mobile Phones"
        },
        "pStatus": "Active",
        "pRatingsReviews": [],
        "createdAt": "2022-07-12T17:51:28.211Z",
        "updatedAt": "2022-07-12T17:51:28.211Z",
        "__v": 0
    }
]
  // const products  =[{"pSold":0,"pQuantity":3,"pImages":["1657569618757_1a921aa7a78647cf8e36aba3e14bc72e.jpeg","1657569619056_android-phones-1651081480.jpeg"],"pOffer":"0","pFeatures":"['gamed','lol']","_id":"62cc8153ef01640016d00471","pName":"gamed","pDescription":"gamed awi","pPrice":99999,"pCategory":{"_id":"62cc7ea4ef01640016d00448","cName":"Phones"},"pStatus":"Active","pRatingsReviews":[],"createdAt":"2022-07-11T20:00:19.552Z","updatedAt":"2022-07-11T20:00:19.552Z","__v":0},{"pSold":0,"pQuantity":3,"pImages":["1657569456241_android-phones-1651081480.jpeg","1657569456652_download (1).jpeg"],"pOffer":"0","pFeatures":null,"_id":"62cc80b0ef01640016d00469","pName":"car","pDescription":"cardss","pPrice":333,"pCategory":{"_id":"62cc7ea4ef01640016d00448","cName":"Phones"},"pStatus":"Active","pRatingsReviews":[],"createdAt":"2022-07-11T19:57:36.943Z","updatedAt":"2022-07-11T19:57:36.943Z","__v":0},{"pSold":0,"pQuantity":4,"pImages":["1657569155937_android-phones-1651081480.jpeg","1657569156159_download (1).jpeg"],"pOffer":"0","pFeatures":null,"_id":"62cc7f84ef01640016d00459","pName":"iphone12","pDescription":"lol","pPrice":1200,"pCategory":{"_id":"62cc7ea4ef01640016d00448","cName":"Phones"},"pStatus":"Active","pRatingsReviews":[],"createdAt":"2022-07-11T19:52:36.480Z","updatedAt":"2022-07-11T19:52:36.480Z","__v":0},{"pSold":0,"pQuantity":10,"pImages":["1657569062997_download (1).jpeg","1657569062998_download.jpeg"],"pOffer":"0","pFeatures":null,"_id":"62cc7f27ef01640016d00451","pName":"iphone13","pDescription":"desssss hi lol","pPrice":1300,"pCategory":{"_id":"62cc7ea4ef01640016d00448","cName":"Phones"},"pStatus":"Active","pRatingsReviews":[],"createdAt":"2022-07-11T19:51:03.257Z","updatedAt":"2022-07-11T19:51:03.257Z","__v":0}]
  const history = useHistory();

  /* WhisList State */
  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  const fetchData = async () => {

   
  };

  return (
    <Fragment>
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="relative col-span-1 m-2">
                <div style={{height:"25vw" }}>
                <img
                  onClick={(e) => history.push(`/products/${item._id}`)}
                  className="w-full object-cover object-center cursor-pointer"
                  style={{width:"100%",height:"100%",objectFit: "contain"}}
                  src={item.pImages[0]}
                  alt=""
                />
                </div>
               
                <div className="flex items-center justify-between mt-2">
                  <div className="text-gray-600 font-light truncate">
                    {item.pName}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>
                      <svg
                        className="w-4 h-4 fill-current text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">
                      {item.pRatingsReviews.length}
                    </span>
                  </div>
                </div>
                <div>EGP {item.pPrice}.00</div>
                {/* WhisList Logic  */}
                <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                  <svg
                    onClick={(e) => isWishReq(e, item._id, setWlist)}
                    className={`${
                      isWish(item._id, wList) && "hidden"
                    } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-green-600 transition-all duration-300 ease-in`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <svg
                    onClick={(e) => unWishReq(e, item._id, setWlist)}
                    className={`${
                      !isWish(item._id, wList) && "hidden"
                    } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-green-600 transition-all duration-300 ease-in`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* WhisList Logic End */}
              </div>
            </Fragment>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No product found
        </div>
      )}
    </Fragment>
  );
};

export default SingleProduct;
