

export const Button = ({name, type, onClick, statusButton}) => {
  return (
    <>
    <button type={type} onClick={onClick} className="my-1 text-white bg-primary-light hover:bg-primary px-3 py-2 rounded-md w-full disabled:opacity-50 disabled:hover:bg-primary-light" disabled={statusButton}>{name}
    </button>
    </>
  )
}
