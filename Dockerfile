FROM node:14.14.0-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build
RUN rm dist/index.html

# Build a small image for production
FROM frontend-books AS production
EXPOSE 3000
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html/