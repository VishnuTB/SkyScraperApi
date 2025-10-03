export interface NearByAirportsResponse {
  status: boolean;
  timestamp: number;
  data: Data;
}

export interface Data {
  current: Current;
  nearby: Nearby[];
  recent: any[];
}

export interface Current {
  skyId: string;
  entityId: string;
  presentation: Presentation;
  navigation: Navigation;
}

export interface Navigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface RelevantFlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: string;
  localizedName: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: string;
  localizedName: string;
}

export interface Presentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface Nearby {
  presentation: Presentation;
  navigation: Navigation;
}
