import "./Card.css";
import Button from "./Button";
import IconContainer from "./IconContainer";

export function Card({ title, content, icon, iconBackgroundColor }) {
  return (
    <div className="card">
      {/* Add icon sticker sheet */}
      <IconContainer icon={icon} backgroundColor={iconBackgroundColor} />
      <h2>{title}</h2>
      <p>{content}</p>
      <Button label="Click me" />
    </div>
  );
}

export default Card;
