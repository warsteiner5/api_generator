import { adaptImportedResultsAltToUI } from '../adapters/toUI/imported-results-alt.adapter';
import { ImportedResultsAlt } from '../models/imported-results-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferApiService } from '../../swagger/services/participant-offer-api.service';
import { ParticipantOfferCheckOffersForOrderCreationParams, participantOfferCheckOffersForOrderCreationParamsAdapter } from './params/participant-offer-check-offers-for-order-creation.params';
import { ParticipantOfferCommercialParams, participantOfferCommercialParamsAdapter } from './params/participant-offer-commercial.params';
import { ParticipantOfferCommercialPrintFormParams, participantOfferCommercialPrintFormParamsAdapter } from './params/participant-offer-commercial-print-form.params';
import { ParticipantOfferDeactivateOffersParams, participantOfferDeactivateOffersParamsAdapter } from './params/participant-offer-deactivate-offers.params';
import { ParticipantOfferExportToExcelByFilterParams, participantOfferExportToExcelByFilterParamsAdapter } from './params/participant-offer-export-to-excel-by-filter.params';
import { ParticipantOfferExportToExcelParams, participantOfferExportToExcelParamsAdapter } from './params/participant-offer-export-to-excel.params';
import { ParticipantOfferGenerateCommercialPrintFormsParams, participantOfferGenerateCommercialPrintFormsParamsAdapter } from './params/participant-offer-generate-commercial-print-forms.params';
import { ParticipantOfferGetActualOfferIdsParams, participantOfferGetActualOfferIdsParamsAdapter } from './params/participant-offer-get-actual-offer-ids.params';
import { ParticipantOfferGetOfferInfoParams, participantOfferGetOfferInfoParamsAdapter } from './params/participant-offer-get-offer-info.params';
import { ParticipantOfferGetOffersInfoParams, participantOfferGetOffersInfoParamsAdapter } from './params/participant-offer-get-offers-info.params';
import { ParticipantOfferGetOffersParams, participantOfferGetOffersParamsAdapter } from './params/participant-offer-get-offers.params';
import { ParticipantOfferGetParticipantOfferForEditParams, participantOfferGetParticipantOfferForEditParamsAdapter } from './params/participant-offer-get-participant-offer-for-edit.params';
import { ParticipantOfferGetPublicOfferIdsParams, participantOfferGetPublicOfferIdsParamsAdapter } from './params/participant-offer-get-public-offer-ids.params';
import { ParticipantOfferGetTemplateForExcelDocumentParams, participantOfferGetTemplateForExcelDocumentParamsAdapter } from './params/participant-offer-get-template-for-excel-document.params';
import { ParticipantOfferLoadCommercialExcelDocumentParams, participantOfferLoadCommercialExcelDocumentParamsAdapter } from './params/participant-offer-load-commercial-excel-document.params';
import { ParticipantOfferLoadDataFromDocumentParams, participantOfferLoadDataFromDocumentParamsAdapter } from './params/participant-offer-load-data-from-document.params';
import { ParticipantOfferLoadDataFromExcelDocumentParams, participantOfferLoadDataFromExcelDocumentParamsAdapter } from './params/participant-offer-load-data-from-excel-document.params';
import { ParticipantOfferPriceListsForAnonymousParams, participantOfferPriceListsForAnonymousParamsAdapter } from './params/participant-offer-price-lists-for-anonymous.params';
import { ParticipantOfferPriceListsParams, participantOfferPriceListsParamsAdapter } from './params/participant-offer-price-lists.params';
import { ParticipantOfferPublishCommercialOffersParams, participantOfferPublishCommercialOffersParamsAdapter } from './params/participant-offer-publish-commercial-offers.params';
import { ParticipantOfferPublishParams, participantOfferPublishParamsAdapter } from './params/participant-offer-publish.params';
import { ParticipantOfferRemoveParticipantOfferParams, participantOfferRemoveParticipantOfferParamsAdapter } from './params/participant-offer-remove-participant-offer.params';
import { ParticipantOfferSaveAsDraftParams, participantOfferSaveAsDraftParamsAdapter } from './params/participant-offer-save-as-draft.params';
import { ParticipantOfferValidateAndGenerateCommercialPrintFormParams, participantOfferValidateAndGenerateCommercialPrintFormParamsAdapter } from './params/participant-offer-validate-and-generate-commercial-print-form.params';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferRepository {
  private readonly _api = inject(ParticipantOfferApiService);

  participantOfferCheckOffersForOrderCreation(params?: ParticipantOfferCheckOffersForOrderCreationParams): Observable<Blob> {
    return this._api.participantOfferCheckOffersForOrderCreation(participantOfferCheckOffersForOrderCreationParamsAdapter.adapt(params));
  }

  participantOfferCommercial(params?: ParticipantOfferCommercialParams): Observable<Blob> {
    return this._api.participantOfferCommercial(participantOfferCommercialParamsAdapter.adapt(params));
  }

  participantOfferCommercialPrintForm(params: ParticipantOfferCommercialPrintFormParams): Observable<Blob> {
    return this._api.participantOfferCommercialPrintForm(participantOfferCommercialPrintFormParamsAdapter.adapt(params));
  }

  participantOfferDeactivateOffers(params?: ParticipantOfferDeactivateOffersParams): Observable<Blob> {
    return this._api.participantOfferDeactivateOffers(participantOfferDeactivateOffersParamsAdapter.adapt(params));
  }

  participantOfferExportToExcel(params?: ParticipantOfferExportToExcelParams): Observable<Blob> {
    return this._api.participantOfferExportToExcel(participantOfferExportToExcelParamsAdapter.adapt(params));
  }

  participantOfferExportToExcelByFilter(params?: ParticipantOfferExportToExcelByFilterParams): Observable<Blob> {
    return this._api.participantOfferExportToExcelByFilter(participantOfferExportToExcelByFilterParamsAdapter.adapt(params));
  }

  participantOfferGenerateCommercialPrintForms(params?: ParticipantOfferGenerateCommercialPrintFormsParams): Observable<Blob> {
    return this._api.participantOfferGenerateCommercialPrintForms(participantOfferGenerateCommercialPrintFormsParamsAdapter.adapt(params));
  }

  participantOfferGetActualOfferIds(params?: ParticipantOfferGetActualOfferIdsParams): Observable<Blob> {
    return this._api.participantOfferGetActualOfferIds(participantOfferGetActualOfferIdsParamsAdapter.adapt(params));
  }

  participantOfferGetOfferInfo(params: ParticipantOfferGetOfferInfoParams): Observable<Blob> {
    return this._api.participantOfferGetOfferInfo(participantOfferGetOfferInfoParamsAdapter.adapt(params));
  }

  participantOfferGetOffers(params?: ParticipantOfferGetOffersParams): Observable<Blob> {
    return this._api.participantOfferGetOffers(participantOfferGetOffersParamsAdapter.adapt(params));
  }

  participantOfferGetOffersInfo(params?: ParticipantOfferGetOffersInfoParams): Observable<Blob> {
    return this._api.participantOfferGetOffersInfo(participantOfferGetOffersInfoParamsAdapter.adapt(params));
  }

  participantOfferGetParticipantOfferForEdit(params: ParticipantOfferGetParticipantOfferForEditParams): Observable<Blob> {
    return this._api.participantOfferGetParticipantOfferForEdit(participantOfferGetParticipantOfferForEditParamsAdapter.adapt(params));
  }

  participantOfferGetPublicOfferIds(params?: ParticipantOfferGetPublicOfferIdsParams): Observable<Blob> {
    return this._api.participantOfferGetPublicOfferIds(participantOfferGetPublicOfferIdsParamsAdapter.adapt(params));
  }

  participantOfferGetTemplateForExcelDocument(params: ParticipantOfferGetTemplateForExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferGetTemplateForExcelDocument(participantOfferGetTemplateForExcelDocumentParamsAdapter.adapt(params));
  }

  participantOfferLoadCommercialExcelDocument(params?: ParticipantOfferLoadCommercialExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferLoadCommercialExcelDocument(participantOfferLoadCommercialExcelDocumentParamsAdapter.adapt(params));
  }

  participantOfferLoadDataFromDocument(params?: ParticipantOfferLoadDataFromDocumentParams): Observable<ImportedResultsAlt> {
    return this._api.participantOfferLoadDataFromDocument(participantOfferLoadDataFromDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportedResultsAltToUI(res))
    );
  }

  participantOfferLoadDataFromExcelDocument(params?: ParticipantOfferLoadDataFromExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferLoadDataFromExcelDocument(participantOfferLoadDataFromExcelDocumentParamsAdapter.adapt(params));
  }

  participantOfferPriceLists(params?: ParticipantOfferPriceListsParams): Observable<Blob> {
    return this._api.participantOfferPriceLists(participantOfferPriceListsParamsAdapter.adapt(params));
  }

  participantOfferPriceListsForAnonymous(params?: ParticipantOfferPriceListsForAnonymousParams): Observable<Blob> {
    return this._api.participantOfferPriceListsForAnonymous(participantOfferPriceListsForAnonymousParamsAdapter.adapt(params));
  }

  participantOfferPublish(params?: ParticipantOfferPublishParams): Observable<Blob> {
    return this._api.participantOfferPublish(participantOfferPublishParamsAdapter.adapt(params));
  }

  participantOfferPublishCommercialOffers(params?: ParticipantOfferPublishCommercialOffersParams): Observable<Blob> {
    return this._api.participantOfferPublishCommercialOffers(participantOfferPublishCommercialOffersParamsAdapter.adapt(params));
  }

  participantOfferRemoveParticipantOffer(params?: ParticipantOfferRemoveParticipantOfferParams): Observable<Blob> {
    return this._api.participantOfferRemoveParticipantOffer(participantOfferRemoveParticipantOfferParamsAdapter.adapt(params));
  }

  participantOfferSaveAsDraft(params?: ParticipantOfferSaveAsDraftParams): Observable<Blob> {
    return this._api.participantOfferSaveAsDraft(participantOfferSaveAsDraftParamsAdapter.adapt(params));
  }

  participantOfferValidateAndGenerateCommercialPrintForm(params?: ParticipantOfferValidateAndGenerateCommercialPrintFormParams): Observable<Blob> {
    return this._api.participantOfferValidateAndGenerateCommercialPrintForm(participantOfferValidateAndGenerateCommercialPrintFormParamsAdapter.adapt(params));
  }

}
