# HealthCare Medical Center Website

A modern, responsive hospital website built with React, Vite, and Tailwind CSS. This project provides a comprehensive healthcare website with appointment booking, doctor directories, department information, and more.

## 🚀 Features

### ✅ Functional Requirements
- **Pages**: Home, About, Departments, Doctors, Services, Appointment, Contact, FAQ, 404
- **Components**: Responsive navbar, footer, hero sections, cards, forms, accordions
- **Appointment Booking**: Full form with validation using React Hook Form
- **Doctor Directory**: Searchable and filterable doctor listings
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional medical website design
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Accessibility**: WCAG-compliant with proper semantic HTML and ARIA labels
- **Performance**: Optimized with Vite for fast loading times
- **SEO Optimized**: Proper meta tags, structured data, and semantic markup

### 🛠 Technical Features
- **React 19**: Latest React with modern hooks and features
- **Vite**: Fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Hook Form**: Form validation and handling
- **Lucide React**: Beautiful, customizable icons
- **ESLint**: Code quality and consistency

## 📁 Project Structure

```
hospital-website/
├── public/
│   └── assets/                # Images, icons, logos
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DepartmentCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── AppointmentForm.jsx
│   │   ├── ContactForm.jsx
│   │   └── Accordion.jsx
│   ├── pages/                 # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Departments.jsx
│   │   ├── Doctors.jsx
│   │   ├── Services.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── NotFound.jsx
│   ├── data/                  # Static JSON data
│   │   └── doctors.js
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # App entry point
│   └── index.css             # Tailwind CSS and custom styles
├── index.html                # HTML entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hospital-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Design System

### Colors
- **Primary**: Blue-600 (#2563eb)
- **Secondary**: Green-500 (#10b981)
- **Background**: Gray-50 (#f9fafb), White (#ffffff)
- **Text**: Gray-900 (#111827), Gray-600 (#4b5563)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400-500)

### Components
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean design with validation states
- **Navigation**: Sticky header with mobile menu

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Features showcase
- Department highlights
- Services overview
- Statistics and testimonials

### About Page (`/about`)
- Hospital history and mission
- Team information
- Values and achievements
- Timeline of milestones

### Departments Page (`/departments`)
- All medical departments
- Search functionality
- Department details and services
- Doctor count per department

### Doctors Page (`/doctors`)
- Doctor directory with photos
- Search and filter by department
- Doctor ratings and experience
- Booking integration

### Services Page (`/services`)
- Comprehensive service list
- Pricing information
- Service categories
- Insurance and payment info

### Appointment Page (`/appointment`)
- Booking form with validation
- Department and doctor selection
- Date and time picker
- Confirmation system

### Contact Page (`/contact`)
- Contact form
- Location and hours
- Department contacts
- Emergency information

### FAQ Page (`/faq`)
- Searchable FAQ section
- Categorized questions
- Accordion interface
- Contact integration

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Modifying Data
- Update `src/data/doctors.js` for doctor and department information
- Modify form validation in form components
- Update contact information in components

### Styling Changes
- Use Tailwind CSS classes for styling
- Add custom styles in `src/index.css`
- Modify color scheme in Tailwind config

## 📊 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Lazy loading implemented
- **Bundle Size**: Optimized with Vite
- **SEO**: Meta tags and structured data
- **Accessibility**: ARIA labels and semantic HTML

## 🔒 Security Features

- **Form Validation**: Client-side validation with React Hook Form
- **Input Sanitization**: Proper form handling
- **XSS Prevention**: React's built-in protection
- **HTTPS Ready**: Configured for secure deployment

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop `dist` folder
- **AWS S3**: Upload build files
- **Traditional Hosting**: Upload to web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@healthcare.com
- Phone: (555) 123-4567
- Website: https://healthcare-medical-center.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icons
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [React Router](https://reactrouter.com/) - Routing

---

**HealthCare Medical Center** - Providing exceptional healthcare services with compassion, innovation, and excellence.
