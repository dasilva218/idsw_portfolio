function Background({ children }: { children: React.ReactNode }) {
  return (
    <section className=" h-screen font-sans bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors overflow-hidden">
      <div className="w-full h-full  inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]">
        {children}
      </div>
    </section>
  );
}

export default Background;