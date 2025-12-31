import { Button } from "@/components/ui/button";
import { NavigationSheet } from "@/components/global/navbar/navigation-sheet";
import { Logo } from "@/components/global/logo"; 
import { NavMenu } from "@/components/global/navbar/nav-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border max-w-(--breakpoint-xl) mx-auto rounded-full z-20">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          { /* 
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
          >
            Sign In
          </Button>
          */}
          <Button className="rounded-full" asChild><Link href="/#contact">Iniziamo!</Link></Button>

          {/* Mobile Menu */}
          <div className="md:hidden z-120">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
