import styles from './class-12.module.scss';
import Link from 'next/link';
// Material-ui
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Message } from '@material-ui/icons';
// COMPPONENTS
import Card from '../../../../components/dashboard/QuickLinkCard';
import SubjectCard from '../../../../components/dashboard/SubjectCard'


export default function Index() {
    return (
        <div className={styles.class12}>
            <div className={styles.toggleLinks}>
                {/* <ButtonGroup variant="contained" color="secondary"> */}
                    <Link href="./class-11">
                        <Button>Class 11</Button>
                    </Link>
                    <Link href="./class-12">
                        <Button style={{ background: '#fd7c6c' }} >Class 12</Button>
                    </Link>
                {/* </ButtonGroup> */}
            </div>
            <div className={styles.quickLinkCards}>
                <Card url="/" text="Live Quiz" Icon={Message} />
                <Card url="/" text="PYQs" Icon={Message} />
                <Card url="/" text="Live Quiz" Icon={Message} />
                <Card url="/" text="DPP" Icon={Message} />
            </div>
            <div className={styles.subjectCards}>
                <SubjectCard url="/" title="Physics" />
                <SubjectCard url="/" title="Chemistry" />
                <SubjectCard url="/" title="Maths" />
            </div>
        </div>
    )
}
