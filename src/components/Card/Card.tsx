import React from "react";
type cardType = {
  children: React.ReactNode;
};
const Card = ({ children }: cardType) => {
  return (
    <div className="bg-sky-400 border border-sky-200 capitalize text-white rounded text-start p-2 m-2 shadow-2xl hover:shadow-violet-300">
      {children}
    </div>
  );
};

export default Card;
