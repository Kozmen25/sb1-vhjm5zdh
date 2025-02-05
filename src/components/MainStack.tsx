import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { VehicleListScreen } from "./screens/VehicleListScreen";
import { VehicleDetailsScreen } from "./screens/VehicleDetailsScreen";
import { DriverProfileScreen } from "./screens/DriverProfileScreen";
import { BookingScreen } from "./screens/BookingScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2563eb",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "DriveMate" }}
            />
            <StackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Giriş" }}
            />
            <StackNavigator.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: "Kayıt" }}
            />
            <StackNavigator.Screen
                name="VehicleList"
                component={VehicleListScreen}
                options={{ title: "Mevcut Araçlar" }}
            />
            <StackNavigator.Screen
                name="VehicleDetails"
                component={VehicleDetailsScreen}
                options={{ title: "Araç Detayları" }}
            />
            <StackNavigator.Screen
                name="DriverProfile"
                component={DriverProfileScreen}
                options={{ title: "Sürücü Profili" }}
            />
            <StackNavigator.Screen
                name="Booking"
                component={BookingScreen}
                options={{ title: "Araç Kirala" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);