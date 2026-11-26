import type { Event } from "../data/events";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-line overflow-hidden hover:border-blue/40 hover:shadow-sm transition-all">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-soft to-milk flex items-end p-5">
        <span className="px-2.5 py-1 rounded-full bg-white text-blue-deep text-xs font-medium">
          {event.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold text-blue-deep">{event.day}</span>
          <span className="text-xs uppercase tracking-wider text-ink-soft">
            {event.month}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-ink mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed flex-1">
          {event.description}
        </p>

        <div className="mt-4 pt-4 border-t border-line text-xs text-ink-soft flex items-center justify-between">
          <span>{event.time}</span>
          <span>{event.place}</span>
        </div>
      </div>
    </article>
  );
}
