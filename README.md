# Tech Point | Official Institutional Portal & Verification Platform

<div align="center">

![Tech Point Banner](https://raw.githubusercontent.com/Innosphere5/techpoint-website/main/public/images/hero3.png)

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ISO 9001:2015](https://img.shields.io/badge/ISO-9001%3A2015_Certified-blue?style=for-the-badge)](https://www.iso.org/)
[![MSME Registered](https://img.shields.io/badge/Govt._Registered-MSME_PB05D0001341-orange?style=for-the-badge)](https://msme.gov.in/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

**A high-performance modern web platform and credential verification system built for Tech Point Computer & Vocational Training Institute (Bassi Pathana, Punjab).**

[Live Verification Portal](#-live-certificate-verification-portal) • [Academic Offerings](#-industrial--vocational-course-catalog) • [Interactive Tools](#-student-interactive-learning-tools) • [Architecture](#-system-architecture--project-structure) • [Setup Guide](#-getting-started)

</div>

---

## 📌 Executive Summary

**Tech Point** is a premier technical and vocational education institution in Bassi Pathana, Fatehgarh Sahib, Punjab. Registered under the **Ministry of Micro, Small and Medium Enterprises (MSME No: PB05D0001341)** and certified under **ISO 9001:2015 (Reg No: INQ/PUN-11971/0323)**, Tech Point delivers job-ready vocational training spanning corporate accounting, software development, graphic design, and digital literacy.

This repository hosts Tech Point's official institutional portal. Built with **Next.js (App Router)** and **Tailwind CSS v4**, the application serves as a unified digital ecosystem for students, alumni, faculty, and corporate employers. It features an instant **online certificate authentication portal**, a downloadable **curriculum repository**, a **bilingual typing test suite (English & Punjabi)**, and **timed online assessment quizzes**.

---

## ✨ Key Features & Institutional Portals

### 🛡️ Live Certificate Verification Portal
* **Instant ID Authentication:** Employers and institutions can authenticate student credentials in real-time using unique Registration / Roll Numbers (e.g., `920`, `918`, `913`, `707`).
* **In-Browser PDF Document Preview:** Embedded interactive PDF viewer with zoom, scroll, and print capabilities without needing external extensions.
* **Tamper-Evident Digital Delivery:** Direct download streaming of official ISO-certified digital certificates (`<Student_Name>_Certificate.pdf`).
* **Extensive Student Registry:** Powered by an indexed in-memory database linking hundreds of authorized graduation certificates.

### 🎓 Industrial & Vocational Course Catalog
* Comprehensive curriculum details for in-demand certification programs:
  * **Tally Prime + GST:** Corporate accounting, balance sheets, inventory management, and tax compliance.
  * **DCA (Diploma in Computer Applications):** MS Office suite (Word, Excel, PowerPoint, Access), operating systems, and internet fundamentals.
  * **CorelDRAW Graphics:** Vector illustration, branding, prepress, and digital publishing.
  * **Adobe Photoshop:** Digital photo editing, UI design, color correction, and social media artwork.
  * **C & C++ Programming:** Object-oriented design, algorithms, memory management, and computational logic.
  * **Python Full Stack:** Scripting, data analysis, modern web framework backends, and automation.

### ⌨️ Student Interactive Learning Tools
* **Bilingual Typing Engine (`/typing-test`):**
  * Support for both **English** and **Punjabi (Gurmukhi)** keyboards.
  * Beginner and intermediate passages.
  * Real-time calculation of **Words Per Minute (WPM)**, accuracy percentage, mistake counters, and live session timers.
* **Online Examination Portal (`/quiz-test`):**
  * Timed multiple-choice assessments categorized by subject (Computer Fundamentals, Tally Prime & GST, C/C++ Logic).
  * Instant scoring, mistake review, and performance benchmarks.

### 📚 Document & Syllabus Library (`/syllabus-download`)
* Searchable and category-filtered repository of institutional syllabus documents.
* Version tracking, document sizes, and instant PDF download triggers.

### 📍 Campus Directory & Counseling Desk (`/about`, `/contact`)
* Integrated admissions query form.
* Quick-action contact buttons for voice counseling and instant WhatsApp inquiries.
* Interactive Google Maps directions to the Bassi Pathana campus.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack, Server/Client Hybrid Components) |
| **Core UI Library** | [React](https://react.dev/) (Hooks, Suspense, Concurrent Features) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) (Custom Design Tokens, Responsive Bento Grids, Modern Shadows) |
| **Typography** | `Plus Jakarta Sans` (Display/Headlines), `Inter` (Body Text), `Geist Mono` (Code/IDs) |
| **Iconography** | [Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide React](https://lucide.dev/) |
| **Animations** | Custom Viewport `ScrollReveal` & CSS Keyframe Transitions |
| **Asset Engine** | Native Next.js Static Asset Pipeline (`public/` optimized delivery) |

---

## 📂 System Architecture & Project Structure

```
techpoint-website/
├── app/                                 # Next.js App Router Root
│   ├── about/                           # Institutional background, mission & director statement
│   │   └── page.jsx
│   ├── certificate-verify/              # Live Certificate Verification Engine
│   │   ├── certificateData.js           # Central registry of issued credentials & metadata
│   │   ├── certificate-verify.jsx       # Client verification search & status interface
│   │   └── page.jsx                     # Route wrapper
│   ├── components/                      # Shared reusable UI elements
│   │   ├── Footer/                      # Institutional footer with quick links & certifications
│   │   ├── Navbar/                      # Responsive navigation bar with mobile slide-out drawer
│   │   ├── CertificatePreview.jsx       # Visual certificate preview card
│   │   ├── HeroTextAnimation.jsx        # Dynamic animated text carousel
│   │   ├── PdfPreview.jsx               # Embedded PDF canvas viewer
│   │   └── ScrollReveal.jsx             # Intersection-observer reveal animations
│   ├── contact/                         # Counseling desk, inquiry form & contact cards
│   │   └── page.jsx
│   ├── Course/                          # Industrial course catalog & curriculum breakdown
│   │   └── page.jsx
│   ├── CoursePage/                      # Extended learning center & video masterclasses
│   │   └── page.jsx
│   ├── features/                        # Highlighted portal hubs & quick-nav tiles
│   │   └── page.jsx
│   ├── home/                            # Homepage view with hero verification widget
│   │   ├── Home.jsx
│   │   └── page.jsx
│   ├── quiz-test/                       # Timed multiple-choice testing engine
│   │   └── page.jsx
│   ├── syllabus-download/               # Searchable curriculum download repository
│   │   └── page.jsx
│   ├── typing-test/                     # Bilingual (English & Punjabi) typing practice engine
│   │   └── page.jsx
│   ├── globals.css                      # Global styles & Tailwind CSS v4 definitions
│   ├── layout.js                        # Master HTML shell, fonts, & metadata tags
│   └── page.js                          # Main application entry point
├── public/                              # Production static public assets
│   ├── certificates/                    # Official student certificate PDFs
│   ├── images/                          # Campus photos, ISO/MSME seals, brand logos
│   └── Syllabus/                        # Course syllabus PDF downloads
├── next.config.mjs                      # Next.js runtime configuration
└── package.json                         # Project manifest & dependency specifications
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
* **Node.js**: `v18.17.0` or higher (Recommended: `v20.x` or `v22.x LTS`)
* **Package Manager**: `npm` (bundled with Node), `pnpm`, or `yarn`
* **Git**: Modern version control CLI

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Innosphere5/techpoint-website.git
   cd techpoint-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 📋 Production Build & Deployment

To generate a standalone production build:

```bash
# Compile and optimize for production
npm run build

# Start the optimized Node.js production server
npm run start
```

### Deploying to Vercel

The easiest way to deploy this Next.js app is with the [Vercel Platform](https://vercel.com/):

1. Push your latest commits to your GitHub repository.
2. Import the project into your Vercel Dashboard.
3. Vercel automatically detects Next.js and configures the build settings (`npm run build`).
4. Click **Deploy**.

---

## 📝 Certificate Management Protocol

When issuing and registering a new graduate certificate:

1. **Add Certificate PDF:**
   Place the official PDF into both:
   * `public/certificates/<STUDENT_NAME>.pdf`
   * `app/public/certificates/<STUDENT_NAME>.pdf`

2. **Update the Registry (`app/certificate-verify/certificateData.js`):**
   Add a new entry mapped to the unique student **Registration ID**:
   ```javascript
   export const certificateDatabase = {
     // ...
     920: {
       name: "Prabhjot Kaur Nahar",
       pdfPath: "/certificates/PRABHJOT KAUR NAHAR.pdf",
     },
     // ...
   };
   ```

3. **Validation:**
   Verify that searching the ID on the portal (`/certificate-verify`) retrieves the record, renders the preview, and triggers the download accurately.

---

## 🏛️ Institutional Accreditation & Location

* **Institution:** Tech Point Computer Education
* **Founder & Academic Director:** Gaurav Kumar
* **Government Registration:** MSME Registration No. `PB05D0001341`
* **Quality Standard:** ISO 9001:2015 Certified Institution (`INQ/PUN-11971/0323`)
* **Campus Address:** Near Gaushala Road, Bassi Pathana, District Fatehgarh Sahib, Punjab - 140412, India
* **Counseling Desk:** +91 79735 42073
* **WhatsApp Helpline:** +91 73407 47117
* **Official Email:** `gktechp931@gmail.com`
* **Website:** [www.gauravtechpoint.in](https://www.gauravtechpoint.in)

---

## 📄 License

This software and institutional data are proprietary and confidential. All rights are reserved by **Tech Point Computer Education, Bassi Pathana**. Unauthorized duplication, distribution, or reverse-engineering of institutional credentials or source code is strictly prohibited.

<div align="center">
<sub>Crafted with precision for Tech Point • Empowering students through digital education & verified credentials.</sub>
</div>
