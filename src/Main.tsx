import {useContext, useState} from "react";
import Context, {IMCCalculated, IMCContext} from "./Context";
import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {calculate} from "./Calculate";
import {TailwindProvider} from "tailwind-rn";
import config from "../tailwind.config";

export default function Main({ navigation: { navigate }}) {
    const [selectedHeight, setSelectedHeight] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(0);
    const [result, setResult] = useState<IMCCalculated | null>(null);

    const {results, addNewIMC} = useContext(IMCContext);

    function calcule(){
        const imc = calculate(selectedWeight, selectedHeight);
        if(imc){
            addNewIMC(imc)
            setResult(imc)
        }
    }

    return (
        <TailwindProvider utilities={config}>
            <View className="flex-1 items-center justify-center bg-[#f4efec]" keyboardShouldPersistTaps='handled'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex flex-col h-screen">
                        <View className="mt-20">
                            <Image className="h-1/2" source={require("../assets/logo.jpg")}/>
                        </View>

                        <View className="flex flex-col ml-[50px] mr-auto -mt-[100px] w-[210px] p-2">
                            <Text className={"text-lg ml-[50px] w-full -mt-10 mb-10 font-bold"}>Índice de Massa Corporal</Text>
                            <View className={"flex flex-col"}>
                                <View className={"flex flex-row items-center gap-1"}>
                                    <Text className={"font-bold"}>Digite sua altura:</Text>
                                    <TextInput className="border rounded p-1 w-2/3 bg-white"
                                               onChangeText={setSelectedHeight} inputMode={"decimal"} maxLength={3}/>
                                </View>

                                <View className={"flex flex-row items-center gap-[6px] mt-1"}>
                                    <Text className={"font-bold"}>Digite seu peso: </Text>
                                    <TextInput className="border rounded p-1 ml-1 w-2/3 bg-white"
                                               onChangeText={setSelectedWeight} inputMode={"decimal"} maxLength={6}/>
                                </View>
                            </View>

                            <TouchableOpacity
                                className={"border rounded-full items-center w-[220px] ml-[32.5px] mt-14 p-2 bg-blue-600 hover:bg-blue-500"} onPress={calcule}>
                                <Text className={"text-[18px] text-white"}>Calcular</Text>
                            </TouchableOpacity>

                            <View>
                                <View
                                    className={`flex flex-col border rounded items-center w-[220px] ml-[50px] mt-14 p-2 ${result ? '' : 'hidden'}`}>
                                    <Text className={"text-lg"}>Altura: {result?.height}</Text>
                                    <Text className={"text-lg"}>Peso: {result?.weight}</Text>
                                    <Text className={"text-lg"}>IMC: {result?.imc}</Text>
                                    <Text className={"text-lg text-center"}>Resultado: <Text
                                        className={`text-[22px] text-red-500 ${result?.resultColor}`}>{result?.result}</Text></Text>
                                </View>
                            </View>

                          {/*<View>*/}
                          {/*    <TouchableOpacity className={"border rounded items-center w-[120px] ml-[79.5px] mt-14 p-2 bg-[#7C0A02] opacity-70 hidden"} onPress={() => navigate('History')}>*/}
                          {/*        <Text className={"text-[18px] text-white"}> Histórico </Text>*/}
                          {/*    </TouchableOpacity>*/}
                          {/*</View>*/}

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TailwindProvider>
    );
}