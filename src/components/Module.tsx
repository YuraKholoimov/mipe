import s from "../styles/module.module.scss"
import {ListItem} from "./ListItem";
import {specializedSubject} from "../bll/productsSlice";
import {useState} from "react";

export const Module: React.FC<ModulePropsType> = ({title, specializ}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClickHandler = () => {
        setIsOpen(state => !state)

    }
    return (
        <div className={s.moduleContainer}>
            <div className={`${s.moduleTitle} ${isOpen && s.modalNoActive}`}
                 onClick={onClickHandler}
            >
                <h4>{title}</h4>s
            </div>
            <div className={`${s.moduleLists} ${ !isOpen && s.hideModuleLists}`}>
                <ul>
                    {
                        specializ.map((el: specializedSubject  , index:number) => {
                            return <ListItem key={index} ListName={el.string}/>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

type ModulePropsType = {
    title: string
    specializ: specializedSubject[]
}
