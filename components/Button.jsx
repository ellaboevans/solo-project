import envelope from "../src/assets/envelope.svg"
export default function Button() {
  return (
    <div className="btn">
      <button className="social--btn">
        <span className="social-btn--icon">
          <img src={envelope} className="btn--ico" alt="" />
        </span>
        Email
      </button>
    </div>
  );
}
