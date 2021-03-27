import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export const PageLayout: React.FC<{}> = ({ children }) => {
  return (
    <main>
      <PageHeader />
      {children}
    </main>
  );
};

const PageHeader: React.FC<{}> = () => {
  const { pathname } = useRouter();
  return (
    <header>
      <h1>gqless-ssr-demo</h1>
      <nav>
        <Link href="/">
          <a className={pathname === "/" ? "is-active" : ""}>Home</a>
        </Link>
        {" / "}
        <Link href="/films">
          <a className={pathname === "/films" ? "is-active" : ""}>Films</a>
        </Link>
        {" / "}
        <Link href="/planets">
          <a className={pathname === "/planets" ? "is-active" : ""}>Planets</a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          font-size: 120%;
        }
        a.is-active {
          text-decoration: none;
          color: darkblue;
        }
      `}</style>
    </header>
  );
};
