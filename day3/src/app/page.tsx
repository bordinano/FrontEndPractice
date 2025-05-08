export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-950 px-4">
      <div className="bg-slate-900 rounded-[2rem] h-[35rem] w-[30rem] p-8 space-y-8 shadow-lg">
        {/* this is the star */}
        <div className="bg-slate-800 w-[3rem] h-[3rem] rounded-full flex items-center justify-center ">
          <span className="text-xl" role="img" aria-label="star">
            ⭐
          </span>
        </div>
        {/* text contents */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">How's my Service?</h1>
          <p className="text-lg text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            doloribus. Impedit inventore ut repellendus eveniet quos labore
            voluptas autem amet earum voluptatum illo alias corporis,
            dignissimos velit aut ratione temporibus!
          </p>
        </div>

        {/* rating buttonss */}
        <div className="flex gap-4 items-center justify-center">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Rating ${n}`}
              className="bg-slate-800 w-16 h-16 rounded-full text-neutral-400 hover:bg-amber-600 hover:text-black transition-all duration-200"
            >
              {n}
            </button>
          ))}
        </div>

        {/* submit button */}
        <div className="flex justify-center">
          <button className="bg-white text-black hover:bg-amber-600 rounded-[2rem] font-extrabold transition-all duration-200 px-[10rem] py-4">
            SUBMIT
          </button>
        </div>
      </div>
    </main>
  );
}
