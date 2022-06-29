import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {MediaItem} from "../../../redux/singleCard/types";

type SliderType = {
    media: MediaItem[];
};

const Slider: FC<SliderType> = ({media}) => {
    const slides = media.map((item: MediaItem) =>
        <div key={item.id}>
            <img src={item.path} alt={item.name}/>
            <p className="legend">{item.name}</p>
        </div>
    );

    return (
        <div className="carousel">
            <Carousel>
                {slides}
            </Carousel>
        </div>
    );
};

export default Slider;