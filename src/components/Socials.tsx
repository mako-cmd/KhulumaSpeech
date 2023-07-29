import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classes from "../styles/socials.module.css";

export default function Socials() {
  return (
    <>
      <div className={classes.socials_wrapper}>
        <a
          className={classes.socials_icon}
          title="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          className={classes.socials_icon}
          title="Youtube"
        >
          <YouTubeIcon />
        </a>
        <a
          className={classes.socials_icon}
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </>
  );
}
