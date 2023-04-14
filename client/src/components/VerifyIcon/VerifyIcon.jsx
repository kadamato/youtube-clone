import "./VerifyIcon.css";

export default function VerifyIcon() {
  return (
    <div className="verify">
      <img
        src="/images/verify-icon.svg"
        alt="verify-icon"
        className="verify__icon"
      />

      <div className="verify__description">verified</div>
    </div>
  );
}
