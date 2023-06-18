import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SwiperStyles.css";

// import required modules
import {FreeMode, Keyboard, Mousewheel, Navigation, Scrollbar} from "swiper";

export default function SwiperNews({info}) {
    return (
        <>
            <Swiper
                slidesPerView={3.6}
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                scrollbar={true}
                draggable={true}
                modules={[Navigation, Mousewheel, FreeMode, Keyboard, Scrollbar]}
                className="mySwiper"
            >
                {
                    info?.map(el =>
                        <div key={el.id}>
                            <SwiperSlide>
                                <div className={'swiper-desk'}>
                                    <h2>{el.title}</h2>
                                    <p>{el.content}</p>
                                </div>
                            </SwiperSlide>
                        </div>
                    )
                }
            </Swiper>
        </>
    );
}
