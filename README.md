# Dirshaye Faltamo — Software Engineering Portfolio

Personal portfolio and engineering showcase for **Dirshaye Faltamo**, Software Engineer specializing in backend microservices, cloud infrastructure, and modern web platforms.

🌐 **Live Website**: [https://dirshaye.net](https://dirshaye.net)

---

## Overview

A responsive, high-performance personal portfolio showcasing:
- **Production Experience**: Software Engineer at **Emma — The Sleep Company** (Operations Backbone microservices, Go APIs, Fastify BFF, AWS SQS) and **FlyRobotics** (FastAPI, PostgreSQL time-series).
- **Featured Projects**: Production-grade full-stack and edge platforms with live demos and case studies.
- **Categorized Skills**: Zero-dependency CSS chips spanning Languages, Frameworks, Databases, DevOps, and Cloud/Edge.
- **Education & Fellowships**: BSc in Software Engineering, Erasmus+ Exchange, and technical fellowships (A2SV, CodePath, AddisCoder).
- **Direct Contacts**: Verified links for Email, WhatsApp, LinkedIn, GitHub, and Instagram.

---

## Featured Project Case Studies

* **[Visit Wolaita](https://www.visitwolaita.com)** (`visit-wolaita.html`):
  * **Stack**: React 19, Cloudflare Workers, Google Gemini API, JavaScript, CSS3, Vite.
  * **Highlights**: Serverless edge compute, grounded Generative AI travel assistant, "Dunguza AI" virtual try-on vision studio, bilingual i18n (English/Amharic).
* **[Semayat Hotel](https://www.semayathotel.et)** (`semayat-hotel.html`):
  * **Stack**: Cloudflare Workers, Cloudflare D1 (SQL), Cloudflare R2, Chapa Payment Gateway, VAPID Web Push, AfroMessage/Twilio SMS.
  * **Highlights**: 30-room live reservation engine, Property Management System (PMS), transaction-safe automated SMS notifications, and secure guest ID uploads.
* **OmniPrice** (`omniprice.html`): Dynamic competitor price scraping engine with FastAPI, RabbitMQ, MongoDB, Docker, and AWS.
* **LagWatch** (`lagwatch.html`): Lightweight out-of-band host observability and recovery daemon built in Go.

---

## Repository Structure

```text
├── index.html                # Main portfolio single-page application
├── visit-wolaita.html        # Visit Wolaita case study (lightbox modal)
├── semayat-hotel.html        # Semayat Hotel case study (lightbox modal)
├── omniprice.html            # OmniPrice project details
├── lagwatch.html             # LagWatch project details
├── CNAME                     # Custom domain pointer (dirshaye.net)
├── assets/
│   ├── css/
│   │   └── style.css         # Theme styles, custom CSS skill tags & animations
│   ├── img/
│   │   ├── about/            # Profile photographs
│   │   ├── projects/         # High-resolution project previews & banners
│   │   └── bg.jpg            # Theme background texture
│   ├── js/
│   │   └── main.js           # Navigation state, smooth transitions, modal handling
│   ├── resume/
│   │   └── resume.pdf        # Downloadable PDF resume
│   └── vendor/               # Bootstrap, Boxicons, GLightbox, and Isotope vendor assets
```

---

## Local Development & Preview

Run a lightweight HTTP server in the repository root:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node
npx serve .
```

Then open your browser to **`http://localhost:8080`**.

---

## Deployment

Hosted on **GitHub Pages** with custom apex domain DNS configuration via **Cloudflare** and [`CNAME`](./CNAME) pointing to **`dirshaye.net`**. Automatic deployment triggers on each push to the `main` branch.
