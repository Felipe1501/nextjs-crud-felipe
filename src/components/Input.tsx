
interface InputProps{
    type?: 'number' | 'text'
    text: string
    value: any
    onlyReading?: boolean
    className?: string
    changeOn?: (valor: any) => void
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input type={props.type ?? 'text'}
            value={props.value}
            readOnly={props.onlyReading}
            onChange={e => props.changeOn?.(e.target.value)}
            className={`
                border border-purple-500 rounded-lg
                focus: outline-none bg-gray-100
                px-4 py-2
                ${props.onlyReading ? '' : 'focus: bg-white'}
            `}
             />
             
        </div>
    )
}