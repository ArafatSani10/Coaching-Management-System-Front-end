# 🎓 Coaching Management System (Pro-Suite)

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,prisma,postgres,nodejs,express,pnpm" />
</p>

A high-performance, enterprise-grade Coaching Management System designed for speed, scalability, and seamless user experience. This platform streamlines the interaction between students, instructors, and administrators.

---

## 🛠️ Tech Stack & Tools

The project is built using the most modern and efficient technologies in the web ecosystem:

### **🎨 Front-End**
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) **Language:** Strictly Typed for maximum security.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Styling:** Utility-first CSS.
- ![Shadcn/UI](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) **UI Components:** Radix UI based components.
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) **Animations:** Smooth & modern UI interactions.

### **⚙️ Back-End & Database**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) **Runtime:** Node.js with Express.js.
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) **Database:** Relational data management.
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) **ORM:** Type-safe database queries.
- ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) **Package Manager:** Fast & Disk-efficient.

---

## 🏗️ Key Architectural Features

### 🚀 **Ultra-Fast Performance**
- **Server Components:** Leverages Next.js RSC to reduce client-side JavaScript.
- **Streaming & Suspense:** Implements granular loading states for instant UI feedback.
- **Skeleton Loading:** Custom-designed Skeletons for a premium "perceived speed" experience.

### 🛡️ **Scalable Folder Structure**
- **Route Groups:** Logical separation between `(client)`, `(dashboard)`, and `(auth)`.
- **Service Layer:** API logic is abstracted into a dedicated `services/` folder.
- **Centralized Types:** Type-safe development with a global `types/` directory.

### 🎨 **Modern UI/UX**
- **Role-Based Layouts:** Distinct UI experiences for Admin and Students.
- **Dark Mode Ready:** Fully compatible with light and dark themes.
- **Responsive Design:** Optimized for all screen sizes.

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