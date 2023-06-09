//Creacion de la maquina
class MaquinaExpendedora{
    constructor(){
        this.p1 = new Producto('10','Papa margarita',1700)
        this.p2 = new Producto('20','Jugao Hit',2400)
        this.p3 = new Producto('30','Chocolatina Jet',700)
        this.p4 = new Producto('40','Galletas',800)

        }
        darProductor1(){
            //retorna el prooducto1
            return this.p1
        }
        darProductor2(){
            //retorna el prooducto2
            return this.p2
        }
        darProductor3(){
            //retorna el prooducto3
            return this.p3
        }
        darProductor4(){
            //retorna el prooducto4
            return this.p4
        }

        abastecerProducto1(pUnidades){
            //invocar al metodo abastecer de la clase producto
            this.p1.abastecer(pUnidades)
        }
        abastecerProducto2(pUnidades){
            //invocar al metodo abastecer de la clase producto
            this.p2.abastecer(pUnidades)
        }
        abastecerProducto3(pUnidades){
            //invocar al metodo abastecer de la clase producto
            this.p3.abastecer(pUnidades)
        }
        abastecerProducto4(pUnidades){
            //invocar al metodo abastecer de la clase producto
            this.p4.abastecer(pUnidades)
        }

        venderProducto1(){
            //vender unidades del producto
            if (this.p1.darCantidadUnidadesDisponibles() > 0){
                //verifica si hay unidades disponibles del producto
                //si es asi vende el producto
                this.p1.vender()
            }
            else{
                //si no hay unidades
                alert("no existen unidades disponibles")
            }
        }

        venderProducto2(){
            //vender unidades del producto
            if (this.p2.darCantidadUnidadesDisponibles() > 0){
                //verifica si hay unidades disponibles del producto
                //si es asi vende el producto
                this.p2.vender()
            }
            else{
                //si no hay unidades
                alert("no existen unidades disponibles")
            }
        }

        venderProducto3(){
            //vender unidades del producto
            if (this.p3.darCantidadUnidadesDisponibles() > 0){
                //verifica si hay unidades disponibles del producto
                //si es asi vende el producto
                this.p3.vender()
            }
            else{
                //si no hay unidades
                alert("no existen unidades disponibles")
            }
        }

        venderProducto4(){
            //vender unidades del producto
            if (this.p4.darCantidadUnidadesDisponibles() > 0){
                //verifica si hay unidades disponibles del producto
                //si es asi vende el producto
                this.p4.vender()
            }
            else{
                //si no hay unidades
                alert("no existen unidades disponibles")
            }
        }
        darCantidadTotalVentas(){
            let cantidadTotal = this.p1.darCantidadUnidadesVendidas() +
                                this.p2.darCantidadUnidadesVendidas()+
                                this.p3.darCantidadUnidadesVendidas()+
                                this.p4.darCantidadUnidadesVendidas()
            return cantidadTotal
        }
        darValorTotalVentas(){
            let valorVentas = this.p1.cantidadUnidadesVendidas()*this.p1.darPrecio()+
                              this.p2.cantidadUnidadesVendidas()*this.p2.darPrecio()+
                              this.p3.cantidadUnidadesVendidas()*this.p3.darPrecio()+
                              this.p4.cantidadUnidadesVendidas()*this.p4.darPrecio()

            return valorVentas
        }


}

//Creacion de la clase productos
class Producto{
    constructor (id,nombre,precio){
        //crear el constructor
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidadUnidadesDisponibles = 0
        this.cantidadUnidadesVendidas= 0

    }
    darIdentificador(){
        //metodo que retorna el id del producto
        return this.id
    }
    darNombre(){
        //metodo que retorna el nombre del producto
        return this.nombre
    }
    darPrecio(){
        //metodo que retorna el precio
        return this.precio
    }
    darCantidadUnidadesDisponibles(){
        //metodo que eretorna las unidades disponible
        return this.cantidadUnidadesDisponibles
    }
    darCantidadUnidadesVendidas(){
        //metodo que retorna las ventas
        return this.cantidadUnidadesVendidas
    }
    abastecer(pUnidades){
        //metodo que abastece un producto
        this.cantidadUnidadesDisponibles=this.cantidadUnidadesDisponibles + pUnidades
    }
    vender(){
        //metodo que vende un producto
        this.cantidadUnidadesDisponibles=this.cantidadUnidadesDisponibles - 1
        this.cantidadUnidadesVendidas=this.cantidadUnidadesVendidas + 1
    }
}

let m = new MaquinaExpendedora()

function abs_papa() {
    let cant = prompt("Ingrese el numero de unidades que abastecera el producto")
    m.abastecerProducto1(parseInt(cant))
    let disponible = m.darProductor1().darCantidadUnidadesDisponibles() 
    document.getElementById('disp_papa').innerHTML = 'Disponibles: ' + disponible

    }

function abs_jugo() {
    let cant = prompt("Ingrese el numero de unidades que abastecera el producto") 
    m.abastecerProducto2(parseInt(cant))
    let disponible = m.darProductor2().darCantidadUnidadesDisponibles() 
    document.getElementById('disp_jugo').innerHTML = 'Disponibles: ' + disponible
               
    }

function abs_chocolate() {
    let cant = prompt("Ingrese el numero de unidades que abastecera el producto")
    m.abastecerProducto3(parseInt(cant))
    let disponible = m.darProductor3().darCantidadUnidadesDisponibles() 
    document.getElementById('disp_choc').innerHTML = 'Disponibles: ' + disponible
                   
    }

function abs_galleta() {
    let cant = prompt("Ingrese el numero de unidades que abastecera el producto") 
    m.abastecerProducto4(parseInt(cant))
    let disponible = m.darProductor4().darCantidadUnidadesDisponibles() 
    document.getElementById('disp_galleta').innerHTML = 'Disponibles: ' + disponible
                       
    }



