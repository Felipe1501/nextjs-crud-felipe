export default class Client{
    #id: string
    #name: string
    #idade: number

    constructor(name: string, idade: number, id: string = null){
        this.#name = name
        this.#idade = idade
        this.#id = id
    }

    static empty(){
        return new Client('', 0)
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get idade(){
        return this.#idade
    }
}