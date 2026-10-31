import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
