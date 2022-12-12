import twitter from "../src/assets/twitter-removebg-preview.png";
import facebook from "../src/assets/facebook-removebg-preview.png";
import instagram from "../src/assets/instagram-removebg-preview.png";
import linkedin from "../src/assets/linkedin-removebg-preview.png";
import github from "../src/assets/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icon--container">
        <img
          src={twitter}
          class="footer-icon"
          width={50}
          alt=""
        />
      </div>

      <div className="footer-icon--container">
        <img
          src={facebook}
          class="footer-icon"
          width={50}
          alt=""
        />
      </div>

      <div className="footer-icon--container">
        <img
          src={instagram}
          class="footer-icon"
          width={50}
          alt=""
        />
      </div>

      <div className="footer-icon--container">
        <img
          src={linkedin}
          class="footer-icon"
          width={50}
          alt=""
        />
      </div>
      <div className="footer-icon--container">
        <img
          src={github}
          class="footer-icon"
          width={50}
          alt=""
        />
      </div>
    </footer>
  );
}
