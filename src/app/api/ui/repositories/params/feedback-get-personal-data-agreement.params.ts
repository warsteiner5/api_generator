import { FeedbackGetPersonalDataAgreement$Params } from '../../../swagger/fn/feedback/feedback-get-personal-data-agreement';

export interface FeedbackGetPersonalDataAgreementParams {
}

export const feedbackGetPersonalDataAgreementParamsAdapter = {
  adapt(params?: FeedbackGetPersonalDataAgreementParams): FeedbackGetPersonalDataAgreement$Params {
    if (!params) {
      return {} as FeedbackGetPersonalDataAgreement$Params;
    }
    return {
    };
  }
};
