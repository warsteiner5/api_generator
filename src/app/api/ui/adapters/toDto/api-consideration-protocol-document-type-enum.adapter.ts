import { ConsiderationProtocolDocumentTypeEnum } from '../../enums/consideration-protocol-document-type.enum';
import { ApiConsiderationProtocolDocumentTypeEnum } from '../../../swagger/models/api-consideration-protocol-document-type-enum';

export function adaptApiConsiderationProtocolDocumentTypeEnum(source?: ConsiderationProtocolDocumentTypeEnum | null): ApiConsiderationProtocolDocumentTypeEnum {
  switch (source) {
    case ConsiderationProtocolDocumentTypeEnum.Protocol:
      return ApiConsiderationProtocolDocumentTypeEnum.Protocol;
    case ConsiderationProtocolDocumentTypeEnum.ProtocolCopy:
      return ApiConsiderationProtocolDocumentTypeEnum.ProtocolCopy;
    case ConsiderationProtocolDocumentTypeEnum.Other:
      return ApiConsiderationProtocolDocumentTypeEnum.Other;
    case ConsiderationProtocolDocumentTypeEnum.PrintForm:
      return ApiConsiderationProtocolDocumentTypeEnum.PrintForm;
    case ConsiderationProtocolDocumentTypeEnum.ProtocolRecordPrintForm:
      return ApiConsiderationProtocolDocumentTypeEnum.ProtocolRecordPrintForm;
    case ConsiderationProtocolDocumentTypeEnum.ProtocolRecord:
      return ApiConsiderationProtocolDocumentTypeEnum.ProtocolRecord;
    case ConsiderationProtocolDocumentTypeEnum.ApplicationSummary:
      return ApiConsiderationProtocolDocumentTypeEnum.ApplicationSummary;
    case ConsiderationProtocolDocumentTypeEnum.AutoProtocol:
      return ApiConsiderationProtocolDocumentTypeEnum.AutoProtocol;
    default:
      throw new Error(`Enum value is not defined: ConsiderationProtocolDocumentTypeEnum=${String(source)}`);
  }
}
