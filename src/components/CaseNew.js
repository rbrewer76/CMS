import {Flex, SearchField, View} from '@adobe/react-spectrum'
import {CaseValueBold} from './CaseValue'
import {CaseStatusEdit, CaseTypeEdit} from './CaseEdit'
import CaseNewCharges from './CaseNewCharges'
import CaseNewFinancials from './CaseNewFinancials'
import Divider from './Divider'

const CaseNew = () => {

  return (
    <View backgroundColor="gray-75">
      <View padding="size-300">
        <Flex direction="column" wrap alignItems="start" columnGap="size-400" rowGap="size-100">
          <CaseValueBold label={"Case # : "} value="21-000565" />
          <Flex wrap columnGap="size-400" rowGap="size-100">
            <CaseTypeEdit />
            <CaseStatusEdit />
          </Flex>  
        </Flex>
      </View>
      <Divider />
      <View padding="size-300">
        <Flex wrap columnGap="size-400" rowGap="size-100">
          <SearchField type="search" label="Defendant Name Search" placeholder="Enter Name" minWidth="size-2400" />
          <SearchField type="search" label="Prosecutor Name Search" placeholder="Enter Name" minWidth="size-2400" />
        </Flex>
      </View>
      <Divider />
      <CaseNewCharges />
      <Divider  />
      <CaseNewFinancials />
    </View>
  )
}

export default CaseNew