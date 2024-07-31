import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


const Task = (props) => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <TouchableOpacity style={style.squares}></TouchableOpacity>
        <Text style={style.text}>{props.text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding:15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 20,
    marginEnd:20,
  },
  itemLeft: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  squares: {
    height:24, 
    width:24,
    backgroundColor: "#5BCF",
    opacity: 0.4,
    borderRadius:10,
    marginRight:10
  },
  text: {
    marginTop:4,
  },
  circular: {
    width:12,
    height:12,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#5BCF' 
  }

});

export default Task;

