FROM node:20

WORKDIR /usr/src/app

COPY --chown=node.node . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]