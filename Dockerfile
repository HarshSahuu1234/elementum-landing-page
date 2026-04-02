# Step 1: Build the React application
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app for production (this creates the 'dist' folder)
RUN npm run build

# Step 2: Serve the application using a lightweight web server (Nginx)
FROM nginx:alpine

# Copy the built files from the previous step into the Nginx server folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
