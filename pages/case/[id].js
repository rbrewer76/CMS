import CaseContent from '../../src/components/CaseContent'
import Layout from '../../src/components/Layout'

const Case = ({currentCase}) => {

  return (
    <Layout>
      <CaseContent currentCase={currentCase} />
    </Layout>
  )
}


export const getServerSideProps = async ({params}) => {
  const cases = require('../../data/cases.json')
  const currentCase = cases.find(x => x.id === params.id)

  return {
    props: {currentCase}
  }
}


export default Case