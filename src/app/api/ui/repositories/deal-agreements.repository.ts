import { adaptApiResultOfIntegerAltToUI } from '../adapters/toUI/api-result-of-integer-alt.adapter';
import { adaptDealAgreementHistoryToUI } from '../adapters/toUI/deal-agreement-history.adapter';
import { ApiResultOfIntegerAlt } from '../models/api-result-of-integer-alt.interface';
import { DealAgreementHistory } from '../models/deal-agreement-history.interface';
import { DealAgreementsAddAgreementByCustomerParams, dealAgreementsAddAgreementByCustomerParamsAdapter } from './params/deal-agreements-add-agreement-by-customer.params';
import { DealAgreementsAddAgreementByParticipantParams, dealAgreementsAddAgreementByParticipantParamsAdapter } from './params/deal-agreements-add-agreement-by-participant.params';
import { DealAgreementsAddDealAgreementHistoryParams, dealAgreementsAddDealAgreementHistoryParamsAdapter } from './params/deal-agreements-add-deal-agreement-history.params';
import { DealAgreementsApiService } from '../../swagger/services/deal-agreements-api.service';
import { DealAgreementsApproveAgreementByCustomerParams, dealAgreementsApproveAgreementByCustomerParamsAdapter } from './params/deal-agreements-approve-agreement-by-customer.params';
import { DealAgreementsApproveAgreementByParticipantParams, dealAgreementsApproveAgreementByParticipantParamsAdapter } from './params/deal-agreements-approve-agreement-by-participant.params';
import { DealAgreementsGetAgreementHistoryParams, dealAgreementsGetAgreementHistoryParamsAdapter } from './params/deal-agreements-get-agreement-history.params';
import { DealAgreementsGetLastAgreementHistoryParams, dealAgreementsGetLastAgreementHistoryParamsAdapter } from './params/deal-agreements-get-last-agreement-history.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealAgreementsRepository {
  private readonly _api = inject(DealAgreementsApiService);

  dealAgreementsAddAgreementByCustomer(params: DealAgreementsAddAgreementByCustomerParams): Observable<number> {
    return this._api.dealAgreementsAddAgreementByCustomer(dealAgreementsAddAgreementByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealAgreementsAddAgreementByParticipant(params: DealAgreementsAddAgreementByParticipantParams): Observable<number> {
    return this._api.dealAgreementsAddAgreementByParticipant(dealAgreementsAddAgreementByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealAgreementsAddDealAgreementHistory(params: DealAgreementsAddDealAgreementHistoryParams): Observable<ApiResultOfIntegerAlt> {
    return this._api.dealAgreementsAddDealAgreementHistory(dealAgreementsAddDealAgreementHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiResultOfIntegerAltToUI(res))
    );
  }

  dealAgreementsApproveAgreementByCustomer(params: DealAgreementsApproveAgreementByCustomerParams): Observable<void> {
    return this._api.dealAgreementsApproveAgreementByCustomer(dealAgreementsApproveAgreementByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealAgreementsApproveAgreementByParticipant(params: DealAgreementsApproveAgreementByParticipantParams): Observable<void> {
    return this._api.dealAgreementsApproveAgreementByParticipant(dealAgreementsApproveAgreementByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealAgreementsGetAgreementHistory(params: DealAgreementsGetAgreementHistoryParams): Observable<DealAgreementHistory[]> {
    return this._api.dealAgreementsGetAgreementHistory(dealAgreementsGetAgreementHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDealAgreementHistoryToUI(item)))
    );
  }

  dealAgreementsGetLastAgreementHistory(params: DealAgreementsGetLastAgreementHistoryParams): Observable<DealAgreementHistory> {
    return this._api.dealAgreementsGetLastAgreementHistory(dealAgreementsGetLastAgreementHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealAgreementHistoryToUI(res?.data))
    );
  }

}
