import { adaptClarificationParticipantToUI } from '../adapters/toUI/clarification-participant.adapter';
import { adaptClarificationRequestsToUI } from '../adapters/toUI/clarification-requests.adapter';
import { ClarificationParticipant } from '../models/clarification-participant.interface';
import { ClarificationRequests } from '../models/clarification-requests.interface';
import { ClarificationRequestsApiService } from '../../swagger/services/clarification-requests-api.service';
import { ClarificationRequestsCreateRequestParams, clarificationRequestsCreateRequestParamsAdapter } from './params/clarification-requests-create-request.params';
import { ClarificationRequestsCreateResponseParams, clarificationRequestsCreateResponseParamsAdapter } from './params/clarification-requests-create-response.params';
import { ClarificationRequestsGetClarificationRequestsParams, clarificationRequestsGetClarificationRequestsParamsAdapter } from './params/clarification-requests-get-clarification-requests.params';
import { ClarificationRequestsGetTradeParticipantListParams, clarificationRequestsGetTradeParticipantListParamsAdapter } from './params/clarification-requests-get-trade-participant-list.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClarificationRequestsRepository {
  private readonly _api = inject(ClarificationRequestsApiService);

  clarificationRequestsCreateRequest(params: ClarificationRequestsCreateRequestParams): Observable<void> {
    return this._api.clarificationRequestsCreateRequest(clarificationRequestsCreateRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  clarificationRequestsCreateResponse(params: ClarificationRequestsCreateResponseParams): Observable<void> {
    return this._api.clarificationRequestsCreateResponse(clarificationRequestsCreateResponseParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  clarificationRequestsGetClarificationRequests(params: ClarificationRequestsGetClarificationRequestsParams): Observable<ClarificationRequests> {
    return this._api.clarificationRequestsGetClarificationRequests(clarificationRequestsGetClarificationRequestsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptClarificationRequestsToUI(res?.data))
    );
  }

  clarificationRequestsGetTradeParticipantList(params: ClarificationRequestsGetTradeParticipantListParams): Observable<ClarificationParticipant[]> {
    return this._api.clarificationRequestsGetTradeParticipantList(clarificationRequestsGetTradeParticipantListParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptClarificationParticipantToUI(item)))
    );
  }

}
