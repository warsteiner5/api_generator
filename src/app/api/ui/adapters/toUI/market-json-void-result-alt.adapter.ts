import { ApiMarketJsonVoidResultAltDto } from '../../../swagger/models/api-market-json-void-result';
import { MarketJsonVoidResultAlt } from '../../models/market-json-void-result-alt.interface';
import { adaptHttpStatusCodeAltEnumToUI } from './http-status-code-alt-enum.adapter';

export function adaptMarketJsonVoidResultAltToUI(source?: ApiMarketJsonVoidResultAltDto | null): MarketJsonVoidResultAlt {
  return {
    code: adaptHttpStatusCodeAltEnumToUI(source?.code),
    message: source?.message ?? '',
    redirectToUrl: source?.redirectToUrl ?? '',
    templates: (source?.templates ?? null) as any,
  };
}
