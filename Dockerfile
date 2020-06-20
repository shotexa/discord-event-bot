FROM node:12

WORKDIR /usr/app

COPY package.json tsconfig.json ./
COPY src/ ./src

RUN yarn
RUN mkdir ./dist
RUN yarn transpile
# removing src since we already trianspiled .ts files
RUN rm -rf src/

EXPOSE 3000

CMD ["yarn", "start"]
