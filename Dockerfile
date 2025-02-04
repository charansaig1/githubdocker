#  Use the official Node.js image with Alpine Linux for a smaller image size
FROM node:20-alpine

#  Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the backend files into the container 
COPY backend/ .

#  Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "index.js" , "server.js"]
