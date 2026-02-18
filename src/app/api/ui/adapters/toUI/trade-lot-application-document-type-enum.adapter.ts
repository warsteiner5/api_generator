import { ApiTradeLotApplicationDocumentTypeEnum } from '../../../swagger/models/api-trade-lot-application-document-type-enum';
import { TradeLotApplicationDocumentTypeEnum } from '../../enums/trade-lot-application-document-type.enum';

export function adaptTradeLotApplicationDocumentTypeEnumToUI(source?: ApiTradeLotApplicationDocumentTypeEnum | null): TradeLotApplicationDocumentTypeEnum {
  switch (source) {
    case ApiTradeLotApplicationDocumentTypeEnum.Trademark:
      return TradeLotApplicationDocumentTypeEnum.Trademark;
    case ApiTradeLotApplicationDocumentTypeEnum.Requirements:
      return TradeLotApplicationDocumentTypeEnum.Requirements;
    case ApiTradeLotApplicationDocumentTypeEnum.MaxPermittedAmount:
      return TradeLotApplicationDocumentTypeEnum.MaxPermittedAmount;
    case ApiTradeLotApplicationDocumentTypeEnum.OtherDocuments:
      return TradeLotApplicationDocumentTypeEnum.OtherDocuments;
    case ApiTradeLotApplicationDocumentTypeEnum.Preferences:
      return TradeLotApplicationDocumentTypeEnum.Preferences;
    case ApiTradeLotApplicationDocumentTypeEnum.MatchUnifiedRequirements:
      return TradeLotApplicationDocumentTypeEnum.MatchUnifiedRequirements;
    case ApiTradeLotApplicationDocumentTypeEnum.MatchCustomerRequirements44:
      return TradeLotApplicationDocumentTypeEnum.MatchCustomerRequirements44;
    case ApiTradeLotApplicationDocumentTypeEnum.BankGurantee:
      return TradeLotApplicationDocumentTypeEnum.BankGurantee;
    case ApiTradeLotApplicationDocumentTypeEnum.TradeConditionsAgreement:
      return TradeLotApplicationDocumentTypeEnum.TradeConditionsAgreement;
    case ApiTradeLotApplicationDocumentTypeEnum.OtherDocuments615:
      return TradeLotApplicationDocumentTypeEnum.OtherDocuments615;
    case ApiTradeLotApplicationDocumentTypeEnum.QualificationRequirementsDocuments:
      return TradeLotApplicationDocumentTypeEnum.QualificationRequirementsDocuments;
    case ApiTradeLotApplicationDocumentTypeEnum.FinalProposalDocuments:
      return TradeLotApplicationDocumentTypeEnum.FinalProposalDocuments;
    case ApiTradeLotApplicationDocumentTypeEnum.QuotationInfo:
      return TradeLotApplicationDocumentTypeEnum.QuotationInfo;
    case ApiTradeLotApplicationDocumentTypeEnum.OpenPart:
      return TradeLotApplicationDocumentTypeEnum.OpenPart;
    case ApiTradeLotApplicationDocumentTypeEnum.ClosePart:
      return TradeLotApplicationDocumentTypeEnum.ClosePart;
    case ApiTradeLotApplicationDocumentTypeEnum.Archive:
      return TradeLotApplicationDocumentTypeEnum.Archive;
    case ApiTradeLotApplicationDocumentTypeEnum.DraftAgreement:
      return TradeLotApplicationDocumentTypeEnum.DraftAgreement;
    case ApiTradeLotApplicationDocumentTypeEnum.TechnicalTask:
      return TradeLotApplicationDocumentTypeEnum.TechnicalTask;
    case ApiTradeLotApplicationDocumentTypeEnum.SpecTRU:
      return TradeLotApplicationDocumentTypeEnum.SpecTRU;
    case ApiTradeLotApplicationDocumentTypeEnum.PrivateDocument:
      return TradeLotApplicationDocumentTypeEnum.PrivateDocument;
    default:
      throw new Error(`Enum value is not defined: ApiTradeLotApplicationDocumentTypeEnum=${String(source)}`);
  }
}
