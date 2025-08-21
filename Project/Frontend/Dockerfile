# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and lock file for dependency caching
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build production-optimized static files
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from Stage 1 into Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
