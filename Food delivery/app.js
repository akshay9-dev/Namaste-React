import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - LOGO
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - ReataurantCard
 *      -RestaurantCard
 *          -image
 *          -Nameof restaurant, Star ratings, cuisine, delivery Time
 * footer
 * - copyright
 * - Link
 * -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// This is the inline CSS in React's JSX (style={styleCard}).
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, sla, costForTwo } = resData?.info; //we destructuered all from resData.info.
  const { deliveryTime } = sla; // we destructured the deliveryTime frol sla because only deliveryTime is inside sla, others are outside.

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRatingString} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "797172",
      name: "M/S. AKSHAY CHINESE",
      cloudinaryImageId: "1db70a46e075524951005b117d5ec307",
      locality: "Bethak Raod",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.5,
      parentId: "476679",
      avgRatingString: "4.5",
      totalRatingsString: "19",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/m-s-akshay-chinese-bethak-raod-pen-rest797172",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "797427",
      name: "M/S. Hotel Vaibhav",
      cloudinaryImageId: "5dcce6e7490f15a6d8b0b11ece678717",
      locality: "Raju Pote Marg",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.2,
      parentId: "476867",
      avgRatingString: "4.2",
      totalRatingsString: "36",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/m-s-hotel-vaibhav-raju-pote-marg-pen-rest797427",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "1031447",
      name: "Between Bread Sandwiches And Snacks",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/69fdc1fc-dae1-4400-a1a4-deccb203ad77_1031447.jpg",
      locality: "Pen",
      areaName: "Pen",
      costForTwo: "₹199 for two",
      cuisines: ["Pizzas"],
      veg: true,
      parentId: "600316",
      avgRatingString: "--",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 20:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/between-bread-sandwiches-and-snacks-pen-rest1031447",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "800445",
      name: "Pen Panipuri Corner",
      cloudinaryImageId: "f83fa07c26aaed9b863156e64e758434",
      locality: "Sarkari Hospital",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      veg: true,
      parentId: "478474",
      avgRatingString: "--",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 21:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "2.0",
          ratingCount: "1",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/pen-panipuri-corner-sarkari-hospital-pen-rest800445",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "797177",
      name: "Bholej Rock and rolls",
      cloudinaryImageId: "5c8fa0250094725311629f6d1cd88571",
      locality: "Shop no 6",
      areaName: "Pen",
      costForTwo: "₹150 for two",
      cuisines: ["Rolls & Wraps", "Chinese"],
      avgRating: 3.5,
      parentId: "45034",
      avgRatingString: "3.5",
      totalRatingsString: "25",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/bholej-rock-and-rolls-shop-no-6-pen-rest797177",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "797603",
      name: "Himgauri Garden Restaurant",
      cloudinaryImageId: "b14cd9fc40129fcfb97aa7e621719d07",
      locality: "2Nd Line Fulbag Galli",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Seafood",
        "Chinese",
        "Biryani",
        "Tandoor",
        "Kebabs",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "477368",
      avgRatingString: "4.4",
      totalRatingsString: "550",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/himgauri-garden-restaurant-2nd-line-fulbag-galli-pen-rest797603",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "941069",
      name: "Rowdy Momo Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/a3535171-4fbb-492c-aa99-3fdb727e642e_941069.jpg",
      locality: "Dharamtar Road",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 3.2,
      parentId: "451734",
      avgRatingString: "3.2",
      totalRatingsString: "10",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/rowdy-momo-cafe-dharamtar-road-pen-rest941069",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "797534",
      name: "Cafe Creme",
      cloudinaryImageId: "996f3891d549afa7b88a6900730ef1ab",
      locality: "Shop no 6",
      areaName: "Pen",
      costForTwo: "₹200 for two",
      cuisines: [
        "Beverages",
        "Snacks",
        "Italian-American",
        "Chinese",
        "Ice Cream",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "52815",
      avgRatingString: "4.1",
      totalRatingsString: "32",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-02 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-2bdf1ac9-216b-4df0-baa4-5e7d495cab3e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pen/cafe-creme-shop-no-6-pen-rest797534",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];


// not using key (not acceptable) < indes as key (not recommanded) < unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
          // This above map method iterated over each object of restaurant inside resList array and maps it. Remember always that whenevey you using map method that i whenever your looping on to anything you have to always give a key over here. Why it is important? Becauses when suppose we dont provide unique key to the component the when a new component is added, card in this case then react will reload/render/updates all the cmponents. and if the unique key or id is provided then react only updates/render/reload that component. it will be really time consuming when we have more than 100 cards/components. remember the key should be unique. React uniquely identifies the component when key is provided.

          // We can use the index as a key here but it is not recommanded by react itself. Use it only if you dont have unique ID.
          //resList.map((restaurant, index) => (
          //  <RestaurantCard key={index} resData={restaurant} />
        }
      </div>
    </div>
  );
};
//<RestaurantCard resName="Splash Mount" cuisine="Biryani, North Indian, Asian"/> This is call passing props to th components directely in order to make a component dynamic.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// to make the component dnamic we have a concept in react known as prop. Prop is nothing but the properties. We know that component in React is nothing but the javascript function at the end similarlky prp is nothing bt the arguments that we pass to the function. When we want to pass some data to the component dynamically then we pass it as a props(i.e arguments to the function).

//////// Config driven UI ////////////
//what is congif driven UI search about It. It is imp in system design interview. It is bbasically different UI according to the location. Search about it.
