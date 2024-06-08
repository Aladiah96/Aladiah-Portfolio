export default function Navbar() {
  return (
    <nav className="flex justify-between m-auto text-xl">
      <div className="nav-logo w-14 font-bold">Aladiah</div>
      <div>
        <ul className="flex">
          <li className="mr-5">Home</li>
          <li className="mr-5">Work</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}
