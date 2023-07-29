import classes from "../styles/workwithme.module.css";
export default function WorkWithMe() {
  return (
    <>
      <a>
        <div className={classes.wrapper}>
          <span
            className="no-select"
            style={{ fontSize: "x-large" }}
          >
            Work With Me
          </span>
        </div>
      </a>
    </>
  );
}
