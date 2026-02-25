import { ApiDocumentDto3 } from '../../../swagger/models/api-document-dto-3';
import { DocumentDto3 } from '../../models/document-dto-3.interface';
import { entityDtoBaseAdapter } from './entity-dto-base.adapter';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const documentDto3Adapter = (source?: ApiDocumentDto3 | null): DocumentDto3 => {
  return {
    ...entityDtoBaseAdapter(source as unknown as Parameters<typeof entityDtoBaseAdapter>[0]),
    isaccreditationstring: source?._isAccreditationString,
    name: source?.Name,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    userFio: source?.UserFio,
    tag: source?.Tag,
    tradeDocumentType: source?.TradeDocumentType === null ? undefined : tradeDocumentTypeEnumAdapter(source?.TradeDocumentType),
    type: source?.Type,
    isAccreditationString: source?.isAccreditationString,
    documentContent: source?.DocumentContent,
    changeDate: source?.ChangeDate,
    soapHash: source?.SoapHash,
    base64Hash: source?.Base64Hash,
    signature: source?.Signature,
    uploadDate: source?.UploadDate,
    size: source?.Size,
    fromLastRevision: source?.FromLastRevision,
  };
}
