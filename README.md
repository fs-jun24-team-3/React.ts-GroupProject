## How to name your branches:
>- If you create new feature for project you should name you branch as 'feature/`your task name`'
>- If you wanna do a bugfix of some feature you should create a new brunch from a related 'feature/`your task name`' and name it as 'bugfix/`your task name`'.
>After successful bugfix you have to create a pull request like '`feature/your task name <- bugfix/your task name`' and merge it with a related 'feauture/`your task >name`' after a review.

## Before starting
>1. git checkout develop
>2. git pull
>3. git checkout -b `your branch name`

## How to add/push/commit:
>1. git add ./src
>2. git commit -m '`your message`'
>3. git push origin '`your branch name`'
>4. Create pull request
>5. After a review your branch will be merged with `develop branch`
   
## Instructions
>- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
>- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_redux-list-of-todos/)
>- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

