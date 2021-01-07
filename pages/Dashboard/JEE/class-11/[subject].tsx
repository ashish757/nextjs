import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import styles from './subject.module.scss';

export default function subject() {
    const Router = useRouter()
    
    if (!Router.query.subject) {
        return <h1>Loading...</h1>
    }
    const active: string = Router.query.subject.toString()

    return (
        <div className="container">
            <div className={styles.subjectToggler}>
                <Link href="./Physics">
                    <Button className={active === "Physics" ? styles.subjectActive : ''}>Physics</Button></Link>
                <Link href="./Chemistry">
                    <Button className={active === "Chemistry" ? styles.subjectActive : ''}>Chemistry</Button></Link>
                <Link href="./Maths">
                    <Button className={active === "Maths" ? styles.subjectActive : ''}>Maths</Button></Link>
            </div>
            
            
            <h1>Hey! There</h1>
            <h2>&nbsp;It's {Router.query.subject}</h2>
        </div>
    )
}
