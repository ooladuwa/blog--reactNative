import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.textStyle}>Enter Content:</Text>
      <TextInput
        multiline={true}
        wrap={true}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Content"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post!"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // display: "flex",
    // flexWrap: "wrap",
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    // height: 250,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  inputStyle: {
    // flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    padding: 10,
    margin: 5,
  },
});

export default CreateScreen;
