import Link from 'next/link';
import Image from 'next/image';
const Meal = ({ meal }) => {
  const { id, name, image, info, country } = meal;

  return (
    <article className="meal">
      <div className="img-container">
        <Image src={image} alt={name} width="350" height="50" />
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
