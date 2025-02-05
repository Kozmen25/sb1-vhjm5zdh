import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { socketService } from '../../services/socket';

type ChatScreenProps = {
    route: RouteProp<MainStackParamList, "Chat">,
    navigation: FrameNavigationProp<MainStackParamList, "Chat">,
};

export function ChatScreen({ route }: ChatScreenProps) {
    const [messages, setMessages] = React.useState([]);
    const [newMessage, setNewMessage] = React.useState('');
    const { recipientId } = route.params;

    React.useEffect(() => {
        // Listen for new messages
        socketService.onNewMessage((message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            // Cleanup socket listeners
            socketService.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (!newMessage.trim()) return;

        const messageData = {
            recipientId,
            content: newMessage,
            timestamp: new Date().toISOString(),
        };

        socketService.sendMessage(messageData);
        setNewMessage('');
    };

    return (
        <flexboxLayout style={styles.container}>
            <scrollView className="flex-grow">
                <flexboxLayout className="flex-col">
                    {messages.map((message, index) => (
                        <flexboxLayout
                            key={index}
                            className={`p-3 rounded-lg mb-2 max-w-3/4 ${
                                message.senderId === 'currentUser'
                                    ? 'bg-blue-500 text-white self-end'
                                    : 'bg-gray-200 self-start'
                            }`}
                        >
                            <label>{message.content}</label>
                            <label className="text-xs opacity-70">
                                {new Date(message.timestamp).toLocaleTimeString()}
                            </label>
                        </flexboxLayout>
                    ))}
                </flexboxLayout>
            </scrollView>

            <flexboxLayout className="flex-row items-center p-4 border-t">
                <textField
                    className="flex-grow p-2 border rounded-lg mr-2"
                    hint="Type a message..."
                    text={newMessage}
                    onTextChange={(e) => setNewMessage(e.value)}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    onTap={sendMessage}
                >
                    Send
                </button>
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
});