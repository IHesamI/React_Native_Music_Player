import { View, StyleSheet } from "react-native"
import RecentlyPlayed from "@/components/ui/RecentlyPlayed";
import RecommondedList from "@/components/ui/RecommondedList";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: 20,
    flex:1,
  },

})
export default function app() {
  return (
    <View style={styles.container}>
      <RecentlyPlayed/>
      <RecommondedList/>
    </View>
  )
}