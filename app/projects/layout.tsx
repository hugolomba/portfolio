export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <h2 className="text-5xl font-bold mt-20 text-center uppercase tracking-tighter">
        Projects
      </h2>
      {children}
    </main>
  );
}
