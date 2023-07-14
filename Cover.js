import style from './Pokemon.module.css';

const Cover = (props) => {

    // background-image: linear-gradient(#f3d241, #ffad2a);

    return (
        <div className={style.coverColor} style={{backgroundImage: `linear-gradient(${props.lightenedColor}, ${props.dominantColor})`}}>
            {props.children}
        </div>   
    )
}
export default Cover;