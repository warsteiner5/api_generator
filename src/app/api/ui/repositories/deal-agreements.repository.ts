import { ApiResultOfIntegerAlt } from '../models/api-result-of-integer-alt.interface';
import { apiResultOfIntegerAltAdapter } from '../adapters/models/api-result-of-integer-alt.adapter';
import { DealAgreementHistory } from '../models/deal-agreement-history.interface';
import { dealAgreementHistoryAdapter } from '../adapters/models/deal-agreement-history.adapter';
import { DealAgreementsAddAgreementByCustomerParams, dealAgreementsAddAgreementByCustomerAdapter } from './params/deal-agreements-add-agreement-by-customer.params';
import { DealAgreementsAddAgreementByParticipantParams, dealAgreementsAddAgreementByParticipantAdapter } from './params/deal-agreements-add-agreement-by-participant.params';
import { DealAgreementsAddDealAgreementHistoryParams, dealAgreementsAddDealAgreementHistoryAdapter } from './params/deal-agreements-add-deal-agreement-history.params';
import { DealAgreementsApiService } from '../../swagger/services/deal-agreements-api.service';
import { DealAgreementsApproveAgreementByCustomerParams, dealAgreementsApproveAgreementByCustomerAdapter } from './params/deal-agreements-approve-agreement-by-customer.params';
import { DealAgreementsApproveAgreementByParticipantParams, dealAgreementsApproveAgreementByParticipantAdapter } from './params/deal-agreements-approve-agreement-by-participant.params';
import { DealAgreementsGetAgreementHistoryParams, dealAgreementsGetAgreementHistoryAdapter } from './params/deal-agreements-get-agreement-history.params';
import { DealAgreementsGetLastAgreementHistoryParams, dealAgreementsGetLastAgreementHistoryAdapter } from './params/deal-agreements-get-last-agreement-history.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealAgreementsRepository {
  private readonly _api = inject(DealAgreementsApiService);

  dealAgreementsAddAgreementByCustomer(params: DealAgreementsAddAgreementByCustomerParams): Observable<number> {
    return this._api.dealAgreementsAddAgreementByCustomer(dealAgreementsAddAgreementByCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealAgreementsAddAgreementByParticipant(params: DealAgreementsAddAgreementByParticipantParams): Observable<number> {
    return this._api.dealAgreementsAddAgreementByParticipant(dealAgreementsAddAgreementByParticipantAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealAgreementsAddDealAgreementHistory(params: DealAgreementsAddDealAgreementHistoryParams): Observable<ApiResultOfIntegerAlt> {
    return this._api.dealAgreementsAddDealAgreementHistory(dealAgreementsAddDealAgreementHistoryAdapter(params)).pipe(
      map((res) => apiResultOfIntegerAltAdapter(res))
    );
  }

  dealAgreementsApproveAgreementByCustomer(params: DealAgreementsApproveAgreementByCustomerParams): Observable<void> {
    return this._api.dealAgreementsApproveAgreementByCustomer(dealAgreementsApproveAgreementByCustomerAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealAgreementsApproveAgreementByParticipant(params: DealAgreementsApproveAgreementByParticipantParams): Observable<void> {
    return this._api.dealAgreementsApproveAgreementByParticipant(dealAgreementsApproveAgreementByParticipantAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealAgreementsGetAgreementHistory(params: DealAgreementsGetAgreementHistoryParams): Observable<DealAgreementHistory[]> {
    return this._api.dealAgreementsGetAgreementHistory(dealAgreementsGetAgreementHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => dealAgreementHistoryAdapter(item)))
    );
  }

  dealAgreementsGetLastAgreementHistory(params: DealAgreementsGetLastAgreementHistoryParams): Observable<DealAgreementHistory> {
    return this._api.dealAgreementsGetLastAgreementHistory(dealAgreementsGetLastAgreementHistoryAdapter(params)).pipe(
      map((res) => dealAgreementHistoryAdapter(res?.data))
    );
  }

}
