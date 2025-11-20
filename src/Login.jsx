import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import Header from "./Header";
import Logo from "./assets/Logo.svg"

export default function Login() {
  return (
    <>
      <title>Login</title>
      <Header />
      <img src={Logo} alt="Logo" className="my-30 mx-auto"/>
      <div className="flex flex-col gap-7 mx-auto w-full max-w-2/5 font-inter font-normal text-2xl ">
        <SignUpButton>
          <button type="button" className="cursor-pointer min-h-[48px] bg-purple-100 rounded-lg border">
            Sign up
          </button>
        </SignUpButton>
        <SignInButton>
          <button type="button" className="cursor-pointer min-h-[48px] bg-sky-200 rounded-lg border">
            Sign in 
          </button>
        </SignInButton>
      </div>
    </>
  );
}