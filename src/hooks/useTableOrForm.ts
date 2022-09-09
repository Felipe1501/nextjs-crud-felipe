import { useState } from "react";

export default function useTableOrForm(){
    const [visible, setVisible] = useState<'tabela' | 'form'>('tabela');

    const exibTable = () => setVisible('tabela');
    const exirForm = () => setVisible('form');

    return {
        formsVisible: visible === 'form',
        tableVisible: visible === 'tabela',
        exibTable,
        exirForm,
    }
}