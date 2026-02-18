export enum ApplicationStateEnum {
  Default = 0,
  Actual = 5,
  Canceled = 10,
  Draft = 15,
  Removed = 20,
  CanceledByCustomerDuringDealSigning = 25,
  CanceledBySupplierBeforeDealSigning = 30,
  SentToOperator = 35,
  Rejected = 40,
  CanceledBySupplierDuringDealSigning = 45,
}
