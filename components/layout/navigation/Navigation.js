import Link from "next/link";

const Navigation = ({ toggleMobileNav }) => {
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
