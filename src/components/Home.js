import React from 'react';
import '../styling/Home.css';
import ProductCard from './ProductCard';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <ProductCard
            id={114134234334}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={8.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
          />
          <ProductCard
            id={9214894194}
            title="Bosch EasyHedgeCut 18-45 Cordless Hedge Cutter with 18v Lithium-Ion Battery, 450mm Blade Length, 15mm Tooth Opening"
            price={109.99}
            image="https://m.media-amazon.com/images/I/41aIhAvdu1L._AC_SY400_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <ProductCard
            id={4397234974}
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker"
            price={59.99}
            image="https://m.media-amazon.com/images/I/51N86A0bteL._AC_SY400_.jpg"
            rating={2}
          />
          <ProductCard
            id={4536564792}
            title="Amazon Echo Dot"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51fsVTWWlPL._AC_SY400_.jpg"
            rating={4}
          />
          <ProductCard
            id={203039484}
            title="FIFA 21 (PS4)"
            price={59.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._AC_UL480_SR384,480_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <ProductCard
            id={767274743}
            title="Harley Street Care Disposable Blue Face Masks Protective 3 Ply Breathable Triple Layer Mouth Cover with Elastic Earloops - Box of 50"
            price={9.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71Vjk2pswSL._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
