import {Divider, View} from '@adobe/react-spectrum'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
      <div className="flex">
        <View>
          <Sidebar />
        </View>
        <Divider size="M" />
        <Divider size="M" orientation="vertical" />        
        <View backgroundColor="gray-75" height="100%" width="100%" overflow="auto">      
          {children}
        </View>
      </div>
      <style jsx>{`
        .flex {
          display: flex;
          height: 100vh;
          width: 100%;
        }
        @media only screen and (max-width: 780px) {
          .flex {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>  
    </>
  )
}


export default Layout