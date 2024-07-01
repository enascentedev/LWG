# Use uma imagem Node.js como base
FROM node:16

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto para o container
COPY . .

# Defina a variável de ambiente PORT (opcional)
ENV PORT=3000

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
