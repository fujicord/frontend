FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
COPY --from=build-stage /app/dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]