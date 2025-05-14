export default function Home() {
  return (
    <main className="flex bg-slate-950 min-h-screen items-center justify-center">
      <div className="bg-slate-800 p-7 rounded-[3rem] h-[35rem] w-[30rem] space-y-10">
        <div
          className="bg-slate-700 rounded-full h-[4rem] w-[4rem] flex items-center
          justify-center "
        >
          <h1>STAR</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">How's my Rating</h1>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            magni nostrum dignissimos rem fugiat nam pariatur, ullam fuga dolor
            enim, perferendis totam. Quos accusantium quisquam fuga iusto quas
            est facere.
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="bg-slate-700 rounded-full h-[4rem] w-[4rem] hover:bg-amber-600 hover:text-black"
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center text-xl font-bold ">
          <button className="text-black bg-white w-[100rem] h-[4rem] rounded-[2rem] hover:bg-amber-600">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
