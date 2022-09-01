import Link from "next/link";

interface DropDownLinkProps {
  link: string;
  children: React.ReactNode;
}

const DropDownLink = ({ link, children }: DropDownLinkProps) => {
  return (
    <div className="peer">
      <Link href={link} scroll={false}>
        <a className="text-lg font-medium py-4 px-5 text-secondary hover:bg-secondary/20 hover:text-secondary dark:hover:text-white w-full grid gap-3 grid-flow-col justify-start items-center">
          {children}
        </a>
      </Link>
    </div>
  );
};

export default DropDownLink;
