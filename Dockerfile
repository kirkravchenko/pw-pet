# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Set the working directory
WORKDIR /app

# Install node dependencies - assuming your package.json is in the root
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install common fonts
RUN apt-get update && apt-get install -y \
    fonts-liberation \
    fonts-noto \
    fonts-noto-cjk \
    fonts-noto-color-emoji \
    fonts-noto-mono \
    fonts-noto-unhinted \
    fonts-dejavu \
    fonts-freefont-ttf \
    fonts-roboto \
    fonts-droid-fallback \
    fonts-ubuntu \
    fonts-ipafont-gothic \
    fonts-ipafont-mincho \
    fonts-unfonts-core \
    fonts-arphic-uming \
    fonts-arphic-ukai \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Copy the rest of the application code
COPY . .

# Install Playwright dependencies
RUN npx playwright install

RUN npx playwright install chrome

# Command to run Playwright tests
CMD ["npx", "playwright", "test"]