import { ApiDocumentTypeEnum } from '../../../swagger/models/api-document-type-enum';
import { DocumentTypeEnum } from '../../enums/document-type.enum';

export function adaptDocumentTypeEnumToUI(source?: ApiDocumentTypeEnum | null): DocumentTypeEnum {
  switch (source) {
    case ApiDocumentTypeEnum.Deal:
      return DocumentTypeEnum.Deal;
    case ApiDocumentTypeEnum.Other:
      return DocumentTypeEnum.Other;
    case ApiDocumentTypeEnum.DifferenceProtocol:
      return DocumentTypeEnum.DifferenceProtocol;
    case ApiDocumentTypeEnum.DealProvision:
      return DocumentTypeEnum.DealProvision;
    case ApiDocumentTypeEnum.ContractPriceExplain:
      return DocumentTypeEnum.ContractPriceExplain;
    case ApiDocumentTypeEnum.HonestSupplierConfirmation:
      return DocumentTypeEnum.HonestSupplierConfirmation;
    case ApiDocumentTypeEnum.CustomerRejectProtocol:
      return DocumentTypeEnum.CustomerRejectProtocol;
    default:
      throw new Error(`Enum value is not defined: ApiDocumentTypeEnum=${String(source)}`);
  }
}
