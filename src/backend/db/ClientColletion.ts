import firebase from "../config";
import Client from "../../core/Client";
import ResposClient from "../ReposClient";


export default class ClientsColletion implements ResposClient{

   #conversor = {
    toFirestore(client: Client){
        return{
            name: client.name,
            idade: client.idade
        }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client{
        const dados = snapshot.data(options);
        return new Client(dados.name, dados.idade, snapshot.id);
    }
   } 

   async save(client: Client): Promise<Client>{
    if(client?.id){
       await this.colletion().doc(client.id).set(client);
       return client
    } else{
      const docRef = await this.colletion().add(client);
        const doc = await docRef.get();
        return doc.data();
    }
   }

   async delete(client: Client): Promise<void> { 
    return this.colletion().doc(client.id).delete();
   }

   async allClients(): Promise<Client[]> {
       const query = await this.colletion().get();
       return query.docs.map(doc => doc.data()) ?? []
    }

    private colletion(){
        return firebase.firestore()
            .collection('clientes')
            .withConverter(this.#conversor);
    }
}