import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientExclused?: (client: Client) => void
}

export default function Table(props: TableProps){

    const exibActions = props.clientExclused || props.clientSelected

    function renderationHeader(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibActions ? <th className="p-4">Acões</th> : false}
            </tr>

        )
    }

    function renderationInfo(){
        return props.clients?.map((client, i) =>{
            return (
                <tr 
                key={client.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.idade}</td>
                    {exibActions ? renderationActions(client): false}
                </tr>
            )
        })
    }

    function renderationActions(client: Client){
        return (
            <td className="flex justify-center">
                {props.clientSelected ? (

                <button onClick={() => props.clientSelected?.(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconEdit}
                    </button>
                ) : false}

                {props.clientExclused ? (

                <button onClick={() => props.clientExclused?.(client)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
              bg-gradient-to-r from-purple-500 to-purple-800  
            `}>
            {renderationHeader()}
            </thead>
            <tbody>
            {renderationInfo()}
            </tbody>
        </table>
    )
}