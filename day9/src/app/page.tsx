export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 h-[35rem] w-[35rem] rounded-[2rem] p-8 space-y-10">
        <div className="bg-slate-800 h-[3rem] w-[3rem] rounded-full flex justify-center items-center">
          <span className="text-2xl">⭐</span>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">How's My Service?</h1>
          <p className="text-slate-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            quaerat asperiores in aliquam ut blanditiis autem error veniam et
            ipsum, obcaecati tempore repudiandae ipsa dolores culpa? Eligendi
            temporibus commodi quo.{" "}
          </p>
        </div>
        <div className="flex justify-center gap-9">
          {[1, 2, 3, 4, 5].map((n) => (
            <button className="bg-slate-800 w-[4rem] h-[4rem] text-neutral-400 rounded-full hover:bg-amber-600 hover:text-black transition-all duration-200">
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center ">
          <button className="bg-white text-black w-[50rem] h-[4rem] text-2xl font-bold rounded-[2rem] hover:bg-amber-600">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
