import classes from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <span>
          Powered By{" "}
          <a
            href="https://mako-man.dev"
            target="__blank"
          >
            MakoDev&#127754;
          </a>
        </span>
      </div>
    </>
  );
}
