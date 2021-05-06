import {useRouter} from 'next/router'
import {useRecoilValue} from 'recoil'
import {editingState} from '../../store/case'
import {Flex, View} from '@adobe/react-spectrum'
import SearchBar from './SearchBar'
import {CloseCase, DeleteCase, EditCase, NewCase, SaveCase} from './SidebarButtons'

const Sidebar = () => {
  const router = useRouter()
  const editing = useRecoilValue(editingState)

  return (
    <View padding="size-300">
      <Flex direction="column" alignItems="center">
        <SearchBar />
        <CaseOptionsPane>
          {router.pathname === "/" && <NewCase />}
          {router.pathname === "/case/[id]" && 
          <>
            {!editing && <EditCase />}
            {editing && <SaveCase />}
            <CloseCase />
            <DeleteCase />
          </>}
          {router.pathname === "/new" &&
          <>
            <SaveCase />
            <DeleteCase />
          </>
          }
        </CaseOptionsPane>            
      </Flex>
    </View>
  )
}


const CaseOptionsPane = ({children}) => {

  return (
    <View width="size-2000">
      <Flex direction="column" alignItems="start">              
        {children}
      </Flex>                
    </View>
  )
}


export const CaseOption = ({children}) => {

  return (
    <View>
      <Flex direction="row">
        {children}
      </Flex>
    </View>      
  )
}


export default Sidebar