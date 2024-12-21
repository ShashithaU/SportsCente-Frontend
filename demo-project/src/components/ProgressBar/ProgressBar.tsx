import style from './ProgressBar.module.css'

function ProgressBar(props: any){

    return(
            <div className={style.progressBar}>
                
                <div className={style.ProgressContainer}>
                    <p>Shipping Details</p>
                </div>

                <div className={style.ProgressContainer}>
                    <p>Conform Order</p>
                </div>

                <div className={style.ProgressContainer}>
                    <p>Place Order</p>
                </div>

            </div>
    );
}

ProgressBar.defaultProps = {
    check01: false,
    check02: false,
    check03: false
}

ProgressBar.type ={
    check01: Boolean,
    check02: Boolean,
    check03: Boolean
}
export default ProgressBar;