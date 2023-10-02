FROM  node:16.16.0 as node
WORKDIR /app
COPY . .

RUN npm  install

RUN npm run build

FROM nginx:1.19
COPY  --from=node app/dist/front-end /usr/share/nginx/html

EXPOSE 80

