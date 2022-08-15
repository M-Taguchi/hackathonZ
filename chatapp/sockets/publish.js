'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendPublishEvent', function (data) {
        socket.broadcast.emit("receivePublishEvent", data);
        socket.emit("receivePublishEvent", data);
    });
};
