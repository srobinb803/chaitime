# ![image](public/logo2.png) CHAITime - Creator Support Platform

CHAITime is a beautifully designed, comic-inspired platform where fans can support creators by "buying them a chai." Built with modern web technologies, it features a fully responsive design, light/dark modes, and smooth scroll-triggered animations.

👉 [Live Demo](#) 

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎨 Comic Book Aesthetic | Panel-based layouts, vibrant colors, and dynamic typography |
| 🌓 Light/Dark Theme | User-toggleable "Paper" and "Ink" modes with automatic OS detection |
| 📱 Fully Responsive | Optimized for all devices from mobile to desktop |
| 🌀 Interactive Animations | Smooth scroll-triggered effects with Framer Motion |
| 🧭 Smart Navigation | Active section tracking in header as you scroll |

## 🛠 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4.1 (CSS-first approach)
- **UI Components:** shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/srobinb803/chaitime.git

# Navigate to project
cd chaitime

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to view the application

## 🎨 Customization Guide

### Theme Colors

Modify in `app/globals.css`:

```css
@theme {
  /* Light theme */
  --color-primary: hsl(0 0% 9%);
  --color-accent: hsl(25 95% 53%);
  --color-background: hsl(220 13% 96%);
}
  /* Dark theme */
.dark {
  --color-primary: hsl(0 0% 95%);
  --color-accent: hsl(25 95% 65%);
  --color-background: hsl(220 13% 8%);
}

```

### Fonts

Update in `app/layout.tsx`:

```tsx
const headingFont = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading'
});
```

### Animations

Edit animation variants in `app/lib/animations.ts`:

```typescript
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.34, 1.56, 0.64, 1] 
    }
  }
};
```

## 🖥️ Component Structure

```
src/
├+---app
|       favicon.ico
|       globals.css
|       layout.tsx
|       page.tsx
|       
+---components
|   |   AnimatedSection.tsx
|   |   ThemeProvider.tsx
|   |   ThemeToggle.tsx
|   |   
|   +---layout
|   |       Footer.tsx
|   |       Header.tsx
|   |       
|   +---sections
|   |       GetStarted.tsx
|   |       Hero.tsx
|   |       HowItWorks.tsx
|   |       testimonial.tsx
|   |       WhyCreatorLoveUs.tsx
|   |       
|   \---ui
|           button.tsx
|           card.tsx
|           dropdown-menu.tsx
|           Icon.tsx
|           
\---lib
        animations.ts
        ScrollManager.tsx
        utils.ts


```

## 🌟 Design Inspiration

CHAITime's design draws inspiration from:

- Comic book panel layouts
- Manga-style speech bubbles
- Retro pop art aesthetics
- Modern neubrutalism trends

The color palette combines warm tea-inspired tones with high-contrast comic book colors:

| Role | Light Mode | Dark Mode |
|------|------------|-----------|
| Primary | ![#171717](  https://placehold.co/100x25/171717/FFFFFF.png?text=Light ) | ![#F2F2F2](https://placehold.co/100x25/F2F2F2/000000.png?text=Dark) |
| Accent | ![#f97415](https://placehold.co/100x25/f97415/000000.png?text=Light) | ![#fb9851](https://placehold.co/100x25/fb9851/000000.png?text=Dark)|
| Background | ![#f3f4f6](https://placehold.co/100x25/f3f4f6/000000.png?text=Light) | ![#121417 ](https://placehold.co/100x25/121417/FFFFFF.png?text=Dark) |



## 🙏 Acknowledgements

- [Placeholder Images](#) - For temporary assets
- [Shadcn/ui](#) - For accessible UI components
- [Framer Motion](#) - For amazing animations
- Comic artists worldwide for design inspiration


