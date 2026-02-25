import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { certificateViewModelAdapter } from '../adapters/models/certificate-view-model.adapter';
import { DealCountdown } from '../models/deal-countdown.interface';
import { dealCountdownAdapter } from '../adapters/models/deal-countdown.adapter';
import { DealExtendedInfoAlt } from '../models/deal-extended-info-alt.interface';
import { dealExtendedInfoAltAdapter } from '../adapters/models/deal-extended-info-alt.adapter';
import { DealFullPriceChange } from '../models/deal-full-price-change.interface';
import { dealFullPriceChangeAdapter } from '../adapters/models/deal-full-price-change.adapter';
import { DealHashToSign } from '../models/deal-hash-to-sign.interface';
import { dealHashToSignAdapter } from '../adapters/models/deal-hash-to-sign.adapter';
import { DealInfoAlt } from '../models/deal-info-alt.interface';
import { DealListItem } from '../models/deal-list-item.interface';
import { DealsAddDealProvisionBySupplierParams, dealsAddDealProvisionBySupplierAdapter } from './params/deals-add-deal-provision-by-supplier.params';
import { DealsAddPaperDealDocumentsParams, dealsAddPaperDealDocumentsAdapter } from './params/deals-add-paper-deal-documents.params';
import { DealsApiService } from '../../swagger/services/deals-api.service';
import { DealsApproveCustomerDealParams, dealsApproveCustomerDealAdapter } from './params/deals-approve-customer-deal.params';
import { DealsAutoCreateDealsParams, dealsAutoCreateDealsAdapter } from './params/deals-auto-create-deals.params';
import { DealsCancelDealParams, dealsCancelDealAdapter } from './params/deals-cancel-deal.params';
import { DealsCancelExternalDealParams, dealsCancelExternalDealAdapter } from './params/deals-cancel-external-deal.params';
import { DealsChangeContractByCustomerParams, dealsChangeContractByCustomerAdapter } from './params/deals-change-contract-by-customer.params';
import { DealsChangeContractBySupplierParams, dealsChangeContractBySupplierAdapter } from './params/deals-change-contract-by-supplier.params';
import { DealsChangeDealByParticipantParams, dealsChangeDealByParticipantAdapter } from './params/deals-change-deal-by-participant.params';
import { DealsChangeFormParams, dealsChangeFormAdapter } from './params/deals-change-form.params';
import { DealsChangeFormToPaperByCustomerParams, dealsChangeFormToPaperByCustomerAdapter } from './params/deals-change-form-to-paper-by-customer.params';
import { DealsChangeFormToPaperParams, dealsChangeFormToPaperAdapter } from './params/deals-change-form-to-paper.params';
import { DealsConcludeApprovedDealParams, dealsConcludeApprovedDealAdapter } from './params/deals-conclude-approved-deal.params';
import { DealsConcludeApprovedExternalDealParams, dealsConcludeApprovedExternalDealAdapter } from './params/deals-conclude-approved-external-deal.params';
import { DealsCreateDealExternalParams, dealsCreateDealExternalAdapter } from './params/deals-create-deal-external.params';
import { DealsCreateDealInternalParams, dealsCreateDealInternalAdapter } from './params/deals-create-deal-internal.params';
import { DealsCreateDealParams, dealsCreateDealAdapter } from './params/deals-create-deal.params';
import { DealsCreateDealsExternalParams, dealsCreateDealsExternalAdapter } from './params/deals-create-deals-external.params';
import { DealsCreateDealsParams, dealsCreateDealsAdapter } from './params/deals-create-deals.params';
import { DealsCreateDifferenceProtocolBySupplierParams, dealsCreateDifferenceProtocolBySupplierAdapter } from './params/deals-create-difference-protocol-by-supplier.params';
import { DealsDoNotConcludeDealParams, dealsDoNotConcludeDealAdapter } from './params/deals-do-not-conclude-deal.params';
import { DealsEditWorkGroupsParams, dealsEditWorkGroupsAdapter } from './params/deals-edit-work-groups.params';
import { DealsExportDealsInfoIntoExcelParams, dealsExportDealsInfoIntoExcelAdapter } from './params/deals-export-deals-info-into-excel.params';
import { DealsGenerateDealNumberParams, dealsGenerateDealNumberAdapter } from './params/deals-generate-deal-number.params';
import { DealsGetCountDownTimeParams, dealsGetCountDownTimeAdapter } from './params/deals-get-count-down-time.params';
import { DealsGetCustomerSignInfoParams, dealsGetCustomerSignInfoAdapter } from './params/deals-get-customer-sign-info.params';
import { DealsGetDataToSignByCustomerForDealParams, dealsGetDataToSignByCustomerForDealAdapter } from './params/deals-get-data-to-sign-by-customer-for-deal.params';
import { DealsGetDataToSignByParticipantForDealParams, dealsGetDataToSignByParticipantForDealAdapter } from './params/deals-get-data-to-sign-by-participant-for-deal.params';
import { DealsGetDealDocumentPacksParams, dealsGetDealDocumentPacksAdapter } from './params/deals-get-deal-document-packs.params';
import { DealsGetDealExtendedInfoParams, dealsGetDealExtendedInfoAdapter } from './params/deals-get-deal-extended-info.params';
import { DealsGetDealParams, dealsGetDealAdapter } from './params/deals-get-deal.params';
import { DealsGetDeals2Params, dealsGetDeals2Adapter } from './params/deals-get-deals-2.params';
import { DealsGetDealsParams, dealsGetDealsAdapter } from './params/deals-get-deals.params';
import { DealsGetExportDealDocumentsFileParams, dealsGetExportDealDocumentsFileAdapter } from './params/deals-get-export-deal-documents-file.params';
import { DealsGetExportDealDocumentsParams, dealsGetExportDealDocumentsAdapter } from './params/deals-get-export-deal-documents.params';
import { DealsGetLastDealFullPriceChangeParams, dealsGetLastDealFullPriceChangeAdapter } from './params/deals-get-last-deal-full-price-change.params';
import { DealsGetSupplierSignInfoParams, dealsGetSupplierSignInfoAdapter } from './params/deals-get-supplier-sign-info.params';
import { DealsGetTradeActualDealParams, dealsGetTradeActualDealAdapter } from './params/deals-get-trade-actual-deal.params';
import { DealsGetTradeActualDealsParams, dealsGetTradeActualDealsAdapter } from './params/deals-get-trade-actual-deals.params';
import { DealsGetTradeAndDealDiscussionHistoryParams, dealsGetTradeAndDealDiscussionHistoryAdapter } from './params/deals-get-trade-and-deal-discussion-history.params';
import { DealsGetTradeAndDealHistoryParams, dealsGetTradeAndDealHistoryAdapter } from './params/deals-get-trade-and-deal-history.params';
import { DealsGetTradeHistoryParams, dealsGetTradeHistoryAdapter } from './params/deals-get-trade-history.params';
import { DealsRejectChangeFormToPaperParams, dealsRejectChangeFormToPaperAdapter } from './params/deals-reject-change-form-to-paper.params';
import { DealsRejectCustomerDealParams, dealsRejectCustomerDealAdapter } from './params/deals-reject-customer-deal.params';
import { DealsRevokeDealByCustomerParams, dealsRevokeDealByCustomerAdapter } from './params/deals-revoke-deal-by-customer.params';
import { DealsRevokeDealBySupplierParams, dealsRevokeDealBySupplierAdapter } from './params/deals-revoke-deal-by-supplier.params';
import { DealsReworkDealParams, dealsReworkDealAdapter } from './params/deals-rework-deal.params';
import { DealsSaveDealEisDataDraftParams, dealsSaveDealEisDataDraftAdapter } from './params/deals-save-deal-eis-data-draft.params';
import { DealsSaveDealExtendedInfoParams, dealsSaveDealExtendedInfoAdapter } from './params/deals-save-deal-extended-info.params';
import { DealsSendContractFromCustomerToSupplierParams, dealsSendContractFromCustomerToSupplierAdapter } from './params/deals-send-contract-from-customer-to-supplier.params';
import { DealsSendContractFromSupplierToCustomerParams, dealsSendContractFromSupplierToCustomerAdapter } from './params/deals-send-contract-from-supplier-to-customer.params';
import { DealsSendDealToEisParams, dealsSendDealToEisAdapter } from './params/deals-send-deal-to-eis.params';
import { DealsSentForParticipantApproveExternalParams, dealsSentForParticipantApproveExternalAdapter } from './params/deals-sent-for-participant-approve-external.params';
import { DealsSentForParticipantApproveParams, dealsSentForParticipantApproveAdapter } from './params/deals-sent-for-participant-approve.params';
import { DealsSetDealExecutedParams, dealsSetDealExecutedAdapter } from './params/deals-set-deal-executed.params';
import { DealsSetDealTerminatedParams, dealsSetDealTerminatedAdapter } from './params/deals-set-deal-terminated.params';
import { DealsSignDealOutsideEShopParams, dealsSignDealOutsideEShopAdapter } from './params/deals-sign-deal-outside-e-shop.params';
import { DealsSuggestPaperFormSigningParams, dealsSuggestPaperFormSigningAdapter } from './params/deals-suggest-paper-form-signing.params';
import { DealsUpdateDealDocumentsExternalParams, dealsUpdateDealDocumentsExternalAdapter } from './params/deals-update-deal-documents-external.params';
import { DealsUpdateFullDealPriceParams, dealsUpdateFullDealPriceAdapter } from './params/deals-update-full-deal-price.params';
import { Discussion } from '../models/discussion.interface';
import { discussionAdapter } from '../adapters/models/discussion.adapter';
import { DocumentPack } from '../models/document-pack.interface';
import { documentPackAdapter } from '../adapters/models/document-pack.adapter';
import { EisIntegrationResult } from '../models/eis-integration-result.interface';
import { eisIntegrationResultAdapter } from '../adapters/models/eis-integration-result.adapter';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { iDiscussionHistoryAdapter } from '../adapters/models/i-discussion-history.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketDeal } from '../models/market-deal.interface';
import { marketDealAdapter } from '../adapters/models/market-deal.adapter';
import { MarketFullDeal } from '../models/market-full-deal.interface';
import { marketFullDealAdapter } from '../adapters/models/market-full-deal.adapter';
import { MarketFullOrderDeal } from '../models/market-full-order-deal.interface';
import { marketFullOrderDealAdapter } from '../adapters/models/market-full-order-deal.adapter';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfDealInfoAltAdapter } from '../adapters/models/market-pagination-result-of-list-of-deal-info-alt.adapter';
import { marketPaginationResultOfListOfDealListItemAdapter } from '../adapters/models/market-pagination-result-of-list-of-deal-list-item.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealsRepository {
  private readonly _api = inject(DealsApiService);

  dealsAddDealProvisionBySupplier(params: DealsAddDealProvisionBySupplierParams): Observable<void> {
    return this._api.dealsAddDealProvisionBySupplier(dealsAddDealProvisionBySupplierAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsAddPaperDealDocuments(params: DealsAddPaperDealDocumentsParams): Observable<void> {
    return this._api.dealsAddPaperDealDocuments(dealsAddPaperDealDocumentsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsApproveCustomerDeal(params?: DealsApproveCustomerDealParams): Observable<boolean> {
    return this._api.dealsApproveCustomerDeal(dealsApproveCustomerDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsAutoCreateDeals(params: DealsAutoCreateDealsParams): Observable<number[]> {
    return this._api.dealsAutoCreateDeals(dealsAutoCreateDealsAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCancelDeal(params?: DealsCancelDealParams): Observable<boolean> {
    return this._api.dealsCancelDeal(dealsCancelDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsCancelExternalDeal(params: DealsCancelExternalDealParams): Observable<boolean> {
    return this._api.dealsCancelExternalDeal(dealsCancelExternalDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsChangeContractByCustomer(params: DealsChangeContractByCustomerParams): Observable<number> {
    return this._api.dealsChangeContractByCustomer(dealsChangeContractByCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeContractBySupplier(params: DealsChangeContractBySupplierParams): Observable<number> {
    return this._api.dealsChangeContractBySupplier(dealsChangeContractBySupplierAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeDealByParticipant(params?: DealsChangeDealByParticipantParams): Observable<boolean> {
    return this._api.dealsChangeDealByParticipant(dealsChangeDealByParticipantAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsChangeForm(params?: DealsChangeFormParams): Observable<void> {
    return this._api.dealsChangeForm(dealsChangeFormAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsChangeFormToPaper(params?: DealsChangeFormToPaperParams): Observable<number> {
    return this._api.dealsChangeFormToPaper(dealsChangeFormToPaperAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeFormToPaperByCustomer(params: DealsChangeFormToPaperByCustomerParams): Observable<void> {
    return this._api.dealsChangeFormToPaperByCustomer(dealsChangeFormToPaperByCustomerAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsConcludeApprovedDeal(params?: DealsConcludeApprovedDealParams): Observable<boolean> {
    return this._api.dealsConcludeApprovedDeal(dealsConcludeApprovedDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsConcludeApprovedExternalDeal(params: DealsConcludeApprovedExternalDealParams): Observable<boolean> {
    return this._api.dealsConcludeApprovedExternalDeal(dealsConcludeApprovedExternalDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsCreateDeal(params?: DealsCreateDealParams): Observable<number> {
    return this._api.dealsCreateDeal(dealsCreateDealAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDealExternal(params?: DealsCreateDealExternalParams): Observable<number> {
    return this._api.dealsCreateDealExternal(dealsCreateDealExternalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDealInternal(params?: DealsCreateDealInternalParams): Observable<number> {
    return this._api.dealsCreateDealInternal(dealsCreateDealInternalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDeals(params?: DealsCreateDealsParams): Observable<number[]> {
    return this._api.dealsCreateDeals(dealsCreateDealsAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCreateDealsExternal(params?: DealsCreateDealsExternalParams): Observable<number[]> {
    return this._api.dealsCreateDealsExternal(dealsCreateDealsExternalAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCreateDifferenceProtocolBySupplier(params: DealsCreateDifferenceProtocolBySupplierParams): Observable<void> {
    return this._api.dealsCreateDifferenceProtocolBySupplier(dealsCreateDifferenceProtocolBySupplierAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsDoNotConcludeDeal(params?: DealsDoNotConcludeDealParams): Observable<boolean> {
    return this._api.dealsDoNotConcludeDeal(dealsDoNotConcludeDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsEditWorkGroups(params?: DealsEditWorkGroupsParams): Observable<boolean> {
    return this._api.dealsEditWorkGroups(dealsEditWorkGroupsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsExportDealsInfoIntoExcel(params?: DealsExportDealsInfoIntoExcelParams): Observable<string> {
    return this._api.dealsExportDealsInfoIntoExcel(dealsExportDealsInfoIntoExcelAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGenerateDealNumber(params?: DealsGenerateDealNumberParams): Observable<string> {
    return this._api.dealsGenerateDealNumber(dealsGenerateDealNumberAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGetCountDownTime(params: DealsGetCountDownTimeParams): Observable<DealCountdown> {
    return this._api.dealsGetCountDownTime(dealsGetCountDownTimeAdapter(params)).pipe(
      map((res) => dealCountdownAdapter(res?.data))
    );
  }

  dealsGetCustomerSignInfo(params?: DealsGetCustomerSignInfoParams): Observable<CertificateViewModel> {
    return this._api.dealsGetCustomerSignInfo(dealsGetCustomerSignInfoAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res?.data))
    );
  }

  dealsGetDataToSignByCustomerForDeal(params?: DealsGetDataToSignByCustomerForDealParams): Observable<DealHashToSign> {
    return this._api.dealsGetDataToSignByCustomerForDeal(dealsGetDataToSignByCustomerForDealAdapter(params)).pipe(
      map((res) => dealHashToSignAdapter(res?.data))
    );
  }

  dealsGetDataToSignByParticipantForDeal(params?: DealsGetDataToSignByParticipantForDealParams): Observable<DealHashToSign> {
    return this._api.dealsGetDataToSignByParticipantForDeal(dealsGetDataToSignByParticipantForDealAdapter(params)).pipe(
      map((res) => dealHashToSignAdapter(res?.data))
    );
  }

  dealsGetDeal(params: DealsGetDealParams): Observable<MarketFullOrderDeal> {
    return this._api.dealsGetDeal(dealsGetDealAdapter(params)).pipe(
      map((res) => marketFullOrderDealAdapter(res?.data))
    );
  }

  dealsGetDealDocumentPacks(params: DealsGetDealDocumentPacksParams): Observable<DocumentPack[]> {
    return this._api.dealsGetDealDocumentPacks(dealsGetDealDocumentPacksAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => documentPackAdapter(item)))
    );
  }

  dealsGetDealExtendedInfo(params: DealsGetDealExtendedInfoParams): Observable<DealExtendedInfoAlt> {
    return this._api.dealsGetDealExtendedInfo(dealsGetDealExtendedInfoAdapter(params)).pipe(
      map((res) => dealExtendedInfoAltAdapter(res?.data))
    );
  }

  dealsGetDeals(params?: DealsGetDealsParams): Observable<MarketPaginationResult<DealInfoAlt[]>> {
    return this._api.dealsGetDeals(dealsGetDealsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfDealInfoAltAdapter(res?.data))
    );
  }

  dealsGetDeals2(params?: DealsGetDeals2Params): Observable<MarketPaginationResult<DealListItem[]>> {
    return this._api.dealsGetDeals2(dealsGetDeals2Adapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfDealListItemAdapter(res?.data))
    );
  }

  dealsGetExportDealDocuments(params: DealsGetExportDealDocumentsParams): Observable<string> {
    return this._api.dealsGetExportDealDocuments(dealsGetExportDealDocumentsAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGetExportDealDocumentsFile(params: DealsGetExportDealDocumentsFileParams): Observable<Blob> {
    return this._api.dealsGetExportDealDocumentsFile(dealsGetExportDealDocumentsFileAdapter(params));
  }

  dealsGetLastDealFullPriceChange(params: DealsGetLastDealFullPriceChangeParams): Observable<DealFullPriceChange> {
    return this._api.dealsGetLastDealFullPriceChange(dealsGetLastDealFullPriceChangeAdapter(params)).pipe(
      map((res) => dealFullPriceChangeAdapter(res?.data))
    );
  }

  dealsGetSupplierSignInfo(params?: DealsGetSupplierSignInfoParams): Observable<CertificateViewModel> {
    return this._api.dealsGetSupplierSignInfo(dealsGetSupplierSignInfoAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res?.data))
    );
  }

  dealsGetTradeActualDeal(params: DealsGetTradeActualDealParams): Observable<MarketDeal> {
    return this._api.dealsGetTradeActualDeal(dealsGetTradeActualDealAdapter(params)).pipe(
      map((res) => marketDealAdapter(res?.data))
    );
  }

  dealsGetTradeActualDeals(params: DealsGetTradeActualDealsParams): Observable<MarketDeal[]> {
    return this._api.dealsGetTradeActualDeals(dealsGetTradeActualDealsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketDealAdapter(item)))
    );
  }

  dealsGetTradeAndDealDiscussionHistory(params: DealsGetTradeAndDealDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.dealsGetTradeAndDealDiscussionHistory(dealsGetTradeAndDealDiscussionHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => iDiscussionHistoryAdapter(item)))
    );
  }

  dealsGetTradeAndDealHistory(params: DealsGetTradeAndDealHistoryParams): Observable<Discussion[]> {
    return this._api.dealsGetTradeAndDealHistory(dealsGetTradeAndDealHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  dealsGetTradeHistory(params: DealsGetTradeHistoryParams): Observable<Discussion[]> {
    return this._api.dealsGetTradeHistory(dealsGetTradeHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  dealsRejectChangeFormToPaper(params?: DealsRejectChangeFormToPaperParams): Observable<boolean> {
    return this._api.dealsRejectChangeFormToPaper(dealsRejectChangeFormToPaperAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsRejectCustomerDeal(params?: DealsRejectCustomerDealParams): Observable<boolean> {
    return this._api.dealsRejectCustomerDeal(dealsRejectCustomerDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsRevokeDealByCustomer(params: DealsRevokeDealByCustomerParams): Observable<void> {
    return this._api.dealsRevokeDealByCustomer(dealsRevokeDealByCustomerAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsRevokeDealBySupplier(params: DealsRevokeDealBySupplierParams): Observable<void> {
    return this._api.dealsRevokeDealBySupplier(dealsRevokeDealBySupplierAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsReworkDeal(params?: DealsReworkDealParams): Observable<boolean> {
    return this._api.dealsReworkDeal(dealsReworkDealAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsSaveDealEisDataDraft(params?: DealsSaveDealEisDataDraftParams): Observable<void> {
    return this._api.dealsSaveDealEisDataDraft(dealsSaveDealEisDataDraftAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsSaveDealExtendedInfo(params?: DealsSaveDealExtendedInfoParams): Observable<void> {
    return this._api.dealsSaveDealExtendedInfo(dealsSaveDealExtendedInfoAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsSendContractFromCustomerToSupplier(params: DealsSendContractFromCustomerToSupplierParams): Observable<number> {
    return this._api.dealsSendContractFromCustomerToSupplier(dealsSendContractFromCustomerToSupplierAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSendContractFromSupplierToCustomer(params: DealsSendContractFromSupplierToCustomerParams): Observable<number> {
    return this._api.dealsSendContractFromSupplierToCustomer(dealsSendContractFromSupplierToCustomerAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSendDealToEis(params?: DealsSendDealToEisParams): Observable<EisIntegrationResult> {
    return this._api.dealsSendDealToEis(dealsSendDealToEisAdapter(params)).pipe(
      map((res) => eisIntegrationResultAdapter(res?.data))
    );
  }

  dealsSentForParticipantApprove(params?: DealsSentForParticipantApproveParams): Observable<number> {
    return this._api.dealsSentForParticipantApprove(dealsSentForParticipantApproveAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSentForParticipantApproveExternal(params?: DealsSentForParticipantApproveExternalParams): Observable<number> {
    return this._api.dealsSentForParticipantApproveExternal(dealsSentForParticipantApproveExternalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSetDealExecuted(params: DealsSetDealExecutedParams): Observable<MarketFullDeal> {
    return this._api.dealsSetDealExecuted(dealsSetDealExecutedAdapter(params)).pipe(
      map((res) => marketFullDealAdapter(res?.data))
    );
  }

  dealsSetDealTerminated(params: DealsSetDealTerminatedParams): Observable<MarketFullDeal> {
    return this._api.dealsSetDealTerminated(dealsSetDealTerminatedAdapter(params)).pipe(
      map((res) => marketFullDealAdapter(res?.data))
    );
  }

  dealsSignDealOutsideEShop(params?: DealsSignDealOutsideEShopParams): Observable<number> {
    return this._api.dealsSignDealOutsideEShop(dealsSignDealOutsideEShopAdapter(params));
  }

  dealsSuggestPaperFormSigning(params?: DealsSuggestPaperFormSigningParams): Observable<boolean> {
    return this._api.dealsSuggestPaperFormSigning(dealsSuggestPaperFormSigningAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsUpdateDealDocumentsExternal(params?: DealsUpdateDealDocumentsExternalParams): Observable<void> {
    return this._api.dealsUpdateDealDocumentsExternal(dealsUpdateDealDocumentsExternalAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsUpdateFullDealPrice(params?: DealsUpdateFullDealPriceParams): Observable<void> {
    return this._api.dealsUpdateFullDealPrice(dealsUpdateFullDealPriceAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
