# -------- Build stage --------
    FROM node:18-bullseye AS builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    RUN npx prisma generate
    
    RUN npm install -g typescript
    RUN tsc
    
    # -------- Runtime stage --------
    FROM node:18-bullseye
    
    WORKDIR /app
    
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    EXPOSE 5000
    CMD ["node", "dist/index.js"]
    
    