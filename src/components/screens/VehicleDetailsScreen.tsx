import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type VehicleDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "VehicleDetails">,
    navigation: FrameNavigationProp<MainStackParamList, "VehicleDetails">,
};

export function VehicleDetailsScreen({ navigation, route }: VehicleDetailsScreenProps) {
    // Örnek veri - API çağrısı ile değiştirilecek
    const vehicle = {
        id: "1",
        name: "Mercedes S-Class",
        type: "Lüks",
        price: "100₺/saat",
        description: "Mercedes S-Class ile lüks deneyimi yaşayın. Deri koltuklar, klima ve premium ses sistemi gibi özellikler içerir.",
        features: ["Deri Koltuklar", "Klima", "Premium Ses Sistemi", "WiFi"],
        driver: {
            id: "d1",
            name: "Ahmet Yılmaz",
            rating: 4.8,
            trips: 156
        }
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">{vehicle.name}</label>
                
                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    <label className="text-lg text-gray-600">{vehicle.type}</label>
                    <label className="text-xl text-blue-600 font-bold">{vehicle.price}</label>
                    <label className="text-gray-700 mt-2">{vehicle.description}</label>
                </flexboxLayout>

                <label className="text-xl font-bold mb-2">Özellikler</label>
                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    {vehicle.features.map((feature, index) => (
                        <label key={index} className="text-gray-700 mb-1">• {feature}</label>
                    ))}
                </flexboxLayout>

                <label className="text-xl font-bold mb-2">Sürücü</label>
                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    <label className="text-lg font-semibold">{vehicle.driver.name}</label>
                    <label className="text-gray-600">⭐ {vehicle.driver.rating} • {vehicle.driver.trips} sefer</label>
                    <button
                        className="text-blue-600 mt-2"
                        onTap={() => navigation.navigate("DriverProfile", { driverId: vehicle.driver.id })}
                    >
                        Sürücü Profilini Gör
                    </button>
                </flexboxLayout>

                <button
                    className="text-lg text-white bg-blue-600 p-4 rounded-lg w-full"
                    onTap={() => navigation.navigate("Booking", { 
                        vehicleId: vehicle.id,
                        driverId: vehicle.driver.id
                    })}
                >
                    Hemen Kirala
                </button>
            </flexboxLayout>
        </scrollView>
    );
}