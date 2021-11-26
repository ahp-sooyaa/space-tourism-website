# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I did](#what-i-did)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

Index
![Index.png](/Docs/Index.png)

Destination
![Destination.png](/Docs/Destination.png)

Crew
![Crew.png](/Docs/Crew.png)

Technology
![Technology.png](/Docs/Technology.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live link](https://ahp-sooyaa.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCss
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I did

In order to make this looks same with design, I need to add some custom value to tailwind config.

```css
theme: {
  extend: {
    fontSize: {
      'sm-base': ['0.9375rem'],
      '1xxl': ['5em'],
      '2xxl': ['9.375em'],
    },
    letterSpacing: {
      '2.7ls': '0.16875em',
      '2.36ls': '0.1475em',
      '4.75ls': '0.29685em'
    },
    height: {
      '532': '33.25em'
    },

    width: {
      '515': '32.1875em'
    }
  },
  fontFamily: {
    'bellefair': ['Bellefair', 'Helvetica', 'Arial', 'sans-serif'],
    'barlow': ['"Barlow"'],
    'barlow-condensed': ['"Barlow Condensed"'],
  }
},
```

There is no special things to describe here. Just normally style website in dev tool with tailwind and copy, paste it in editor.

### Continued development

Later, I will make this better. But no plan right now.

### Useful resources

- [Tailwind Documentation](https://tailwindcss.com/docs) - I usually look documentation

## Author

- Website - [Aung Htet Paing](https://aunghtetpaing.herokuapp.com/)
- Frontend Mentor - [@ahp-sooyaa](https://www.frontendmentor.io/profile/ahp-sooyaa)
- Twitter - [@aunghte23771311](https://www.twitter.com/aunghte23771311)
