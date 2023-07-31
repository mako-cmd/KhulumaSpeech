export default function SplashScreen() {
  if (document !== null) {
    window.onload! = () => {
      setTimeout(() => {
        document.getElementById("splash-screen")!.style.opacity = "0";
      }, 2000);
      setTimeout(() => {
        document.getElementById("splash-screen")!.style.display = "none";
      }, 3000);
    };
  }
  return (
    <>
      <div
        id="splash-screen"
        style={{
          position: "absolute",
          left: "0",
          opacity: "1",
          top: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          display: "grid",
          placeItems: "center",
          placeContent: "center",
          transition: "all 1s ease-in-out",
        }}
      >
        <h1>Khuluma Speech</h1>
      </div>
    </>
  );
}