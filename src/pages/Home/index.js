import CommonLayout from "../../components/CommonLayout";

import AppScreenshots from "../../components/AppScreenshots";
import HowAppWork from "../../components/HowAppWork";
import DesignedBy from "../../components/DesignedBy";

import "./index.css";

const heroContent = () => (
  <>
    <h1 className="hero-header">Best Mobile App Showcase</h1>
    <p className="hero-description">
      Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa
      nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.
    </p>
    <button className="show-more-button">Read More</button>
  </>
);

const Home = () => {
  return (
    <CommonLayout>
      <div className="hero">
        <div className="hero-content-large">{heroContent()}</div>
        <div className="hero-img-container">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dgj39147s/image/upload/v1716874140/cb44a9da3594b4a1ab60adde30459f78_mh1ebr.png"
            alt="hero"
          />
        </div>
      </div>
      <div className="hero-content-small">{heroContent()}</div>
      <HowAppWork />
      <DesignedBy />
      <AppScreenshots />
    </CommonLayout>
  );
};

export default Home;
