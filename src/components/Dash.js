import {useRecoilValue} from 'recoil'
import Link from 'next/link'
import {searchState} from '../../store/case'
import {Flex, Text, View} from '@adobe/react-spectrum'
import {Link as SpectrumLink} from '@adobe/react-spectrum'
import CasesBookmarked from './CasesBookmarked'

const Dash = ({bookmarkedCases}) => {
  const search = useRecoilValue(searchState)

  return (
    <View padding="size-300">
      <View>
        <Text >Search for (21-000212) or open a new case</Text>
      </View>
      {search && 
        <View paddingY="size-200">
          <Flex direction="column">
            <Text>Search Results Found: </Text>
            <Link as={`/case/${search.id}`} href="/case/[id]">
              <SpectrumLink><a>{search.id} - {search.defName}</a></SpectrumLink>
            </Link>
          </Flex>
        </View>
      }
      <View paddingY="size-200">
        {search === undefined ? "No Cases Found" : null}
      </View>
      <CasesBookmarked bookmarkedCases={bookmarkedCases}/>
    </View>
  )
}


export default Dash