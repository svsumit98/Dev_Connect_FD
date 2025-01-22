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
- Created feedSlice and add in the store, feed.jsx, build the user card on feed!!
- Created Profile.jsx which uses EditProfile.jsx component
- Created EditProfile component!!
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my connection requests
- Feature - Accept/reject connection requests
- Send/Ignore the user card from the feed
- Feature - SignUp

Body
NavBar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile =>Profile

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devConnect-secret.pem" ubuntu@ec2-16-171-17-172.eu-north-1.compute.amazonaws.com
- Install Node version 20.15.1
- Git Clone
- Frontend

  - npm install -> dependencies
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/\* /var/www/html/
  - Enable port :80 of your instance
  - Modify the BASE_URL in frontend project to "/api"

- Backend

  - allowed ec2 instance public IP on mongodb server
  - installled ==> npm install pm2 -g
  - pm2 start npm --name "devConnectBE" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
  - config nginx -> sudo nano /etc/nginx/sites-available/default
  - restart nginx

  Frontend = http://16.171.17.172/
  Backend = http://16.171.17.172:7777/

  Domain name = devconnect.com => 16.171.17.172

  Frontend = devconnect.com
  Backend = devConnect.com:7777 => devtinder.com/api

  nginx config :
  server_name 16.171.17.172;
  location /api/ {
  proxy_pass http://localhost:7777/;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
  }
