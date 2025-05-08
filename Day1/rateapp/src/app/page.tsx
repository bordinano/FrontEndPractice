import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center  items-center min-h-screen">
      <div className="bg-slate-900 rounded-4xl w-120 h-150 ">
        <div className="bg-slate-800 h-10 w-10 rounded-full m-6">
          <h1 className="text-xl text-center p-2">⭐</h1>
        </div>
        <div className="font-sans">
          <h1 className="m-8 text-4xl">How's My Service?</h1>
          <p className="m-8 text-lg text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tempore explicabo sapiente dolore provident ipsum? Aut ipsum nam ex
            pariatur suscipit, exercitationem voluptate excepturi, odit esse
            porro corrupti dolor quasi.
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <button className="bg-slate-800 w-15 h-15 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black">
            1
          </button>
          <button className="bg-slate-800 w-15 h-15 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black">
            2
          </button>
          <button className="bg-slate-800 w-15 h-15 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black">
            3
          </button>
          <button className="bg-slate-800 w-15 h-15 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black">
            4
          </button>
          <button className="bg-slate-800 w-15 h-15 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black">
            5
          </button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="bg-white text-black hover:bg-amber-600 h-15 w-100 rounded-4xl font-extrabold text-2xl ">SUBMIT</button>
        </div>
      </div>
    </main>
  );
}
