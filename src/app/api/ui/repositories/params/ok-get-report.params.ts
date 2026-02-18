import { OkGetReport$Params } from '../../../swagger/fn/ok/ok-get-report';

export interface OkGetReportParams {
  guid: string;
}

export const okGetReportParamsAdapter = {
  adapt(params?: OkGetReportParams): OkGetReport$Params {
    if (!params) {
      return {} as OkGetReport$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
