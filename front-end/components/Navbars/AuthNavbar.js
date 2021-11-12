import React from "react";
import Link from "next/link";
// components

import {
  Signout,
} from "components/contractcallfunctions";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);



  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <img alt="..." className="w-15 mr-1" src="/img/vote.jpeg" />
                VoteCaster
              </a>
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              

              
              <li className="flex items-center">
                <form>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => Signout()}
                    >
                      SIGNOUT
                    </button>
                  </div>
                </form>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    </>
  );
}
