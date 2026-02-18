import { adaptApiSearchResultOfTradeInfoForAnonymousAltToUI } from '../adapters/toUI/api-search-result-of-trade-info-for-anonymous-alt.adapter';
import { adaptApiSearchResultOfTradeInfoForCustomerAltToUI } from '../adapters/toUI/api-search-result-of-trade-info-for-customer-alt.adapter';
import { adaptApiSearchResultOfTradeInfoForParticipantAltToUI } from '../adapters/toUI/api-search-result-of-trade-info-for-participant-alt.adapter';
import { adaptBatchProcessingResultAltToUI } from '../adapters/toUI/batch-processing-result-alt.adapter';
import { adaptCustomerContactInfoAltToUI } from '../adapters/toUI/customer-contact-info-alt.adapter';
import { adaptExpiringTradesInfoForCustomerAltToUI } from '../adapters/toUI/expiring-trades-info-for-customer-alt.adapter';
import { adaptImportExcelLotItemResponseAltToUI } from '../adapters/toUI/import-excel-lot-item-response-alt.adapter';
import { adaptTradeDatesToUI } from '../adapters/toUI/trade-dates.adapter';
import { adaptTradeShortInfoToUI } from '../adapters/toUI/trade-short-info.adapter';
import { adaptTradeToUI } from '../adapters/toUI/trade.adapter';
import { adaptTradeViewToUI } from '../adapters/toUI/trade-view.adapter';
import { ApiSearchResultOfTradeInfoForAnonymousAlt } from '../models/api-search-result-of-trade-info-for-anonymous-alt.interface';
import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { ApiSearchResultOfTradeInfoForParticipantAlt } from '../models/api-search-result-of-trade-info-for-participant-alt.interface';
import { BatchProcessingResultAlt } from '../models/batch-processing-result-alt.interface';
import { CustomerContactInfoAlt } from '../models/customer-contact-info-alt.interface';
import { ExpiringTradesInfoForCustomerAlt } from '../models/expiring-trades-info-for-customer-alt.interface';
import { ImportExcelLotItemResponseAlt } from '../models/import-excel-lot-item-response-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade.interface';
import { TradeApiService } from '../../swagger/services/trade-api.service';
import { TradeCanTradeBeExportedToPpParams, tradeCanTradeBeExportedToPpParamsAdapter } from './params/trade-can-trade-be-exported-to-pp.params';
import { TradeCheckAndGetTradeExtCustomerInfoParams, tradeCheckAndGetTradeExtCustomerInfoParamsAdapter } from './params/trade-check-and-get-trade-ext-customer-info.params';
import { TradeCompleteTradeParams, tradeCompleteTradeParamsAdapter } from './params/trade-complete-trade.params';
import { TradeCreateApplicationsByCustomerParams, tradeCreateApplicationsByCustomerParamsAdapter } from './params/trade-create-applications-by-customer.params';
import { TradeDates } from '../models/trade-dates.interface';
import { TradeEditPublishedTradeByExternalSystemParams, tradeEditPublishedTradeByExternalSystemParamsAdapter } from './params/trade-edit-published-trade-by-external-system.params';
import { TradeEditPublishedTradeDatesParams, tradeEditPublishedTradeDatesParamsAdapter } from './params/trade-edit-published-trade-dates.params';
import { TradeEditPublishedTradeParams, tradeEditPublishedTradeParamsAdapter } from './params/trade-edit-published-trade.params';
import { TradeExportToExcelByFilterParams, tradeExportToExcelByFilterParamsAdapter } from './params/trade-export-to-excel-by-filter.params';
import { TradeExportToExcelParams, tradeExportToExcelParamsAdapter } from './params/trade-export-to-excel.params';
import { TradeExtendTradeExternalParams, tradeExtendTradeExternalParamsAdapter } from './params/trade-extend-trade-external.params';
import { TradeFinishReviewApplicationParams, tradeFinishReviewApplicationParamsAdapter } from './params/trade-finish-review-application.params';
import { TradeFinishReviewApplicationWithoutDealParams, tradeFinishReviewApplicationWithoutDealParamsAdapter } from './params/trade-finish-review-application-without-deal.params';
import { TradeGetAllTradesForCustomerParams, tradeGetAllTradesForCustomerParamsAdapter } from './params/trade-get-all-trades-for-customer.params';
import { TradeGetCommissionInformationForLotParams, tradeGetCommissionInformationForLotParamsAdapter } from './params/trade-get-commission-information-for-lot.params';
import { TradeGetCustomerContactInfoParams, tradeGetCustomerContactInfoParamsAdapter } from './params/trade-get-customer-contact-info.params';
import { TradeGetExpiringTradesInfoForCustomerParams, tradeGetExpiringTradesInfoForCustomerParamsAdapter } from './params/trade-get-expiring-trades-info-for-customer.params';
import { TradeGetFinishReviewApplicationProtocolDefaultParams, tradeGetFinishReviewApplicationProtocolDefaultParamsAdapter } from './params/trade-get-finish-review-application-protocol-default.params';
import { TradeGetFullTradeInfoParams, tradeGetFullTradeInfoParamsAdapter } from './params/trade-get-full-trade-info.params';
import { TradeGetOldIdParams, tradeGetOldIdParamsAdapter } from './params/trade-get-old-id.params';
import { TradeGetParticipantInfoArchiveParams, tradeGetParticipantInfoArchiveParamsAdapter } from './params/trade-get-participant-info-archive.params';
import { TradeGetTradeCopyParams, tradeGetTradeCopyParamsAdapter } from './params/trade-get-trade-copy.params';
import { TradeGetTradeDatesForEditParams, tradeGetTradeDatesForEditParamsAdapter } from './params/trade-get-trade-dates-for-edit.params';
import { TradeGetTradeDocumentsParams, tradeGetTradeDocumentsParamsAdapter } from './params/trade-get-trade-documents.params';
import { TradeGetTradeExtCustomerInfoFileTemplateParams, tradeGetTradeExtCustomerInfoFileTemplateParamsAdapter } from './params/trade-get-trade-ext-customer-info-file-template.params';
import { TradeGetTradeForEditParams, tradeGetTradeForEditParamsAdapter } from './params/trade-get-trade-for-edit.params';
import { TradeGetTradeInfoByLotIdParams, tradeGetTradeInfoByLotIdParamsAdapter } from './params/trade-get-trade-info-by-lot-id.params';
import { TradeGetTradesForAdminParams, tradeGetTradesForAdminParamsAdapter } from './params/trade-get-trades-for-admin.params';
import { TradeGetTradesForAnonymousParams, tradeGetTradesForAnonymousParamsAdapter } from './params/trade-get-trades-for-anonymous.params';
import { TradeGetTradesForCustomerParams, tradeGetTradesForCustomerParamsAdapter } from './params/trade-get-trades-for-customer.params';
import { TradeGetTradesForParticipantParams, tradeGetTradesForParticipantParamsAdapter } from './params/trade-get-trades-for-participant.params';
import { TradeGetTradeShortInfoByIdParams, tradeGetTradeShortInfoByIdParamsAdapter } from './params/trade-get-trade-short-info-by-id.params';
import { TradeImportLotItemsFromExcelParams, tradeImportLotItemsFromExcelParamsAdapter } from './params/trade-import-lot-items-from-excel.params';
import { TradeIsTradeApplicationFromPpParams, tradeIsTradeApplicationFromPpParamsAdapter } from './params/trade-is-trade-application-from-pp.params';
import { TradePrepareDataForTradeCreateParams, tradePrepareDataForTradeCreateParamsAdapter } from './params/trade-prepare-data-for-trade-create.params';
import { TradePrepareOrganizationForTradeCreateParams, tradePrepareOrganizationForTradeCreateParamsAdapter } from './params/trade-prepare-organization-for-trade-create.params';
import { TradePublishParams, tradePublishParamsAdapter } from './params/trade-publish.params';
import { TradeRejectApplicationDealByCustomerParams, tradeRejectApplicationDealByCustomerParamsAdapter } from './params/trade-reject-application-deal-by-customer.params';
import { TradeRemoveDraftParams, tradeRemoveDraftParamsAdapter } from './params/trade-remove-draft.params';
import { TradeRevokeTradeParams, tradeRevokeTradeParamsAdapter } from './params/trade-revoke-trade.params';
import { TradeSaveAsDraftParams, tradeSaveAsDraftParamsAdapter } from './params/trade-save-as-draft.params';
import { TradeSetTradeNotTookPlaceParams, tradeSetTradeNotTookPlaceParamsAdapter } from './params/trade-set-trade-not-took-place.params';
import { TradeShortInfo } from '../models/trade-short-info.interface';
import { TradeView } from '../models/trade-view.interface';

@Injectable({ providedIn: 'root' })
export class TradeRepository {
  private readonly _api = inject(TradeApiService);

  tradeCanTradeBeExportedToPp(params: TradeCanTradeBeExportedToPpParams): Observable<boolean> {
    return this._api.tradeCanTradeBeExportedToPp(tradeCanTradeBeExportedToPpParamsAdapter.adapt(params));
  }

  tradeCheckAndGetTradeExtCustomerInfo(params: TradeCheckAndGetTradeExtCustomerInfoParams): Observable<Blob> {
    return this._api.tradeCheckAndGetTradeExtCustomerInfo(tradeCheckAndGetTradeExtCustomerInfoParamsAdapter.adapt(params));
  }

  tradeCompleteTrade(params: TradeCompleteTradeParams): Observable<Blob> {
    return this._api.tradeCompleteTrade(tradeCompleteTradeParamsAdapter.adapt(params));
  }

  tradeCreateApplicationsByCustomer(params: TradeCreateApplicationsByCustomerParams): Observable<BatchProcessingResultAlt> {
    return this._api.tradeCreateApplicationsByCustomer(tradeCreateApplicationsByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBatchProcessingResultAltToUI(res))
    );
  }

  tradeEditPublishedTrade(params?: TradeEditPublishedTradeParams): Observable<number> {
    return this._api.tradeEditPublishedTrade(tradeEditPublishedTradeParamsAdapter.adapt(params));
  }

  tradeEditPublishedTradeByExternalSystem(params?: TradeEditPublishedTradeByExternalSystemParams): Observable<number> {
    return this._api.tradeEditPublishedTradeByExternalSystem(tradeEditPublishedTradeByExternalSystemParamsAdapter.adapt(params));
  }

  tradeEditPublishedTradeDates(params?: TradeEditPublishedTradeDatesParams): Observable<Blob> {
    return this._api.tradeEditPublishedTradeDates(tradeEditPublishedTradeDatesParamsAdapter.adapt(params));
  }

  tradeExportToExcel(params?: TradeExportToExcelParams): Observable<Blob> {
    return this._api.tradeExportToExcel(tradeExportToExcelParamsAdapter.adapt(params));
  }

  tradeExportToExcelByFilter(params?: TradeExportToExcelByFilterParams): Observable<Blob> {
    return this._api.tradeExportToExcelByFilter(tradeExportToExcelByFilterParamsAdapter.adapt(params));
  }

  tradeExtendTradeExternal(params?: TradeExtendTradeExternalParams): Observable<Blob> {
    return this._api.tradeExtendTradeExternal(tradeExtendTradeExternalParamsAdapter.adapt(params));
  }

  tradeFinishReviewApplication(params?: TradeFinishReviewApplicationParams): Observable<Blob> {
    return this._api.tradeFinishReviewApplication(tradeFinishReviewApplicationParamsAdapter.adapt(params));
  }

  tradeFinishReviewApplicationWithoutDeal(params?: TradeFinishReviewApplicationWithoutDealParams): Observable<Blob> {
    return this._api.tradeFinishReviewApplicationWithoutDeal(tradeFinishReviewApplicationWithoutDealParamsAdapter.adapt(params));
  }

  tradeGetAllTradesForCustomer(params?: TradeGetAllTradesForCustomerParams): Observable<ApiSearchResultOfTradeInfoForParticipantAlt> {
    return this._api.tradeGetAllTradesForCustomer(tradeGetAllTradesForCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTradeInfoForParticipantAltToUI(res))
    );
  }

  tradeGetCommissionInformationForLot(params: TradeGetCommissionInformationForLotParams): Observable<number> {
    return this._api.tradeGetCommissionInformationForLot(tradeGetCommissionInformationForLotParamsAdapter.adapt(params));
  }

  tradeGetCustomerContactInfo(params?: TradeGetCustomerContactInfoParams): Observable<CustomerContactInfoAlt> {
    return this._api.tradeGetCustomerContactInfo(tradeGetCustomerContactInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCustomerContactInfoAltToUI(res))
    );
  }

  tradeGetExpiringTradesInfoForCustomer(params?: TradeGetExpiringTradesInfoForCustomerParams): Observable<ExpiringTradesInfoForCustomerAlt> {
    return this._api.tradeGetExpiringTradesInfoForCustomer(tradeGetExpiringTradesInfoForCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExpiringTradesInfoForCustomerAltToUI(res))
    );
  }

  tradeGetFinishReviewApplicationProtocolDefault(params?: TradeGetFinishReviewApplicationProtocolDefaultParams): Observable<Blob> {
    return this._api.tradeGetFinishReviewApplicationProtocolDefault(tradeGetFinishReviewApplicationProtocolDefaultParamsAdapter.adapt(params));
  }

  tradeGetFullTradeInfo(params: TradeGetFullTradeInfoParams): Observable<TradeView> {
    return this._api.tradeGetFullTradeInfo(tradeGetFullTradeInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeViewToUI(res))
    );
  }

  tradeGetOldId(params: TradeGetOldIdParams): Observable<Blob> {
    return this._api.tradeGetOldId(tradeGetOldIdParamsAdapter.adapt(params));
  }

  tradeGetParticipantInfoArchive(params: TradeGetParticipantInfoArchiveParams): Observable<Blob> {
    return this._api.tradeGetParticipantInfoArchive(tradeGetParticipantInfoArchiveParamsAdapter.adapt(params));
  }

  tradeGetTradeCopy(params: TradeGetTradeCopyParams): Observable<Trade> {
    return this._api.tradeGetTradeCopy(tradeGetTradeCopyParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeToUI(res))
    );
  }

  tradeGetTradeDatesForEdit(params: TradeGetTradeDatesForEditParams): Observable<TradeDates> {
    return this._api.tradeGetTradeDatesForEdit(tradeGetTradeDatesForEditParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeDatesToUI(res))
    );
  }

  tradeGetTradeDocuments(params: TradeGetTradeDocumentsParams): Observable<Blob> {
    return this._api.tradeGetTradeDocuments(tradeGetTradeDocumentsParamsAdapter.adapt(params));
  }

  tradeGetTradeExtCustomerInfoFileTemplate(params?: TradeGetTradeExtCustomerInfoFileTemplateParams): Observable<Blob> {
    return this._api.tradeGetTradeExtCustomerInfoFileTemplate(tradeGetTradeExtCustomerInfoFileTemplateParamsAdapter.adapt(params));
  }

  tradeGetTradeForEdit(params: TradeGetTradeForEditParams): Observable<Trade> {
    return this._api.tradeGetTradeForEdit(tradeGetTradeForEditParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeToUI(res))
    );
  }

  tradeGetTradeInfoByLotId(params: TradeGetTradeInfoByLotIdParams): Observable<TradeView> {
    return this._api.tradeGetTradeInfoByLotId(tradeGetTradeInfoByLotIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeViewToUI(res))
    );
  }

  tradeGetTradesForAdmin(params?: TradeGetTradesForAdminParams): Observable<ApiSearchResultOfTradeInfoForCustomerAlt> {
    return this._api.tradeGetTradesForAdmin(tradeGetTradesForAdminParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTradeInfoForCustomerAltToUI(res))
    );
  }

  tradeGetTradesForAnonymous(params?: TradeGetTradesForAnonymousParams): Observable<ApiSearchResultOfTradeInfoForAnonymousAlt> {
    return this._api.tradeGetTradesForAnonymous(tradeGetTradesForAnonymousParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTradeInfoForAnonymousAltToUI(res))
    );
  }

  tradeGetTradesForCustomer(params?: TradeGetTradesForCustomerParams): Observable<ApiSearchResultOfTradeInfoForCustomerAlt> {
    return this._api.tradeGetTradesForCustomer(tradeGetTradesForCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTradeInfoForCustomerAltToUI(res))
    );
  }

  tradeGetTradesForParticipant(params?: TradeGetTradesForParticipantParams): Observable<ApiSearchResultOfTradeInfoForParticipantAlt> {
    return this._api.tradeGetTradesForParticipant(tradeGetTradesForParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTradeInfoForParticipantAltToUI(res))
    );
  }

  tradeGetTradeShortInfoById(params: TradeGetTradeShortInfoByIdParams): Observable<TradeShortInfo> {
    return this._api.tradeGetTradeShortInfoById(tradeGetTradeShortInfoByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeShortInfoToUI(res))
    );
  }

  tradeImportLotItemsFromExcel(params?: TradeImportLotItemsFromExcelParams): Observable<ImportExcelLotItemResponseAlt> {
    return this._api.tradeImportLotItemsFromExcel(tradeImportLotItemsFromExcelParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportExcelLotItemResponseAltToUI(res))
    );
  }

  tradeIsTradeApplicationFromPp(params: TradeIsTradeApplicationFromPpParams): Observable<boolean> {
    return this._api.tradeIsTradeApplicationFromPp(tradeIsTradeApplicationFromPpParamsAdapter.adapt(params));
  }

  tradePrepareDataForTradeCreate(params?: TradePrepareDataForTradeCreateParams): Observable<Blob> {
    return this._api.tradePrepareDataForTradeCreate(tradePrepareDataForTradeCreateParamsAdapter.adapt(params));
  }

  tradePrepareOrganizationForTradeCreate(params: TradePrepareOrganizationForTradeCreateParams): Observable<Blob> {
    return this._api.tradePrepareOrganizationForTradeCreate(tradePrepareOrganizationForTradeCreateParamsAdapter.adapt(params));
  }

  tradePublish(params?: TradePublishParams): Observable<number> {
    return this._api.tradePublish(tradePublishParamsAdapter.adapt(params));
  }

  tradeRejectApplicationDealByCustomer(params?: TradeRejectApplicationDealByCustomerParams): Observable<boolean> {
    return this._api.tradeRejectApplicationDealByCustomer(tradeRejectApplicationDealByCustomerParamsAdapter.adapt(params));
  }

  tradeRemoveDraft(params: TradeRemoveDraftParams): Observable<void> {
    return this._api.tradeRemoveDraft(tradeRemoveDraftParamsAdapter.adapt(params));
  }

  tradeRevokeTrade(params: TradeRevokeTradeParams): Observable<Blob> {
    return this._api.tradeRevokeTrade(tradeRevokeTradeParamsAdapter.adapt(params));
  }

  tradeSaveAsDraft(params?: TradeSaveAsDraftParams): Observable<number> {
    return this._api.tradeSaveAsDraft(tradeSaveAsDraftParamsAdapter.adapt(params));
  }

  tradeSetTradeNotTookPlace(params?: TradeSetTradeNotTookPlaceParams): Observable<Blob> {
    return this._api.tradeSetTradeNotTookPlace(tradeSetTradeNotTookPlaceParamsAdapter.adapt(params));
  }

}
