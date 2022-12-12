import Button from "./Button";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function Header() {
  return (
    <header>
      <div className="card ">
        <div className="image-container">
          <img
            className="card--image"
            src="https://images.unsplash.com/photo-1612214070442-3c806a722f0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEFmcmljYW4lMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
