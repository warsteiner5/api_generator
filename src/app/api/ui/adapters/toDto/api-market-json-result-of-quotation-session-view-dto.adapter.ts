import { MarketJsonResultOfQuotationSessionView } from '../../models/market-json-result-of-quotation-session-view.interface';
import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-view-dto';

export function adaptApiMarketJsonResultOfQuotationSessionViewDto(source?: MarketJsonResultOfQuotationSessionView | null): ApiMarketJsonResultOfQuotationSessionViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSessionViewDto;
}
