import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold">
          RecipeShare
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/add-recipe" className="hover:text-gray-200 transition">Add Recipe</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/add-recipe" className="block hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Add Recipe</Link>
        </div>
      )}
    </nav>
  );
}
