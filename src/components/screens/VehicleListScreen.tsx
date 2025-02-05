import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type VehicleListScreenProps = {
    route: RouteProp<MainStackParamList, "VehicleList">,
    navigation: FrameNavigationProp<MainStackParamList, "VehicleList">,
};

export function VehicleListScreen({ navigation }: VehicleListScreenProps) {
    // Örnek veri - API çağrısı ile değiştirilecek
    const vehicles = [
        { id: "1", name: "Mercedes S-Class", type: "Lüks", price: "100₺/saat" },
        { id: "2", name: "BMW 7 Series", type: "Lüks", price: "90₺/saat" },
        { id: "3", name: "Toyota Camry", type: "Standart", price: "50₺/saat" },
    ];

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-xl mb-4 font-bold">
                    Mevcut Araçlar
                </label>

                {vehicles.map((vehicle) => (
                    <flexboxLayout
                        key={vehicle.id}
                        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
                    >
                        <label className="text-lg font-bold">{vehicle.name}</label>
                        <label className="text-gray-600">{vehicle.type}</label>
                        <label className="text-blue-600 font-bold">{vehicle.price}</label>
                        <button
                            className="text-white bg-blue-600 p-2 rounded mt-2"
                            onTap={() => navigation.navigate("VehicleDetails", { vehicleId: vehicle.id })}
                        >
                            Detayları Gör
                        </button>
                    </flexboxLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}