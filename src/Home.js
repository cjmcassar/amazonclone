import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background amazon image"
        />

        <div className="home__row">
          <Product
            id="12345432"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="232323"
            title="The Holiday"
            price={5.99}
            image="https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_UY1200_CR90,0,630,1200_AL_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="286932323"
            title="AI in a Box"
            price={455.99}
            image="data:image/jpeg;base64,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"
            rating={3}
          />
          <Product
            id="2389623"
            title="Instant coding knowledge"
            price={305.99}
            image="https://specials-images.forbesimg.com/imageserve/5e5646e1d2111200062ef3aa/960x0.jpg?fit=scale"
            rating={4}
          />
          <Product
            id="2389623"
            title="NReal AR headset"
            price={100.99}
            image="https://uploads.ifdesign.de/award_img_337/oex_large/271136_01_if_2020_nreal_light_r1.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="85733"
            title="Cheap Bitcoin"
            price={100.99}
            image="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
