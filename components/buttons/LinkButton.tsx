import Link from "next/link";

interface LinkButtonProps {
  variant: "primary" | "outline" | "ghost";
  color: "primary" | "secondary";
  origin: string;
  link: string;
  children: React.ReactNode;
  classNames?: string;
}

const LinkButton = ({
  variant = "primary",
  color = "secondary",
  origin = "internal",
  link,
  children,
  classNames = "",
}: LinkButtonProps) => {
  const variantClasses = {
    primary: {
      primary: "bg-primary-medium text-white hover:bg-primary-dark",
      secondary: "bg-secondary text-white",
    },
    outlined: {
      primary:
        "border-primary-medium border-2 text-primary-medium hover:bg-primary-dark hover:text-white",
      secondary:
        "border-secondary border-2 text-secondary hover:bg-secondary hover:text-white",
    },
    ghost: {
      primary:
        "bg-primary-medium/[0.15] text-primary-medium hover:bg-primary-medium/[0.25]",
      secondary: "bg-secondary/[0.15] text-secondary hover:bg-secondary/[0.25]",
    },
  };

  return (
    <>
      {origin === "external" ? (
        <a
          href={link}
          className={`rounded-md 
            px-6 
            py-3
            hover:scale-105 
            transition-transform 
            duration-100 
            ease-out 
            grid
            grid-flow-col
            gap-2
            justify-center
            items-center
            group
            ${variantClasses[variant][color]}
            ${classNames}`}>
          {children}
        </a>
      ) : (
        <Link href={link} scroll={false}>
          <a>
            <span
              className={`rounded-md 
              px-6 
              py-3
              h-full
              hover:scale-105 
              transition-transform 
              duration-100 
              ease-out 
              grid
              grid-flow-col
              gap-2
              justify-center
              items-center
              cursor-pointer
              group
              ${variantClasses[variant][color]}
              ${classNames}`}>
              {children}
            </span>
          </a>
        </Link>
      )}
    </>
  );
};

export default LinkButton;
