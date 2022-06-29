import React, { FC } from 'react';
import Slider from "../../components/UI/Slider";
import Info from "../../components/UI/Info";
import Question from "../../components/UI/Question";
import Description from "../../components/UI/Description";

import {SingleCardData} from "../../redux/singleCard/types";

const SingleGoods: FC<SingleCardData> = ({
                                             categories,
                                             characteristics,
                                             description,
                                             id,
                                             media,
                                             name,
                                             price,
                                             tags
                                        }) => {
    console.log(media)
    return (
        <div className="sgoods">
            <div className="sgoods__container">
                <Slider media={media}/>
                <Info price={price}
                      name={name}
                      tags={tags}
                      characteristics={characteristics}
                      categories={categories}
                      id={id}
                />
                <Question/>
            </div>
            <Description description={description}/>
        </div>
    );
};



export default SingleGoods;