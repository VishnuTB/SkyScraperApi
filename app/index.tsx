import { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Nearby } from '../networking/types/NearbyAriportsResponse';
import useApi from '../networking/useApi';

export default function HomeScreen() {
  const router = useRouter();

  const logout = () => {
    router.replace('/(onboarding)');
  };

  const { data, loading, error, fetch } = useApi('/flights/getNearByAirports', {
    lat: 19.242218017578125,
    lng: 72.85846156046128,
  });

  useEffect(() => {
    fetch();
    if (data) {
      console.log('Nearby Airports:', data);
    }
  }, []);

  const renderAirport = ({ item }: { item: Nearby }) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 15,
          marginBottom: 15,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            flex: 1,
          }}
        >
          {item.presentation.title}
        </Text>
        <Text> ({item.presentation.suggestionTitle})</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.logout}
        onPress={logout}
      >
        Logout
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={
            data?.nearby ||
            JSON.parse(
              '[{"presentation":{"title":"Pune","suggestionTitle":"Pune (PNQ)","subtitle":"India"},"navigation":{"entityId":"128668941","entityType":"AIRPORT","localizedName":"Pune","relevantFlightParams":{"skyId":"PNQ","entityId":"128668941","flightPlaceType":"AIRPORT","localizedName":"Pune"},"relevantHotelParams":{"entityId":"81977372","entityType":"CITY","localizedName":"Pune"}}},{"presentation":{"title":"Indira Gandhi International ","suggestionTitle":"Indira Gandhi International  (DEL)","subtitle":"India"},"navigation":{"entityId":"95673498","entityType":"AIRPORT","localizedName":"Indira Gandhi International ","relevantFlightParams":{"skyId":"DEL","entityId":"95673498","flightPlaceType":"AIRPORT","localizedName":"Indira Gandhi International "},"relevantHotelParams":{"entityId":"27540706","entityType":"CITY","localizedName":"New Delhi"}}},{"presentation":{"title":"Bengaluru","suggestionTitle":"Bengaluru (BLR)","subtitle":"India"},"navigation":{"entityId":"95673351","entityType":"AIRPORT","localizedName":"Bengaluru","relevantFlightParams":{"skyId":"BLR","entityId":"95673351","flightPlaceType":"AIRPORT","localizedName":"Bengaluru"},"relevantHotelParams":{"entityId":"27539471","entityType":"CITY","localizedName":"Bengaluru"}}},{"presentation":{"title":"Ahmedabad","suggestionTitle":"Ahmedabad (AMD)","subtitle":"India"},"navigation":{"entityId":"95673366","entityType":"AIRPORT","localizedName":"Ahmedabad","relevantFlightParams":{"skyId":"AMD","entityId":"95673366","flightPlaceType":"AIRPORT","localizedName":"Ahmedabad"},"relevantHotelParams":{"entityId":"27536554","entityType":"CITY","localizedName":"Ahmedabad"}}},{"presentation":{"title":"Hyderabad","suggestionTitle":"Hyderabad (HYD)","subtitle":"India"},"navigation":{"entityId":"128668073","entityType":"AIRPORT","localizedName":"Hyderabad","relevantFlightParams":{"skyId":"HYD","entityId":"128668073","flightPlaceType":"AIRPORT","localizedName":"Hyderabad"},"relevantHotelParams":{"entityId":"27542764","entityType":"CITY","localizedName":"Hyderabad"}}},{"presentation":{"title":"Goa","suggestionTitle":"Goa (Any)","subtitle":"India"},"navigation":{"entityId":"27541888","entityType":"CITY","localizedName":"Goa","relevantFlightParams":{"skyId":"IGOI","entityId":"27541888","flightPlaceType":"CITY","localizedName":"Goa"},"relevantHotelParams":{"entityId":"27541888","entityType":"CITY","localizedName":"Goa"}}},{"presentation":{"title":"Goa Dabolim","suggestionTitle":"Goa Dabolim (GOI)","subtitle":"India"},"navigation":{"entityId":"95790306","entityType":"AIRPORT","localizedName":"Goa Dabolim","relevantFlightParams":{"skyId":"GOI","entityId":"95790306","flightPlaceType":"AIRPORT","localizedName":"Goa Dabolim"},"relevantHotelParams":{"entityId":"27541888","entityType":"CITY","localizedName":"Goa"}}}]'
            )
          }
          renderItem={renderAirport}
          style={{
            backgroundColor: '#8e93f9',
            borderRadius: 10,
            gap: 10,
            paddingVertical: 10,
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {error && (
        <Text style={{ color: 'red' }}>
          Error: {(error as AxiosError).message}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6bcff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 20,
  },
  logout: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4b4b4b',
    alignSelf: 'flex-end',
  },
});
