
export const CheckingAuth = () => {
    return (
        <div className="w-screen h-screen bg-primary-dark flex items-center">
            <div className="container mx-auto flex flex-col justify-center items-center w-3/5 md:w-2/4 px-16 py-10 rounded-lg">
            <svg className="animate-spin h-8 w-8 text-orange-400" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
            </div>
        </div>
    )
}
