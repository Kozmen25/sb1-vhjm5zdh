import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type LoginScreenProps = {
    route: RouteProp<MainStackParamList, "Login">,
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-8 font-bold text-center">
                DriveMate'e Giriş Yap
            </label>
            
            <textField
                className="p-4 border rounded-lg w-3/4 mb-4"
                hint="E-posta"
                keyboardType="email"
                text={email}
                onTextChange={(e) => setEmail(e.value)}
            />
            
            <textField
                className="p-4 border rounded-lg w-3/4 mb-8"
                hint="Şifre"
                secure={true}
                text={password}
                onTextChange={(e) => setPassword(e.value)}
            />

            <button
                className="text-lg text-white bg-blue-600 p-4 rounded-lg w-3/4"
                onTap={() => {
                    // TODO: Giriş mantığı uygulanacak
                    navigation.navigate("VehicleList");
                }}
            >
                Giriş Yap
            </button>

            <button
                className="text-lg text-blue-600 p-4 rounded-lg w-3/4 mt-4"
                onTap={() => navigation.navigate("Register")}
            >
                Hesabınız yok mu? Kayıt Olun
            </button>
        </flexboxLayout>
    );
}