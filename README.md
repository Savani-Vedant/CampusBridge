# CampusBridge

CampusBridge is a responsive landing page built with React and Vite for a modern education or university website. The project presents a clean single-page experience with smooth scrolling navigation, a hero section, program highlights, an about section, a campus gallery, testimonials, contact details, and a footer.

## What It Includes

- A fixed navigation bar with smooth scrolling links between page sections
- A large hero banner with a call to action
- Program, about, campus, testimonials, and contact sections
- A gallery-style campus showcase
- A testimonial slider for student feedback
- A video player modal triggered from the about section
- Responsive layouts for desktop and mobile screens

## Tech Stack

- React
- Vite
- react-scroll for section navigation
- Plain CSS for component styling

## Project Structure

- `src/App.jsx` - Main page layout and section order
- `src/main.jsx` - App entry point
- `src/components/navbar` - Navigation bar
- `src/components/hero` - Landing hero section
- `src/components/programs` - Program highlights
- `src/components/about` - About section and video trigger
- `src/components/campus` - Campus gallery
- `src/components/testimonials` - Testimonial slider
- `src/components/contact` - Contact section
- `src/components/footer` - Footer

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Notes

The site is designed as a single-page experience, so the navigation links scroll to different sections instead of loading separate pages. The testimonial slider and mobile menu are responsive to smaller screen sizes.