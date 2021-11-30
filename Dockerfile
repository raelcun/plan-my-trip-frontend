FROM node:16-alpine AS base
WORKDIR /app
RUN npm i -g serve@13

FROM base AS build
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --no-audit
COPY . ./
RUN npm run build

FROM base
ARG GITHUB_SHA
ARG GITHUB_REF
ENV REACT_APP_GITHUB_SHA=$GITHUB_SHA
ENV REACT_APP_GITHUB_REF=$GITHUB_REF
COPY --from=build /app/build ./

EXPOSE 3000
CMD ["serve", "-p", "3000"]