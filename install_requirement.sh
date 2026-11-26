#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────
# Скрипт установки проекта Дворца культуры
# React + TypeScript + Vite + Tailwind CSS v4
# ─────────────────────────────────────────────

PROJECT_NAME="dk-site"
PROJECT_DIR="$(pwd)/${PROJECT_NAME}"

# ── Цветной вывод ──
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${GREEN}==>${NC} $*"; }
warn() { echo -e "${YELLOW}!! ${NC} $*"; }
error() { echo -e "${RED}XX ${NC} $*" >&2; }

# ── 1. Проверка Node.js ──
log "Проверяю Node.js..."
if ! command -v node >/dev/null 2>&1; then
  error "Node.js не установлен. Установите с https://nodejs.org/ (нужна версия 20.19+ или 22.12+)"
  exit 1
fi

NODE_MAJOR=$(node -v | sed 's/v\([0-9]*\).*/\1/')
NODE_MINOR=$(node -v | cut -d. -f2)
log "Node.js v$(node -v | sed 's/v//')"

if [[ "$NODE_MAJOR" -lt 20 ]] || { [[ "$NODE_MAJOR" -eq 20 ]] && [[ "$NODE_MINOR" -lt 19 ]]; }; then
  warn "Рекомендуется Node.js 20.19+ или 22.12+. Ваша версия может не поддерживаться Vite 6+."
  warn "Если create-vite упадёт — обновите Node.js или выполните: npm create vite@6 ..."
fi

# ── 2. Создание проекта ──
if [[ -d "$PROJECT_DIR" ]]; then
  warn "Папка $PROJECT_NAME уже существует — пропускаю создание проекта."
else
  log "Создаю проект $PROJECT_NAME..."
  if ! npm create vite@latest "$PROJECT_NAME" -- --template react-ts; then
    error "Не удалось создать проект. Пробую совместимую версию create-vite@6..."
    npm create vite@6 "$PROJECT_NAME" -- --template react-ts
  fi
fi

cd "$PROJECT_DIR"
log "Рабочая директория: $PROJECT_DIR"

# ── 3. Установка базовых зависимостей ──
log "Устанавливаю зависимости React/Vite..."
if [[ ! -d node_modules ]]; then
  npm install
else
  log "node_modules уже существует — пропускаю."
fi

# ── 4. Установка Tailwind CSS v4 + иконок ──
log "Устанавливаю Tailwind CSS v4, плагин Vite и lucide-react..."
npm install tailwindcss @tailwindcss/vite lucide-react

# ── 5. Настройка vite.config.ts ──
log "Настраиваю vite.config.ts..."
cat >vite.config.ts <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
EOF

# ── 6. Настройка src/index.css ──
log "Настраиваю src/index.css..."
cat >src/index.css <<'EOF'
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
EOF

# ── 7. Проверка импорта CSS в main.tsx ──
log "Проверяю src/main.tsx..."
if ! grep -q "import './index.css'" src/main.tsx; then
  # Добавляем импорт в начало файла, если его нет
  sed -i "1i import './index.css'" src/main.tsx
fi

# ── 8. Удаление лишних файлов из шаблона ──
log "Очищаю стандартные файлы шаблона..."
rm -f src/App.css src/assets/react.svg public/vite.svg 2>/dev/null || true

# ── 9. Заглушка App.tsx ──
log "Создаю временный App.tsx (замените на код Дворца культуры)..."
cat >src/App.tsx <<'EOF'
export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1F1B16] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Дворец культуры</h1>
        <p className="mt-4 text-[#1F1B16]/60">
          Проект готов. Замените содержимое <code>src/App.tsx</code>.
        </p>
      </div>
    </div>
  )
}
EOF

# ── 10. Итог ──
echo ""
log "✅ Готово!"
echo ""
echo "Дальше:"
echo "  1) cd $PROJECT_NAME"
echo "  2) npm run dev"
echo "  3) откройте http://localhost:5173/"
echo ""
echo "Проверка сборки:"
echo "  npm run build && npm run preview"
