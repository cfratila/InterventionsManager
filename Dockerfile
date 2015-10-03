FROM node:4.1.1

# install gulp
RUN npm install gulp -g
RUN gulp --version

# add bower.io
#RUN npm install -g bower
#RUN brunch --version

EXPOSE 8080