import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import SafeViewAndroid from "../components/SafeViewAndroid";
import CustomListItem from "../components/CustomListItem";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Signed Out!!");
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
