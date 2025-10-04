# Cursor AI Prompt: SmartStock.AI Website Development

## Project Overview
Create a modern, visually stunning website for **SmartStock.AI** - an AI-powered, voice-enabled inventory management solution for Indian MSMEs. The website should have a sleek dark aesthetic with purple accents, smooth animations, and professional design matching the reference image style.

---

## Design Requirements

### Visual Style (Dark Theme with Purple Accents)
- **Color Scheme**: 
  - Primary Background: Pure black to very dark gray (#000000, #0A0A0A, #111111)
  - Secondary Background: Dark charcoal (#1A1A1A, #1E1E1E)
  - Card Background: Dark gray with transparency (#1E1E1E80, #25252580)
  - Accent Purple: Vibrant purple (#8B5CF6, #A78BFA, #7C3AED)
  - Accent Cyan: Bright cyan (#22D3EE, #06B6D4, #00D9FF)
  - Accent Green: Emerald green (#10B981, #34D399) - for success states
  - Text Primary: Pure white (#FFFFFF)
  - Text Secondary: Light gray (#A0A0A0, #B0B0B0, #9CA3AF)
  - Borders: Subtle purple/gray (#8B5CF640, #30303050)
  - Glow Effects: Purple (#8B5CF6 with blur)
  
- **Typography**:
  - Headings: Bold, modern sans-serif (Inter 700/800, Space Grotesk 600/700)
  - Body: Clean sans-serif (Inter 400/500)
  - Font sizes: 
    - Hero: 56-72px
    - Section headings: 40-48px
    - Subsections: 28-32px
    - Body: 16-18px
  - Letter spacing: Slightly wider for headings (-0.02em to 0.02em)

- **Design Pattern**:
  - **Black base** with subtle dark gray gradients
  - **Purple glowing accents** and highlights
  - **Glassmorphism cards** with dark transparent backgrounds
  - **Flowing wave patterns** in very dark purple/gray
  - **Particle effects** in purple and cyan
  - **Smooth animations** on scroll and hover
  - **Grid patterns** as subtle overlays (dark gray lines)
  - **Depth through layering** with shadows and glows

### UI Components Style
- **Cards**: 
  - Background: #1E1E1E with 50-80% opacity
  - Border: 1px solid rgba(139, 92, 246, 0.3)
  - Border-radius: 16-20px
  - Backdrop-filter: blur(10px)
  - Box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1)
  - Hover: scale(1.02), increased glow, border brightness
  
- **Buttons**: 
  - Primary: Linear gradient (purple to cyan), white text, padding 14px 32px, border-radius 12px
  - Hover: Glow effect, slight scale
  - Secondary: Transparent with purple border, purple text
  
- **Sections**: 
  - Full-width, padding 120px 20px
  - Max-width content: 1200px centered
  - Alternating subtle background variations
  
- **Icons**: 
  - Size: 40-60px
  - Colors: Purple or cyan with glow
  - Subtle animations on hover

---

## Technical Stack

### Core Technologies
```
- HTML5 (semantic, accessible markup)
- CSS3 (custom properties, animations, grid, flexbox, backdrop-filter)
- Vanilla JavaScript (scroll animations, interactions, counters)
- Three.js (3D particle system and wave background)
```

### Required Libraries (CDN)
```html
<!-- Three.js for 3D effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## CSS Custom Properties Setup
```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-dark: #0A0A0A;
  --color-darker: #111111;
  --color-card: #1E1E1E;
  --color-card-hover: #252525;
  
  --color-purple: #8B5CF6;
  --color-purple-light: #A78BFA;
  --color-purple-dark: #7C3AED;
  --color-cyan: #22D3EE;
  --color-green: #10B981;
  
  --color-text: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-border: rgba(139, 92, 246, 0.3);
  
  /* Shadows & Glows */
  --glow-purple: 0 0 40px rgba(139, 92, 246, 0.4);
  --glow-cyan: 0 0 40px rgba(34, 211, 238, 0.4);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

---

## Page Structure & Content

### 1. Navigation Bar
**Design:**
- Fixed at top, semi-transparent black background with blur
- Logo on left (text or image)
- Navigation links in center
- "Get Started" button on right (purple gradient)
- Mobile: Hamburger menu

**Content:**
```
Logo: SmartStock.AI
Links: Home | Features | How It Works | Benefits | Contact
CTA: Get Started (button)
```

**Styling:**
```css
- Background: rgba(10, 10, 10, 0.8) with backdrop-blur
- Height: 80px
- Border-bottom: 1px solid rgba(255,255,255,0.1)
- Box-shadow on scroll
```

---

### 2. Hero Section
**Content:**
```
Main Headline: "Transform Your Business with AI-Powered Inventory Management"

Subheadline: "SmartStock.AI brings machine learning to India's 63 million MSMEs with voice-enabled, multilingual inventory control"

CTA Buttons: 
  - "Get Started" (primary gradient button)
  - "Watch Demo" (secondary outlined button)

Stats Bar (3 columns):
  - "63M+ MSMEs in India"
  - "95% Accuracy" 
  - "₹2.5L Cr Problem Solved"
```

**Design Features:**
- **Height:** Full viewport (100vh)
- **Background:** Black with Three.js animated particle system
  - Purple and cyan particles floating
  - Subtle wave motion
  - Grid overlay pattern
- **Text:** Center-aligned, fade-in animation
- **Buttons:** Side by side, hover glow effects
- **Stats:** Bottom of hero, glassmorphism cards with icons
- **Scroll Indicator:** Animated arrow at bottom

**Three.js Background:**
```javascript
- Particle count: 1000-2000
- Colors: Purple (#8B5CF6) and Cyan (#22D3EE)
- Movement: Slow floating, subtle wave
- Camera: Slight parallax on mouse move
```

---

### 3. Problem Statement Section
**Headline:** "The Critical Problem We're Solving"
**Subheadline:** "Indian MSMEs face massive challenges in inventory management"

**Content (4 Statistics Cards in Grid):**

```
Card 1:
  Icon: 📋 (clipboard - Font Awesome)
  Number: "60%"
  Title: "MSMEs use manual/Excel tracking"
  Description: "Leading to constant errors and inefficiencies"

Card 2:
  Icon: ⚠️ (alert triangle)
  Number: "50%"
  Title: "Businesses face regular stockouts"
  Description: "Losing customers and revenue daily"

Card 3:
  Icon: 📉 (chart decreasing)
  Number: "40%"
  Title: "Businesses Fail"
  Description: "Within 5 years due to cash flow issues"

Card 4:
  Icon: 🤖 (robot)
  Number: "6%"
  Title: "Have adopted AI-based systems"
  Description: "Huge untapped potential for technology"
```

**Design Features:**
- **Layout:** 2x2 grid on desktop, 1 column on mobile
- **Card Style:**
  - Dark background (#1E1E1E80)
  - Purple glow border
  - Padding: 40px
  - Icon at top (60px, purple glow)
  - Large number (72px, gradient text)
  - Title and description below
- **Animation:** 
  - Fade in on scroll
  - Counter animation (numbers count up from 0)
  - Stagger each card by 0.1s
  - Hover: scale(1.05) with increased glow

**Quote Section (Below Cards):**
```
Background: Slightly lighter dark card
Border-left: 4px solid purple
Padding: 32px
Max-width: 900px, centered

Text: "Indian MSMEs contribute 30% to GDP and employ 111M+ people, yet 60% still rely on manual inventory tracking, leading to massive financial losses and business failures."
```

**Financial Impact Callout:**
```
Large highlighted box:
  Icon: 💰
  Main Text: "₹2.5 Lakh Crores"
  Subtitle: "Annual cost of poor inventory management"
  Description: "Our solution can recover 25-40% of these losses"
  
Style: Purple gradient background, centered, padding 48px
```

---

### 4. Solution Overview Section
**Headline:** "SmartStock.AI: The Game-Changing Solution"
**Subheadline:** "The first AI-powered inventory system that understands Indian business patterns"

**Content (3 Feature Columns):**

```
Column 1:
  Icon: 🎤 Microphone (animated pulse)
  Title: "Voice-First Interface"
  Subtitle: "Revolutionary Simplicity"
  Features:
    ✓ Just speak in Hindi, Marathi, or English
    ✓ "Stock mein 50 packets sugar hai"
    ✓ AI automatically updates and analyzes
    ✓ Perfect for non-tech users

Column 2:
  Icon: 🧠 Brain
  Title: "Smart Predictions"
  Subtitle: "AI-Powered Insights"
  Features:
    ✓ Predicts demand before Diwali, Holi
    ✓ Weather-based stock suggestions
    ✓ Regional market trend analysis
    ✓ 95% prediction accuracy target

Column 3:
  Icon: 📱 Smartphone
  Title: "Mobile-First Design"
  Subtitle: "Built for India"
  Features:
    ✓ Works on any smartphone
    ✓ Offline functionality included
    ✓ Data sync when online
    ✓ Minimal data usage
```

**Design Features:**
- **Layout:** 3 equal columns (stack on mobile)
- **Card Design:**
  - Dark glass background
  - Purple glow on hover
  - Icon at top (80px, cyan color, subtle animation)
  - Title (gradient text purple to cyan)
  - Feature list with checkmarks (green)
- **Animation:**
  - Slide up on scroll
  - Stagger by 0.15s
  - Icon rotates slightly on hover
  - Connecting lines animate between cards

---

### 5. How It Works Section
**Headline:** "How SmartStock.AI Actually Works"
**Subheadline:** "From voice input to actionable insights in seconds"

**Content (4-Step Process Flow):**

```
Step 1: Voice/Text Input
  Icon: 🎙️ Microphone with sound waves
  Title: "Speak Naturally"
  Description: "User speaks or types inventory updates in Hindi, Marathi, or English"

Step 2: AI Processing  
  Icon: ⚡ Lightning bolt / processor
  Title: "Instant Analysis"
  Description: "NLP converts speech to data, analyzes patterns and trends in real-time"

Step 3: Smart Analysis
  Icon: 🌐 Network nodes
  Title: "Contextual Intelligence"
  Description: "Combines with external data: weather forecasts, festivals, market trends"

Step 4: Actionable Insights
  Icon: 📊 Dashboard
  Title: "Smart Recommendations"
  Description: "Provides specific recommendations and future demand predictions"
```

**Design Features:**
- **Layout:** Horizontal timeline on desktop, vertical on mobile
- **Visual Elements:**
  - Large circular icon containers (120px)
  - Connected by animated dashed lines (purple gradient)
  - Number badge on each step (gradient)
  - Arrow animations flowing between steps
- **Animation:**
  - Icons pulse gently
  - Connecting line animates from left to right
  - Cards fade in sequentially

**Real-World Example (Featured Showcase):**
```
Large spotlight card with:

Input Section:
  Icon: 🗣️
  Label: "Voice Input"
  Text: "Aaj 20 packet maggi bech diye, 10 bache hai"
  Translation: "(Sold 20 Maggi packets today, 10 left)"

AI Analysis Section (Middle):
  Animated checkmarks appearing:
  ✓ Updates inventory: Maggi stock = 10
  ✓ Checks weather: Rain predicted tomorrow  
  ✓ Analyzes trend: Maggi sales increase during rain
  ✓ College exam season: Higher student demand

Output Section:
  Icon: 💡
  Label: "Smart Recommendation"
  Highlight box: "Order 40 more Maggi packets by evening."
  Reasoning: "Rain + exam season = 3x normal demand expected"
```

**Card Style:**
- Background: Gradient dark to darker
- Border: Animated purple glow (pulsing)
- Padding: 60px
- Max-width: 1000px, centered
- Box-shadow: Large purple glow

---

### 6. Technology Stack Section
**Headline:** "Powered by Cutting-Edge Technology"
**Subheadline:** "Enterprise-grade AI built for Indian businesses"

**Content (Two Column Layout):**

```
Left Column - Frontend:
  Heading: "User Experience"
  Icon: 🎨
  Tech Stack:
    • React Native
      "Cross-platform mobile app for iOS and Android"
    • Progressive Web App (PWA)
      "Works in any browser, installable"
    • Whisper AI
      "Advanced voice recognition in local languages"
    • Responsive Design
      "Optimized for all screen sizes"

Right Column - AI/ML Backend:
  Heading: "Intelligence Engine"
  Icon: 🧠
  Tech Stack:
    • OpenAI GPT
      "Natural language understanding and processing"
    • Custom ML Models
      "Demand forecasting and pattern recognition"
    • External APIs
      "Weather, market trends, festival calendar"
    • Cloud Infrastructure
      "Scalable, secure, and reliable"
```

**Design Features:**
- **Card Style:** Code-block aesthetic
  - Dark background with subtle grid pattern
  - Syntax highlighting colors (purple, cyan, green)
  - Monospace font for tech names
  - Regular font for descriptions
- **Icons:** Tech logos or custom icons with purple/cyan glow
- **Animation:** 
  - Typing effect on hover
  - Glow pulse on tech items
  - Slide in from sides

---

### 7. Competitive Advantage Section  
**Headline:** "What Makes Our Solution Unique"
**Subheadline:** "Built specifically for Indian MSMEs, not adapted from foreign solutions"

**Content (Comparison Layout):**

```
Left Side - Traditional Tools:
  Heading: "Traditional Tools (Zoho, Tally)"
  Red X icon theme
  
  ✗ Complex interfaces, require extensive training
  ✗ English-only, expensive (₹15K-50K/month)
  ✗ No cultural context or festival predictions
  ✗ Desktop-focused, not mobile-friendly
  ✗ Generic algorithms, not India-specific
  ✗ No voice support for local languages

Right Side - SmartStock.AI:
  Heading: "SmartStock.AI Advantages"
  Green checkmark theme
  
  ✓ Voice-enabled, works in Hindi, Marathi, English
  ✓ Affordable pricing designed for MSMEs
  ✓ Festival-aware, weather-smart predictions
  ✓ Mobile-first, works on any smartphone
  ✓ AI trained on Indian market patterns
  ✓ Offline mode with automatic sync
```

**Design Features:**
- **Layout:** Side-by-side comparison cards
- **Left Card:** 
  - Slightly faded/grayed out
  - Red accent color for X icons
  - Darker background
- **Right Card:**
  - Brighter, highlighted
  - Green accent for checkmarks
  - Purple glow border
  - Slightly elevated (higher z-index)
- **VS Badge:** Centered between cards, animated
- **Animation:** Hover on right card increases glow and scale

---

### 8. Benefits Section
**Headline:** "Measurable Impact & Real Returns"
**Subheadline:** "Transform your business with data-driven decisions"

**Content Part A - Financial Benefits (Grid Layout):**

```
Section 1: For Individual MSME
  Card Style: Gradient background purple to black
  
  Metric 1:
    Icon: 📈 Chart up
    Value: "15-25%"
    Label: "Revenue Growth"
    
  Metric 2:
    Icon: 💰 Money bag
    Value: "₹50K - ₹2L"
    Label: "Annual Cost Savings"
    
  Metric 3:
    Icon: 💵 Cash flow
    Value: "40%"
    Label: "Cash Flow Improvement"
    
  Metric 4:
    Icon: ⚡ Lightning
    Value: "2-3 Months"
    Label: "ROI Timeline"

Section 2: Market Impact
  Card Style: Gradient background cyan to black
  
  Metric 1:
    Icon: 👥 Users
    Value: "100,000"
    Label: "Target MSMEs in 3 Years"
    
  Metric 2:
    Icon: 💎 Diamond
    Value: "₹500 Crores"
    Label: "Economic Value Created"
    
  Metric 3:
    Icon: 👔 Briefcase
    Value: "5,000+"
    Label: "Indirect Jobs Created"
    
  Metric 4:
    Icon: 🚀 Rocket
    Value: "10X"
    Label: "Digital Adoption Boost"
```

**Design Features:**
- **Layout:** 2x4 grid (2 sections, 4 metrics each)
- **Metric Cards:**
  - Large icon at top (glow effect)
  - Huge value number (gradient text)
  - Label below
  - Counter animation on scroll
  - Hover: scale and glow increase
- **Section Headers:** Gradient text, centered

**Content Part B - Qualitative Benefits (4 Cards):**

```
Card 1:
  Icon: 🎯 Target
  Title: "Business Intelligence"
  Description: "Transform small businesses into data-driven operations with actionable insights they can actually use"

Card 2:
  Icon: 🏆 Trophy
  Title: "Competitive Advantage"
  Description: "Enable MSMEs to compete with larger enterprises using the same AI technology"

Card 3:
  Icon: 🌍 Globe
  Title: "Social Impact"
  Description: "Strengthen India's MSME ecosystem, reduce business failures, and create employment"

Card 4:
  Icon: 📚 Books
  Title: "Learning & Development"
  Description: "Upskill business owners in digital tools and data-driven decision making"
```

**Design:**
- **Layout:** 2x2 grid
- **Card Style:**
  - Dark glass background
  - Icon with purple/cyan glow
  - Title (gradient text)
  - Description (gray text)
  - Padding: 40px
  - Hover: Lift effect with shadow

---

### 9. Project Status & Team Section
**Headline:** "Our Journey & Team"

**Content Part A - Project Status:**
```
Current Progress:
  Visual: Animated progress bar
  - 30% MVP Complete
  - Color: Purple to cyan gradient fill
  - Glow effect on fill
  
  Milestone: "Functional prototype in 3 weeks"
  
  Roadmap Timeline:
    ✓ Phase 1: Core Features (Current)
    ○ Phase 2: AI Training & Testing
    ○ Phase 3: Beta Launch
    ○ Phase 4: Full Market Release
```

**Content Part B - Team:**
```
Team Member Card 1:
  Photo: Placeholder or actual photo
  Name: "Pranav Shankar Shinde"
  Role: "Founder & Developer"
  Email: pranavshindeji5001@gmail.com
  Icon: Email, LinkedIn (if applicable)

Team Member Card 2:
  Photo: Placeholder or actual photo
  Name: "Prof. Dr. Rajeshkumar Sambhe"
  Role: "Project Guide & Mentor"
  Position: "Director, IQAC & Business Incubation"
  Institution: "JDIET, Yavatmal"
```

**Design Features:**
- **Progress Bar:**
  - Width: 100%
  - Height: 40px
  - Background: Dark gray
  - Fill: Animated gradient (purple to cyan)
  - Text inside: "30% Complete"
  - Glow effect
  - Animates on scroll (fills from 0 to 30%)

- **Team Cards:**
  - Circular photos (150px) with purple border glow
  - Name in gradient text
  - Role and details below
  - Contact icons with hover effects
  - Side by side on desktop, stacked on mobile

---

### 10. Call-to-Action Section
**Headline:** "Ready to Transform Your Inventory Management?"
**Subheadline:** "Join thousands of MSMEs revolutionizing their business operations"

**Content:**
```
Primary CTA: "Start Free Trial" (large button, gradient)
Secondary CTA: "Schedule a Demo" (outlined button)

Below buttons:
  "✓ No credit card required"
  "✓ Setup in under 5 minutes"  
  "✓ Cancel anytime"

Contact Information:
  Email: pranavshindeji5001@gmail.com
  Phone: [Add if available]
```

**Design:**
- **Background:** Gradient dark purple to black
- **Content:** Centered, max-width 800px
- **Buttons:** Large (60px height), side by side
- **Benefits:** Small checkmarks with text
- **Padding:** 150px vertical

---

### 11. Footer Section
**Content:**

```
Column 1 - Brand:
  Logo: SmartStock.AI
  Tagline: "AI-Powered Inventory for Indian MSMEs"
  Description: Brief mission statement

Column 2 - Quick Links:
  - Home
  - Features
  - How It Works
  - Benefits
  - Pricing
  - Contact

Column 3 - Resources:
  - Documentation
  - API Reference
  - Support Center
  - Privacy Policy
  - Terms of Service

Column 4 - Contact:
  Email: pranavshindeji5001@gmail.com
  Address: JDIET, Yavatmal
  Social Media Icons:
    - LinkedIn
    - Twitter
    - Facebook
    - Instagram

Bottom Bar:
  © 2024 SmartStock.AI. All rights reserved.
  Made with ❤️ for Indian MSMEs
```

**Design:**
- **Background:** Pure black (#000000)
- **Border-top:** 1px purple glow
- **Layout:** 4 columns on desktop, stack on mobile
- **Text Color:** Gray (#A0A0A0)
- **Links:** Hover changes to purple
- **Social Icons:** Circular, purple border, hover glow
- **Padding:** 80px vertical, 20px horizontal

---

## Animation & Interaction Guidelines

### Scroll Animations
```javascript
// Intersection Observer for fade-in animations
- Trigger: When element enters viewport (50% visible)
- Effect: Fade in + slide up (20px)
- Duration: 0.6s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Stagger: 0.1s delay between sibling elements
```

### Hover Effects
```css
Cards:
  - transform: scale(1.02)
  - Box-shadow increase (larger purple glow)
  - Border brightness increase
  - Duration: 0.3s

Buttons:
  - transform: scale(1.05)
  - Box-shadow: Large purple/cyan glow
  - Gradient shift
  - Duration: 0.2s

Icons:
  - transform: rotate(5deg) or scale(1.1)
  - Glow intensity increase
  - Duration: 0.3s
```

### Counter Animations
```javascript
// For statistics and numbers
- Start: 0
- End: Target value
- Duration: 2s
- Easing: ease-out
- Trigger: On scroll into view
- Format: Add commas for thousands, % symbols, currency
```

### Particle Background (Three.js)
```javascript
Scene Setup:
- Background color: #000000
- Particle count: 1500
- Particle size: 2-4px
- Colors: Mix of #8B5CF6 (purple) and #22D3EE (cyan)
- Distribution: Random 3D space

Animation:
- Slow floating motion (y-axis drift)
- Gentle rotation
- Subtle size pulsing
- Mouse parallax effect (slight camera movement)

Performance:
- Use BufferGeometry for efficiency
- Update positions on requestAnimationFrame
- Optimize for mobile (reduce count on small screens)
```

---

## Responsive Design Breakpoints

```css
/* Mobile First Approach */

/* Small Mobile */
@media (max-width: 480px) {
  - Single column layouts
  - Reduced padding (40px vertical)
  - Smaller font sizes (Hero: 32px)
  - Stack all grid items
  - Hamburger menu
}

/* Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  - 2-column grids
  - Medium padding (80px vertical)
  - Adjust font sizes
}

/* Desktop */
@media (min-width: 1025px) {
  - Full layouts (3-4 columns)
  - Max-width container: 1200px
  - Full padding (120px vertical)
  - Large typography
}

/* Large Desktop */
@media (min-width: 1440px) {
  - Max-width: 1400px
  - Even more spacing
  - Larger elements
}
```

---

## Performance Optimization

### Critical Optimizations:
1. **Lazy Loading:** Images and heavy sections below fold
2. **CSS:** Minimize repaints, use transform and opacity for animations
3. **JavaScript:** Debounce scroll handlers, throttle animations
4. **Three.js:** Reduce particle count on mobile, pause when tab inactive
5. **Fonts:** Use font-display: swap, preload critical fonts
6. **Images:** WebP format with fallbacks, responsive images

### Loading Strategy:
```
1. Load critical above-fold content first
2. Show loading animation during Three.js initialization
3. Lazy load images and non-critical sections
4. Progressive enhancement for animations
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance:
- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation:** All interactive elements accessible via Tab
- **Focus Indicators:** Visible purple outline on focus
- **Alt Text:** Descriptive alt text for all images and icons
- **ARIA Labels:** Proper labels for all interactive elements
- **Semantic HTML:** Use proper heading hierarchy, sections, nav, etc.
- **Skip Links:** "Skip to main content" link at top
- **Reduced Motion:** Respect prefers-reduced-motion media query

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## File Structure

```
smartstock-website/
│
├── index.html (Main page with all sections)
├── css/
│   ├── styles.css (Main stylesheet)
│   ├── animations.css (Animation keyframes)
│   └── responsive.css (Media queries)
├── js/
│   ├── main.js (Scroll animations, interactions)
│   ├── particles.js (Three.js particle system)
│   └── counters.js (Number counter animations)
├── assets/
│   ├── images/ (Logos, team photos, etc.)
│   └── icons/ (Custom SVG icons if needed)
└── README.md
```

---

## Implementation Priority

### Phase 1 (Core Structure):
1. HTML structure with all sections
2. Basic CSS styling (colors, typography, layout)
3. Responsive grid system
4. Navigation bar with mobile menu

### Phase 2 (Visual Polish):
5. Glassmorphism card effects
6. Gradient backgrounds
7. Three.js particle background
8. Icon integration

### Phase 3 (Interactivity):
9. Scroll animations (fade-in, slide-up)
10. Hover effects on all interactive elements
11. Counter animations for statistics
12. Smooth scrolling between sections

### Phase 4 (Optimization):
13. Performance optimization
14. Accessibility improvements
15. Cross-browser testing
16. Mobile optimization

---

## Testing Checklist

### Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Device Testing:
- [ ] Desktop (1920x1080, 1440x900)
- [ ] Tablet (iPad, Android tablets)
- [ ] Mobile (iPhone, Android phones various sizes)

### Functionality Testing:
- [ ] All links work
- [ ] Animations smooth on all devices
- [ ] Three.js particles perform well
- [ ] Forms validate correctly
- [ ] Hover effects work
- [ ] Counter animations trigger correctly
- [ ] Responsive layout adapts properly
- [ ] Navigation menu works on mobile

### Performance Testing:
- [ ] Page load time < 3s
- [ ] Lighthouse score > 90
- [ ] No layout shifts
- [ ] Smooth 60fps animations

### Accessibility Testing:
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes
- [ ] Focus indicators visible
- [ ] ARIA labels present

---

## Additional Notes for Cursor AI

### Code Quality Expectations:
- Write clean, well-commented code
- Use semantic HTML5 elements
- Follow BEM naming convention for CSS classes
- Keep JavaScript modular and organized
- Use ES6+ features where appropriate
- Implement error handling for Three.js

### Best Practices:
- Mobile-first CSS approach
- Progressive enhancement
- Minimize HTTP requests
- Optimize critical rendering path
- Use CSS Grid and Flexbox for layouts
- Avoid inline styles
- Compress and minify assets for production

### CSS Naming Convention (BEM):
```css
/* Block */
.hero-section { }

/* Element */
.hero-section__title { }
.hero-section__subtitle { }
.hero-section__cta { }

/* Modifier */
.hero-section--dark { }
.button--primary { }
.button--secondary { }
```

### JavaScript Code Structure:
```javascript
// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollAnimations();
  initCounters();
  initMobileMenu();
});

// Separate concerns into modules
const ScrollAnimations = {
  init() { },
  observeElements() { },
  animateOnScroll() { }
};

const ParticleSystem = {
  scene: null,
  camera: null,
  renderer: null,
  particles: null,
  
  init() { },
  animate() { },
  handleResize() { }
};
```

---

## Specific Implementation Details

### Hero Section Three.js Particle Code:
```javascript
// Initialize particle system
function initParticles() {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
  );
  camera.position.z = 50;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('particle-canvas').appendChild(renderer.domElement);

  // Particles
  const particleCount = window.innerWidth < 768 ? 500 : 1500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const purpleColor = new THREE.Color(0x8B5CF6);
  const cyanColor = new THREE.Color(0x22D3EE);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 100;

    const color = Math.random() > 0.5 ? purpleColor : cyanColor;
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
    
    const positions = particles.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.01;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.update ProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
```

### Counter Animation Code:
```javascript
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // Format number with commas and symbols
    let displayValue = Math.floor(current);
    if (element.dataset.format === 'currency') {
      displayValue = '₹' + displayValue.toLocaleString('en-IN');
    } else if (element.dataset.format === 'percentage') {
      displayValue = displayValue + '%';
    } else if (element.dataset.format === 'number') {
      displayValue = displayValue.toLocaleString('en-IN');
    }
    
    element.textContent = displayValue;
  }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
    }
  });
}, { threshold: 0.5 });

// Observe all counter elements
document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});
```

### Scroll Animation Implementation:
```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation delay
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, index * 100);
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  scrollObserver.observe(el);
});
```

### Smooth Scroll to Section:
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

### Mobile Menu Toggle:
```javascript
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    body.classList.remove('menu-open');
  });
});
```

---

## CSS Animation Keyframes

### Fade In Up:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
}

.animate-on-scroll.animate-in {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

### Glow Pulse:
```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
  }
}

.glow-element {
  animation: glowPulse 2s ease-in-out infinite;
}
```

### Float Animation:
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.float-element {
  animation: float 3s ease-in-out infinite;
}
```

### Gradient Animation:
```css
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animated {
  background: linear-gradient(
    270deg,
    #8B5CF6,
    #7C3AED,
    #22D3EE,
    #8B5CF6
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}
```

---

## Component-Specific Styles

### Glass Card Component:
```css
.glass-card {
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: scale(1.02);
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 12px 48px rgba(139, 92, 246, 0.3);
}
```

### Gradient Button:
```css
.btn-primary {
  position: relative;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 40px rgba(139, 92, 246, 0.6);
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary span {
  position: relative;
  z-index: 1;
}
```

### Secondary Button:
```css
.btn-secondary {
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: #8B5CF6;
  background: transparent;
  border: 2px solid #8B5CF6;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: #A78BFA;
  color: #A78BFA;
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
  transform: scale(1.05);
}
```

### Gradient Text:
```css
.gradient-text {
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
```

### Icon with Glow:
```css
.icon-glow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 40px;
  color: #22D3EE;
  background: rgba(34, 211, 238, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.3);
  transition: all 0.3s ease;
}

.icon-glow:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 50px rgba(34, 211, 238, 0.6);
}
```

---

## Mobile Menu Styles

```css
/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: #FFFFFF;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translateY(12px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-12px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  padding: 100px 40px 40px;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5);
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.mobile-menu a {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.mobile-menu a:hover {
  color: #8B5CF6;
  border-bottom-color: #8B5CF6;
  padding-left: 10px;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .desktop-nav {
    display: none;
  }
}
```

---

## Loading Animation

```html
<!-- Add to HTML before closing body tag -->
<div class="page-loader">
  <div class="loader-content">
    <div class="loader-spinner"></div>
    <p>Loading SmartStock.AI...</p>
  </div>
</div>
```

```css
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.page-loader.hidden {
  opacity: 0;
  visibility: hidden;
}

.loader-content {
  text-align: center;
}

.loader-spinner {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border: 4px solid rgba(139, 92, 246, 0.2);
  border-top-color: #8B5CF6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loader-content p {
  color: #FFFFFF;
  font-size: 18px;
  margin: 0;
}
```

```javascript
// Hide loader when page is fully loaded
window.addEventListener('load', () => {
  const loader = document.querySelector('.page-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 500);
});
```

---

## SEO Meta Tags (Add to HTML <head>)

```html
<!-- Primary Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SmartStock.AI - AI-Powered Inventory Management for Indian MSMEs</title>
<meta name="title" content="SmartStock.AI - AI-Powered Inventory Management for Indian MSMEs">
<meta name="description" content="Revolutionary voice-enabled inventory management solution for India's 63 million MSMEs. Speak in Hindi, Marathi, or English. AI-powered predictions with 95% accuracy.">
<meta name="keywords" content="inventory management, MSME India, AI inventory, voice inventory, Hindi inventory software, business management, stock management">
<meta name="author" content="Pranav Shankar Shinde">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://smartstock.ai/">
<meta property="og:title" content="SmartStock.AI - AI-Powered Inventory Management">
<meta property="og:description" content="Transform your MSME with voice-enabled, AI-powered inventory management in local languages.">
<meta property="og:image" content="https://smartstock.ai/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://smartstock.ai/">
<meta property="twitter:title" content="SmartStock.AI - AI-Powered Inventory Management">
<meta property="twitter:description" content="Transform your MSME with voice-enabled, AI-powered inventory management in local languages.">
<meta property="twitter:image" content="https://smartstock.ai/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

---

## Final Checklist for Cursor AI

### Must-Have Features:
- [x] Fully responsive design (mobile, tablet, desktop)
- [x] Dark theme with black background
- [x] Purple and cyan accent colors
- [x] Three.js particle background in hero
- [x] Smooth scroll animations
- [x] Counter animations for statistics
- [x] Glassmorphism card effects
- [x] Gradient buttons with hover effects
- [x] Mobile hamburger menu
- [x] All content from PDF document included
- [x] Footer with contact information
- [x] Loading animation
- [x] SEO meta tags
- [x] Accessibility features

### Code Quality:
- [x] Clean, commented code
- [x] Semantic HTML5
- [x] BEM CSS naming
- [x] Modular JavaScript
- [x] Performance optimized
- [x] Cross-browser compatible

### Visual Polish:
- [x] Consistent spacing and alignment
- [x] Smooth transitions and animations
- [x] Proper color contrast
- [x] Professional typography
- [x] Icon integration
- [x] Visual hierarchy

---

## Example HTML Structure Snippet

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags here -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Page Loader -->
  <div class="page-loader">
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <p>Loading SmartStock.AI...</p>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="container">
      <div class="logo">SmartStock.AI</div>
      <div class="desktop-nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#benefits">Benefits</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="btn-primary">Get Started</button>
      <button class="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <nav>
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#benefits">Benefits</a>
      <a href="#contact">Contact</a>
      <a href="#" class="btn-primary">Get Started</a>
    </nav>
  </div>

  <!-- Hero Section -->
  <section class="hero-section" id="home">
    <div id="particle-canvas"></div>
    <div class="container">
      <h1 class="hero-section__title animate-on-scroll">
        Transform Your Business with<br>
        <span class="gradient-text">AI-Powered Inventory Management</span>
      </h1>
      <p class="hero-section__subtitle animate-on-scroll">
        SmartStock.AI brings machine learning to India's 63 million MSMEs with voice-enabled, multilingual inventory control
      </p>
      <div class="hero-section__cta animate-on-scroll">
        <button class="btn-primary">Get Started</button>
        <button class="btn-secondary">Watch Demo</button>
      </div>
      <div class="hero-section__stats">
        <div class="stat-card glass-card animate-on-scroll">
          <i class="fas fa-users icon-glow"></i>
          <h3>63M+</h3>
          <p>MSMEs in India</p>
        </div>
        <div class="stat-card glass-card animate-on-scroll">
          <i class="fas fa-bullseye icon-glow"></i>
          <h3>95%</h3>
          <p>Prediction Accuracy</p>
        </div>
        <div class="stat-card glass-card animate-on-scroll">
          <i class="fas fa-rupee-sign icon-glow"></i>
          <h3>₹2.5L Cr</h3>
          <p>Problem We're Solving</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Add all other sections here following the structure outlined above -->

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer content as specified -->
  </footer>

  <!-- Scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="js/particles.js"></script>
  <script src="js/counters.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

---

## FINAL INSTRUCTION FOR CURSOR AI:

Create a complete, production-ready website following ALL specifications above. The website must:

1. **Look exactly like the reference image** - dark black background, purple/cyan accents, glassmorphism effects
2. **Include ALL content** from the SmartStock.AI PDF document
3. **Be fully responsive** and work perfectly on all devices
4. **Have smooth animations** that enhance user experience
5. **Be performance-optimized** with fast load times
6. **Be accessible** following WCAG 2.1 AA standards
7. **Use modern best practices** for HTML, CSS, and JavaScript

Generate complete files (HTML, CSS, JS) that can be immediately deployed. Do not use placeholders or incomplete sections. Every feature specified in this prompt should be fully implemented and functional.