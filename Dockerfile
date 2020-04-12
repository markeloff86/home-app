FROM node:10 as builder

ARG APP_DIR=/home-app-ui
WORKDIR $APP_DIR
COPY package.json package-lock.json $APP_DIR/
RUN npm install
COPY . $APP_DIR
RUN npm run build

FROM nginx

#!/bin/sh
COPY nginx.conf /etc/nginx/nginx.conf
## Remove default nginx pages
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /home-app-ui/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]