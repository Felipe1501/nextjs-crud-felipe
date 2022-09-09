import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormsProps {
    client: Client
    canceled?: () => void
    onChanged?: (client: Client) => void
}

export default function Forms(props: FormsProps){
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [idade, setIdade] = useState(props.client?.idade ?? 0);
    return (
        <div>
            {id ? (
                <Input 
                onlyReading
                text="Codigo" 
                value={id}/>
            ): false}
            <Input 
            text="Nome" 
            value={name}
            changeOn={setName}
            className="mb-5"
            />
            <Input 
            text="Idade" 
            type="number" 
            value={idade}
            changeOn={setIdade}
            className="mb-5"
            />
            <div className="flex justify-end mt-7">
                <Button
                 cor="blue" 
                 className="mr-2"
                 onClick={() => props.onChanged?.(new Client(name, +idade, id))}
                 >
                        {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button
                    onClick={props.canceled}
                >
                    Cancelar
                </Button>
             </div>
        </div>
    )
}