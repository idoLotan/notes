import "./Icon.css";

type IconProps = { Icon:string, size?: string}

const Icon = ({ Icon,  size }:IconProps) => {
  return <i className={`fas fa-${Icon} ${size}`} ></i>;
};
export default Icon;
