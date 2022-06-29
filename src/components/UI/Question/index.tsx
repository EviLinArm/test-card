import React from 'react';

const Question = () => {
    return (
        <div className="question">
            <h3 className="question__title">Задать вопрос</h3>
            <div className="question__form">
                <div className="question__form__name question__form__box">
                    <label htmlFor="username">Ваше имя</label>
                    <input type="text" id="username"/>
                </div>
                <div className="question__form__data question__form__box">
                    <label htmlFor="username">Контактные данные</label>
                    <input type="text" id="username"/>
                </div>
                <div className="question__form__ask question__form__box">
                    <label htmlFor="username">Ваш вопрос</label>
                    <input type="text" id="username"/>
                </div>
            </div>
        </div>
    );
};

export default Question;