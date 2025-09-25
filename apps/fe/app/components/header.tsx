"use client";

import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/icons/6xargs2.png"
              alt="6xargs"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="font-medium text-white">6xargs</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Community
          </Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Help
          </Link>
        </nav>
        <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
          Contact Sales
        </Button>
      </div>
    </header>
  );
}