import { DocumentTypeEnum } from '../../enums/document-type.enum';
import { ApiDocumentTypeEnum } from '../../../swagger/models/api-document-type-enum';

export function adaptApiDocumentTypeEnum(source?: DocumentTypeEnum | null): ApiDocumentTypeEnum {
  switch (source) {
    case DocumentTypeEnum.Deal:
      return ApiDocumentTypeEnum.Deal;
    case DocumentTypeEnum.Other:
      return ApiDocumentTypeEnum.Other;
    case DocumentTypeEnum.DifferenceProtocol:
      return ApiDocumentTypeEnum.DifferenceProtocol;
    case DocumentTypeEnum.DealProvision:
      return ApiDocumentTypeEnum.DealProvision;
    case DocumentTypeEnum.ContractPriceExplain:
      return ApiDocumentTypeEnum.ContractPriceExplain;
    case DocumentTypeEnum.HonestSupplierConfirmation:
      return ApiDocumentTypeEnum.HonestSupplierConfirmation;
    case DocumentTypeEnum.CustomerRejectProtocol:
      return ApiDocumentTypeEnum.CustomerRejectProtocol;
    default:
      throw new Error(`Enum value is not defined: DocumentTypeEnum=${String(source)}`);
  }
}
