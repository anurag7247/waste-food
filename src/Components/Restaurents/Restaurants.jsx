import { useRestaurants } from "./RestaurentsContext/RestaurentContext";
import Card from "./Card";
 export default function Restaurants() {
  const { courseData } = useRestaurants();

  return (
    <>
      <div className="px-4 flex gap-2 flex-wrap justify-around  bg-gradient-to-t from-purple-500 to-pink-600">
        {courseData.map((v, i) => {
          return (
            <div key={i}>
              <Card
                urlImg={v.urlImg}
                vegNonVeg={v.vegNonVeg}
                restaurant={v.restaurant}
                foodItems={v.foodItems}
                address={v.address}
                id={v.idno}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
 