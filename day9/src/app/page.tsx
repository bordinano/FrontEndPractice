export default function Rating() {
  return (
    <main className="bg-slate-950  flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 p-8 space-y-12 w-[35rem] h-[38rem] rounded-[3rem]">
        <div className="flex items-center justify-center bg-slate-800 w-[3rem] h-[3rem] rounded-full">
          <span className="text-amber-500 text-3xl font-bold">O</span>
        </div>
        <div className="space-y-9">
          <h1 className="font-bold text-4xl">What can you rate?</h1>
          <p className="text-lg text-neutral-400">
            Basta sentence na ano ahasudagsdui asgdi hasuid asuidgasiuguasgdusai
            asui dgasuidg asuidg asudg asuig asd as asjhdasgd osd uasgd iuasgd
            uiasd saduiashd
          </p>
        </div>
        <div className="flex gap-9 justify-center">
          {[1, 2, 3, 4, 5].map((n) => (
            <button className="text-2xl font-bold bg-slate-800 w-[4rem] h-[4rem] rounded-full text-neutral-500 hover:bg-amber-600 hover:text-black">
              {n}
            </button>
          ))}
        </div>
        <div className="flex  text-xl font-bold text-black justify-center">
          <button className="bg-white w-[30rem] h-[4rem] rounded-[3rem] hover:bg-amber-600">SUBMIT</button>
        </div>
      
      </div>
    </main>
  );
}
