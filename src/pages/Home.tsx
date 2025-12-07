import React from "react";
import Header from "../components/Header/Header.js";
import Body from "../components/Body/Body.js";
import Footer from "../components/Footer/Footer.js";
import styles from "./Home.css";

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