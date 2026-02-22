import { ActualDocumentInfoAlt } from '../models/actual-document-info-alt.interface';
import { actualDocumentInfoAltAdapter } from '../adapters/models/actual-document-info-alt.adapter';
import { ApiSearchResultOfDealInfoAlt } from '../models/api-search-result-of-deal-info-alt.interface';
import { apiSearchResultOfDealInfoAltAdapter } from '../adapters/models/api-search-result-of-deal-info-alt.adapter';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { certificateViewModelAdapter } from '../adapters/models/certificate-view-model.adapter';
import { DealApiService } from '../../swagger/services/deal-api.service';
import { DealApproveCustomerDealOnDemandOfProviderParams, dealApproveCustomerDealOnDemandOfProviderAdapter } from './params/deal-approve-customer-deal-on-demand-of-provider.params';
import { DealApproveCustomerDealParams, dealApproveCustomerDealAdapter } from './params/deal-approve-customer-deal.params';
import { DealCancelDealExternalParams, dealCancelDealExternalAdapter } from './params/deal-cancel-deal-external.params';
import { DealCancelDealParams, dealCancelDealAdapter } from './params/deal-cancel-deal.params';
import { DealChangeFormToPaperParams, dealChangeFormToPaperAdapter } from './params/deal-change-form-to-paper.params';
import { DealConcludeApprovedDealOnDemandOfCustomerExternalParams, dealConcludeApprovedDealOnDemandOfCustomerExternalAdapter } from './params/deal-conclude-approved-deal-on-demand-of-customer-external.params';
import { DealConcludeApprovedDealOnDemandOfCustomerParams, dealConcludeApprovedDealOnDemandOfCustomerAdapter } from './params/deal-conclude-approved-deal-on-demand-of-customer.params';
import { DealConcludeApprovedDealParams, dealConcludeApprovedDealAdapter } from './params/deal-conclude-approved-deal.params';
import { DealDownloadContractTemplateParams, dealDownloadContractTemplateAdapter } from './params/deal-download-contract-template.params';
import { DealDownloadSpecificationParams, dealDownloadSpecificationAdapter } from './params/deal-download-specification.params';
import { DealExportToExcelByFilterParams, dealExportToExcelByFilterAdapter } from './params/deal-export-to-excel-by-filter.params';
import { DealExportToExcelParams, dealExportToExcelAdapter } from './params/deal-export-to-excel.params';
import { DealGetActiveDealForOrderParams, dealGetActiveDealForOrderAdapter } from './params/deal-get-active-deal-for-order.params';
import { DealGetActiveDealForTradeParams, dealGetActiveDealForTradeAdapter } from './params/deal-get-active-deal-for-trade.params';
import { DealGetActualDocumentInfoRequestParams, dealGetActualDocumentInfoRequestAdapter } from './params/deal-get-actual-document-info-request.params';
import { DealGetDataForDealDocumentSignedByCustomerParams, dealGetDataForDealDocumentSignedByCustomerAdapter } from './params/deal-get-data-for-deal-document-signed-by-customer.params';
import { DealGetDataForDealDocumentSignedByParticipantParams, dealGetDataForDealDocumentSignedByParticipantAdapter } from './params/deal-get-data-for-deal-document-signed-by-participant.params';
import { DealGetDataToSignByCustomerForDealParams, dealGetDataToSignByCustomerForDealAdapter } from './params/deal-get-data-to-sign-by-customer-for-deal.params';
import { DealGetDataToSignByParticipantForDealParams, dealGetDataToSignByParticipantForDealAdapter } from './params/deal-get-data-to-sign-by-participant-for-deal.params';
import { DealGetDealParams, dealGetDealAdapter } from './params/deal-get-deal.params';
import { DealGetDealRejectionReasonsParams, dealGetDealRejectionReasonsAdapter } from './params/deal-get-deal-rejection-reasons.params';
import { DealGetDealsParams, dealGetDealsAdapter } from './params/deal-get-deals.params';
import { DealGetExportDealDocumentsParams, dealGetExportDealDocumentsAdapter } from './params/deal-get-export-deal-documents.params';
import { DealGetExternalDealsInfoByIdsParams, dealGetExternalDealsInfoByIdsAdapter } from './params/deal-get-external-deals-info-by-ids.params';
import { DealGetNextDealNumberIfTenantConfigAllowsParams, dealGetNextDealNumberIfTenantConfigAllowsAdapter } from './params/deal-get-next-deal-number-if-tenant-config-allows.params';
import { DealGetTradeDealForExternalParams, dealGetTradeDealForExternalAdapter } from './params/deal-get-trade-deal-for-external.params';
import { DealHashToSign } from '../models/deal-hash-to-sign.interface';
import { dealHashToSignAdapter } from '../adapters/models/deal-hash-to-sign.adapter';
import { DealRejectCustomerDealOnDemandOfProviderParams, dealRejectCustomerDealOnDemandOfProviderAdapter } from './params/deal-reject-customer-deal-on-demand-of-provider.params';
import { DealRejectCustomerDealParams, dealRejectCustomerDealAdapter } from './params/deal-reject-customer-deal.params';
import { DealSentForParticipantApproveExternalParams, dealSentForParticipantApproveExternalAdapter } from './params/deal-sent-for-participant-approve-external.params';
import { DealSentForParticipantApproveParams, dealSentForParticipantApproveAdapter } from './params/deal-sent-for-participant-approve.params';
import { DealSentForSignByParticipantParams, dealSentForSignByParticipantAdapter } from './params/deal-sent-for-sign-by-participant.params';
import { DealSentForSignOnDemandOfProviderParams, dealSentForSignOnDemandOfProviderAdapter } from './params/deal-sent-for-sign-on-demand-of-provider.params';
import { DealSetDealExecutedParams, dealSetDealExecutedAdapter } from './params/deal-set-deal-executed.params';
import { DealSetDealIdForOrdersLinkParams, dealSetDealIdForOrdersLinkAdapter } from './params/deal-set-deal-id-for-orders-link.params';
import { DealSetDealTerminatedParams, dealSetDealTerminatedAdapter } from './params/deal-set-deal-terminated.params';
import { DealSignDealOutsideEShopExternalParams, dealSignDealOutsideEShopExternalAdapter } from './params/deal-sign-deal-outside-e-shop-external.params';
import { DealSignDealOutsideEShopParams, dealSignDealOutsideEShopAdapter } from './params/deal-sign-deal-outside-e-shop.params';
import { DealSuggestElectronicFormSigningParams, dealSuggestElectronicFormSigningAdapter } from './params/deal-suggest-electronic-form-signing.params';
import { DealSuggestPaperFormSigningOnDemandOfProviderParams, dealSuggestPaperFormSigningOnDemandOfProviderAdapter } from './params/deal-suggest-paper-form-signing-on-demand-of-provider.params';
import { DealSuggestPaperFormSigningParams, dealSuggestPaperFormSigningAdapter } from './params/deal-suggest-paper-form-signing.params';
import { ExternalDealInfo } from '../models/external-deal-info.interface';
import { externalDealInfoAdapter } from '../adapters/models/external-deal-info.adapter';
import { FullDeal } from '../models/full-deal.interface';
import { fullDealAdapter } from '../adapters/models/full-deal.adapter';
import { HmaoExternalDealInfo } from '../models/hmao-external-deal-info.interface';
import { hmaoExternalDealInfoAdapter } from '../adapters/models/hmao-external-deal-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealRepository {
  private readonly _api = inject(DealApiService);

  dealApproveCustomerDeal(params?: DealApproveCustomerDealParams): Observable<boolean> {
    return this._api.dealApproveCustomerDeal(dealApproveCustomerDealAdapter(params));
  }

  dealApproveCustomerDealOnDemandOfProvider(params?: DealApproveCustomerDealOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealApproveCustomerDealOnDemandOfProvider(dealApproveCustomerDealOnDemandOfProviderAdapter(params));
  }

  dealCancelDeal(params?: DealCancelDealParams): Observable<boolean> {
    return this._api.dealCancelDeal(dealCancelDealAdapter(params));
  }

  dealCancelDealExternal(params?: DealCancelDealExternalParams): Observable<boolean> {
    return this._api.dealCancelDealExternal(dealCancelDealExternalAdapter(params));
  }

  dealChangeFormToPaper(params?: DealChangeFormToPaperParams): Observable<number> {
    return this._api.dealChangeFormToPaper(dealChangeFormToPaperAdapter(params));
  }

  dealConcludeApprovedDeal(params?: DealConcludeApprovedDealParams): Observable<boolean> {
    return this._api.dealConcludeApprovedDeal(dealConcludeApprovedDealAdapter(params));
  }

  dealConcludeApprovedDealOnDemandOfCustomer(params?: DealConcludeApprovedDealOnDemandOfCustomerParams): Observable<void> {
    return this._api.dealConcludeApprovedDealOnDemandOfCustomer(dealConcludeApprovedDealOnDemandOfCustomerAdapter(params));
  }

  dealConcludeApprovedDealOnDemandOfCustomerExternal(params?: DealConcludeApprovedDealOnDemandOfCustomerExternalParams): Observable<void> {
    return this._api.dealConcludeApprovedDealOnDemandOfCustomerExternal(dealConcludeApprovedDealOnDemandOfCustomerExternalAdapter(params));
  }

  dealDownloadContractTemplate(params: DealDownloadContractTemplateParams): Observable<Blob> {
    return this._api.dealDownloadContractTemplate(dealDownloadContractTemplateAdapter(params));
  }

  dealDownloadSpecification(params: DealDownloadSpecificationParams): Observable<Blob> {
    return this._api.dealDownloadSpecification(dealDownloadSpecificationAdapter(params));
  }

  dealExportToExcel(params?: DealExportToExcelParams): Observable<Blob> {
    return this._api.dealExportToExcel(dealExportToExcelAdapter(params));
  }

  dealExportToExcelByFilter(params?: DealExportToExcelByFilterParams): Observable<Blob> {
    return this._api.dealExportToExcelByFilter(dealExportToExcelByFilterAdapter(params));
  }

  dealGetActiveDealForOrder(params: DealGetActiveDealForOrderParams): Observable<FullDeal> {
    return this._api.dealGetActiveDealForOrder(dealGetActiveDealForOrderAdapter(params)).pipe(
      map((res) => fullDealAdapter(res))
    );
  }

  dealGetActiveDealForTrade(params: DealGetActiveDealForTradeParams): Observable<FullDeal> {
    return this._api.dealGetActiveDealForTrade(dealGetActiveDealForTradeAdapter(params)).pipe(
      map((res) => fullDealAdapter(res))
    );
  }

  dealGetActualDocumentInfoRequest(params?: DealGetActualDocumentInfoRequestParams): Observable<ActualDocumentInfoAlt> {
    return this._api.dealGetActualDocumentInfoRequest(dealGetActualDocumentInfoRequestAdapter(params)).pipe(
      map((res) => actualDocumentInfoAltAdapter(res))
    );
  }

  dealGetDataForDealDocumentSignedByCustomer(params?: DealGetDataForDealDocumentSignedByCustomerParams): Observable<CertificateViewModel> {
    return this._api.dealGetDataForDealDocumentSignedByCustomer(dealGetDataForDealDocumentSignedByCustomerAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res))
    );
  }

  dealGetDataForDealDocumentSignedByParticipant(params?: DealGetDataForDealDocumentSignedByParticipantParams): Observable<CertificateViewModel> {
    return this._api.dealGetDataForDealDocumentSignedByParticipant(dealGetDataForDealDocumentSignedByParticipantAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res))
    );
  }

  dealGetDataToSignByCustomerForDeal(params?: DealGetDataToSignByCustomerForDealParams): Observable<DealHashToSign> {
    return this._api.dealGetDataToSignByCustomerForDeal(dealGetDataToSignByCustomerForDealAdapter(params)).pipe(
      map((res) => dealHashToSignAdapter(res))
    );
  }

  dealGetDataToSignByParticipantForDeal(params?: DealGetDataToSignByParticipantForDealParams): Observable<DealHashToSign> {
    return this._api.dealGetDataToSignByParticipantForDeal(dealGetDataToSignByParticipantForDealAdapter(params)).pipe(
      map((res) => dealHashToSignAdapter(res))
    );
  }

  dealGetDeal(params: DealGetDealParams): Observable<FullDeal> {
    return this._api.dealGetDeal(dealGetDealAdapter(params)).pipe(
      map((res) => fullDealAdapter(res))
    );
  }

  dealGetDealRejectionReasons(params: DealGetDealRejectionReasonsParams): Observable<Blob> {
    return this._api.dealGetDealRejectionReasons(dealGetDealRejectionReasonsAdapter(params));
  }

  dealGetDeals(params?: DealGetDealsParams): Observable<ApiSearchResultOfDealInfoAlt> {
    return this._api.dealGetDeals(dealGetDealsAdapter(params)).pipe(
      map((res) => apiSearchResultOfDealInfoAltAdapter(res))
    );
  }

  dealGetExportDealDocuments(params?: DealGetExportDealDocumentsParams): Observable<Blob> {
    return this._api.dealGetExportDealDocuments(dealGetExportDealDocumentsAdapter(params));
  }

  dealGetExternalDealsInfoByIds(params?: DealGetExternalDealsInfoByIdsParams): Observable<HmaoExternalDealInfo[]> {
    return this._api.dealGetExternalDealsInfoByIds(dealGetExternalDealsInfoByIdsAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => hmaoExternalDealInfoAdapter(item)))
    );
  }

  dealGetNextDealNumberIfTenantConfigAllows(params?: DealGetNextDealNumberIfTenantConfigAllowsParams): Observable<string> {
    return this._api.dealGetNextDealNumberIfTenantConfigAllows(dealGetNextDealNumberIfTenantConfigAllowsAdapter(params));
  }

  dealGetTradeDealForExternal(params: DealGetTradeDealForExternalParams): Observable<ExternalDealInfo> {
    return this._api.dealGetTradeDealForExternal(dealGetTradeDealForExternalAdapter(params)).pipe(
      map((res) => externalDealInfoAdapter(res))
    );
  }

  dealRejectCustomerDeal(params?: DealRejectCustomerDealParams): Observable<boolean> {
    return this._api.dealRejectCustomerDeal(dealRejectCustomerDealAdapter(params));
  }

  dealRejectCustomerDealOnDemandOfProvider(params?: DealRejectCustomerDealOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealRejectCustomerDealOnDemandOfProvider(dealRejectCustomerDealOnDemandOfProviderAdapter(params));
  }

  dealSentForParticipantApprove(params?: DealSentForParticipantApproveParams): Observable<number> {
    return this._api.dealSentForParticipantApprove(dealSentForParticipantApproveAdapter(params));
  }

  dealSentForParticipantApproveExternal(params?: DealSentForParticipantApproveExternalParams): Observable<number> {
    return this._api.dealSentForParticipantApproveExternal(dealSentForParticipantApproveExternalAdapter(params));
  }

  dealSentForSignByParticipant(params?: DealSentForSignByParticipantParams): Observable<number> {
    return this._api.dealSentForSignByParticipant(dealSentForSignByParticipantAdapter(params));
  }

  dealSentForSignOnDemandOfProvider(params?: DealSentForSignOnDemandOfProviderParams): Observable<number> {
    return this._api.dealSentForSignOnDemandOfProvider(dealSentForSignOnDemandOfProviderAdapter(params));
  }

  dealSetDealExecuted(params: DealSetDealExecutedParams): Observable<Blob> {
    return this._api.dealSetDealExecuted(dealSetDealExecutedAdapter(params));
  }

  dealSetDealIdForOrdersLink(params?: DealSetDealIdForOrdersLinkParams): Observable<number> {
    return this._api.dealSetDealIdForOrdersLink(dealSetDealIdForOrdersLinkAdapter(params));
  }

  dealSetDealTerminated(params: DealSetDealTerminatedParams): Observable<Blob> {
    return this._api.dealSetDealTerminated(dealSetDealTerminatedAdapter(params));
  }

  dealSignDealOutsideEShop(params?: DealSignDealOutsideEShopParams): Observable<number> {
    return this._api.dealSignDealOutsideEShop(dealSignDealOutsideEShopAdapter(params));
  }

  dealSignDealOutsideEShopExternal(params?: DealSignDealOutsideEShopExternalParams): Observable<number> {
    return this._api.dealSignDealOutsideEShopExternal(dealSignDealOutsideEShopExternalAdapter(params));
  }

  dealSuggestElectronicFormSigning(params?: DealSuggestElectronicFormSigningParams): Observable<boolean> {
    return this._api.dealSuggestElectronicFormSigning(dealSuggestElectronicFormSigningAdapter(params));
  }

  dealSuggestPaperFormSigning(params?: DealSuggestPaperFormSigningParams): Observable<boolean> {
    return this._api.dealSuggestPaperFormSigning(dealSuggestPaperFormSigningAdapter(params));
  }

  dealSuggestPaperFormSigningOnDemandOfProvider(params?: DealSuggestPaperFormSigningOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealSuggestPaperFormSigningOnDemandOfProvider(dealSuggestPaperFormSigningOnDemandOfProviderAdapter(params));
  }

}
