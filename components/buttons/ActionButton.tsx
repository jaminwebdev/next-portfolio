interface ActionButtonProps {
  variant: "primary" | "outline" | "ghost";
  color: "primary" | "secondary";
  callback: any;
  children: React.ReactNode;
}

const ActionButton = ({
  variant = "primary",
  color = "secondary",
  callback,
  children,
}: ActionButtonProps) => {
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
      primary: "bg-primary-medium/[0.1] text-primary-medium",
      secondary: "bg-secondary/[0.1] text-secondary",
    },
  };

  return (
    <button
      onClick={callback}
      className={`rounded-md 
          px-6 py-2 
          hover:scale-105 
          transition-transform 
          duration-200 
          ease-out 
          ${variantClasses[variant][color]} `}>
      {children}
    </button>
  );
};

export default ActionButton;
