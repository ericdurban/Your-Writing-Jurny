import "./IconContainer.css";

export function IconContainer({ icon, backgroundColor }) {
  return (
    <div className="icon-container" style={{ backgroundColor }}>
      {icon}
    </div>
  );
}

export default IconContainer;
