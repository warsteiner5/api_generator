import { MarketJsonVoidResultAlt } from '../../models/market-json-void-result-alt.interface';
import { ApiMarketJsonVoidResultAltDto } from '../../../swagger/models/api-market-json-void-result';
import { apiHttpStatusCodeAltEnumAdapter } from '../enums/api-http-status-code.adapter';

export const apiMarketJsonVoidResultAltDtoAdapter = (source?: MarketJsonVoidResultAlt | null): ApiMarketJsonVoidResultAltDto => {
  return {
    code: source?.code === null ? undefined : apiHttpStatusCodeAltEnumAdapter(source?.code),
    message: source?.message,
    redirectToUrl: source?.redirectToUrl,
    templates: source?.templates as any,
  };
}
