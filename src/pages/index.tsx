import Button from "../components/Button";
import Forms from "../components/Forms";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
     client,
     clients, 
     clientNew, 
     clientSave, 
     clientExclused, 
     clientSelected,
    tableVisible,
  exibTable} = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
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
        canceled={() => exibTable}
        onChanged={clientSave}
        />
        )}
      </Layout>
    </div>
  )
}
