import styles from '@/styles/Header.module.css'
import { Caveat } from "next/font/google";

const caveat = Caveat({
    weight: ['700'],
    subsets: ['latin']
})

const Header = () => {
    return (<div className={`${styles.header__container} container`}>
        <h1 className={caveat.className}>Done Undone</h1>
        <h4>Getting organized is a sign of self-respect</h4>
    </div>);
}

export default Header;