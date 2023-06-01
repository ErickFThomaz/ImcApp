import {IMCCalculated} from "./Context";
import {Alert, Keyboard} from "react-native";

export function calculate(weight: number, height: number): IMCCalculated | null {
    Keyboard.dismiss()
    if (weight && height) {

        height = height / 100;

        const imc = weight / (height * height);

        let result: string;
        let resultColor: string;
        if (imc < 18.5) {
            result = "Abaixo do Peso";
            resultColor = " text-yellow-500";
        } else if (imc < 25) {
            result = "Normal";
            resultColor = " text-green-700";
        } else if (imc < 30) {
            result = "Acima do Peso";
            resultColor = " text-orange-400";
        } else {
            result = "Obeso";
            resultColor = " text-red-500";
        }

        return {
            weight: weight + "Kg",
            height: height.toFixed(2).concat("M"),
            imc: imc.toFixed(2),
            result: result,
            resultColor: resultColor,
            date: new Date()
        };
    } else {
        Alert.alert("Preencha os campos", "Você precisa preencher os campos antes de poder calcular seu IMC", undefined, {
            cancelable: true,
        })
        return null
    }
}