'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { pixelToast } from "./Toast";

const Navbar = () => {
  const { data: session } = authClient.useSession()
  const router = useRouter()
  const [show, setshow] = useState(false);
  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          pixelToast.success("Successfully Logged Out")
          router.replace("/login");
        },
        onError: (ctx) => {
          pixelToast.error("Error LoggingOut", ctx.error.message)
        }
      },
    });
  }
  const pathName= usePathname();
  const linkActive=(path)=>{
    const isActive=pathName.startsWith(path)
    return isActive?'text-white':'text-zinc-500'
  }
  return (
    <div className="z-2 retro w-full sm:py-4 py-4 fixed flex items-center justify-between text-white px-[3vw] bg-zinc-900/80">
      <Link href='/'>
        <div className="flex items-end gap-1 sm:gap-4 z-2">
          <img className="w-6 sm:w-8" src="/logo.svg" alt="" />
          <div className="text-md sm:text-xl">Portal</div>
        </div>
      </Link>

      <div className="hidden sm:flex gap-8 items-center">
        <Link href='/generate'>
          <div className={`${linkActive('/generate')} text-xs leading-tight [word-spacing:-0.3rem] text-right`}>
            Want to Make One <br /> for yourself?
          </div>
        </Link>
        <Link href='/about'>
          <div className={`${linkActive('/about')} sm:block text-xs leading-tight [word-spacing:-0.3rem] text-right`}>
            What's This?
          </div>
        </Link>
        {session?.user && <button onClick={handleLogout} className="sm:block text-xs -ml-3 -mr-5 leading-tight [word-spacing:-0.3rem] text-right bg-zinc-700/50 text-zinc-500 rounded-2xl py-2 px-4 hover:bg-red-500 hover:text-white">
          Logout
        </button>}
      </div>
      <div onClick={() => setshow(!show)} className="mr-1.5 sm:hidden block">
        {(show) ? <div className="relative z-2 mr-7 -mt-1">
          <div className="absolute inset-0 w-7 h-[2.5] rotate-45 bg-white"></div>
          <div className="absolute inset-0 w-7 h-[2.5] -rotate-45 bg-white"></div>
        </div> : <div>
          <div className="w-7 h-[3] mb-[5] bg-white"></div>
          <div className="w-7 h-[3] mb-[5] bg-white"></div>
          <div className="w-7 h-[3] mb-[5] bg-white"></div>
        </div>
        }
      </div>
      <div className={`${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-52'} bg-black/80 z-1 absolute inset-0 pt-16 flex flex-col w-full h-[30vh] transition-all duration-500 ease-in-out`}>
        <Link onClick={() => setshow(!show)} href="/about">
          <div className={`${linkActive('/about')} sm:hidden text-xs border-y-2 w-full text-center py-3`}>
            What's This?
          </div>
        </Link>
        <Link onClick={() => setshow(!show)} href={"/generate"}>
          <div onClick={() => setshow(!show)} className={`${linkActive('/generate')} sm:hidden text-xs w-full text-center py-3`}>
            Make One for yourself?
          </div>
        </Link>
        {session?.user && <div onClick={()=>{setshow(!show); handleLogout()}} className="sm:hidden text-zinc-500 text-xs border-y-2 w-full text-center py-3 active:bg-red-500 active:text-white">
          Log Out
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
