export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12">
      <p className="text-center">
        © {new Date().getFullYear()} My Portfolio.
        All rights reserved.
      </p>
    </footer>
  );
}
