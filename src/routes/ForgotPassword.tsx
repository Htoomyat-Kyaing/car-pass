import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formData);

    navigate("/verifyotp");
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
          <h1>Forgot your password?</h1>
        </div>

        <div className="flex flex-col gap-6 p-9">
          <div className="card-input">
            <label htmlFor="email">Enter your email address</label>
            <input
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Email address"
              autoComplete="email"
            />
          </div>

          <div className="flex items-center justify-end flex-1 gap-4">
            <button className="card-button">Continue</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ForgotPassword;
