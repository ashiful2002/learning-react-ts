import React from "react";

type ButtonStyleProps = {
  btnStyle: React.CSSProperties;
};
const StyleProps = ({ btnStyle }: ButtonStyleProps) => {
  return <div style={btnStyle}>StyleProps</div>;
}; 

export default StyleProps;
