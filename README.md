<h1 align="center">Will Borysiak’s Portfolio</h1>
 
<h2 align="center">Purpose of the Website/App:</h2>
 
<h3 align="center">To serve as a portfolio for my software development experience.</h3>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/docs/readme-icons/react.svg" alt="HTML" height="50"/>
  <p align="center">React</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/nextjs.svg" alt="HTML" height="50"/>
  <p align="center">NextJS</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/tailwindcss.svg" alt="HTML" height="50"/>
  <p align="center">Tailwind CSS</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/contentful.svg" alt="HTML" height="50"/>
  <p align="center">Contentful</p>
</div>

<h2 align="center">How The Application Works</h2>

- The application uses NextJS to render the site and its components.
- Tailwind CSS was used to style the page and apply the dark mode functionality.
- Contentful provides the data for the page such as the project, about and experience sections.

<h2 align="center">What I Learnt</h2>

- First usage of NextJS and its SSG/SSR/CSR functionality.
- Continued development of my React knowledge and my initial usage of global state with useContext / Context API.
- Further usage of Typescript with React including usage of generics and interfaces.
- First implementation of a ‘dark mode’ toggle via the context API and the tailwind dark: selector.
- Creating a parallax background using fixed properties and the z index via CSS.
- Customising the tailwind config to create simple animations used in the background.
- How to host the project on Vercel using continuous deployment and enviromental variables.

<h2 align="center">What Was The Biggest Challenge</h2>

The biggest challenge was getting the parallax background to render correctly. Firstly I had to get the background to stick behind the components and allow them to scroll over it. Secondly I had to make the moving elements of the background fit on all screen size hence the tailwind config having a large number of values. I also ran into some hydration issues with the dark mode and had to use the context api / scripts to iron out all of the issues. Once it was optimised, the background works perfectly and blends into the footer just as I wanted.
