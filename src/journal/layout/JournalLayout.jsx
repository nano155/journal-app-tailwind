import { SideBar, NavBar } from "../components"




export const JournalLayout = ({ children }) => {
  return (
    <>
      <div className={`flex flex-col sm:grid sm:grid-cols-[240px_1fr] grid-rows-[auto_1fr] min-h-screen animate-fade-in animate-delay-100`}>
        <NavBar className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2" />
        <SideBar className="sm:col-start-1 sm:col-end-2 sm:row-span-2" />
        <main className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:-end-3 p-4">
          {children}
        </main>
      </div>
    </>
  )
}
