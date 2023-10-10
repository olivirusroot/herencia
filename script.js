class FiguraGeometrica {
area(){
    //console.log("calculo del area")
}

perimetro(){
    //console.log('calculando el perimetro')
}

}

class Circulo extends FiguraGeometrica {
    constructor(radio){
        super();
        this.radio =radio;
    }

    area(){
        return 3.1416*this.radio*this.radio;

    }

    perimetro(){
        return 2*3.1416*this.radio;
    }        

}

class Cuadrado extends FiguraGeometrica{
    constructor(lados){
        super();
        this.lados=lados;
    }

    area(){
        return this.lados*this.lados;

    }

    perimetro(){
        return this.lados*4
    } 

}

class Rectangulo extends FiguraGeometrica{
    constructor(base, altura){
        super();
        this.base= base;
        this.altura=altura;
     }

    area(){
        return this.base*this.altura;

    }

    perimetro(){
        return 2*(this.base+this.altura)
    } 
}

let circulo = new Circulo(5);
console.log(circulo.area());      
console.log(circulo.perimetro()); 

let cuadrado = new Cuadrado(2);
console.log(cuadrado.area());      
console.log(cuadrado.perimetro()); 


let rectangulo= new Rectangulo(5,4);
console.log(rectangulo.area());      
console.log(rectangulo.perimetro()); 
