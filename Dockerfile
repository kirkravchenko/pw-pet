# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Set the working directory
WORKDIR /app

# Install node dependencies - assuming your package.json is in the root
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Playwright dependencies
RUN npx playwright install

# Command to run Playwright tests
CMD ["npx", "playwright", "test"]