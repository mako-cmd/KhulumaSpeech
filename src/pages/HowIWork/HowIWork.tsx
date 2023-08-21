import Timeline from "../../components/Timeline";
import classes from "../../styles/howiwork.module.css";
import { FcInfo } from "react-icons/fc";

export default function HowIWork() {
  const steps = [
    {
      title: "Fill The Form",
      description: (
        <>
          <p className={classes.description}>
            Fill this intake{" "}
            <a
              style={{ color: "blue" }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3c2jA2nmRWP6Q-9xGwMHk9x6Y7MfaSfTaFmIVhZacPy8ivA/viewform?usp=sf_link"
              target="_blank"
            >
              form
            </a>{" "}
            to be considered for our wailist.
          </p>
        </>
      ),
    },
    {
      title: "Get A Response",
      description: (
        <>
          <p className={classes.description}>
            I will respond and let you know if I feel we are a good fit.I will
            respond and let you know if I feel we are a good fit.
          </p>
        </>
      ),
    },
    {
      title: "Assessment",
      description: (
        <>
          <p className={classes.description}>
            We will work together to assess the situation.
          </p>
        </>
      ),
    },
    {
      title: "Therapy",
      description: (
        <>
          <p className={classes.description}>
            Therapy, if appropriate. Please note therapy sessions are delivered
            in blocks (10 weeks), to re-evaluate progress and give your child a
            much needed break.
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <h1>How I Work</h1>
      <div className={classes.wrapper}>
        <div className={classes.timeline}>
          <Timeline steps={steps} />
        </div>
        <h3 className={classes.tip}>
          <FcInfo />
          <i>We suggest placing your child on multiple waitlists</i>
        </h3>
        <br></br>
        <h3>FEES AND POLICIES</h3>
        <div className={classes.fees}>
          <ol>
            <li>
              <b>Fees</b>
            </li>
            <p>Please contact us for our fees.</p>
            <li>
              <b>Rebates</b>
            </li>
            <p style={{ padding: "0  0 0 2rem " }}>
              <ol>
                <li>
                  <b>Chronic Disease Management Plan:</b> You can ask your
                  child’s GP to consider a referral for a Medicare-funded
                  Chronic Disease Management (CDM) plan. This would subsidise up
                  to 5 allied health services per calendar year. More
                  information can be found{" "}
                  <a
                    style={{ color: "blue" }}
                    href="https://www1.health.gov.au/internet/main/publishing.nsf/Content/mbsprimarycare-chronicdisease-pdf-infosheet"
                    target="__blank"
                  >
                    here
                  </a>
                  .
                </li>
                <li>
                  <b>Private Health Insurance:</b> Speech pathology services may
                  be eligible for you to claim through your private health
                  insurance. The extent of your cover depends on the type of
                  policy and extras you select. There are various limits that
                  may apply, for example a limit per service, per year, or
                  lifetime limits. Please check with your private health insurer
                  for more details.
                </li>
                <li>
                  <b>NDIS:</b> The National Disability Insurance Scheme may be
                  available for those with developmental delays or disabilities.
                  Depending on your situation, the NDIS can cover the cost of
                  many allied health services. Khuluma Speech Pathology is able
                  to provide services to self-managed or plan-managed NDIS
                  clients.
                </li>
              </ol>
            </p>
            <li>
              <b>Cancellation Policy:</b>
            </li>
            <p>
              48-hour cancellation policy applies. Any sessions cancellation
              within 48 hours will incur full payment.
            </p>
            <li>
              <b>Privacy Policy</b> (
              <a
                style={{ color: "blue" }}
                href="/Privacy_Policy.pdf"
                target="_blank"
              >
                click me
              </a>
              ).
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
