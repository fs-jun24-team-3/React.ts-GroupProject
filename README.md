## About project:
This project is a web application built using React and TypeScript, designed to provide users with a dynamic and interactive experience. It leverages Redux and Redux Toolkit for state management, ensuring efficient handling of application state and making the app responsive to user interactions.

## Design markup:
[Rounded purple](https://www.figma.com/design/xMK2Dy0mfBbJJSNctmOuLW/Phone-catalog-(V2)-Rounded-Style-1?node-id=0-1&node-type=canvas)

## Demo link:
[Nice Gadgets Store preview](https://fs-jun24-team-3.github.io/React.ts-GroupProject/)

## Key Features:
- Responsive Design: The application is styled using Module SCSS, allowing for modular and reusable CSS components that promote maintainability and scalability.
- Animation Effects: Anime.js is utilized to create smooth animations, enhancing the user experience and providing visually engaging transitions between states.
- Image Carousel: The project includes a Swiper component, enabling users to effortlessly navigate through a collection of images, showcasing a sleek and intuitive design.
- Data Persistence: User preferences and data are stored in Local Storage, ensuring that information is retained across sessions, thus improving the overall usability of the application.

## Purpose:
The primary goal of this project is to demonstrate the integration of various modern web technologies to create a seamless, user-friendly interface while also providing a solid foundation for further development and feature enhancement.

## Technologies Used:
- React: For building user interfaces.
- TypeScript: For type safety and improved developer experience.
- Redux/Redux Toolkit: For state management.
- Module SCSS: For styling components.
- Anime.js: For creating animations.
- Swiper: For implementing image sliders.
- Local Storage: For data persistence.

|===========================================================================================|

## How to name your branches:

> - ONLY in lowercase
> - If you create new feature for project you should name you branch as 'feature/`your task name`'
> - If you wanna do a bugfix of some feature you should create a new brunch from a related 'feature/`your task name`' and name it as 'bugfix/`your task name`'.
>   After successful bugfix you have to create a pull request like '`feature/your task name <- bugfix/your task name`' and merge it with a related 'feauture/`your task >name`' after a review.

## Before starting

> 1.  git checkout develop
> 2.  git pull origin develop
> 3.  git checkout -b `your branch name`
> 4.  npm run dev (to see your work)

## How to add/commit/push:

> 1.  git add ./src
> 2.  git commit -m '`your message`'
> 3.  git push origin '`your branch name`'
> 4.  Create pull request to develop brunch
> 5.  After a review your branch will be merged with `develop branch`

## How to use pxToRem($value) function:

> - This function calculate '`rem`' value, as it is more flexible and responsive than px units.
> - Use pxToRem($value) function for '`font-size`' property. F.e. '`font-size: pxToRem(48);`' - just paste your value from the layout into the parentheses.
