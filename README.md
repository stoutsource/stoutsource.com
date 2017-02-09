# Usage
To start working with boilerplate just do
```
npm i && gulp
```

# Structure
```
├── src/                       # Sources
│   ├── libs/                  # Libraries downloaded using Bower
│   ├── js/                    # JS files
│   ├── views/                 # Pug (Jade) views
│   │   └── index.pug          # Index page file
│   └── styles/                # Styles
│       └── index.styl         # Styles file for index page
├── dist/                      # Build destiny
│   ├── css/                   # CSS files (compiled .styl)
│   ├── js/                    # JS files
│   └── index.html             # Index page html file
├── .bowerrc                   # Bower package manager configuration file
├── .gitignore                 # List of files to be ignored when pushing on Git
├── gulpfile.js                # Gulp tasks file
├── package.json               # Modules dependencies etc.
└── README.md                  # Documentation
```
