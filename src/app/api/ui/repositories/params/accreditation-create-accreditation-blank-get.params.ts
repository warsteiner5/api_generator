import { AccreditationCreateAccreditationBlankGet$Params } from '../../../swagger/fn/accreditation/accreditation-create-accreditation-blank-get';

export interface AccreditationCreateAccreditationBlankGetParams {
  accountNumber: string;
}

export const accreditationCreateAccreditationBlankGetParamsAdapter = {
  adapt(params?: AccreditationCreateAccreditationBlankGetParams): AccreditationCreateAccreditationBlankGet$Params {
    if (!params) {
      return {} as AccreditationCreateAccreditationBlankGet$Params;
    }
    return {
      accountNumber: params.accountNumber,
    };
  }
};
