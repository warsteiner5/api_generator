import { ApiSearchResultOfTradeInfoForAnonymousAlt } from '../models/api-search-result-of-trade-info-for-anonymous-alt.interface';
import { apiSearchResultOfTradeInfoForAnonymousAltAdapter } from '../adapters/models/api-search-result-of-trade-info-for-anonymous-alt.adapter';
import { ApiSearchResultOfTradeInfoForCustomerAlt } from '../models/api-search-result-of-trade-info-for-customer-alt.interface';
import { apiSearchResultOfTradeInfoForCustomerAltAdapter } from '../adapters/models/api-search-result-of-trade-info-for-customer-alt.adapter';
import { ApiSearchResultOfTradeInfoForParticipantAlt } from '../models/api-search-result-of-trade-info-for-participant-alt.interface';
import { apiSearchResultOfTradeInfoForParticipantAltAdapter } from '../adapters/models/api-search-result-of-trade-info-for-participant-alt.adapter';
import { BatchProcessingResultAlt } from '../models/batch-processing-result-alt.interface';
import { batchProcessingResultAltAdapter } from '../adapters/models/batch-processing-result-alt.adapter';
import { CustomerContactInfoAlt } from '../models/customer-contact-info-alt.interface';
import { customerContactInfoAltAdapter } from '../adapters/models/customer-contact-info-alt.adapter';
import { ExpiringTradesInfoForCustomerAlt } from '../models/expiring-trades-info-for-customer-alt.interface';
import { expiringTradesInfoForCustomerAltAdapter } from '../adapters/models/expiring-trades-info-for-customer-alt.adapter';
import { ImportExcelLotItemResponseAlt } from '../models/import-excel-lot-item-response-alt.interface';
import { importExcelLotItemResponseAltAdapter } from '../adapters/models/import-excel-lot-item-response-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade.interface';
import { tradeAdapter } from '../adapters/models/trade.adapter';
import { TradeApiService } from '../../swagger/services/trade-api.service';
import { TradeCanTradeBeExportedToPpParams, tradeCanTradeBeExportedToPpAdapter } from './params/trade-can-trade-be-exported-to-pp.params';
import { TradeCheckAndGetTradeExtCustomerInfoParams, tradeCheckAndGetTradeExtCustomerInfoAdapter } from './params/trade-check-and-get-trade-ext-customer-info.params';
import { TradeCompleteTradeParams, tradeCompleteTradeAdapter } from './params/trade-complete-trade.params';
import { TradeCreateApplicationsByCustomerParams, tradeCreateApplicationsByCustomerAdapter } from './params/trade-create-applications-by-customer.params';
import { TradeDates } from '../models/trade-dates.interface';
import { tradeDatesAdapter } from '../adapters/models/trade-dates.adapter';
import { TradeEditPublishedTradeByExternalSystemParams, tradeEditPublishedTradeByExternalSystemAdapter } from './params/trade-edit-published-trade-by-external-system.params';
import { TradeEditPublishedTradeDatesParams, tradeEditPublishedTradeDatesAdapter } from './params/trade-edit-published-trade-dates.params';
import { TradeEditPublishedTradeParams, tradeEditPublishedTradeAdapter } from './params/trade-edit-published-trade.params';
import { TradeExportToExcelByFilterParams, tradeExportToExcelByFilterAdapter } from './params/trade-export-to-excel-by-filter.params';
import { TradeExportToExcelParams, tradeExportToExcelAdapter } from './params/trade-export-to-excel.params';
import { TradeExtendTradeExternalParams, tradeExtendTradeExternalAdapter } from './params/trade-extend-trade-external.params';
import { TradeFinishReviewApplicationParams, tradeFinishReviewApplicationAdapter } from './params/trade-finish-review-application.params';
import { TradeFinishReviewApplicationWithoutDealParams, tradeFinishReviewApplicationWithoutDealAdapter } from './params/trade-finish-review-application-without-deal.params';
import { TradeGetAllTradesForCustomerParams, tradeGetAllTradesForCustomerAdapter } from './params/trade-get-all-trades-for-customer.params';
import { TradeGetCommissionInformationForLotParams, tradeGetCommissionInformationForLotAdapter } from './params/trade-get-commission-information-for-lot.params';
import { TradeGetCustomerContactInfoParams, tradeGetCustomerContactInfoAdapter } from './params/trade-get-customer-contact-info.params';
import { TradeGetExpiringTradesInfoForCustomerParams, tradeGetExpiringTradesInfoForCustomerAdapter } from './params/trade-get-expiring-trades-info-for-customer.params';
import { TradeGetFinishReviewApplicationProtocolDefaultParams, tradeGetFinishReviewApplicationProtocolDefaultAdapter } from './params/trade-get-finish-review-application-protocol-default.params';
import { TradeGetFullTradeInfoParams, tradeGetFullTradeInfoAdapter } from './params/trade-get-full-trade-info.params';
import { TradeGetOldIdParams, tradeGetOldIdAdapter } from './params/trade-get-old-id.params';
import { TradeGetParticipantInfoArchiveParams, tradeGetParticipantInfoArchiveAdapter } from './params/trade-get-participant-info-archive.params';
import { TradeGetTradeCopyParams, tradeGetTradeCopyAdapter } from './params/trade-get-trade-copy.params';
import { TradeGetTradeDatesForEditParams, tradeGetTradeDatesForEditAdapter } from './params/trade-get-trade-dates-for-edit.params';
import { TradeGetTradeDocumentsParams, tradeGetTradeDocumentsAdapter } from './params/trade-get-trade-documents.params';
import { TradeGetTradeExtCustomerInfoFileTemplateParams, tradeGetTradeExtCustomerInfoFileTemplateAdapter } from './params/trade-get-trade-ext-customer-info-file-template.params';
import { TradeGetTradeForEditParams, tradeGetTradeForEditAdapter } from './params/trade-get-trade-for-edit.params';
import { TradeGetTradeInfoByLotIdParams, tradeGetTradeInfoByLotIdAdapter } from './params/trade-get-trade-info-by-lot-id.params';
import { TradeGetTradesForAdminParams, tradeGetTradesForAdminAdapter } from './params/trade-get-trades-for-admin.params';
import { TradeGetTradesForAnonymousParams, tradeGetTradesForAnonymousAdapter } from './params/trade-get-trades-for-anonymous.params';
import { TradeGetTradesForCustomerParams, tradeGetTradesForCustomerAdapter } from './params/trade-get-trades-for-customer.params';
import { TradeGetTradesForParticipantParams, tradeGetTradesForParticipantAdapter } from './params/trade-get-trades-for-participant.params';
import { TradeGetTradeShortInfoByIdParams, tradeGetTradeShortInfoByIdAdapter } from './params/trade-get-trade-short-info-by-id.params';
import { TradeImportLotItemsFromExcelParams, tradeImportLotItemsFromExcelAdapter } from './params/trade-import-lot-items-from-excel.params';
import { TradeIsTradeApplicationFromPpParams, tradeIsTradeApplicationFromPpAdapter } from './params/trade-is-trade-application-from-pp.params';
import { TradePrepareDataForTradeCreateParams, tradePrepareDataForTradeCreateAdapter } from './params/trade-prepare-data-for-trade-create.params';
import { TradePrepareOrganizationForTradeCreateParams, tradePrepareOrganizationForTradeCreateAdapter } from './params/trade-prepare-organization-for-trade-create.params';
import { TradePublishParams, tradePublishAdapter } from './params/trade-publish.params';
import { TradeRejectApplicationDealByCustomerParams, tradeRejectApplicationDealByCustomerAdapter } from './params/trade-reject-application-deal-by-customer.params';
import { TradeRemoveDraftParams, tradeRemoveDraftAdapter } from './params/trade-remove-draft.params';
import { TradeRevokeTradeParams, tradeRevokeTradeAdapter } from './params/trade-revoke-trade.params';
import { TradeSaveAsDraftParams, tradeSaveAsDraftAdapter } from './params/trade-save-as-draft.params';
import { TradeSetTradeNotTookPlaceParams, tradeSetTradeNotTookPlaceAdapter } from './params/trade-set-trade-not-took-place.params';
import { TradeShortInfo } from '../models/trade-short-info.interface';
import { tradeShortInfoAdapter } from '../adapters/models/trade-short-info.adapter';
import { TradeView } from '../models/trade-view.interface';
import { tradeViewAdapter } from '../adapters/models/trade-view.adapter';

@Injectable({ providedIn: 'root' })
export class TradeRepository {
  private readonly _api = inject(TradeApiService);

  tradeCanTradeBeExportedToPp(params: TradeCanTradeBeExportedToPpParams): Observable<boolean> {
    return this._api.tradeCanTradeBeExportedToPp(tradeCanTradeBeExportedToPpAdapter(params));
  }

  tradeCheckAndGetTradeExtCustomerInfo(params: TradeCheckAndGetTradeExtCustomerInfoParams): Observable<Blob> {
    return this._api.tradeCheckAndGetTradeExtCustomerInfo(tradeCheckAndGetTradeExtCustomerInfoAdapter(params));
  }

  tradeCompleteTrade(params: TradeCompleteTradeParams): Observable<Blob> {
    return this._api.tradeCompleteTrade(tradeCompleteTradeAdapter(params));
  }

  tradeCreateApplicationsByCustomer(params: TradeCreateApplicationsByCustomerParams): Observable<BatchProcessingResultAlt> {
    return this._api.tradeCreateApplicationsByCustomer(tradeCreateApplicationsByCustomerAdapter(params)).pipe(
      map((res) => batchProcessingResultAltAdapter(res))
    );
  }

  tradeEditPublishedTrade(params?: TradeEditPublishedTradeParams): Observable<number> {
    return this._api.tradeEditPublishedTrade(tradeEditPublishedTradeAdapter(params));
  }

  tradeEditPublishedTradeByExternalSystem(params?: TradeEditPublishedTradeByExternalSystemParams): Observable<number> {
    return this._api.tradeEditPublishedTradeByExternalSystem(tradeEditPublishedTradeByExternalSystemAdapter(params));
  }

  tradeEditPublishedTradeDates(params?: TradeEditPublishedTradeDatesParams): Observable<Blob> {
    return this._api.tradeEditPublishedTradeDates(tradeEditPublishedTradeDatesAdapter(params));
  }

  tradeExportToExcel(params?: TradeExportToExcelParams): Observable<Blob> {
    return this._api.tradeExportToExcel(tradeExportToExcelAdapter(params));
  }

  tradeExportToExcelByFilter(params?: TradeExportToExcelByFilterParams): Observable<Blob> {
    return this._api.tradeExportToExcelByFilter(tradeExportToExcelByFilterAdapter(params));
  }

  tradeExtendTradeExternal(params?: TradeExtendTradeExternalParams): Observable<Blob> {
    return this._api.tradeExtendTradeExternal(tradeExtendTradeExternalAdapter(params));
  }

  tradeFinishReviewApplication(params?: TradeFinishReviewApplicationParams): Observable<Blob> {
    return this._api.tradeFinishReviewApplication(tradeFinishReviewApplicationAdapter(params));
  }

  tradeFinishReviewApplicationWithoutDeal(params?: TradeFinishReviewApplicationWithoutDealParams): Observable<Blob> {
    return this._api.tradeFinishReviewApplicationWithoutDeal(tradeFinishReviewApplicationWithoutDealAdapter(params));
  }

  tradeGetAllTradesForCustomer(params?: TradeGetAllTradesForCustomerParams): Observable<ApiSearchResultOfTradeInfoForParticipantAlt> {
    return this._api.tradeGetAllTradesForCustomer(tradeGetAllTradesForCustomerAdapter(params)).pipe(
      map((res) => apiSearchResultOfTradeInfoForParticipantAltAdapter(res))
    );
  }

  tradeGetCommissionInformationForLot(params: TradeGetCommissionInformationForLotParams): Observable<number> {
    return this._api.tradeGetCommissionInformationForLot(tradeGetCommissionInformationForLotAdapter(params));
  }

  tradeGetCustomerContactInfo(params?: TradeGetCustomerContactInfoParams): Observable<CustomerContactInfoAlt> {
    return this._api.tradeGetCustomerContactInfo(tradeGetCustomerContactInfoAdapter(params)).pipe(
      map((res) => customerContactInfoAltAdapter(res))
    );
  }

  tradeGetExpiringTradesInfoForCustomer(params?: TradeGetExpiringTradesInfoForCustomerParams): Observable<ExpiringTradesInfoForCustomerAlt> {
    return this._api.tradeGetExpiringTradesInfoForCustomer(tradeGetExpiringTradesInfoForCustomerAdapter(params)).pipe(
      map((res) => expiringTradesInfoForCustomerAltAdapter(res))
    );
  }

  tradeGetFinishReviewApplicationProtocolDefault(params?: TradeGetFinishReviewApplicationProtocolDefaultParams): Observable<Blob> {
    return this._api.tradeGetFinishReviewApplicationProtocolDefault(tradeGetFinishReviewApplicationProtocolDefaultAdapter(params));
  }

  tradeGetFullTradeInfo(params: TradeGetFullTradeInfoParams): Observable<TradeView> {
    return this._api.tradeGetFullTradeInfo(tradeGetFullTradeInfoAdapter(params)).pipe(
      map((res) => tradeViewAdapter(res))
    );
  }

  tradeGetOldId(params: TradeGetOldIdParams): Observable<Blob> {
    return this._api.tradeGetOldId(tradeGetOldIdAdapter(params));
  }

  tradeGetParticipantInfoArchive(params: TradeGetParticipantInfoArchiveParams): Observable<Blob> {
    return this._api.tradeGetParticipantInfoArchive(tradeGetParticipantInfoArchiveAdapter(params));
  }

  tradeGetTradeCopy(params: TradeGetTradeCopyParams): Observable<Trade> {
    return this._api.tradeGetTradeCopy(tradeGetTradeCopyAdapter(params)).pipe(
      map((res) => tradeAdapter(res))
    );
  }

  tradeGetTradeDatesForEdit(params: TradeGetTradeDatesForEditParams): Observable<TradeDates> {
    return this._api.tradeGetTradeDatesForEdit(tradeGetTradeDatesForEditAdapter(params)).pipe(
      map((res) => tradeDatesAdapter(res))
    );
  }

  tradeGetTradeDocuments(params: TradeGetTradeDocumentsParams): Observable<Blob> {
    return this._api.tradeGetTradeDocuments(tradeGetTradeDocumentsAdapter(params));
  }

  tradeGetTradeExtCustomerInfoFileTemplate(params?: TradeGetTradeExtCustomerInfoFileTemplateParams): Observable<Blob> {
    return this._api.tradeGetTradeExtCustomerInfoFileTemplate(tradeGetTradeExtCustomerInfoFileTemplateAdapter(params));
  }

  tradeGetTradeForEdit(params: TradeGetTradeForEditParams): Observable<Trade> {
    return this._api.tradeGetTradeForEdit(tradeGetTradeForEditAdapter(params)).pipe(
      map((res) => tradeAdapter(res))
    );
  }

  tradeGetTradeInfoByLotId(params: TradeGetTradeInfoByLotIdParams): Observable<TradeView> {
    return this._api.tradeGetTradeInfoByLotId(tradeGetTradeInfoByLotIdAdapter(params)).pipe(
      map((res) => tradeViewAdapter(res))
    );
  }

  tradeGetTradesForAdmin(params?: TradeGetTradesForAdminParams): Observable<ApiSearchResultOfTradeInfoForCustomerAlt> {
    return this._api.tradeGetTradesForAdmin(tradeGetTradesForAdminAdapter(params)).pipe(
      map((res) => apiSearchResultOfTradeInfoForCustomerAltAdapter(res))
    );
  }

  tradeGetTradesForAnonymous(params?: TradeGetTradesForAnonymousParams): Observable<ApiSearchResultOfTradeInfoForAnonymousAlt> {
    return this._api.tradeGetTradesForAnonymous(tradeGetTradesForAnonymousAdapter(params)).pipe(
      map((res) => apiSearchResultOfTradeInfoForAnonymousAltAdapter(res))
    );
  }

  tradeGetTradesForCustomer(params?: TradeGetTradesForCustomerParams): Observable<ApiSearchResultOfTradeInfoForCustomerAlt> {
    return this._api.tradeGetTradesForCustomer(tradeGetTradesForCustomerAdapter(params)).pipe(
      map((res) => apiSearchResultOfTradeInfoForCustomerAltAdapter(res))
    );
  }

  tradeGetTradesForParticipant(params?: TradeGetTradesForParticipantParams): Observable<ApiSearchResultOfTradeInfoForParticipantAlt> {
    return this._api.tradeGetTradesForParticipant(tradeGetTradesForParticipantAdapter(params)).pipe(
      map((res) => apiSearchResultOfTradeInfoForParticipantAltAdapter(res))
    );
  }

  tradeGetTradeShortInfoById(params: TradeGetTradeShortInfoByIdParams): Observable<TradeShortInfo> {
    return this._api.tradeGetTradeShortInfoById(tradeGetTradeShortInfoByIdAdapter(params)).pipe(
      map((res) => tradeShortInfoAdapter(res))
    );
  }

  tradeImportLotItemsFromExcel(params?: TradeImportLotItemsFromExcelParams): Observable<ImportExcelLotItemResponseAlt> {
    return this._api.tradeImportLotItemsFromExcel(tradeImportLotItemsFromExcelAdapter(params)).pipe(
      map((res) => importExcelLotItemResponseAltAdapter(res))
    );
  }

  tradeIsTradeApplicationFromPp(params: TradeIsTradeApplicationFromPpParams): Observable<boolean> {
    return this._api.tradeIsTradeApplicationFromPp(tradeIsTradeApplicationFromPpAdapter(params));
  }

  tradePrepareDataForTradeCreate(params?: TradePrepareDataForTradeCreateParams): Observable<Blob> {
    return this._api.tradePrepareDataForTradeCreate(tradePrepareDataForTradeCreateAdapter(params));
  }

  tradePrepareOrganizationForTradeCreate(params: TradePrepareOrganizationForTradeCreateParams): Observable<Blob> {
    return this._api.tradePrepareOrganizationForTradeCreate(tradePrepareOrganizationForTradeCreateAdapter(params));
  }

  tradePublish(params?: TradePublishParams): Observable<number> {
    return this._api.tradePublish(tradePublishAdapter(params));
  }

  tradeRejectApplicationDealByCustomer(params?: TradeRejectApplicationDealByCustomerParams): Observable<boolean> {
    return this._api.tradeRejectApplicationDealByCustomer(tradeRejectApplicationDealByCustomerAdapter(params));
  }

  tradeRemoveDraft(params: TradeRemoveDraftParams): Observable<void> {
    return this._api.tradeRemoveDraft(tradeRemoveDraftAdapter(params));
  }

  tradeRevokeTrade(params: TradeRevokeTradeParams): Observable<Blob> {
    return this._api.tradeRevokeTrade(tradeRevokeTradeAdapter(params));
  }

  tradeSaveAsDraft(params?: TradeSaveAsDraftParams): Observable<number> {
    return this._api.tradeSaveAsDraft(tradeSaveAsDraftAdapter(params));
  }

  tradeSetTradeNotTookPlace(params?: TradeSetTradeNotTookPlaceParams): Observable<Blob> {
    return this._api.tradeSetTradeNotTookPlace(tradeSetTradeNotTookPlaceAdapter(params));
  }

}
