import { ApiTradeDtoWithSignatureAltDto } from '../../../swagger/models/api-trade-dto-with-signature';
import { TradeDtoWithSignatureAlt } from '../../models/trade-dto-with-signature-alt.interface';

export function adaptTradeDtoWithSignatureAltToUI(source?: ApiTradeDtoWithSignatureAltDto | null): TradeDtoWithSignatureAlt {
  return (source ?? {}) as TradeDtoWithSignatureAlt;
}
