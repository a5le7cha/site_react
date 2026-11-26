import type { ReactNode } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactRow({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-line">
      <div className="w-10 h-10 rounded-full bg-blue-soft flex items-center justify-center text-blue-deep shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-ink mb-1">{title}</div>
        <div className="text-sm text-ink-soft leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

export function Contacts() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-ink tracking-tight">Контакты</h1>
        <p className="mt-3 text-ink-soft">Как нас найти и связаться</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <ContactRow
            icon={<MapPin size={18} />}
            title="Адрес"
            text="ул. Театральная, 1, г. Пример"
          />
          <ContactRow
            icon={<Phone size={18} />}
            title="Телефон"
            text="+7 (000) 000-00-00"
          />
          <ContactRow
            icon={<Mail size={18} />}
            title="Email"
            text="info@dk-example.ru"
          />
          <ContactRow
            icon={<Clock size={18} />}
            title="Часы работы"
            text="Пн–Пт: 10:00–20:00 · Сб–Вс: 11:00–18:00"
          />
        </div>

        <form className="bg-white border border-line rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-ink mb-2">Написать нам</h3>
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full px-4 py-3 rounded-xl border border-line bg-milk focus:outline-none focus:border-blue transition-colors text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-line bg-milk focus:outline-none focus:border-blue transition-colors text-sm"
          />
          <textarea
            rows={4}
            placeholder="Сообщение"
            className="w-full px-4 py-3 rounded-xl border border-line bg-milk focus:outline-none focus:border-blue transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-blue-deep text-white font-medium hover:bg-blue transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
