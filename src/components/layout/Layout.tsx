import { Link } from "gatsby";
import React from "react";
import { BsBinocularsFill, BsFillBalloonHeartFill } from "react-icons/bs";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="grid grid-cols-[1fr_min(60ch,calc(100%-64px))_1fr] gap-8 [&>*]:col-start-2 content-start">
        <nav className="my-4 navbar bg-base-100 max-w-4xl mx-auto shadow-md rounded-md">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              TreasureHunt
            </Link>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <BsBinocularsFill />
            </button>
          </div>
        </nav>
      </div>
      <main className="grid grid-cols-[1fr_min(60ch,calc(100%-64px))_1fr] gap-8 [&>*]:col-start-2 content-start">
        {children}
      </main>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="max-w-4xl mx-auto justify-center justify-items-center grid">
          <div>Love and Cake</div>
          <BsFillBalloonHeartFill className="text-white text-3xl" />
        </div>
      </footer>
    </div>
  );
}
