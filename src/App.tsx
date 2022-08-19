import React, {useEffect} from 'react';

import {SubModule} from "./components/SubModule";
import {setProductThunk} from "./bll/productsSlice";
import {Square} from "./components/common/Square";
import {Accordion} from "./components/Accordion";

import s from "./styles/app.module.scss";
import {useAppDispatch} from "./bll/store";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setProductThunk())
    }, [])

    return (
        <main>
            <div className={s.appContainer}>
                <header className={s.appTitle}>
                    <h3>Специализированные дисциплины</h3>
                </header>

                {/*----- Отрисовка всех программ -----*/}
                <section>
                    <Accordion/>
                </section>

                {/*----- Дополнительные блоки -----*/}
                <section className={s.appSubModule}>
                    <SubModule
                        children={<Square/>}
                        title={"Практические модули"}
                        content={"Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе"}/>

                    <SubModule
                        className={s.bgBlack}
                        title={"Итоговая аттестация"}
                        content={"Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)"}/>
                </section>
            </div>
        </main>
    );
};

export default App;