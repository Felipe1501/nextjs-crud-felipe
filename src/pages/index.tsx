import { useEffect, useState } from "react";
import ClientsColletion from "../backend/db/ClientColletion";
import ResposClient from "../backend/ReposClient";
import Button from "../components/Button";
import Forms from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const repo: ResposClient = new ClientsColletion()

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela');

  useEffect(getAll, []);
  
  function getAll(){
    repo.allClients()
      .then(clients =>{
          setClients(clients)
          setVisible('tabela')
      })
}
 
function clientSelected(client: Client){
  setClient(client);
  setVisible('form')
  
}

async function clientExclused(client: Client){
  await repo.delete(client)
  getAll();
  
}

function clientNew(){
  setClient(Client.empty());
  setVisible('form')
  
}

async function clientSave(client: Client){
  await repo.save(client)
  getAll();
  
}



  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'tabela' ? (
        <>
        <div className="flex justify-end">
          <Button 
          cor="green" 
          className="mb-4"
          onClick={clientNew}
          >
            Novo Cliente
            </Button>
        </div>
        <Table clients={clients} 
        clientSelected={clientSelected}
  clientExclused={clientExclused} 
        />
        </>
        ) : (
        <Forms 
        client={client}
        canceled={() => setVisible('tabela')}
        onChanged={clientSave}
        />
        )}
      </Layout>
    </div>
  )
}
