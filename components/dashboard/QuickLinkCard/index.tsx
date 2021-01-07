import styles from './QuickLinkCard.module.scss';
import Link from 'next/link';

interface prop {
    url: string,
    text: string,
    Icon: any
}
export default function index({ url, text, Icon }: prop) {
    return (
        <Link href="/">
            <div className={styles.card}>
                <div className={styles.icon}>
                    <Icon />
                </div>
                <h3> {text} </h3>
            </div>
        </Link>
    )
}
