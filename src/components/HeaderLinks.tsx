import classes from "../styles/headerlinks.module.css";

export default function HeaderLinks() {
  return (
    <>
      <div className={classes.links_wrapper}>
        <HeaderLink
          label="Home"
          url="/"
        />
        <HeaderLink
          label="About"
          url="/about"
        />
        <HeaderLink
          label="Contact"
          url={null}
        />
      </div>
    </>
  );
}

function HeaderLink(data: { label: string; url: string | null }) {
  return (
    <a
      href={data.url || undefined}
      className={classes.link_wrapper}
    >
      <span className="no-select">{data.label}</span>
    </a>
  );
}
