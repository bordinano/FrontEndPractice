import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-950">
      <div className="bg-slate-900 h-[35rem] w-[30rem] rounded-[2rem] p-8 space-y-8 ">
        <div className="flex bg-slate-800 w-[3rem] h-[3rem] rounded-full items-center justify-center">
          <span aria-label="STAR" role="img" className="text-2xl">
            ⭐
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">How's My Service?</h1>

          <p className="text-lg text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            blanditiis temporibus! Expedita asperiores error, beatae
            accusantium, officia ipsa repellat molestias fugiat ex animi facilis
            recusandae velit. Quidem, officia? Iure, dignissimos?
          </p>
        </div>
        <div className="flex gap-7 items-center justify-center">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={"Rating ${n}"}
              className="bg-slate-800  w-[4rem] h-[4rem] rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black transition-all duration-200"
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className=" bg-white text-black w-[28rem]  h-[3rem] rounded-[3rem] font-bold text-xl hover:bg-amber-600">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
