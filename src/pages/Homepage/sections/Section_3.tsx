import classes from "../styles/section_3.module.css";

export default function Section_3() {
  return (
    <>
      <div className={classes.wrapper}>
        <h3>What we help with...</h3>
        <div className={classes.sub_wrapper}>
          <div className={classes.sub_section}>
            <b style={{ fontSize: "x-large" }}>Language</b>
            <div
              className={classes.list}
              style={{ marginTop: "2rem" }}
            >
              <ul>
                <li>Late talkers</li>
                <li>Not saying many words</li>
                <li>Words aren't in the right </li>
                <li>Trouble following instructions</li>
                <li>Trouble understanding what people say</li>
              </ul>
            </div>
          </div>
          <div className={classes.sub_section}>
            <b style={{ fontSize: "x-large" }}>Literacy</b>
            <div
              className={classes.list}
              style={{ marginTop: "2rem" }}
            >
              <ul>
                <li>Reading errors</li>
                <li>Spelling errors</li>
                <li>Slow and effortful reading</li>
                <li>
                  Difficulty with writing - stories don't flow or words aren't
                  in order
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
