import path from 'path';
import fs from 'fs/promises';
import Meal from '../../components/Meal';
import Loading from './../../components/Loading';

function DetailPage(props) {
  const { meal } = props;

  if (!meal) {
    return <Loading />;
  }
  return (
    <>
      <Meal meal={meal} />
    </>
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
