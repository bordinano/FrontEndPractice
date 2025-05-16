export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 w-[35rem] h-[36rem] rounded-[3rem] p-8 space-y-8">
        <div className="bg-slate-800 w-[4rem] h-[4rem] rounded-full flex justify-center items-center">
          <span className="text-3xl">⭐</span>
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">How's my Rate?</h1>
          <p className="text-slate-400 text-lg">
            Basta ito maganda sta dads dad asd asd as dasdsadsaoidhsa
            iodhaisodoas hdiasduas duiagdiagdasdi ashidu asud hasdgasou asnayg
            asgd siag so ayon nga ahsadhasd has ahs dadioahdoiahdi haauwhawdw
            uufawwpwfa whf wfhfpad aw afaofj a
          </p>
        </div>
        <div className="flex text-xl font-bold justify-center gap-6">
          {[1, 2, 3, 4, 5].map((n) => (
            <button className="bg-slate-800 w-[5rem] h-[5rem] text-slate-500 rounded-full hover:bg-amber-600 hover:text-black">
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-white w-[30rem] h-[4rem] text-black font-bold text-2xl rounded-[3rem] hover:bg-amber-600">
            SUBMIT
          </button>
        </div>
      </div>
    </main>
  );
}
