import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackRoutesType } from "../../routes/stack.routes";

export function ButtonReturn() {
    const navigation = useNavigation();
    const string = '<';
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 60, height: 60, backgroundColor: '#232323'}} >
            <Text style={{ fontSize: 40, color: 'white', textAlign: 'center', textAlignVertical: 'center' }} >{string}</Text>
        </TouchableOpacity>
    );
}
