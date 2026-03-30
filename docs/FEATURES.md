# Новые функции портфолио

> Документация по новым функциям, добавленным в портфолио.
> Обновлено: 2025-01-09

---

## Оглавление

- [Фильтрация и поиск проектов](#1-фильтрация-и-поиск-проектов)
- [Секция опыта работы (Timeline)](#2-секция-опыта-работа-timeline)
- [Режим презентации (Presentation Mode)](#3-режим-презентации-presentation-mode)
- [Управление клавиатурой](#4-управление-клавиатурой)
- [Анимации и переходы](#5-анимации-и-переходы)

---

## 1. Фильтрация и поиск проектов

### Обзор

Функционал фильтрации и поиска позволяет пользователям быстро находить проекты по категориям, названиям и используемым технологиям.

### Фильтрация по категориям

**Доступные категории:**
- **All** - Показывает все проекты
- **Design Systems** - Дизайн-системы и компоненты
- **UI Tools** - Инструменты для работы с UI
- **Applications** - Полнофункциональные приложения
- **Ресурсы** - Документация и обучающие материалы

**Как использовать:**
1. Нажмите на кнопку категории
2. Проекты автоматически фильтруются
3. Анимированное появление карточек

**Визуальные индикаторы:**
- Активная категория: индigo-600 фон, белый текст
- Неактивная категория: нейтральный фон, серый текст
- Hover эффект: затемнение фона

### Поиск проектов

**Возможности поиска:**
- Поиск по названию проекта
- Поиск по технологиям
- Сочетание критериев (AND операция)
- Счетчик найденных проектов
- Кнопка очистки поиска

**Как использовать:**
1. Введите текст в поле поиска
2. Результаты обновляются в реальном времени
3. Нажмите X для очистки

**Примеры запросов:**
- "React" - найдет все проекты с React
- "design" - найдет проекты с "design" в названии
- "TypeScript" - найдет проекты с TypeScript в стеке

### Анимации при фильтрации

Использует **Framer Motion** для плавных переходов:
- `layout` - автоматическая анимация при изменении layout
- `AnimatePresence` - плавное появление/исчезновение
- `popLayout` режим - анимация с эффектом pop
- Продолжительность: 300ms

**Эффекты:**
- Появление карточек с fade-in и scale
- Плавная реорганизация grid
- Индикатор "Проекты не найдены" если результаты пустые

### Улучшенные карточки проектов

**Новые элементы:**
- Кнопка **Demo** (если есть демо-версия)
- Кнопка **Repo** (если есть репозиторий)
- Расширенный технологический стек
- Hover эффекты на кнопках

**Стилизация кнопок:**
- Demo: индigo-500 фон с иконкой стрелки
- Repo: нейтральный фон, полный width если нет demo

**Структура данных проекта:**

```typescript
interface Project {
  id: string
  number: string
  tag: string
  title: string
  description: string
  tech: string[]
  link: string
  demo?: string       // Опциональная ссылка на демо
  repo?: string       // Опциональная ссылка на репозиторий
  fullDescription?: string
}
```

### Компоненты

**Основной файл:** `src/components/Projects.tsx`

**Основные функции:**
- `useMemo` для оптимизации фильтрации
- `useState` для состояния фильтра и поиска
- `AnimatePresence` для анимации карточек

**Ключевые фрагменты кода:**

```typescript
// Фильтрация с useMemo
const filteredProjects = useMemo(() => {
  let projects: Project[] = []

  if (selectedCategory === 'All') {
    projects = projectCategories.flatMap(cat => cat.projects)
  } else {
    const category = projectCategories.find(cat => cat.title === selectedCategory)
    projects = category ? category.projects : []
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    projects = projects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.tech.some(tech => tech.toLowerCase().includes(query))
    )
  }

  return projects
}, [selectedCategory, searchQuery])
```

---

## 2. Секция опыта работы (Timeline)

### Обзор

Временная линия (Timeline) показывает профессиональный путь с деталями о позициях, компаниях, датах и ключевых достижениях.

### Структура Timeline

**Визуальные элементы:**
- Вертикальная линия с точками
- Чередующееся расположение карточек (zigzag)
- Точка на линии для каждого опыта
- Анимация появления при скролле

**Адаптивность:**
- Mobile: карточки слева от линии
- Desktop: чередование слева/справа

### Данные опыта

**Структура данных:**

```typescript
interface ExperienceItem {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  tech: string[]
  link?: string
}
```

**Пример записи:**
```typescript
{
  id: '1',
  company: 'Tech Solutions Inc.',
  position: 'Senior Frontend Developer',
  location: 'Москва',
  startDate: '2022-03',
  endDate: 'Настоящее время',
  description: 'Разработка и поддержка крупномасштабных веб-приложений для enterprise клиентов',
  achievements: [
    'Разработал дизайн-систему на базе React и TypeScript',
    'Оптимизировал производительность приложения на 40%',
    // ...
  ],
  tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma'],
  link: 'https://techsolutions.example.com'
}
```

### Визуальные компоненты

**Заголовок карточки:**
- Позиция (жирный, большой текст)
- Компания (индigo-500, кликабельная если есть ссылка)
- Дата и локация с иконками

**Ключевые достижения:**
- Иконка CheckCircle для каждого пункта
- Список с отступами
- Прокручиваемый если много пунктов

**Технологический стек:**
- Теги с нейтральным фоном
- Border для визуального выделения
- Flex wrap для адаптивности

### Анимации

**Появление при скролле:**
- Initial: opacity 0, x = -50 или +50
- WhileInView: opacity 1, x = 0
- Stagger delay: index * 0.1s
- Viewport margin: -100px

**Hover эффекты:**
- Border color change
- Subtle background shift

### Компоненты

**Основной файл:** `src/components/Experience.tsx`

**Основные функции:**
- Рендеринг списка опыта
- Расчет позиции (левая/правая)
- Анимации при появлении

---

## 3. Режим презентации (Presentation Mode)

### Обзор

Presentation Mode - это автоматизированный режим слайд-шоу для демонстрации портфолио. Предназначен для презентаций, интервью или демо.

### Функции

#### Автоматическая прокрутка
- Интервал: 8 секунд между секциями
- Циклическая прокрутка (последняя -> первая)
- Плавная анимация scroll
- Визуальный прогресс-бар

#### Секции презентации
1. **Hero** - Главная секция
2. **Projects** - Проекты
3. **Experience** - Опыт работы
4. **Skills** - Навыки
5. **Contact** - Контакты

#### Панель управления

**Расположение:** Fixed bottom

**Элементы управления:**
- **Индикаторы секций** - кликабельные точки
- **Play/Pause** - кнопка управления воспроизведением
- **Previous/Next** - кнопки навигации
- **Fullscreen** - кнопка полноэкранного режима
- **Exit** - кнопка выхода из презентации

**Подсказки горячих клавиш:**
- Space: Play/Pause
- Arrows: Navigate
- F: Fullscreen
- Esc: Exit

### Полноэкранный режим

**Функционал:**
- Переключение через кнопку F или иконку
- Автоматическое определение состояния
- Кросс-браузерная поддержка
- Автоматический выход при Esc

**API:**
```typescript
document.documentElement.requestFullscreen()
document.exitFullscreen()
document.fullscreenElement // Проверка состояния
```

### Индикаторы и прогресс

**Section Indicators:**
- Точки для каждой секции
- Активная секция: расширенная индigo-500
- Неактивные: нейтральные
- Клик для быстрой навигации

**Progress Bar:**
- Основной прогресс: процент просмотренных секций
- Auto-scroll progress: индigo-400 линия, сбрасывается каждые 8 сек

**Overlay:**
- Показывает название текущей секции
- Position: fixed top-4 right-4
- Стиль: нейтральный фон, индigo-500 текст

### Компоненты

**Основной файл:** `src/components/PresentationMode.tsx`

**State:**
```typescript
const [isPlaying, setIsPlaying] = useState(false)
const [isFullscreen, setIsFullscreen] = useState(false)
const [currentSection, setCurrentSection] = useState(0)
const [isTransitioning, setIsTransitioning] = useState(false)
```

**Ключевые функции:**

```typescript
// Авто-скролл
useEffect(() => {
  let interval: NodeJS.Timeout

  if (isPlaying) {
    interval = setInterval(() => {
      nextSection()
    }, autoScrollInterval) // 8000ms
  }

  return () => clearInterval(interval)
}, [isPlaying, currentSection, nextSection])

// Клавиатурное управление
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case ' ': togglePlay(); break
      case 'ArrowRight': nextSection(); break
      case 'ArrowLeft': prevSection(); break
      case 'Escape': onExit(); break
      case 'f': case 'F': toggleFullscreen(); break
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [/* dependencies */])
```

### Интеграция

**В page.tsx:**
```typescript
const [isPresentationMode, setIsPresentationMode] = useState(false)

<Navigation onPresentationModeToggle={() => setIsPresentationMode(true)} />
{/* ... */}
{isPresentationMode && (
  <PresentationMode onExit={() => setIsPresentationMode(false)} />
)}
```

---

## 4. Управление клавиатурой

### Горячие клавиши (Global)

| Клавиша | Действие | Контекст |
|---------|----------|----------|
| Space | Play/Pause | Presentation Mode |
| Arrow Right | Следующая секция | Presentation Mode |
| Arrow Left | Предыдущая секция | Presentation Mode |
| F | Включить/выключить полноэкранный режим | Presentation Mode |
| Esc | Выход из полноэкранного режима или презентации | Presentation Mode |

### Навигация по странице

**В обычном режиме:**
- Scroll: прокрутка страницы
- Click по ссылкам в навигации: плавный скролл к секции

**В режиме презентации:**
- Клавиши управления (см. выше)
- Автоматический скролл каждые 8 сек (если включен)

### Паттерны использования

**Презентация для интервью:**
1. Нажмите "Презентация" в навигации
2. Нажмите Space для старта
3. Используйте Arrow Left/Right для управления
4. F для полноэкранного режима
5. Esc для выхода

**Демо с комментарием:**
1. Включите презентацию
2. Пауза (Space)
3. Навигация вручную (стрелки)
4. Комментарий по каждой секции

---

## 5. Анимации и переходы

### Библиотека анимаций

Используется **Framer Motion** для всех анимаций:
- Smooth scroll
- Fade-in/out эффекты
- Layout transitions
- Hover animations
- Scroll-triggered animations

### Типы анимаций

#### Scroll-Triggered Animations

**Применяется к:**
- Section headers
- Project cards
- Experience items
- Skill groups

**Паттерн:**
```typescript
motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, delay: 0.1 }}
```

#### Layout Animations

**Применяется к:**
- Grid проектов при фильтрации
- Изменение количества элементов

**Паттерн:**
```typescript
motion.div layout>
  <AnimatePresence mode="popLayout">
    {items.map(item => (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />
    ))}
  </AnimatePresence>
</motion.div>
```

#### Hover Animations

**Применяется к:**
- Project cards (tilt effect)
- Buttons
- Links

**Tilt Effect Pattern:**
```typescript
const [rotateX, setRotateX] = useState(0)
const [rotateY, setRotateY] = useState(0)

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  setRotateX((y - centerY) / 20)
  setRotateY((centerX - x) / 20)
}
```

### Продолжительности анимаций

| Тип анимации | Длительность | Ease |
|-------------|-------------|------|
| Fade-in | 300-600ms | easeOut |
| Layout transition | 300ms | default |
| Tilt effect | 100ms | easeOut |
| Scroll-triggered | 600ms | easeOut |
| Auto-scroll | 8000ms | linear |

### Performance Optimizations

**Используемые техники:**
- `useMemo` для фильтрации данных
- `useCallback` для обработчиков событий
- `layout` prop для автоматического layout animation
- `AnimatePresence` для выхода элементов из DOM
- `viewport={{ once: true }}` - анимация только один раз

---

## Структура файлов

```
src/
├── components/
│   ├── Projects.tsx          # Фильтрация, поиск, карточки
│   ├── Experience.tsx        # Timeline опыта работы
│   ├── PresentationMode.tsx  # Режим презентации
│   ├── Navigation.tsx        # Навигация с кнопкой презентации
│   ├── Hero.tsx              # Секция hero (section id="hero")
│   ├── Skills.tsx            # Секция навыков (section id="skills")
│   └── Contact.tsx           # Секция контактов (section id="contact")
└── app/
    └── page.tsx              # Главная страница с интеграцией всех компонентов
```

---

## Конфигурация

### Изменение скорости авто-прокрутки

В `src/components/PresentationMode.tsx`:

```typescript
const autoScrollInterval = 8000 // 8 секунд
// Измените это значение для настройки скорости
```

### Добавление новой категории проектов

В `src/components/Projects.tsx`:

```typescript
const projectCategories: ProjectCategory[] = [
  {
    title: 'New Category',
    projects: [
      {
        id: '12',
        number: '012',
        tag: 'Tag',
        title: 'Project Title',
        description: 'Description',
        tech: ['Tech1', 'Tech2'],
        link: '#',
        demo: 'https://demo.example.com',
        repo: 'https://github.com/username/repo'
      }
    ]
  },
  // ... остальные категории
]
```

### Добавление записи в Timeline

В `src/components/Experience.tsx`:

```typescript
const experienceData: ExperienceItem[] = [
  {
    id: '4',
    company: 'Company Name',
    position: 'Position Title',
    location: 'City, Country',
    startDate: '2023-01',
    endDate: 'Настоящее время',
    description: 'Job description',
    achievements: ['Achievement 1', 'Achievement 2'],
    tech: ['Tech1', 'Tech2'],
    link: 'https://company.example.com'
  },
  // ... остальные записи
]
```

---

## Советы по использованию

### Для демонстрации портфолио

1. **Подготовка:**
   - Убедитесь, что все демо-ссылки работают
   - Проверьте актуальность данных в Timeline
   - Тестируйте Presentation Mode

2. **Во время презентации:**
   - Начните с Hero секции
   - Используйте автоматическую прокрутку для непрерывности
   - Пауза для комментариев к ключевым секциям
   - Fullscreen для профессионального вида

3. **Q&A:**
   - Быстрая навигация через индикаторы секций
   - Используйте фильтрацию проектов для показа конкретных примеров
   - Timeline для демонстрации опыта

### Для работодателей

1. **Просмотр проектов:**
   - Используйте фильтрацию по категориям
   - Поиск по конкретным технологиям
   - Кнопки Demo/Repo для глубокого погружения

2. **Оценка опыта:**
   - Chronological view в Timeline
   - Ключевые достижения для каждого места
   - Технологический стек для оценки соответствия

3. **Связь:**
   - Используйте секцию Contact
   - Кнопки в навигации для быстрого доступа

---

## Траблшутинг

### Проблема: Анимации не работают

**Решение:**
- Убедитесь, что Framer Motion установлен: `bun install framer-motion`
- Проверьте, что компоненты обернуты в `motion.div`
- Убедитесь, что viewport настройки правильные

### Проблема: Поиск не находит проекты

**Решение:**
- Проверьте case sensitivity (поиск case-insensitive)
- Убедитесь, что tech массив содержит искомые технологии
- Проверьте логику фильтрации в `useMemo`

### Проблема: Presentation Mode не переключает секции

**Решение:**
- Убедитесь, что секции имеют правильные ID: `hero`, `projects`, `experience`, `skills`, `contact`
- Проверьте, что элементы находятся в viewport
- Проверьте консоль на ошибки JavaScript

### Проблема: Fullscreen не работает

**Решение:**
- Проверьте поддержку в браузере
- Убедитесь, что вызов внутри пользовательского события (клик, клавиша)
- Проверьте, что DOM загружен полностью

---

## Future Enhancements

**Планируемые улучшения:**

1. **Редактор данных**
   - CMS для управления проектами
   - Редактирование Timeline без кода
   - Drag-and-drop для сортировки

2. **Аналитика**
   - Отслеживание просмотров проектов
   - Аналитика использования Presentation Mode
   - Heatmap взаимодействий

3. **Экспорт**
   - PDF экспорт портфолио
   - Экспорт Timeline как CV
   - Генерация QR-кода для контактов

4. **Дополнительные функции**
   - Режим "Screen Saver" для exhibitions
   - Поддержка нескольких языков
   - Темная/светлая тема переключение

---

## Поддержка

**Вопросы или предложения?**

- GitHub Issues: https://github.com/Sts8987/Portfolio-Conversion/issues
- Email: hello@portfolio.com

---

**Версия документации:** 1.0
**Дата последнего обновления:** 2025-01-09
**Совместимость:** Next.js 16, React 19, Framer Motion 12+
