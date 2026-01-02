# ====================================
# Development Stage
# ====================================
FROM node:22-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy project files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start development server with SSR
CMD ["npm", "run", "dev"]

# ====================================
# Build Stage (for production)
# ====================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build client and server
RUN npm run build

# ====================================
# Production Stage
# ====================================
FROM node:22-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/index.html ./index.html

# Expose production server port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Start production server
CMD ["node", "server.js"]