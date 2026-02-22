import { AccreditationCreateAccreditationBlankGet$Params } from '../../../swagger/fn/accreditation/accreditation-create-accreditation-blank-get';

// @ts-ignore
export interface AccreditationCreateAccreditationBlankGetParams {
  accountNumber: string;
}

export function accreditationCreateAccreditationBlankGetAdapter(params?: AccreditationCreateAccreditationBlankGetParams): AccreditationCreateAccreditationBlankGet$Params {
  if (!params) {
    return {} as AccreditationCreateAccreditationBlankGet$Params;
  }
  return {
      accountNumber: params.accountNumber,
  };
}
