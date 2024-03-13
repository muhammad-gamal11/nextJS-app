import Link from "next/link";
const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        const { idDrink: id, strDrink: name } = drink;
        return (
          <li key={id}>
            <Link href={`/drinks/${id}`} className="text-xl font-medium">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DrinksList;
