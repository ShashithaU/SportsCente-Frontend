import style from './ProgressBar.module.css';

interface ProgressBar {
    check01: boolean;
    check02: boolean;
    check03: boolean;
}

const ProgressBar = ({check01 = false, check02 = false, check03 = false}) => {
    return (
        <div className={style.progressBar}>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: check01 ? 'red' : 'transparent'}}/>
                <p>Shipping Details</p>
            </div>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: check02 ? 'red' : 'transparent'}}/>
                <p>Conform Order</p>
            </div>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: check03 ? 'red' : 'transparent'}}/>
                <p>Place Order</p>
            </div>
        </div>
    );
}

export default ProgressBar;
