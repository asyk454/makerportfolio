# Alex Ko Maker Portfolio

A static portfolio site for Alex Ko highlighting robotics, biomechatronics, and mechanical design work, plus a resume and contact info. Built with plain HTML, CSS, and JavaScript.

## Pages

- `home.html` - Home, about, and featured projects
- `projects.html` - Projects hub and chronological index
- `projects/MediaLab.html` - Neurally-Controlled Bionic Knee Prosthesis (MIT Media Lab)
- `projects/FTC-23.html` - FIRST Tech Challenge '23-'24 Robot (Weston High School Robotics Club)
- `projects/SladeLab.html` - VLA-Controlled Supernumerary Arm (Harvard Slade Agility Lab)
- `projects/ES-51.html` - Engineering Sciences 51 Design Challenge Robot (Harvard ES 51)
- `resume.html` - Resume highlights and contact details

## Project Structure

```
makerportfolio/
├── home.html                 # Home page (hero + about + featured projects)
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
│   │   └── responsive.css    # Responsive rules
│   ├── js/
│   │   ├── main.js           # Navigation and interactions
│   │   └── utils.js          # Utility functions
│   └── images/
│       ├── icons/            # Favicon assets
│       ├── profile/          # Profile photos
│       └── projects/         # Project image folders
│           ├── MediaLab/
│           ├── FTC-23/
│           ├── SladeLab/
│           └── ES-51/
└── README.md
```

## Updating Content

- **Profile and bio**: Edit the hero/about sections in `home.html`.
- **Projects**: Update each case study in `projects/MediaLab.html` through `projects/ES-51.html`, and keep the featured cards in `home.html` in sync.
- **Images**: Replace assets in `assets/images/` and update the corresponding `<img>` paths in the HTML files.
- **Resume**: Update `resume.html` and any linked PDF if you add one.

## Local Preview

Open `home.html` in a browser. No build step or dependencies are required.
