const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  // error
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
};

const drinks = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">drinks</h1>
    </div>
  );
};
export default drinks;
