CREATE database tiendaArteDB;
USE tiendaArteDB;

DROP DATABASE tiendaArteDB;

CREATE TABLE Usuarios (
	Id_Usuario 					bigint AUTO_INCREMENT NOT NULL UNIQUE, 
	Alias_Usuario 				varchar(30) NOT NULL UNIQUE,
    Password_Usuario			varchar(30),
    Rol_Usuario					int,
    Correo_Usuario              varchar(30),
    Imagen_Usuario				blob,
    Nombre_Usuario				varchar(30),
    ApePaterno_Usuario  		varchar(30),
    ApeMaterno_Usuario  		varchar(30),
    FechaNacimiento_Usuario		date,
    Genero_Usuario				int,
    FechaIngreso_Usuario		date,
    Privacidad_Usuario			tinyint(1),
    
    PRIMARY KEY (Id_Usuario)
);

CREATE TABLE Categorias (
	Id_Categoria 				bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Descrip_Categoria			varchar(500),
    UsuarioCreador_Categoria	varchar(30) NOT NULL,
    
    PRIMARY KEY (Id_Categoria)
    #FOREIGN KEY (UsuarioCreador_Categoria) REFERENCES Usuarios(Alias_Usuario)
);

CREATE TABLE Productos (
	Id_Producto					bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Usuario_Vendedor			varchar(30),
    Nombre_Producto				varchar(30),
    Descrip_Producto			varchar(500),
    Venta_Producto				tinyint(1),
    Cotizacion_Producto			tinyint(1),
    Precio_Producto				decimal(20, 2),
    Existencias_Producto		bigint,
    Valoracion_Producto			int,
    
    PRIMARY KEY (Id_Producto)
);

CREATE TABLE ImagenesProductos(
	Id_Imagen					bigint AUTO_INCREMENT NOT NULL UNIQUE,
	Id_Producto 				bigint,
    Imagen_Producto				blob,
    
    PRIMARY KEY (Id_Imagen)
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto)
);

CREATE TABLE VideosProductos(
	Id_Video					bigint AUTO_INCREMENT NOT NULL UNIQUE,
	Id_Producto					bigint,
    Video_Producto				blob,
    
    PRIMARY KEY (Id_Video)
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto)
);

CREATE TABLE CategoriasEnProductos(
	Id_CategoriaEnProducto		bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Id_Producto					bigint,
    Id_Categoria				bigint,
    
    PRIMARY KEY (Id_CategoriaEnProducto)
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto),
    #FOREIGN KEY (Id_Categoria) REFERENCES Categorias(Id_Categoria)
);

DROP TABLE Comentarios;

CREATE TABLE Comentarios(
	Id_Comentario				bigint AUTO_INCREMENT NOT NULL UNIQUE,
    UsuarioCreador_Comentario	varchar(30) NOT NULL COMMENT 'Usuario que comento',
    Id_Producto					bigint COMMENT 'Producto comentado',
    Descrip_Comentario			varchar(800),
    Fecha_Comentario			date,
    
	PRIMARY KEY (Id_Comentario)
    #FOREIGN KEY (UsuarioCreador_Comentario) REFERENCES Usuario(Alias_Usuario),
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto)
);

CREATE TABLE Listas(
	Id_Lista					bigint AUTO_INCREMENT NOT NULL UNIQUE,
    UsuarioCreador_Lista		varchar(30) NOT NULL,
    Nombre_Lista				varchar(30),
    Descrip_Lista				varchar(300),
    Imagen_Lista				blob,
    Privacidad_Lista			tinyint(1),
    
    PRIMARY KEY (Id_Lista)
    #FOREIGN KEY (UsuarioCreador_Lista) REFERENCES Usuarios(Alias_Usuario)
);

DROP TABLE ProductosEnListas;

CREATE TABLE ProductosEnListas(
	Id_ProductoEnLista			bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Id_Lista					bigint,
    Id_Producto					bigint COMMENT 'Uno de muchos Productos que contiene la lista',
    
    
	PRIMARY KEY (Id_ProductoEnLista)
    #FOREIGN KEY (Id_Lista) REFERENCES Listas(Id_Lista),
    
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto),
    #FOREIGN KEY (Nombre_Producto) REFERENCES Productos(Nombre_Producto),
    #FOREIGN KEY (Decrip_Producto) REFERENCES Productos(Descrip_Producto),
    #FOREIGN KEY (Precio_Producto) REFERENCES Productos(Precio_Producto)
);

CREATE TABLE CarritoCompras(
	Id_CarritoDeCompras			bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Id_Usuario					bigint,
    
    PRIMARY KEY (Id_CarritoDeCompras)
    #FOREIGN KEY (Id_Usuario) REFERENCES Usuarios(Id_Usuario)
);

CREATE TABLE ProductosEnCarritoCompras(
	Id_ProductoEnCarrito		bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Id_CarritoDeCompras			bigint,
    Id_Producto					bigint,
    CantidadProducto			bigint,

	PRIMARY KEY (Id_ProductoEnCarrito)
    #FOREIGN KEY (Id_CarritoDeCompras) REFERENCES CarritoCompras(Id_CarritoDeCompras),
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto)
);

DROP TABLE Ventas;

CREATE TABLE Ventas(
	Id_Venta					bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Usuario_Comprador			varchar(30),
    Id_Producto					bigint,
    FechaHora_Venta				datetime,
    Precio_Venta				decimal(20,2),
    Id_MetodoPago               int,

    PRIMARY KEY (Id_Venta)
    #FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto),
    #FOREIGN KEY (Valoracion_Producto) REFERENCES Productos(Valoracion_Producto),
    #FOREIGN KEY (Existencias_Producto) REFERENCES Productos(Existencias_Producto),
    #FOREIGN KEY (Id_MetodoPago) REFERENCES MetodoPago(Id_MetodoPago)
);

CREATE TABLE MetodoPago(
	Id_MetodoPago					bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Nombre_MetodoPago			varchar(30),
    Imagen_MetodoPago				blob
    
    PRIMARY KEY (Id_MetodoPago)
   
);

CREATE TABLE SolicitudesCotizacion(
	Id_SolicitudCotizacion		bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Id_Producto			        bigint,
    Id_Comprador				bigint,
    Id_Vendedor				    bigint,
    Precio_Negociado            decimal(20, 2),
    PRIMARY KEY (Id_MetodoPago)
   
);

CREATE TABLE Mensajes(
	Id_Mensaje					bigint AUTO_INCREMENT NOT NULL UNIQUE,
    Usuario_Emisor				varchar(30),
    Usuario_Receptor			varchar(30),
    Descrip_Mensaje				varchar(800),
    Fecha_Mensaje				date,
    
    PRIMARY KEY (Id_Mensaje)
    #FOREIGN KEY (Usuario_Emisor) REFERENCES Usuarios(Alias_Usuario),
    #FOREIGN KEY (Usuario_Receptor) REFERENCES Usuarios(Alias_Usuario)
);

ALTER TABLE  Categorias add CONSTRAINT FK_CATEGORIA foreign key (UsuarioCreador_Categoria) REFERENCES Usuarios(Alias_Usuario);
ALTER TABLE  ImagenesProductos add CONSTRAINT FK_IMAGENESPRODUCTOS foreign key (Id_Producto) REFERENCES Productos(Id_Producto);
ALTER TABLE  VideosProductos add CONSTRAINT FK_VIDEOSPRODUCTOS foreign key (Id_Producto) REFERENCES Productos(Id_Producto);
ALTER TABLE  CategoriasEnProductos add CONSTRAINT FK_CATEGORIASENPRODUCTOS1 foreign key (Id_Producto) REFERENCES Productos(Id_Producto);
ALTER TABLE  CategoriasEnProductos add CONSTRAINT FK_CATEGORIASENPRODUCTOS2 foreign key (Id_Categoria) REFERENCES Categorias(Id_Categoria);
ALTER TABLE  Comentarios add CONSTRAINT FK_COMENTARIOS1 foreign key (UsuarioCreador_Comentario) REFERENCES Usuarios(Alias_Usuario);
ALTER TABLE  Comentarios add CONSTRAINT FK_COMENTARIOS2 foreign key (Id_Producto) REFERENCES Productos(Id_Producto);
ALTER TABLE  Listas add CONSTRAINT FK_LISTAS foreign key (UsuarioCreador_Lista) REFERENCES Usuarios(Alias_Usuario);
ALTER TABLE  ProductosEnListas add CONSTRAINT FK_PRODUCTOSENLISTAS1 foreign key (Id_Lista) REFERENCES Listas(Id_Lista);
ALTER TABLE  ProductosEnListas add CONSTRAINT FK_PRODUCTOSENLISTAS2 foreign key (Id_Producto) REFERENCES Productos(Id_Producto);

ALTER TABLE  CarritoCompras add CONSTRAINT FK_CARRITOCOMPRAS foreign key (Id_Usuario) REFERENCES Usuarios(Id_Usuario);
ALTER TABLE  ProductosEnCarritoCompras add CONSTRAINT FK_PRODUCTOSENCARRITOCOMPRAS1 foreign key (Id_CarritoDeCompras) REFERENCES CarritoCompras(Id_CarritoDeCompras);
ALTER TABLE  ProductosEnCarritoCompras add CONSTRAINT FK_PRODUCTOSENCARRITOCOMPRAS2 foreign key (Id_Producto) REFERENCES Productos(Id_Producto);
ALTER TABLE  Ventas add CONSTRAINT FK_VENTAS1 foreign key (Id_Producto) REFERENCES Productos(Id_Producto);

ALTER TABLE  Mensajes add CONSTRAINT FK_MENSAJES1 foreign key (Usuario_Emisor) REFERENCES Usuarios(Alias_Usuario);
ALTER TABLE  Mensajes add CONSTRAINT FK_MENSAJES2 foreign key (Usuario_Receptor) REFERENCES Usuarios(Alias_Usuario);



ALTER TABLE  Comentarios DROP CONSTRAINT FK_COMENTARIOS1;
ALTER TABLE  Ventas DROP CONSTRAINT FK_VENTAS1;
