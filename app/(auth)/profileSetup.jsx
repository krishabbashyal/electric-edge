import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState, useRef } from "react";
import Checkbox from "expo-checkbox";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";

const profileSetup = () => {
  const [formData, setFormData] = useState({
    displayName: "",
  });

  const [formattedDisplayName, setFormattedDisplayName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const displayNameRef = useRef(null);

  const handleDisplayNameChange = (displayName) => {
    setFormData({ ...formData, displayName });
    if (displayName.length == 0) {
      setFormattedDisplayName("");
    } else {
      setFormattedDisplayName(` ${displayName}`);
    }
  };

  const checkboxHandler = (isChecked) => {
    setIsChecked(isChecked => !isChecked);
    console.log(isChecked);
  };

  const submitForm = async () => {
    const displayNameValid = displayNameRef.current.validate();
  };

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="font-bold text-3xl max-w-lg">Hello{formattedDisplayName}, It is nice to meet you. 👋 </Text>
        <Text className="mb-4 text-gray-700 mt-2 text-[17px]">We just need a little more information before we can begin!</Text>

        <CustomInputField
          ref={displayNameRef}
          label="What should we call you?"
          placeholder="Display Name"
          payload={formData.displayName}
          validationType="String"
          errorMessage="Display name must be at least 3 characters"
          preventSpaces={true}
          sendDataToParent={handleDisplayNameChange}
          customStyles="mt-2"
        />

        <View className="flex flex-row items-center">
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={checkboxHandler} color={'#3A8060'} />
          <Text className="ml-2">I understand that this application is just a prototype</Text>
        </View>

        <CustomButton title="Continue" buttonStyles="bg-EE-Green mt-8" textStyles="text-white" handlePress={submitForm} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 22,
    width: 22,
    borderRadius: 6,
  },
});

export default profileSetup;