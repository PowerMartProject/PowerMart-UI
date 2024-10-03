# Step 1: Build the React application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build files to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx is running on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
