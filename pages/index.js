import path from 'path';
import fs from 'fs/promises';
import MealList from '../components/MealList';

function HomePage(props) {
  const { meals } = props;
  // console.log(meals);
  return <MealList meals={meals} />;
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  if (data.meals.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      meals: data.meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        info: meal.strCategory,
        country: meal.strArea,
      })),
    },
    revalidate: 1000,
  };
}

export default HomePage;
