import classes from "../styles/section_3.module.css";

export default function Section_3() {
  return (
    <>
      <div className={classes.wrapper}>
        <h3>What we help with...</h3>
        <div className={classes.sub_wrapper}>
          <ul className={classes.sub_section + " " + classes.list}>
            <li>Talking</li>
            <li>Stuttering</li>
            <li>Reading and writing</li>
            <li>Understanding what people say</li>
            <li>Pronouncing sounds clearly and correctly</li>
          </ul>
        </div>
      </div>
    </>
  );
}
