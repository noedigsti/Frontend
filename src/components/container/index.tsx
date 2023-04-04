interface ContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};
