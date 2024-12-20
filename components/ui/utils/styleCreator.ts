import { StyleSheet } from "react-native";

export function styleCreator(styles: StyleSheet.NamedStyles<any> | (StyleSheet.NamedStyles<unknown> & StyleSheet.NamedStyles<any>)) {
    return StyleSheet.create(styles)
}