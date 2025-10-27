import headerLogo from './assets/header-logo.svg'
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-white flex justify-between items-center border-b border-black min-h-[61px] py-2 pl-8 pr-4 mb-15">
      <Link to={'/'}>
        <img src={headerLogo} alt="Header Logo" />
      </Link>
      <button className='bg-white font-inter font-2xl font-medium w-[102px] h-[35px]' type="button">
        Sign in
      </button>
    </header>
  );
}