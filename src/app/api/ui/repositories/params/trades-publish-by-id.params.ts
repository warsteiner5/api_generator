import { DigitalSignature } from '../../models/digital-signature.interface';
import { TradesPublishById$Params } from '../../../swagger/fn/trades/trades-publish-by-id';
import { adaptApiDigitalSignatureDto } from '../../adapters/toDto/api-digital-signature-dto.adapter';

export interface TradesPublishByIdParams {
  id: number;
  body?: DigitalSignature;
}

export const tradesPublishByIdParamsAdapter = {
  adapt(params?: TradesPublishByIdParams): TradesPublishById$Params {
    if (!params) {
      return {} as TradesPublishById$Params;
    }
    return {
      id: params.id,
      body: adaptApiDigitalSignatureDto(params.body),
    };
  }
};
