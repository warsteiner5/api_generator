import { ExternalLotItemsParticipantOffersInfo } from '../models/external-lot-items-participant-offers-info.interface';
import { externalLotItemsParticipantOffersInfoAdapter } from '../adapters/models/external-lot-items-participant-offers-info.adapter';
import { GetParticipantOffersByTradeResponse } from '../models/get-participant-offers-by-trade-response.interface';
import { getParticipantOffersByTradeResponseAdapter } from '../adapters/models/get-participant-offers-by-trade-response.adapter';
import { ImportExcelApplicationSpecificationsResultAlt } from '../models/import-excel-application-specifications-result-alt.interface';
import { importExcelApplicationSpecificationsResultAltAdapter } from '../adapters/models/import-excel-application-specifications-result-alt.adapter';
import { ImportExcelParticipantOfferToTradeResultAlt } from '../models/import-excel-participant-offer-to-trade-result-alt.interface';
import { importExcelParticipantOfferToTradeResultAltAdapter } from '../adapters/models/import-excel-participant-offer-to-trade-result-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { LotItemsParticipantOffersInfo } from '../models/lot-items-participant-offers-info.interface';
import { lotItemsParticipantOffersInfoAdapter } from '../adapters/models/lot-items-participant-offers-info.adapter';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferShortInfo } from '../models/participant-offer-short-info.interface';
import { participantOfferShortInfoAdapter } from '../adapters/models/participant-offer-short-info.adapter';
import { ParticipantOfferToTradeApiService } from '../../swagger/services/participant-offer-to-trade-api.service';
import { ParticipantOfferToTradeCreateParticipantOffersToTradeParams, participantOfferToTradeCreateParticipantOffersToTradeAdapter } from './params/participant-offer-to-trade-create-participant-offers-to-trade.params';
import { ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams, participantOfferToTradeCreateParticipantOfferToTradeLotItemAdapter } from './params/participant-offer-to-trade-create-participant-offer-to-trade-lot-item.params';
import { ParticipantOfferToTradeGetExcelImportTemplateForTradeParams, participantOfferToTradeGetExcelImportTemplateForTradeAdapter } from './params/participant-offer-to-trade-get-excel-import-template-for-trade.params';
import { ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams, participantOfferToTradeGetExternalLotItemsFullOffersInfoAdapter } from './params/participant-offer-to-trade-get-external-lot-items-full-offers-info.params';
import { ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams, participantOfferToTradeGetExternalLotItemsShortOffersInfoAdapter } from './params/participant-offer-to-trade-get-external-lot-items-short-offers-info.params';
import { ParticipantOfferToTradeGetImportByExcelTemplateParams, participantOfferToTradeGetImportByExcelTemplateAdapter } from './params/participant-offer-to-trade-get-import-by-excel-template.params';
import { ParticipantOfferToTradeGetLotItemsFullOffersInfoParams, participantOfferToTradeGetLotItemsFullOffersInfoAdapter } from './params/participant-offer-to-trade-get-lot-items-full-offers-info.params';
import { ParticipantOfferToTradeGetLotItemsShortOffersInfoParams, participantOfferToTradeGetLotItemsShortOffersInfoAdapter } from './params/participant-offer-to-trade-get-lot-items-short-offers-info.params';
import { ParticipantOfferToTradeGetOffersByLotItemIdParams, participantOfferToTradeGetOffersByLotItemIdAdapter } from './params/participant-offer-to-trade-get-offers-by-lot-item-id.params';
import { ParticipantOfferToTradeGetOffersByTradeIdParams, participantOfferToTradeGetOffersByTradeIdAdapter } from './params/participant-offer-to-trade-get-offers-by-trade-id.params';
import { ParticipantOfferToTradeGetParticipantOffersByTradeIdParams, participantOfferToTradeGetParticipantOffersByTradeIdAdapter } from './params/participant-offer-to-trade-get-participant-offers-by-trade-id.params';
import { ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams, participantOfferToTradeGetSuitableParticipantOffersExcelReportAdapter } from './params/participant-offer-to-trade-get-suitable-participant-offers-excel-report.params';
import { ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams, participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateAdapter } from './params/participant-offer-to-trade-get-trade-lot-specifications-import-by-excel-template.params';
import { ParticipantOfferToTradeImportByExcelParams, participantOfferToTradeImportByExcelAdapter } from './params/participant-offer-to-trade-import-by-excel.params';
import { ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams, participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelAdapter } from './params/participant-offer-to-trade-import-trade-lot-application-specifications-from-excel.params';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferToTradeRepository {
  private readonly _api = inject(ParticipantOfferToTradeApiService);

  participantOfferToTradeCreateParticipantOffersToTrade(params: ParticipantOfferToTradeCreateParticipantOffersToTradeParams): Observable<void> {
    return this._api.participantOfferToTradeCreateParticipantOffersToTrade(participantOfferToTradeCreateParticipantOffersToTradeAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferToTradeCreateParticipantOfferToTradeLotItem(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams): Observable<void> {
    return this._api.participantOfferToTradeCreateParticipantOfferToTradeLotItem(participantOfferToTradeCreateParticipantOfferToTradeLotItemAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferToTradeGetExcelImportTemplateForTrade(params: ParticipantOfferToTradeGetExcelImportTemplateForTradeParams): Observable<string> {
    return this._api.participantOfferToTradeGetExcelImportTemplateForTrade(participantOfferToTradeGetExcelImportTemplateForTradeAdapter(params));
  }

  participantOfferToTradeGetExternalLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams): Observable<ExternalLotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetExternalLotItemsFullOffersInfo(participantOfferToTradeGetExternalLotItemsFullOffersInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => externalLotItemsParticipantOffersInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetExternalLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetExternalLotItemsShortOffersInfo(participantOfferToTradeGetExternalLotItemsShortOffersInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => lotItemsParticipantOffersInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetImportByExcelTemplate(params?: ParticipantOfferToTradeGetImportByExcelTemplateParams): Observable<string> {
    return this._api.participantOfferToTradeGetImportByExcelTemplate(participantOfferToTradeGetImportByExcelTemplateAdapter(params));
  }

  participantOfferToTradeGetLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetLotItemsFullOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetLotItemsFullOffersInfo(participantOfferToTradeGetLotItemsFullOffersInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => lotItemsParticipantOffersInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetLotItemsShortOffersInfoParams): Observable<LotItemsParticipantOffersInfo[]> {
    return this._api.participantOfferToTradeGetLotItemsShortOffersInfo(participantOfferToTradeGetLotItemsShortOffersInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => lotItemsParticipantOffersInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetOffersByLotItemId(params: ParticipantOfferToTradeGetOffersByLotItemIdParams): Observable<ParticipantOfferShortInfo[]> {
    return this._api.participantOfferToTradeGetOffersByLotItemId(participantOfferToTradeGetOffersByLotItemIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => participantOfferShortInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetOffersByTradeId(params: ParticipantOfferToTradeGetOffersByTradeIdParams): Observable<GetParticipantOffersByTradeResponse> {
    return this._api.participantOfferToTradeGetOffersByTradeId(participantOfferToTradeGetOffersByTradeIdAdapter(params)).pipe(
      map((res) => getParticipantOffersByTradeResponseAdapter(res?.data))
    );
  }

  participantOfferToTradeGetParticipantOffersByTradeId(params: ParticipantOfferToTradeGetParticipantOffersByTradeIdParams): Observable<ParticipantOfferShortInfo[]> {
    return this._api.participantOfferToTradeGetParticipantOffersByTradeId(participantOfferToTradeGetParticipantOffersByTradeIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => participantOfferShortInfoAdapter(item)))
    );
  }

  participantOfferToTradeGetSuitableParticipantOffersExcelReport(params: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams): Observable<Blob> {
    return this._api.participantOfferToTradeGetSuitableParticipantOffersExcelReport(participantOfferToTradeGetSuitableParticipantOffersExcelReportAdapter(params));
  }

  participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(params: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams): Observable<string> {
    return this._api.participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  participantOfferToTradeImportByExcel(params: ParticipantOfferToTradeImportByExcelParams): Observable<ImportExcelParticipantOfferToTradeResultAlt> {
    return this._api.participantOfferToTradeImportByExcel(participantOfferToTradeImportByExcelAdapter(params)).pipe(
      map((res) => importExcelParticipantOfferToTradeResultAltAdapter(res?.data))
    );
  }

  participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(params: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams): Observable<ImportExcelApplicationSpecificationsResultAlt> {
    return this._api.participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelAdapter(params)).pipe(
      map((res) => importExcelApplicationSpecificationsResultAltAdapter(res?.data))
    );
  }

}
