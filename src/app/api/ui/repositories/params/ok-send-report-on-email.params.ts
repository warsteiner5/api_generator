import { OkSendReportOnEmail$Params } from '../../../swagger/fn/ok/ok-send-report-on-email';
import { SendReportOnEmailRequestAlt } from '../../models/send-report-on-email-request-alt.interface';
import { apiSendReportOnEmailRequestAltDtoAdapter } from '../../adapters/models/api-send-report-on-email-request.adapter';

// @ts-ignore
export interface OkSendReportOnEmailParams {
  body?: SendReportOnEmailRequestAlt;
}

export function okSendReportOnEmailAdapter(params?: OkSendReportOnEmailParams): OkSendReportOnEmail$Params {
  if (!params) {
    return {} as OkSendReportOnEmail$Params;
  }
  return {
      body: apiSendReportOnEmailRequestAltDtoAdapter(params.body),
  };
}
