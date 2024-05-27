import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hook/useForm'
import { ImageGalery } from '../components/ImageGalery'
import { useEffect, useMemo, useRef } from 'react'
import { setActiveNote, startDeletingNote, startSaveNotes, startUploadinFiles } from '../../store/journal'
import Swal from 'sweetalert2'



export const NoteView = () => {
    const { active: note, isSaving, messageSaved } = useSelector(state => state.journal)
    const dispatch = useDispatch()


    const { body, title, date, onInputChange, formState } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date])

    const inputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length !== 0) {
            Swal.fire({
                title: 'Nota actualizada',
                text: messageSaved,
                icon: 'success',
                timer: 2000
            })
        }
    }, [messageSaved])

    const saveNote = () => {
        dispatch(startSaveNotes())
    }

    const onFileInputChange = ({ target }) => {

        if (target.files === 0) return
        dispatch(startUploadinFiles(target.files))
    }

    const onDeleteNote = () =>{
        dispatch(startDeletingNote())
    }

    return (
        <>
            <div className="flex justify-between items-center flex-wrap">
                <p className="text-3xl">{dateString}</p>
                <div className='flex items-center gap-2'>
                    <input
                        type="file"
                        className="hidden"
                        ref={inputRef}
                        multiple
                        onChange={onFileInputChange}
                        disabled = {isSaving}
                    />
                    <div
                        className={`stroke-primary-light cursor-pointer ${isSaving && 'opacity-45'}`}
                        onClick={()=> inputRef.current.click()}
   
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                        </svg></div>
                    <button className="flex items-center gap-1 p-2 my-2 hover:bg-slate-100 disabled:opacity-45 stroke-primary-light " onClick={saveNote} disabled={isSaving}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                            <path d="M11 2H9v3h2z" />
                            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                        </svg>
                        Guardar
                    </button>
                </div>

                <div className="w-full">

                    <input type="text" className="bg-slate-300 w-full rounded-sm mb-1 p-2 outline-none focus:outline-none focus:ring-1 focus:ring-slate-400" placeholder="Ingresa un titulo" name='title' value={title} onChange={onInputChange} />
                    <textarea className="bg-slate-300 w-full rounded-sm mb-1 p-2 outline-none inline-block focus:outline-none focus:ring-1 focus:ring-slate-400 h-32 resize-none" placeholder="Que sucedio el dia de hoy?"
                        name='body' value={body} onChange={onInputChange} />

                </div>

                <ImageGalery images={note.imageUrls} />

                <button className='bg-error py-1 px-3 rounded-md my-3' onClick={onDeleteNote}>Delete</button>
            </div>
        </>
    )
}
