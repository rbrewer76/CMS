import {useState} from 'react'
import {useRouter} from 'next/router'
import {useSetRecoilState} from 'recoil'
import {searchState} from '../../store/case'
import {Flex, SearchField, View} from '@adobe/react-spectrum'

const SearchBar = () => {
  const [value, setValue] = useState("")
  const setSearch  = useSetRecoilState(searchState)
  const router = useRouter()

  const searchForCase = (value) => {
    const cases = require('../../data/cases.json')
    const currentCase = cases.find(x => x.id === value)
    setSearch(currentCase)

    if (router.pathname !== '/')
      router.push('/')
  }

  return (
    <View>
      <Flex direction="row" alignItems="center">
        <SearchField
          type="search"
          label="Search"
          placeholder="Enter Case #"
          value={value}
          autoFocus="true"
          minLength="4"
          maxLength="9"
          pattern="[0-9]{2}[-][0-9]+"
          isRequired
          onChange={setValue}
          onSubmit={searchForCase}
          marginBottom="size-100"          
        />
      </Flex>
    </View>
  )
}


export default SearchBar