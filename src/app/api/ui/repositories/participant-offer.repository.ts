import { ImportedResultsAlt } from '../models/imported-results-alt.interface';
import { importedResultsAltAdapter } from '../adapters/models/imported-results-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferApiService } from '../../swagger/services/participant-offer-api.service';
import { ParticipantOfferCheckOffersForOrderCreationParams, participantOfferCheckOffersForOrderCreationAdapter } from './params/participant-offer-check-offers-for-order-creation.params';
import { ParticipantOfferCommercialParams, participantOfferCommercialAdapter } from './params/participant-offer-commercial.params';
import { ParticipantOfferCommercialPrintFormParams, participantOfferCommercialPrintFormAdapter } from './params/participant-offer-commercial-print-form.params';
import { ParticipantOfferDeactivateOffersParams, participantOfferDeactivateOffersAdapter } from './params/participant-offer-deactivate-offers.params';
import { ParticipantOfferExportToExcelByFilterParams, participantOfferExportToExcelByFilterAdapter } from './params/participant-offer-export-to-excel-by-filter.params';
import { ParticipantOfferExportToExcelParams, participantOfferExportToExcelAdapter } from './params/participant-offer-export-to-excel.params';
import { ParticipantOfferGenerateCommercialPrintFormsParams, participantOfferGenerateCommercialPrintFormsAdapter } from './params/participant-offer-generate-commercial-print-forms.params';
import { ParticipantOfferGetActualOfferIdsParams, participantOfferGetActualOfferIdsAdapter } from './params/participant-offer-get-actual-offer-ids.params';
import { ParticipantOfferGetOfferInfoParams, participantOfferGetOfferInfoAdapter } from './params/participant-offer-get-offer-info.params';
import { ParticipantOfferGetOffersInfoParams, participantOfferGetOffersInfoAdapter } from './params/participant-offer-get-offers-info.params';
import { ParticipantOfferGetOffersParams, participantOfferGetOffersAdapter } from './params/participant-offer-get-offers.params';
import { ParticipantOfferGetParticipantOfferForEditParams, participantOfferGetParticipantOfferForEditAdapter } from './params/participant-offer-get-participant-offer-for-edit.params';
import { ParticipantOfferGetPublicOfferIdsParams, participantOfferGetPublicOfferIdsAdapter } from './params/participant-offer-get-public-offer-ids.params';
import { ParticipantOfferGetTemplateForExcelDocumentParams, participantOfferGetTemplateForExcelDocumentAdapter } from './params/participant-offer-get-template-for-excel-document.params';
import { ParticipantOfferLoadCommercialExcelDocumentParams, participantOfferLoadCommercialExcelDocumentAdapter } from './params/participant-offer-load-commercial-excel-document.params';
import { ParticipantOfferLoadDataFromDocumentParams, participantOfferLoadDataFromDocumentAdapter } from './params/participant-offer-load-data-from-document.params';
import { ParticipantOfferLoadDataFromExcelDocumentParams, participantOfferLoadDataFromExcelDocumentAdapter } from './params/participant-offer-load-data-from-excel-document.params';
import { ParticipantOfferPriceListsForAnonymousParams, participantOfferPriceListsForAnonymousAdapter } from './params/participant-offer-price-lists-for-anonymous.params';
import { ParticipantOfferPriceListsParams, participantOfferPriceListsAdapter } from './params/participant-offer-price-lists.params';
import { ParticipantOfferPublishCommercialOffersParams, participantOfferPublishCommercialOffersAdapter } from './params/participant-offer-publish-commercial-offers.params';
import { ParticipantOfferPublishParams, participantOfferPublishAdapter } from './params/participant-offer-publish.params';
import { ParticipantOfferRemoveParticipantOfferParams, participantOfferRemoveParticipantOfferAdapter } from './params/participant-offer-remove-participant-offer.params';
import { ParticipantOfferSaveAsDraftParams, participantOfferSaveAsDraftAdapter } from './params/participant-offer-save-as-draft.params';
import { ParticipantOfferValidateAndGenerateCommercialPrintFormParams, participantOfferValidateAndGenerateCommercialPrintFormAdapter } from './params/participant-offer-validate-and-generate-commercial-print-form.params';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferRepository {
  private readonly _api = inject(ParticipantOfferApiService);

  participantOfferCheckOffersForOrderCreation(params?: ParticipantOfferCheckOffersForOrderCreationParams): Observable<Blob> {
    return this._api.participantOfferCheckOffersForOrderCreation(participantOfferCheckOffersForOrderCreationAdapter(params));
  }

  participantOfferCommercial(params?: ParticipantOfferCommercialParams): Observable<Blob> {
    return this._api.participantOfferCommercial(participantOfferCommercialAdapter(params));
  }

  participantOfferCommercialPrintForm(params: ParticipantOfferCommercialPrintFormParams): Observable<Blob> {
    return this._api.participantOfferCommercialPrintForm(participantOfferCommercialPrintFormAdapter(params));
  }

  participantOfferDeactivateOffers(params?: ParticipantOfferDeactivateOffersParams): Observable<Blob> {
    return this._api.participantOfferDeactivateOffers(participantOfferDeactivateOffersAdapter(params));
  }

  participantOfferExportToExcel(params?: ParticipantOfferExportToExcelParams): Observable<Blob> {
    return this._api.participantOfferExportToExcel(participantOfferExportToExcelAdapter(params));
  }

  participantOfferExportToExcelByFilter(params?: ParticipantOfferExportToExcelByFilterParams): Observable<Blob> {
    return this._api.participantOfferExportToExcelByFilter(participantOfferExportToExcelByFilterAdapter(params));
  }

  participantOfferGenerateCommercialPrintForms(params?: ParticipantOfferGenerateCommercialPrintFormsParams): Observable<Blob> {
    return this._api.participantOfferGenerateCommercialPrintForms(participantOfferGenerateCommercialPrintFormsAdapter(params));
  }

  participantOfferGetActualOfferIds(params?: ParticipantOfferGetActualOfferIdsParams): Observable<Blob> {
    return this._api.participantOfferGetActualOfferIds(participantOfferGetActualOfferIdsAdapter(params));
  }

  participantOfferGetOfferInfo(params: ParticipantOfferGetOfferInfoParams): Observable<Blob> {
    return this._api.participantOfferGetOfferInfo(participantOfferGetOfferInfoAdapter(params));
  }

  participantOfferGetOffers(params?: ParticipantOfferGetOffersParams): Observable<Blob> {
    return this._api.participantOfferGetOffers(participantOfferGetOffersAdapter(params));
  }

  participantOfferGetOffersInfo(params?: ParticipantOfferGetOffersInfoParams): Observable<Blob> {
    return this._api.participantOfferGetOffersInfo(participantOfferGetOffersInfoAdapter(params));
  }

  participantOfferGetParticipantOfferForEdit(params: ParticipantOfferGetParticipantOfferForEditParams): Observable<Blob> {
    return this._api.participantOfferGetParticipantOfferForEdit(participantOfferGetParticipantOfferForEditAdapter(params));
  }

  participantOfferGetPublicOfferIds(params?: ParticipantOfferGetPublicOfferIdsParams): Observable<Blob> {
    return this._api.participantOfferGetPublicOfferIds(participantOfferGetPublicOfferIdsAdapter(params));
  }

  participantOfferGetTemplateForExcelDocument(params: ParticipantOfferGetTemplateForExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferGetTemplateForExcelDocument(participantOfferGetTemplateForExcelDocumentAdapter(params));
  }

  participantOfferLoadCommercialExcelDocument(params?: ParticipantOfferLoadCommercialExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferLoadCommercialExcelDocument(participantOfferLoadCommercialExcelDocumentAdapter(params));
  }

  participantOfferLoadDataFromDocument(params?: ParticipantOfferLoadDataFromDocumentParams): Observable<ImportedResultsAlt> {
    return this._api.participantOfferLoadDataFromDocument(participantOfferLoadDataFromDocumentAdapter(params)).pipe(
      map((res) => importedResultsAltAdapter(res))
    );
  }

  participantOfferLoadDataFromExcelDocument(params?: ParticipantOfferLoadDataFromExcelDocumentParams): Observable<Blob> {
    return this._api.participantOfferLoadDataFromExcelDocument(participantOfferLoadDataFromExcelDocumentAdapter(params));
  }

  participantOfferPriceLists(params?: ParticipantOfferPriceListsParams): Observable<Blob> {
    return this._api.participantOfferPriceLists(participantOfferPriceListsAdapter(params));
  }

  participantOfferPriceListsForAnonymous(params?: ParticipantOfferPriceListsForAnonymousParams): Observable<Blob> {
    return this._api.participantOfferPriceListsForAnonymous(participantOfferPriceListsForAnonymousAdapter(params));
  }

  participantOfferPublish(params?: ParticipantOfferPublishParams): Observable<Blob> {
    return this._api.participantOfferPublish(participantOfferPublishAdapter(params));
  }

  participantOfferPublishCommercialOffers(params?: ParticipantOfferPublishCommercialOffersParams): Observable<Blob> {
    return this._api.participantOfferPublishCommercialOffers(participantOfferPublishCommercialOffersAdapter(params));
  }

  participantOfferRemoveParticipantOffer(params?: ParticipantOfferRemoveParticipantOfferParams): Observable<Blob> {
    return this._api.participantOfferRemoveParticipantOffer(participantOfferRemoveParticipantOfferAdapter(params));
  }

  participantOfferSaveAsDraft(params?: ParticipantOfferSaveAsDraftParams): Observable<Blob> {
    return this._api.participantOfferSaveAsDraft(participantOfferSaveAsDraftAdapter(params));
  }

  participantOfferValidateAndGenerateCommercialPrintForm(params?: ParticipantOfferValidateAndGenerateCommercialPrintFormParams): Observable<Blob> {
    return this._api.participantOfferValidateAndGenerateCommercialPrintForm(participantOfferValidateAndGenerateCommercialPrintFormAdapter(params));
  }

}
