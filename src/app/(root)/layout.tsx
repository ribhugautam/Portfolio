import React, { Suspense } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div className="pattern h-dvh">
            <div className="h-dvh flex items-center  justify-center">
              <div className="loader"></div>
            </div>
          </div>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </>
  );
}
