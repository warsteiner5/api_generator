import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-view-dto';
import { MarketJsonResultOfQuotationSessionView } from '../../models/market-json-result-of-quotation-session-view.interface';

export function adaptMarketJsonResultOfQuotationSessionViewToUI(source?: ApiMarketJsonResultOfQuotationSessionViewDto | null): MarketJsonResultOfQuotationSessionView {
  return (source ?? {}) as MarketJsonResultOfQuotationSessionView;
}
