"use client";
const error = (error) => {
  console.log(error);
  //   return <div className="capitalize text-3xl">something went wrong</div>;
  return <div className="capitalize text-3xl">{error.error.message}</div>;
};
export default error;
