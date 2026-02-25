import { DocumentDto3 } from '../../models/document-dto-3.interface';
import { ApiDocumentDto3 } from '../../../swagger/models/api-document-dto-3';
import { apiEntityDtoBaseAdapter } from './api-entity-dto-base.adapter';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiDocumentDto3Adapter = (source?: DocumentDto3 | null): ApiDocumentDto3 => {
  return {
    ...apiEntityDtoBaseAdapter(source as unknown as Parameters<typeof apiEntityDtoBaseAdapter>[0]),
    _isAccreditationString: source?.isaccreditationstring,
    Name: source?.name,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    UserFio: source?.userFio,
    Tag: source?.tag,
    TradeDocumentType: source?.tradeDocumentType === null ? undefined : apiTradeDocumentTypeEnumAdapter(source?.tradeDocumentType),
    Type: source?.type,
    isAccreditationString: source?.isAccreditationString,
    DocumentContent: source?.documentContent,
    ChangeDate: source?.changeDate,
    SoapHash: source?.soapHash,
    Base64Hash: source?.base64Hash,
    Signature: source?.signature,
    UploadDate: source?.uploadDate,
    Size: source?.size,
    FromLastRevision: source?.fromLastRevision,
  };
}
