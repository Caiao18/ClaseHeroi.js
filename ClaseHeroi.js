class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;

    
    }

    atacar(){
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'usou shuriken';
        }
        
    	console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}    

let heroi1 = new Heroi("Marlin", 1000, "mago");
let heroi2 = new Heroi("Ragnar", 33, "guerreiro");
let heroi3 = new Heroi("Buda", 100000, "monge");
let heroi4 = new Heroi("Donadello", 15, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();