import { adaptExternalLotItemsParticipantOffersInfoToUI } from '../adapters/toUI/external-lot-items-participant-offers-info.adapter';
import { adaptGetParticipantOffersByTradeResponseToUI } from '../adapters/toUI/get-participant-offers-by-trade-response.adapter';
import { adaptImportExcelApplicationSpecificationsResultAltToUI } from '../adapters/toUI/import-excel-application-specifications-result-alt.adapter';
import { adaptImportExcelParticipantOfferToTradeResultAltToUI } from '../adapters/toUI/import-excel-participant-offer-to-trade-result-alt.adapter';
import { adaptLotItemsParticipantOffersInfoToUI } from '../adapters/toUI/lot-items-participant-offers-info.adapter';
import { adaptParticipantOfferShortInfoToUI } from '../adapters/toUI/participant-offer-short-info.adapter';
import { ExternalLotItemsParticipantOffersInfo } from '../models/external-lot-items-participant-offers-info.interface';
import { GetParticipantOffersByTradeResponse } from '../models/get-participant-offers-by-trade-response.interface';
import { ImportExcelApplicationSpecificationsResultAlt } from '../models/import-excel-application-specifications-result-alt.interface';
import { ImportExcelParticipantOfferToTradeResultAlt } from '../models/import-excel-participant-offer-to-trade-result-alt.interface';
import { Injectable, inject } from '@angular/core';
import { LotItemsParticipantOffersInfo } from '../models/lot-items-participant-offers-info.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferShortInfo } from '../models/participant-offer-short-info.interface';
import { ParticipantOfferToTradeApiService } from '../../swagger/services/participant-offer-to-trade-api.service';
import { ParticipantOfferToTradeCreateParticipantOffersToTradeParams, participantOfferToTradeCreateParticipantOffersToTradeParamsAdapter } from './params/participant-offer-to-trade-create-participant-offers-to-trade.params';
import { ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams, participantOfferToTradeCreateParticipantOfferToTradeLotItemParamsAdapter } from './params/participant-offer-to-trade-create-participant-offer-to-trade-lot-item.params';
import { ParticipantOfferToTradeGetExcelImportTemplateForTradeParams, participantOfferToTradeGetExcelImportTemplateForTradeParamsAdapter } from './params/participant-offer-to-trade-get-excel-import-template-for-trade.params';
import { ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams, participantOfferToTradeGetExternalLotItemsFullOffersInfoParamsAdapter } from './params/participant-offer-to-trade-get-external-lot-items-full-offers-info.params';
import { ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams, participantOfferToTradeGetExternalLotItemsShortOffersInfoParamsAdapter } from './params/participant-offer-to-trade-get-external-lot-items-short-offers-info.params';
import { ParticipantOfferToTradeGetImportByExcelTemplateParams, participantOfferToTradeGetImportByExcelTemplateParamsAdapter } from './params/participant-offer-to-trade-get-import-by-excel-template.params';
import { ParticipantOfferToTradeGetLotItemsFullOffersInfoParams, participantOfferToTradeGetLotItemsFullOffersInfoParamsAdapter } from './params/participant-offer-to-trade-get-lot-items-full-offers-info.params';
import { ParticipantOfferToTradeGetLotItemsShortOffersInfoParams, participantOfferToTradeGetLotItemsShortOffersInfoParamsAdapter } from './params/participant-offer-to-trade-get-lot-items-short-offers-info.params';
import { ParticipantOfferToTradeGetOffersByLotItemIdParams, participantOfferToTradeGetOffersByLotItemIdParamsAdapter } from './params/participant-offer-to-trade-get-offers-by-lot-item-id.params';
import { ParticipantOfferToTradeGetOffersByTradeIdParams, participantOfferToTradeGetOffersByTradeIdParamsAdapter } from './params/participant-offer-to-trade-get-offers-by-trade-id.params';
import { ParticipantOfferToTradeGetParticipantOffersByTradeIdParams, participantOfferToTradeGetParticipantOffersByTradeIdParamsAdapter } from './params/participant-offer-to-trade-get-participant-offers-by-trade-id.params';
import { ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams, participantOfferToTradeGetSuitableParticipantOffersExcelReportParamsAdapter } from './params/participant-offer-to-trade-get-suitable-participant-offers-excel-report.params';
import { ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams, participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParamsAdapter } from './params/participant-offer-to-trade-get-trade-lot-specifications-import-by-excel-template.params';
import { ParticipantOfferToTradeImportByExcelParams, participantOfferToTradeImportByExcelParamsAdapter } from './params/participant-offer-to-trade-import-by-excel.params';
import { ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams, participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParamsAdapter } from './params/participant-offer-to-trade-import-trade-lot-application-specifications-from-excel.params';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferToTradeRepository {
  private readonly _api = inject(ParticipantOfferToTradeApiService);

  participantOfferToTradeCreateParticipantOffersToTrade(params: ParticipantOfferToTradeCreateParticipantOffersToTradeParams): Observable<void> {
    return this._api.participantOfferToTradeCreateParticipantOffersToTrade(participantOfferToTradeCreateParticipantOffersToTradeParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferToTradeCreateParticipantOfferToTradeLotItem(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams): Observable<void> {
    return this._api.participantOfferToTradeCreateParticipantOfferToTradeLotItem(participantOfferToTradeCreateParticipantOfferToTradeLotItemParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferToTradeGetExcelImportTemplateForTrade(params: ParticipantOfferToTradeGetExcelImportTemplateForTradeParams): Observable<string> {
    return this._api.participantOfferToTradeGetExcelImportTemplateForTrade(participantOfferToTradeGetExcelImportTemplateForTradeParamsAdapter.adapt(params));
  }

  participantOfferToTradeGetExternalLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams): Observable<ExternalLotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetExternalLotItemsFullOffersInfo(participantOfferToTradeGetExternalLotItemsFullOffersInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptExternalLotItemsParticipantOffersInfoToUI(item)))
    );
  }

  participantOfferToTradeGetExternalLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetExternalLotItemsShortOffersInfo(participantOfferToTradeGetExternalLotItemsShortOffersInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptLotItemsParticipantOffersInfoToUI(item)))
    );
  }

  participantOfferToTradeGetImportByExcelTemplate(params?: ParticipantOfferToTradeGetImportByExcelTemplateParams): Observable<string> {
    return this._api.participantOfferToTradeGetImportByExcelTemplate(participantOfferToTradeGetImportByExcelTemplateParamsAdapter.adapt(params));
  }

  participantOfferToTradeGetLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetLotItemsFullOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetLotItemsFullOffersInfo(participantOfferToTradeGetLotItemsFullOffersInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptLotItemsParticipantOffersInfoToUI(item)))
    );
  }

  participantOfferToTradeGetLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetLotItemsShortOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetLotItemsShortOffersInfo(participantOfferToTradeGetLotItemsShortOffersInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptLotItemsParticipantOffersInfoToUI(item)))
    );
  }

  participantOfferToTradeGetOffersByLotItemId(params: ParticipantOfferToTradeGetOffersByLotItemIdParams): Observable<ParticipantOfferShortInfo[]> {
    return this._api.participantOfferToTradeGetOffersByLotItemId(participantOfferToTradeGetOffersByLotItemIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptParticipantOfferShortInfoToUI(item)))
    );
  }

  participantOfferToTradeGetOffersByTradeId(params: ParticipantOfferToTradeGetOffersByTradeIdParams): Observable<GetParticipantOffersByTradeResponse> {
    return this._api.participantOfferToTradeGetOffersByTradeId(participantOfferToTradeGetOffersByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptGetParticipantOffersByTradeResponseToUI(res?.data))
    );
  }

  participantOfferToTradeGetParticipantOffersByTradeId(params: ParticipantOfferToTradeGetParticipantOffersByTradeIdParams): Observable<ParticipantOfferShortInfo[]> {
    return this._api.participantOfferToTradeGetParticipantOffersByTradeId(participantOfferToTradeGetParticipantOffersByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptParticipantOfferShortInfoToUI(item)))
    );
  }

  participantOfferToTradeGetSuitableParticipantOffersExcelReport(params: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams): Observable<Blob> {
    return this._api.participantOfferToTradeGetSuitableParticipantOffersExcelReport(participantOfferToTradeGetSuitableParticipantOffersExcelReportParamsAdapter.adapt(params));
  }

  participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(params: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams): Observable<string> {
    return this._api.participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  participantOfferToTradeImportByExcel(params: ParticipantOfferToTradeImportByExcelParams): Observable<ImportExcelParticipantOfferToTradeResultAlt> {
    return this._api.participantOfferToTradeImportByExcel(participantOfferToTradeImportByExcelParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportExcelParticipantOfferToTradeResultAltToUI(res?.data))
    );
  }

  participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(params: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams): Observable<ImportExcelApplicationSpecificationsResultAlt> {
    return this._api.participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportExcelApplicationSpecificationsResultAltToUI(res?.data))
    );
  }

}
