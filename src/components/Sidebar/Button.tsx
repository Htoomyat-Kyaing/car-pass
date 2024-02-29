import { NavLink } from "react-router-dom";
import { cn } from "../../utility/cn";

const Button = ({
  path,
  name,
  img,
}: {
  path: string;
  name: string;
  img: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          "bg-white min-w-60 rounded pl-2 py-3 flex gap-3 items-center",
          isActive ? "" : "bg-opacity-50"
        )
      }
    >
      <img className="w-4 h-4" src={`/Sidebar/${img}`} alt={img} />
      {name}
    </NavLink>
  );
};

export default Button;
