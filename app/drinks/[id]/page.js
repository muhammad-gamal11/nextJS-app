import Link from "next/link";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
// import drinkImg from "./image.jpg";
// console.log(drinkImg);
const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the drink");
  }
  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  //   console.log(data);
  const title = data?.drinks[0]?.strDrink;
  const img = data?.drinks[0]?.strDrinkThumb;
  //   console.log(title, img);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* <Image
        src={drinkImg}
        className="w-48 object-cover rounded-lg"
        alt="drink"
      /> */}
      <Image
        src={img}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        width={300}
        height={300}
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
