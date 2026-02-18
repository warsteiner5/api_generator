import { ActualDocumentInfoAlt } from '../models/actual-document-info-alt.interface';
import { adaptActualDocumentInfoAltToUI } from '../adapters/toUI/actual-document-info-alt.adapter';
import { adaptApiSearchResultOfDealInfoAltToUI } from '../adapters/toUI/api-search-result-of-deal-info-alt.adapter';
import { adaptCertificateViewModelToUI } from '../adapters/toUI/certificate-view-model.adapter';
import { adaptDealHashToSignToUI } from '../adapters/toUI/deal-hash-to-sign.adapter';
import { adaptExternalDealInfoToUI } from '../adapters/toUI/external-deal-info.adapter';
import { adaptFullDealToUI } from '../adapters/toUI/full-deal.adapter';
import { adaptHmaoExternalDealInfoToUI } from '../adapters/toUI/hmao-external-deal-info.adapter';
import { ApiSearchResultOfDealInfoAlt } from '../models/api-search-result-of-deal-info-alt.interface';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { DealApiService } from '../../swagger/services/deal-api.service';
import { DealApproveCustomerDealOnDemandOfProviderParams, dealApproveCustomerDealOnDemandOfProviderParamsAdapter } from './params/deal-approve-customer-deal-on-demand-of-provider.params';
import { DealApproveCustomerDealParams, dealApproveCustomerDealParamsAdapter } from './params/deal-approve-customer-deal.params';
import { DealCancelDealExternalParams, dealCancelDealExternalParamsAdapter } from './params/deal-cancel-deal-external.params';
import { DealCancelDealParams, dealCancelDealParamsAdapter } from './params/deal-cancel-deal.params';
import { DealChangeFormToPaperParams, dealChangeFormToPaperParamsAdapter } from './params/deal-change-form-to-paper.params';
import { DealConcludeApprovedDealOnDemandOfCustomerExternalParams, dealConcludeApprovedDealOnDemandOfCustomerExternalParamsAdapter } from './params/deal-conclude-approved-deal-on-demand-of-customer-external.params';
import { DealConcludeApprovedDealOnDemandOfCustomerParams, dealConcludeApprovedDealOnDemandOfCustomerParamsAdapter } from './params/deal-conclude-approved-deal-on-demand-of-customer.params';
import { DealConcludeApprovedDealParams, dealConcludeApprovedDealParamsAdapter } from './params/deal-conclude-approved-deal.params';
import { DealDownloadContractTemplateParams, dealDownloadContractTemplateParamsAdapter } from './params/deal-download-contract-template.params';
import { DealDownloadSpecificationParams, dealDownloadSpecificationParamsAdapter } from './params/deal-download-specification.params';
import { DealExportToExcelByFilterParams, dealExportToExcelByFilterParamsAdapter } from './params/deal-export-to-excel-by-filter.params';
import { DealExportToExcelParams, dealExportToExcelParamsAdapter } from './params/deal-export-to-excel.params';
import { DealGetActiveDealForOrderParams, dealGetActiveDealForOrderParamsAdapter } from './params/deal-get-active-deal-for-order.params';
import { DealGetActiveDealForTradeParams, dealGetActiveDealForTradeParamsAdapter } from './params/deal-get-active-deal-for-trade.params';
import { DealGetActualDocumentInfoRequestParams, dealGetActualDocumentInfoRequestParamsAdapter } from './params/deal-get-actual-document-info-request.params';
import { DealGetDataForDealDocumentSignedByCustomerParams, dealGetDataForDealDocumentSignedByCustomerParamsAdapter } from './params/deal-get-data-for-deal-document-signed-by-customer.params';
import { DealGetDataForDealDocumentSignedByParticipantParams, dealGetDataForDealDocumentSignedByParticipantParamsAdapter } from './params/deal-get-data-for-deal-document-signed-by-participant.params';
import { DealGetDataToSignByCustomerForDealParams, dealGetDataToSignByCustomerForDealParamsAdapter } from './params/deal-get-data-to-sign-by-customer-for-deal.params';
import { DealGetDataToSignByParticipantForDealParams, dealGetDataToSignByParticipantForDealParamsAdapter } from './params/deal-get-data-to-sign-by-participant-for-deal.params';
import { DealGetDealParams, dealGetDealParamsAdapter } from './params/deal-get-deal.params';
import { DealGetDealRejectionReasonsParams, dealGetDealRejectionReasonsParamsAdapter } from './params/deal-get-deal-rejection-reasons.params';
import { DealGetDealsParams, dealGetDealsParamsAdapter } from './params/deal-get-deals.params';
import { DealGetExportDealDocumentsParams, dealGetExportDealDocumentsParamsAdapter } from './params/deal-get-export-deal-documents.params';
import { DealGetExternalDealsInfoByIdsParams, dealGetExternalDealsInfoByIdsParamsAdapter } from './params/deal-get-external-deals-info-by-ids.params';
import { DealGetNextDealNumberIfTenantConfigAllowsParams, dealGetNextDealNumberIfTenantConfigAllowsParamsAdapter } from './params/deal-get-next-deal-number-if-tenant-config-allows.params';
import { DealGetTradeDealForExternalParams, dealGetTradeDealForExternalParamsAdapter } from './params/deal-get-trade-deal-for-external.params';
import { DealHashToSign } from '../models/deal-hash-to-sign.interface';
import { DealRejectCustomerDealOnDemandOfProviderParams, dealRejectCustomerDealOnDemandOfProviderParamsAdapter } from './params/deal-reject-customer-deal-on-demand-of-provider.params';
import { DealRejectCustomerDealParams, dealRejectCustomerDealParamsAdapter } from './params/deal-reject-customer-deal.params';
import { DealSentForParticipantApproveExternalParams, dealSentForParticipantApproveExternalParamsAdapter } from './params/deal-sent-for-participant-approve-external.params';
import { DealSentForParticipantApproveParams, dealSentForParticipantApproveParamsAdapter } from './params/deal-sent-for-participant-approve.params';
import { DealSentForSignByParticipantParams, dealSentForSignByParticipantParamsAdapter } from './params/deal-sent-for-sign-by-participant.params';
import { DealSentForSignOnDemandOfProviderParams, dealSentForSignOnDemandOfProviderParamsAdapter } from './params/deal-sent-for-sign-on-demand-of-provider.params';
import { DealSetDealExecutedParams, dealSetDealExecutedParamsAdapter } from './params/deal-set-deal-executed.params';
import { DealSetDealIdForOrdersLinkParams, dealSetDealIdForOrdersLinkParamsAdapter } from './params/deal-set-deal-id-for-orders-link.params';
import { DealSetDealTerminatedParams, dealSetDealTerminatedParamsAdapter } from './params/deal-set-deal-terminated.params';
import { DealSignDealOutsideEShopExternalParams, dealSignDealOutsideEShopExternalParamsAdapter } from './params/deal-sign-deal-outside-e-shop-external.params';
import { DealSignDealOutsideEShopParams, dealSignDealOutsideEShopParamsAdapter } from './params/deal-sign-deal-outside-e-shop.params';
import { DealSuggestElectronicFormSigningParams, dealSuggestElectronicFormSigningParamsAdapter } from './params/deal-suggest-electronic-form-signing.params';
import { DealSuggestPaperFormSigningOnDemandOfProviderParams, dealSuggestPaperFormSigningOnDemandOfProviderParamsAdapter } from './params/deal-suggest-paper-form-signing-on-demand-of-provider.params';
import { DealSuggestPaperFormSigningParams, dealSuggestPaperFormSigningParamsAdapter } from './params/deal-suggest-paper-form-signing.params';
import { ExternalDealInfo } from '../models/external-deal-info.interface';
import { FullDeal } from '../models/full-deal.interface';
import { HmaoExternalDealInfo } from '../models/hmao-external-deal-info.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DealRepository {
  private readonly _api = inject(DealApiService);

  dealApproveCustomerDeal(params?: DealApproveCustomerDealParams): Observable<boolean> {
    return this._api.dealApproveCustomerDeal(dealApproveCustomerDealParamsAdapter.adapt(params));
  }

  dealApproveCustomerDealOnDemandOfProvider(params?: DealApproveCustomerDealOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealApproveCustomerDealOnDemandOfProvider(dealApproveCustomerDealOnDemandOfProviderParamsAdapter.adapt(params));
  }

  dealCancelDeal(params?: DealCancelDealParams): Observable<boolean> {
    return this._api.dealCancelDeal(dealCancelDealParamsAdapter.adapt(params));
  }

  dealCancelDealExternal(params?: DealCancelDealExternalParams): Observable<boolean> {
    return this._api.dealCancelDealExternal(dealCancelDealExternalParamsAdapter.adapt(params));
  }

  dealChangeFormToPaper(params?: DealChangeFormToPaperParams): Observable<number> {
    return this._api.dealChangeFormToPaper(dealChangeFormToPaperParamsAdapter.adapt(params));
  }

  dealConcludeApprovedDeal(params?: DealConcludeApprovedDealParams): Observable<boolean> {
    return this._api.dealConcludeApprovedDeal(dealConcludeApprovedDealParamsAdapter.adapt(params));
  }

  dealConcludeApprovedDealOnDemandOfCustomer(params?: DealConcludeApprovedDealOnDemandOfCustomerParams): Observable<void> {
    return this._api.dealConcludeApprovedDealOnDemandOfCustomer(dealConcludeApprovedDealOnDemandOfCustomerParamsAdapter.adapt(params));
  }

  dealConcludeApprovedDealOnDemandOfCustomerExternal(params?: DealConcludeApprovedDealOnDemandOfCustomerExternalParams): Observable<void> {
    return this._api.dealConcludeApprovedDealOnDemandOfCustomerExternal(dealConcludeApprovedDealOnDemandOfCustomerExternalParamsAdapter.adapt(params));
  }

  dealDownloadContractTemplate(params: DealDownloadContractTemplateParams): Observable<Blob> {
    return this._api.dealDownloadContractTemplate(dealDownloadContractTemplateParamsAdapter.adapt(params));
  }

  dealDownloadSpecification(params: DealDownloadSpecificationParams): Observable<Blob> {
    return this._api.dealDownloadSpecification(dealDownloadSpecificationParamsAdapter.adapt(params));
  }

  dealExportToExcel(params?: DealExportToExcelParams): Observable<Blob> {
    return this._api.dealExportToExcel(dealExportToExcelParamsAdapter.adapt(params));
  }

  dealExportToExcelByFilter(params?: DealExportToExcelByFilterParams): Observable<Blob> {
    return this._api.dealExportToExcelByFilter(dealExportToExcelByFilterParamsAdapter.adapt(params));
  }

  dealGetActiveDealForOrder(params: DealGetActiveDealForOrderParams): Observable<FullDeal> {
    return this._api.dealGetActiveDealForOrder(dealGetActiveDealForOrderParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFullDealToUI(res))
    );
  }

  dealGetActiveDealForTrade(params: DealGetActiveDealForTradeParams): Observable<FullDeal> {
    return this._api.dealGetActiveDealForTrade(dealGetActiveDealForTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFullDealToUI(res))
    );
  }

  dealGetActualDocumentInfoRequest(params?: DealGetActualDocumentInfoRequestParams): Observable<ActualDocumentInfoAlt> {
    return this._api.dealGetActualDocumentInfoRequest(dealGetActualDocumentInfoRequestParamsAdapter.adapt(params)).pipe(
      map((res) => adaptActualDocumentInfoAltToUI(res))
    );
  }

  dealGetDataForDealDocumentSignedByCustomer(params?: DealGetDataForDealDocumentSignedByCustomerParams): Observable<CertificateViewModel> {
    return this._api.dealGetDataForDealDocumentSignedByCustomer(dealGetDataForDealDocumentSignedByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res))
    );
  }

  dealGetDataForDealDocumentSignedByParticipant(params?: DealGetDataForDealDocumentSignedByParticipantParams): Observable<CertificateViewModel> {
    return this._api.dealGetDataForDealDocumentSignedByParticipant(dealGetDataForDealDocumentSignedByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res))
    );
  }

  dealGetDataToSignByCustomerForDeal(params?: DealGetDataToSignByCustomerForDealParams): Observable<DealHashToSign> {
    return this._api.dealGetDataToSignByCustomerForDeal(dealGetDataToSignByCustomerForDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealHashToSignToUI(res))
    );
  }

  dealGetDataToSignByParticipantForDeal(params?: DealGetDataToSignByParticipantForDealParams): Observable<DealHashToSign> {
    return this._api.dealGetDataToSignByParticipantForDeal(dealGetDataToSignByParticipantForDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDealHashToSignToUI(res))
    );
  }

  dealGetDeal(params: DealGetDealParams): Observable<FullDeal> {
    return this._api.dealGetDeal(dealGetDealParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFullDealToUI(res))
    );
  }

  dealGetDealRejectionReasons(params: DealGetDealRejectionReasonsParams): Observable<Blob> {
    return this._api.dealGetDealRejectionReasons(dealGetDealRejectionReasonsParamsAdapter.adapt(params));
  }

  dealGetDeals(params?: DealGetDealsParams): Observable<ApiSearchResultOfDealInfoAlt> {
    return this._api.dealGetDeals(dealGetDealsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfDealInfoAltToUI(res))
    );
  }

  dealGetExportDealDocuments(params?: DealGetExportDealDocumentsParams): Observable<Blob> {
    return this._api.dealGetExportDealDocuments(dealGetExportDealDocumentsParamsAdapter.adapt(params));
  }

  dealGetExternalDealsInfoByIds(params?: DealGetExternalDealsInfoByIdsParams): Observable<HmaoExternalDealInfo[]> {
    return this._api.dealGetExternalDealsInfoByIds(dealGetExternalDealsInfoByIdsParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptHmaoExternalDealInfoToUI(item)))
    );
  }

  dealGetNextDealNumberIfTenantConfigAllows(params?: DealGetNextDealNumberIfTenantConfigAllowsParams): Observable<string> {
    return this._api.dealGetNextDealNumberIfTenantConfigAllows(dealGetNextDealNumberIfTenantConfigAllowsParamsAdapter.adapt(params));
  }

  dealGetTradeDealForExternal(params: DealGetTradeDealForExternalParams): Observable<ExternalDealInfo> {
    return this._api.dealGetTradeDealForExternal(dealGetTradeDealForExternalParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalDealInfoToUI(res))
    );
  }

  dealRejectCustomerDeal(params?: DealRejectCustomerDealParams): Observable<boolean> {
    return this._api.dealRejectCustomerDeal(dealRejectCustomerDealParamsAdapter.adapt(params));
  }

  dealRejectCustomerDealOnDemandOfProvider(params?: DealRejectCustomerDealOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealRejectCustomerDealOnDemandOfProvider(dealRejectCustomerDealOnDemandOfProviderParamsAdapter.adapt(params));
  }

  dealSentForParticipantApprove(params?: DealSentForParticipantApproveParams): Observable<number> {
    return this._api.dealSentForParticipantApprove(dealSentForParticipantApproveParamsAdapter.adapt(params));
  }

  dealSentForParticipantApproveExternal(params?: DealSentForParticipantApproveExternalParams): Observable<number> {
    return this._api.dealSentForParticipantApproveExternal(dealSentForParticipantApproveExternalParamsAdapter.adapt(params));
  }

  dealSentForSignByParticipant(params?: DealSentForSignByParticipantParams): Observable<number> {
    return this._api.dealSentForSignByParticipant(dealSentForSignByParticipantParamsAdapter.adapt(params));
  }

  dealSentForSignOnDemandOfProvider(params?: DealSentForSignOnDemandOfProviderParams): Observable<number> {
    return this._api.dealSentForSignOnDemandOfProvider(dealSentForSignOnDemandOfProviderParamsAdapter.adapt(params));
  }

  dealSetDealExecuted(params: DealSetDealExecutedParams): Observable<Blob> {
    return this._api.dealSetDealExecuted(dealSetDealExecutedParamsAdapter.adapt(params));
  }

  dealSetDealIdForOrdersLink(params?: DealSetDealIdForOrdersLinkParams): Observable<number> {
    return this._api.dealSetDealIdForOrdersLink(dealSetDealIdForOrdersLinkParamsAdapter.adapt(params));
  }

  dealSetDealTerminated(params: DealSetDealTerminatedParams): Observable<Blob> {
    return this._api.dealSetDealTerminated(dealSetDealTerminatedParamsAdapter.adapt(params));
  }

  dealSignDealOutsideEShop(params?: DealSignDealOutsideEShopParams): Observable<number> {
    return this._api.dealSignDealOutsideEShop(dealSignDealOutsideEShopParamsAdapter.adapt(params));
  }

  dealSignDealOutsideEShopExternal(params?: DealSignDealOutsideEShopExternalParams): Observable<number> {
    return this._api.dealSignDealOutsideEShopExternal(dealSignDealOutsideEShopExternalParamsAdapter.adapt(params));
  }

  dealSuggestElectronicFormSigning(params?: DealSuggestElectronicFormSigningParams): Observable<boolean> {
    return this._api.dealSuggestElectronicFormSigning(dealSuggestElectronicFormSigningParamsAdapter.adapt(params));
  }

  dealSuggestPaperFormSigning(params?: DealSuggestPaperFormSigningParams): Observable<boolean> {
    return this._api.dealSuggestPaperFormSigning(dealSuggestPaperFormSigningParamsAdapter.adapt(params));
  }

  dealSuggestPaperFormSigningOnDemandOfProvider(params?: DealSuggestPaperFormSigningOnDemandOfProviderParams): Observable<boolean> {
    return this._api.dealSuggestPaperFormSigningOnDemandOfProvider(dealSuggestPaperFormSigningOnDemandOfProviderParamsAdapter.adapt(params));
  }

}
