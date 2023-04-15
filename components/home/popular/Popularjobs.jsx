import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import UseFetch from "../../../hook/UseFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";



const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, Error } = UseFetch(
    { query: "React Developer", num_pages: "1" },
    "search"
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : Error ? (
          <Text>Error Loading Job</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            keyExtractor={(item) => item?.job_id}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
