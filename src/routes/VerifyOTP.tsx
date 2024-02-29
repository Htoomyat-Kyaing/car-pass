import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  let navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate("/resetpassword");
  };

  return (
    <main className="root-layout">
      <img
        className="absolute top-0 right-0 w-32 h-32"
        src="/circle.svg"
        alt="circle.svg"
      />

      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="" />
      </Link>

      <form className="card" onSubmit={handleSubmit}>
        <div className="card-title">
          <h1>Enter your One Time Password (OTP)</h1>
        </div>

        <div className="flex flex-col gap-6 p-9">
          <h2 className="text-lg text-center">
            One Time Password has been sent to your email address.
          </h2>

          <div className="flex items-center justify-center flex-1 gap-5">
            <div className="card-otp"></div>
            <div className="card-otp"></div>
            <div className="card-otp"></div>
            <div className="card-otp"></div>
          </div>

          <div className="flex justify-center w-full">
            <button className="card-button">Verify</button>
          </div>

          <div className="flex items-center justify-between flex-1 gap-4">
            <Link className="text-lg" to={""}>
              00:25
            </Link>
            <Link className="text-lg font-bold" to={""}>
              Resend OTP
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default VerifyOTP;
