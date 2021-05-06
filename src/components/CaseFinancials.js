import {useRecoilValue} from 'recoil'
import {editingState} from '../../store/case'
import {Flex, Text, TextField, View} from '@adobe/react-spectrum'
import {NumberField} from '@react-spectrum/numberfield'
import Calendar from '@spectrum-icons/workflow/Calendar'
import {CaseObligationTypeEdit} from './CaseEdit'

const Financials = ({financials}) => {

  return (
    <View padding="size-300">
      <Flex direction="column" rowGap="size-100">  
        <Text><b><u>Financial Obligations</u></b></Text>        
        <FinancialLabels />
        {financials.map(x => <Financial key={x.id} financial={x} />)}
      </Flex>
    </View> 
  )
}


const Financial = ({financial}) => {
  const {type, amount, paid, balance, due} = financial
  const editing = useRecoilValue(editingState)

  return (
    <>
      {editing ?
        <Flex wrap columnGap="size-200" rowGap="size-100">
          <CaseObligationTypeEdit type={type} />
          <NumberField label="Amount" defaultValue={amount} formatOptions={{style: "currency", currency: "USD"}} />
          <TextField label="Due Date" width="size-2000" placeholder=" MM/DD/YYYY" defaultValue={due} icon={<Calendar />} />
        </Flex>
      :
        <Flex wrap columnGap="size-200">  
          <Text width="size-1200">{type}</Text>
          <Text width="size-1000">${amount}</Text>
          <Text width="size-1000">${paid}</Text>
          <Text width="size-1000">${balance}</Text>
          <Text width="size-1000">{due}</Text>
        </Flex>
      }
    </>
  )
}


const FinancialLabels = () => {
  const editing = useRecoilValue(editingState)
  
  return (
    <>
      {!editing && 
      <div className="labels">
        <Flex gap="size-200" wrap>
          <Text width="size-1200"><b><u>Type</u></b></Text>
          <Text width="size-1000"><b><u>Amount</u></b></Text>
          <Text width="size-1000"><b><u>Paid</u></b></Text>
          <Text width="size-1000"><b><u>Balance</u></b></Text>
          <Text width="size-1000"><b><u>Due Date</u></b></Text>          
        </Flex>      
      </div>}
      <style jsx>{`
        @media only screen and (max-width: 1160px) {
          .labels {
            display: none
          }
        }
      `}</style>    
    </>
  )
}


export default Financials