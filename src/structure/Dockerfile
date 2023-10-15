FROM node:18.6-bullseye

ARG APP_ROOT=/app
WORKDIR ${APP_ROOT}

ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH

COPY package.json yarn.lock tsconfig.json .eslintrc.json ./

RUN yarn install --frozen-lockfile

COPY public/ ./public
COPY src/ ./src

EXPOSE 3000

CMD yarn start
