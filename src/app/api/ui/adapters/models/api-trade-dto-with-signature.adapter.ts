import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { ApiTradeDtoWithSignature } from '../../../swagger/models/api-trade-dto-with-signature';
import { apiFileSignDtoAdapter } from './api-file-sign-dto.adapter';
import { apiTradeDto2Adapter } from './api-trade-dto-2.adapter';

export const apiTradeDtoWithSignatureAdapter = (source?: TradeDtoWithSignature | null): ApiTradeDtoWithSignature => {
  return {
    ...apiTradeDto2Adapter(source as unknown as Parameters<typeof apiTradeDto2Adapter>[0]),
    FileSigns: source?.fileSigns?.map((item) => apiFileSignDtoAdapter(item)),
  };
}
