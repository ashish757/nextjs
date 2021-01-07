import React from 'react';
import styles from "./Hero.module.scss";
import Link from "next/link";
import Button from "@material-ui/core/Button";
// import HeroImg from "./3255309.jpg"
import Logo from "../../Logo"

export default function Hero() {
    return (
            <section className={"container " + styles.hero}>
				<div className={styles.heroInfo}>
					<h1 className={styles.title}><Logo/></h1>
					<h3 className={styles.subtitle}>gear the fear</h3>
					<h3 className={styles.heroText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus alias consequatur eligendi
					</h3>
					<div className={styles.callToAction}>
						<Link href="/#Features">
							<Button variant="contained" color="primary" style={{maxWidth: "max-content"}}> EXPLORE </Button>
						</Link>
						<Link href="/#QuickStart">
							<Button variant="contained" color="secondary" style={{maxWidth: "max-content"}}> GET STARTED </Button>
						</Link>
					</div>
				</div>
			<div className={styles.heroImg}>
					<img src="" alt="HERO" />
				</div>
			</section>
    )
}
