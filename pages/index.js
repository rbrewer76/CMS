import Dash from '../src/components/Dash'
import Layout from '../src/components/Layout'

const Main = ({bookmarkedCases}) => {

  return (
    <>
      <Layout>
        <Dash bookmarkedCases={bookmarkedCases} />
      </Layout>

    </>
  )
}


export const getServerSideProps = async () => {
  const bookmarkedCases = require('../data/bookmarked.json')

  return {
    props: {bookmarkedCases}
  }
}


export default Main