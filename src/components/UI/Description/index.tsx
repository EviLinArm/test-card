import React, {FC} from 'react';

type DescType = {
    description: string
};

const Description: FC<DescType> = ({description}) => {
    return (
        <div className="description">
            <h2 className="description__title">Описание</h2>
            <p className="description__text">{description}</p>
        </div>
    );
};

export default Description;