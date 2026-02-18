import { TradeDtoWithSignatureAlt } from '../../models/trade-dto-with-signature-alt.interface';
import { ApiTradeDtoWithSignatureAltDto } from '../../../swagger/models/api-trade-dto-with-signature';

export function adaptApiTradeDtoWithSignatureAltDto(source?: TradeDtoWithSignatureAlt | null): ApiTradeDtoWithSignatureAltDto {
  return (source ?? {}) as ApiTradeDtoWithSignatureAltDto;
}
