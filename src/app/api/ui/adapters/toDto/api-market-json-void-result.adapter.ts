import { MarketJsonVoidResultAlt } from '../../models/market-json-void-result-alt.interface';
import { ApiMarketJsonVoidResultAltDto } from '../../../swagger/models/api-market-json-void-result';
import { adaptApiHttpStatusCodeAltEnum } from './api-http-status-code.adapter';

export function adaptApiMarketJsonVoidResultAltDto(source?: MarketJsonVoidResultAlt | null): ApiMarketJsonVoidResultAltDto {
  return {
    code: adaptApiHttpStatusCodeAltEnum(source?.code),
    message: source?.message,
    redirectToUrl: source?.redirectToUrl,
    templates: source?.templates as any,
  };
}
