import { OkSendReportOnEmail$Params } from '../../../swagger/fn/ok/ok-send-report-on-email';
import { SendReportOnEmailRequestAlt } from '../../models/send-report-on-email-request-alt.interface';
import { adaptApiSendReportOnEmailRequestAltDto } from '../../adapters/toDto/api-send-report-on-email-request.adapter';

export interface OkSendReportOnEmailParams {
  body?: SendReportOnEmailRequestAlt;
}

export const okSendReportOnEmailParamsAdapter = {
  adapt(params?: OkSendReportOnEmailParams): OkSendReportOnEmail$Params {
    if (!params) {
      return {} as OkSendReportOnEmail$Params;
    }
    return {
      body: adaptApiSendReportOnEmailRequestAltDto(params.body),
    };
  }
};
