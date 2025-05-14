import { Butterfly_Kids } from "next/font/google";

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-950">
      <div className="bg-slate-900 w-[30rem] h-[35rem] rounded-[2rem] space-y-8 p-8 ">
        <div
          className="bg-slate-800 h-[4rem] w-[4rem] rounded-full flex items-center justify-center
          "
        >
          <span>star</span>
        </div>
        <div className="font-sans space-y-4">
          <h1 className="text-4xl font-bold">How's my Rate?</h1>
          <p className="text-neutral-400 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dignissimos, nisi ipsa excepturi ad iusto saepe sequi quisquam,
            corporis odio dolor facilis officiis cum ullam. Possimus similique
            eos modi laborum.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="bg-slate-800 h-[4rem] w-[4rem] rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-black
            "
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center text-2xl font-bold">
          <button className="text-black  bg-white w-[70rem] h-[4rem] rounded-[3rem] hover:bg-amber-600">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
