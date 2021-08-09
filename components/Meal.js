import Link from 'next/link';

const Meal = ({ meal }) => {
  const { id, name, image, info, country } = meal;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{country}</h4>
        <p>{info}</p>
        <Link href={`/meal/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Meal;
