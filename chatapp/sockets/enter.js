'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterRoomEvent', function (data) {
        socket.broadcast.emit("receiveEnterRoomEvent", data);
    });
};
