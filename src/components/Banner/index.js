import "./index.css";

const Banner = (props) => {
  const { pathNameText } = props;
  return (
    <div className="banner">
      <img
        src="https://res.cloudinary.com/dgj39147s/image/upload/t_image/v1716872656/f43f0b7e75e4d4c99a798165c5ae0ca7_saea14.png"
        alt="bannerImg"
        className="banner-img"
      />
      <h1 className="banner-path-name">{pathNameText}</h1>
    </div>
  );
};

export default Banner;
