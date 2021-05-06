import {useState} from 'react'
import {Text} from '@adobe/react-spectrum'
import {ComboBox, Item} from '@react-spectrum/combobox'

export const CaseChargeEdit = ({charge}) => {
  const charges = require('../../data/charges.json')  
  const [currentCharge, setCurrentCharge] = useState(charge)

  return (
    <ComboBox label="Charge Code" width="100%" maxWidth="size-6000" defaultItems={charges} defaultInputValue={currentCharge} onSelectionChange={setCurrentCharge}>
      {(item) => 
        <Item textValue={item.id + " ~ " + item.desc}>
          <Text>{item.id}</Text>
          <Text slot="description">{item.desc}</Text>          
        </Item>}
    </ComboBox>
  )
}


export const CaseChargeDispoEdit = ({type}) => {
  const types = require('../../data/dispo.json')  
  const [currentType, setCurrentType] = useState(type)

  return (
    <ComboBox label="Disposition" width="size-2000" defaultItems={types} defaultInputValue={currentType} onSelectionChange={setCurrentType}>
      {(item) => <Item>{item.id}</Item>}
    </ComboBox>
  )
}


export const CaseChargePleaEdit = ({type}) => {
  const types = require('../../data/plea.json')  
  const [currentType, setCurrentType] = useState(type)

  return (
    <ComboBox label="Plea" width="size-2000" defaultItems={types} defaultInputValue={currentType} onSelectionChange={setCurrentType}>
      {(item) => <Item>{item.id}</Item>}
    </ComboBox>
  )
}


export const CaseObligationTypeEdit = ({type}) => {
  const types = require('../../data/obligation.json')  
  const [currentType, setCurrentType] = useState(type)

  return (
    <ComboBox label="Obligation Type" width="size-2000" defaultItems={types} defaultInputValue={type} onSelectionChange={setCurrentType}>
      {(item) => <Item>{item.id}</Item>}
    </ComboBox>
  )
}


export const CaseStatusEdit = ({status}) => {
  const statuses = require('../../data/status.json')  
  const [currentStatus, setCurrentStatus] = useState(status)

  return (
    <ComboBox label="Case Status" defaultItems={statuses} defaultInputValue={status} onSelectionChange={setCurrentStatus}>
      {(item) => <Item>{item.id}</Item>}
    </ComboBox>
  )
}


export const CaseTypeEdit = ({type}) => {
  const types = require('../../data/type.json')  
  const [currentType, setCurrentType] = useState(type)

  return (
    <ComboBox autoFocus="true" label="Case Type" defaultItems={types} defaultInputValue={type} onSelectionChange={setCurrentType}>
      {(item) => <Item>{item.id}</Item>}
    </ComboBox>
  )
}