import { useNavigate } from "react-router-dom";
import Pagination from "../components/Dashboard/Pagination";
import Table from "../components/Dashboard/Table";

const Dashboard = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/carpassticket");
  };
  return (
    <div className="flex flex-col px-4 py-7 gap-7">
      <div className="flex flex-row-reverse w-full">
        <button
          onClick={handleClick}
          className="card-button !max-w-[150px] !text-[16px]"
        >
          Car Pass Ticket
        </button>
      </div>
      <div className="flex gap-[60px]">
        <div className="w-[515px] ">
          <p className="text-3xl ">Lorem, ipsum dolor.</p>
          <p className="text-3xl ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-[515px]">
          <p className="text-3xl ">Lorem, ipsum dolor.</p>
          <p className="text-3xl ">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex gap-[60px]">
        <div className="w-[515px] h-[151px] bg-dashboard-display divide-x-2 flex justify-between items-center  py-7 *:flex-grow divide-white rounded-md shadow-md">
          <div className="flex flex-col items-center justify-center gap-5 text-2xl">
            <p>Large</p>
            <span className="text-[40px]">8</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-2xl">
            <p>Medium</p>
            <span className="text-[40px]">73</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-2xl">
            <p>Small</p>
            <span className="text-[40px]">63</span>
          </div>
        </div>

        <div className="w-[515px] h-[151px] bg-dashboard-display divide-x-2 flex justify-between items-center  py-7 *:flex-grow divide-white rounded-md shadow-md">
          <div className="flex items-center justify-start gap-5 text-2xl indent-9">
            <p className="text-[40px]">$ 4500</p>
          </div>
        </div>
      </div>
      <Table />
      <Pagination />
    </div>
  );
};

export default Dashboard;
