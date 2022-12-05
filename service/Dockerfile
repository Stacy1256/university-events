FROM node:19-alpine

COPY package*.json ./

RUN npm ci

COPY src src

ENV PG_USER=postgres PG_PASSWORD=password PG_HOST=172.17.0.2 PG_PORT=5432 PG_DB=university_events
ENV PG_CONN_URL=postgres://$PG_USER:$PG_PASSWORD@$PG_HOST:$PG_PORT/$PG_DB

CMD ["npm", "start"]
