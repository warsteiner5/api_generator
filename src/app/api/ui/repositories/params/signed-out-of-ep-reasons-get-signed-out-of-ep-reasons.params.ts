import { SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params } from '../../../swagger/fn/signed-out-of-ep-reasons/signed-out-of-ep-reasons-get-signed-out-of-ep-reasons';

export interface SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams {
  tenantId: number;
}

export const signedOutOfEpReasonsGetSignedOutOfEpReasonsParamsAdapter = {
  adapt(params?: SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams): SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params {
    if (!params) {
      return {} as SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
