FROM node:14-alpine
ENV PORT 3000
ENV PATH /app/node_modules/.bin:$PATH
RUN mkdir /app
WORKDIR /app
RUN npm i
EXPOSE 3000
ENTRYPOINT ["yarn","start"]