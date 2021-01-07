import { useContext } from 'react'

import DataLayer from "../../DataLayer";
import styles from "./Nav.module.scss";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { Menu, Close } from "@material-ui/icons";
import Logo from "../Logo"
import Link from 'next/link';

export default function Nav() {
    const { state, dispatch }: any = useContext(DataLayer);

    const menu = [
        {id: 0, url: "/", text: "Home"},
        { id: 1, url: "/#QuickStart", text: "Quick Start"},
    ]

    const navHandler = (data: boolean) => {
        dispatch({type: "MOB_NAV_ACTIVE", payload: {mobNavActive: data}})
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.start}>
                <div className={styles.menuToggler}>
                    <IconButton onClick={() => navHandler(true)}>
                        <Menu />
                    </IconButton>
                </div>
                <Logo />
            </div>
            <div className={state.mobNavActive ? `${styles.mobNav} ${styles.center}` : styles.center}>
                <span className={styles.header}>
                    <div className={styles.menuToggler}>
                        <IconButton onClick={() => navHandler(false)}>
                            <Close />
                        </IconButton>
                    </div>
                        <Logo />
                    </span>
            
                
                <ul className={styles.navLinks}>
                    {
                        menu.map(option => {
                            return (
                                <Link href={option.url} key={option.id} >
                                <li onClick={() => navHandler(false)} className={styles.navLink} >{option.text}</li>
                                </Link>
                            )
                        })
                    }
            
                </ul>
            </div>
            <div className={styles.end}>
                <div className={styles.signUpBtn}>
                    <ButtonGroup>
                        <Button
                            variant="contained" 
                        > Log in </Button>
                        <Button
                            variant="contained" 
                        > Donate </Button>
                    </ButtonGroup>
                </div>
            </div>    
            
        </nav>
    )
}
