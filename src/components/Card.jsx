import "./Card.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import IconContainer from "./IconContainer";

export default function Card({
  title,
  content,
  icon,
  iconBackgroundColor,
  link,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="card" onClick={handleClick}>
      {/* Add icon sticker sheet */}
      <IconContainer icon={icon} backgroundColor={iconBackgroundColor} />
      <h2>{title}</h2>
      <p>{content}</p>
      <Button label="Get Started" />
    </div>
  );
}
