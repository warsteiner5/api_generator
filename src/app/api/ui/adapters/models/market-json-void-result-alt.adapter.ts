import { ApiMarketJsonVoidResultAltDto } from '../../../swagger/models/api-market-json-void-result';
import { MarketJsonVoidResultAlt } from '../../models/market-json-void-result-alt.interface';
import { httpStatusCodeAltEnumAdapter } from '../enums/http-status-code-alt-enum.adapter';

export const marketJsonVoidResultAltAdapter = (source?: ApiMarketJsonVoidResultAltDto | null): MarketJsonVoidResultAlt => {
  return {
    code: source?.code === null ? undefined : httpStatusCodeAltEnumAdapter(source?.code),
    message: source?.message,
    redirectToUrl: source?.redirectToUrl,
    templates: source?.templates as any,
  };
}
