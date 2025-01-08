import React from 'react';
// import "./button.css"

interface ButtonProps {
  name: string;
  bgColor : string;
  color : string
  clickHandler: () => void;
}


const Button: React.FC<ButtonProps> = ({ name, clickHandler , bgColor = "blue" , color = "white" }) => {

  const styles ={
    backgroundColor : bgColor,
    color : color
  }
  
  return (
    <button style={styles} onClick={clickHandler}>{name}</button>
  );
};

export default Button;
