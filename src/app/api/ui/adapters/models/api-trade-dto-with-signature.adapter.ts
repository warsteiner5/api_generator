import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { ApiTradeDtoWithSignature } from '../../../swagger/models/api-trade-dto-with-signature';

export const apiTradeDtoWithSignatureAdapter = (source?: TradeDtoWithSignature | null): ApiTradeDtoWithSignature => {
  return (source ?? {}) as ApiTradeDtoWithSignature;
}
