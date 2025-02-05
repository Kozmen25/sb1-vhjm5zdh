import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type DriverProfileScreenProps = {
    route: RouteProp<MainStackParamList, "DriverProfile">,
    navigation: FrameNavigationProp<MainStackParamList, "DriverProfile">,
};

export function DriverProfileScreen({ route }: DriverProfileScreenProps) {
    // Örnek veri - API çağrısı ile değiştirilecek
    const driver = {
        id: "d1",
        name: "Ahmet Yılmaz",
        rating: 4.8,
        trips: 156,
        joinedDate: "Ocak 2022",
        languages: ["Türkçe", "İngilizce"],
        bio: "5 yılı aşkın deneyime sahip profesyonel sürücü. Güvenli ve konforlu yolculuklar sağlamayı taahhüt ediyorum.",
        reviews: [
            {
                id: 1,
                user: "Ayşe",
                rating: 5,
                comment: "Mükemmel hizmet! Çok profesyonel ve dakik."
            },
            {
                id: 2,
                user: "Mehmet",
                rating: 4,
                comment: "Harika sürücü, şehir hakkında çok bilgili."
            }
        ]
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    <label className="text-2xl font-bold">{driver.name}</label>
                    <label className="text-lg text-gray-600">⭐ {driver.rating}</label>
                    <label className="text-gray-600">{driver.trips} sefer</label>
                    <label className="text-gray-600">Üyelik: {driver.joinedDate}</label>
                </flexboxLayout>

                <label className="text-xl font-bold mb-2">Hakkında</label>
                <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                    <label className="text-gray-700">{driver.bio}</label>
                    <label className="text-gray-700 mt-2">Diller: {driver.languages.join(", ")}</label>
                </flexboxLayout>

                <label className="text-xl font-bold mb-2">Değerlendirmeler</label>
                {driver.reviews.map((review) => (
                    <flexboxLayout 
                        key={review.id}
                        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
                    >
                        <flexboxLayout className="flex-row justify-between">
                            <label className="font-semibold">{review.user}</label>
                            <label>{"⭐".repeat(review.rating)}</label>
                        </flexboxLayout>
                        <label className="text-gray-700 mt-1">{review.comment}</label>
                    </flexboxLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}