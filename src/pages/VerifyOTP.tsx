import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  let navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate("/resetpassword");
  };

  return (
    <main className="screen-center">
      <Link to={"/"}>
        <img className="w-48" src="/logo.png" alt="" />
      </Link>

      <form className="card" onSubmit={handleSubmit}>
        <h1 className="py-3 px-4 text-xl bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 rounded-t-md text-white">
          Enter your One Time Password (OTP)
        </h1>

        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-center text-xs">
            One Time Password has been sent to your email.
          </h2>

          <div className="flex flex-1 justify-center items-center gap-4">
            <div className="verify-input"></div>
            <div className="verify-input"></div>
            <div className="verify-input"></div>
            <div className="verify-input"></div>
          </div>

          <button className="py-1 text-white w-40 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-md rounded self-center">
            Verify
          </button>

          <div className="flex flex-1 justify-between items-center gap-4">
            <Link className="text-xs" to={""}>
              Didn't receive OTP?
            </Link>
            <Link className="text-xs" to={""}>
              Resend OTP
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default VerifyOTP;
