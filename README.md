# learn-with-pannellum

learn-with-pannellum is a the experimentation of working with a panoramic picture using a library pannellum (https://pannellum.org/)


pannellum is a lightweight, free, and open source panorama viewer for the web. Built using HTML5, CSS3, JavaScript, and WebGL, it is plug-in free

## Installation

Use the docker

```bash
cd example

mv docker-compose.yml.txt docker-compose.yml

docker build -t learn-with-pannellum-webserver:v1 .

docker images

docker-compose up -d
```

## Usage

```bash
Web browser -> localhost:8080
