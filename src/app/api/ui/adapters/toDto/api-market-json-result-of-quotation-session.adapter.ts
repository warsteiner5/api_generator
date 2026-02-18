import { MarketJsonResultOfQuotationSession } from '../../models/market-json-result-of-quotation-session.interface';
import { ApiMarketJsonResultOfQuotationSession } from '../../../swagger/models/api-market-json-result-of-quotation-session';

export function adaptApiMarketJsonResultOfQuotationSession(source?: MarketJsonResultOfQuotationSession | null): ApiMarketJsonResultOfQuotationSession {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSession;
}
