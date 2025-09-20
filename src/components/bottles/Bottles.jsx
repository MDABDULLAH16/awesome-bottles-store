import React, { use } from "react";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  console.log(bottles);

  return (
    <div>
      <h1>Bottles: {bottles.length}</h1>
    </div>
  );
};

export default Bottles;
