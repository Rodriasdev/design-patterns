
class FacturacionVieja {
    public crearFactura(id: number, monto: number): void {
      console.log(`Factura creada en el sistema antiguo: ID=${id}, Monto=${monto}`);
    }
  
    public obtenerFactura(id: number): string {
      return `Factura obtenida del sistema antiguo: ID=${id}`;
    }
  }
  
  interface IFacturacion {
    generarFactura(id: number, monto: number): void;
    consultarFactura(id: number): string;
  }
  

  class AdaptadorFacturacion implements IFacturacion {
    private facturacionVieja: FacturacionVieja;
  
    constructor() {
      this.facturacionVieja = new FacturacionVieja();
    }
  
  
    public generarFactura(id: number, monto: number): void {
      this.facturacionVieja.crearFactura(id, monto);
    }
  

    public consultarFactura(id: number): string {
      return this.facturacionVieja.obtenerFactura(id);
    }
  }
  

  const facturacion: IFacturacion = new AdaptadorFacturacion();
  

  facturacion.generarFactura(1, 500); 


  const factura = facturacion.consultarFactura(1);
  console.log(factura);
