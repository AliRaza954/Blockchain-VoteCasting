import React from "react";
import Link from "next/link";

// components

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function Landing() {
	
	
	return (
    <>
    <AuthNavbar fixed />

	<section className="header relative pt-6 items-center flex h-screen">

        <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
            </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                Enter Party Details
                </label>
                <input
                    type="Party Name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Party Name"
                    id="Party-name"
                    maxLength="20"
                    required
                />

                <input
                    type="Party Symbol"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none mt-4 focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Party Symbol"
                    id="Party-symbol"
                    maxLength="20"
                    required
                    />
                </div>

                <div className="text-center mt-6">
                <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={ () => callRegisterUser()}
                    >
                    CONTINUE
                    </button>
                </div>
                </form>
                </div>
                
                </div>
            
            </div>
            </div>
        </div>
        
        </section>
            


    <Footer />
    </>
);
}
