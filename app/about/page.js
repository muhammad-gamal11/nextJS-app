import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1 className="text-7xl">home page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </div>
  );
};
export default page;
