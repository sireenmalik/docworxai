import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "./icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-black/5">
      <div className="container-max flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={28} height={28} alt="DocWorx AI" />
          <Link href="/" className="font-semibold">DocWorx AI</Link>
          <span className="ml-2 text-xs text-ink-300">Revenue automated</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/partners">Partners</Link>
          <Link href="/api">API</Link>
          <Link href="/use-cases">Use cases</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portal" className="btn btn-primary">Partner Portal</Link>
        </nav>
        <button className="sm:hidden p-2 rounded-md hover:bg-brand-100" aria-label="Menu">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
