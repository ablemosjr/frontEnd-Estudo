
export class Produto {
  constructor (public id: number, public nome: string, public preco: number, private desconto: number = 10) {}

  public aplicarDesconto = (preco: number): number => {
    return preco - this.desconto
  }
}
