FROM node:13.2.0

WORKDIR /node-kanban

COPY package*.json ./

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]
