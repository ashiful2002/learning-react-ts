import type React from "react";
type butonType = {
  children: React.ReactNode;
};
const Button = ({ children }: butonType) => {
  return <button className="button">{children}</button>;
};

export default Button;
