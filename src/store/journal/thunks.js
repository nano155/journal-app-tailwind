import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, deleteNoteById, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(creatingNewNote())

        const { uuid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls:[],
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uuid}/journal/notes`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id


        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    }

}
export const startLoadingNotes = () => {
    return async(dispatch, getState) =>{

        const {uuid} = getState().auth
        if(!uuid) throw new Error('El uuid del usuario no existe')
        
        const notes = await loadNotes(uuid)

        dispatch(setNotes(notes))
    }
}

export const startSaveNotes = () =>{
    return async (dispatch, getState) =>{

  
            dispatch(setSaving())
            const {uuid} = getState().auth
            const {active} = getState().journal
            const noteToFireStore = {
                ...active
            }
            delete noteToFireStore.id

    
            const docRef = doc(FirebaseDB, `${uuid}/journal/notes/${active.id}`)
    
            await setDoc(docRef, noteToFireStore, {merge:true})

            dispatch(updateNote(active))
    
    }
}

export const startUploadinFiles = (files = []) =>{

    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file))
        }

        const photosUrls = await Promise.all( fileUploadPromises )
        
        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () =>{
    return async (dispatch, getState) =>{

        const {active:note} = getState().journal
        const {uuid} = getState().auth
        
        console.log({uuid, note});

        const docs = doc(FirebaseDB, `${uuid}/journal/notes/${note.id}`)

        await deleteDoc(docs);

        dispatch(deleteNoteById(note.id))

    }
}