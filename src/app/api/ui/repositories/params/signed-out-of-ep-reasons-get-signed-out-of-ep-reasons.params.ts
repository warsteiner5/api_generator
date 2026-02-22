import { SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params } from '../../../swagger/fn/signed-out-of-ep-reasons/signed-out-of-ep-reasons-get-signed-out-of-ep-reasons';

// @ts-ignore
export interface SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams {
  tenantId: number;
}

export function signedOutOfEpReasonsGetSignedOutOfEpReasonsAdapter(params?: SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams): SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params {
  if (!params) {
    return {} as SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
