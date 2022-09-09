import Client from "../core/Client"

export default interface ResposClient{
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    allClients(): Promise<Client[]>
}