import { Link, useNavigate } from "react-router-dom";

const Print = () => {
  let navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // console.log(formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <main className="root-layout !pt-5 !gap-5">
      <img
        className="absolute top-0 right-0 w-32 h-32"
        src="/circle.svg"
        alt="/circle.svg"
      />

      <div className="flex items-center justify-end w-full max-w-[1000px]">
        <Link to={"/"}>
          <img className="logo !max-h-[112px]" src="/logo.png" alt="" />
        </Link>
        <div className="min-w-[333px] min-h-[112px] flex justify-end items-end">
          <button
            className="card-button !max-w-[150px]"
            onClick={() => {
              navigate("/");
            }}
          >
            Dashboard
          </button>
        </div>
      </div>

      <form
        className="card !max-w-[1000px] !min-h-[635px]"
        onSubmit={handleSubmit}
      >
        <div className="card-title flex justify-between !py-2">
          <h1>Car Pass Ticket</h1>

          <div className="min-w-[146px] min-h-[56px] flex items-center justify-center gap-2">
            <p>Number</p>
            <span>:</span>
            <div className="rounded w-full max-w-[60px] min-h-[56px] bg-white flex items-center justify-center">
              25
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-9">
          <div className="card-input pl-7 !pr-28">
            <label className="!text-2xl" htmlFor="date">
              Date
            </label>
            <input
              className="!max-w-[593px] !indent-0 !px-5 !text-xl !min-h-16 "
              name="date"
              onChange={handleChange}
              type="date"
            />
          </div>

          <div className="card-input pl-7 !pr-28">
            <label className="!text-2xl" htmlFor="type">
              Select Vehicle Type
            </label>
            <div className="relative w-full max-w-[593px]">
              <select className="w-full !indent-0 !px-5 !text-xl !min-h-16 appearance-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <img
                className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 right-[10px] top-1/2"
                src="/chevron-down.svg"
                alt=""
              />
            </div>
          </div>

          <div className="card-input pl-7 !pr-28">
            <label className="!text-2xl" htmlFor="type">
              Vehicle Number
            </label>
            <input
              className="!max-w-[593px] !indent-0 !px-5 !text-xl !min-h-16"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="Enter Vehicle Number"
            />
          </div>

          <div className="card-input pl-7 !pr-28">
            <label className="!text-2xl" htmlFor="type">
              Timestamp
            </label>
            <input
              className="!max-w-[593px] !indent-0 !px-5 !text-xl !min-h-16"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="4:12PM"
            />
          </div>

          <div className="card-input pl-7 !pr-28">
            <label className="!text-2xl" htmlFor="type">
              Amount to pay
            </label>
            <input
              className="!max-w-[593px] !indent-0 !px-5 !text-xl !min-h-16"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="$0"
            />
          </div>

          <div className="flex justify-center w-full">
            <button className="card-button !min-w-[640px] !min-h-[69px] flex gap-2 justify-center items-center">
              <img className="w-6 h-6 " src="/printer.svg" alt="printer.svg" />
              <p className="text-2xl font-bold">Save & Print</p>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Print;
