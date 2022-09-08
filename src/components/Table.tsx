import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps){
    function renderationHeader(){
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>

        )
    }

    function renderationInfo(){
        return props.clients?.map((client, i) =>{
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
            {renderationHeader()}
            </thead>
            <tbody>
            {renderationInfo()}
            </tbody>
        </table>
    )
}