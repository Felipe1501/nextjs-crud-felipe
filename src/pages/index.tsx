import { useState } from "react";
import Button from "../components/Button";
import Forms from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Paulo', 64, '2'),
    new Client('Bianca', 34, '3'),
    new Client('Aurea', 49, '4'),
    new Client('Felipe', 17, '5')
  ]
 
function clientSelected(client: Client){
  console.log(client.name);
  
}

function clientExclused(client: Client){
  console.log(`Excluir... ${client.name}`);
  
}

function clientSave(client: Client){
  console.log(client);
  
}

const [visible, setVisible] = useState<'tabela' | 'form'>('tabela');

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
          onClick={() => setVisible('form')}
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
        client={clients[4]}
        canceled={() => setVisible('tabela')}
        onChanged={clientSave}
        />
        )}
      </Layout>
    </div>
  )
}
