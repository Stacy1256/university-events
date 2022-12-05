FROM node:19-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY public public
COPY src src

RUN npm run build



FROM node:19-alpine

COPY --from=builder /app/build /app

CMD ["npx", "serve", "/app"]
