import classes from "../styles/topsection.module.css";

export default function TopSection() {
  return (
    <div className={classes.wrapper}>
      <h1>Khuluma</h1>
      <br />

      <h2 style={{ color: "orange" }}>
        <i>(ku-lu-mah)</i>
      </h2>
      <br />
      <h1>Speech Pathology</h1>
    </div>
  );
}
