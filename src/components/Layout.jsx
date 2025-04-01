
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const Layout = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
