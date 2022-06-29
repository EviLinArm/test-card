import React, {FC} from 'react';
import Btn from "../Btn";
import Params from "../Params";
import {CategoryItem, CharsItem, PriceItem, TagItem} from "../../../redux/singleCard/types";

type InfoType = {
    id: number
    price: PriceItem
    name: string
    tags: TagItem[];
    characteristics: CharsItem[];
    categories: CategoryItem[];
};

const Info: FC<InfoType> = ({id,name, price,tags, categories, characteristics}) => {
    return (
        <div className="info">
            <h1 className="info__title">{name}</h1>
            <div className="info__box">
                <div className="info__box__string">
                    <div className="string__text">
                        <p>Цена</p>
                        <p>{price.retail_price} р</p>
                    </div>
                    <div className="string__text">
                        <p>{tags[0].name}</p>
                        <p>{tags[0].id}</p>
                    </div>
                </div>
                <div className="info__box__string">
                    <div className="string__text">
                        <p>{tags[1].name}</p>
                        <p>{tags[1].id}</p>
                    </div>
                    <div className="string__text">
                        <p>{tags[2].name}</p>
                        <p>{tags[2].id}</p>
                    </div>
                </div>
            </div>
            <div className="info__actions">
                <Btn clazz={'btn__blue'} text={'В корзину'} onClick={() => {console.log(`ID товара = ${id} - Нажали кнопку в корзину!`)}}/>
                <Btn clazz={'btn__orange'} text={'Задать вопрос'} onClick={() => {console.log(`ID товара = ${id} - Нажали кнопку задать вопрос!`)}}/>
            </div>
            <Params categories={categories} characteristics={characteristics} />
        </div>
    );
};

export default Info;