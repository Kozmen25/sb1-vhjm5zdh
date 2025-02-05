import io from 'socket.io-client';

const SOCKET_URL = 'YOUR_SOCKET_SERVER_URL';

class SocketService {
  private socket;

  constructor() {
    this.socket = io(SOCKET_URL);
    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });
  }

  // Location tracking
  emitLocation(location) {
    this.socket.emit('location_update', location);
  }

  onLocationUpdate(callback) {
    this.socket.on('location_update', callback);
  }

  // Chat
  sendMessage(data) {
    this.socket.emit('new_message', data);
  }

  onNewMessage(callback) {
    this.socket.on('new_message', callback);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export const socketService = new SocketService();