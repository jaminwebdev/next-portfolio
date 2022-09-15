interface ActionButtonProps {
  variant: "primary" | "outline" | "ghost";
  color: "primary" | "secondary";
  type: "submit" | "button" | "reset";
  callback: any;
  children: React.ReactNode;
  classNames?: string;
}

const ActionButton = ({
  variant = "primary",
  color = "secondary",
  type,
  callback,
  children,
  classNames,
}: ActionButtonProps) => {
  const variantClasses = {
    primary: {
      primary: "bg-primary-medium text-white hover:bg-primary-dark",
      secondary: "bg-secondary text-white",
    },
    outline: {
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
    <button
      type={type}
      onClick={callback}
      className={`rounded-md 
          px-6 py-2 
          z-30
          hover:scale-105 
          transition-transform 
          duration-100 
          ease-out 
          grid
          gap-2
          grid-flow-col
          justify-center
          items-center
          group
          ${variantClasses[variant][color]} 
          ${classNames}`}>
      {children}
    </button>
  );
};

export default ActionButton;
