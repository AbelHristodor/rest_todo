# Rest - Todo

Todo app made using Django's REST Framework for the backend and React.js for the frontend.

The app is dockerized. There are 2 containers, one for the backend and one for the frontend which are run simultaneously thanks to *docker-compose*.

## Install

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed, clone the repo and then run:

```bash
    docker-compose up --build
```

The frontend will be running at `localhost:3000` while the backend will be running at `localhost:8000`

### What i learned

- Viewsets/Custom API endpoints
- Routers
- Serializers/ModelSerializer
- React Class-based Components
- Docker-compose
