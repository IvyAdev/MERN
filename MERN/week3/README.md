markdown
Week 3 React + Tailwind CSS Assignment

This project is part of the PLP MERN Stack Week 3 Assignment. It is a responsive React application built with Vite and styled using Tailwind CSS. The project demonstrates key React concepts including component architecture, state management with hooks, and integration with an external API.

Features

- React setup using Vite
- Tailwind CSS integration for styling
- Reusable button component
- useState hook for interactive functionality (like counters)
- useEffect hook for fetching API data
- Responsive layout using Tailwind utility classes

Project Structure

src/
├── components/ # Reusable UI components (e.g. Button.jsx, Posts.jsx)
├── App.jsx # Main application component
├── index.css # Global styles with Tailwind directives
└── main.jsx # Entry point of the app

Getting Started

Clone your GitHub Classroom repository:

````bash
git clone <your-repo-url>
cd week3-react-tailwind


Install dependencies:


npm install


tart the development server:


npm run dev


Open your browser and go to `http://localhost:5173/`

API Integration

* API used: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
* Purpose: Fetch and display a list of posts as part of demonstrating API integration

Styling

Tailwind CSS is configured and used for all styling needs:

* Tailwind setup includes `tailwind.config.js` and `postcss.config.js`
* Tailwind directives used in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
 body {
   @apply bg-gray-100 text-gray-900;
 }
}
````

Requirements Covered

[x] React project set up with Vite
[x] Tailwind CSS configured
[x] Reusable components created
[x] React hooks (`useState`, `useEffect`) implemented
[x] External API integrated
[x] Tailwind used for styling and responsiveness

🚀 Deployment

You can deploy your project using:

[Vercel](https://vercel.com/)
[Netlify](https://www.netlify.com/)
