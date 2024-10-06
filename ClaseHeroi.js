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
        }else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        }
        
    	console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}    

let heroi = new Heroi("Marlin", 1000, "mago");

heroi.atacar();