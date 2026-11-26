import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/afisha", label: "Афиша" },
  { to: "/collectives", label: "Коллективы" },
  { to: "/contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-milk/95 backdrop-blur border-b border-line">
      {/* Верхняя строка — название учреждения */}
      <div className="text-center py-5">
        <Link to="/" className="inline-block group">
          <div className="text-[10px] uppercase tracking-[0.35em] text-ink-soft mb-1">
            Муниципальное учреждение
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-ink tracking-wide group-hover:text-blue-deep transition-colors">
            Дворец Культуры им. А. М. Добрынина
          </div>
        </Link>
      </div>

      {/* Нижняя строка — навигация */}
      <nav className="border-t border-line bg-white">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-center gap-6 sm:gap-10 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-blue-deep font-semibold"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
