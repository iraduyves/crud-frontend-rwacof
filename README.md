# CRUD Frontend - Rwacoff

This project is a frontend application for managing products and analytics, built using modern web technologies. It provides features such as product creation, editing, deletion, and analytics visualization.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **React Query**: For server state management and data fetching.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **Chart.js**: For creating interactive charts and visualizations.
- **React Icons**: For including scalable vector icons.
- **Notiflix**: For user-friendly notifications and confirmations.
- **Docker**: For containerizing the application.
- **Nginx**: For serving the production build.

## State Management

The application uses a combination of **React Context API** and **useReducer** for managing local state. The following contexts are implemented:

- **ProductContext**: Manages the state for product-related operations such as fetching, creating, updating, and deleting products.
- **AnalyticsContext**: Manages the state for analytics data, including fetching and displaying trends and summaries.

## Error Handling

Error handling is implemented using **Notiflix** for displaying user-friendly error messages. Additionally:

- **React Query**: Provides built-in error handling for API requests.
- **Custom Reducers**: Handle error states and update the UI accordingly.

## Features

- **Product Management**:
  - View all products in a table format.
  - Create new products with image uploads.
  - Edit existing products.
  - Delete products with confirmation dialogs.

- **Analytics Dashboard**:
  - Visualize top gainers and losers using bar charts.
  - Display year-to-date (YTD) summaries using pie charts.
  - Show year-over-year (YoY) performance using bar charts.

- **Responsive Design**:
  - Fully responsive layout using Tailwind CSS.
  - Mobile-friendly navigation with a collapsible menu.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Deployment

The application is containerized using **Docker**. The `Dockerfile` and `docker-compose.yml` are included for building and running the application in a containerized environment.

### Docker Commands

- Build the Docker image:
  ```sh
  docker-compose build
  