import { AccountGetExternalLogin$Params } from '../../../swagger/fn/account/account-get-external-login';

// @ts-ignore
export interface AccountGetExternalLoginParams {
  provider: string;
  error?: string;
  organizationId?: string;
}

export function accountGetExternalLoginAdapter(params?: AccountGetExternalLoginParams): AccountGetExternalLogin$Params {
  if (!params) {
    return {} as AccountGetExternalLogin$Params;
  }
  return {
      provider: params.provider,
      error: params.error,
      organizationId: params.organizationId,
  };
}
