import {useRecoilValue} from 'recoil'
import {editingState} from '../../store/case'
import {Flex, Text, TextField, View} from '@adobe/react-spectrum'
import Calendar from '@spectrum-icons/workflow/Calendar'
import {CaseChargeEdit, CaseChargeDispoEdit, CaseChargePleaEdit} from './CaseEdit'

const Charges = ({charges}) => {

  return (
    <View padding="size-300">
      <Flex direction="column" rowGap="size-100">
        <Text><b><u>Charges</u></b></Text>        
        <ChargeLabels />
        {charges.map(x => <Charge key={x.code} charge={x}/>)}
      </Flex>
    </View> 
  )
}


const Charge = ({charge}) => {
  const {code, desc, date, plea, dispo, note} = charge
  const editing = useRecoilValue(editingState)

  return (
    <>
      {editing ? 
      <Flex wrap columnGap="size-200" rowGap="size-100">
        <CaseChargeEdit charge={code + " ~ " + desc} />
        <TextField label="Charge Date" width="size-2000" placeholder=" MM/DD/YYYY" defaultValue={date} icon={<Calendar />} />
        <Flex wrap columnGap="size-200" rowGap="size-100">
          <CaseChargePleaEdit type={plea}/>
          <CaseChargeDispoEdit type={dispo} />
        </Flex>            
      </Flex>
      :
      <Flex wrap columnGap="size-200">
        <Text width="size-1000">{code}</Text>
        <Text width="size-3000">{desc}</Text>
        <Text width="size-1200">{date}</Text>
        <Text width="size-1000">{plea}</Text>
        <Text width="size-1000">{dispo}</Text>
        <Text>{note}</Text>  
      </Flex>}
    </>
  )
}


const ChargeLabels = () => {
  const editing = useRecoilValue(editingState)

  return (
    <>
      {!editing && 
      <div className="labels">
        <Flex gap="size-200" wrap>
          <Text width="size-1000"><b><u>Code</u></b></Text>
          <Text width="size-3000"><b><u>Description</u></b></Text>
          <Text width="size-1200"><b><u>Charge Date</u></b></Text>
          <Text width="size-1000"><b><u>Plea</u></b></Text>
          <Text width="size-1000"><b><u>Disposition</u></b></Text>
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


export default Charges