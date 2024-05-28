import CommonLayout from "../../components/CommonLayout";
import Banner from "../../components/Banner";

import "./index.css";

const AboutUs = () => {
  return (
    <CommonLayout>
      <Banner pathNameText="ABOUT US" />
      <div className="about-us">
        <img
          src="https://res.cloudinary.com/dgj39147s/image/upload/v1716873773/ad59fb14c63160d6a50ebd60f037be7b_bprtez.png"
          alt="aboutUs"
          className="about-us-img"
        />
        <div className="about-us-details">
          <h1>Find Out More About Our Business Consulting</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dictum arcu sed erat fringilla placerat. Proin fringilla lacinia
            risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate
            pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat
            volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt
            in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl.
            Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut,
            ullamcorper magna.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dictum arcu sed erat fringilla placerat. Proin fringilla lacinia
            risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate
            pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat
            volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt
            in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl.
            Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut,
            ullamcorper magna.
          </p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default AboutUs;
