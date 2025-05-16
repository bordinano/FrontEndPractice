export default function Home() {
  return (
    <div>
    <header className="bg-pink-300 h-[4rem]">
      <nav className="flex justify-end items-center p-4 gap-8 text-3xl font-bold bg-blend-color">
        <th className="hover:underline text-purple-500 ">Home</th>
        <th className="hover:underline text-purple-500 ">About</th>
        <th className="hover:underline text-purple-500 ">Pictures</th>
      </nav>
    </header>
    <main className="min-h-screen bg-purple-300">
      <div className=""></div>
    </main>
    <footer className="bg-pink-400 h-[3rem]"></footer>
    </div>
  );
}
