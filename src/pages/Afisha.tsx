import { events } from "../data/events";
import { EventCard } from "../components/EventCard";

export function Afisha() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-ink tracking-tight">Афиша</h1>
        <p className="mt-3 text-ink-soft">
          Все предстоящие события Дворца Культуры
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}
