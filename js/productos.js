/**
 * Clase que modela la informacion de un producto.
 */
    class Producto{    
    
        constructor (codProd, item, descripcion, cant_min, precio, imgProd){
    
            this.id = codProd ;
            this.item = item;
            this.descripcion = descripcion;
            this.cant_min = cant_min;
            this.precio = precio;
            this.imgProd = imgProd;
            this.productoAct = "Activado";
            this.productoActiv = "Activado";
        }
    
        /**
         * Obtiene el estado de activo o inactivo del producto
         * @returns el valor de la propiedad estado
         */
        getEstadoProd(){
    
            return this.productoAct;
            return this.productoActiv;
        }
        /**
         * funcion para setear un nuevo estado
         * @param nuevo_estado el nuevo estado a setear
         */
        setEstadoProd(nuevo_estado){
    
            this.estado = nuevo_estado;
            this.productoActiv = nuevo_estado;
        }
    }

