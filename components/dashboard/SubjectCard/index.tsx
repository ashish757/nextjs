import styles from './SubjectCard.module.scss';
import { ChevronRightSharp } from '@material-ui/icons'
import Link from 'next/link'
import { Flask, Calc, Atom, Chemical } from '../../Icons'
interface propType {
    url: string,
    Icon?: any,
    title: string,
}

export default function index({ url, title, Icon }: propType) {
    
    const icons = [
        { id: 'physics', icon: Flask },
        { id: 'maths', icon: Calc },
        { id: 'chemistry', icon: Atom },
    ]
    const [I]: any = icons.filter(icon => {
        return icon.id === title.toLowerCase()
    })
    

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                {
                    Icon ? <Icon /> : <Flask />
                }
 
                <h3>{ title }</h3>
            </div>
            <div className={styles.stats}>
                <div>
                    <h3>34</h3>
                    <h4>Chapters</h4>
                </div>
                <div>
                    <h3>Notes</h3>
                    <h4>Chapter-wise</h4>
                </div>
                <div>
                    <h3>Questions</h3>
                    <h4>Chapter-wise</h4>
                </div>
                <div>
                    <h3>34</h3>
                    <h4>Chapters</h4>
                </div>
            </div>
            <Link href={url}>
                <div className={styles.link}>
                    <ChevronRightSharp /> <ChevronRightSharp />
                </div>    
            </Link>
         </div>
    )
}
