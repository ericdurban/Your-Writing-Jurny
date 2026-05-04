import './IconContainer.css';

export default function IconContainer({ icon, backgroundColor }) {
  return (
    <div className="icon-container" style={{ backgroundColor }}>
      {icon}
    </div>
  );
}