# Akhila M – Personal Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript (no build step, no dependencies).

## Sections
About · Work experience · Education · Skills · Achievements · Contact

## Features
- Responsive layout with a mobile menu
- Light / dark theme toggle (remembers your choice)
- Scroll-reveal animations and animated score bars
- Active-section highlighting in the navigation
- Contact form that opens the visitor's email app with a prefilled message

## Structure
```
index.html
style.css
script.js
profile.jpg
README.md
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy
Push to GitHub and enable **Settings → Pages → Deploy from branch (main, root)**. Netlify and Vercel also work by dropping the folder in.

## Customise
- Replace `profile.jpg` to change the photo.
- Edit text directly in `index.html`; colours are CSS variables at the top of `style.css`.
