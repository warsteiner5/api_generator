import { PartnersSendRequest$Params } from '../../../swagger/fn/partners/partners-send-request';

// @ts-ignore
export interface PartnersSendRequestParams {
  guid: string;
}

export function partnersSendRequestAdapter(params?: PartnersSendRequestParams): PartnersSendRequest$Params {
  if (!params) {
    return {} as PartnersSendRequest$Params;
  }
  return {
      guid: params.guid,
  };
}
