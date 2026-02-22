import { OkGetBriefList$Params } from '../../../swagger/fn/ok/ok-get-brief-list';

// @ts-ignore
export interface OkGetBriefListParams {
  body?: string[];
}

export function okGetBriefListAdapter(params?: OkGetBriefListParams): OkGetBriefList$Params {
  if (!params) {
    return {} as OkGetBriefList$Params;
  }
  return {
      body: params.body,
  };
}
