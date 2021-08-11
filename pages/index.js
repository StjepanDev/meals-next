import path from 'path';
import fs from 'fs/promises';
import MealList from '../components/MealList';
import Head from 'next/head';

function HomePage(props) {
  const { meals } = props;
  meals.sort(() => Math.random() - 0.5);
  return (
    <>
      <Head>
        <title>Home | Meal List</title>
        <meta
          name="keywords"
          content="preparing meals recipes food dinner lunch"
        />
        <meta
          name="description"
          content="Find a lot of great recipes for preparing meals"
        />
      </Head>
      <MealList meals={meals} />
    </>
  );
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
