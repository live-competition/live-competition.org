# live-competition.org
The main website for LIVE Competition hosted on *[Github Pages](#github-pages)* with *[Jekyll](#jekyll)* for static site generation.

```bash
├── _data
│   └── navigation.yml
├── _includes
│   ├── footer.html
│   ├── hero.html
│   ├── navbar.html
│   └── scripts.html
├── _layouts
│   └── default.html
|── assets
│   ├── css
│   |   ├── ...
│   |   └── livestrap.css
│   ├── font
│   |   └── FuturePTBold.otf
│   ├── img
│   |   ├── brand
│   |   ├── ...
│   |   └── hero-bg
│   └── js
│       ├── ...
│       └── livestrap.js
|── event
│   ├── future-leaders-challenge.html
│   └── live-competition.html
├── .gitignore
├── CNAME
|── 404.html
|── index.html
|── ... (HTML or MD files)
├── Gemfile
├── Gemfile.lock
└── README.md
```

## Jekyll
Simply put that [Jekyll](https://jekyllrb.com/) makes things easier. Jekyll is a static site generator written in Ruby. Read the [Jekyll docs](https://jekyllrb.com/docs/) to understand everything below.

### _config.yml
Contains the sites settings (or variables).

### Includes
Includes are all defined in the ```_includes``` directory. These will be included in the *[default layout](#default-layout)*.

### Default Layout
The default layout will most likely be used throughout the site. It's defined at ```_layouts/default.html```. To use this layout, set the ```layout``` variable in the front matter to ```default``` and also include a ```title``` at minimum. Example:
```
---
layout: default
title: Page Title
---
```

#### Hero
A hero is a cover with a video/image and text placed on top. To enable a hero on the page, set a front matter variable of ```hero``` to ```true```. There are three hero types (```video```, ```image``` or ```null```). If ```video``` or ```image``` is picked, a ```hero_bg_src``` must be provided as well as a ```hero_title```. A ```hero_subtitle``` is optional.

Example of hero with image background with subtitle:
```
---
...
hero: true
hero_type: image
hero_bg_src: /assets/img/hero-bg/image.jpg
hero_title: Title
hero_subtitle: Subtitle
---
```

Example of hero with no background without a subtitle:
```
---
...
hero: true
hero_title: Title
---
```

#### Custom CSS/JS
Add custom CSS and JS files that are page specific. Example below.
```
---
...
custom_css:
- /assets/css/file1.css
- /assets/css/file2.css
- https://cdn.example.com/file3.css
custom_js:
- /assets/js/file1.js
- https://cdn.example.com/file2.css
---
```

#### Navigation (Navbar)
Modify the navigation in ```_data/navigation``` before modifying the navbar in ```_includes/navbar.html```. Each navigation item has a ```title```, ```url```, ```preferred_url```. Any navigation items that have subitems must have a ```dropdown_id```, ```url_contains```, and ```sub_items``` which contain all variables similar to navigation item excluding all variables for items that have subitems again.

### 404.html
The default 404 page which uses the default layout.

## EditorConfig
The .editorconfig file should be present in every repository by LIVE Competition Developers. It simply configures your editor to match rules. The EditorConfig extension needs to be installed on Visual Studio Code for it to work there. Learn more on the [EditorConfig official website](https://editorconfig.org/).

## Github Pages
This repository takes advantage of [Github Pages](https://pages.github.com/) which hosts the live competition website directly from this repository. As Github Pages is powered by Jekyll behind the scenes, this repository will automatically generate to a static website. Learn more on the [Jekyll offical website](https://jekyllrb.com/docs/github-pages/).

## Author(s)
Alvin Tang and the LIVE Competition development team.
