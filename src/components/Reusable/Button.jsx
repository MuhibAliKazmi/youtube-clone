import { Link } from "react-router-dom";
function Button({ styleType = "primary", label, to }) {
  const baseClasses =
    "px-4 py-1 rounded font-semibold inline-block text-center transition";

  const customStyles = {
    primary: "bg-youtube-red text-white hover:bg-red-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const finalStyle = baseClasses + " " + customStyles[styleType];
  return (
    <Link to={to} className={finalStyle}>
      {label}
    </Link>
  );
}

export default Button;
