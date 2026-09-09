# GAJANANA CONSTRUCTIONS & materials

> **“Building Dreams. Supplying Quality. Delivering Strength.”**

A modern, high-performance web platform and materials procurement portal for **GAJANANA CONSTRUCTIONS & materials**. Built with React 18, Vite 5, Tailwind CSS, and Supabase.

---

## 🏗️ Overview

**GAJANANA CONSTRUCTIONS & materials** is a complete construction solutions company and one-stop construction materials destination, offering end-to-end building contracting alongside direct yard wholesale supply across 14 building material categories.

### ✨ Key Features

- **Architectural White Theme**: High-contrast, clean visual design utilizing `Outfit` (headings) and `Plus Jakarta Sans` (body copy) with warm amber and graphite accents.
- **Client-Side Routing**: Multi-page experience powered by `react-router-dom` with deep link support for all disciplines, categories, and products.
- **Interactive BOQ Range Slider Calculator**: Live calculation of structural steel (MT), cement bags, M-sand tonnage, and INR investment estimates across 600 to 25,000+ sq.ft.
- **Live Material Pricing Desk**: 8 heavy construction SKUs with live indicators, price fluctuations, and direct quotation triggers.
- **Certified Mill Heat Sheets Table**: Live inspection logs for Tata Tiscon Fe 550D, UltraTech 53G, etc., with click-to-view NABL test certificate modal.
- **Full Scope Catalog**: 14 material categories, 8 construction service packages, and 6 featured project case studies.
- **Cloud Database (Supabase)**: Live cloud persistence for customer inquiries and BOQ quote calculations into PostgreSQL with Row Level Security.
- **Mobile Responsive Drawer**: Fluid layout supporting mobile, tablet, desktop, and ultra-wide screens.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gajananaconstructionsinfo-a11y/gajanana.git
   cd gajanana
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```env
   VITE_SUPABASE_URL=https://bawfqbdwtnhtajdagyij.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛠️ Technology Stack

- **Frontend**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **Icons**: [Font Awesome 6](https://fontawesome.com/) & [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)

---

## 📁 Project Structure

```
├── public/
│   └── fallback.svg             # Geometric architectural SVG placeholder
├── src/
│   ├── components/              # Reusable UI components (Navbar, Footer, Modals, Breadcrumbs)
│   ├── context/                 # React Context API (AppContext)
│   ├── data/                    # Master catalog (categories, services, projects, SKUs)
│   ├── lib/                     # Supabase client singleton & helper functions
│   ├── pages/                   # Page routes (Home, About, Services, Materials, Projects, Why Us, Contact, GetAQuote)
│   ├── App.jsx                  # Root router & layout
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global Tailwind directives
├── .env.example                 # Example environment variables
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Dependencies and build scripts
├── supabase_schema.sql          # Database table definitions & RLS policies
├── tailwind.config.js           # Custom brand color tokens
└── vite.config.js               # Vite bundler configuration
```

---

## 📄 License

Proprietary — All rights reserved © GAJANANA CONSTRUCTIONS & materials.
