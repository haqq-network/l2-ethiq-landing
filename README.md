# L2 ETHIQ Landing Page

A modern landing page built with React, Tailwind CSS 4, and Bun.

## Getting Started

### Install Dependencies

```bash
bun install
```

### Development Server

```bash
bun run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx    # Header component with mobile menu
│   │   └── Footer.tsx    # Footer component
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.ts    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## Design System

The project uses a custom color palette and fonts defined in `tailwind.config.ts`:

- **Colors**: haqq-black, haqq-orange, haqq-blue, haqq-seaweed, etc.
- **Fonts**: guise and clash font families (configured via CSS variables)

## Technologies

- React 18
- TypeScript
- Tailwind CSS 4
- Vite
- Bun

