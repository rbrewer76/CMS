import {useState} from 'react'
import {ActionButton, Flex, Text, View} from '@adobe/react-spectrum'
import Add from '@spectrum-icons/workflow/Add'
import Remove from '@spectrum-icons/workflow/Remove'
import {CaseChargeEdit} from './CaseEdit'

const CaseNewCharges = () => {
  
  const [count, setCount] = useState(2)
  const [listIds, setListIds] = useState([{id: 1}])

  const addListNodeWithId = () => {
    setListIds(listIds.concat([{id: count}]))
    setCount(count + 1)
  }

  const removeListNodeWithId = (id) => {
    const index = listIds.findIndex(x => x.id === id)
    let modArray = [...listIds]
    modArray.splice(index, 1)
    setListIds(modArray)
  }

  return (
    <View padding="size-300">
      <Flex direction="column" rowGap="size-100">
        <Flex columnGap="size-200"> 
          <ActionButton width="size-100" onPress={() => addListNodeWithId()}>
            <Add />
          </ActionButton>
          <Text alignSelf="center"><b><u>Charges</u></b></Text>
        </Flex>
        {listIds.map(x => 
          <Flex key={x.id} columnGap="size-200" alignItems="end">
            <ActionButton width="size-100" onPress={() => removeListNodeWithId(x.id)}>
              <Remove />
            </ActionButton>
            <CaseChargeEdit key={x.id} />
          </Flex>
          )}
      </Flex>
    </View>
  )
}


export default CaseNewCharges