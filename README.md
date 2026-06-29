# YouTube Clone

A polished YouTube-style React application built with Vite, Redux Toolkit, React Router, Tailwind CSS, and `json-server`. The app recreates the core browsing experience of YouTube with a responsive layout, searchable video feed, tag-based filtering, video watch pages, and local authentication backed by a lightweight mock user database.

## Overview

This project is designed to feel like a real content browsing platform while staying simple enough to run locally. It includes:

- A YouTube-inspired header, sidebar, and home feed
- Search with live suggestions and filtered results
- Tag-based browsing for quick discovery
- A dedicated watch page for each video
- Login and signup flows powered by a local `db.json` user store
- Responsive UI behavior for desktop and mobile layouts

The app uses a remote mock video dataset for the feed and `json-server` for local user authentication data.

## Features

### Video browsing

- Responsive grid of video cards
- Embedded preview thumbnails using video URLs
- Watch page for selecting a single video
- Related videos displayed alongside the selected video

### Search and discovery

- Live search suggestions in the header
- Query matching against:
  - video titles
  - channel names
  - tags
- Tag chips for quick filtering
- Clear feedback when no results match the current query

### Authentication

- Signup page for creating a user locally
- Login page for validating credentials against `db.json`
- Route protection for the main app
- Public route handling for login/signup pages
- Logout support from the profile menu

### UI and UX

- Clean YouTube-style layout
- Collapsible sidebar
- Theme-aware profile menu
- Skeleton loaders for smoother loading states
- Voice search support

## Tech Stack

- React 19
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- `react-speech-recognition`
- `react-loading-skeleton`
- `json-server`

## Project Structure

```text
src/
  App.jsx
  Layout.jsx
  components/
    context/
    pages/
    Reusable/
    YouTubeLayout/
      header/
      home/
      hooks/
      sidebar/
      utils/
      watch/
  redux/
    Slices/
    Store.js
db.json
```

### Important folders

- `src/components/YouTubeLayout/header` contains the search bar, profile menu, and voice search UI.
- `src/components/YouTubeLayout/home` contains the home feed, cards, empty state, and skeleton loader.
- `src/components/YouTubeLayout/sidebar` contains the navigation sidebar and filter tags.
- `src/components/YouTubeLayout/watch` contains the watch page and related content layout.
- `src/redux/Slices` contains the Redux slices for videos and auth.
- `db.json` stores the mock users used by `json-server`.

## Getting Started

Follow these steps to run the project locally.

### 1. Install dependencies

```bash
npm install
```

### 2. Start the local JSON server

This project uses `json-server` to simulate a backend for authentication.

```bash
npm run server
```

The server runs on:

```text
http://localhost:5000
```

### 3. Start the React app

Open a second terminal and run:

```bash
npm run dev
```

Vite will start the app in your browser, usually at:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project
- `npm run server` - start `json-server` for local users

## Authentication Flow

The app keeps authentication lightweight and local:

- `Signup` posts a new user to `db.json` through `json-server`
- `Login` validates the entered email and password against the users stored in `db.json`
- On success, the user is stored in local state and localStorage
- Protected routes prevent access to the main app when the user is not logged in
- Public routes redirect logged-in users away from `/login` and `/signup`

## Search Flow

Search behavior is centralized and reusable:

- Typing in the search box updates the active query immediately
- Suggestions are generated from the currently loaded video data
- Search matches are checked against titles, channels, and tags
- The same filter logic is reused by the home feed and the tag system
- Selecting a suggestion or tag updates the feed consistently

## Data Sources

### Videos

Video data is fetched from the mock video API used by the app. The feed is loaded into Redux and reused across the home and watch pages.

### Users

User data is stored locally in `db.json` and served by `json-server`.

Example structure:

```json
{
  "users": [
    {
      "id": "235f",
      "name": "Muhib",
      "email": "muhib@example.com",
      "password": "1234"
    }
  ]
}
```

## Code Quality Notes

Several cleanup and reliability improvements were made in the codebase:

- Search logic was extracted into a shared utility module
- Header search, tag filtering, and voice search now use the same query behavior
- Theme context was split into a context file and a reusable hook
- Route setup now clearly separates protected and public pages
- Lint issues were resolved to keep the codebase stable

## Browser Support

The app is built for modern browsers that support:

- React 19
- ES modules
- HTML5 video/iframe rendering
- Speech recognition features where available

If voice search is unsupported in a browser, the app shows a fallback message.

## Notes

- This project is a clone-inspired UI and is not affiliated with YouTube.
- Login/signup are local development features backed by `json-server`.
- The video dataset is mock data intended for learning, prototyping, and UI demonstration.

## License

No license has been specified yet. Add one if you plan to share or publish the project.
