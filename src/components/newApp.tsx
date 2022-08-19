import React, {useState} from 'react';
import s from "../styles/newApp.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {ProductType, specializedSubject} from "../bll/productsSlice";
import {ListItem} from "./ListItem";

const NewApp = () => {
    const {products} = useSelector((state: AppRootStateType) => state.products);

    return (
        <div className={s.wrapper}>
            <div className={s.accordion}>

                    {products.map((item: ProductType) => (
                        <>
                            <div className={s.title}>
                                <h3>{item.title}</h3>
                                <div className={s.wrap}>
                                    {
                                        item.specializedSubjects.map((el: specializedSubject[], i: number) => (
                                                <Module index={i} module={el}/>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </>
                    ))
                    }

            </div>
        </div>
    );
};

const Module: React.FC<ModulePropsType> = ({module, index}) => {
    const [selected, setSelected] = useState<boolean>(false)

    const onClickHandler = () => setSelected(state => !state)

    return (
        <div className={s.item}>
            <div className={`${s.moduleTitle} ${selected && s.modalNoActive}`} onClick={onClickHandler}>
                {/*<span>{selected ? '-' : '+'}</span>*/}
                <h4>{`${index + 1} Модуль`}</h4>
            </div>
            {/*----- Отрисовываем по 5 li ------*/}
            <div className={selected ? `${s.content} ${s.show}` : s.content}>
                {module.map((el: specializedSubject) =>
                    <ListItem key={index} ListName={el.string}/>)}
            </div>
        </div>
    );
};

type ModulePropsType = {
    index: number
    module: specializedSubject[]
}
export default NewApp;