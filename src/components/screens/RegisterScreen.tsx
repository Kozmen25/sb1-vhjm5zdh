import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type RegisterScreenProps = {
    route: RouteProp<MainStackParamList, "Register">,
    navigation: FrameNavigationProp<MainStackParamList, "Register">,
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-8 font-bold text-center">
                    Hesap Oluştur
                </label>
                
                <textField
                    className="p-4 border rounded-lg w-3/4 mb-4"
                    hint="Ad Soyad"
                    text={name}
                    onTextChange={(e) => setName(e.value)}
                />

                <textField
                    className="p-4 border rounded-lg w-3/4 mb-4"
                    hint="E-posta"
                    keyboardType="email"
                    text={email}
                    onTextChange={(e) => setEmail(e.value)}
                />
                
                <textField
                    className="p-4 border rounded-lg w-3/4 mb-4"
                    hint="Şifre"
                    secure={true}
                    text={password}
                    onTextChange={(e) => setPassword(e.value)}
                />

                <textField
                    className="p-4 border rounded-lg w-3/4 mb-8"
                    hint="Şifre Tekrar"
                    secure={true}
                    text={confirmPassword}
                    onTextChange={(e) => setConfirmPassword(e.value)}
                />

                <button
                    className="text-lg text-white bg-green-600 p-4 rounded-lg w-3/4"
                    onTap={() => {
                        // TODO: Kayıt mantığı uygulanacak
                        navigation.navigate("Login");
                    }}
                >
                    Kayıt Ol
                </button>

                <button
                    className="text-lg text-blue-600 p-4 rounded-lg w-3/4 mt-4 mb-8"
                    onTap={() => navigation.navigate("Login")}
                >
                    Zaten hesabınız var mı? Giriş Yapın
                </button>
            </flexboxLayout>
        </scrollView>
    );
}