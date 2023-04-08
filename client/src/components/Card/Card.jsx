import style from './Card.module.css'

const Card = (props) => {
  return (
    // <Link to={`/detail/${id}`} className={style.linkCard}>
    <div className={style.card}>
      <img src={props.image} alt="Un pokemon" />
      <h3>{props.name}</h3>
      <h5>Tipo</h5>
      <ul>
        {props.types.map((type, index) => {
          return <li key={index}>{type}</li>;
        })}
      </ul>
    </div>
    // </Link>
  );
};

export default Card;
