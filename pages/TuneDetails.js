import { StyleSheet, Text, View, Image } from "react-native";

export const TuneDetails = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          fadeDuration={1000}
          style={styles.image}
        />
        <Text>blablabla</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
