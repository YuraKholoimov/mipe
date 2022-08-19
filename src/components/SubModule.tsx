import React from 'react';

import s from "../styles/subModuleWrapper.module.scss"
import {ListItem} from "./common/ListItem";

export const SubModule: React.FC<SubModulePropsType> = ({children,title, content, ...restProps}) => {
    return (
        <div className={`${s.subModuleWrapper} ${restProps.className} `}>
            <div className={s.subModuleContent}>
                <h3>{title}</h3>
                <ListItem ListName={content}/>
                {children}
            </div>
        </div>
    );
};

type SubModulePropsType = {
    children?: React.ReactNode
    title: string
    content: string
} & React.HTMLAttributes<HTMLDivElement>;