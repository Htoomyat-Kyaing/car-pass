import { Link } from "react-router-dom";
import Button from "./Button";

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-center min-h-full gap-6 pt-12 j bg-sidebar min-w-64">
      <Link to={"/"}>
        <img className="sidebar-logo" src="/Sidebar/logo.png" alt="" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button path="/" name="Dashboard" img="home.svg" />
        <Button
          path="/carpassticket"
          name="Car Pass Ticket"
          img="file-text.svg"
        />
        <Button path="/view-report" name="Report" img="file-text.svg" />
        <Button
          path="/setupandconfig"
          name="Setup & Config"
          img="settings.svg"
        />
        <Button path="/car-types" name="Car Types" img="" />
        <Button path="/allusers" name="All Users" img="" />
      </div>
    </nav>
  );
};

export default Sidebar;
