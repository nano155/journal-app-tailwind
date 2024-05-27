
export const AuthLayout = ({children, title='', onSubmit}) => {
  return (
    <div className="w-screen h-screen bg-primary-dark flex items-center ">
    <div className="container mx-auto flex flex-col justify-center bg-white w-3/5 md:w-2/4 px-16 py-10 rounded-lg shadow-custom animate-fade-in animate-delay-50">
    <h1 className="text-2xl mb-6 font-semibold">
        {title}
    </h1>
    <form className="flex flex-col w-full gap-3 mx-auto" onSubmit={onSubmit}>
    {children}
    </form>
</div>
</div>
  )
}
