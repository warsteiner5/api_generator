import { Feedback } from '../../models/feedback.interface';
import { FeedbackAddFeedback$Params } from '../../../swagger/fn/feedback/feedback-add-feedback';
import { adaptApiFeedbackDto } from '../../adapters/toDto/api-feedback-dto.adapter';

export interface FeedbackAddFeedbackParams {
  body?: Feedback;
}

export const feedbackAddFeedbackParamsAdapter = {
  adapt(params?: FeedbackAddFeedbackParams): FeedbackAddFeedback$Params {
    if (!params) {
      return {} as FeedbackAddFeedback$Params;
    }
    return {
      body: adaptApiFeedbackDto(params.body),
    };
  }
};
