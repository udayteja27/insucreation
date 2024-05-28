import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa6";

const renderReviewSwiper = () => (
  <SwiperSlide className="review-slider">
    <div className="review">
      <p>
        Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus
        consequatur aliquam nihil temporibus in assumenda? Aute praesentium
        fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.
      </p>
      <div className="review-bottom-section">
        <img
          src="https://res.cloudinary.com/dgj39147s/image/upload/v1716873524/2796e39c67ec8a116fb037fe9423acb8_nhipyh.png"
          alt="invertedCommas"
          className="inverted-commas"
        />
        <img
          src="https://res.cloudinary.com/dgj39147s/image/upload/v1716873596/e7acc789893771968fb262557e607cdb_apglwt.png"
          alt="arrow"
          className="arrow"
        />
        <div>
          <p className="user-name">Jenny Wilson</p>
          <FaStar color="#ffdf08" size={16} />
          <FaStar color="#ffdf08" size={16} />
          <FaStar color="#ffdf08" size={16} />
          <FaStar color="#ffdf08" size={16} />
          <FaStar color="#e8e8e8" size={16} />
        </div>
        <img
          src="https://res.cloudinary.com/dgj39147s/image/upload/v1716873658/a39bd5be6888f68d55e523179d1438a4_xum0tp.png"
          alt="user"
          className="user-img"
        />
      </div>
    </div>
  </SwiperSlide>
);

const Reviews = () => (
  <div className="reviews">
    <h1>Review's From Students</h1>
    <img
      className="reviews-decor"
      src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/green-steps"
      alt="greenStepsDecor"
    />

    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
    >
      {renderReviewSwiper()}
      {renderReviewSwiper()}
      {renderReviewSwiper()}
      {renderReviewSwiper()}
      {renderReviewSwiper()}
    </Swiper>
  </div>
);

export default Reviews;
