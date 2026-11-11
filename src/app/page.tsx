export default function Home() {
  const board = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-950 px-4 py-8 text-slate-100">
      <main className="flex w-full max-w-6xl flex-col gap-10 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl backdrop-blur sm:p-10">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
            Chessplay
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Play chess 1v1, in rooms, or against the machine
          </h1>
          <p className="max-w-3xl text-slate-300">
            Initial project setup using Next.js, TypeScript, and TailwindCSS.
            Choose a game mode and start your match.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <div
            className="grid w-full max-w-[360px] grid-cols-8 overflow-hidden rounded-xl border border-slate-700"
            aria-label="Chess board preview"
          >
            {board.flatMap((row, rowIndex) =>
              row.map((piece, columnIndex) => {
                const isLightSquare = (rowIndex + columnIndex) % 2 === 0;
                return (
                  <div
                    key={`${rowIndex}-${columnIndex}`}
                    className={`flex aspect-square items-center justify-center text-2xl sm:text-3xl ${
                      isLightSquare ? "bg-slate-200 text-slate-900" : "bg-slate-700"
                    }`}
                  >
                    {piece}
                  </div>
                );
              }),
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-semibold">1v1 Local Match</h2>
              <p className="mt-2 text-sm text-slate-300">
                Play face to face on the same board with standard chess rules.
              </p>
              <button className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950">
                Start 1v1
              </button>
            </article>

            <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-semibold">Play in Rooms</h2>
              <p className="mt-2 text-sm text-slate-300">
                Create or join private rooms to challenge friends online.
              </p>
              <button className="mt-4 w-full rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-100">
                Join Room
              </button>
            </article>

            <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-semibold">Vs Machine</h2>
              <p className="mt-2 text-sm text-slate-300">
                Train your tactics against a computer opponent.
              </p>
              <button className="mt-4 w-full rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-100">
                Play Bot
              </button>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
