interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }) => {
  return <div className="max-w-[1245px] mx-auto px-6 relative">{children}</div>;
};

export default Container;
