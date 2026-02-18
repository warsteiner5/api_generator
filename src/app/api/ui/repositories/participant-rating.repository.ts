import { adaptParticipantRatingDetailsToLeaveFeedbackToUI } from '../adapters/toUI/participant-rating-details-to-leave-feedback.adapter';
import { adaptParticipantRatingDetailsToUI } from '../adapters/toUI/participant-rating-details.adapter';
import { adaptSearchResultOfParticipantFeedbackRatingInfoToUI } from '../adapters/toUI/search-result-of-participant-feedback-rating-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantRatingApiService } from '../../swagger/services/participant-rating-api.service';
import { ParticipantRatingCanLeaveRatingFeedbackParams, participantRatingCanLeaveRatingFeedbackParamsAdapter } from './params/participant-rating-can-leave-rating-feedback.params';
import { ParticipantRatingDeleteCustomerFeedbackForParticipantParams, participantRatingDeleteCustomerFeedbackForParticipantParamsAdapter } from './params/participant-rating-delete-customer-feedback-for-participant.params';
import { ParticipantRatingDetails } from '../models/participant-rating-details.interface';
import { ParticipantRatingDetailsToLeaveFeedback } from '../models/participant-rating-details-to-leave-feedback.interface';
import { ParticipantRatingExportFeedbackToExcelByFilterParams, participantRatingExportFeedbackToExcelByFilterParamsAdapter } from './params/participant-rating-export-feedback-to-excel-by-filter.params';
import { ParticipantRatingExportFeedbackToExcelParams, participantRatingExportFeedbackToExcelParamsAdapter } from './params/participant-rating-export-feedback-to-excel.params';
import { ParticipantRatingGetParticipantRatingDetailsParams, participantRatingGetParticipantRatingDetailsParamsAdapter } from './params/participant-rating-get-participant-rating-details.params';
import { ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams, participantRatingGetParticipantRatingDetailsToLeaveFeedbackParamsAdapter } from './params/participant-rating-get-participant-rating-details-to-leave-feedback.params';
import { ParticipantRatingGetParticipantsRatingParams, participantRatingGetParticipantsRatingParamsAdapter } from './params/participant-rating-get-participants-rating.params';
import { ParticipantRatingHideCustomerFeedbackForParticipantParams, participantRatingHideCustomerFeedbackForParticipantParamsAdapter } from './params/participant-rating-hide-customer-feedback-for-participant.params';
import { ParticipantRatingSaveCustomerFeedbackForParticipantParams, participantRatingSaveCustomerFeedbackForParticipantParamsAdapter } from './params/participant-rating-save-customer-feedback-for-participant.params';
import { ParticipantRatingShowCustomerFeedbackForParticipantParams, participantRatingShowCustomerFeedbackForParticipantParamsAdapter } from './params/participant-rating-show-customer-feedback-for-participant.params';
import { SearchResultOfParticipantFeedbackRatingInfo } from '../models/search-result-of-participant-feedback-rating-info.interface';

@Injectable({ providedIn: 'root' })
export class ParticipantRatingRepository {
  private readonly _api = inject(ParticipantRatingApiService);

  participantRatingCanLeaveRatingFeedback(params?: ParticipantRatingCanLeaveRatingFeedbackParams): Observable<boolean> {
    return this._api.participantRatingCanLeaveRatingFeedback(participantRatingCanLeaveRatingFeedbackParamsAdapter.adapt(params));
  }

  participantRatingDeleteCustomerFeedbackForParticipant(params?: ParticipantRatingDeleteCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingDeleteCustomerFeedbackForParticipant(participantRatingDeleteCustomerFeedbackForParticipantParamsAdapter.adapt(params));
  }

  participantRatingExportFeedbackToExcel(params?: ParticipantRatingExportFeedbackToExcelParams): Observable<Blob> {
    return this._api.participantRatingExportFeedbackToExcel(participantRatingExportFeedbackToExcelParamsAdapter.adapt(params));
  }

  participantRatingExportFeedbackToExcelByFilter(params?: ParticipantRatingExportFeedbackToExcelByFilterParams): Observable<Blob> {
    return this._api.participantRatingExportFeedbackToExcelByFilter(participantRatingExportFeedbackToExcelByFilterParamsAdapter.adapt(params));
  }

  participantRatingGetParticipantRatingDetails(params: ParticipantRatingGetParticipantRatingDetailsParams): Observable<ParticipantRatingDetails> {
    return this._api.participantRatingGetParticipantRatingDetails(participantRatingGetParticipantRatingDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParticipantRatingDetailsToUI(res))
    );
  }

  participantRatingGetParticipantRatingDetailsToLeaveFeedback(params: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams): Observable<ParticipantRatingDetailsToLeaveFeedback> {
    return this._api.participantRatingGetParticipantRatingDetailsToLeaveFeedback(participantRatingGetParticipantRatingDetailsToLeaveFeedbackParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParticipantRatingDetailsToLeaveFeedbackToUI(res))
    );
  }

  participantRatingGetParticipantsRating(params?: ParticipantRatingGetParticipantsRatingParams): Observable<SearchResultOfParticipantFeedbackRatingInfo> {
    return this._api.participantRatingGetParticipantsRating(participantRatingGetParticipantsRatingParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSearchResultOfParticipantFeedbackRatingInfoToUI(res))
    );
  }

  participantRatingHideCustomerFeedbackForParticipant(params?: ParticipantRatingHideCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingHideCustomerFeedbackForParticipant(participantRatingHideCustomerFeedbackForParticipantParamsAdapter.adapt(params));
  }

  participantRatingSaveCustomerFeedbackForParticipant(params?: ParticipantRatingSaveCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingSaveCustomerFeedbackForParticipant(participantRatingSaveCustomerFeedbackForParticipantParamsAdapter.adapt(params));
  }

  participantRatingShowCustomerFeedbackForParticipant(params?: ParticipantRatingShowCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingShowCustomerFeedbackForParticipant(participantRatingShowCustomerFeedbackForParticipantParamsAdapter.adapt(params));
  }

}
