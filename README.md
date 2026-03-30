# Portfolio | Design & Development

Modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Modern dark industrial design
- Responsive layout with mobile support
- Smooth animations and transitions
- Custom cursor effect
- Typing animation in hero section
- Project showcase with categorization
- Skills section with animated progress bars
- Contact section with social links

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
│   │   ├── Projects.tsx       # Projects showcase
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

## Standards

This project follows:

- **No-Unicode Policy v2.0** - No emojis or Unicode graphics in code
- **Z.ai Reproducibility Standard v1.0** - Ensuring reproducible builds
- **Worklog System** - Agent coordination and task tracking

See the `docs/` directory for detailed standards documentation.

## License

This project is open source and available under the MIT License.

## Contact

- Email: hello@portfolio.com
- GitHub: [Sts8987](https://github.com/Sts8987)

---

Built with: Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui
