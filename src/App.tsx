import React, {useEffect} from 'react';
import './styles/app.module.scss';

import s from "./styles/app.module.scss"
import {SubModule} from "./components/SubModule";
import {setProductThunk} from "./bll/productsSlice";
import {useDispatch} from "react-redux";
import NewApp from "./components/newApp";
import {Square} from "./components/Square";

function App() {
    const dispatch = useDispatch<any>();

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
                    <NewApp/>
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