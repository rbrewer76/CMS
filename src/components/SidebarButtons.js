import {useRouter} from 'next/router'
import {useRecoilState, useSetRecoilState} from 'recoil'
import {editingState, searchState} from '../../store/case'
import {ActionButton, AlertDialog, DialogTrigger, Text} from '@adobe/react-spectrum'
import CloseCircle from '@spectrum-icons/workflow/CloseCircle'
import Delete from '@spectrum-icons/workflow/Delete'
import Edit from '@spectrum-icons/workflow/Edit'
import NewItem from '@spectrum-icons/workflow/NewItem'
import SaveFloppy from '@spectrum-icons/workflow/SaveFloppy'
import {CaseOption} from './Sidebar'

export const CloseCase = () => {
  const [editing, setEditing] = useRecoilState(editingState)
  const router = useRouter()

  const closing = () => {
    router.push('/')
    setEditing(false)
  }

  return (
    <CaseOption>
      {editing ? 
      <DialogTrigger>
        <ActionButton isQuiet={true}>
          <CloseCircle />
          <Text>Close Case</Text>
        </ActionButton>
        {editing && <AlertDialog
          title="Close Case"
          variant="warning"
          primaryActionLabel="Close Case"
          onPrimaryAction={closing}
          cancelLabel="Cancel">
          You are about to close case #{router.query.id} and discard all changes made. This action cannot be reversed. Press 'Close Case' to confirm.
        </AlertDialog>} 
      </DialogTrigger>
      :  
      <ActionButton isQuiet={true} onPress={() => closing()}>
        <CloseCircle />
        <Text>Close Case</Text>
      </ActionButton>
      
      }                      
    </CaseOption>
  )
}


export const DeleteCase = () => {
  const setSearch = useSetRecoilState(searchState)
  const setEdit = useSetRecoilState(editingState)  
  const router = useRouter()

  const deleting = () => {
    setSearch("")
    router.push('/')
    setEdit(false)    
  }

  return (
    <CaseOption>
      <DialogTrigger>
        <ActionButton isQuiet={true}>      
          <Delete />
          <Text>Delete Case</Text>
        </ActionButton>
        <AlertDialog
          title="Delete Case"
          variant="warning"
          primaryActionLabel="Delete Case"
          onPrimaryAction={deleting}
          cancelLabel="Cancel">
          You are about to delete {router.query?.id ? `case #${router.query.id}.` : "this newly opened case."} This action cannot be reversed. Press 'Delete Case' to confirm.
        </AlertDialog>        
      </DialogTrigger>
    </CaseOption>
  )
}


export const EditCase = () => {
  const setEdit = useSetRecoilState(editingState)

  return (
    <CaseOption>
      <ActionButton isQuiet={true} onPress={() => setEdit(true)}>
        <Edit />
        <Text>Edit Case</Text>
      </ActionButton>
    </CaseOption>
  )
}


export const NewCase = () => {
  const setEdit = useSetRecoilState(editingState)
  const router = useRouter()

  return (
    <CaseOption>
      <ActionButton isQuiet={true} onPress={() => router.push('/new')}>
        <NewItem />
        <Text>Open New Case</Text>
      </ActionButton>
    </CaseOption>
  )
}


export const SaveCase = () => {
  const setEdit = useSetRecoilState(editingState)
  const setSearch = useSetRecoilState(searchState)
  const router = useRouter()

  const saving = () => {
    setEdit(false)
    setSearch("")
    if (router.pathname === '/new')
      router.push('/')
  }

  return (
    <CaseOption>
      <ActionButton isQuiet={true} onPress={() => saving()}>      
        <SaveFloppy />
        <Text>Save Case</Text>
      </ActionButton>        
    </CaseOption>
  )
}