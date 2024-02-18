'use client';
import { Karla } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import PageWrapper from "@/component/pagewapper";
import { useState } from "react";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [togglerCollapse, setTogglerCollapse]= useState(false);
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="flex min-h-screen">
          <Header togglerCollapse={togglerCollapse} setTogglerCollapse={setTogglerCollapse}></Header>
          <Sidebar togglerCollapse={togglerCollapse}></Sidebar>
          <PageWrapper togglerCollapse={togglerCollapse}>
            {children}
          </PageWrapper>
        </div>
      </body>
    </html>
  );
}
