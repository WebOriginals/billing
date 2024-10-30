FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/.output/  ./.output/
RUN npm install pm2 -g
CMD [ "pm2-runtime", ".output/server/index.mjs" ]