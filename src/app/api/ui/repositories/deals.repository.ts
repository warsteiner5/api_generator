import { adaptCertificateViewModelToUI } from '../adapters/toUI/certificate-view-model.adapter';
import { adaptDealCountdownToUI } from '../adapters/toUI/deal-countdown.adapter';
import { adaptDealExtendedInfoAltToUI } from '../adapters/toUI/deal-extended-info-alt.adapter';
import { adaptDealFullPriceChangeToUI } from '../adapters/toUI/deal-full-price-change.adapter';
import { adaptDealHashToSignToUI } from '../adapters/toUI/deal-hash-to-sign.adapter';
import { adaptDealInfoAltToUI } from '../adapters/toUI/deal-info-alt.adapter';
import { adaptDealListItemToUI } from '../adapters/toUI/deal-list-item.adapter';
import { adaptDiscussionToUI } from '../adapters/toUI/discussion.adapter';
import { adaptDocumentPackToUI } from '../adapters/toUI/document-pack.adapter';
import { adaptEisIntegrationResultToUI } from '../adapters/toUI/eis-integration-result.adapter';
import { adaptIDiscussionHistoryToUI } from '../adapters/toUI/i-discussion-history.adapter';
import { adaptMarketDealToUI } from '../adapters/toUI/market-deal.adapter';
import { adaptMarketFullDealToUI } from '../adapters/toUI/market-full-deal.adapter';
import { adaptMarketFullOrderDealToUI } from '../adapters/toUI/market-full-order-deal.adapter';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { DealCountdown } from '../models/deal-countdown.interface';
import { DealExtendedInfoAlt } from '../models/deal-extended-info-alt.interface';
import { DealFullPriceChange } from '../models/deal-full-price-change.interface';
import { DealHashToSign } from '../models/deal-hash-to-sign.interface';
import { DealInfoAlt } from '../models/deal-info-alt.interface';
import { DealListItem } from '../models/deal-list-item.interface';
import { DealsAddDealProvisionBySupplierParams, dealsAddDealProvisionBySupplierParamsAdapter } from './params/deals-add-deal-provision-by-supplier.params';
import { DealsAddPaperDealDocumentsParams, dealsAddPaperDealDocumentsParamsAdapter } from './params/deals-add-paper-deal-documents.params';
import { DealsApiService } from '../../swagger/services/deals-api.service';
import { DealsApproveCustomerDealParams, dealsApproveCustomerDealParamsAdapter } from './params/deals-approve-customer-deal.params';
import { DealsAutoCreateDealsParams, dealsAutoCreateDealsParamsAdapter } from './params/deals-auto-create-deals.params';
import { DealsCancelDealParams, dealsCancelDealParamsAdapter } from './params/deals-cancel-deal.params';
import { DealsCancelExternalDealParams, dealsCancelExternalDealParamsAdapter } from './params/deals-cancel-external-deal.params';
import { DealsChangeContractByCustomerParams, dealsChangeContractByCustomerParamsAdapter } from './params/deals-change-contract-by-customer.params';
import { DealsChangeContractBySupplierParams, dealsChangeContractBySupplierParamsAdapter } from './params/deals-change-contract-by-supplier.params';
import { DealsChangeDealByParticipantParams, dealsChangeDealByParticipantParamsAdapter } from './params/deals-change-deal-by-participant.params';
import { DealsChangeFormParams, dealsChangeFormParamsAdapter } from './params/deals-change-form.params';
import { DealsChangeFormToPaperByCustomerParams, dealsChangeFormToPaperByCustomerParamsAdapter } from './params/deals-change-form-to-paper-by-customer.params';
import { DealsChangeFormToPaperParams, dealsChangeFormToPaperParamsAdapter } from './params/deals-change-form-to-paper.params';
import { DealsConcludeApprovedDealParams, dealsConcludeApprovedDealParamsAdapter } from './params/deals-conclude-approved-deal.params';
import { DealsConcludeApprovedExternalDealParams, dealsConcludeApprovedExternalDealParamsAdapter } from './params/deals-conclude-approved-external-deal.params';
import { DealsCreateDealExternalParams, dealsCreateDealExternalParamsAdapter } from './params/deals-create-deal-external.params';
import { DealsCreateDealInternalParams, dealsCreateDealInternalParamsAdapter } from './params/deals-create-deal-internal.params';
import { DealsCreateDealParams, dealsCreateDealParamsAdapter } from './params/deals-create-deal.params';
import { DealsCreateDealsExternalParams, dealsCreateDealsExternalParamsAdapter } from './params/deals-create-deals-external.params';
import { DealsCreateDealsParams, dealsCreateDealsParamsAdapter } from './params/deals-create-deals.params';
import { DealsCreateDifferenceProtocolBySupplierParams, dealsCreateDifferenceProtocolBySupplierParamsAdapter } from './params/deals-create-difference-protocol-by-supplier.params';
import { DealsDoNotConcludeDealParams, dealsDoNotConcludeDealParamsAdapter } from './params/deals-do-not-conclude-deal.params';
import { DealsEditWorkGroupsParams, dealsEditWorkGroupsParamsAdapter } from './params/deals-edit-work-groups.params';
import { DealsExportDealsInfoIntoExcelParams, dealsExportDealsInfoIntoExcelParamsAdapter } from './params/deals-export-deals-info-into-excel.params';
import { DealsGenerateDealNumberParams, dealsGenerateDealNumberParamsAdapter } from './params/deals-generate-deal-number.params';
import { DealsGetCountDownTimeParams, dealsGetCountDownTimeParamsAdapter } from './params/deals-get-count-down-time.params';
import { DealsGetCustomerSignInfoParams, dealsGetCustomerSignInfoParamsAdapter } from './params/deals-get-customer-sign-info.params';
import { DealsGetDataToSignByCustomerForDealParams, dealsGetDataToSignByCustomerForDealParamsAdapter } from './params/deals-get-data-to-sign-by-customer-for-deal.params';
import { DealsGetDataToSignByParticipantForDealParams, dealsGetDataToSignByParticipantForDealParamsAdapter } from './params/deals-get-data-to-sign-by-participant-for-deal.params';
import { DealsGetDealDocumentPacksParams, dealsGetDealDocumentPacksParamsAdapter } from './params/deals-get-deal-document-packs.params';
import { DealsGetDealExtendedInfoParams, dealsGetDealExtendedInfoParamsAdapter } from './params/deals-get-deal-extended-info.params';
import { DealsGetDealParams, dealsGetDealParamsAdapter } from './params/deals-get-deal.params';
import { DealsGetDeals2Params, dealsGetDeals2ParamsAdapter } from './params/deals-get-deals-2.params';
import { DealsGetDealsParams, dealsGetDealsParamsAdapter } from './params/deals-get-deals.params';
import { DealsGetExportDealDocumentsFileParams, dealsGetExportDealDocumentsFileParamsAdapter } from './params/deals-get-export-deal-documents-file.params';
import { DealsGetExportDealDocumentsParams, dealsGetExportDealDocumentsParamsAdapter } from './params/deals-get-export-deal-documents.params';
import { DealsGetLastDealFullPriceChangeParams, dealsGetLastDealFullPriceChangeParamsAdapter } from './params/deals-get-last-deal-full-price-change.params';
import { DealsGetSupplierSignInfoParams, dealsGetSupplierSignInfoParamsAdapter } from './params/deals-get-supplier-sign-info.params';
import { DealsGetTradeActualDealParams, dealsGetTradeActualDealParamsAdapter } from './params/deals-get-trade-actual-deal.params';
import { DealsGetTradeActualDealsParams, dealsGetTradeActualDealsParamsAdapter } from './params/deals-get-trade-actual-deals.params';
import { DealsGetTradeAndDealDiscussionHistoryParams, dealsGetTradeAndDealDiscussionHistoryParamsAdapter } from './params/deals-get-trade-and-deal-discussion-history.params';
import { DealsGetTradeAndDealHistoryParams, dealsGetTradeAndDealHistoryParamsAdapter } from './params/deals-get-trade-and-deal-history.params';
import { DealsGetTradeHistoryParams, dealsGetTradeHistoryParamsAdapter } from './params/deals-get-trade-history.params';
import { DealsRejectChangeFormToPaperParams, dealsRejectChangeFormToPaperParamsAdapter } from './params/deals-reject-change-form-to-paper.params';
import { DealsRejectCustomerDealParams, dealsRejectCustomerDealParamsAdapter } from './params/deals-reject-customer-deal.params';
import { DealsRevokeDealByCustomerParams, dealsRevokeDealByCustomerParamsAdapter } from './params/deals-revoke-deal-by-customer.params';
import { DealsRevokeDealBySupplierParams, dealsRevokeDealBySupplierParamsAdapter } from './params/deals-revoke-deal-by-supplier.params';
import { DealsReworkDealParams, dealsReworkDealParamsAdapter } from './params/deals-rework-deal.params';
import { DealsSaveDealEisDataDraftParams, dealsSaveDealEisDataDraftParamsAdapter } from './params/deals-save-deal-eis-data-draft.params';
import { DealsSaveDealExtendedInfoParams, dealsSaveDealExtendedInfoParamsAdapter } from './params/deals-save-deal-extended-info.params';
import { DealsSendContractFromCustomerToSupplierParams, dealsSendContractFromCustomerToSupplierParamsAdapter } from './params/deals-send-contract-from-customer-to-supplier.params';
import { DealsSendContractFromSupplierToCustomerParams, dealsSendContractFromSupplierToCustomerParamsAdapter } from './params/deals-send-contract-from-supplier-to-customer.params';
import { DealsSendDealToEisParams, dealsSendDealToEisParamsAdapter } from './params/deals-send-deal-to-eis.params';
import { DealsSentForParticipantApproveExternalParams, dealsSentForParticipantApproveExternalParamsAdapter } from './params/deals-sent-for-participant-approve-external.params';
import { DealsSentForParticipantApproveParams, dealsSentForParticipantApproveParamsAdapter } from './params/deals-sent-for-participant-approve.params';
import { DealsSetDealExecutedParams, dealsSetDealExecutedParamsAdapter } from './params/deals-set-deal-executed.params';
import { DealsSetDealTerminatedParams, dealsSetDealTerminatedParamsAdapter } from './params/deals-set-deal-terminated.params';
import { DealsSignDealOutsideEShopParams, dealsSignDealOutsideEShopParamsAdapter } from './params/deals-sign-deal-outside-e-shop.params';
import { DealsSuggestPaperFormSigningParams, dealsSuggestPaperFormSigningParamsAdapter } from './params/deals-suggest-paper-form-signing.params';
import { DealsUpdateDealDocumentsExternalParams, dealsUpdateDealDocumentsExternalParamsAdapter } from './params/deals-update-deal-documents-external.params';
import { DealsUpdateFullDealPriceParams, dealsUpdateFullDealPriceParamsAdapter } from './params/deals-update-full-deal-price.params';
import { Discussion } from '../models/discussion.interface';
import { DocumentPack } from '../models/document-pack.interface';
import { EisIntegrationResult } from '../models/eis-integration-result.interface';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketDeal } from '../models/market-deal.interface';
import { MarketFullDeal } from '../models/market-full-deal.interface';
import { MarketFullOrderDeal } from '../models/market-full-order-deal.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealsRepository {
  private readonly _api = inject(DealsApiService);

  dealsAddDealProvisionBySupplier(params: DealsAddDealProvisionBySupplierParams): Observable<void> {
    return this._api.dealsAddDealProvisionBySupplier(dealsAddDealProvisionBySupplierParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsAddPaperDealDocuments(params: DealsAddPaperDealDocumentsParams): Observable<void> {
    return this._api.dealsAddPaperDealDocuments(dealsAddPaperDealDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsApproveCustomerDeal(params?: DealsApproveCustomerDealParams): Observable<boolean> {
    return this._api.dealsApproveCustomerDeal(dealsApproveCustomerDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsAutoCreateDeals(params: DealsAutoCreateDealsParams): Observable<number[]> {
    return this._api.dealsAutoCreateDeals(dealsAutoCreateDealsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCancelDeal(params?: DealsCancelDealParams): Observable<boolean> {
    return this._api.dealsCancelDeal(dealsCancelDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsCancelExternalDeal(params: DealsCancelExternalDealParams): Observable<boolean> {
    return this._api.dealsCancelExternalDeal(dealsCancelExternalDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsChangeContractByCustomer(params: DealsChangeContractByCustomerParams): Observable<number> {
    return this._api.dealsChangeContractByCustomer(dealsChangeContractByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeContractBySupplier(params: DealsChangeContractBySupplierParams): Observable<number> {
    return this._api.dealsChangeContractBySupplier(dealsChangeContractBySupplierParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeDealByParticipant(params?: DealsChangeDealByParticipantParams): Observable<boolean> {
    return this._api.dealsChangeDealByParticipant(dealsChangeDealByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsChangeForm(params?: DealsChangeFormParams): Observable<void> {
    return this._api.dealsChangeForm(dealsChangeFormParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsChangeFormToPaper(params?: DealsChangeFormToPaperParams): Observable<number> {
    return this._api.dealsChangeFormToPaper(dealsChangeFormToPaperParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsChangeFormToPaperByCustomer(params: DealsChangeFormToPaperByCustomerParams): Observable<void> {
    return this._api.dealsChangeFormToPaperByCustomer(dealsChangeFormToPaperByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsConcludeApprovedDeal(params?: DealsConcludeApprovedDealParams): Observable<boolean> {
    return this._api.dealsConcludeApprovedDeal(dealsConcludeApprovedDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsConcludeApprovedExternalDeal(params: DealsConcludeApprovedExternalDealParams): Observable<boolean> {
    return this._api.dealsConcludeApprovedExternalDeal(dealsConcludeApprovedExternalDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsCreateDeal(params?: DealsCreateDealParams): Observable<number> {
    return this._api.dealsCreateDeal(dealsCreateDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDealExternal(params?: DealsCreateDealExternalParams): Observable<number> {
    return this._api.dealsCreateDealExternal(dealsCreateDealExternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDealInternal(params?: DealsCreateDealInternalParams): Observable<number> {
    return this._api.dealsCreateDealInternal(dealsCreateDealInternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsCreateDeals(params?: DealsCreateDealsParams): Observable<number[]> {
    return this._api.dealsCreateDeals(dealsCreateDealsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCreateDealsExternal(params?: DealsCreateDealsExternalParams): Observable<number[]> {
    return this._api.dealsCreateDealsExternal(dealsCreateDealsExternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  dealsCreateDifferenceProtocolBySupplier(params: DealsCreateDifferenceProtocolBySupplierParams): Observable<void> {
    return this._api.dealsCreateDifferenceProtocolBySupplier(dealsCreateDifferenceProtocolBySupplierParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsDoNotConcludeDeal(params?: DealsDoNotConcludeDealParams): Observable<boolean> {
    return this._api.dealsDoNotConcludeDeal(dealsDoNotConcludeDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsEditWorkGroups(params?: DealsEditWorkGroupsParams): Observable<boolean> {
    return this._api.dealsEditWorkGroups(dealsEditWorkGroupsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsExportDealsInfoIntoExcel(params?: DealsExportDealsInfoIntoExcelParams): Observable<string> {
    return this._api.dealsExportDealsInfoIntoExcel(dealsExportDealsInfoIntoExcelParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGenerateDealNumber(params?: DealsGenerateDealNumberParams): Observable<string> {
    return this._api.dealsGenerateDealNumber(dealsGenerateDealNumberParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGetCountDownTime(params: DealsGetCountDownTimeParams): Observable<DealCountdown> {
    return this._api.dealsGetCountDownTime(dealsGetCountDownTimeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealCountdownToUI(res?.data))
    );
  }

  dealsGetCustomerSignInfo(params?: DealsGetCustomerSignInfoParams): Observable<CertificateViewModel> {
    return this._api.dealsGetCustomerSignInfo(dealsGetCustomerSignInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res?.data))
    );
  }

  dealsGetDataToSignByCustomerForDeal(params?: DealsGetDataToSignByCustomerForDealParams): Observable<DealHashToSign> {
    return this._api.dealsGetDataToSignByCustomerForDeal(dealsGetDataToSignByCustomerForDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealHashToSignToUI(res?.data))
    );
  }

  dealsGetDataToSignByParticipantForDeal(params?: DealsGetDataToSignByParticipantForDealParams): Observable<DealHashToSign> {
    return this._api.dealsGetDataToSignByParticipantForDeal(dealsGetDataToSignByParticipantForDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealHashToSignToUI(res?.data))
    );
  }

  dealsGetDeal(params: DealsGetDealParams): Observable<MarketFullOrderDeal> {
    return this._api.dealsGetDeal(dealsGetDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketFullOrderDealToUI(res?.data))
    );
  }

  dealsGetDealDocumentPacks(params: DealsGetDealDocumentPacksParams): Observable<DocumentPack[]> {
    return this._api.dealsGetDealDocumentPacks(dealsGetDealDocumentPacksParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDocumentPackToUI(item)))
    );
  }

  dealsGetDealExtendedInfo(params: DealsGetDealExtendedInfoParams): Observable<DealExtendedInfoAlt> {
    return this._api.dealsGetDealExtendedInfo(dealsGetDealExtendedInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealExtendedInfoAltToUI(res?.data))
    );
  }

  dealsGetDeals(params?: DealsGetDealsParams): Observable<DealInfoAlt[]> {
    return this._api.dealsGetDeals(dealsGetDealsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptDealInfoAltToUI(item)))
    );
  }

  dealsGetDeals2(params?: DealsGetDeals2Params): Observable<DealListItem[]> {
    return this._api.dealsGetDeals2(dealsGetDeals2ParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptDealListItemToUI(item)))
    );
  }

  dealsGetExportDealDocuments(params: DealsGetExportDealDocumentsParams): Observable<string> {
    return this._api.dealsGetExportDealDocuments(dealsGetExportDealDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  dealsGetExportDealDocumentsFile(params: DealsGetExportDealDocumentsFileParams): Observable<Blob> {
    return this._api.dealsGetExportDealDocumentsFile(dealsGetExportDealDocumentsFileParamsAdapter.adapt(params));
  }

  dealsGetLastDealFullPriceChange(params: DealsGetLastDealFullPriceChangeParams): Observable<DealFullPriceChange> {
    return this._api.dealsGetLastDealFullPriceChange(dealsGetLastDealFullPriceChangeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealFullPriceChangeToUI(res?.data))
    );
  }

  dealsGetSupplierSignInfo(params?: DealsGetSupplierSignInfoParams): Observable<CertificateViewModel> {
    return this._api.dealsGetSupplierSignInfo(dealsGetSupplierSignInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res?.data))
    );
  }

  dealsGetTradeActualDeal(params: DealsGetTradeActualDealParams): Observable<MarketDeal> {
    return this._api.dealsGetTradeActualDeal(dealsGetTradeActualDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketDealToUI(res?.data))
    );
  }

  dealsGetTradeActualDeals(params: DealsGetTradeActualDealsParams): Observable<MarketDeal[]> {
    return this._api.dealsGetTradeActualDeals(dealsGetTradeActualDealsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketDealToUI(item)))
    );
  }

  dealsGetTradeAndDealDiscussionHistory(params: DealsGetTradeAndDealDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.dealsGetTradeAndDealDiscussionHistory(dealsGetTradeAndDealDiscussionHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIDiscussionHistoryToUI(item)))
    );
  }

  dealsGetTradeAndDealHistory(params: DealsGetTradeAndDealHistoryParams): Observable<Discussion[]> {
    return this._api.dealsGetTradeAndDealHistory(dealsGetTradeAndDealHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  dealsGetTradeHistory(params: DealsGetTradeHistoryParams): Observable<Discussion[]> {
    return this._api.dealsGetTradeHistory(dealsGetTradeHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  dealsRejectChangeFormToPaper(params?: DealsRejectChangeFormToPaperParams): Observable<boolean> {
    return this._api.dealsRejectChangeFormToPaper(dealsRejectChangeFormToPaperParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsRejectCustomerDeal(params?: DealsRejectCustomerDealParams): Observable<boolean> {
    return this._api.dealsRejectCustomerDeal(dealsRejectCustomerDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsRevokeDealByCustomer(params: DealsRevokeDealByCustomerParams): Observable<void> {
    return this._api.dealsRevokeDealByCustomer(dealsRevokeDealByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsRevokeDealBySupplier(params: DealsRevokeDealBySupplierParams): Observable<void> {
    return this._api.dealsRevokeDealBySupplier(dealsRevokeDealBySupplierParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsReworkDeal(params?: DealsReworkDealParams): Observable<boolean> {
    return this._api.dealsReworkDeal(dealsReworkDealParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsSaveDealEisDataDraft(params?: DealsSaveDealEisDataDraftParams): Observable<void> {
    return this._api.dealsSaveDealEisDataDraft(dealsSaveDealEisDataDraftParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsSaveDealExtendedInfo(params?: DealsSaveDealExtendedInfoParams): Observable<void> {
    return this._api.dealsSaveDealExtendedInfo(dealsSaveDealExtendedInfoParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsSendContractFromCustomerToSupplier(params: DealsSendContractFromCustomerToSupplierParams): Observable<number> {
    return this._api.dealsSendContractFromCustomerToSupplier(dealsSendContractFromCustomerToSupplierParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSendContractFromSupplierToCustomer(params: DealsSendContractFromSupplierToCustomerParams): Observable<number> {
    return this._api.dealsSendContractFromSupplierToCustomer(dealsSendContractFromSupplierToCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSendDealToEis(params?: DealsSendDealToEisParams): Observable<EisIntegrationResult> {
    return this._api.dealsSendDealToEis(dealsSendDealToEisParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEisIntegrationResultToUI(res?.data))
    );
  }

  dealsSentForParticipantApprove(params?: DealsSentForParticipantApproveParams): Observable<number> {
    return this._api.dealsSentForParticipantApprove(dealsSentForParticipantApproveParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSentForParticipantApproveExternal(params?: DealsSentForParticipantApproveExternalParams): Observable<number> {
    return this._api.dealsSentForParticipantApproveExternal(dealsSentForParticipantApproveExternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  dealsSetDealExecuted(params: DealsSetDealExecutedParams): Observable<MarketFullDeal> {
    return this._api.dealsSetDealExecuted(dealsSetDealExecutedParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketFullDealToUI(res?.data))
    );
  }

  dealsSetDealTerminated(params: DealsSetDealTerminatedParams): Observable<MarketFullDeal> {
    return this._api.dealsSetDealTerminated(dealsSetDealTerminatedParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketFullDealToUI(res?.data))
    );
  }

  dealsSignDealOutsideEShop(params?: DealsSignDealOutsideEShopParams): Observable<number> {
    return this._api.dealsSignDealOutsideEShop(dealsSignDealOutsideEShopParamsAdapter.adapt(params));
  }

  dealsSuggestPaperFormSigning(params?: DealsSuggestPaperFormSigningParams): Observable<boolean> {
    return this._api.dealsSuggestPaperFormSigning(dealsSuggestPaperFormSigningParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  dealsUpdateDealDocumentsExternal(params?: DealsUpdateDealDocumentsExternalParams): Observable<void> {
    return this._api.dealsUpdateDealDocumentsExternal(dealsUpdateDealDocumentsExternalParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  dealsUpdateFullDealPrice(params?: DealsUpdateFullDealPriceParams): Observable<void> {
    return this._api.dealsUpdateFullDealPrice(dealsUpdateFullDealPriceParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
