interface MessageProps {
  children: React.ReactNode;
}

const Message = ({ children }) => {
  return (
    <div className="py-1 px-3 rounded-r-md mt-1 bg-slate-200 border-l-4 border-secondary/70 dark:bg-body-color-dark">
      {children}
    </div>
  );
};

export default Message;
