# Kumarakom Houseboats — Lead Collection Landing Page

A high-converting, luxury lead capture landing page built for **Kumarakom Houseboats** (official website: [kumarakomhouseboats.com](https://kumarakomhouseboats.com/)), optimized for instant publication and zero-config hosting on **GitHub Pages**.

---

## 🌟 Key Features

1. **High-Converting Lead Engine**:
   - **Hero Check-in & Availability Form**: Captures Check-in Date, Cruise Type (Overnight vs Day Cruise), Boat Size (1 BHK, 2 BHK, 3 BHK, 4 BHK), Guest Party (Adults/Children), Name, WhatsApp/Mobile, and Special Requests.
   - **Instant WhatsApp Handover**: Automatically opens WhatsApp with a neatly formatted booking request pre-filled to the official booking desk (`+91 94468 21720`).
   - **Operator Lead Vault (Admin CRM)**: All submitted enquiries are safely saved locally in the browser (`localStorage`). Click "Operator Lead Vault" in the footer or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> to inspect submissions and **Download Leads as CSV / Excel**.
2. **Social Proof & Credibility**:
   - **4.8 ★ Rating** from 1,455+ verified Google Reviews.
   - **Kerala Maritime Board Licensed** operator trust badges.
   - Operating since 2009 (17+ years on Vembanad Lake).
   - 100% Private Hulls guarantee (no shared strangers).
3. **Interactive Fleet Showcase**:
   - **Premium 1 BHK** (Couples / Small families • ₹11,000/night)
   - **Premium 2 BHK** (Families / Small groups • ₹15,000/night)
   - **Premium 3 BHK** (Reunions / Extended families • ₹21,500/night)
   - **Premium 4 BHK** (Large groups & celebrations • ₹29,000/night)
   - "Book & Check Dates" buttons smoothly scroll up and auto-select the chosen boat.
4. **Interactive Rate & Package Estimator**:
   - Instant live calculation of total cruise costs with transparent inclusions (Welcome lime drink, authentic Kerala lunch with Karimeen Pearl Spot fry, sunset tea & banana fritters, candlelight dinner, breakfast).
5. **Mobile-First Luxury Backwater Experience**:
   - Sticky mobile conversion bar (1-tap Call, 1-tap WhatsApp, 1-tap Book).
   - Floating WhatsApp desk icon.
   - Vembanad scenic route timeline & interactive FAQ accordion.
   - Exit-intent special voucher modal (₹1,000 direct booking discount).

---

## 🚀 How to Publish to GitHub Pages

Because this landing page is built with pure, high-performance static HTML5, CSS3, and JavaScript, it requires **zero build steps** and works directly out of the box with GitHub Pages.

### Step 1: Initialize Git and Commit
Open your terminal in this directory:

```bash
cd "/Users/nithinrajm/Documents/Kumarakom House Boats"

# 1. Initialize git repository
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: Kumarakom Houseboats lead generation landing page"

# 4. Set main branch
git branch -M main
```

### Step 2: Push to Your GitHub Repository
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `kumarakom-houseboats-landing`).
2. Run the commands shown by GitHub to connect and push:

```bash
# Replace YOUR_USERNAME and YOUR_REPO with your GitHub details:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in 2 Clicks
1. On your GitHub repository page, click on **Settings** (top navigation tab).
2. On the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
4. Click **Save**.
5. Within 60 seconds, your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🌐 Custom Domain Setup (Optional)

If you wish to point your custom domain (e.g. `book.kumarakomhouseboats.com` or `kumarakomhouseboats.com`):
1. In repository **Settings** > **Pages** > **Custom domain**, enter your domain name.
2. In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.), add a CNAME record pointing to `YOUR_USERNAME.github.io`.
3. Check the box **Enforce HTTPS**.

---

## 📁 Project Directory Structure

```
Kumarakom House Boats/
├── index.html                      # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css              # Bespoke responsive styling & luxury backwater theme
│   ├── js/
│   │   └── app.js                  # Lead engine, WhatsApp links, calculator, CRM vault
│   └── images/                     # Houseboat imagery
│       ├── houseboat-kumarakom-hero.jpg
│       ├── houseboat-palm-canal.jpg
│       ├── houseboats-moored-kumarakom.jpg
│       └── houseboats-vembanad-fleet.jpg
├── .nojekyll                       # Tells GitHub Pages to serve static files as-is
└── README.md                       # Documentation & deployment guide
```

---

## 🛠 Local Preview

To preview the landing page on your local computer before pushing:
- Double click `index.html` to open it in any browser, or
- Run a simple local server:
  ```bash
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000`.

---

## 📞 Official Booking Desk Contact

- **Phone**: [+91 94468 21720](tel:+919446821720)
- **WhatsApp**: [Click to Chat](https://wa.me/919446821720)
- **Email**: [info@kumarakomhouseboats.com](mailto:info@kumarakomhouseboats.com)
- **Location**: Cheeppunkal Jetty, Near St. Antony's Church, Kumarakom 686563, Kerala
