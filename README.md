# SmartStock.AI Website

A modern, visually stunning website for **SmartStock.AI** - an AI-powered, voice-enabled inventory management solution for Indian MSMEs.

## 🚀 Features

- **Dark Theme Design**: Sleek black background with purple and cyan accents
- **Three.js Particle System**: Animated particle background in hero section
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Counter Animations**: Animated statistics and progress bars
- **Glassmorphism Effects**: Modern glass-like card designs
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance Optimized**: Fast loading with optimized assets

## 🎨 Design System

### Colors
- **Primary Background**: Pure black (#000000)
- **Secondary Background**: Dark charcoal (#1A1A1A)
- **Accent Purple**: #8B5CF6
- **Accent Cyan**: #22D3EE
- **Accent Green**: #10B981 (for success states)
- **Text Primary**: #FFFFFF
- **Text Secondary**: #A0A0A0

### Typography
- **Headings**: Space Grotesk (600/700)
- **Body**: Inter (400/500/600/700/800)

## 📁 Project Structure

```
smartstock-website/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── animations.css      # Animation keyframes
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js            # Main JavaScript
│   ├── particles.js       # Three.js particle system
│   └── counters.js        # Counter animations
├── assets/
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript**: ES6+ features, Intersection Observer API
- **Three.js**: 3D particle system
- **Font Awesome**: Icons
- **Google Fonts**: Inter & Space Grotesk

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - it's ready to use!

### Local Development

For local development with a server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Responsive Breakpoints

- **Mobile**: up to 768px
- **Tablet**: 769px to 1024px
- **Desktop**: 1025px to 1440px
- **Large Desktop**: 1441px and up

## 🎯 Key Sections

1. **Hero Section**: Animated particle background with main CTA
2. **Problem Statement**: Statistics about MSME challenges
3. **Solution Overview**: Three feature columns with benefits
4. **How It Works**: 4-step process flow with example
5. **Technology Stack**: Frontend and AI/ML backend details
6. **Competitive Advantage**: Side-by-side comparison
7. **Benefits**: Financial metrics and qualitative benefits
8. **Team & Status**: Project progress and team information
9. **Call-to-Action**: Final conversion section
10. **Footer**: Links and contact information

## ⚡ Performance Features

- **Lazy Loading**: Images and sections load as needed
- **Optimized Animations**: 60fps smooth animations
- **Reduced Motion Support**: Respects user preferences
- **Mobile Optimization**: Reduced particle count on mobile
- **Efficient JavaScript**: Debounced scroll handlers

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: WCAG 2.1 AA compliant
- **Focus Indicators**: Visible focus states
- **Skip Links**: Jump to main content
- **Semantic HTML**: Proper heading hierarchy

## 🎨 Animation System

### Scroll Animations
- Elements fade in and slide up when scrolled into view
- Staggered delays for multiple elements
- Intersection Observer API for performance

### Counter Animations
- Numbers count up from 0 to target value
- Smooth easing with customizable duration
- Support for currency, percentage, and number formats

### Hover Effects
- Cards lift and scale on hover
- Buttons glow and scale
- Icons rotate and pulse

## 🔧 Customization

### Colors
Update CSS custom properties in `css/styles.css`:

```css
:root {
  --color-purple: #8B5CF6;
  --color-cyan: #22D3EE;
  /* ... other colors */
}
```

### Animations
Modify animation durations in `css/animations.css`:

```css
.animate-on-scroll {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Particle System
Adjust particle count and behavior in `js/particles.js`:

```javascript
const particleCount = window.innerWidth < 768 ? 500 : 1500;
```

## 📊 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Android 60+

## 🚀 Deployment

### Static Hosting
Upload all files to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository
- **AWS S3**: Upload files to a bucket

### CDN
For production, consider using a CDN for:
- Three.js library
- Font Awesome icons
- Google Fonts

## 📝 License

This project is created for SmartStock.AI. All rights reserved.

## 👥 Team

- **Pranav Shankar Shinde**: Founder & Developer
- **Prof. Dr. Rajeshkumar Sambhe**: Project Guide & Mentor

## 📞 Contact

- **Email**: pranavshindeji5001@gmail.com
- **Institution**: JDIET, Yavatmal

---

**Made with ❤️ for Indian MSMEs**
# SmartstockAI
