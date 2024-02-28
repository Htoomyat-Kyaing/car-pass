import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formData);
    navigate("/login");
  };

  return (
    <main className="screen-center">
      <Link to={"/"}>
        <img className="w-48" src="/logo.png" alt="" />
      </Link>

      <form className="card" onSubmit={handleSubmit}>
        <h1 className="py-3 px-4 text-xl bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 rounded-t-md text-white">
          Reset your password
        </h1>

        <div className="p-4 flex flex-col gap-4">
          <div className="flex flex-1 justify-between items-center gap-4">
            <label htmlFor="">New Password</label>
            <input
              className="border-2 border-amber-300 rounded px-2 py-1"
              name="newPassword"
              onChange={handleChange}
              type="password"
              placeholder="Enter your new password"
            />
          </div>
          <div className="flex flex-1 justify-between items-center gap-4">
            <label htmlFor="">Confirm Password</label>
            <input
              className="border-2 border-amber-300 rounded px-2 py-1"
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              placeholder="***********"
            />
          </div>

          <button className="py-1 text-white w-40 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-md rounded self-center">
            Confirm
          </button>
        </div>
      </form>
    </main>
  );
};

export default ResetPassword;
