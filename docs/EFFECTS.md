# Effects Documentation (v1.3)

Полная документация всех визуальных эффектов и анимаций портфолио.

## Содержание

- [Интерактивные элементы](#интерактивные-элементы)
- [Фоновые эффекты](#фоновые-эффекты)
- [Улучшение UX](#улучшение-ux)
- [Advanced Animations](#advanced-animations)
- [Специфические для портфолио](#специфические-для-портфолио)

---

## Интерактивные элементы

### 1. ScrollProgressIndicator

**Файл:** `src/components/ScrollProgressIndicator.tsx`

Индикатор прогресса прокрутки вверху страницы, показывающий сколько пользователь просмотрел.

**Особенности:**
- Градиентная анимация (indigo → purple → indigo)
- Плавное обновление при скролле
- Фиксированная позиция z-index: 2000

**Использование:**
```tsx
<ScrollProgressIndicator />
```

---

### 2. MagneticButton

**Файл:** `src/components/MagneticButton.tsx`

Кнопки с магнитным эффектом - они притягиваются к курсору мыши.

**Пропсы:**
- `children` - содержимое кнопки
- `className` - дополнительные стили
- `onClick` - обработчик клика
- `href` - ссылка (опционально)
- `strength` - сила магнитного эффекта (default: 20)

**Пример:**
```tsx
<MagneticButton
  strength={25}
  onClick={() => console.log('clicked')}
  className="px-6 py-3 bg-indigo-600 rounded-lg"
>
  Click Me
</MagneticButton>
```

---

### 3. ParallaxSection

**Файл:** `src/components/ParallaxSection.tsx`

Секции с параллакс эффектом при скролле.

**Пропсы:**
- `children` - содержимое секции
- `speed` - скорость параллакса (default: 0.5)
- `className` - дополнительные стили
- `offset` - точки начала и конца анимации (default: ['start end', 'end start'])

**Пример:**
```tsx
<ParallaxSection speed={0.7} className="py-24">
  <h2>Parallax Content</h2>
</ParallaxSection>
```

---

### 4. SmoothImageReveal

**Файл:** `src/components/SmoothImageReveal.tsx`

Эффект плавного появления изображений с blur и масштабированием.

**Пропсы:**
- `src` - URL изображения
- `alt` - alt текст
- `className` - дополнительные стили
- `duration` - длительность анимации в секундах (default: 0.6)

**Пример:**
```tsx
<SmoothImageReveal
  src="/image.jpg"
  alt="Description"
  className="w-64 h-64 rounded-lg"
  duration={0.8}
/>
```

---

### 5. TextReveal / CharReveal

**Файл:** `src/components/TextReveal.tsx`

Эффект "разворачивания" текста по словам или символам.

**TextReveal Пропсы:**
- `children` - текст для анимации
- `className` - дополнительные стили
- `delay` - задержка перед началом (default: 0)
- `duration` - длительность анимации символа (default: 0.5)
- `staggerDelay` - задержка между словами (default: 0.02)

**CharReveal Пропсы:**
- `children` - текст для анимации
- `className` - дополнительные стили
- `delay` - задержка перед началом (default: 0)
- `duration` - длительность анимации символа (default: 0.05)

**Примеры:**
```tsx
<TextReveal delay={0.2} staggerDelay={0.03}>
  This text reveals word by word
</TextReveal>

<CharReveal delay={0.5}>
  Character by character
</CharReveal>
```

---

### 6. MarqueeBanner / VerticalMarquee

**Файл:** `src/components/MarqueeBanner.tsx`

Бесконечно прокручивающийся текст (горизонтальный или вертикальный).

**MarqueeBanner Пропсы:**
- `children` - содержимое для прокрутки
- `speed` - время полного цикла в секундах (default: 20)
- `direction` - направление 'left' или 'right' (default: 'left')
- `className` - дополнительные стили

**VerticalMarquee Пропсы:**
- `children` - содержимое для прокрутки
- `speed` - время полного цикла в секундах (default: 20)
- `direction` - направление 'up' или 'down' (default: 'up')
- `className` - дополнительные стили

**Примеры:**
```tsx
<MarqueeBanner speed={15} direction="left">
  <span>Scrolling text...</span>
  <span>More content...</span>
</MarqueeBanner>

<VerticalMarquee speed={10} direction="up">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</VerticalMarquee>
```

---

### 7. GlitchEffect / AutoGlitch

**Файл:** `src/components/GlitchEffect.tsx`

Глитч-эффект для заголовков с RGB разделением.

**Пропсы:**
- `text` - текст для эффекта
- `className` - дополнительные стили
- `hover` - эффект при наведении (default: false)
- `interval` - интервал авто-глитча в мс (только для AutoGlitch, default: 3000)

**Примеры:**
```tsx
<GlitchEffect text="Hover Me" hover={true} />
<AutoGlitch text="Auto Glitch" interval={2000} />
```

---

## Фоновые эффекты

### 8. AnimatedBackgroundPattern

**Файл:** `src/components/AnimatedBackgroundPattern.tsx`

Анимированный градиентный фон с плавающими орбами.

**Пропсы:**
- `className` - дополнительные стили
- `intensity` - интенсивность 'low' | 'medium' | 'high' (default: 'medium')

**Пример:**
```tsx
<AnimatedBackgroundPattern intensity="high" />
```

---

### 9. ParticleSystem

**Файл:** `src/components/ParticleSystem.tsx`

Система частиц, реагирующих на курсор мыши с соединительными линиями.

**Пропсы:**
- `count` - количество частиц (default: 50)
- `className` - дополнительные стили
- `connectionDistance` - дистанция соединения частиц (default: 150)
- `mouseInteractionRadius` - радиус взаимодействия с курсором (default: 100)

**Пример:**
```tsx
<ParticleSystem
  count={60}
  connectionDistance={200}
  mouseInteractionRadius={150}
/>
```

---

### 10. GradientOrbs

**Файл:** `src/components/GradientOrbs.tsx`

Плавающие градиентные орбы на фоне.

**Пропсы:**
- `className` - дополнительные стили
- `count` - количество орбов (default: 5)

**Пример:**
```tsx
<GradientOrbs count={7} />
```

---

### 11. GridAnimation

**Файл:** `src/components/GridAnimation.tsx`

Анимированная сетка на фоне с пульсирующими ячейками.

**Пропсы:**
- `className` - дополнительные стили
- `cellSize` - размер ячейки в пикселях (default: 50)
- `animationDuration` - длительность цикла анимации (default: 3)

**Пример:**
```tsx
<GridAnimation cellSize={40} animationDuration={4} />
```

---

### 12. NoiseTexture

**Файл:** `src/components/NoiseTexture.tsx`

Текстура шума для добавления глубины и текстуры.

**Пропсы:**
- `className` - дополнительные стили
- `opacity` - прозрачность текстуры (default: 0.03)

**Пример:**
```tsx
<NoiseTexture opacity={0.05} />
```

---

## Улучшение UX

### 13. SkeletonLoader

**Файл:** `src/components/SkeletonLoader.tsx`

Скелетоны для placeholder-состояний контента.

**Пропсы:**
- `className` - дополнительные стили
- `variant` - 'text' | 'rectangular' | 'circular' (default: 'rectangular')
- `width` - ширина (опционально)
- `height` - высота (опционально)
- `lines` - количество линий для text варианта (default: 3)

**Примеры:**
```tsx
<SkeletonLoader variant="text" lines={3} />
<SkeletonLoader variant="rectangular" width={200} height={150} />
<SkeletonLoader variant="circular" width={40} height={40} />
```

---

### 14. ToastNotifications / ToastProvider / useToast

**Файл:** `src/components/ToastNotifications.tsx`

Система всплывающих уведомлений.

**Toast Type:**
- 'success' - зеленая иконка CheckCircle
- 'error' - красная иконка AlertCircle
- 'warning' - желтая иконка AlertTriangle
- 'info' - синяя иконка Info

**Использование:**
```tsx
// Оберните приложение в ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Используйте в компонентах
const { showToast } = useToast()

showToast('Success!', 'success', 3000)
showToast('Error occurred', 'error', 5000)
showToast('Information', 'info', 2000)
showToast('Warning!', 'warning', 4000)
```

---

### 15. KeyboardShortcutsTooltip

**Файл:** `src/components/KeyboardShortcutsTooltip.tsx`

Подсказка клавишных сокращений с кнопкой и модальным окном.

**Интерфейс Shortcut:**
```tsx
interface Shortcut {
  key: string
  description: string
  category?: string
}
```

**Пропсы:**
- `shortcuts` - массив клавиш
- `triggerKey` - клавиша для открытия (default: '?')
- `className` - дополнительные стили

**Пример:**
```tsx
const shortcuts = [
  { key: '?', description: 'Show shortcuts', category: 'General' },
  { key: 'Space', description: 'Toggle play/pause', category: 'Media' },
  { key: 'Esc', description: 'Close', category: 'General' }
]

<KeyboardShortcutsTooltip shortcuts={shortcuts} triggerKey="?" />
```

---

## Advanced Animations

### 16. PageTransitions / SlideFromLeft / SlideFromRight / ScaleIn

**Файл:** `src/components/PageTransitions.tsx`

Анимации переходов элементов при появлении во viewport.

**Пропсы:**
- `children` - содержимое для анимации
- `className` - дополнительные стили
- `delay` - задержка перед началом (default: 0)

**Примеры:**
```tsx
<PageTransitions delay={0.2}>
  <Content />
</PageTransitions>

<SlideFromLeft delay={0.3}>
  <Content />
</SlideFromLeft>

<SlideFromRight delay={0.4}>
  <Content />
</SlideFromRight>

<ScaleIn delay={0.5}>
  <Content />
</ScaleIn>
```

---

### 17. TextScrambleEffect

**Файл:** `src/components/TextScrambleEffect.tsx`

Эффект "расшифровки" текста с рандомными символами.

**Пропсы:**
- `text` - текст для анимации
- `className` - дополнительные стили
- `chars` - символы для эффекта (default: '!<>-_\\/[]{}—=+*^?#________')
- `speed` - скорость анимации в мс (default: 50)

**Пример:**
```tsx
<TextScrambleEffect
  text="Hello World!"
  chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  speed={30}
/>
```

---

### 18. MorphingShapes

**Файл:** `src/components/MorphingShapes.tsx`

Морфинг геометрических фигур на фоне.

**Пропсы:**
- `className` - дополнительные стили
- `count` - количество фигур (default: 3)

**Пример:**
```tsx
<MorphingShapes count={5} />
```

---

### 19. FloatingElements3D / FloatingElement

**Файл:** `src/components/FloatingElements3D.tsx`

3D элементы с параллакс эффектом при скролле.

**FloatingElements3D Пропсы:**
- `children` - содержимое
- `className` - дополнительные стили
- `depth` - глубина 3D эффекта (default: 100)

**FloatingElement Пропсы:**
- `children` - содержимое
- `delay` - задержка анимации (default: 0)
- `amplitude` - амплитуда плавания (default: 20)
- `className` - дополнительные стили

**Примеры:**
```tsx
<FloatingElements3D depth={150}>
  <Content />
</FloatingElements3D>

<FloatingElement delay={0.5} amplitude={30}>
  <Icon />
</FloatingElement>
```

---

## Специфические для портфолио

### 20. Skills3DVisualization

**Файл:** `src/components/Skills3DVisualization.tsx`

3D визуализация навыков с интерактивным вращением.

**Интерфейс Skill:**
```tsx
interface Skill {
  name: string
  level: number
  color: string
}
```

**Пропсы:**
- `skills` - массив навыков
- `className` - дополнительные стили

**Пример:**
```tsx
const skills = [
  { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' }
]

<Skills3DVisualization skills={skills} />
```

---

### 21. TimelineAnimation

**Файл:** `src/components/TimelineAnimation.tsx`

Продвинутая анимация timeline для секции опыта.

**Интерфейс TimelineItem:**
```tsx
interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}
```

**Пропсы:**
- `items` - массив элементов timeline
- `className` - дополнительные стили

**Пример:**
```tsx
const items = [
  {
    year: '2020 - 2022',
    title: 'Senior Developer',
    company: 'Tech Corp',
    description: 'Lead developer for...'
  }
]

<TimelineAnimation items={items} />
```

---

### 22. ProjectCardHover

**Файл:** `src/components/ProjectCardHover.tsx`

Улучшенные hover эффекты для карточек проектов с 3D наклоном.

**Пропсы:**
- `title` - название проекта
- `description` - описание
- `technologies` - массив технологий
- `demoUrl` - ссылка на демо (опционально)
- `repoUrl` - ссылка на репозиторий (опционально)
- `className` - дополнительные стили

**Пример:**
```tsx
<ProjectCardHover
  title="My Project"
  description="Description..."
  technologies={['React', 'TypeScript', 'Next.js']}
  demoUrl="https://demo.com"
  repoUrl="https://github.com/user/repo"
/>
```

---

### 23. TestimonialsAutoScroll

**Файл:** `src/components/TestimonialsAutoScroll.tsx`

Автоматическая прокрутка отзывов с навигацией и прогресс-баром.

**Интерфейс Testimonial:**
```tsx
interface Testimonial {
  name: string
  position: string
  company: string
  text: string
  rating: number
  avatar?: string
}
```

**Пропсы:**
- `testimonials` - массив отзывов
- `interval` - время между слайдами в мс (default: 5000)
- `className` - дополнительные стили

**Пример:**
```tsx
const testimonials = [
  {
    name: 'John Doe',
    position: 'CTO',
    company: 'Company',
    text: 'Great work!',
    rating: 5
  }
]

<TestimonialsAutoScroll testimonials={testimonials} interval={4000} />
```

---

### 24. ContactFormAnimations

**Файл:** `src/components/ContactFormAnimations.tsx`

Анимированная форма контактов с floating labels и валидацией.

**Пропсы:**
- `className` - дополнительные стили

**Пример:**
```tsx
<ContactFormAnimations className="max-w-md" />
```

---

## Интеграция в проект

Все эффекты интегрированы в `src/app/page.tsx`:

- ✅ ScrollProgressIndicator
- ✅ AnimatedBackgroundPattern
- ✅ ParticleSystem
- ✅ NoiseTexture
- ✅ ToastProvider
- ✅ KeyboardShortcutsTooltip

Остальные эффекты доступны для использования в компонентах проекта.

---

## Производительность

### Рекомендации:

1. **Частицы (ParticleSystem)** - ограничьте count до 50-60 для лучшей производительности
2. **AnimatedBackgroundPattern** - используйте intensity 'low' на мобильных устройствах
3. **ParallaxSection** - используйте sparingly на длинных страницах
4. **NoiseTexture** - минимальная opacity (0.02-0.05)
5. **Множественные анимации** - используйте stagger delays для плавности

### Мобильные устройства:

```tsx
// Условный рендеринг для мобильных
<ParticleSystem count={isMobile ? 20 : 50} />
<AnimatedBackgroundPattern intensity={isMobile ? 'low' : 'medium'} />
```

---

## Кастомизация

Все компоненты поддерживают проп `className` для кастомизации стилей через Tailwind CSS.

Цветовые схемы можно изменить, редактируя значения в компонентах:

- `indigo-500` - основной цвет
- `purple-500` - вторичный цвет
- `neutral-900/800` - фоновые элементы

---

## No-Unicode Policy v2.0 Compliance

Все компоненты соответствуют No-Unicode Policy v2.0:
- ✅ Нет эмодзи
- ✅ Используются только Lucide SVG иконки
- ✅ Нет Unicode графики

---

## Z.ai Reproducibility Standard v1.0 Compliance

Все компоненты соответствуют Z.ai Reproducibility Standard v1.0:
- ✅ Нет console.log
- ✅ Нет абсолютных путей
- ✅ Правильная обработка ошибок
- ✅ TypeScript типизация

---

**Версия:** v1.3
**Дата создания:** 2025
**Автор:** Z.ai Code
