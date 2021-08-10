import path from 'path';
import fs from 'fs/promises';
import Loading from './../../components/Loading';
import Image from 'next/image';
import Link from 'next/link';

function DetailPage(props) {
  const { meal } = props;
  const { ingredients, instructions, name, image, info, country, category } =
    meal;
  if (!meal) {
    return <Loading />;
  }
  return (
    <section className="section meal-section">
      <Link href="/" className="btn btn-primary">
        Back
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="food">
        <Image src={image} alt={name} width="750" height="900" />
        <div className="food-info">
          <p>
            <span className="food-data">name:</span>
            {name}
          </p>
          <p>
            <span className="food-data">category:</span>
            {category}
          </p>
          <p>
            <span className="food-data">info:</span>
            {info}
          </p>
          <p>
            <span className="food-data">glass:</span>
            {country}
          </p>
          <p>
            <span className="food-data">ingridients:</span>
            {ingredients.map((item, idx) => {
              return item ? <span key={idx}>{item} </span> : null;
            })}
          </p>
          <p>
            <span className="food-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const mealId = params.id;

  const data = await getData();

  const meal = data.meals.find((meal) => meal.idMeal === mealId);
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = meal;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  ];
  if (!meal) {
    return { notFound: true };
  }

  return {
    props: {
      meal: {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        info: meal.strCategory,
        country: meal.strArea,
        instructions: meal.strInstructions,
        category: meal.strCategory,
        ingredients,
      },
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.meals.map((meal) => meal.idMeal);
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
}

export default DetailPage;
