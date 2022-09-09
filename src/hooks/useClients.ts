import { useEffect, useState } from "react";
import ClientsColletion from "../backend/db/ClientColletion";
import ResposClient from "../backend/ReposClient";
import Client from "../core/Client";
import useTableOrForm from "./useTableOrForm";

export default function useClients(){
    const repo: ResposClient = new ClientsColletion()

    const {tableVisible, exibTable, exirForm  } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);


  useEffect(getAll, []);
  
  function getAll(){
    repo.allClients()
      .then(clients =>{
          setClients(clients)
          exibTable();
      })
}
 
function clientSelected(client: Client){
  setClient(client);
  exirForm();
  
}

async function clientExclused(client: Client){
  await repo.delete(client)
  getAll();
  
}

function clientNew(){
  setClient(Client.empty());
  exirForm();
  
}

async function clientSave(client: Client){
  await repo.save(client)
  getAll();
  
}

return{
    client,
    clients,
    clientNew,
    clientSave,
    clientExclused,
    clientSelected,
    getAll,
    tableVisible,
    exibTable
}
}