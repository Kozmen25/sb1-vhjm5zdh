import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl mb-8 font-bold text-center text-blue-600">
                DriveMate'e Hoş Geldiniz
            </label>
            <button
                className="text-lg text-white bg-blue-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Login")}
            >
                Giriş Yap
            </button>
            <button
                className="text-lg text-white bg-green-600 p-4 rounded-lg w-3/4"
                onTap={() => navigation.navigate("Register")}
            >
                Kayıt Ol
            </button>
            <button
                className="text-lg text-blue-600 p-4 rounded-lg w-3/4 mt-8"
                onTap={() => navigation.navigate("VehicleList")}
            >
                Araçları İncele
            </button>
        </flexboxLayout>
    );
}