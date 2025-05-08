export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="bg-black flex justify-center ">
        <div className="bg-slate-900 w-120 h-130 rounded-3xl">
          <div className="bg-slate-800 w-12 h-12 rounded-3xl m-5">
            <h1 className="flex text-2xl p-2">⭐</h1>
          </div>
          <div className="flex flex-col  justify-center gap-4 p-4">
            <h1 className="text-3xl font-sans font-bold mb-5">
              How's My Service?
            </h1>
            <p className="text-slate-400 text-sm mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nihil
              voluptate aut! Fugiat labore alias at, earum ea aspernatur
              blanditiis quam deleniti nihil, amet aliquam, obcaecati iste
              consequatur enim neque.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 text-xl font-bold">
            <button className="rounded-full w-18 h-18 bg-slate-800 text-neutral-400 hover:bg-amber-600 hover:text-black">
              1
            </button>
            <button className="rounded-full w-18 h-18 bg-slate-800 text-neutral-400 hover:bg-amber-600 hover:text-black">
              2
            </button>

            <button className="rounded-full w-18 h-18 bg-slate-800 text-neutral-400 hover:bg-amber-600 hover:text-black">
              3
            </button>

            <button className="rounded-full w-18 h-18 bg-slate-800 text-neutral-400 hover:bg-amber-600 hover:text-black">
              4
            </button>

            <button className="rounded-full w-18 h-18 bg-slate-800 text-neutral-400 hover:bg-amber-600 hover:text-black">
              5
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white hover:bg-amber-600 text-black mt-10 w-100 rounded-4xl h-15 font-extrabold text-xl">SUBMIT</button>
          </div>
        </div>
      </main>
    </div>
  );
}
