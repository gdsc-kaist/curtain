FROM node:20-alpine
RUN npm install -g pnpm
RUN pnpm --version

# Init project
COPY .gitignore package.json pnpm-lock.yaml tsconfig.json /src/
WORKDIR /src
RUN pnpm install
COPY build/index.mjs /src/build/index.mjs

# Run server
ENTRYPOINT ["npm", "run", "start"]
