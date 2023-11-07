import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img className={style.img} src={props.image} alt="Un pokemon" />
      </div>
      <div className={style.nameContainer}>
        <Link className={style.name} to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>
      {/* <h5>Tipo</h5> */}
      {/* <ul>
        {props.types.map((type, index) => {
          return <li key={index}>{type}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Card;
