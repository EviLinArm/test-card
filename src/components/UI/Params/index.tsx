import React, {FC} from 'react';
import {CategoryItem, CharsItem} from "../../../redux/singleCard/types";

type ParamsType = {
    characteristics: CharsItem[];
    categories: CategoryItem[];
};

const Params: FC<ParamsType> = ({categories,characteristics}) => {

    const chars = characteristics.map((item: CharsItem) =>
        <div key={item.id} className="params__table__data">
            <p className="data__elem">{item.title}</p>
            <p className="data__elem">{item.value}</p>
        </div>
    );

    const cats = categories.map((item: CategoryItem) =>
        <div key={item.id} className="params__table__data">
            <p className="data__elem">{item.name}</p>
            <p className="data__elem">{item.id}</p>
        </div>
    );

    return (
        <div className="params">
            <h3 className="params__title">Характеристики</h3>
            <div className="params__table">
                {chars}
                {cats}
            </div>
        </div>
    );
};

export default Params;