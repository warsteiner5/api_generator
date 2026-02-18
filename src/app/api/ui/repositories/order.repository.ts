import { adaptApiSearchResultOfOrderGridDtoForCustomerAltToUI } from '../adapters/toUI/api-search-result-of-order-grid-dto-for-customer-alt.adapter';
import { adaptExportFilesStatusAltToUI } from '../adapters/toUI/export-files-status-alt.adapter';
import { adaptOrderViewToUI } from '../adapters/toUI/order-view.adapter';
import { ApiSearchResultOfOrderGridDtoForCustomerAlt } from '../models/api-search-result-of-order-grid-dto-for-customer-alt.interface';
import { ExportFilesStatusAlt } from '../models/export-files-status-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderApiService } from '../../swagger/services/order-api.service';
import { OrderApproveOrderByParticipantParams, orderApproveOrderByParticipantParamsAdapter } from './params/order-approve-order-by-participant.params';
import { OrderApproveOrderBySupplierParams, orderApproveOrderBySupplierParamsAdapter } from './params/order-approve-order-by-supplier.params';
import { OrderCancelOrderParams, orderCancelOrderParamsAdapter } from './params/order-cancel-order.params';
import { OrderExportToExcelByFilterParams, orderExportToExcelByFilterParamsAdapter } from './params/order-export-to-excel-by-filter.params';
import { OrderExportToExcelParams, orderExportToExcelParamsAdapter } from './params/order-export-to-excel.params';
import { OrderGetFullOrderInfoForReSendParams, orderGetFullOrderInfoForReSendParamsAdapter } from './params/order-get-full-order-info-for-re-send.params';
import { OrderGetFullOrderInfoParams, orderGetFullOrderInfoParamsAdapter } from './params/order-get-full-order-info.params';
import { OrderGetOrdersForCustomerParams, orderGetOrdersForCustomerParamsAdapter } from './params/order-get-orders-for-customer.params';
import { OrderGetOrdersForOperatorParams, orderGetOrdersForOperatorParamsAdapter } from './params/order-get-orders-for-operator.params';
import { OrderGetOrdersForParticipantParams, orderGetOrdersForParticipantParamsAdapter } from './params/order-get-orders-for-participant.params';
import { OrderGetSentToParticipantOrderCountParams, orderGetSentToParticipantOrderCountParamsAdapter } from './params/order-get-sent-to-participant-order-count.params';
import { OrderLinkAndPublishPublicOfferOrderParams, orderLinkAndPublishPublicOfferOrderParamsAdapter } from './params/order-link-and-publish-public-offer-order.params';
import { OrderRejectOrderByParticipantParams, orderRejectOrderByParticipantParamsAdapter } from './params/order-reject-order-by-participant.params';
import { OrderRejectOrderBySupplierParams, orderRejectOrderBySupplierParamsAdapter } from './params/order-reject-order-by-supplier.params';
import { OrderRemoveDraftParams, orderRemoveDraftParamsAdapter } from './params/order-remove-draft.params';
import { OrderSaveAsDraftParams, orderSaveAsDraftParamsAdapter } from './params/order-save-as-draft.params';
import { OrderSendOrderToParticipantGetParams, orderSendOrderToParticipantGetParamsAdapter } from './params/order-send-order-to-participant-get.params';
import { OrderSendOrderToParticipantPostParams, orderSendOrderToParticipantPostParamsAdapter } from './params/order-send-order-to-participant-post.params';
import { OrderView } from '../models/order-view.interface';

@Injectable({ providedIn: 'root' })
export class OrderRepository {
  private readonly _api = inject(OrderApiService);

  orderApproveOrderByParticipant(params?: OrderApproveOrderByParticipantParams): Observable<number> {
    return this._api.orderApproveOrderByParticipant(orderApproveOrderByParticipantParamsAdapter.adapt(params));
  }

  orderApproveOrderBySupplier(params?: OrderApproveOrderBySupplierParams): Observable<number> {
    return this._api.orderApproveOrderBySupplier(orderApproveOrderBySupplierParamsAdapter.adapt(params));
  }

  orderCancelOrder(params: OrderCancelOrderParams): Observable<number> {
    return this._api.orderCancelOrder(orderCancelOrderParamsAdapter.adapt(params));
  }

  orderExportToExcel(params?: OrderExportToExcelParams): Observable<Blob> {
    return this._api.orderExportToExcel(orderExportToExcelParamsAdapter.adapt(params));
  }

  orderExportToExcelByFilter(params?: OrderExportToExcelByFilterParams): Observable<ExportFilesStatusAlt> {
    return this._api.orderExportToExcelByFilter(orderExportToExcelByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExportFilesStatusAltToUI(res))
    );
  }

  orderGetFullOrderInfo(params: OrderGetFullOrderInfoParams): Observable<OrderView> {
    return this._api.orderGetFullOrderInfo(orderGetFullOrderInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrderViewToUI(res))
    );
  }

  orderGetFullOrderInfoForReSend(params: OrderGetFullOrderInfoForReSendParams): Observable<OrderView> {
    return this._api.orderGetFullOrderInfoForReSend(orderGetFullOrderInfoForReSendParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrderViewToUI(res))
    );
  }

  orderGetOrdersForCustomer(params?: OrderGetOrdersForCustomerParams): Observable<ApiSearchResultOfOrderGridDtoForCustomerAlt> {
    return this._api.orderGetOrdersForCustomer(orderGetOrdersForCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfOrderGridDtoForCustomerAltToUI(res))
    );
  }

  orderGetOrdersForOperator(params?: OrderGetOrdersForOperatorParams): Observable<ApiSearchResultOfOrderGridDtoForCustomerAlt> {
    return this._api.orderGetOrdersForOperator(orderGetOrdersForOperatorParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfOrderGridDtoForCustomerAltToUI(res))
    );
  }

  orderGetOrdersForParticipant(params?: OrderGetOrdersForParticipantParams): Observable<ApiSearchResultOfOrderGridDtoForCustomerAlt> {
    return this._api.orderGetOrdersForParticipant(orderGetOrdersForParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfOrderGridDtoForCustomerAltToUI(res))
    );
  }

  orderGetSentToParticipantOrderCount(params?: OrderGetSentToParticipantOrderCountParams): Observable<Blob> {
    return this._api.orderGetSentToParticipantOrderCount(orderGetSentToParticipantOrderCountParamsAdapter.adapt(params));
  }

  orderLinkAndPublishPublicOfferOrder(params?: OrderLinkAndPublishPublicOfferOrderParams): Observable<number> {
    return this._api.orderLinkAndPublishPublicOfferOrder(orderLinkAndPublishPublicOfferOrderParamsAdapter.adapt(params));
  }

  orderRejectOrderByParticipant(params?: OrderRejectOrderByParticipantParams): Observable<number> {
    return this._api.orderRejectOrderByParticipant(orderRejectOrderByParticipantParamsAdapter.adapt(params));
  }

  orderRejectOrderBySupplier(params?: OrderRejectOrderBySupplierParams): Observable<number> {
    return this._api.orderRejectOrderBySupplier(orderRejectOrderBySupplierParamsAdapter.adapt(params));
  }

  orderRemoveDraft(params: OrderRemoveDraftParams): Observable<void> {
    return this._api.orderRemoveDraft(orderRemoveDraftParamsAdapter.adapt(params));
  }

  orderSaveAsDraft(params?: OrderSaveAsDraftParams): Observable<number> {
    return this._api.orderSaveAsDraft(orderSaveAsDraftParamsAdapter.adapt(params));
  }

  orderSendOrderToParticipantGet(params: OrderSendOrderToParticipantGetParams): Observable<number> {
    return this._api.orderSendOrderToParticipantGet(orderSendOrderToParticipantGetParamsAdapter.adapt(params));
  }

  orderSendOrderToParticipantPost(params?: OrderSendOrderToParticipantPostParams): Observable<number> {
    return this._api.orderSendOrderToParticipantPost(orderSendOrderToParticipantPostParamsAdapter.adapt(params));
  }

}
