import React from 'react';

import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {ProductType, specializedSubject} from "../bll/productsSlice";

import s from "../styles/accordion.module.scss";
import {Module} from './Module';

export const Accordion = () => {
    const {products} = useSelector((state: AppRootStateType) => state.products);

    return (
        <div className={s.wrapper}>
            <div className={s.accordion}>
                {
                    products.map((item: ProductType) => (
                        <div className={s.title} key={item.title}>
                            <h3>{item.title}</h3>
                            <div className={s.wrap}>
                                {item.specializedSubjects
                                    .map((el: specializedSubject[], i: number) => (
                                            <Module key={i} index={i} module={el}/>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
