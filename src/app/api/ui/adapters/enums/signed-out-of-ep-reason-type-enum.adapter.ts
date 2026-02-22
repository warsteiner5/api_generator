import { ApiSignedOutOfEpReasonTypeEnum } from '../../../swagger/models/api-signed-out-of-ep-reason-type-enum';
import { SignedOutOfEpReasonTypeEnum } from '../../enums/signed-out-of-ep-reason-type.enum';

export const signedOutOfEpReasonTypeEnumAdapter = (source?: ApiSignedOutOfEpReasonTypeEnum | null): SignedOutOfEpReasonTypeEnum => {
  switch (source) {
    case ApiSignedOutOfEpReasonTypeEnum.UtilitiesAndEnergyServices:
      return SignedOutOfEpReasonTypeEnum.UtilitiesAndEnergyServices;
    case ApiSignedOutOfEpReasonTypeEnum.InformationSystemsMaintenance:
      return SignedOutOfEpReasonTypeEnum.InformationSystemsMaintenance;
    case ApiSignedOutOfEpReasonTypeEnum.FixedTelephoneServices:
      return SignedOutOfEpReasonTypeEnum.FixedTelephoneServices;
    case ApiSignedOutOfEpReasonTypeEnum.MobileCommunicationServices:
      return SignedOutOfEpReasonTypeEnum.MobileCommunicationServices;
    case ApiSignedOutOfEpReasonTypeEnum.PersonalServicesContracts:
      return SignedOutOfEpReasonTypeEnum.PersonalServicesContracts;
    case ApiSignedOutOfEpReasonTypeEnum.PostalSuppliesAndServices:
      return SignedOutOfEpReasonTypeEnum.PostalSuppliesAndServices;
    case ApiSignedOutOfEpReasonTypeEnum.SpecialAndCourierPostalServices:
      return SignedOutOfEpReasonTypeEnum.SpecialAndCourierPostalServices;
    case ApiSignedOutOfEpReasonTypeEnum.InformationSecurityServices:
      return SignedOutOfEpReasonTypeEnum.InformationSecurityServices;
    case ApiSignedOutOfEpReasonTypeEnum.CostEstimateVerification:
      return SignedOutOfEpReasonTypeEnum.CostEstimateVerification;
    case ApiSignedOutOfEpReasonTypeEnum.EventParticipationServices:
      return SignedOutOfEpReasonTypeEnum.EventParticipationServices;
    case ApiSignedOutOfEpReasonTypeEnum.NotaryServices:
      return SignedOutOfEpReasonTypeEnum.NotaryServices;
    case ApiSignedOutOfEpReasonTypeEnum.BusinessTripArrangements:
      return SignedOutOfEpReasonTypeEnum.BusinessTripArrangements;
    case ApiSignedOutOfEpReasonTypeEnum.WarrantyVehicleMaintenance:
      return SignedOutOfEpReasonTypeEnum.WarrantyVehicleMaintenance;
    case ApiSignedOutOfEpReasonTypeEnum.EmergencyVehicleRepairs:
      return SignedOutOfEpReasonTypeEnum.EmergencyVehicleRepairs;
    case ApiSignedOutOfEpReasonTypeEnum.HeavyEquipmentTransportForRepair:
      return SignedOutOfEpReasonTypeEnum.HeavyEquipmentTransportForRepair;
    case ApiSignedOutOfEpReasonTypeEnum.OfficialRegistryDocumentRequests:
      return SignedOutOfEpReasonTypeEnum.OfficialRegistryDocumentRequests;
    case ApiSignedOutOfEpReasonTypeEnum.PeriodicalPublicationsSubscription:
      return SignedOutOfEpReasonTypeEnum.PeriodicalPublicationsSubscription;
    case ApiSignedOutOfEpReasonTypeEnum.OfficialPublicationAdvertising:
      return SignedOutOfEpReasonTypeEnum.OfficialPublicationAdvertising;
    case ApiSignedOutOfEpReasonTypeEnum.MediaContentProductionAndPublication:
      return SignedOutOfEpReasonTypeEnum.MediaContentProductionAndPublication;
    case ApiSignedOutOfEpReasonTypeEnum.RealEstateLeasing:
      return SignedOutOfEpReasonTypeEnum.RealEstateLeasing;
    case ApiSignedOutOfEpReasonTypeEnum.GovernmentRepresentationServices:
      return SignedOutOfEpReasonTypeEnum.GovernmentRepresentationServices;
    case ApiSignedOutOfEpReasonTypeEnum.ExtemporaneousMedicines:
      return SignedOutOfEpReasonTypeEnum.ExtemporaneousMedicines;
    case ApiSignedOutOfEpReasonTypeEnum.NarcoticSubstancesManagement:
      return SignedOutOfEpReasonTypeEnum.NarcoticSubstancesManagement;
    case ApiSignedOutOfEpReasonTypeEnum.MedicalSupportServices:
      return SignedOutOfEpReasonTypeEnum.MedicalSupportServices;
    case ApiSignedOutOfEpReasonTypeEnum.UtilityNetworksMaintenance:
      return SignedOutOfEpReasonTypeEnum.UtilityNetworksMaintenance;
    case ApiSignedOutOfEpReasonTypeEnum.MeasurementAndLabEquipmentServices:
      return SignedOutOfEpReasonTypeEnum.MeasurementAndLabEquipmentServices;
    case ApiSignedOutOfEpReasonTypeEnum.FireAndEmergencyResponse:
      return SignedOutOfEpReasonTypeEnum.FireAndEmergencyResponse;
    case ApiSignedOutOfEpReasonTypeEnum.ITAndOfficeEquipmentRepair:
      return SignedOutOfEpReasonTypeEnum.ITAndOfficeEquipmentRepair;
    case ApiSignedOutOfEpReasonTypeEnum.EmergencyApplianceRepairs:
      return SignedOutOfEpReasonTypeEnum.EmergencyApplianceRepairs;
    case ApiSignedOutOfEpReasonTypeEnum.ArchivalAndDocumentServices:
      return SignedOutOfEpReasonTypeEnum.ArchivalAndDocumentServices;
    case ApiSignedOutOfEpReasonTypeEnum.POBoxRental:
      return SignedOutOfEpReasonTypeEnum.POBoxRental;
    case ApiSignedOutOfEpReasonTypeEnum.PsychiatricExaminationServices:
      return SignedOutOfEpReasonTypeEnum.PsychiatricExaminationServices;
    case ApiSignedOutOfEpReasonTypeEnum.OfficialResidenceMaintenance:
      return SignedOutOfEpReasonTypeEnum.OfficialResidenceMaintenance;
    case ApiSignedOutOfEpReasonTypeEnum.PublicSafetyEnhancement:
      return SignedOutOfEpReasonTypeEnum.PublicSafetyEnhancement;
    case ApiSignedOutOfEpReasonTypeEnum.UrgentSmallValueProcurement:
      return SignedOutOfEpReasonTypeEnum.UrgentSmallValueProcurement;
    default:
      throw new Error(`Enum value is not defined: ApiSignedOutOfEpReasonTypeEnum=${String(source)}`);
  }
}
