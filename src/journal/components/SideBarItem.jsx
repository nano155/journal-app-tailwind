import { useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({id, title, body, note}) => {
  const [clicked, setClicked] = useState(null)

  const dispatch = useDispatch()

  const newTitle = useMemo(()=>{

    return title.length > 17
    ?title.substring(0,17)+'...'
    :title
  },[title])

  const handleClick = (note,i) =>{
    const {id, title, body, date, imageUrls=[]} = note
    dispatch(setActiveNote({id, title, body, date, imageUrls}))
   setClicked(i)
    setTimeout(() => {
     setClicked(null)
    }, 1000);
  }
  return (
    <>
    <li
      key={id}
      className={`mx-2 my-4 flex gap-5 justify-between items-center cursor-pointer ${clicked === id ? 'animate-blurred-fade-in' : ''}`}
      onClick={() => handleClick(note,id)}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
        </svg>
      </div>
      <div className="flex flex-col gap-1 text-sm flex-wrap items-start w-full">
        <h3 className="font-semibold">{newTitle}</h3>
        <p className="-tracking-tighter text-xs">{body}</p>
      </div>
    </li>
    </>
  )
}
