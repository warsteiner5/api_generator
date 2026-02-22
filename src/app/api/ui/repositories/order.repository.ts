import { ApiSearchResultOfOrderGridDtoForCustomer } from '../models/api-search-result-of-order-grid-dto-for-customer.interface';
import { apiSearchResultOfOrderGridDtoForCustomerAdapter } from '../adapters/models/api-search-result-of-order-grid-dto-for-customer.adapter';
import { ExportFilesStatusAlt } from '../models/export-files-status-alt.interface';
import { exportFilesStatusAltAdapter } from '../adapters/models/export-files-status-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderApiService } from '../../swagger/services/order-api.service';
import { OrderApproveOrderByParticipantParams, orderApproveOrderByParticipantAdapter } from './params/order-approve-order-by-participant.params';
import { OrderApproveOrderBySupplierParams, orderApproveOrderBySupplierAdapter } from './params/order-approve-order-by-supplier.params';
import { OrderCancelOrderParams, orderCancelOrderAdapter } from './params/order-cancel-order.params';
import { OrderExportToExcelByFilterParams, orderExportToExcelByFilterAdapter } from './params/order-export-to-excel-by-filter.params';
import { OrderExportToExcelParams, orderExportToExcelAdapter } from './params/order-export-to-excel.params';
import { OrderGetFullOrderInfoForReSendParams, orderGetFullOrderInfoForReSendAdapter } from './params/order-get-full-order-info-for-re-send.params';
import { OrderGetFullOrderInfoParams, orderGetFullOrderInfoAdapter } from './params/order-get-full-order-info.params';
import { OrderGetOrdersForCustomerParams, orderGetOrdersForCustomerAdapter } from './params/order-get-orders-for-customer.params';
import { OrderGetOrdersForOperatorParams, orderGetOrdersForOperatorAdapter } from './params/order-get-orders-for-operator.params';
import { OrderGetOrdersForParticipantParams, orderGetOrdersForParticipantAdapter } from './params/order-get-orders-for-participant.params';
import { OrderGetSentToParticipantOrderCountParams, orderGetSentToParticipantOrderCountAdapter } from './params/order-get-sent-to-participant-order-count.params';
import { OrderLinkAndPublishPublicOfferOrderParams, orderLinkAndPublishPublicOfferOrderAdapter } from './params/order-link-and-publish-public-offer-order.params';
import { OrderRejectOrderByParticipantParams, orderRejectOrderByParticipantAdapter } from './params/order-reject-order-by-participant.params';
import { OrderRejectOrderBySupplierParams, orderRejectOrderBySupplierAdapter } from './params/order-reject-order-by-supplier.params';
import { OrderRemoveDraftParams, orderRemoveDraftAdapter } from './params/order-remove-draft.params';
import { OrderSaveAsDraftParams, orderSaveAsDraftAdapter } from './params/order-save-as-draft.params';
import { OrderSendOrderToParticipantGetParams, orderSendOrderToParticipantGetAdapter } from './params/order-send-order-to-participant-get.params';
import { OrderSendOrderToParticipantPostParams, orderSendOrderToParticipantPostAdapter } from './params/order-send-order-to-participant-post.params';
import { OrderView } from '../models/order-view.interface';
import { orderViewAdapter } from '../adapters/models/order-view.adapter';

@Injectable({ providedIn: 'root' })
export class OrderRepository {
  private readonly _api = inject(OrderApiService);

  orderApproveOrderByParticipant(params?: OrderApproveOrderByParticipantParams): Observable<number> {
    return this._api.orderApproveOrderByParticipant(orderApproveOrderByParticipantAdapter(params));
  }

  orderApproveOrderBySupplier(params?: OrderApproveOrderBySupplierParams): Observable<number> {
    return this._api.orderApproveOrderBySupplier(orderApproveOrderBySupplierAdapter(params));
  }

  orderCancelOrder(params: OrderCancelOrderParams): Observable<number> {
    return this._api.orderCancelOrder(orderCancelOrderAdapter(params));
  }

  orderExportToExcel(params?: OrderExportToExcelParams): Observable<Blob> {
    return this._api.orderExportToExcel(orderExportToExcelAdapter(params));
  }

  orderExportToExcelByFilter(params?: OrderExportToExcelByFilterParams): Observable<ExportFilesStatusAlt> {
    return this._api.orderExportToExcelByFilter(orderExportToExcelByFilterAdapter(params)).pipe(
      map((res) => exportFilesStatusAltAdapter(res))
    );
  }

  orderGetFullOrderInfo(params: OrderGetFullOrderInfoParams): Observable<OrderView> {
    return this._api.orderGetFullOrderInfo(orderGetFullOrderInfoAdapter(params)).pipe(
      map((res) => orderViewAdapter(res))
    );
  }

  orderGetFullOrderInfoForReSend(params: OrderGetFullOrderInfoForReSendParams): Observable<OrderView> {
    return this._api.orderGetFullOrderInfoForReSend(orderGetFullOrderInfoForReSendAdapter(params)).pipe(
      map((res) => orderViewAdapter(res))
    );
  }

  orderGetOrdersForCustomer(params?: OrderGetOrdersForCustomerParams): Observable<ApiSearchResultOfOrderGridDtoForCustomer> {
    return this._api.orderGetOrdersForCustomer(orderGetOrdersForCustomerAdapter(params)).pipe(
      map((res) => apiSearchResultOfOrderGridDtoForCustomerAdapter(res))
    );
  }

  orderGetOrdersForOperator(params?: OrderGetOrdersForOperatorParams): Observable<ApiSearchResultOfOrderGridDtoForCustomer> {
    return this._api.orderGetOrdersForOperator(orderGetOrdersForOperatorAdapter(params)).pipe(
      map((res) => apiSearchResultOfOrderGridDtoForCustomerAdapter(res))
    );
  }

  orderGetOrdersForParticipant(params?: OrderGetOrdersForParticipantParams): Observable<ApiSearchResultOfOrderGridDtoForCustomer> {
    return this._api.orderGetOrdersForParticipant(orderGetOrdersForParticipantAdapter(params)).pipe(
      map((res) => apiSearchResultOfOrderGridDtoForCustomerAdapter(res))
    );
  }

  orderGetSentToParticipantOrderCount(params?: OrderGetSentToParticipantOrderCountParams): Observable<Blob> {
    return this._api.orderGetSentToParticipantOrderCount(orderGetSentToParticipantOrderCountAdapter(params));
  }

  orderLinkAndPublishPublicOfferOrder(params?: OrderLinkAndPublishPublicOfferOrderParams): Observable<number> {
    return this._api.orderLinkAndPublishPublicOfferOrder(orderLinkAndPublishPublicOfferOrderAdapter(params));
  }

  orderRejectOrderByParticipant(params?: OrderRejectOrderByParticipantParams): Observable<number> {
    return this._api.orderRejectOrderByParticipant(orderRejectOrderByParticipantAdapter(params));
  }

  orderRejectOrderBySupplier(params?: OrderRejectOrderBySupplierParams): Observable<number> {
    return this._api.orderRejectOrderBySupplier(orderRejectOrderBySupplierAdapter(params));
  }

  orderRemoveDraft(params: OrderRemoveDraftParams): Observable<void> {
    return this._api.orderRemoveDraft(orderRemoveDraftAdapter(params));
  }

  orderSaveAsDraft(params?: OrderSaveAsDraftParams): Observable<number> {
    return this._api.orderSaveAsDraft(orderSaveAsDraftAdapter(params));
  }

  orderSendOrderToParticipantGet(params: OrderSendOrderToParticipantGetParams): Observable<number> {
    return this._api.orderSendOrderToParticipantGet(orderSendOrderToParticipantGetAdapter(params));
  }

  orderSendOrderToParticipantPost(params?: OrderSendOrderToParticipantPostParams): Observable<number> {
    return this._api.orderSendOrderToParticipantPost(orderSendOrderToParticipantPostAdapter(params));
  }

}
