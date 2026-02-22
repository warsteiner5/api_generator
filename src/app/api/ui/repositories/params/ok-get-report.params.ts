import { OkGetReport$Params } from '../../../swagger/fn/ok/ok-get-report';

// @ts-ignore
export interface OkGetReportParams {
  guid: string;
}

export function okGetReportAdapter(params?: OkGetReportParams): OkGetReport$Params {
  if (!params) {
    return {} as OkGetReport$Params;
  }
  return {
      guid: params.guid,
  };
}
