FROM node:22-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm install --omit=dev
COPY app/ .
ENV NODE_ENV=production PORT=3000 APP_VERSION=1.0.0
EXPOSE 3000
USER node
CMD ["node", "server.js"]
