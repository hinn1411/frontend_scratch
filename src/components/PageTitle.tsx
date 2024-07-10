interface PageTitleProps {
  children: React.ReactNode;
}
export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-heading-400 dark:text-heading-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {children}
    </h1>
  );
}
