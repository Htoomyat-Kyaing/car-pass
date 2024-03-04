import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userInput: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="root-layout">
      <img
        className="absolute top-0 right-0 w-32 h-32"
        src="/circle.svg"
        alt="/circle.svg"
      />

      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="" />
      </Link>

      <form className="card" onSubmit={handleSubmit}>
        <div className="card-title">
          <h1>Login to your account</h1>
        </div>

        <div className="flex flex-col gap-6 p-9">
          <div className="card-input">
            <label htmlFor="userInput">Email or Phone Number</label>
            <input
              name="userInput"
              onChange={handleChange}
              type="text"
              placeholder="Email or Phone Number"
              autoComplete="userInput"
            />
          </div>
          <div className="card-input">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="***********"
              autoComplete="password"
            />
          </div>

          <div className="flex items-center justify-between flex-1">
            <button className="card-button">Login</button>
            <Link className="text-sm" to={"/forgot-password"}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
