FROM node:20-alpine

# Prisma on Alpine requires this for OpenSSL
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app
RUN npm install -g pnpm

# Install dependencies including devDependencies (prisma CLI)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --production=false

# Copy project source
COPY . .

# ✅ Generate the prisma client INSIDE the container
RUN pnpm prisma generate

# Build SvelteKit
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "3000"]
