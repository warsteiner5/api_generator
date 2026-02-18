import { adaptBatchProcessingResultAltToUI } from '../adapters/toUI/batch-processing-result-alt.adapter';
import { adaptMarketOfferShortModelToUI } from '../adapters/toUI/market-offer-short-model.adapter';
import { adaptMarketParticipantOfferInfoToUI } from '../adapters/toUI/market-participant-offer-info.adapter';
import { adaptOfferStatesToUI } from '../adapters/toUI/offer-states.adapter';
import { adaptParticipantOfferDto2ToUI } from '../adapters/toUI/participant-offer-dto-2.adapter';
import { adaptParticipantOfferPublishResultToUI } from '../adapters/toUI/participant-offer-publish-result.adapter';
import { adaptUpdateResultAltToUI } from '../adapters/toUI/update-result-alt.adapter';
import { BatchProcessingResultAlt } from '../models/batch-processing-result-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOfferShortModel } from '../models/market-offer-short-model.interface';
import { MarketParticipantOfferInfo } from '../models/market-participant-offer-info.interface';
import { Observable } from 'rxjs';
import { OffersApiService } from '../../swagger/services/offers-api.service';
import { OffersApproveParams, offersApproveParamsAdapter } from './params/offers-approve.params';
import { OffersChangeStateOfferParams, offersChangeStateOfferParamsAdapter } from './params/offers-change-state-offer.params';
import { OffersChechActualizationRequestExtistsParams, offersChechActualizationRequestExtistsParamsAdapter } from './params/offers-chech-actualization-request-extists.params';
import { OffersConfirmExternalParams, offersConfirmExternalParamsAdapter } from './params/offers-confirm-external.params';
import { OffersCountParams, offersCountParamsAdapter } from './params/offers-count.params';
import { OffersCreateParticipantOfferActualizationRequestParams, offersCreateParticipantOfferActualizationRequestParamsAdapter } from './params/offers-create-participant-offer-actualization-request.params';
import { OffersDisapproveParams, offersDisapproveParamsAdapter } from './params/offers-disapprove.params';
import { OffersExportPriceListToExcelParams, offersExportPriceListToExcelParamsAdapter } from './params/offers-export-price-list-to-excel.params';
import { OffersExtendParticipantOfferParams, offersExtendParticipantOfferParamsAdapter } from './params/offers-extend-participant-offer.params';
import { OffersExternalSearchParams, offersExternalSearchParamsAdapter } from './params/offers-external-search.params';
import { OffersGetExcelImportTemplateExportByParams, offersGetExcelImportTemplateExportByParamsAdapter } from './params/offers-get-excel-import-template-export-by.params';
import { OffersGetExcelImportTemplateParams, offersGetExcelImportTemplateParamsAdapter } from './params/offers-get-excel-import-template.params';
import { OffersGetOfferInfoParams, offersGetOfferInfoParamsAdapter } from './params/offers-get-offer-info.params';
import { OffersGetOffersParams, offersGetOffersParamsAdapter } from './params/offers-get-offers.params';
import { OffersModerateParams, offersModerateParamsAdapter } from './params/offers-moderate.params';
import { OffersPublish2Params, offersPublish2ParamsAdapter } from './params/offers-publish-2.params';
import { OffersPublishExternalParams, offersPublishExternalParamsAdapter } from './params/offers-publish-external.params';
import { OffersPublishParams, offersPublishParamsAdapter } from './params/offers-publish.params';
import { OffersRemoveOfferParams, offersRemoveOfferParamsAdapter } from './params/offers-remove-offer.params';
import { OffersRemoveParticipantOfferParams, offersRemoveParticipantOfferParamsAdapter } from './params/offers-remove-participant-offer.params';
import { OffersSaveAsDraftParams, offersSaveAsDraftParamsAdapter } from './params/offers-save-as-draft.params';
import { OffersSearchParams, offersSearchParamsAdapter } from './params/offers-search.params';
import { OffersSendCustomerCommercialOfferParams, offersSendCustomerCommercialOfferParamsAdapter } from './params/offers-send-customer-commercial-offer.params';
import { OfferStates } from '../models/offer-states.interface';
import { OffersUpdateParams, offersUpdateParamsAdapter } from './params/offers-update.params';
import { OffersValidateAccessToOfferParams, offersValidateAccessToOfferParamsAdapter } from './params/offers-validate-access-to-offer.params';
import { ParticipantOfferDto2 } from '../models/participant-offer-dto-2.interface';
import { ParticipantOfferPublishResult } from '../models/participant-offer-publish-result.interface';
import { UpdateResultAlt } from '../models/update-result-alt.interface';

@Injectable({ providedIn: 'root' })
export class OffersRepository {
  private readonly _api = inject(OffersApiService);

  offersApprove(params?: OffersApproveParams): Observable<Blob> {
    return this._api.offersApprove(offersApproveParamsAdapter.adapt(params));
  }

  offersChangeStateOffer(params?: OffersChangeStateOfferParams): Observable<UpdateResultAlt> {
    return this._api.offersChangeStateOffer(offersChangeStateOfferParamsAdapter.adapt(params)).pipe(
      map((res) => adaptUpdateResultAltToUI(res))
    );
  }

  offersChechActualizationRequestExtists(params: OffersChechActualizationRequestExtistsParams): Observable<boolean> {
    return this._api.offersChechActualizationRequestExtists(offersChechActualizationRequestExtistsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  offersConfirmExternal(params?: OffersConfirmExternalParams): Observable<Blob> {
    return this._api.offersConfirmExternal(offersConfirmExternalParamsAdapter.adapt(params));
  }

  offersCount(params?: OffersCountParams): Observable<OfferStates[]> {
    return this._api.offersCount(offersCountParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOfferStatesToUI(item)))
    );
  }

  offersCreateParticipantOfferActualizationRequest(params: OffersCreateParticipantOfferActualizationRequestParams): Observable<void> {
    return this._api.offersCreateParticipantOfferActualizationRequest(offersCreateParticipantOfferActualizationRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  offersDisapprove(params?: OffersDisapproveParams): Observable<Blob> {
    return this._api.offersDisapprove(offersDisapproveParamsAdapter.adapt(params));
  }

  offersExportPriceListToExcel(params?: OffersExportPriceListToExcelParams): Observable<Blob> {
    return this._api.offersExportPriceListToExcel(offersExportPriceListToExcelParamsAdapter.adapt(params));
  }

  offersExtendParticipantOffer(params?: OffersExtendParticipantOfferParams): Observable<Blob> {
    return this._api.offersExtendParticipantOffer(offersExtendParticipantOfferParamsAdapter.adapt(params));
  }

  offersExternalSearch(params?: OffersExternalSearchParams): Observable<ParticipantOfferDto2[]> {
    return this._api.offersExternalSearch(offersExternalSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptParticipantOfferDto2ToUI(item)))
    );
  }

  offersGetExcelImportTemplate(params?: OffersGetExcelImportTemplateParams): Observable<string> {
    return this._api.offersGetExcelImportTemplate(offersGetExcelImportTemplateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  offersGetExcelImportTemplateExportBy(params?: OffersGetExcelImportTemplateExportByParams): Observable<Blob> {
    return this._api.offersGetExcelImportTemplateExportBy(offersGetExcelImportTemplateExportByParamsAdapter.adapt(params));
  }

  offersGetOfferInfo(params: OffersGetOfferInfoParams): Observable<MarketParticipantOfferInfo> {
    return this._api.offersGetOfferInfo(offersGetOfferInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketParticipantOfferInfoToUI(res?.data))
    );
  }

  offersGetOffers(params?: OffersGetOffersParams): Observable<MarketParticipantOfferInfo[]> {
    return this._api.offersGetOffers(offersGetOffersParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketParticipantOfferInfoToUI(item)))
    );
  }

  offersModerate(params?: OffersModerateParams): Observable<UpdateResultAlt> {
    return this._api.offersModerate(offersModerateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptUpdateResultAltToUI(res))
    );
  }

  offersPublish(params?: OffersPublishParams): Observable<ParticipantOfferPublishResult> {
    return this._api.offersPublish(offersPublishParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParticipantOfferPublishResultToUI(res?.data))
    );
  }

  offersPublish2(params?: OffersPublish2Params): Observable<number> {
    return this._api.offersPublish2(offersPublish2ParamsAdapter.adapt(params));
  }

  offersPublishExternal(params?: OffersPublishExternalParams): Observable<ParticipantOfferPublishResult> {
    return this._api.offersPublishExternal(offersPublishExternalParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParticipantOfferPublishResultToUI(res?.data))
    );
  }

  offersRemoveOffer(params: OffersRemoveOfferParams): Observable<BatchProcessingResultAlt> {
    return this._api.offersRemoveOffer(offersRemoveOfferParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBatchProcessingResultAltToUI(res?.data))
    );
  }

  offersRemoveParticipantOffer(params?: OffersRemoveParticipantOfferParams): Observable<Blob> {
    return this._api.offersRemoveParticipantOffer(offersRemoveParticipantOfferParamsAdapter.adapt(params));
  }

  offersSaveAsDraft(params?: OffersSaveAsDraftParams): Observable<number> {
    return this._api.offersSaveAsDraft(offersSaveAsDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  offersSearch(params?: OffersSearchParams): Observable<MarketOfferShortModel[]> {
    return this._api.offersSearch(offersSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketOfferShortModelToUI(item)))
    );
  }

  offersSendCustomerCommercialOffer(params: OffersSendCustomerCommercialOfferParams): Observable<void> {
    return this._api.offersSendCustomerCommercialOffer(offersSendCustomerCommercialOfferParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  offersUpdate(params?: OffersUpdateParams): Observable<Blob> {
    return this._api.offersUpdate(offersUpdateParamsAdapter.adapt(params));
  }

  offersValidateAccessToOffer(params: OffersValidateAccessToOfferParams): Observable<boolean> {
    return this._api.offersValidateAccessToOffer(offersValidateAccessToOfferParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
