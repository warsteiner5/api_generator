import { Feedback } from '../../models/feedback.interface';
import { FeedbackAddFeedback$Params } from '../../../swagger/fn/feedback/feedback-add-feedback';
import { apiFeedbackDtoAdapter } from '../../adapters/models/api-feedback-dto.adapter';

// @ts-ignore
export interface FeedbackAddFeedbackParams {
  body?: Feedback;
}

export function feedbackAddFeedbackAdapter(params?: FeedbackAddFeedbackParams): FeedbackAddFeedback$Params {
  if (!params) {
    return {} as FeedbackAddFeedback$Params;
  }
  return {
      body: apiFeedbackDtoAdapter(params.body),
  };
}
