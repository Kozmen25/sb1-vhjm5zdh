import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { socketService } from '../../services/socket';
import { getCurrentLocation } from '@nativescript/core/location';

type LocationTrackingScreenProps = {
    route: RouteProp<MainStackParamList, "LocationTracking">,
    navigation: FrameNavigationProp<MainStackParamList, "LocationTracking">,
};

export function LocationTrackingScreen({ route }: LocationTrackingScreenProps) {
    const [driverLocation, setDriverLocation] = React.useState(null);
    const [estimatedArrival, setEstimatedArrival] = React.useState('');
    const locationInterval = React.useRef(null);

    React.useEffect(() => {
        // Start tracking location
        startLocationTracking();

        // Listen for driver's location updates
        socketService.onLocationUpdate((location) => {
            setDriverLocation(location);
            updateEstimatedArrival(location);
        });

        return () => {
            // Cleanup
            if (locationInterval.current) {
                clearInterval(locationInterval.current);
            }
            socketService.disconnect();
        };
    }, []);

    const startLocationTracking = () => {
        locationInterval.current = setInterval(async () => {
            try {
                const location = await getCurrentLocation({
                    desiredAccuracy: 3,
                    updateDistance: 10,
                    maximumAge: 20000,
                });

                socketService.emitLocation({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    timestamp: new Date().toISOString(),
                });
            } catch (error) {
                console.error('Error getting location:', error);
            }
        }, 10000); // Update every 10 seconds
    };

    const updateEstimatedArrival = (location) => {
        // Calculate ETA based on current location and destination
        // This is a simplified example
        const eta = new Date();
        eta.setMinutes(eta.getMinutes() + 15);
        setEstimatedArrival(eta.toLocaleTimeString());
    };

    return (
        <flexboxLayout style={styles.container}>
            <flexboxLayout className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                <label className="text-xl font-bold mb-2">Driver Location</label>
                {driverLocation ? (
                    <>
                        <label className="text-gray-600">
                            Latitude: {driverLocation.latitude}
                        </label>
                        <label className="text-gray-600">
                            Longitude: {driverLocation.longitude}
                        </label>
                        <label className="text-blue-600 font-bold mt-2">
                            Estimated Arrival: {estimatedArrival}
                        </label>
                    </>
                ) : (
                    <label className="text-gray-600">
                        Waiting for driver's location...
                    </label>
                )}
            </flexboxLayout>

            <button
                className="text-white bg-blue-600 p-4 rounded-lg"
                onTap={() => navigation.navigate("Chat", { 
                    recipientId: route.params.driverId 
                })}
            >
                Chat with Driver
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        padding: 16,
        backgroundColor: "#f3f4f6",
    },
});