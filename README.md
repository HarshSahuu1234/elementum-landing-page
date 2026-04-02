# Elementum - Modern Landing Page

A pixel-perfect, highly responsive modern landing page built from Figma designs. This project demonstrates front-end development best practices, clean component architecture, and containerized deployment.

## 🚀 Features

- **Pixel-Perfect Implementation**: Translated high-fidelity Figma designs into responsive code with meticulous attention to detail.
- **Modern Tech Stack**: Built using React 18, Vite, and TypeScript for a robust, scalable structure.
- **Tailwind CSS Integration**: Fully responsive, mobile-first design leveraging Tailwind's utility-first approach.
- **Smooth Animations & Interactions**: Engaging user experience highlighting a dynamic aesthetic.
- **Dockerized**: Fully containerized with an optimized `Dockerfile` ready for modern cloud deployment.
- **Component-Driven**: Clean, modular structure using distinct React components (`Hero`, `Features`, `Services`, `Testimonials`, etc.)

## 🛠️ Technology Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Containerization**: Docker
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm 
- Docker (optional, for containerized run)

### Running Locally

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/elementum.git
   cd elementum
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

### Running with Docker

1. Build the Docker image
   ```bash
   docker build -t figma-app .
   ```

2. Run the Docker container
   ```bash
   docker run -d -p 8080:80 figma-app
   ```
   Open `http://localhost:8080` to view the application.

## 👨‍💻 Development Process

This project highlights a structured breakdown from design to deployment:
1. Translating static Figma boards to dynamic UI components.
2. Building a foundational global styling system using Tailwind.
3. Assembling modular sections into a cohesive homepage layout.
4. Packaging for the cloud via Docker.

---
*Built with ❤️ to demonstrate frontend engineering excellence.*
