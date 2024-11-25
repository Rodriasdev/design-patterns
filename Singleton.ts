class Configuracion {
    private static instancia: Configuracion; 
    private idioma: string; 
    private rutaBaseDatos: string; 
    private nivelRegistro: string; 
  

    private constructor() {
      this.idioma = ""; 
      this.rutaBaseDatos = ""; 
      this.nivelRegistro = ""; 
    }
  

    public static obtenerInstancia(): Configuracion {
      if (!Configuracion.instancia) {
        Configuracion.instancia = new Configuracion();
      }
      return Configuracion.instancia;
    }

    public getIdioma(): string {
      return this.idioma;
    }
  
    public setIdioma(nuevoIdioma: string): void {
      this.idioma = nuevoIdioma;
    }
  

    public getRutaBaseDatos(): string {
      return this.rutaBaseDatos;
    }
  
    public setRutaBaseDatos(nuevaRuta: string): void {
      this.rutaBaseDatos = nuevaRuta;
    }
  

    public getNivelRegistro(): string {
      return this.nivelRegistro;
    }
  
    public setNivelRegistro(nuevoNivel: string): void {
      this.nivelRegistro = nuevoNivel;
    }
  }
  
 
  const configuracion1 = Configuracion.obtenerInstancia();
  console.log(configuracion1.getIdioma());
  configuracion1.setIdioma("en");
  console.log(configuracion1.getIdioma()); 
  
  const configuracion2 = Configuracion.obtenerInstancia();
  console.log(configuracion2.getIdioma());
  console.log(configuracion1 === configuracion2);
  