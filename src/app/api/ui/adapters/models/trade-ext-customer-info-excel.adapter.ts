import { ApiTradeExtCustomerInfoExcelDto } from '../../../swagger/models/api-trade-ext-customer-info-excel-dto';
import { TradeExtCustomerInfoExcel } from '../../models/trade-ext-customer-info-excel.interface';

export const tradeExtCustomerInfoExcelAdapter = (source?: ApiTradeExtCustomerInfoExcelDto | null): TradeExtCustomerInfoExcel => {
  return {
    bankName: source?.BankName,
    bicBank: source?.BicBank,
    checkingAccount: source?.CheckingAccount,
    contractEndDate: source?.ContractEndDate,
    contractNumber: source?.ContractNumber,
    contractProlongationNoChanges: source?.ContractProlongationNoChanges,
    contractResponsibleEmail: source?.ContractResponsibleEmail,
    contractResponsibleName: source?.ContractResponsibleName,
    contractResponsiblePatronimic: source?.ContractResponsiblePatronimic,
    contractResponsiblePhoneNumber: source?.ContractResponsiblePhoneNumber,
    contractResponsiblePosition: source?.ContractResponsiblePosition,
    contractResponsibleSurname: source?.ContractResponsibleSurname,
    contractStartDate: source?.ContractStartDate,
    edmOperator: source?.EdmOperator,
    faxNumber: source?.FaxNumber,
    signatoryAuthorityDocument: source?.SignatoryAuthorityDocument,
    signatoryName: source?.SignatoryName,
    signatoryPatronimic: source?.SignatoryPatronimic,
    signatoryPosition: source?.SignatoryPosition,
    signatorySurname: source?.SignatorySurname,
  };
}
