import React, {FC} from 'react';

type Buton = {
    text: string
    clazz: string
    onClick?: () => void
};

const Btn: FC<Buton>  = ({text, onClick, clazz}) => {
    return (
        <button className={`btn ${clazz}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Btn;