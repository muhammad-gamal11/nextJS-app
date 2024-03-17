import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return (
          <li key={id}>
            <Link href={`/drinks/${id}`} className="text-xl font-medium">
              <div className="relative h-48 mb-4">
                <Image
                  src={image}
                  fill
                  sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw"
                  alt={name}
                  className="rounded-md object-cover"
                />
              </div>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DrinksList;
