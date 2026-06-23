# FEwB — Field Epidemiologists without Borders

Official website for the FEwB Alumni Network.

## Tech Stack

- **React 18** — UI framework
- **React Router v6** — Client-side routing
- **Lucide React** — Icons
- **Google Fonts** — Inter + Merriweather
- **CSS Animations** — IntersectionObserver-based scroll reveals

## Local Development

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Production Build

```bash
npm run build
```

Outputs to `build/` folder.

---

## Deploying to Render (with Custom Domain)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — FEwB website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fewb-website.git
git push -u origin main
```

### Step 2 — Create a Web Service on Render

1. Go to [render.com](https://render.com) and sign in (or sign up free)
2. Click **New +** → **Web Service**
3. Connect your GitHub account and select the `fewb-website` repository
4. Fill in the settings:

| Setting | Value |
|---|---|
| **Name** | `fewb-website` (or any name) |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npx serve -s build -l 10000` |
| **Instance Type** | Free (or Starter for better uptime) |

5. Click **Create Web Service**

Render will build and deploy automatically. You'll get a `.onrender.com` URL first — that's normal.

### Step 3 — Connect Your Custom Domain

1. In your Render dashboard, go to your web service → **Settings** → **Custom Domains**
2. Click **Add Custom Domain**
3. Enter your domain, e.g. `fewb.org` and `www.fewb.org`
4. Render will show you **DNS records** to add

### Step 4 — Update DNS at Your Domain Registrar

Go to wherever you registered the domain (Namecheap, GoDaddy, Cloudflare, etc.) and add:

**For root domain (`fewb.org`):**
```
Type: A
Name: @
Value: [IP address Render gives you]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [your-service-name.onrender.com]
```

> **Note:** Render also supports ALIAS/ANAME records for root domains. Check Render's DNS docs for the exact record type your registrar supports.

### Step 5 — Wait for SSL

Render automatically provisions a **free SSL certificate** via Let's Encrypt within a few minutes of DNS propagating. DNS can take 10 minutes to 48 hours to propagate globally.

Once done, your site will be live at your custom domain with HTTPS ✓

### Auto-Deploy on Push

Every `git push` to `main` will trigger an automatic redeploy on Render. No manual action needed.

---

## Project Structure

```
fewb-website/
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Hero.js / .css
│   │   ├── About.js / .css
│   │   ├── Impact.js / .css
│   │   ├── Programs.js / .css
│   │   ├── Alumni.js / .css
│   │   ├── Events.js / .css
│   │   ├── Contact.js / .css
│   │   └── Footer.js / .css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── render.yaml
├── package.json
└── README.md
```

## Customisation

- **Brand colours** — defined as CSS variables in `src/index.css`
- **Content** — update stats, events, team bios inside each component
- **Logo** — replace `public/logo.png` with updated artwork
- **Email** — update `info@fewb.org` in `Contact.js` and `Footer.js`
