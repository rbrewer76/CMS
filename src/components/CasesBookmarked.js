import Link from 'next/link'
import {Flex, Text, View} from '@adobe/react-spectrum'
import {Link as SpectrumLink} from '@adobe/react-spectrum'

const CasesBookmarked = ({bookmarkedCases}) => {

  return (
    <View>
      <Text>Bookmarked Cases :</Text>
      <Flex direction="column">
        {bookmarkedCases.map(x => 
          <Link as={`/case/${x.id}`} href="/case/[id]">
            <SpectrumLink><a>{x.id} - {x.defName}</a></SpectrumLink>
          </Link>
        )}
      </Flex>
    </View>
  )
}


export default CasesBookmarked