import { adaptApprovalRequestViewToUI } from '../adapters/toUI/approval-request-view.adapter';
import { adaptTradeWithApprovalRequestListItemAltToUI } from '../adapters/toUI/trade-with-approval-request-list-item-alt.adapter';
import { ApprovalRequestApiService } from '../../swagger/services/approval-request-api.service';
import { ApprovalRequestApproveRequestParams, approvalRequestApproveRequestParamsAdapter } from './params/approval-request-approve-request.params';
import { ApprovalRequestCancelRequestParams, approvalRequestCancelRequestParamsAdapter } from './params/approval-request-cancel-request.params';
import { ApprovalRequestGetByEntityIdWithTypeParams, approvalRequestGetByEntityIdWithTypeParamsAdapter } from './params/approval-request-get-by-entity-id-with-type.params';
import { ApprovalRequestGetTradesWithApprovalRequestParams, approvalRequestGetTradesWithApprovalRequestParamsAdapter } from './params/approval-request-get-trades-with-approval-request.params';
import { ApprovalRequestRejectRequestParams, approvalRequestRejectRequestParamsAdapter } from './params/approval-request-reject-request.params';
import { ApprovalRequestSendApprovalRequestParams, approvalRequestSendApprovalRequestParamsAdapter } from './params/approval-request-send-approval-request.params';
import { ApprovalRequestView } from '../models/approval-request-view.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeWithApprovalRequestListItemAlt } from '../models/trade-with-approval-request-list-item-alt.interface';

@Injectable({ providedIn: 'root' })
export class ApprovalRequestRepository {
  private readonly _api = inject(ApprovalRequestApiService);

  approvalRequestApproveRequest(params?: ApprovalRequestApproveRequestParams): Observable<void> {
    return this._api.approvalRequestApproveRequest(approvalRequestApproveRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestCancelRequest(params?: ApprovalRequestCancelRequestParams): Observable<void> {
    return this._api.approvalRequestCancelRequest(approvalRequestCancelRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestGetByEntityIdWithType(params?: ApprovalRequestGetByEntityIdWithTypeParams): Observable<ApprovalRequestView> {
    return this._api.approvalRequestGetByEntityIdWithType(approvalRequestGetByEntityIdWithTypeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApprovalRequestViewToUI(res?.data))
    );
  }

  approvalRequestGetTradesWithApprovalRequest(params?: ApprovalRequestGetTradesWithApprovalRequestParams): Observable<TradeWithApprovalRequestListItemAlt[]> {
    return this._api.approvalRequestGetTradesWithApprovalRequest(approvalRequestGetTradesWithApprovalRequestParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTradeWithApprovalRequestListItemAltToUI(item)))
    );
  }

  approvalRequestRejectRequest(params?: ApprovalRequestRejectRequestParams): Observable<void> {
    return this._api.approvalRequestRejectRequest(approvalRequestRejectRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestSendApprovalRequest(params?: ApprovalRequestSendApprovalRequestParams): Observable<number> {
    return this._api.approvalRequestSendApprovalRequest(approvalRequestSendApprovalRequestParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
