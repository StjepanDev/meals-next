import Meal from './Meal';

const MealList = ({ meals }) => {
  if (meals.length < 1) {
    return <h2 className="section-title">No meals found</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Meals</h2>
      <div className="meals-center">
        {meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </section>
  );
};

export default MealList;
