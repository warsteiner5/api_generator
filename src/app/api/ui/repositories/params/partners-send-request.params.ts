import { PartnersSendRequest$Params } from '../../../swagger/fn/partners/partners-send-request';

export interface PartnersSendRequestParams {
  guid: string;
}

export const partnersSendRequestParamsAdapter = {
  adapt(params?: PartnersSendRequestParams): PartnersSendRequest$Params {
    if (!params) {
      return {} as PartnersSendRequest$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
