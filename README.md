# Random User Generator

This project is an **interactive web application** that allows users to
**generate random user profiles** using the public API
**randomuser.me**.
It aims to provide a **simple and fast tool** for getting multiple user
JSON objects for testing and development.

------------------------------------------------------------------------

## Live Demo

You can view the live version of the project here:
**(https://shorookkhaled559.github.io/Random-User-Generator/)**

------------------------------------------------------------------------

## Features

-   **Generate Users** --- Fetch random user data by selecting how many
    users you want.
-   **Display JSON** --- Each user appears in a formatted JSON block.
-   **Copy User JSON** --- Every user has a button to copy only their
    JSON data.
-   **Copy All** --- Copy all generated users into one JSON array with a
    single click.
-   **Loading State** --- Shows a loading message while fetching data.
-   **Error Handling** --- Displays an error message when the API is
    unavailable.
-   **Responsive Design** --- Works across desktop and mobile screens.

------------------------------------------------------------------------

## Technologies Used

-   **HTML5** --- Structure and user input.
-   **CSS3 / Tailwind CSS** --- Styling and responsive layout.
-   **JavaScript (ES6)** --- Fetch API calls, JSON formatting, clipboard
    copying, DOM manipulation.
-   **RandomUser API** --- Provides real random user data.

------------------------------------------------------------------------

## Project Structure

    Random-User-Generator/
    │
    ├── css/style.css        (optional if you're using Tailwind CDN)
    ├── js/script.js
    └── index.html

------------------------------------------------------------------------

## How It Works

1.  The user enters a **number** of random users to generate.
2.  JavaScript sends a request to:
    `https://randomuser.me/api/?results=NUMBER`
3.  The API returns an array of random users.
4.  Each user:
    -   Is converted to **formatted JSON**.
    -   Is displayed inside a user card.
    -   Has a **Copy** button to copy their JSON.
5.  All users are stored in an array to allow copying them all at once.
6.  The user can:
    -   Copy one user.
    -   Copy all users together.
    -   Generate a new list anytime.

------------------------------------------------------------------------

## Getting Started

1.  **Clone or download** this repository.
2.  Open `index.html` in your browser.
3.  Enter the number of users you want.
4.  Click **Generate**.
5.  Copy any user or copy them all at once.

------------------------------------------------------------------------

## Folder Details

  File / Folder     Description
  ----------------- -----------------------------------------------
  `index.html`      Main page and structure
  `css/style.css`   Custom styles (if needed)
  `js/script.js`    Fetch users, format JSON, handle copy buttons

------------------------------------------------------------------------

## Future Improvements

-   Add **search or filter** for generated users.
-   Add **download JSON file** feature.
-   Add **user cards with images and details** (not only JSON).
-   Add **dark mode**.
-   Add **API selection** for different data sources.

------------------------------------------------------------------------

## License

This project is **open-source** and free to use, modify, or share for
learning and development purposes.
Developed by **Shorouk Khaled**.
