# 🎓 Coaching Management System (Pro-Suite)

A high-performance, enterprise-grade Coaching Management System designed for speed, scalability, and seamless user experience. This platform streamlines the interaction between students, instructors, and administrators.

---

## 🛠️ Tech Stack & Tools

The project is built using the most modern and efficient technologies in the web ecosystem:

### **Front-End**
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly Typed for maximum security)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI based)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

### **Back-End (API Layer)**
- **Runtime:** Node.js with Express.js
- **Database:** PostgreSQL
- **ORM:** [Prisma](https://www.prisma.io/)
- **Package Manager:** [pnpm](https://pnpm.io/) (Fast & Disk-efficient)

---

## 🏗️ Key Architectural Features

### 🚀 **Ultra-Fast Performance**
- **Server Components:** Leverages Next.js Server Components to reduce client-side JavaScript.
- **Streaming & Suspense:** Implements granular loading states to ensure the UI feels instant.
- **Skeleton Loading:** Custom-designed shadcn Skeletons for a premium "perceived speed" experience.

### 🛡️ **Scalable Folder Structure**
- **Route Groups:** Logical separation between `(client)`, `(dashboard)`, and `(auth)`.
- **Service Layer:** All API logic is abstracted into a dedicated `services/` folder for clean code.
- **Centralized Types:** Type-safe development with a global `types/` directory.

### 🎨 **Modern UI/UX**
- **Role-Based Layouts:** Distinct UI experiences for Admin and Students.
- **Dark Mode Ready:** Fully compatible with light and dark themes.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.

---

## 📂 Core Directory Preview

```text
src/
├── app/                  # Next.js App Router (Grouped Routes)
├── components/           # Atomic UI & Shared Modules
├── services/             # API Fetching & Business Logic
├── types/                # Secure TypeScript Definitions
├── hooks/                # Reusable Custom React Hooks
└── lib/                  # Utility functions & Configuration