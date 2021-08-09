import Meal from './Meal';

const MealList = ({ meals }) => {
  if (meals.length < 1) {
    return <h2 className="section-title">NO MEALS FOUND</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">MEALS</h2>
      <div className="cocktails-center">
        {meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </section>
  );
};

export default MealList;
