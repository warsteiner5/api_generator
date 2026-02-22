import { ApiTradeDocumentTypeEnum } from '../../../swagger/models/api-trade-document-type-enum';
import { TradeDocumentTypeEnum } from '../../enums/trade-document-type.enum';

export const tradeDocumentTypeEnumAdapter = (source?: ApiTradeDocumentTypeEnum | null): TradeDocumentTypeEnum => {
  switch (source) {
    case ApiTradeDocumentTypeEnum.Undefined:
      return TradeDocumentTypeEnum.Undefined;
    case ApiTradeDocumentTypeEnum.DraftAgreement:
      return TradeDocumentTypeEnum.DraftAgreement;
    case ApiTradeDocumentTypeEnum.TechnicalTask:
      return TradeDocumentTypeEnum.TechnicalTask;
    case ApiTradeDocumentTypeEnum.SpecTRU:
      return TradeDocumentTypeEnum.SpecTRU;
    case ApiTradeDocumentTypeEnum.OtherDocuments:
      return TradeDocumentTypeEnum.OtherDocuments;
    case ApiTradeDocumentTypeEnum.MonopolistExtInfo:
      return TradeDocumentTypeEnum.MonopolistExtInfo;
    default:
      throw new Error(`Enum value is not defined: ApiTradeDocumentTypeEnum=${String(source)}`);
  }
}
