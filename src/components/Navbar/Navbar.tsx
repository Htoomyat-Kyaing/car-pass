const Navbar = () => {
  return (
    <nav className="flex items-center justify-end w-full bg-white shadow-md min-h-16">
      <figure className="flex items-center gap-2 pr-12 min-w-32">
        <img
          className="w-10 h-10 rounded-full "
          src="/Navbar/avatar.png"
          alt="avatar.png"
        />
        <figcaption className="flex flex-col">
          <p className="text-sm font-semibold">Mark Feehily</p>
          <p className="text-xs ">Admin</p>
        </figcaption>
      </figure>
    </nav>
  );
};

export default Navbar;
