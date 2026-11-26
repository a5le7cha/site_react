import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { events } from "../data/events";
import { collectives } from "../data/collectives";
import { EventCard } from "../components/EventCard";
import { CollectiveCard } from "../components/CollectiveCard";

export function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-soft text-blue-deep text-xs uppercase tracking-widest font-medium mb-6">
          <Sparkles size={12} /> Добро пожаловать
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
          Место, где живёт
          <br className="hidden sm:block" />
          <span className="text-blue-deep"> культура</span> и{" "}
          <span className="text-green-deep">творчество</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-ink-soft leading-relaxed">
          Концерты, спектакли, мастер-классы и творческие студии для всех
          возрастов. Присоединяйтесь к нашему сообществу.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/afisha"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-deep text-white font-medium hover:bg-blue transition-colors"
          >
            Смотреть афишу <ArrowRight size={16} />
          </Link>
          <Link
            to="/collectives"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-deep text-white font-medium hover:bg-green transition-colors"
          >
            Наши коллективы
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ink tracking-tight">
              Ближайшие события
            </h2>
            <p className="mt-2 text-ink-soft">Что интересного скоро в Дворце</p>
          </div>
          <Link
            to="/afisha"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue-deep hover:gap-2.5 transition-all"
          >
            Вся афиша <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      <section className="bg-milk-dark py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-ink tracking-tight">
                Коллективы
              </h2>
              <p className="mt-2 text-ink-soft">
                Творческие студии для детей и взрослых
              </p>
            </div>
            <Link
              to="/collectives"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-green-deep hover:gap-2.5 transition-all"
            >
              Все коллективы <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collectives.slice(0, 3).map((c) => (
              <CollectiveCard key={c.id} collective={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
