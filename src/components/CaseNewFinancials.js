import {useState} from 'react'
import {ActionButton, Flex, Text, TextField, View} from '@adobe/react-spectrum'
import {NumberField} from '@react-spectrum/numberfield'
import {CaseObligationTypeEdit} from './CaseEdit'
import Add from '@spectrum-icons/workflow/Add'
import Calendar from '@spectrum-icons/workflow/Calendar'
import Remove from '@spectrum-icons/workflow/Remove'

const CaseNewFinancials = () => {
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
          <ActionButton width="size-100" onPress={() => addListNodeWithId()}><Add /></ActionButton>          
          <Text alignSelf="center"><b><u>Financial Obligations</u></b></Text>  
        </Flex>
        {listIds.map(x => 
          <Flex key={x.id} wrap columnGap="size-200" rowGap="size-100" alignItems="end">
            <ActionButton width="size-100" onPress={() => removeListNodeWithId(x.id)}>
              <Remove />
            </ActionButton>              
            <CaseObligationTypeEdit key={x.id} />
            <NumberField key={x.id} label="Amount" defaultValue={0} formatOptions={{style: "currency", currency: "USD"}} />
            <TextField key={x.id} label="Due Date" width="size-2000" placeholder=" MM/DD/YYYY" icon={<Calendar />} />
          </Flex>          
        )}
      </Flex>
    </View>
  )
}

export default CaseNewFinancials