import "./Row.css";

export default function Row(props: { children: React.ReactNode, label: string }) {
  const { children, label } = props;
  return (
    <div>
      <div className="label">{label}</div>
    <div className="content">
      {children}
    </div>
    </div>
  );
}