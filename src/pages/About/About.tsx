import classes from "./styles/about.module.css";
export default function About() {
  return (
    <div className={classes.page_wrapper}>
      <div className={classes.profile_image_wrapper}>
        <img
          className={classes.profile_image}
          src="/Headshot.png"
          alt="profile"
        />
      </div>
      <div className={classes.profile_info}>
        <h1 className={classes.profile_info_heading}>Hi, I'm Lisa</h1>
        <br />
        <div className={classes.profile_info_body}>
          <p>
            I’m a Certified Practising Speech Pathologist with over 10 years
            experience in a range of contexts. I have experience working in the
            school system, hospital and community services. I’ve also worked in
            the youth Mental Health sector, and also studied a Masters Degree in
            Health Science along the way.
          </p>
          <p>
            But… none of this matters as much as you and your child’s situation.
          </p>
          <p>
            I have two of my own young children and understand how busy life can
            be. My approach is to be led by you and your child’s needs, working
            as a team to support them through their learning needs during their
            early primary years.
          </p>
          <div className={classes.subsection}>
            <h2>Additional training</h2>
            <ul>
              <li>Lidcombe </li>
              <li>Sounds Write</li>
              <li>Hanen – It Takes Two To Talk</li>
              <li>Oral control lisp / tongue thrust</li>
              <li>Gestalt Language Processing – Meaningful Speech </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
