import Button from "./Button";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Evans from "../src/assets/Evans-Elabo.jpg"

export default function Header() {
  return (
    <header>
      <div className="card ">
        <div className="image-container">
          <img
            className="card--image"
            src={Evans}
            alt=""
          />
        </div>
        <h1 className="user--name">Evans Elabo</h1>
        <p className="user--role">Frontend Developer</p>
        <span className="user--link">
          <small>codeconcept.netlify.app</small>
        </span>

        <Button />
        <MainContent />
        <Footer />
      </div>
    </header>
  );
}
