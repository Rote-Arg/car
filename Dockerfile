# Usa una imagen base de nginx para servir archivos estáticos
FROM nginx:latest

# Crear el directorio de la aplicación
WORKDIR /car-web

# Copia tus archivos estáticos al directorio de NGINX
COPY . /usr/share/nginx/html/car-web

# Expone el puerto 5053 para acceder al servicio
EXPOSE 5053