import { BatchProcessingResultAlt } from '../models/batch-processing-result-alt.interface';
import { batchProcessingResultAltAdapter } from '../adapters/models/batch-processing-result-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOfferShortModel } from '../models/market-offer-short-model.interface';
import { marketOfferShortModelAdapter } from '../adapters/models/market-offer-short-model.adapter';
import { MarketParticipantOfferInfo } from '../models/market-participant-offer-info.interface';
import { marketParticipantOfferInfoAdapter } from '../adapters/models/market-participant-offer-info.adapter';
import { Observable } from 'rxjs';
import { OffersApiService } from '../../swagger/services/offers-api.service';
import { OffersApproveParams, offersApproveAdapter } from './params/offers-approve.params';
import { OffersChangeStateOfferParams, offersChangeStateOfferAdapter } from './params/offers-change-state-offer.params';
import { OffersChechActualizationRequestExtistsParams, offersChechActualizationRequestExtistsAdapter } from './params/offers-chech-actualization-request-extists.params';
import { OffersConfirmExternalParams, offersConfirmExternalAdapter } from './params/offers-confirm-external.params';
import { OffersCountParams, offersCountAdapter } from './params/offers-count.params';
import { OffersCreateParticipantOfferActualizationRequestParams, offersCreateParticipantOfferActualizationRequestAdapter } from './params/offers-create-participant-offer-actualization-request.params';
import { OffersDisapproveParams, offersDisapproveAdapter } from './params/offers-disapprove.params';
import { OffersExportPriceListToExcelParams, offersExportPriceListToExcelAdapter } from './params/offers-export-price-list-to-excel.params';
import { OffersExtendParticipantOfferParams, offersExtendParticipantOfferAdapter } from './params/offers-extend-participant-offer.params';
import { OffersExternalSearchParams, offersExternalSearchAdapter } from './params/offers-external-search.params';
import { OffersGetExcelImportTemplateExportByParams, offersGetExcelImportTemplateExportByAdapter } from './params/offers-get-excel-import-template-export-by.params';
import { OffersGetExcelImportTemplateParams, offersGetExcelImportTemplateAdapter } from './params/offers-get-excel-import-template.params';
import { OffersGetOfferInfoParams, offersGetOfferInfoAdapter } from './params/offers-get-offer-info.params';
import { OffersGetOffersParams, offersGetOffersAdapter } from './params/offers-get-offers.params';
import { OffersModerateParams, offersModerateAdapter } from './params/offers-moderate.params';
import { OffersPublish2Params, offersPublish2Adapter } from './params/offers-publish-2.params';
import { OffersPublishExternalParams, offersPublishExternalAdapter } from './params/offers-publish-external.params';
import { OffersPublishParams, offersPublishAdapter } from './params/offers-publish.params';
import { OffersRemoveOfferParams, offersRemoveOfferAdapter } from './params/offers-remove-offer.params';
import { OffersRemoveParticipantOfferParams, offersRemoveParticipantOfferAdapter } from './params/offers-remove-participant-offer.params';
import { OffersSaveAsDraftParams, offersSaveAsDraftAdapter } from './params/offers-save-as-draft.params';
import { OffersSearchParams, offersSearchAdapter } from './params/offers-search.params';
import { OffersSendCustomerCommercialOfferParams, offersSendCustomerCommercialOfferAdapter } from './params/offers-send-customer-commercial-offer.params';
import { OfferStates } from '../models/offer-states.interface';
import { offerStatesAdapter } from '../adapters/models/offer-states.adapter';
import { OffersUpdateParams, offersUpdateAdapter } from './params/offers-update.params';
import { OffersValidateAccessToOfferParams, offersValidateAccessToOfferAdapter } from './params/offers-validate-access-to-offer.params';
import { ParticipantOfferDto2 } from '../models/participant-offer-dto-2.interface';
import { participantOfferDto2Adapter } from '../adapters/models/participant-offer-dto-2.adapter';
import { ParticipantOfferPublishResult } from '../models/participant-offer-publish-result.interface';
import { participantOfferPublishResultAdapter } from '../adapters/models/participant-offer-publish-result.adapter';
import { UpdateResultAlt } from '../models/update-result-alt.interface';
import { updateResultAltAdapter } from '../adapters/models/update-result-alt.adapter';

@Injectable({ providedIn: 'root' })
export class OffersRepository {
  private readonly _api = inject(OffersApiService);

  offersApprove(params?: OffersApproveParams): Observable<Blob> {
    return this._api.offersApprove(offersApproveAdapter(params));
  }

  offersChangeStateOffer(params?: OffersChangeStateOfferParams): Observable<UpdateResultAlt> {
    return this._api.offersChangeStateOffer(offersChangeStateOfferAdapter(params)).pipe(
      map((res) => updateResultAltAdapter(res))
    );
  }

  offersChechActualizationRequestExtists(params: OffersChechActualizationRequestExtistsParams): Observable<boolean> {
    return this._api.offersChechActualizationRequestExtists(offersChechActualizationRequestExtistsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  offersConfirmExternal(params?: OffersConfirmExternalParams): Observable<Blob> {
    return this._api.offersConfirmExternal(offersConfirmExternalAdapter(params));
  }

  offersCount(params?: OffersCountParams): Observable<OfferStates[]> {
    return this._api.offersCount(offersCountAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => offerStatesAdapter(item)))
    );
  }

  offersCreateParticipantOfferActualizationRequest(params: OffersCreateParticipantOfferActualizationRequestParams): Observable<void> {
    return this._api.offersCreateParticipantOfferActualizationRequest(offersCreateParticipantOfferActualizationRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  offersDisapprove(params?: OffersDisapproveParams): Observable<Blob> {
    return this._api.offersDisapprove(offersDisapproveAdapter(params));
  }

  offersExportPriceListToExcel(params?: OffersExportPriceListToExcelParams): Observable<Blob> {
    return this._api.offersExportPriceListToExcel(offersExportPriceListToExcelAdapter(params));
  }

  offersExtendParticipantOffer(params?: OffersExtendParticipantOfferParams): Observable<Blob> {
    return this._api.offersExtendParticipantOffer(offersExtendParticipantOfferAdapter(params));
  }

  offersExternalSearch(params?: OffersExternalSearchParams): Observable<ParticipantOfferDto2[]> {
    return this._api.offersExternalSearch(offersExternalSearchAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => participantOfferDto2Adapter(item)))
    );
  }

  offersGetExcelImportTemplate(params?: OffersGetExcelImportTemplateParams): Observable<string> {
    return this._api.offersGetExcelImportTemplate(offersGetExcelImportTemplateAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  offersGetExcelImportTemplateExportBy(params?: OffersGetExcelImportTemplateExportByParams): Observable<Blob> {
    return this._api.offersGetExcelImportTemplateExportBy(offersGetExcelImportTemplateExportByAdapter(params));
  }

  offersGetOfferInfo(params: OffersGetOfferInfoParams): Observable<MarketParticipantOfferInfo> {
    return this._api.offersGetOfferInfo(offersGetOfferInfoAdapter(params)).pipe(
      map((res) => marketParticipantOfferInfoAdapter(res?.data))
    );
  }

  offersGetOffers(params?: OffersGetOffersParams): Observable<MarketParticipantOfferInfo[]> {
    return this._api.offersGetOffers(offersGetOffersAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => marketParticipantOfferInfoAdapter(item)))
    );
  }

  offersModerate(params?: OffersModerateParams): Observable<UpdateResultAlt> {
    return this._api.offersModerate(offersModerateAdapter(params)).pipe(
      map((res) => updateResultAltAdapter(res))
    );
  }

  offersPublish(params?: OffersPublishParams): Observable<ParticipantOfferPublishResult> {
    return this._api.offersPublish(offersPublishAdapter(params)).pipe(
      map((res) => participantOfferPublishResultAdapter(res?.data))
    );
  }

  offersPublish2(params?: OffersPublish2Params): Observable<number> {
    return this._api.offersPublish2(offersPublish2Adapter(params));
  }

  offersPublishExternal(params?: OffersPublishExternalParams): Observable<ParticipantOfferPublishResult> {
    return this._api.offersPublishExternal(offersPublishExternalAdapter(params)).pipe(
      map((res) => participantOfferPublishResultAdapter(res?.data))
    );
  }

  offersRemoveOffer(params: OffersRemoveOfferParams): Observable<BatchProcessingResultAlt> {
    return this._api.offersRemoveOffer(offersRemoveOfferAdapter(params)).pipe(
      map((res) => batchProcessingResultAltAdapter(res?.data))
    );
  }

  offersRemoveParticipantOffer(params?: OffersRemoveParticipantOfferParams): Observable<Blob> {
    return this._api.offersRemoveParticipantOffer(offersRemoveParticipantOfferAdapter(params));
  }

  offersSaveAsDraft(params?: OffersSaveAsDraftParams): Observable<number> {
    return this._api.offersSaveAsDraft(offersSaveAsDraftAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  offersSearch(params?: OffersSearchParams): Observable<MarketOfferShortModel[]> {
    return this._api.offersSearch(offersSearchAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => marketOfferShortModelAdapter(item)))
    );
  }

  offersSendCustomerCommercialOffer(params: OffersSendCustomerCommercialOfferParams): Observable<void> {
    return this._api.offersSendCustomerCommercialOffer(offersSendCustomerCommercialOfferAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  offersUpdate(params?: OffersUpdateParams): Observable<Blob> {
    return this._api.offersUpdate(offersUpdateAdapter(params));
  }

  offersValidateAccessToOffer(params: OffersValidateAccessToOfferParams): Observable<boolean> {
    return this._api.offersValidateAccessToOffer(offersValidateAccessToOfferAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
