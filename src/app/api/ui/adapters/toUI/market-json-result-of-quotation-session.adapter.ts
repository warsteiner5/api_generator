import { ApiMarketJsonResultOfQuotationSession } from '../../../swagger/models/api-market-json-result-of-quotation-session';
import { MarketJsonResultOfQuotationSession } from '../../models/market-json-result-of-quotation-session.interface';

export function adaptMarketJsonResultOfQuotationSessionToUI(source?: ApiMarketJsonResultOfQuotationSession | null): MarketJsonResultOfQuotationSession {
  return (source ?? {}) as MarketJsonResultOfQuotationSession;
}
