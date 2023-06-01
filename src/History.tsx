import {Animated, SafeAreaView, StyleSheet, Text, View} from "react-native";
import config from "../tailwind.config";
import {TailwindProvider} from "tailwind-rn";
import {useContext} from "react";
import {IMCContext} from "./Context";
import ScrollView = Animated.ScrollView;
import { formatDistanceToNow, format } from 'date-fns'
import {ptBR} from "date-fns/locale";

export default function History() {

    const {results} = useContext(IMCContext);

    return (
        <TailwindProvider utilities={config}>
                <View className={"items-center m-auto h-screen w-screen"} >
                    <Text className={"text-2xl font-bold top-20"}>Histórico</Text>
                    <ScrollView className={"flex flex-col mt-[115px] h-screen p-2 mb-10"}>
                        {results.map((value, index) =>
                                (
                                    <View key={index} className={"border rounded ml-10 p-3 mt-1 w-[350px] gap-2 mb-3"}>
                                        <Text className={`text-center text-lg  ${value.resultColor}`}>{value.result}</Text>
                                        <Text>IMC: {value.imc}</Text>
                                        <Text>Altura: {value.height}</Text>
                                        <Text>Peso:{value.weight}</Text>
                                        <Text>{formatDistanceToNow(value.date, {
                                            addSuffix: true,
                                            locale: ptBR
                                        })}</Text>
                                        <Text>{format(value.date, 'dd/MM/yyyy HH:mm')}</Text>
                                    </View>
                                )
                            )
                        }
                    </ScrollView>
                </View>
        </TailwindProvider>
    )
}