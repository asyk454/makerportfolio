# Alex Ko Maker Portfolio

A static portfolio site for Alex Ko highlighting robotics, biomechatronics, and mechanical design work, plus a resume and contact info. Built with plain HTML, CSS, and JavaScript.

## Pages

- `index.html` - Home, about, and featured projects
- `projects.html` - Projects hub and chronological index
- `projects/MediaLab.html` - Neurally-Controlled Bionic Knee Prosthesis (MIT Media Lab)
- `projects/FTC-23.html` - FIRST Tech Challenge '22-'23 Robot (Weston High School Robotics Club)
- `projects/SladeLab.html` - VLA-Controlled Supernumerary Arm (Harvard Slade Agility Lab)
- `projects/ES-51.html` - Engineering Sciences 51 Design Challenge Robot (Harvard ES 51)
- `projects/ML-Algorithms.html` - Machine Learning Algorithms (coursework)
- `resume.html` - Resume highlights and contact details

## Project Structure

```
makerportfolio/
├── index.html                # Home page (hero + about + featured projects)
├── projects.html             # Projects hub and chronological index
├── resume.html               # Resume and contact page
├── projects/                 # Project case study pages
│   ├── MediaLab.html
│   ├── FTC-23.html
│   ├── SladeLab.html
│   └── ES-51.html
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles and layout
│   │   ├── components.css    # Reusable components
│   │   ├── home.css          # Home page specific styles
│   │   ├── project.css       # Project page styles
│   │   ├── projects.css      # Projects hub styles
│   │   └── responsive.css    # Responsive rules
│   ├── js/
│   │   ├── main.js           # Navigation and interactions
│   │   └── utils.js          # Utility functions
│   ├── docs/
│   │   └── projects/          # Project PDFs and reports
│   └── images/
│       ├── icons/            # Favicon assets
│       ├── profile/          # Profile photos
│       └── projects/         # Project image folders
│           ├── MediaLab/
│           ├── FTC-23/
│           ├── SladeLab/
│           ├── ES-51/
│           └── ML-Algorithms/
└── README.md
```

## Updating Content

- **Profile and bio**: Edit the hero/about sections in `index.html`.
- **Projects**: Update case studies in `projects/` (including `projects/ML-Algorithms.html`), and keep the featured cards in `index.html` in sync.
- **Images**: Replace assets in `assets/images/` and update the corresponding `<img>` paths in the HTML files.
- **Resume**: Update `resume.html` and any linked PDF if you add one.

## Local Preview

Open `index.html` in a browser. No build step or dependencies are required.
