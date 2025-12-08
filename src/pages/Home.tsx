import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.scss";

function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>

            <div className={styles.body}>
                <Body/>
            </div>

            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;