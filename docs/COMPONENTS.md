
# Components Documentation

## Navigation Components

### Navbar
The main navigation component with responsive design and smooth animations.

```tsx
<Navbar />
```

Props: None

### Hero Section
Landing section with video button and main call-to-action.

```tsx
<Hero />
```

Features:
- Animated background
- Glowing video button
- Responsive layout

## Content Components

### Features
Grid layout of city services with hover animations.

### About
Information about the city with animated elements.

### Leader
Mayor/leadership section with image and quote.

### Services
Government services grid with interactive cards.

### Blog
News and updates section with article cards.

### Contact
Footer section with social links and contact information.

## Animation Classes

```css
.hover-border-glow
.service-card-hover
.feature-card-hover
.video-button
.float-animation
.glass-effect
```

## Performance Optimizations

- Use of `loading="lazy"` for images
- Efficient CSS animations
- Optimized asset loading
- Minimal re-renders

## Best Practices

1. Always use semantic HTML
2. Implement responsive design
3. Follow accessibility guidelines
4. Optimize images before use
5. Use proper TypeScript types

For detailed implementation examples, see individual component files.
