import Link from "next/link";

export function SlideNav({ items }) {
  return (
    <aside className="fixed left-5 top-4 bottom-4 z-30 hidden w-[240px] shrink-0 rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.72)] p-5 shadow-[0_30px_80px_rgba(2,8,20,0.34)] backdrop-blur-xl xl:block">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
        Deck Navigation
      </p>
      <div className="mt-6 flex max-h-[calc(100vh-7rem)] flex-col gap-2 overflow-y-auto pr-1">
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="rounded-2xl border border-transparent px-4 py-3 text-sm leading-6 text-white/72 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
          >
            <span className="mr-3 text-white/38">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
