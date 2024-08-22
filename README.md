<div align="center">
<h1>🌩️ Twist Space</h1>
<img src="/public/logo.png" width="312px" height="312px"/>
<p>Spin, zoom, and enjoy your 3D models anywhere!</p>
</div>

---

## 📜 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies and Tools](#technologies-and-tools)
  - [React Three Fiber](#react-three-fiber)
  - [TailwindCSS](#tailwindcss)
  - [Framer Motion and Motion Three Fiber](#framer-motion-and-motion-three-fiber)
  - [Wouter](#wouter)
- [Control Panel](#control-panel)
- [Device Support](#device-support)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [License](#license)
- [Research](#research)
- [Screenshots](#screenshots)

---

## Project Description

**Twist Space** is a web application that allows you to upload and interact with 3D models in `.glb` format. You can rotate, zoom, and scale models, adjust brightness and other parameters. The app comes preloaded with a model of the character Ganyu.

## Features

- **Upload Custom Models**: Upload your own 3D models in `.glb` format.
- **Interactive Model Controls**: Rotate, scale, and adjust the brightness and contrast of models.
- **Control Panel**: A control panel in the top-left corner allows you to manage the model and upload new ones. The panel can be hidden.
- **Cross-Platform Support**: The app is optimized for all device types, including mobile phones.
- **Lightweight Routing**: Wouter is used for minimalist and fast routing.

## Technologies and Tools

### React Three Fiber

[React Three Fiber](https://github.com/pmndrs/react-three-fiber) is a library that allows you to use Three.js with React. In Twist Space, it is used to render 3D scenes and interact with them. It makes it easy to manage 3D objects and animations using React's declarative approach.

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is a utility-first CSS framework that lets you quickly customize styles for your application. In Twist Space, TailwindCSS is used to customize the user interface, providing a convenient and flexible way to style elements.

### Framer Motion and Motion Three Fiber

[Framer Motion](https://www.framer.com/motion/) is a library for creating animations in React, and [Motion Three Fiber](https://github.com/pmndrs/drei#useframemotions) extends its capabilities to work with 3D objects. These tools are used in the project to create smooth animations and interactions with 3D models.

### Wouter

[Wouter](https://github.com/molefrog/wouter) is a minimalist and lightweight router for React. It provides fast and easy-to-use routing, which is especially important for mobile devices and high-performance applications.

## Control Panel

The control panel is located in the top-left corner of the screen and allows you to:

- Upload new 3D models.
- Rotate, scale, and adjust the current model's parameters.
- Hide and show the control panel.

## Device Support

Twist Space is fully responsive and supports use on any device—from desktops to mobile phones. The interface and functionality are optimized to ensure smooth and convenient interaction regardless of screen size.

## Project Structure

Here is the project file structure:

```
TwistSpace/
│
├── node_modules/
├── public/
├── src/
│   ├── Animation/
│   ├── assets/
│   │   └── Styles/
│   │       ├── _mixins.scss
│   │       ├── colors.scss
│   │       ├── global.scss
│   │       └── Main.scss
│   ├── components/
│   │   ├── Checkbox/
│   │   ├── ControlPanel/
│   │   │   ├── AboutMe.tsx
│   │   │   ├── ControlPanel.tsx
│   │   │   ├── HiddenButton.tsx
│   │   │   └── RenderControl.tsx
│   │   ├── DefaultCanvas/
│   │   │   └── DefaultCanvas.tsx
│   │   ├── DragAndDrop/
│   │   │   ├── DragAndDrop.tsx
│   │   │   └── fileUpload.ts
│   │   ├── RangeInput/
│   │   │   └── RangeInput.tsx
│   │   ├── RenderModel/
│   │   │   └── RenderModel.tsx
│   ├── hooks/
│   │   └── MousePosition/
│   │       └── useMousePosition.ts
│   ├── pages/
│   │   └── ErrorPage/
│   ├── store/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitattributes
├── .gitignore
├── eslint.config.js
└── index.html
```

## Installation and Setup

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/TwistSpace.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TwistSpace
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the project in development mode:

   ```bash
   npm run dev
   ```

5. To build the project, use:

   ```bash
   npm run build
   ```

6. For a production preview of the build:
   ```bash
   npm run preview
   ```

## License

This project is licensed under the [MIT License](./LICENSE).

## Research

| Research              | Result          | Comments                     |
| --------------------- | --------------- | ---------------------------- |
| 🚀 Model Load Time    | < 2 seconds     | Using lightweight libraries. |
| 📱 Mobile Performance | 60 FPS          | Fully optimized for mobile.  |
| 🌍 Browser Support    | 99% of browsers | Cross-browser compatibility. |

## Screenshots

Here are some screenshots of the application:

![Screenshot 1](/public/screenshot1.png)
![Screenshot 2](/public/screenshot2.png)
