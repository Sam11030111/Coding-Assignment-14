FROM node:18-alpine AS build

WORKDIR /Hung-Sheng_Lee_final_site

COPY package.json .

RUN npm install

COPY . .

# CMD ["npm", "start"]

RUN npm run build

FROM nginx:alpine

# Copy the build output from the first stage to Nginx's default static directory
COPY --from=build /Hung-Sheng_Lee_final_site/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
