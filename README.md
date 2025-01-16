# Dev Connect

- Created a Vite + React Application
- Removed Unecessary code
- Installed Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Creare a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials:true
- Whenever you're making API call so pass axios => { withCredentials: true }
- Install Redux Toolkit + @reduxjs/toolkit - https://redux-toolkit.js.org/
- => configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout Feature

Body
NavBar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile =>Profile
