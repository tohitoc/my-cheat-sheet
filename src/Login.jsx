import Header from "./Header";
import Logo from "./assets/Logo.svg"

export default function Login() {
  return (
    <>
      <Header />
      <img src={Logo} alt="Logo" className="my-30 mx-auto"/>
      <div className="flex flex-col gap-5 mx-auto w-full max-w-2/5 font-inter font-normal text-2xl ">
        <button type="button" className="min-h-[48px] bg-lime-200 rounded-lg border">
          Sign up
        </button>
        <button type="button" className="min-h-[48px] bg-sky-200 rounded-lg border">
          Sign in 
        </button>
        <button type="button" className="min-h-[48px] bg-e8e8e8 rounded-lg border">
          Continue as guest
        </button>
      </div>
    </>
  );
}