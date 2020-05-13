FROM nginx:1.17.3-alpine

EXPOSE 80

WORKDIR PATH
COPY *.tgz /tmp
RUN tar -xvf /tmp/*.tgz \
    && mv /usr/share/nginx/html /usr/share/nginx/html.old \
    && mv /tmp/dist /usr/share/nginx/html \
    && rm -rf /tmp

RUN echo $'server {\n\
    listen       80;\n\
    server_name  localhost;\n\
    \n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        index  index.html index.htm;\n\
        try_files $uri $uri/ /index.html =404;\n\
    }\n\
	\n\
    error_page   500 502 503 504  /50x.html;\n\
    location = /50x.html {\n\
        root   /usr/share/nginx/html.old;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

ENTRYPOINT nginx -g 'daemon off;'