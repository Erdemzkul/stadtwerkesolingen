# Vedat Erdem Özkul — Visual CV

A fast, accessible visual CV for Vedat Erdem Özkul. This geospatial edition adds a leading Düsseldorf location-intelligence case study built from Vedat's original R and OpenStreetMap work. It explains the complete path from raw geographic records to cleaned data, readable maps, observed patterns, and a planned thesis question about recreation access and residential values. Its overall design language is inspired by the bold editorial character of trivago's careers site without presenting the portfolio as a trivago microsite. A separate dashboard compares the CV with the Student Data Scientist - Content role.

## Contents

- `index.html` - page structure and content
- `styles.css` - responsive visual design
- `script.js` - lightweight reveal and navigation behavior
- `assets/Vedat_Erdem_Ozkul_CV.pdf` - downloadable CV
- `assets/trivago-logo.svg` - supplied trivago wordmark used only to identify the application target
- `assets/illustrations/` - three custom portfolio illustrations used in the hero and case studies
- `assets/maps/` - four original Düsseldorf geospatial outputs used by the interactive map explorer
- `assets/photos/` - prepared for optional approved photographs
- `docs/ASSET-BRIEF.md` - image list, dimensions, art direction, and export notes

No framework, build step, or package installation is required.

## Preview locally

Open `index.html` directly in a browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new public GitHub repository, for example `trivago-data-portfolio`.
2. Upload every file and folder in this directory to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/trivago-data-portfolio/`.

Because all file links are relative, the site works both at a user-site root and inside a project path.

## Before submitting the application

- Test the email, LinkedIn, RPubs, and CV download links.
- Replace or add a GitHub profile link if desired.
- Put the final GitHub Pages URL in the application field labelled “Website or other relevant links.”

The role-fit score is an applicant-side, evidence-weighted self-assessment. The Düsseldorf project provides direct evidence for the location and geospatial data category; hotel-content experience remains explicitly identified as a domain ramp-up. Keep the explanatory note on the page so it cannot be mistaken for an employer or ATS score.

The project narratives document the full working logic rather than listing tools alone: the language dataset explains the Python/Pandas and local Ollama enrichment pipeline with validation and human-review guardrails; the communication analytics case follows Matomo data through its API into Power BI, a KPI-aware Copilot agent, and an interactive decision dashboard.

## Performance and accessibility

The site uses semantic HTML, keyboard-visible focus states, a skip link, responsive layouts, reduced-motion support, and minimal JavaScript. Fonts are loaded from Google Fonts; remove those two font `<link>` elements in `index.html` to make the site fully self-hosted with system-font fallbacks.
