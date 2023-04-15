import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const data = ["Part-time", "Full-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Part-time");
  const [searchText, setSearchText] = useState("");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Abiodun</Text>
        <Text style={styles.welcomeMessage}>Find yourself a suitable Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter a category"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
              key={item}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
