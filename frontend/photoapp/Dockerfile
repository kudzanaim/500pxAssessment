FROM nginx:alpine

COPY --from=build /build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /default.conf /etc/nginx/conf.d

EXPOSE 8080

CMD [“nginx”, “-g”, “daemon off;”]