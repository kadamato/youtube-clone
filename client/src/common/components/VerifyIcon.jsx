import "../assets/css/VerifyIcon.css";

export default function VerifyIcon() {
  return (
    <div className="video__info__channel__verify">
      <img
        src="/images/verify-icon.svg"
        alt="verify-icon"
        className="video__info__channel__verify__icon"
      />

      <div className="video__info__channel__verify__subTitle">verified</div>
    </div>
  );
}
