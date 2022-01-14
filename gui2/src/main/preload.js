const { contextBridge } = require('electron');
const { promisify } = require('util');
var grpc = require('@grpc/grpc-js');

const daemonM = require('../daemon/schema/daemon_pb');
const daemonS = require('../daemon/schema/daemon_grpc_pb');
const daemonClient = new daemonS.DaemonClient(
  'unix:///workspace/anysphere/anysphere.sock',
  grpc.credentials.createInsecure()
);

contextBridge.exposeInMainWorld('send', async (to, message) => {
  const request = new daemonM.SendMessageRequest();
  request.setName(to);
  request.setMessage(message);
  const sendMessage = promisify(daemonClient.sendMessage).bind(daemonClient);
  try {
    const response = await sendMessage(request);
    return true;
  } catch (e) {
    console.log(`error in send: ${e}`);
    return false;
  }
});

contextBridge.exposeInMainWorld('getNewMessages', async () => {
  const request = new daemonM.GetNewMessagesRequest();
  const getNewMessages = promisify(daemonClient.getNewMessages).bind(
    daemonClient
  );
  try {
    const response = await getNewMessages(request);
    const lm = response.getMessagesList();
    const l = lm.map((m) => {
      return {
        id: m.getId(),
        from: m.getFrom(),
        to: m.getTo(),
        message: m.getMessage(),
        timestamp: m.getTimestamp(),
      };
    });
    return l;
  } catch (e) {
    console.log(`error in getNewMessages: ${e}`);
    return [];
  }
});

contextBridge.exposeInMainWorld('getAllMessages', async () => {
  const request = new daemonM.GetAllMessagesRequest();
  const getAllMessages = promisify(daemonClient.getAllMessages).bind(
    daemonClient
  );
  try {
    const response = await getAllMessages(request);
    const lm = response.getMessagesList();
    const l = lm.map((m) => {
      return {
        id: m.getId(),
        from: m.getFrom(),
        to: m.getTo(),
        message: m.getMessage(),
        timestamp: m.getTimestamp(),
      };
    });
    return l;
  } catch (e) {
    console.log(`error in getAllMessages: ${e}`);
    return [];
  }
});