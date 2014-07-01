var getUserMedia = navigator.getUserMedia
|| navigator.webkitGetUserMedia
|| navigator.mozGetUserMedia
|| navigator.msGetUserMedia;

var RTCPeerConnection = window.mozRTCPeerConnection
|| window.RTCPeerConnection
|| window.webkitRTCPeerConnection;

var RTCSessionDescription = window.mozRTCSessionDescription
|| window.RTCSessionDescription
|| window.webkitRTCSessionDescription;

var RTCIceCandidate = window.mozRTCIceCandidate
|| window.RTCIceCandidate
|| window.webkitRTCIceCandidate;

module.exports.getUserMedia = getUserMedia;
module.exports.RTCPeerConnection = RTCPeerConnection;
module.exports.RTCSessionDescription = RTCSessionDescription;
module.exports.RTCIceCandidate = RTCIceCandidate;

