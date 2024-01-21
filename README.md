 # React Basic Start-up
 ## Install vite
``` bash
  npm create vite@latest
 ```
*  Package name: ... 01vite-rect
*  Select a framework: » React
*  Select a variant: » JavaScript

#### 1. Open the package Name Directory like as Package Name :  01vite-rect
``` bash
  cd .\01Vite-Rect\
 ```
#### 2. Now Run the Command.
``` bash
  npm install
 ```
 #### 3. Now Open the package.json file and and see 'Scripts' for running project.
``` bash
  npm run dev
 ```
 #### 4. Open the localhost. 
 ➜  Local:   http://localhost:5173/
 
 ## Important Files

 ➜  index.html <br>
 ➜  src/App.jsx <br>
 ➜  src/main.jsx
 

 ### App.jsx is Main File where we can write our code.

 ### main.jsx is Entry point of our application, it will render our component to HTML tag
 # Hooks in React 
 ![Hooks in React](https://github.com/AliGates915/React-Basic-Projects/assets/128673394/28246b78-f007-4fc8-8466-292de28444e8)

 # 2.Hooks in React 
 ![Hooks in React](https://github.com/AliGates915/React-Basic-Projects/assets/128673394/28246b78-f007-4fc8-8466-292de28444e8)

# 3.Tailwand and Props
 1. Install tailwand-css with official website: https://tailwindcss.com/docs/installation/framework-guides
 2. Select your framework like Vite & Create a Vite Project.
 3. Run the following command in terminal:
 ``` bash
  1. npm install -D tailwindcss postcss autoprefixer
  2. npx tailwindcss init -p
 ``` 
 4. Open the postcss.config.js file and change the property of  <br>content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],<br> 
  instead of content[ ],
  5. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  ``` bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
6. Run your build process 
``` bash 
  npm run dev. 
``` 
7. Start using Tailwind’s utility classes to style your content.
``` javascript
export default function App() {
  return (
    <h1 className="font-bold bg-green-600 text-white">
      Hello world!
    </h1>
  )
}
```

# 4. Background Changer with React

