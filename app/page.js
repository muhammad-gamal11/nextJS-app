import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1 className="text-7xl">home page</h1>
      <Link href="/about" className="text-2xl">
        about page
      </Link>
    </div>
  );
};
export default page;
