export default function Home() {
  return (
    <main className="flex bg-slate-950 items-center  justify-center min-h-screen">
      <div className=" space-y-7 bg-slate-900 p-10 w-[35rem] h-[38rem] rounded-[3rem]">
        <div className="flex items-center justify-center bg-slate-800 h-[4rem] w-[4rem] rounded-full">
          <h1>STAR</h1>
        </div>
        <div className="font-sans space-y-5">
          <h1 className="text-white text-4xl font-bold">How's my Rate?</h1>
          <p className="text-neutral-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            optio aperiam, ducimus assumenda asperiores nihil fugit nobis veniam
            magnam omnis aut quisquam laborum maxime quidem? Eligendi vitae at
            inventore optio?
          </p>
        </div>
        <div className="flex justify-center gap-6">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="bg-slate-800 h-[5rem] w-[5rem] rounded-full text-2xl text-neutral-500 hover:bg-amber-600 hover:text-black "
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center text-xl font-bold">
          <button className="bg-white text-black hover:bg-amber-600 w-[50rem] h-[4rem] rounded-[3rem]">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
