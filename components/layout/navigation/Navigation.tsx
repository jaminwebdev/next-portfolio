import Link from "next/link";

interface NavigationProps {
  toggleMobileNav: () => {};
}

const Navigation = ({ toggleMobileNav }: NavigationProps) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Navigation</a>
        </Link>
      </div>
      <div>
        <p onClick={toggleMobileNav}>toggle</p>
      </div>
    </div>
  );
};

export default Navigation;
