import { OkGetBriefList$Params } from '../../../swagger/fn/ok/ok-get-brief-list';

export interface OkGetBriefListParams {
  body?: string[];
}

export const okGetBriefListParamsAdapter = {
  adapt(params?: OkGetBriefListParams): OkGetBriefList$Params {
    if (!params) {
      return {} as OkGetBriefList$Params;
    }
    return {
      body: params.body,
    };
  }
};
