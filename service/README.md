# uni-back-end

## Database Design

[dbdiagram.io board](https://dbdiagram.io/d/6368aa26c9abfc611170b3bd)
 
## Deploy Locally


- Requires `docker`
- Listens on port `8080`


### With docker-compose

```sh
docker-compose up --build
```

### Without docker-compose

#### Build image

```sh
docker build . -t uni-api
```

#### Deploy

```sh
docker run --rm -p 8080:3000 -d --name uni-api uni-api
```

### Database Config

#### Modify `docker-compose.yml`

```yml
...
services:
  api:
    ...
    environment:
      PG_USER=YOUR_POSTGRES_USERNAME
      PG_PASSWORD=YOUR_POSTGRES_PASSWORD
      ...
...
```

#### Or Modify `Dockerfile`

```Docker
...
ENV PG_USER=YOUR_POSTGRES_USER PG_PASSWORD=YOUR_POSTGRES_PASSWORD ...
...
```

#### Or Override During Run

```sh
docker run --rm -p 8080:3000 -d --name uni-api --env PG_USER=YOUR_POSTGRES_USERNAME,PG_PASSWORD=YOUR_POSTGRES_PASSWORD,... uni-api
```
