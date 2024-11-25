interface DispositivoEntrada {
    describir(): string;
  }

  class Teclado implements DispositivoEntrada {
    constructor(private tipoConexion: string, private marca: string) {}
  
    describir(): string {
      return `Teclado - Marca: ${this.marca}, Conexión: ${this.tipoConexion}`;
    }
  }
  

  class Raton implements DispositivoEntrada {
    constructor(private tipoConexion: string, private marca: string) {}
  
    describir(): string {
      return `Ratón - Marca: ${this.marca}, Conexión: ${this.tipoConexion}`;
    }
  }

  class Scanner implements DispositivoEntrada {
    constructor(private tipoConexion: string, private marca: string) {}
  
    describir(): string {
      return `Scanner - Marca: ${this.marca}, Conexión: ${this.tipoConexion}`;
    }
  }
  

  class DispositivoEntradaFactory {
    public crearDispositivo(tipo: string, tipoConexion: string, marca: string): DispositivoEntrada {
        switch(tipo){
            case "Teclado":
                return new Teclado(tipoConexion, marca);
            case "Raton":
                return new Raton(tipoConexion, marca);
            case "Scanner":
                return new Scanner(tipoConexion, marca);
        }
      throw new Error("Tipo de dispositivo no reconocido");
    }
  }

  const factory = new DispositivoEntradaFactory();
  
  const teclado = factory.crearDispositivo("Teclado", "USB", "Logitech");
  const raton = factory.crearDispositivo("Raton", "Bluetooth", "Razer");
  const scanner = factory.crearDispositivo("Scanner", "USB", "Epson");
  
  console.log(teclado.describir()); 
  console.log(raton.describir());  
  console.log(scanner.describir()); 
  