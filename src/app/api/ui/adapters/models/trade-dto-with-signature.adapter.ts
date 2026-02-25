import { ApiTradeDtoWithSignature } from '../../../swagger/models/api-trade-dto-with-signature';
import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { fileSignAdapter } from './file-sign.adapter';
import { tradeDto2Adapter } from './trade-dto-2.adapter';

export const tradeDtoWithSignatureAdapter = (source?: ApiTradeDtoWithSignature | null): TradeDtoWithSignature => {
  return {
    ...tradeDto2Adapter(source as unknown as Parameters<typeof tradeDto2Adapter>[0]),
    fileSigns: source?.FileSigns?.map((item) => fileSignAdapter(item)),
  };
}
