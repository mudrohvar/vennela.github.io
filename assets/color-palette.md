# Color Palette - Personal Website

## Primary Colors

### Primary Blue (Main Brand Color)
- **Hex**: `#2563eb`
- **RGB**: `rgb(37, 99, 235)`
- **Usage**: Primary buttons, main headings, key UI elements, links

### Accent Blue (Lighter Accent)
- **Hex**: `#3b82f6`
- **RGB**: `rgb(59, 130, 246)`
- **Usage**: Hover states, secondary buttons, highlights, icons

### Dark Blue (Depth & Contrast)
- **Hex**: `#1e40af`
- **RGB**: `rgb(30, 64, 175)`
- **Usage**: Dark sections, footer backgrounds, strong headings

## Secondary Colors

### Light Blue (Accents)
- **Hex**: `#60a5fa`
- **RGB**: `rgb(96, 165, 250)`
- **Usage**: Decorative elements, subtle highlights

### Sky Blue (Backgrounds)
- **Hex**: `#dbeafe`
- **RGB**: `rgb(219, 234, 254)`
- **Usage**: Light section backgrounds, cards

## Background Colors

### Very Light Blue
- **Hex**: `#f0f9ff`
- **RGB**: `rgb(240, 249, 255)`
- **Usage**: Alternate section backgrounds

### Soft Blue Gray
- **Hex**: `#e0f2fe`
- **RGB**: `rgb(224, 242, 254)`
- **Usage**: Subtle section dividers

### Pure White
- **Hex**: `#ffffff`
- **RGB**: `rgb(255, 255, 255)`
- **Usage**: Main content backgrounds, cards

## Neutral Colors

### Light Gray Background
- **Hex**: `#f8fafc`
- **RGB**: `rgb(248, 250, 252)`
- **Usage**: Neutral sections, subtle backgrounds

### Gray Background
- **Hex**: `#e2e8f0`
- **RGB**: `rgb(226, 232, 240)`
- **Usage**: Borders, dividers

## Text Colors

### Primary Text (Dark)
- **Hex**: `#1e293b`
- **RGB**: `rgb(30, 41, 59)`
- **Usage**: Main headings, important text

### Secondary Text (Medium Gray)
- **Hex**: `#64748b`
- **RGB**: `rgb(100, 116, 139)`
- **Usage**: Body text, descriptions, paragraphs

### Light Text (for dark backgrounds)
- **Hex**: `#f1f5f9`
- **RGB**: `rgb(241, 245, 249)`
- **Usage**: Text on dark blue backgrounds

## CSS Variables Template

```css
:root {
  /* Primary Colors */
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e40af;

  /* Secondary Colors */
  --color-accent: #60a5fa;
  --color-sky: #dbeafe;

  /* Background Colors */
  --bg-light-blue: #f0f9ff;
  --bg-soft-blue: #e0f2fe;
  --bg-white: #ffffff;
  --bg-gray-light: #f8fafc;
  --bg-gray: #e2e8f0;

  /* Text Colors */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-light: #f1f5f9;
}
```

## Color Combinations

### High Contrast (Accessibility)
- Primary Blue (#2563eb) on White (#ffffff) ✓ WCAG AAA
- Dark Blue (#1e40af) on White (#ffffff) ✓ WCAG AAA
- White (#ffffff) on Dark Blue (#1e40af) ✓ WCAG AAA

### Section Color Flow (Suggested)
1. **Hero Section**: Dark Blue (#1e40af) background with white text
2. **About Section**: White (#ffffff) background
3. **Work/Projects Section**: Light Blue (#f0f9ff) background
4. **Process Section**: Primary Blue (#2563eb) background with white text
5. **Contact Section**: Soft Blue Gray (#e0f2fe) background
6. **Footer**: Dark Blue (#1e40af) background with light text

## Animation/Gradient Ideas

### Gradient 1 (Primary to Accent)
```css
background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
```

### Gradient 2 (Dark to Primary)
```css
background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
```

### Gradient 3 (Light Background)
```css
background: linear-gradient(180deg, #f0f9ff 0%, #dbeafe 100%);
```

## Notes
- All colors chosen for professional, trustworthy tech aesthetic
- Excellent contrast ratios for accessibility
- Blue tones create calm, reliable brand perception
- Palette works well with geometric shapes and modern animations
