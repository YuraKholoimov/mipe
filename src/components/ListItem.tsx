import s from "../styles/paragraph.module.scss";
import React from "react";

export const Paragraph: React.FC<ParagraphPropsType> = ({children}) => {
    return (
        <>
            <li className={s.paragraph}><p>{children}</p></li>
        </>
    );
};

type ParagraphPropsType = {
    children: string
}