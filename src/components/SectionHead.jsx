export default function SectionHead({ title, intro }) {
  return (
    <div className="sectionhead">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}
