import {SSRProvider, Provider, defaultTheme} from '@adobe/react-spectrum'
import {RecoilRoot} from 'recoil'

const App = ({Component, pageProps}) => {
  return (
    <>
      <SSRProvider>
        <Provider theme={defaultTheme} >
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>        
        </Provider>
      </SSRProvider>
      <style global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default App