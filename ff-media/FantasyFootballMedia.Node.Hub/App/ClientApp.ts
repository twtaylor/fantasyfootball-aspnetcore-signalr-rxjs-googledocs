import Io = require('socket.io-client');
import { Settings } from './Settings';

const settings = new Settings.Current();
const socket = Io("http://" + settings.ServerUrl + ":" + settings.ServerPort);

socket.emit("clearPlayers");
socket.emit("playerAdd");