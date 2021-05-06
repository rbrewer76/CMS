import {Flex, View} from '@adobe/react-spectrum'
import {CaseValue} from './CaseValue'

const CaseCourtInfo = ({prosName, court}) => {

  return (
    <View padding="size-300">
      <Flex direction="column">
        <CaseValue label="Prosecutor : " value={prosName} />
        {court}
      </Flex>
    </View>
  )
}


export default CaseCourtInfo