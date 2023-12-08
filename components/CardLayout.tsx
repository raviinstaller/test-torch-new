const CardLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`border border-slate-200 rounded-lg bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
