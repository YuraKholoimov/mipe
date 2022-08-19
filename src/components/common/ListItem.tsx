import s from "../../styles/listItem.module.scss";
import React from "react";

export const ListItem: React.FC<ParagraphPropsType> = ({ListName}) => {
    return (
        <>
            <li className={s.paragraph}><p>{ListName}</p></li>
        </>
    );
};

type ParagraphPropsType = {
    ListName: string
}