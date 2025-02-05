/**
 * Navigation params for each route in the app.
 */
export type MainStackParamList = {
  Home: {};
  Login: {};
  Register: {};
  VehicleList: {};
  VehicleDetails: {
    vehicleId: string;
  };
  DriverProfile: {
    driverId: string;
  };
  Booking: {
    vehicleId: string;
    driverId?: string;
  };
};