import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/base";
import React from "react";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://placehold.jp/2C6BED/ffffff/200x200.png?text=Bonga",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle. This is a test subtitle. This is a test
          subtitle. This is a test subtitle. This is a test subtitle.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
