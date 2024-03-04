import { useNavigate } from "react-router-dom";
import Table from "../components/Report/Table";

const Report = () => {
  let navigate = useNavigate();
  const handleBackArrow = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col px-4 py-7 gap-7">
      <img
        onClick={handleBackArrow}
        className="w-6 h-6"
        src="/arrow-left.svg"
        alt=""
      />

      <h1 className="text-2xl font-['Libre_Baskerville'] font-bold">
        Admin Permission
      </h1>
      <Table />
    </div>
  );
};

export default Report;
