import { DigitalSignature } from '../../models/digital-signature.interface';
import { TradesPublishById$Params } from '../../../swagger/fn/trades/trades-publish-by-id';
import { apiDigitalSignatureDtoAdapter } from '../../adapters/models/api-digital-signature-dto.adapter';

// @ts-ignore
export interface TradesPublishByIdParams {
  id: number;
  body?: DigitalSignature;
}

export function tradesPublishByIdAdapter(params?: TradesPublishByIdParams): TradesPublishById$Params {
  if (!params) {
    return {} as TradesPublishById$Params;
  }
  return {
      id: params.id,
      body: apiDigitalSignatureDtoAdapter(params.body),
  };
}
