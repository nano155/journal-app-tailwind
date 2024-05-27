
export const Input = ({ type, name, nameP, onChange, nameV, valid }) => {

    console.log();
    return (
        <>
            <input type={type} placeholder={`${nameP.charAt(0).toUpperCase()}${nameP.slice(1)}`} name={nameV} className={`px-3 py-2 rounded-md border border-gray-100 focus:outline-none w-full focus:ring-1 focus:ring-slate-600 ${!!valid && 'focus:ring-error'}`} onChange={onChange} value={name} />
        </>
    )
}
