
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"



export const SideBar = ({ className }) => {
 
  const {displayName} = useSelector(state => state.auth)
  const {notes} = useSelector(state => state.journal)

  
  
  return (
    <aside className={`py-5 border-r border-solid ${className}`}>
      <div className="flex items-center flex-col">
        <div className="w-full text-center border-b border-solid pb-5 font-semibold">
          <h6>
            {displayName}
          </h6>
        </div>
        <ul>
          {
            notes.map((note) => (
              <SideBarItem note={note}  {...note} key={note.id} />
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
