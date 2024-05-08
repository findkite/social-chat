import Link from "next/link";
import React from "react";

export default function sidebar() {
  const LoggedIn = { firstName: "hassan", lastName: "allen" };
  return (
    <section>
      <nav>
        <Link href="/" className="mb-2">
          Home
        </Link>
      </nav>
    </section>
  );
}
