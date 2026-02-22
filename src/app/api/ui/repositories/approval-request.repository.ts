import { ApprovalRequestApiService } from '../../swagger/services/approval-request-api.service';
import { ApprovalRequestApproveRequestParams, approvalRequestApproveRequestAdapter } from './params/approval-request-approve-request.params';
import { ApprovalRequestCancelRequestParams, approvalRequestCancelRequestAdapter } from './params/approval-request-cancel-request.params';
import { ApprovalRequestGetByEntityIdWithTypeParams, approvalRequestGetByEntityIdWithTypeAdapter } from './params/approval-request-get-by-entity-id-with-type.params';
import { ApprovalRequestGetTradesWithApprovalRequestParams, approvalRequestGetTradesWithApprovalRequestAdapter } from './params/approval-request-get-trades-with-approval-request.params';
import { ApprovalRequestRejectRequestParams, approvalRequestRejectRequestAdapter } from './params/approval-request-reject-request.params';
import { ApprovalRequestSendApprovalRequestParams, approvalRequestSendApprovalRequestAdapter } from './params/approval-request-send-approval-request.params';
import { ApprovalRequestView } from '../models/approval-request-view.interface';
import { approvalRequestViewAdapter } from '../adapters/models/approval-request-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeWithApprovalRequestListItemAlt } from '../models/trade-with-approval-request-list-item-alt.interface';
import { tradeWithApprovalRequestListItemAltAdapter } from '../adapters/models/trade-with-approval-request-list-item-alt.adapter';

@Injectable({ providedIn: 'root' })
export class ApprovalRequestRepository {
  private readonly _api = inject(ApprovalRequestApiService);

  approvalRequestApproveRequest(params?: ApprovalRequestApproveRequestParams): Observable<void> {
    return this._api.approvalRequestApproveRequest(approvalRequestApproveRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestCancelRequest(params?: ApprovalRequestCancelRequestParams): Observable<void> {
    return this._api.approvalRequestCancelRequest(approvalRequestCancelRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestGetByEntityIdWithType(params?: ApprovalRequestGetByEntityIdWithTypeParams): Observable<ApprovalRequestView> {
    return this._api.approvalRequestGetByEntityIdWithType(approvalRequestGetByEntityIdWithTypeAdapter(params)).pipe(
      map((res) => approvalRequestViewAdapter(res?.data))
    );
  }

  approvalRequestGetTradesWithApprovalRequest(params?: ApprovalRequestGetTradesWithApprovalRequestParams): Observable<TradeWithApprovalRequestListItemAlt[]> {
    return this._api.approvalRequestGetTradesWithApprovalRequest(approvalRequestGetTradesWithApprovalRequestAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => tradeWithApprovalRequestListItemAltAdapter(item)))
    );
  }

  approvalRequestRejectRequest(params?: ApprovalRequestRejectRequestParams): Observable<void> {
    return this._api.approvalRequestRejectRequest(approvalRequestRejectRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  approvalRequestSendApprovalRequest(params?: ApprovalRequestSendApprovalRequestParams): Observable<number> {
    return this._api.approvalRequestSendApprovalRequest(approvalRequestSendApprovalRequestAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
