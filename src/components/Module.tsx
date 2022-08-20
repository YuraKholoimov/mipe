import React, {useState} from "react";
import s from "../styles/accordion.module.scss";
import {specializedSubject} from "../bll/productsSlice";
import {ListItem} from "./common/ListItem";

export const Module: React.FC<ModulePropsType> = ({module, index}) => {
    const [selected, setSelected] = useState<boolean>(false)

    const onClickHandler = () => setSelected(state => !state)

    return (
        <div className={s.item}>
            <div className={`${s.moduleTitle} ${selected && s.modalNoActive}`} onClick={onClickHandler}>
                <h4>{`${index + 1} Модуль`}</h4>
            </div>

            {/*----- Отрисовка по 5 li ------*/}
            <div className={selected ? `${s.content} ${s.show}` : s.content}>
                {module.map((el: specializedSubject) => <ListItem key={el.string} ListName={el.string}/>)}
            </div>
        </div>
    );
};

type ModulePropsType = {
    index: number
    module: specializedSubject[]
}