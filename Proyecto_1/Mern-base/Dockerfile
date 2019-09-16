FROM node:9.6.1

LABEL version="1.0"
LABEL description="Twiker"
LABEL maintainer="Santiago Ortiz Cano - Sortizc1@eafit.edu.co"

ARG PORT=443
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install
RUN npm install glob
RUN npm install --test

EXPOSE 443

CMD sudo mongod
CMD npm run webpack
CMD npm run dev