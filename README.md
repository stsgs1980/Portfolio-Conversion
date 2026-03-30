# Portfolio | Design & Development

Modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

### Core Features
- Modern dark industrial design
- Responsive layout with mobile support
- Smooth animations and transitions
- Custom cursor effect
- Typing animation in hero section
- Skills section with animated progress bars
- Contact section with social links
- Dark/Light mode toggle with system preference detection
- Page loader animation

## New Features (v1.3)

**Interactive Elements (7 effects):**
- **ScrollProgressIndicator** - Progress bar at the top showing scroll position
- **MagneticButton** - Buttons that attract to cursor
- **ParallaxSection** - Parallax scrolling effect for sections
- **SmoothImageReveal** - Smooth image reveal with blur and scale
- **TextReveal / CharReveal** - Word/character reveal animations
- **MarqueeBanner / VerticalMarquee** - Infinite scrolling text
- **GlitchEffect / AutoGlitch** - Glitch effect with RGB split

**Background Effects (5 effects):**
- **AnimatedBackgroundPattern** - Animated gradient background with floating orbs
- **ParticleSystem** - Interactive particles responding to cursor
- **GradientOrbs** - Floating gradient orbs
- **GridAnimation** - Animated grid on background
- **NoiseTexture** - Noise texture for depth

**UX Enhancements (3 effects):**
- **SkeletonLoader** - Loading placeholders
- **ToastNotifications** - Toast notification system
- **KeyboardShortcutsTooltip** - Keyboard shortcuts help (press ?)

**Advanced Animations (4 effects):**
- **PageTransitions** - Multiple transition variants (fade, slide, scale)
- **TextScrambleEffect** - Text decryption effect
- **MorphingShapes** - Morphing geometric shapes
- **FloatingElements3D** - 3D elements with parallax

**Portfolio Specific (5 effects):**
- **Skills3DVisualization** - 3D interactive skills visualization
- **TimelineAnimation** - Advanced timeline animation
- **ProjectCardHover** - Enhanced hover effects for projects
- **TestimonialsAutoScroll** - Auto-scrolling testimonials
- **ContactFormAnimations** - Animated contact form

**Documentation:**
- Comprehensive effects documentation in [docs/EFFECTS.md](docs/EFFECTS.md)
- 25+ effects with examples and usage guides
- Performance optimization tips
- Mobile device recommendations

**New Features (v1.2)**

**Projects Section:**
- Category filtering with buttons (All, Design Systems, UI Tools, Applications, Resources)
- Real-time search by project name and technologies
- Animated filtering with Framer Motion
- Enhanced project cards with Demo and Repo links
- Detailed project details in modal
- Challenge/Solution/Results structure

**Experience Section:**
- Interactive timeline of work experience
- Zigzag layout for desktop view
- Key achievements with checkmarks
- Technology stack for each position
- Company links and dates

**Presentation Mode:**
- Automatic slideshow between sections (8 seconds)
- Play/Pause controls
- Keyboard navigation (Arrows, Space, F, Esc)
- Fullscreen mode support
- Section indicators and progress bar
- Smooth scroll transitions

**New Sections:**
- **Statistics** - Animated counters (Projects, Experience, Coffee, Technologies)
- **How I Work** - Process flow (Discovery, Design, Develop, Deploy)
- **Testimonials** - Carousel with client/colleague reviews
- **Skills Radar Chart** - Visual skill distribution by category
- **GitHub Activity Graph** - Contribution visualization (52 weeks)

**Enhanced Features:**
- **Theme Toggle** - Dark/Light mode with auto-detection
- **Page Loader** - Loading animation on first visit
- **Back to Top** - Floating button with scroll detection
- **Project Details Modal** - Detailed project information

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ or Bun 1.3+
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sts8987/Portfolio-Conversion.git
cd Portfolio-Conversion
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Run the development server:

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx           # Main page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── CursorEffect.tsx   # Custom cursor component
│   │   ├── Navigation.tsx     # Navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── PageLoader.tsx      # Page loading animation
│   │   ├── BackToTop.tsx       # Back to top button
│   │   ├── Statistics.tsx       # Statistics with animated counters
│   │   ├── HowIWork.tsx       # Work process flow
│   │   ├── Testimonials.tsx     # Testimonials carousel
│   │   ├── SkillsRadar.tsx     # Radar chart skills
│   │   ├── GitHubActivityGraph.tsx # GitHub activity graph
│   │   ├── ProjectDetailsModal.tsx # Project details modal
│   │   ├── ThemeToggle.tsx     # Theme toggle
│   │   ├── PresentationMode.tsx # Presentation slideshow mode
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Projects.tsx       # Projects with filtering and search
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Skills.tsx         # Skills section
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Footer.tsx         # Footer component
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/
│   │   ├── use-mobile.ts      # Mobile detection hook
│   │   └── use-toast.ts       # Toast notifications
│   └── lib/
│       ├── db.ts              # Database client (Prisma)
│       └── utils.ts           # Utility functions
├── docs/
│   ├── FEATURES.md           # New features documentation
│   ├── STANDARDS.md           # Project standards
│   ├── initial-prompt.html    # Original HTML design
│   ├── initial-prompt.css     # Original CSS
│   └── initial-prompt.js      # Original JavaScript
├── public/                    # Static assets
├── .gitignore
├── .env.example
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### Theme

The project uses Tailwind CSS variables for theming. Default theme is dark industrial with indigo accents.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Documentation

- **[FEATURES.md](docs/FEATURES.md)** - Detailed documentation of v1.1 and v1.2 features
- **[EFFECTS.md](docs/EFFECTS.md)** - Complete guide to all 25+ visual effects (v1.3)
- **[STANDARDS.md](docs/STANDARDS.md)** - Project standards and guidelines
- **[worklog.md](worklog.md)** - Agent work log and task tracking

## Standards

This project follows:

- **No-Unicode Policy v2.0** - No emojis or Unicode graphics in code
- **Z.ai Reproducibility Standard v1.0** - Ensuring reproducible builds
- **Worklog System** - Agent coordination and task tracking

## Version History

### v1.3 (Current) - Major Effects Update
- Added 25+ visual effects and animations
- Interactive: ScrollProgress, Magnetic Buttons, Parallax, Image Reveal, Text Reveal, Marquee, Glitch
- Background: Animated Pattern, Particle System, Gradient Orbs, Grid, Noise Texture
- UX: Skeleton Loaders, Toast Notifications, Keyboard Shortcuts
- Advanced: Page Transitions, Text Scramble, Morphing Shapes, 3D Floating Elements
- Portfolio: 3D Skills, Timeline Animation, Project Hover, Auto-scroll Testimonials, Contact Form
- Integrated ScrollProgressIndicator, AnimatedBackgroundPattern, ParticleSystem, NoiseTexture
- Added ToastProvider and KeyboardShortcutsTooltip with 7 shortcuts
- Full documentation in docs/EFFECTS.md

### v1.2
- Added PageLoader with loading animation
- Added BackToTop button with scroll detection
- Added Statistics section with animated counters
- Added How I Work section with process flow
- Added Testimonials carousel with reviews
- Added Skills Radar chart visualization
- Added GitHub Activity graph
- Added Project Details modal
- Added Theme Toggle with dark/light mode
- Added keyboard navigation for modal (Esc to close)

### v1.1
- Added project filtering and search
- Added Experience timeline section
- Added Presentation Mode with auto-scroll
- Enhanced project cards with Demo and Repo links
- Added Experience link to navigation

### v1.0
- Initial release with core portfolio functionality
- Hero, Projects, Skills, Contact sections
- Custom cursor effect
- Smooth animations
- Responsive design

## Contact

- Email: hello@portfolio.com
- GitHub: [Sts8987](https://github.com/Sts8987)

---

Built with: Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui
