# Build stage
FROM node:22 AS builder

# Enable corepack and use pnpm
RUN corepack enable

WORKDIR /app

# Copy dependency definition
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the site (with GitHub pages preset this will output to .output/public)
RUN pnpm run build

# Serve stage
FROM nginx:alpine
# Copy the static assets from builder stage
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
