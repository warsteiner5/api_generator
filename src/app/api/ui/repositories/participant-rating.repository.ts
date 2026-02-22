import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantRatingApiService } from '../../swagger/services/participant-rating-api.service';
import { ParticipantRatingCanLeaveRatingFeedbackParams, participantRatingCanLeaveRatingFeedbackAdapter } from './params/participant-rating-can-leave-rating-feedback.params';
import { ParticipantRatingDeleteCustomerFeedbackForParticipantParams, participantRatingDeleteCustomerFeedbackForParticipantAdapter } from './params/participant-rating-delete-customer-feedback-for-participant.params';
import { ParticipantRatingDetails } from '../models/participant-rating-details.interface';
import { participantRatingDetailsAdapter } from '../adapters/models/participant-rating-details.adapter';
import { ParticipantRatingDetailsToLeaveFeedback } from '../models/participant-rating-details-to-leave-feedback.interface';
import { participantRatingDetailsToLeaveFeedbackAdapter } from '../adapters/models/participant-rating-details-to-leave-feedback.adapter';
import { ParticipantRatingExportFeedbackToExcelByFilterParams, participantRatingExportFeedbackToExcelByFilterAdapter } from './params/participant-rating-export-feedback-to-excel-by-filter.params';
import { ParticipantRatingExportFeedbackToExcelParams, participantRatingExportFeedbackToExcelAdapter } from './params/participant-rating-export-feedback-to-excel.params';
import { ParticipantRatingGetParticipantRatingDetailsParams, participantRatingGetParticipantRatingDetailsAdapter } from './params/participant-rating-get-participant-rating-details.params';
import { ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams, participantRatingGetParticipantRatingDetailsToLeaveFeedbackAdapter } from './params/participant-rating-get-participant-rating-details-to-leave-feedback.params';
import { ParticipantRatingGetParticipantsRatingParams, participantRatingGetParticipantsRatingAdapter } from './params/participant-rating-get-participants-rating.params';
import { ParticipantRatingHideCustomerFeedbackForParticipantParams, participantRatingHideCustomerFeedbackForParticipantAdapter } from './params/participant-rating-hide-customer-feedback-for-participant.params';
import { ParticipantRatingSaveCustomerFeedbackForParticipantParams, participantRatingSaveCustomerFeedbackForParticipantAdapter } from './params/participant-rating-save-customer-feedback-for-participant.params';
import { ParticipantRatingShowCustomerFeedbackForParticipantParams, participantRatingShowCustomerFeedbackForParticipantAdapter } from './params/participant-rating-show-customer-feedback-for-participant.params';
import { SearchResultOfParticipantFeedbackRatingInfo } from '../models/search-result-of-participant-feedback-rating-info.interface';
import { searchResultOfParticipantFeedbackRatingInfoAdapter } from '../adapters/models/search-result-of-participant-feedback-rating-info.adapter';

@Injectable({ providedIn: 'root' })
export class ParticipantRatingRepository {
  private readonly _api = inject(ParticipantRatingApiService);

  participantRatingCanLeaveRatingFeedback(params?: ParticipantRatingCanLeaveRatingFeedbackParams): Observable<boolean> {
    return this._api.participantRatingCanLeaveRatingFeedback(participantRatingCanLeaveRatingFeedbackAdapter(params));
  }

  participantRatingDeleteCustomerFeedbackForParticipant(params?: ParticipantRatingDeleteCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingDeleteCustomerFeedbackForParticipant(participantRatingDeleteCustomerFeedbackForParticipantAdapter(params));
  }

  participantRatingExportFeedbackToExcel(params?: ParticipantRatingExportFeedbackToExcelParams): Observable<Blob> {
    return this._api.participantRatingExportFeedbackToExcel(participantRatingExportFeedbackToExcelAdapter(params));
  }

  participantRatingExportFeedbackToExcelByFilter(params?: ParticipantRatingExportFeedbackToExcelByFilterParams): Observable<Blob> {
    return this._api.participantRatingExportFeedbackToExcelByFilter(participantRatingExportFeedbackToExcelByFilterAdapter(params));
  }

  participantRatingGetParticipantRatingDetails(params: ParticipantRatingGetParticipantRatingDetailsParams): Observable<ParticipantRatingDetails> {
    return this._api.participantRatingGetParticipantRatingDetails(participantRatingGetParticipantRatingDetailsAdapter(params)).pipe(
      map((res) => participantRatingDetailsAdapter(res))
    );
  }

  participantRatingGetParticipantRatingDetailsToLeaveFeedback(params: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams): Observable<ParticipantRatingDetailsToLeaveFeedback> {
    return this._api.participantRatingGetParticipantRatingDetailsToLeaveFeedback(participantRatingGetParticipantRatingDetailsToLeaveFeedbackAdapter(params)).pipe(
      map((res) => participantRatingDetailsToLeaveFeedbackAdapter(res))
    );
  }

  participantRatingGetParticipantsRating(params?: ParticipantRatingGetParticipantsRatingParams): Observable<SearchResultOfParticipantFeedbackRatingInfo> {
    return this._api.participantRatingGetParticipantsRating(participantRatingGetParticipantsRatingAdapter(params)).pipe(
      map((res) => searchResultOfParticipantFeedbackRatingInfoAdapter(res))
    );
  }

  participantRatingHideCustomerFeedbackForParticipant(params?: ParticipantRatingHideCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingHideCustomerFeedbackForParticipant(participantRatingHideCustomerFeedbackForParticipantAdapter(params));
  }

  participantRatingSaveCustomerFeedbackForParticipant(params?: ParticipantRatingSaveCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingSaveCustomerFeedbackForParticipant(participantRatingSaveCustomerFeedbackForParticipantAdapter(params));
  }

  participantRatingShowCustomerFeedbackForParticipant(params?: ParticipantRatingShowCustomerFeedbackForParticipantParams): Observable<Blob> {
    return this._api.participantRatingShowCustomerFeedbackForParticipant(participantRatingShowCustomerFeedbackForParticipantAdapter(params));
  }

}
