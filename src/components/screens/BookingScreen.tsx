import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type BookingScreenProps = {
    route: RouteProp<MainStackParamList, "Booking">,
    navigation: FrameNavigationProp<MainStackParamList, "Booking">,
};

export function BookingScreen({ navigation, route }: BookingScreenProps) {
    const [date, setDate] = React.useState(new Date());
    const [hours, setHours] = React.useState("2");
    const [pickupLocation, setPickupLocation] = React.useState("");
    const [dropoffLocation, setDropoffLocation] = React.useState("");

    // Örnek veri - API çağrısı ile değiştirilecek
    const vehicle = {
        name: "Mercedes S-Class",
        price: 100 // saat başı fiyat
    };

    const totalPrice = Number(hours) * vehicle.price;

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">{vehicle.name} Kirala</label>

                <label className="text-lg font-semibold mb-2">Alış Tarihi ve Saati</label>
                <datePicker
                    className="w-full mb-4"
                    date={date}
                    onDateChange={(e) => setDate(new Date(e.value))}
                />

                <label className="text-lg font-semibold mb-2">Süre (saat)</label>
                <textField
                    className="p-4 border rounded-lg w-full mb-4"
                    keyboardType="number"
                    text={hours}
                    onTextChange={(e) => setHours(e.value)}
                />

                <label className="text-lg font-semibold mb-2">Alış Noktası</label>
                <textField
                    className="p-4 border rounded-lg w-full mb-4"
                    hint="Alış adresini girin"
                    text={pickupLocation}
                    onTextChange={(e) => setPickupLocation(e.value)}
                />

                <label className="text-lg font-semibold mb-2">Teslim Noktası</label>
                <textField
                    className="p-4 border rounded-lg w-full mb-4"
                    hint="Teslim adresini girin"
                    text={dropoffLocation}
                    onTextChange={(e) => setDropoffLocation(e.value)}
                />

                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    <label className="text-lg font-semibold">Fiyat Özeti</label>
                    <flexboxLayout className="flex-row justify-between mt-2">
                        <label>Saatlik Ücret</label>
                        <label>{vehicle.price}₺</label>
                    </flexboxLayout>
                    <flexboxLayout className="flex-row justify-between mt-2">
                        <label>Saat</label>
                        <label>{hours}</label>
                    </flexboxLayout>
                    <flexboxLayout className="flex-row justify-between mt-2 pt-2 border-t">
                        <label className="font-bold">Toplam</label>
                        <label className="font-bold">{totalPrice}₺</label>
                    </flexboxLayout>
                </flexboxLayout>

                <button
                    className="text-lg text-white bg-blue-600 p-4 rounded-lg w-full"
                    onTap={() => {
                        // TODO: Rezervasyon onayı uygulanacak
                        alert("Rezervasyon onaylandı!");
                        navigation.navigate("Home");
                    }}
                >
                    Rezervasyonu Onayla
                </button>
            </flexboxLayout>
        </scrollView>
    );
}