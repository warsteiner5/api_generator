import { TradeLotApplicationDocumentTypeEnum } from '../../enums/trade-lot-application-document-type.enum';
import { ApiTradeLotApplicationDocumentTypeEnum } from '../../../swagger/models/api-trade-lot-application-document-type-enum';

export function adaptApiTradeLotApplicationDocumentTypeEnum(source?: TradeLotApplicationDocumentTypeEnum | null): ApiTradeLotApplicationDocumentTypeEnum {
  switch (source) {
    case TradeLotApplicationDocumentTypeEnum.Trademark:
      return ApiTradeLotApplicationDocumentTypeEnum.Trademark;
    case TradeLotApplicationDocumentTypeEnum.Requirements:
      return ApiTradeLotApplicationDocumentTypeEnum.Requirements;
    case TradeLotApplicationDocumentTypeEnum.MaxPermittedAmount:
      return ApiTradeLotApplicationDocumentTypeEnum.MaxPermittedAmount;
    case TradeLotApplicationDocumentTypeEnum.OtherDocuments:
      return ApiTradeLotApplicationDocumentTypeEnum.OtherDocuments;
    case TradeLotApplicationDocumentTypeEnum.Preferences:
      return ApiTradeLotApplicationDocumentTypeEnum.Preferences;
    case TradeLotApplicationDocumentTypeEnum.MatchUnifiedRequirements:
      return ApiTradeLotApplicationDocumentTypeEnum.MatchUnifiedRequirements;
    case TradeLotApplicationDocumentTypeEnum.MatchCustomerRequirements44:
      return ApiTradeLotApplicationDocumentTypeEnum.MatchCustomerRequirements44;
    case TradeLotApplicationDocumentTypeEnum.BankGurantee:
      return ApiTradeLotApplicationDocumentTypeEnum.BankGurantee;
    case TradeLotApplicationDocumentTypeEnum.TradeConditionsAgreement:
      return ApiTradeLotApplicationDocumentTypeEnum.TradeConditionsAgreement;
    case TradeLotApplicationDocumentTypeEnum.OtherDocuments615:
      return ApiTradeLotApplicationDocumentTypeEnum.OtherDocuments615;
    case TradeLotApplicationDocumentTypeEnum.QualificationRequirementsDocuments:
      return ApiTradeLotApplicationDocumentTypeEnum.QualificationRequirementsDocuments;
    case TradeLotApplicationDocumentTypeEnum.FinalProposalDocuments:
      return ApiTradeLotApplicationDocumentTypeEnum.FinalProposalDocuments;
    case TradeLotApplicationDocumentTypeEnum.QuotationInfo:
      return ApiTradeLotApplicationDocumentTypeEnum.QuotationInfo;
    case TradeLotApplicationDocumentTypeEnum.OpenPart:
      return ApiTradeLotApplicationDocumentTypeEnum.OpenPart;
    case TradeLotApplicationDocumentTypeEnum.ClosePart:
      return ApiTradeLotApplicationDocumentTypeEnum.ClosePart;
    case TradeLotApplicationDocumentTypeEnum.Archive:
      return ApiTradeLotApplicationDocumentTypeEnum.Archive;
    case TradeLotApplicationDocumentTypeEnum.DraftAgreement:
      return ApiTradeLotApplicationDocumentTypeEnum.DraftAgreement;
    case TradeLotApplicationDocumentTypeEnum.TechnicalTask:
      return ApiTradeLotApplicationDocumentTypeEnum.TechnicalTask;
    case TradeLotApplicationDocumentTypeEnum.SpecTRU:
      return ApiTradeLotApplicationDocumentTypeEnum.SpecTRU;
    case TradeLotApplicationDocumentTypeEnum.PrivateDocument:
      return ApiTradeLotApplicationDocumentTypeEnum.PrivateDocument;
    default:
      throw new Error(`Enum value is not defined: TradeLotApplicationDocumentTypeEnum=${String(source)}`);
  }
}
