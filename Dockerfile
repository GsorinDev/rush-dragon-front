FROM node:16.10.0 as build-rush-dragonWORKDIR
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as production-rush-dragon
COPY --from=build-rush-dragon /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]