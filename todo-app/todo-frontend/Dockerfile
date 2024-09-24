FROM node:20 AS build-stage

WORKDIR /usr/src/app
ARG VITE_BACKEND_URL
COPY --chown=node:node . .
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
RUN npm ci

RUN npm run test
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
RUN VITE_BACKEND_URL="http://localhost:8080/api" npm run build

FROM nginx:1.27-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

