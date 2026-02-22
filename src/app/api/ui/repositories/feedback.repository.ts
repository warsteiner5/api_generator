import { FeedbackAddFeedbackParams, feedbackAddFeedbackAdapter } from './params/feedback-add-feedback.params';
import { FeedbackApiService } from '../../swagger/services/feedback-api.service';
import { FeedbackGetPersonalDataAgreementParams, feedbackGetPersonalDataAgreementAdapter } from './params/feedback-get-personal-data-agreement.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeedbackRepository {
  private readonly _api = inject(FeedbackApiService);

  feedbackAddFeedback(params?: FeedbackAddFeedbackParams): Observable<void> {
    return this._api.feedbackAddFeedback(feedbackAddFeedbackAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  feedbackGetPersonalDataAgreement(params?: FeedbackGetPersonalDataAgreementParams): Observable<string> {
    return this._api.feedbackGetPersonalDataAgreement(feedbackGetPersonalDataAgreementAdapter(params));
  }

}
