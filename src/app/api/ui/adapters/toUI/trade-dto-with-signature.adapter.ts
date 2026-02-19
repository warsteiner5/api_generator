import { ApiTradeDtoWithSignature } from '../../../swagger/models/api-trade-dto-with-signature';
import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';

export function adaptTradeDtoWithSignatureToUI(source?: ApiTradeDtoWithSignature | null): TradeDtoWithSignature {
  return (source ?? {}) as TradeDtoWithSignature;
}
