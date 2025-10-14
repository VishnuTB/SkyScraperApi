import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Nearby } from "../networking/types/NearbyAriportsResponse";
import useApi from "../networking/useApi";

export default function HomeScreen() {
  const router = useRouter();

  const logout = () => {
    router.replace("/(onboarding)");
  };

  const { data, loading, error, fetch } = useApi("/flights/getNearByAirports", {
    lat: 19.242218017578125,
    lng: 72.85846156046128,
  });

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      console.log("Nearby Airports:", JSON.stringify(data));
    }
  }, [data]);

  const renderAirport = ({ item }: { item: Nearby }) => {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
          marginBottom: 15,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
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
      <Text style={styles.logout} onPress={logout}>
        Logout
      </Text>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading...</Text>
          <ActivityIndicator size={"large"} />
        </View>
      ) : error ? (
        <Text style={{ color: "#773d3d" }}>
          {`Error: ${
            JSON.stringify((error as AxiosError).response?.data) ||
            "Something went wrong"
          }`}
        </Text>
      ) : (
        <FlatList
          refreshing={loading}
          data={data?.nearby || []}
          renderItem={renderAirport}
          style={{
            backgroundColor: "#8e93f9",
            borderRadius: 10,
            gap: 10,
            paddingVertical: 10,
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b6bcff",
    paddingHorizontal: 20,
    gap: 20,
  },
  logout: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#4b4b4b",
    alignSelf: "flex-end",
  },
});
