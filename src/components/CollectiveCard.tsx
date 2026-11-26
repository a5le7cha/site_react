import { Users } from "lucide-react";
import type { Collective } from "../data/collectives";

export function CollectiveCard({ collective }: { collective: Collective }) {
  return (
    <article className="group p-6 rounded-2xl bg-white border border-line hover:border-green/40 hover:shadow-sm transition-all flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-green-soft flex items-center justify-center text-green-deep">
          <Users size={18} />
        </div>
        <span className="px-2.5 py-1 rounded-full bg-milk border border-line text-xs text-ink-soft">
          {collective.age}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-ink mb-2 leading-snug">
        {collective.name}
      </h3>
      <p className="text-sm text-ink-soft leading-relaxed flex-1">
        {collective.description}
      </p>

      <div className="mt-4 pt-4 border-t border-line text-xs text-ink-soft">
        Расписание: {collective.schedule}
      </div>
    </article>
  );
}
