import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-ink mb-2">
            Дворец Культуры
          </div>
          <p className="text-sm text-ink-soft leading-relaxed">
            Пространство для творчества, встреч и вдохновения.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-ink mb-3">Контакты</h4>
          <p className="flex items-center gap-2 text-ink-soft">
            <MapPin size={16} className="text-blue-deep" /> ул. Театральная, 1
          </p>
          <p className="flex items-center gap-2 text-ink-soft">
            <Phone size={16} className="text-blue-deep" /> +7 (000) 000-00-00
          </p>
          <p className="flex items-center gap-2 text-ink-soft">
            <Mail size={16} className="text-blue-deep" /> info@dk-example.ru
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="font-semibold text-ink mb-3">Соцсети</h4>
          <p className="text-ink-soft">ВКонтакте · Telegram</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-ink-soft">
          © {new Date().getFullYear()} Дворец Культуры
        </div>
      </div>
    </footer>
  );
}
