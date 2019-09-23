from node:8.16.1-alpine

ADD example.js /

EXPOSE 3000

ENTRYPOINT node example.js
