FROM node

WORKDIR /app/frontend

COPY package.json /app/frontend/
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]