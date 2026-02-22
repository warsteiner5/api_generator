import { TradeDocumentTypeEnum } from '../../enums/trade-document-type.enum';
import { ApiTradeDocumentTypeEnum } from '../../../swagger/models/api-trade-document-type-enum';

export const apiTradeDocumentTypeEnumAdapter = (source?: TradeDocumentTypeEnum | null): ApiTradeDocumentTypeEnum => {
  switch (source) {
    case TradeDocumentTypeEnum.Undefined:
      return ApiTradeDocumentTypeEnum.Undefined;
    case TradeDocumentTypeEnum.DraftAgreement:
      return ApiTradeDocumentTypeEnum.DraftAgreement;
    case TradeDocumentTypeEnum.TechnicalTask:
      return ApiTradeDocumentTypeEnum.TechnicalTask;
    case TradeDocumentTypeEnum.SpecTRU:
      return ApiTradeDocumentTypeEnum.SpecTRU;
    case TradeDocumentTypeEnum.OtherDocuments:
      return ApiTradeDocumentTypeEnum.OtherDocuments;
    case TradeDocumentTypeEnum.MonopolistExtInfo:
      return ApiTradeDocumentTypeEnum.MonopolistExtInfo;
    default:
      throw new Error(`Enum value is not defined: TradeDocumentTypeEnum=${String(source)}`);
  }
}
