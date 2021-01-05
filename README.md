# ZUZU LEGAL LANDING 2.0

## Prerequisites

### 1. Hugo

```sh
brew install hugo
```

### 2. LiveSassCompiler

please add the line below to setting.json

```sh
  "prettier.disableLanguages": [
        "html"
    ]
```

## CSS Naming Conventions

### Hyphen Delimited

- To know what a selector does, just by looking at its name
- To have an idea of where a selector can be used, just by looking at it
- To know the relationships between class names, just by looking at them

[More information](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)

## SASS Structure 🕋

### 📁Base

holds the boilerplate code for the project. Including standard styles such as resets and typographic rules, which are commonly used throughout your project.

### 📁Components

holds all of your styles for buttons, carousels, sliders, and similar page components (think widgets). Your project will typically contain a lot of component files — as the whole site/app should be mostly composed of small modules.

### 📁Layout

contains all styles involved with the layout of your project. Such as styles for your header, footer, navigation and the grid system.

### 📁Abstracts

holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.

### 📁Pages

any styles specific to individual pages will sit here. For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.

### 📁Themes

this is likely not used in many projects. It would hold files that create project specific themes. For example if sections of your site contain alternate color schemes.

### 📁Vendor:

contains all third party code from external libraries and frameworks — such as Normalize, Bootstrap, jQueryUI, etc. However, there is often a need to override vendor code. If this is required, its good practice to create a new folder called vendors-extensions/ and then name any files after the vendors they overwrite. The filevendors-extensions/\_bootstrap.scss would contain all your Bootstrap overrides — as editing the vendor files themselves, isn’t generally a good idea.

---

### Main.scss

should ONLY contain the imports for the above files.

```

```
