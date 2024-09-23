FROM node:18

# Installing libvips-dev for sharp Compatibility
RUN apt update && apt install -y \
  build-essential \
  gcc \
  autoconf \
  automake \
  zlib1g-dev \
  libpng-dev \
  nasm \
  bash \
  libvips-dev \
  git

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json yarn.lock /app/
COPY .env /app/

RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install

ENV PATH /opt/node_modules/.bin:$PATH

COPY . /app
RUN yarn build

EXPOSE 1337
EXPOSE 8000

CMD ["yarn", "develop", "--watch-admin"]
