import { TradesValidateWorkgroupForSigner$Params } from '../../../swagger/fn/trades/trades-validate-workgroup-for-signer';

// @ts-ignore
export interface TradesValidateWorkgroupForSignerParams {
  body?: number[];
}

export function tradesValidateWorkgroupForSignerAdapter(params?: TradesValidateWorkgroupForSignerParams): TradesValidateWorkgroupForSigner$Params {
  if (!params) {
    return {} as TradesValidateWorkgroupForSigner$Params;
  }
  return {
      body: params.body,
  };
}
