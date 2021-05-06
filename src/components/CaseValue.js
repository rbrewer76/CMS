import {Text} from '@adobe/react-spectrum'

export const CaseValue = ({label, value}) => {

  return (
    <Text>{label}{value}</Text>
  )
}


export const CaseValueBold = ({label, value}) => {

  return (
    <Text>{label}<b>{value}</b></Text>
  )
}


export const CaseValueBoldUnderline = ({label, value}) => {

  return (
    <Text>{label}<b>{value}</b></Text>
  )
}