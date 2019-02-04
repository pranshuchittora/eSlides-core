<p align="center"> 
<img src="./icon/icon.png" height="200px" />
</p>
<h1 align="center">eSlides</h1>
eSlides is an online tool to serve content is a better way. It overcomes the issues with conventional PPTs.

> Problems with conventional PPTs

- It's not possible to modify the contents after serving.
- It requires specific software to run PPTs.

> Features of eSlides

- The content is hosted online, so it can be accessible anytime, anywhere on any device (Browser & Internet required).
- The content modification can be done in just one click & the changes can be reflected in just a refresh of a page.
- Markdown support simplifies content writing.

> Tech Stack

- Nodejs
- Reveal.js
- Express.js

### How to add courses?

- Courses can be added in the `/courses` with a folder named as it's subject code example (18CSS101J).
- The content of the slides resides in `/Slides` which contains a tree of directories based on Modules, Sessions & SLOs.
- The `/Resources` directory contains the assets for each module
- **Don't modify any _.js_ _.html_ _.css_ file.**

[Guide - How to write content (markdown)](./WRITING-MARKDOWN.md)
