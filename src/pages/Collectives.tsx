import { collectives } from "../data/collectives";
import { CollectiveCard } from "../components/CollectiveCard";

export function Collectives() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-ink tracking-tight">
          Коллективы
        </h1>
        <p className="mt-3 text-ink-soft">
          Творческие студии для детей и взрослых
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collectives.map((c) => (
          <CollectiveCard key={c.id} collective={c} />
        ))}
      </div>
    </section>
  );
}
