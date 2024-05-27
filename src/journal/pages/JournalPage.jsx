import { useDispatch, useSelector } from "react-redux"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal";





export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal)
  const dispatch = useDispatch();

  const onClickNewNotes = () => {
    dispatch(startNewNote())
  }


  return (
    <JournalLayout>

      {
        (!!active)
         ? <NoteView /> 
         : <NothingSelectedView />
      }

      <button disabled={isSaving ? true : false} className="rounded-[100%] p-2 fixed bottom-[50px] right-[50px] bg-error disabled:bg-error-light" onClick={onClickNewNotes}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus  fill-white" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>

    </JournalLayout>
  )
}
