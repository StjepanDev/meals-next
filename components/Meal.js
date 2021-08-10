import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Meal = ({ meal }) => {
  const { id, name, image, info, country } = meal;

  return (
    <article className="meal">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>{country}</h4>
        <p>{info}</p>
        <Link href={`/meal/${id}`} className=".btn .btn-primary .btn-details">
          <a>Details</a>
        </Link>
      </div>
    </article>
  );
};

export default Meal;
