# # FROM node:latest AS build_app
# # WORKDIR /usr/src/app
# # COPY ./ ./api
# # RUN cd api && npm install

# # FROM node:latest
# # WORKDIR /usr/src/app
# # COPY --from=build_app /usr/src/app/api ./
# # RUN ls
# # RUN npm run build
# # EXPOSE 7777
# # CMD ["npm", "start"]


# FROM node:slim
# COPY . .
# RUN npm install
# RUN npm run build
# EXPOSE 7777
# CMD ["npm", "start"]

# Use Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code to container
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port 7777
EXPOSE 7777

# Command to run the application
CMD ["node", "dist/index.js"]
