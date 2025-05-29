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
    
    # Optional: use custom nginx config
    # COPY nginx.conf /etc/nginx/nginx.conf
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    