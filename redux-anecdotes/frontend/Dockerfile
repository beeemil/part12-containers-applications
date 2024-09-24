FROM node:20 AS build-stage

WORKDIR /usr/src/app
ARG VITE_BACKEND_URL
COPY --chown=node:node . .
RUN npm ci

RUN VITE_BACKEND_URL="http://localhost:8080/api/anecdotes" npm run build

FROM nginx:1.27-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
