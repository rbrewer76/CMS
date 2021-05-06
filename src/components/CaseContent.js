import {useRecoilValue} from 'recoil'
import {editingState} from '../../store/case'
import {Flex, View} from '@adobe/react-spectrum'
import Charges from './CaseCharges'
import CaseDefInfo from './CaseDefInfo'
import CaseCourtInfo from './CaseCourtInfo'
import Financials from './CaseFinancials'
import {CaseValue, CaseValueBold} from './CaseValue'
import {CaseStatusEdit, CaseTypeEdit} from './CaseEdit'
import Divider from './Divider'

const CaseContent = ({currentCase}) => {
  const {id, type, status, statusDt, charges, 
    defName, nameId, address, phone, 
    prosName, court,
    financials
  } = currentCase
  const editing = useRecoilValue(editingState)

  return (
    <>
      <View padding="size-300">
        <Flex direction="column" wrap alignItems="start" rowGap="size-100">
          <CaseValueBold label={"Case # : "} value={id} />
          <Flex wrap columnGap="size-400" rowGap="size-100">
            {editing ? <CaseTypeEdit type={type} /> : <CaseValue label={"Case Type : "} value={type} />}
            {editing ? <CaseStatusEdit status={status} /> : <CaseValue label={"Case Status : "} value={status} />}
            {editing ? null : <CaseValue label={"Status Date : "} value={statusDt} />}
          </Flex>            
        </Flex>
      </View>
      <View>
      <Divider />                  
        <Flex>
          <CaseDefInfo defName={defName} nameId={nameId} address={address} phone={phone}/>
          <CaseCourtInfo prosName={prosName} court={court} />
        </Flex>
        <Divider />                            
        <Charges charges={charges} />
        <Divider />                            
        <Financials financials={financials} />
      </View>
    </>
  )
}


export default CaseContent