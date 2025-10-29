import { Authenticated, Unauthenticated } from 'convex/react';
import headerLogo from './assets/header-logo.svg'
import { Link } from "react-router";
import { SignInButton, UserButton } from '@clerk/clerk-react';

export default function Header() {
  return (
    <header className="bg-white flex justify-between items-center border-b border-black min-h-[61px] py-2 pl-8 pr-6 mb-15">
      <Link to={'/'}>
        <img src={headerLogo} alt="Header Logo" />
      </Link>
      <Unauthenticated>
        <SignInButton>
          <button className='bg-white cursor-pointer font-inter font-2xl font-medium w-[102px] h-[35px]' type="button">
            Sign in
          </button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </header>
  );
}