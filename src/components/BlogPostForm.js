import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post!"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
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

export default BlogPostForm;
