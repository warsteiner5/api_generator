export enum OrderStateEnum {
  Draft = 1,
  RequestToProvider = 10,
  ApprovedByProvider = 15,
  RefusedByProvider = 20,
  DealSigning = 25,
  DealSigned = 30,
  Cancelled = 35,
}
