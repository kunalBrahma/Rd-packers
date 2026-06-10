# Project Specification: RD Packers And Carriers (Packers & Movers) Website

This document serves as the implementation guide and source of truth for building the **RD Packers And Carriers** website. The website is a modern, minimalistic, 4-page responsive Next.js application built with Tailwind CSS v4 and shadcn/ui.

---

## 1. Project Metadata & Company Details

* **Company Name**: RD Packers And Carriers
* **GSTIN**: `18AISPD0403G1ZL`
* **Email Address**: `andcarriers@gmail.com`
* **Calling Numbers**: `+91 94353 46000` / `0361-3544262` (Office)
* **WhatsApp Number**: `+91 97062 90723`
* **Office Phone**: `0361-3544262`

---

## 2. Design System & Styling Guidelines

The UI must feel premium, highly professional, clean, and lightweight. Avoid generic AI-generated styles, heavy gradient borders, or excessive dashboard badges. 

### Theme & Colors
* **Theme**: Strict Light Mode (no dark mode).
* **Primary Color**: `#de0311` (Deep Red - representing activity, urgency, and logistics).
* **Secondary Color**: `#212120` (Off-black / Dark Charcoal - for headers, text, and structure).
* **Background Color**: `#fcfcfc` (Clean, warm off-white).
* **Border/Muted Color**: `#e5e5e5` (Light gray).

### Typography
* **Primary Font**: Inter / Sans-serif (clean, professional, highly readable).
* **Headings**: Heavy, sharp, minimal tracking, high contrast (e.g., `font-sans  tracking-tight text-neutral-900`).
* **Body Text**: Minimalist layout, line-height 1.6, color set to slate/neutral (e.g., `text-neutral-600`).

### UI Elements
* **Buttons**: Rounded-md, sharp corners, flat colors or very subtle borders. Primary buttons use `#de0311` with white text.
* **Forms**: Modern minimal inputs with subtle borders and clear focus states using `#de0311`.

---

## 3. Site Map & Layout Structure

The app uses a layout-first architecture with Next.js App Router.

```
/app
  ├── layout.tsx         # Header, Footer, Providers
  ├── page.tsx           # Home Page
  ├── about
  │    └── page.tsx      # About Page
  ├── services
  │    └── page.tsx      # Services Directory
  └── contact
       └── page.tsx      # Contact Us & Booking Form
```

### Shared Layout Components
1. **Header / Navigation Bar**:
   * Clean logo text: **RD Packers And Carriers** (Red `&` logo or red-and-black typography).
   * Links: Home, Services, About, Contact.
   * Call-to-Action (CTA): A "Call Now" or "Book Quote" button linked to WhatsApp / Phone.
   * Mobile-responsive hamburger menu.

2. **Footer**:
   * Detailed links, company address, and official details.
   * Trust Indicators: Display "GSTIN: 18AISPD0403G1ZL" clearly to establish legitimacy.
   * Fast links to all 4 pages.
   * Copyright note: `© {currentYear} RD Packers And Carriers. All rights reserved.`

---

## 4. Page Specifications

### Page 1: Home (`app/page.tsx`)
* **Hero Section**: 
  * Clean, bold headline: "Seamless Relocation. Professional Care."
  * Minimalist subheading emphasizing domestic and local shifting services.
  * Direct action buttons: "Get Free Quote (WhatsApp)" and "View Services".
  * Minimal, high-quality real-world image or illustration representing logistics/trucks (no overly glossy futuristic AI representations).
* **Quick Estimator Widget**:
  * An interactive minimal form (From City, To City, Move Size/Type).
  * Submitting compiles details and redirects straight to WhatsApp.
* **Trust Pillars**:
  * 3 simple cards detailing safety, punctuality, and verified GST registration.
* **Featured Services Grid**:
  * 3 key services (Household Shifting, Office Relocation, Packing Services) with "Learn More" links.

### Page 2: About Us (`app/about/page.tsx`)
* **Company Profile**:
  * Introduction to RD Packers And Carriers and their journey as a carrier partner.
  * Emphasis on safe handling, packing standards, and experienced crews.
* **Corporate Details**:
  * Display GST registration details prominently to assure corporate clients.
* **Core Values**:
  * Transparency, Safety, and On-Time Delivery described in a clean typographic layout.

### Page 3: Services Directory (`app/services/page.tsx`)
A comprehensive, well-structured directory of all company offerings organized in minimalist grid cards:
1. **Household Relocation**: Home Shifting, Local House Shifting, Domestic Relocation, Intercity & Interstate Shifting, Apartment/Villa Shifting.
2. **Office & Commercial Relocation**: Office Shifting, Corporate Relocation, Industrial Equipment Moving, Warehouse Moving, Shop Shifting.
3. **Packing & Unpacking**: Professional Packing, Fragile Item Care, Furniture/Electronics Wrapping, Unpacking & Setup.
4. **Loading & Transportation**: Safe Loading/Unloading, FTL (Full Truck Load), Part Load (Shared) Transport, Door-to-Door Delivery.
5. **Vehicle Transportation**: Car Carrier Shifting, Bike/Two-Wheeler Shifting, Safe Vehicle Transit.
6. **Storage & Warehousing**: Household Goods Storage, Short-term/Long-term Warehouse Solutions.
7. **Specialty Moving**: Furniture Shifting, Piano & Heavy Item Moving.

*Each category card will contain a small "Book Service" button that pre-fills the WhatsApp booking flow.*

### Page 4: Contact Us (`app/contact/page.tsx`)
* **Contact Details Grid**:
  * Direct Call Links: `+91 94353 46000`, `0361-3544262`
  * WhatsApp Direct Link: `+91 97062 90723`
  * Email Link: `andcarriers@gmail.com`
* **WhatsApp Booking & Contact Form**:
  * Fields: Name, Phone Number, Service Required, Moving From, Moving To, Move Date, Additional Message.
  * Standard NextJS state tracking for validation.
  * A clear primary button: "Send Booking via WhatsApp".

---

## 5. WhatsApp API Integration Logic

All bookings and contact submissions will be formatted into readable messages and forwarded via WhatsApp Web / WhatsApp App.

### Formatting Template
```text
*RD Packers And Carriers - New Booking Request*
-------------------------------------
*Name:* [Name]
*Phone:* [Phone]
*Service:* [Selected Service]
*From:* [Moving From]
*To:* [Moving To]
*Date:* [Move Date]
*Message:* [Message]
```

### Redirection Script Helper
```typescript
const handleWhatsAppRedirect = (data: BookingData) => {
  const formattedText = encodeURIComponent(
    `*RD Packers And Carriers - New Booking Request*\n` +
    `-------------------------------------\n` +
    `*Name:* ${data.name}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Service:* ${data.service}\n` +
    `*From:* ${data.movingFrom}\n` +
    `*To:* ${data.movingTo}\n` +
    `*Date:* ${data.moveDate}\n` +
    `*Message:* ${data.message || 'N/A'}`
  );
  
  const whatsappUrl = `https://wa.me/919706290723?text=${formattedText}`;
  window.open(whatsappUrl, '_blank');
};
```
