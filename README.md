# DEVFOLIO - Portfolio Website (Frontend)

🌐 **My Portfolio Website** – Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Public Pages](#public-pages)
- [Private Pages](#private-pages)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Project Overview
This project is a personal portfolio website designed to showcase my work, blogs, and professional profile.  
It includes both **public pages** accessible by all visitors and **private pages** for the portfolio owner to manage content securely.

Key highlights:
- Secure authentication & authorization for admin access.
- Dynamic blog management (CRUD operations) for the owner.
- Static "About Me" section with personal details.
- Projects showcase with live links, thumbnails, and descriptions.
- Fully responsive design with polished UI/UX.

---

## Tech Stack
- **Frontend:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS
- **State Management & Forms:** React Hook Form, react-hot-toast
- **Rich Text Editor:** React Quill (for blog/project content formatting)
- **API Calls:** Fetch API / Axios
- **Authentication:** JWT

---

## Features

### Public Pages (Accessible to All Visitors)
- **Blog Management**
  - View all blogs.
  - View individual blog pages.
  - ISR (Incremental Static Regeneration) to fetch new content without rebuilding the site.
  - `getStaticPaths` + `revalidate` for individual blog pages to generate content dynamically.
- **About Me Section**
  - Static personal information (bio, work experience, skills).
  - Fetched using SSG for fast performance.
- **Projects Showcase**
  - Displays personal projects with thumbnail, live site link, repo link, description, and features.
  - Dynamic updates via ISR.

### Private Pages (Owner Only)
- **Authentication & Authorization**
  - JWT-based authentication.
  - Only the portfolio owner can access private features.
- **Dashboard**
  - Admin dashboard to manage blogs, projects, and other content securely.
  - CRUD operations for blogs and projects.

---

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nahidn228/your-frontend-repo.git
   cd your-frontend-repo
```