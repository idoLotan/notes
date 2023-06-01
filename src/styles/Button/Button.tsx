

import Icon from "../Icon/Icon";
import "./Button.css";

type ButtonProps = {
  icon?: string,
  text?: string,
  className?: string,
  style?:string ,
  size?:string,
  onClick: () => void
 }

const Button = ({ icon, onClick, text, className, style, size }:ButtonProps) => {
  return (
    <div
      className={`custom-btn ${className}`}
      style={{ borderBottom: style }}
      onClick={onClick}
    >
      {icon && <Icon Icon={icon} size={size}/>}
      <div className="text">{text}</div>
    </div>
  );
};

export default Button;
