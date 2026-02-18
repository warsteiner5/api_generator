import { ApiConsiderationProtocolDocumentTypeEnum } from '../../../swagger/models/api-consideration-protocol-document-type-enum';
import { ConsiderationProtocolDocumentTypeEnum } from '../../enums/consideration-protocol-document-type.enum';

export function adaptConsiderationProtocolDocumentTypeEnumToUI(source?: ApiConsiderationProtocolDocumentTypeEnum | null): ConsiderationProtocolDocumentTypeEnum {
  switch (source) {
    case ApiConsiderationProtocolDocumentTypeEnum.Protocol:
      return ConsiderationProtocolDocumentTypeEnum.Protocol;
    case ApiConsiderationProtocolDocumentTypeEnum.ProtocolCopy:
      return ConsiderationProtocolDocumentTypeEnum.ProtocolCopy;
    case ApiConsiderationProtocolDocumentTypeEnum.Other:
      return ConsiderationProtocolDocumentTypeEnum.Other;
    case ApiConsiderationProtocolDocumentTypeEnum.PrintForm:
      return ConsiderationProtocolDocumentTypeEnum.PrintForm;
    case ApiConsiderationProtocolDocumentTypeEnum.ProtocolRecordPrintForm:
      return ConsiderationProtocolDocumentTypeEnum.ProtocolRecordPrintForm;
    case ApiConsiderationProtocolDocumentTypeEnum.ProtocolRecord:
      return ConsiderationProtocolDocumentTypeEnum.ProtocolRecord;
    case ApiConsiderationProtocolDocumentTypeEnum.ApplicationSummary:
      return ConsiderationProtocolDocumentTypeEnum.ApplicationSummary;
    case ApiConsiderationProtocolDocumentTypeEnum.AutoProtocol:
      return ConsiderationProtocolDocumentTypeEnum.AutoProtocol;
    default:
      throw new Error(`Enum value is not defined: ApiConsiderationProtocolDocumentTypeEnum=${String(source)}`);
  }
}
