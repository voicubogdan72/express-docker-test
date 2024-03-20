FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=test
ENV MYSQL_USER=test
ENV MYSQL_PASSWORD=test
ENV MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password
COPY ./database_test.sql /docker-entrypoint-initdb.d/
