import {Flex, Text, View} from '@adobe/react-spectrum'
import {CaseValueBold} from './CaseValue'

const CaseDefInfo = ({defName, nameId, address, phone}) => {
  const {street, city, state, zip} = address

  return (
    <View padding="size-300">
      <Flex direction="column">
        <CaseValueBold label="Name Id : " value={nameId} />
        <Text>{defName}</Text>
        <Text>{street}</Text>
        <Text>{city}, {state} {zip}</Text>
        {phone}
      </Flex>
    </View>
  )
}


export default CaseDefInfo