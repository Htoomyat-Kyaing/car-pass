import { useState } from "react";
import Select from "react-select";

const AddNewUser = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [passwordError, setPasswordError] = useState("");
  const [selectedRole, setSelectedRole] = useState("none");
  const [userData, setUserData] = useState({
    name: "",
    emailaddress: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const data = [
    { name: "Username*", fieldName: "name", type: "text" },
    { name: "Email Address", fieldName: "emailaddress", type: "email" },
    { name: "Phone Number*", fieldName: "phone", type: "tel" },
    { name: "Password", fieldName: "password", type: "password" },
    {
      name: "Confirm Password",
      fieldName: "confirmPassword",
      type: "password",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleRoleChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedRole(selectedOption.value);
      setUserData((prevInputs) => ({
        ...prevInputs,
        role: selectedOption.label,
      }));
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setPasswordError("Passwords Do Not Match");
      return;
    }
    setPasswordError("");
    console.log(userData);
  };
  function changeType(fieldName) {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [fieldName]: !prevVisibility[fieldName],
    }));
  }
  return (
    <section className="root-layout">
      <div
        className="bg-white shadow-lg rounded-xl"
        style={{ width: "600px", height: "600px" }}
      >
        <h1 className="flex items-center w-full h-16 px-10 text-lg font-bold text-white bg-yellow-500 rounded-t-xl">
          Add New User
        </h1>
        <form onSubmit={handleClick}>
          <div className="flex flex-col px-5 py-10 itmes-center gap-y-6">
            {data.map((data) => (
              <div
                className="grid items-center gap-x-5 px-11 h-11"
                style={{ gridTemplateColumns: "1fr 300px" }}
              >
                <span className="text-lg font-semibold">{data.name}</span>
                {data.type === "password" ? (
                  <div
                    className="grid items-center h-10 pr-3 bg-white border border-gray-800 rounded-md"
                    style={{ gridTemplateColumns: "1fr 16px" }}
                  >
                    <input
                      id="passwordfield"
                      type={
                        passwordVisibility[data.fieldName] ? "text" : "password"
                      }
                      name={data.fieldName}
                      value={userData[data.fieldName]}
                      className="h-full ml-2 border-none outline-none"
                      onChange={handleChange}
                    />
                    {passwordVisibility[data.fieldName] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                        onClick={() => changeType(data.fieldName)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                        onClick={() => changeType(data.fieldName)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </div>
                ) : (
                  <input
                    className="h-full px-3 border border-gray-600 rounded"
                    value={userData[data.fieldName]}
                    type={data.type}
                    name={data.fieldName}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            <div
              className="grid items-center gap-x-5 px-11 h-11"
              style={{ gridTemplateColumns: "1fr 300px" }}
            >
              <span className="text-lg font-semibold">Role</span>
              <div className="flex card justify-content-center">
                <Select
                  name="role"
                  className="w-full rounded-md react-select h-11"
                  classNamePrefix="select"
                  options={[
                    { value: { selectedRole }, label: "Admin" },
                    { value: { selectedRole }, label: "Staff" },
                  ]}
                  isClearable={false}
                  onChange={handleRoleChange}
                />
              </div>
            </div>
            <div className="flex ">
              <input
                className="mx-10 text-base font-semibold bg-yellow-500 rounded-md w-28 h-11 hover:shadow-md hover:cursor-pointer"
                type="submit"
                name="Add"
              />
              {passwordError && (
                <div className="mt-2 text-sm text-black">{passwordError}</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewUser;
