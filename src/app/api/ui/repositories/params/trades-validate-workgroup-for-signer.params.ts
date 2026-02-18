import { TradesValidateWorkgroupForSigner$Params } from '../../../swagger/fn/trades/trades-validate-workgroup-for-signer';

export interface TradesValidateWorkgroupForSignerParams {
  body?: number[];
}

export const tradesValidateWorkgroupForSignerParamsAdapter = {
  adapt(params?: TradesValidateWorkgroupForSignerParams): TradesValidateWorkgroupForSigner$Params {
    if (!params) {
      return {} as TradesValidateWorkgroupForSigner$Params;
    }
    return {
      body: params.body,
    };
  }
};
