import { TradeExtCustomerInfoExcel } from '../../models/trade-ext-customer-info-excel.interface';
import { ApiTradeExtCustomerInfoExcelDto } from '../../../swagger/models/api-trade-ext-customer-info-excel-dto';

export const apiTradeExtCustomerInfoExcelDtoAdapter = (source?: TradeExtCustomerInfoExcel | null): ApiTradeExtCustomerInfoExcelDto => {
  return {
    BankName: source?.bankName,
    BicBank: source?.bicBank,
    CheckingAccount: source?.checkingAccount,
    ContractEndDate: source?.contractEndDate,
    ContractNumber: source?.contractNumber,
    ContractProlongationNoChanges: source?.contractProlongationNoChanges,
    ContractResponsibleEmail: source?.contractResponsibleEmail,
    ContractResponsibleName: source?.contractResponsibleName,
    ContractResponsiblePatronimic: source?.contractResponsiblePatronimic,
    ContractResponsiblePhoneNumber: source?.contractResponsiblePhoneNumber,
    ContractResponsiblePosition: source?.contractResponsiblePosition,
    ContractResponsibleSurname: source?.contractResponsibleSurname,
    ContractStartDate: source?.contractStartDate,
    EdmOperator: source?.edmOperator,
    FaxNumber: source?.faxNumber,
    SignatoryAuthorityDocument: source?.signatoryAuthorityDocument,
    SignatoryName: source?.signatoryName,
    SignatoryPatronimic: source?.signatoryPatronimic,
    SignatoryPosition: source?.signatoryPosition,
    SignatorySurname: source?.signatorySurname,
  };
}
