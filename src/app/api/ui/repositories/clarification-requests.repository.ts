import { ClarificationParticipant } from '../models/clarification-participant.interface';
import { clarificationParticipantAdapter } from '../adapters/models/clarification-participant.adapter';
import { ClarificationRequests } from '../models/clarification-requests.interface';
import { clarificationRequestsAdapter } from '../adapters/models/clarification-requests.adapter';
import { ClarificationRequestsApiService } from '../../swagger/services/clarification-requests-api.service';
import { ClarificationRequestsCreateRequestParams, clarificationRequestsCreateRequestAdapter } from './params/clarification-requests-create-request.params';
import { ClarificationRequestsCreateResponseParams, clarificationRequestsCreateResponseAdapter } from './params/clarification-requests-create-response.params';
import { ClarificationRequestsGetClarificationRequestsParams, clarificationRequestsGetClarificationRequestsAdapter } from './params/clarification-requests-get-clarification-requests.params';
import { ClarificationRequestsGetTradeParticipantListParams, clarificationRequestsGetTradeParticipantListAdapter } from './params/clarification-requests-get-trade-participant-list.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClarificationRequestsRepository {
  private readonly _api = inject(ClarificationRequestsApiService);

  clarificationRequestsCreateRequest(params: ClarificationRequestsCreateRequestParams): Observable<void> {
    return this._api.clarificationRequestsCreateRequest(clarificationRequestsCreateRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  clarificationRequestsCreateResponse(params: ClarificationRequestsCreateResponseParams): Observable<void> {
    return this._api.clarificationRequestsCreateResponse(clarificationRequestsCreateResponseAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  clarificationRequestsGetClarificationRequests(params: ClarificationRequestsGetClarificationRequestsParams): Observable<ClarificationRequests> {
    return this._api.clarificationRequestsGetClarificationRequests(clarificationRequestsGetClarificationRequestsAdapter(params)).pipe(
      map((res) => clarificationRequestsAdapter(res?.data))
    );
  }

  clarificationRequestsGetTradeParticipantList(params: ClarificationRequestsGetTradeParticipantListParams): Observable<ClarificationParticipant[]> {
    return this._api.clarificationRequestsGetTradeParticipantList(clarificationRequestsGetTradeParticipantListAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => clarificationParticipantAdapter(item)))
    );
  }

}
