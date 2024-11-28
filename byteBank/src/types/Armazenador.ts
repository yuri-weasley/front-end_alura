export class Armazenador {
  private constructor() {}

  static salvar(chave: string, valor: any): void {
    const valorComString = JSON.stringify(valor);
    localStorage.setItem(chave, valorComString);
  }

  static obter<T>(
    chave: string,
    reviver?: (this: any, key: string, value: any) => any
  ): T | null {
    const valor = localStorage.getItem(chave);

    if (valor === null) {
      return null;
    }
    if (reviver) {
      JSON.parse(valor, reviver) as T;
    }
    return JSON.parse(valor) as T;
  }
}

/* 
    Sobre métodos estáticos...

    uando estamos trabalhando com TypeScript, pode ser necessário criar classes e métodos que possam ser acessados sem precisar criar um objeto da classe. Os métodos estáticos são uma maneira poderosa de definir comportamentos e lógicas que podem ser usados diretamente na classe, sem a necessidade de criar objetos.

    Imagine que você tenha uma classe chamada Utils e deseja criar um método que converta uma string em letras maiúsculas. Em vez de criar uma instância da classe Utils toda vez que você precisar usar esse método, você pode declará-lo como um método estático. Isso permitirá que você acesse o método diretamente na classe, sem a necessidade de criar um objeto.
    Ex.:
    class Utils {
        static converterParaMaiusculas(texto: string): string {
        return texto.toUpperCase();
        }
    }

    // Chamando o método estático diretamente na classe
    const textoConvertido = Utils.converterParaMaiusculas("Olá, mundo!");
    console.log(textoConvertido); 
    // Saída no console: "OLÁ, MUNDO!"
*/
