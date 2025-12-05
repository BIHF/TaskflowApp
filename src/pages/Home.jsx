import Header from "../components/header/Header.tsx";
import Body from "../components/Body/Body.jsx";
import Footer from "../components/Footer/Footer.jsx";
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