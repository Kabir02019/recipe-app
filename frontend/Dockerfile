# ---- Build Stage ----
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Serve Stage ----
FROM nginx:alpine

# Copy the built Vite output to Nginx's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 🔧 Change Nginx config to listen on port 8080 (Cloud Run default)
RUN sed -i 's/80;/8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
