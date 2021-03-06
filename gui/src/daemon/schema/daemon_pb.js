// @generated

// source: schema/daemon.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.asphrdaemon.AcceptAsyncInvitationRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.AcceptAsyncInvitationResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.AddAsyncFriendRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.AddAsyncFriendResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.AddSyncFriendRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.AddSyncFriendResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.CancelAsyncInvitationRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.CancelAsyncInvitationResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.ChangeLatencyRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.ChangeLatencyResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.FriendInfo', null, global);
goog.exportSymbol('proto.asphrdaemon.GetFriendListRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetFriendListResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetIncomingAsyncInvitationsRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetIncomingAsyncInvitationsResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo', null, global);
goog.exportSymbol('proto.asphrdaemon.GetLatencyRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetLatencyResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetMessagesRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetMessagesRequest.Filter', null, global);
goog.exportSymbol('proto.asphrdaemon.GetMessagesResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetMyPublicIDRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetMyPublicIDResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutboxMessagesRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutboxMessagesResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingSyncInvitationsRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingSyncInvitationsResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo', null, global);
goog.exportSymbol('proto.asphrdaemon.GetSentMessagesRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetSentMessagesResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.GetStatusRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.GetStatusResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.IncomingMaybeFriend', null, global);
goog.exportSymbol('proto.asphrdaemon.IncomingMessage', null, global);
goog.exportSymbol('proto.asphrdaemon.InvitationProgress', null, global);
goog.exportSymbol('proto.asphrdaemon.IsValidPublicIDRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.IsValidPublicIDResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.KillRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.KillResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.MessageSeenRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.MessageSeenResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.OutgoingFriend', null, global);
goog.exportSymbol('proto.asphrdaemon.OutgoingMessage', null, global);
goog.exportSymbol('proto.asphrdaemon.RegisterUserRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.RegisterUserResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.RejectAsyncInvitationRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.RejectAsyncInvitationResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.RemoveFriendRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.RemoveFriendResponse', null, global);
goog.exportSymbol('proto.asphrdaemon.SendMessageRequest', null, global);
goog.exportSymbol('proto.asphrdaemon.SendMessageResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RegisterUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RegisterUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RegisterUserRequest.displayName = 'proto.asphrdaemon.RegisterUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RegisterUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RegisterUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RegisterUserResponse.displayName = 'proto.asphrdaemon.RegisterUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetFriendListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetFriendListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetFriendListRequest.displayName = 'proto.asphrdaemon.GetFriendListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.FriendInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.FriendInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.FriendInfo.displayName = 'proto.asphrdaemon.FriendInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetFriendListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetFriendListResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetFriendListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetFriendListResponse.displayName = 'proto.asphrdaemon.GetFriendListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetMyPublicIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetMyPublicIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetMyPublicIDRequest.displayName = 'proto.asphrdaemon.GetMyPublicIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetMyPublicIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetMyPublicIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetMyPublicIDResponse.displayName = 'proto.asphrdaemon.GetMyPublicIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.IsValidPublicIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.IsValidPublicIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.IsValidPublicIDRequest.displayName = 'proto.asphrdaemon.IsValidPublicIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.IsValidPublicIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.IsValidPublicIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.IsValidPublicIDResponse.displayName = 'proto.asphrdaemon.IsValidPublicIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AddSyncFriendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AddSyncFriendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AddSyncFriendRequest.displayName = 'proto.asphrdaemon.AddSyncFriendRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AddSyncFriendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AddSyncFriendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AddSyncFriendResponse.displayName = 'proto.asphrdaemon.AddSyncFriendResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AddAsyncFriendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AddAsyncFriendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AddAsyncFriendRequest.displayName = 'proto.asphrdaemon.AddAsyncFriendRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AddAsyncFriendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AddAsyncFriendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AddAsyncFriendResponse.displayName = 'proto.asphrdaemon.AddAsyncFriendResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingSyncInvitationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.displayName = 'proto.asphrdaemon.GetOutgoingSyncInvitationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingSyncInvitationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.displayName = 'proto.asphrdaemon.GetOutgoingSyncInvitationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.displayName = 'proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.displayName = 'proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.displayName = 'proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.displayName = 'proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetIncomingAsyncInvitationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.displayName = 'proto.asphrdaemon.GetIncomingAsyncInvitationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetIncomingAsyncInvitationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.displayName = 'proto.asphrdaemon.GetIncomingAsyncInvitationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.displayName = 'proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AcceptAsyncInvitationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AcceptAsyncInvitationRequest.displayName = 'proto.asphrdaemon.AcceptAsyncInvitationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.AcceptAsyncInvitationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.AcceptAsyncInvitationResponse.displayName = 'proto.asphrdaemon.AcceptAsyncInvitationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RejectAsyncInvitationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RejectAsyncInvitationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RejectAsyncInvitationRequest.displayName = 'proto.asphrdaemon.RejectAsyncInvitationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RejectAsyncInvitationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RejectAsyncInvitationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RejectAsyncInvitationResponse.displayName = 'proto.asphrdaemon.RejectAsyncInvitationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.CancelAsyncInvitationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.CancelAsyncInvitationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.CancelAsyncInvitationRequest.displayName = 'proto.asphrdaemon.CancelAsyncInvitationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.CancelAsyncInvitationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.CancelAsyncInvitationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.CancelAsyncInvitationResponse.displayName = 'proto.asphrdaemon.CancelAsyncInvitationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RemoveFriendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RemoveFriendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RemoveFriendRequest.displayName = 'proto.asphrdaemon.RemoveFriendRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.RemoveFriendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.RemoveFriendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.RemoveFriendResponse.displayName = 'proto.asphrdaemon.RemoveFriendResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.SendMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.SendMessageRequest.displayName = 'proto.asphrdaemon.SendMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.SendMessageResponse.displayName = 'proto.asphrdaemon.SendMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.IncomingMaybeFriend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.IncomingMaybeFriend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.IncomingMaybeFriend.displayName = 'proto.asphrdaemon.IncomingMaybeFriend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.IncomingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.IncomingMessage.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.IncomingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.IncomingMessage.displayName = 'proto.asphrdaemon.IncomingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.OutgoingFriend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.OutgoingFriend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.OutgoingFriend.displayName = 'proto.asphrdaemon.OutgoingFriend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.OutgoingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.OutgoingMessage.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.OutgoingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.OutgoingMessage.displayName = 'proto.asphrdaemon.OutgoingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetMessagesRequest.displayName = 'proto.asphrdaemon.GetMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetMessagesResponse.displayName = 'proto.asphrdaemon.GetMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutboxMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetOutboxMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutboxMessagesRequest.displayName = 'proto.asphrdaemon.GetOutboxMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetOutboxMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetOutboxMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetOutboxMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetOutboxMessagesResponse.displayName = 'proto.asphrdaemon.GetOutboxMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetSentMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetSentMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetSentMessagesRequest.displayName = 'proto.asphrdaemon.GetSentMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetSentMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asphrdaemon.GetSentMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.asphrdaemon.GetSentMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetSentMessagesResponse.displayName = 'proto.asphrdaemon.GetSentMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.MessageSeenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.MessageSeenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.MessageSeenRequest.displayName = 'proto.asphrdaemon.MessageSeenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.MessageSeenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.MessageSeenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.MessageSeenResponse.displayName = 'proto.asphrdaemon.MessageSeenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetStatusRequest.displayName = 'proto.asphrdaemon.GetStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetStatusResponse.displayName = 'proto.asphrdaemon.GetStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetLatencyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetLatencyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetLatencyRequest.displayName = 'proto.asphrdaemon.GetLatencyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.GetLatencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.GetLatencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.GetLatencyResponse.displayName = 'proto.asphrdaemon.GetLatencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.ChangeLatencyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.ChangeLatencyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.ChangeLatencyRequest.displayName = 'proto.asphrdaemon.ChangeLatencyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.ChangeLatencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.ChangeLatencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.ChangeLatencyResponse.displayName = 'proto.asphrdaemon.ChangeLatencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.KillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.KillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.KillRequest.displayName = 'proto.asphrdaemon.KillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asphrdaemon.KillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asphrdaemon.KillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.asphrdaemon.KillResponse.displayName = 'proto.asphrdaemon.KillResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RegisterUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RegisterUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RegisterUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RegisterUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    betaKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RegisterUserRequest}
 */
proto.asphrdaemon.RegisterUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RegisterUserRequest;
  return proto.asphrdaemon.RegisterUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RegisterUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RegisterUserRequest}
 */
proto.asphrdaemon.RegisterUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBetaKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RegisterUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RegisterUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RegisterUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RegisterUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBetaKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.asphrdaemon.RegisterUserRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.RegisterUserRequest} returns this
 */
proto.asphrdaemon.RegisterUserRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string beta_key = 2;
 * @return {string}
 */
proto.asphrdaemon.RegisterUserRequest.prototype.getBetaKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.RegisterUserRequest} returns this
 */
proto.asphrdaemon.RegisterUserRequest.prototype.setBetaKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RegisterUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RegisterUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RegisterUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RegisterUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RegisterUserResponse}
 */
proto.asphrdaemon.RegisterUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RegisterUserResponse;
  return proto.asphrdaemon.RegisterUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RegisterUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RegisterUserResponse}
 */
proto.asphrdaemon.RegisterUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RegisterUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RegisterUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RegisterUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RegisterUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetFriendListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetFriendListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetFriendListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetFriendListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetFriendListRequest}
 */
proto.asphrdaemon.GetFriendListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetFriendListRequest;
  return proto.asphrdaemon.GetFriendListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetFriendListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetFriendListRequest}
 */
proto.asphrdaemon.GetFriendListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetFriendListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetFriendListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetFriendListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetFriendListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.FriendInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.FriendInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.FriendInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.FriendInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    publicId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invitationProgress: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.FriendInfo}
 */
proto.asphrdaemon.FriendInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.FriendInfo;
  return proto.asphrdaemon.FriendInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.FriendInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.FriendInfo}
 */
proto.asphrdaemon.FriendInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 4:
      var value = /** @type {!proto.asphrdaemon.InvitationProgress} */ (reader.readEnum());
      msg.setInvitationProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.FriendInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.FriendInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.FriendInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.FriendInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvitationProgress();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.FriendInfo.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.FriendInfo} returns this
 */
proto.asphrdaemon.FriendInfo.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.FriendInfo.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.FriendInfo} returns this
 */
proto.asphrdaemon.FriendInfo.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string public_id = 3;
 * @return {string}
 */
proto.asphrdaemon.FriendInfo.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.FriendInfo} returns this
 */
proto.asphrdaemon.FriendInfo.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional InvitationProgress invitation_progress = 4;
 * @return {!proto.asphrdaemon.InvitationProgress}
 */
proto.asphrdaemon.FriendInfo.prototype.getInvitationProgress = function() {
  return /** @type {!proto.asphrdaemon.InvitationProgress} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.asphrdaemon.InvitationProgress} value
 * @return {!proto.asphrdaemon.FriendInfo} returns this
 */
proto.asphrdaemon.FriendInfo.prototype.setInvitationProgress = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetFriendListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetFriendListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetFriendListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetFriendListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetFriendListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    friendInfosList: jspb.Message.toObjectList(msg.getFriendInfosList(),
    proto.asphrdaemon.FriendInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetFriendListResponse}
 */
proto.asphrdaemon.GetFriendListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetFriendListResponse;
  return proto.asphrdaemon.GetFriendListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetFriendListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetFriendListResponse}
 */
proto.asphrdaemon.GetFriendListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.FriendInfo;
      reader.readMessage(value,proto.asphrdaemon.FriendInfo.deserializeBinaryFromReader);
      msg.addFriendInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetFriendListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetFriendListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetFriendListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetFriendListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriendInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.FriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FriendInfo friend_infos = 1;
 * @return {!Array<!proto.asphrdaemon.FriendInfo>}
 */
proto.asphrdaemon.GetFriendListResponse.prototype.getFriendInfosList = function() {
  return /** @type{!Array<!proto.asphrdaemon.FriendInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.FriendInfo, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.FriendInfo>} value
 * @return {!proto.asphrdaemon.GetFriendListResponse} returns this
*/
proto.asphrdaemon.GetFriendListResponse.prototype.setFriendInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.FriendInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.FriendInfo}
 */
proto.asphrdaemon.GetFriendListResponse.prototype.addFriendInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.FriendInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetFriendListResponse} returns this
 */
proto.asphrdaemon.GetFriendListResponse.prototype.clearFriendInfosList = function() {
  return this.setFriendInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetMyPublicIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetMyPublicIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetMyPublicIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMyPublicIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetMyPublicIDRequest}
 */
proto.asphrdaemon.GetMyPublicIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetMyPublicIDRequest;
  return proto.asphrdaemon.GetMyPublicIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetMyPublicIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetMyPublicIDRequest}
 */
proto.asphrdaemon.GetMyPublicIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetMyPublicIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetMyPublicIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetMyPublicIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMyPublicIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetMyPublicIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetMyPublicIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMyPublicIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    story: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetMyPublicIDResponse}
 */
proto.asphrdaemon.GetMyPublicIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetMyPublicIDResponse;
  return proto.asphrdaemon.GetMyPublicIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetMyPublicIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetMyPublicIDResponse}
 */
proto.asphrdaemon.GetMyPublicIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetMyPublicIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetMyPublicIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMyPublicIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetMyPublicIDResponse} returns this
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string story = 2;
 * @return {string}
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.getStory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetMyPublicIDResponse} returns this
 */
proto.asphrdaemon.GetMyPublicIDResponse.prototype.setStory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.IsValidPublicIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.IsValidPublicIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.IsValidPublicIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IsValidPublicIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.IsValidPublicIDRequest}
 */
proto.asphrdaemon.IsValidPublicIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.IsValidPublicIDRequest;
  return proto.asphrdaemon.IsValidPublicIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.IsValidPublicIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.IsValidPublicIDRequest}
 */
proto.asphrdaemon.IsValidPublicIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.IsValidPublicIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.IsValidPublicIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.IsValidPublicIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IsValidPublicIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.IsValidPublicIDRequest.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IsValidPublicIDRequest} returns this
 */
proto.asphrdaemon.IsValidPublicIDRequest.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.IsValidPublicIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.IsValidPublicIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.IsValidPublicIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IsValidPublicIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valid: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.IsValidPublicIDResponse}
 */
proto.asphrdaemon.IsValidPublicIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.IsValidPublicIDResponse;
  return proto.asphrdaemon.IsValidPublicIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.IsValidPublicIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.IsValidPublicIDResponse}
 */
proto.asphrdaemon.IsValidPublicIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.IsValidPublicIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.IsValidPublicIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.IsValidPublicIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IsValidPublicIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool valid = 1;
 * @return {boolean}
 */
proto.asphrdaemon.IsValidPublicIDResponse.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.asphrdaemon.IsValidPublicIDResponse} returns this
 */
proto.asphrdaemon.IsValidPublicIDResponse.prototype.setValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AddSyncFriendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AddSyncFriendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddSyncFriendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    story: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AddSyncFriendRequest}
 */
proto.asphrdaemon.AddSyncFriendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AddSyncFriendRequest;
  return proto.asphrdaemon.AddSyncFriendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AddSyncFriendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AddSyncFriendRequest}
 */
proto.asphrdaemon.AddSyncFriendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AddSyncFriendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AddSyncFriendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddSyncFriendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddSyncFriendRequest} returns this
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddSyncFriendRequest} returns this
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string story = 3;
 * @return {string}
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.getStory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddSyncFriendRequest} returns this
 */
proto.asphrdaemon.AddSyncFriendRequest.prototype.setStory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AddSyncFriendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AddSyncFriendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AddSyncFriendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddSyncFriendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AddSyncFriendResponse}
 */
proto.asphrdaemon.AddSyncFriendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AddSyncFriendResponse;
  return proto.asphrdaemon.AddSyncFriendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AddSyncFriendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AddSyncFriendResponse}
 */
proto.asphrdaemon.AddSyncFriendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AddSyncFriendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AddSyncFriendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AddSyncFriendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddSyncFriendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AddAsyncFriendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AddAsyncFriendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddAsyncFriendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    publicId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest}
 */
proto.asphrdaemon.AddAsyncFriendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AddAsyncFriendRequest;
  return proto.asphrdaemon.AddAsyncFriendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AddAsyncFriendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest}
 */
proto.asphrdaemon.AddAsyncFriendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AddAsyncFriendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AddAsyncFriendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddAsyncFriendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest} returns this
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest} returns this
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string public_id = 3;
 * @return {string}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest} returns this
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AddAsyncFriendRequest} returns this
 */
proto.asphrdaemon.AddAsyncFriendRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AddAsyncFriendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AddAsyncFriendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AddAsyncFriendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddAsyncFriendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AddAsyncFriendResponse}
 */
proto.asphrdaemon.AddAsyncFriendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AddAsyncFriendResponse;
  return proto.asphrdaemon.AddAsyncFriendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AddAsyncFriendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AddAsyncFriendResponse}
 */
proto.asphrdaemon.AddAsyncFriendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AddAsyncFriendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AddAsyncFriendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AddAsyncFriendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AddAsyncFriendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsRequest}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingSyncInvitationsRequest;
  return proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsRequest}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationsList: jspb.Message.toObjectList(msg.getInvitationsList(),
    proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingSyncInvitationsResponse;
  return proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo;
      reader.readMessage(value,proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.deserializeBinaryFromReader);
      msg.addInvitations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    story: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sentAt: (f = msg.getSentAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo;
  return proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStory(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSentAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSentAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string story = 3;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.getStory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.setStory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp sent_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.getSentAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} returns this
*/
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.setSentAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.clearSentAt = function() {
  return this.setSentAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo.prototype.hasSentAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated OutgoingSyncInvitationInfo invitations = 1;
 * @return {!Array<!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo>}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.getInvitationsList = function() {
  return /** @type{!Array<!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo>} value
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse} returns this
*/
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.setInvitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.addInvitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.OutgoingSyncInvitationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetOutgoingSyncInvitationsResponse} returns this
 */
proto.asphrdaemon.GetOutgoingSyncInvitationsResponse.prototype.clearInvitationsList = function() {
  return this.setInvitationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest;
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationsList: jspb.Message.toObjectList(msg.getInvitationsList(),
    proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse;
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo;
      reader.readMessage(value,proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.deserializeBinaryFromReader);
      msg.addInvitations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    publicId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sentAt: (f = msg.getSentAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo;
  return proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSentAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSentAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string public_id = 3;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp sent_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.getSentAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
*/
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.setSentAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.clearSentAt = function() {
  return this.setSentAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo.prototype.hasSentAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated OutgoingAsyncInvitationInfo invitations = 1;
 * @return {!Array<!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo>}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.getInvitationsList = function() {
  return /** @type{!Array<!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo>} value
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse} returns this
*/
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.setInvitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.addInvitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.OutgoingAsyncInvitationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse} returns this
 */
proto.asphrdaemon.GetOutgoingAsyncInvitationsResponse.prototype.clearInvitationsList = function() {
  return this.setInvitationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsRequest}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetIncomingAsyncInvitationsRequest;
  return proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsRequest}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationsList: jspb.Message.toObjectList(msg.getInvitationsList(),
    proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetIncomingAsyncInvitationsResponse;
  return proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo;
      reader.readMessage(value,proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.deserializeBinaryFromReader);
      msg.addInvitations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    receivedAt: (f = msg.getReceivedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo;
  return proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReceivedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceivedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp received_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.getReceivedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} returns this
*/
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.setReceivedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo} returns this
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.clearReceivedAt = function() {
  return this.setReceivedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo.prototype.hasReceivedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated IncomingAsyncInvitationInfo invitations = 1;
 * @return {!Array<!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo>}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.getInvitationsList = function() {
  return /** @type{!Array<!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo>} value
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse} returns this
*/
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.setInvitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo}
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.addInvitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.IncomingAsyncInvitationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetIncomingAsyncInvitationsResponse} returns this
 */
proto.asphrdaemon.GetIncomingAsyncInvitationsResponse.prototype.clearInvitationsList = function() {
  return this.setInvitationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AcceptAsyncInvitationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uniqueName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationRequest}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AcceptAsyncInvitationRequest;
  return proto.asphrdaemon.AcceptAsyncInvitationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationRequest}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AcceptAsyncInvitationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationRequest} returns this
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unique_name = 2;
 * @return {string}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationRequest} returns this
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationRequest} returns this
 */
proto.asphrdaemon.AcceptAsyncInvitationRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.AcceptAsyncInvitationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationResponse}
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.AcceptAsyncInvitationResponse;
  return proto.asphrdaemon.AcceptAsyncInvitationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.AcceptAsyncInvitationResponse}
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.AcceptAsyncInvitationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.AcceptAsyncInvitationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.AcceptAsyncInvitationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RejectAsyncInvitationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RejectAsyncInvitationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RejectAsyncInvitationRequest}
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RejectAsyncInvitationRequest;
  return proto.asphrdaemon.RejectAsyncInvitationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RejectAsyncInvitationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RejectAsyncInvitationRequest}
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RejectAsyncInvitationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RejectAsyncInvitationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.RejectAsyncInvitationRequest} returns this
 */
proto.asphrdaemon.RejectAsyncInvitationRequest.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RejectAsyncInvitationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RejectAsyncInvitationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RejectAsyncInvitationResponse}
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RejectAsyncInvitationResponse;
  return proto.asphrdaemon.RejectAsyncInvitationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RejectAsyncInvitationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RejectAsyncInvitationResponse}
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RejectAsyncInvitationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RejectAsyncInvitationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RejectAsyncInvitationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.CancelAsyncInvitationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.CancelAsyncInvitationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.CancelAsyncInvitationRequest}
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.CancelAsyncInvitationRequest;
  return proto.asphrdaemon.CancelAsyncInvitationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.CancelAsyncInvitationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.CancelAsyncInvitationRequest}
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.CancelAsyncInvitationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.CancelAsyncInvitationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.CancelAsyncInvitationRequest} returns this
 */
proto.asphrdaemon.CancelAsyncInvitationRequest.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.CancelAsyncInvitationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.CancelAsyncInvitationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.CancelAsyncInvitationResponse}
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.CancelAsyncInvitationResponse;
  return proto.asphrdaemon.CancelAsyncInvitationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.CancelAsyncInvitationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.CancelAsyncInvitationResponse}
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.CancelAsyncInvitationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.CancelAsyncInvitationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.CancelAsyncInvitationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RemoveFriendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RemoveFriendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RemoveFriendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RemoveFriendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RemoveFriendRequest}
 */
proto.asphrdaemon.RemoveFriendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RemoveFriendRequest;
  return proto.asphrdaemon.RemoveFriendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RemoveFriendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RemoveFriendRequest}
 */
proto.asphrdaemon.RemoveFriendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RemoveFriendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RemoveFriendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RemoveFriendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RemoveFriendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.RemoveFriendRequest.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.RemoveFriendRequest} returns this
 */
proto.asphrdaemon.RemoveFriendRequest.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.RemoveFriendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.RemoveFriendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.RemoveFriendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RemoveFriendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.RemoveFriendResponse}
 */
proto.asphrdaemon.RemoveFriendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.RemoveFriendResponse;
  return proto.asphrdaemon.RemoveFriendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.RemoveFriendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.RemoveFriendResponse}
 */
proto.asphrdaemon.RemoveFriendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.RemoveFriendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.RemoveFriendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.RemoveFriendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.RemoveFriendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.SendMessageRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueNameList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.SendMessageRequest}
 */
proto.asphrdaemon.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.SendMessageRequest;
  return proto.asphrdaemon.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.SendMessageRequest}
 */
proto.asphrdaemon.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string unique_name = 1;
 * @return {!Array<string>}
 */
proto.asphrdaemon.SendMessageRequest.prototype.getUniqueNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.asphrdaemon.SendMessageRequest} returns this
 */
proto.asphrdaemon.SendMessageRequest.prototype.setUniqueNameList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.SendMessageRequest} returns this
 */
proto.asphrdaemon.SendMessageRequest.prototype.addUniqueName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.SendMessageRequest} returns this
 */
proto.asphrdaemon.SendMessageRequest.prototype.clearUniqueNameList = function() {
  return this.setUniqueNameList([]);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.asphrdaemon.SendMessageRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.SendMessageRequest} returns this
 */
proto.asphrdaemon.SendMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.SendMessageResponse}
 */
proto.asphrdaemon.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.SendMessageResponse;
  return proto.asphrdaemon.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.SendMessageResponse}
 */
proto.asphrdaemon.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.IncomingMaybeFriend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.IncomingMaybeFriend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IncomingMaybeFriend.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uniqueName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.IncomingMaybeFriend}
 */
proto.asphrdaemon.IncomingMaybeFriend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.IncomingMaybeFriend;
  return proto.asphrdaemon.IncomingMaybeFriend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.IncomingMaybeFriend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.IncomingMaybeFriend}
 */
proto.asphrdaemon.IncomingMaybeFriend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.IncomingMaybeFriend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.IncomingMaybeFriend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IncomingMaybeFriend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string public_id = 1;
 * @return {string}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.getPublicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMaybeFriend} returns this
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.setPublicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unique_name = 2;
 * @return {string}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMaybeFriend} returns this
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.setUniqueName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.asphrdaemon.IncomingMaybeFriend} returns this
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.clearUniqueName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.hasUniqueName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMaybeFriend} returns this
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.asphrdaemon.IncomingMaybeFriend} returns this
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.IncomingMaybeFriend.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.IncomingMessage.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.IncomingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.IncomingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.IncomingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IncomingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromUniqueName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fromDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    otherRecipientsList: jspb.Message.toObjectList(msg.getOtherRecipientsList(),
    proto.asphrdaemon.IncomingMaybeFriend.toObject, includeInstance),
    deliveredAt: (f = msg.getDeliveredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    seen: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    delivered: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.IncomingMessage}
 */
proto.asphrdaemon.IncomingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.IncomingMessage;
  return proto.asphrdaemon.IncomingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.IncomingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.IncomingMessage}
 */
proto.asphrdaemon.IncomingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromUniqueName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromDisplayName(value);
      break;
    case 5:
      var value = new proto.asphrdaemon.IncomingMaybeFriend;
      reader.readMessage(value,proto.asphrdaemon.IncomingMaybeFriend.deserializeBinaryFromReader);
      msg.addOtherRecipients(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeliveredAt(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSeen(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelivered(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.IncomingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.IncomingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.IncomingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.IncomingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromUniqueName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFromDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOtherRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.asphrdaemon.IncomingMaybeFriend.serializeBinaryToWriter
    );
  }
  f = message.getDeliveredAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSeen();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDelivered();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional int32 uid = 1;
 * @return {number}
 */
proto.asphrdaemon.IncomingMessage.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.asphrdaemon.IncomingMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string from_unique_name = 3;
 * @return {string}
 */
proto.asphrdaemon.IncomingMessage.prototype.getFromUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setFromUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string from_display_name = 4;
 * @return {string}
 */
proto.asphrdaemon.IncomingMessage.prototype.getFromDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setFromDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated IncomingMaybeFriend other_recipients = 5;
 * @return {!Array<!proto.asphrdaemon.IncomingMaybeFriend>}
 */
proto.asphrdaemon.IncomingMessage.prototype.getOtherRecipientsList = function() {
  return /** @type{!Array<!proto.asphrdaemon.IncomingMaybeFriend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.IncomingMaybeFriend, 5));
};


/**
 * @param {!Array<!proto.asphrdaemon.IncomingMaybeFriend>} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
*/
proto.asphrdaemon.IncomingMessage.prototype.setOtherRecipientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.asphrdaemon.IncomingMaybeFriend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.IncomingMaybeFriend}
 */
proto.asphrdaemon.IncomingMessage.prototype.addOtherRecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.asphrdaemon.IncomingMaybeFriend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.clearOtherRecipientsList = function() {
  return this.setOtherRecipientsList([]);
};


/**
 * optional google.protobuf.Timestamp delivered_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.IncomingMessage.prototype.getDeliveredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
*/
proto.asphrdaemon.IncomingMessage.prototype.setDeliveredAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.clearDeliveredAt = function() {
  return this.setDeliveredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.IncomingMessage.prototype.hasDeliveredAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool seen = 7;
 * @return {boolean}
 */
proto.asphrdaemon.IncomingMessage.prototype.getSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool delivered = 8;
 * @return {boolean}
 */
proto.asphrdaemon.IncomingMessage.prototype.getDelivered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.asphrdaemon.IncomingMessage} returns this
 */
proto.asphrdaemon.IncomingMessage.prototype.setDelivered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.OutgoingFriend.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.OutgoingFriend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.OutgoingFriend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.OutgoingFriend.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    delivered: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    deliveredAt: (f = msg.getDeliveredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.OutgoingFriend}
 */
proto.asphrdaemon.OutgoingFriend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.OutgoingFriend;
  return proto.asphrdaemon.OutgoingFriend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.OutgoingFriend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.OutgoingFriend}
 */
proto.asphrdaemon.OutgoingFriend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelivered(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeliveredAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.OutgoingFriend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.OutgoingFriend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.OutgoingFriend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.OutgoingFriend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDelivered();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDeliveredAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string unique_name = 1;
 * @return {string}
 */
proto.asphrdaemon.OutgoingFriend.prototype.getUniqueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.OutgoingFriend} returns this
 */
proto.asphrdaemon.OutgoingFriend.prototype.setUniqueName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.asphrdaemon.OutgoingFriend.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.OutgoingFriend} returns this
 */
proto.asphrdaemon.OutgoingFriend.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool delivered = 3;
 * @return {boolean}
 */
proto.asphrdaemon.OutgoingFriend.prototype.getDelivered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.asphrdaemon.OutgoingFriend} returns this
 */
proto.asphrdaemon.OutgoingFriend.prototype.setDelivered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp delivered_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.OutgoingFriend.prototype.getDeliveredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.OutgoingFriend} returns this
*/
proto.asphrdaemon.OutgoingFriend.prototype.setDeliveredAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.OutgoingFriend} returns this
 */
proto.asphrdaemon.OutgoingFriend.prototype.clearDeliveredAt = function() {
  return this.setDeliveredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.OutgoingFriend.prototype.hasDeliveredAt = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.OutgoingMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.OutgoingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.OutgoingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.OutgoingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.OutgoingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toFriendsList: jspb.Message.toObjectList(msg.getToFriendsList(),
    proto.asphrdaemon.OutgoingFriend.toObject, includeInstance),
    sentAt: (f = msg.getSentAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.OutgoingMessage}
 */
proto.asphrdaemon.OutgoingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.OutgoingMessage;
  return proto.asphrdaemon.OutgoingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.OutgoingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.OutgoingMessage}
 */
proto.asphrdaemon.OutgoingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.asphrdaemon.OutgoingFriend;
      reader.readMessage(value,proto.asphrdaemon.OutgoingFriend.deserializeBinaryFromReader);
      msg.addToFriends(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSentAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.OutgoingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.OutgoingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.OutgoingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.OutgoingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToFriendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.asphrdaemon.OutgoingFriend.serializeBinaryToWriter
    );
  }
  f = message.getSentAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 uid = 1;
 * @return {number}
 */
proto.asphrdaemon.OutgoingMessage.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
 */
proto.asphrdaemon.OutgoingMessage.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.asphrdaemon.OutgoingMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
 */
proto.asphrdaemon.OutgoingMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated OutgoingFriend to_friends = 3;
 * @return {!Array<!proto.asphrdaemon.OutgoingFriend>}
 */
proto.asphrdaemon.OutgoingMessage.prototype.getToFriendsList = function() {
  return /** @type{!Array<!proto.asphrdaemon.OutgoingFriend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.OutgoingFriend, 3));
};


/**
 * @param {!Array<!proto.asphrdaemon.OutgoingFriend>} value
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
*/
proto.asphrdaemon.OutgoingMessage.prototype.setToFriendsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.asphrdaemon.OutgoingFriend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.OutgoingFriend}
 */
proto.asphrdaemon.OutgoingMessage.prototype.addToFriends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.asphrdaemon.OutgoingFriend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
 */
proto.asphrdaemon.OutgoingMessage.prototype.clearToFriendsList = function() {
  return this.setToFriendsList([]);
};


/**
 * optional google.protobuf.Timestamp sent_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.asphrdaemon.OutgoingMessage.prototype.getSentAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
*/
proto.asphrdaemon.OutgoingMessage.prototype.setSentAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.asphrdaemon.OutgoingMessage} returns this
 */
proto.asphrdaemon.OutgoingMessage.prototype.clearSentAt = function() {
  return this.setSentAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.asphrdaemon.OutgoingMessage.prototype.hasSentAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetMessagesRequest}
 */
proto.asphrdaemon.GetMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetMessagesRequest;
  return proto.asphrdaemon.GetMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetMessagesRequest}
 */
proto.asphrdaemon.GetMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.asphrdaemon.GetMessagesRequest.Filter} */ (reader.readEnum());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.asphrdaemon.GetMessagesRequest.Filter = {
  ALL: 0,
  NEW: 1
};

/**
 * optional Filter filter = 1;
 * @return {!proto.asphrdaemon.GetMessagesRequest.Filter}
 */
proto.asphrdaemon.GetMessagesRequest.prototype.getFilter = function() {
  return /** @type {!proto.asphrdaemon.GetMessagesRequest.Filter} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.asphrdaemon.GetMessagesRequest.Filter} value
 * @return {!proto.asphrdaemon.GetMessagesRequest} returns this
 */
proto.asphrdaemon.GetMessagesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.asphrdaemon.IncomingMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetMessagesResponse}
 */
proto.asphrdaemon.GetMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetMessagesResponse;
  return proto.asphrdaemon.GetMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetMessagesResponse}
 */
proto.asphrdaemon.GetMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.IncomingMessage;
      reader.readMessage(value,proto.asphrdaemon.IncomingMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.IncomingMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IncomingMessage messages = 1;
 * @return {!Array<!proto.asphrdaemon.IncomingMessage>}
 */
proto.asphrdaemon.GetMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.asphrdaemon.IncomingMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.IncomingMessage, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.IncomingMessage>} value
 * @return {!proto.asphrdaemon.GetMessagesResponse} returns this
*/
proto.asphrdaemon.GetMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.IncomingMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.IncomingMessage}
 */
proto.asphrdaemon.GetMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.IncomingMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetMessagesResponse} returns this
 */
proto.asphrdaemon.GetMessagesResponse.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutboxMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutboxMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutboxMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutboxMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutboxMessagesRequest}
 */
proto.asphrdaemon.GetOutboxMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutboxMessagesRequest;
  return proto.asphrdaemon.GetOutboxMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutboxMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutboxMessagesRequest}
 */
proto.asphrdaemon.GetOutboxMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutboxMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutboxMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutboxMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutboxMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetOutboxMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetOutboxMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetOutboxMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutboxMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.asphrdaemon.OutgoingMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetOutboxMessagesResponse}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetOutboxMessagesResponse;
  return proto.asphrdaemon.GetOutboxMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetOutboxMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetOutboxMessagesResponse}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.OutgoingMessage;
      reader.readMessage(value,proto.asphrdaemon.OutgoingMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetOutboxMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetOutboxMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetOutboxMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.OutgoingMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutgoingMessage messages = 1;
 * @return {!Array<!proto.asphrdaemon.OutgoingMessage>}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.asphrdaemon.OutgoingMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.OutgoingMessage, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.OutgoingMessage>} value
 * @return {!proto.asphrdaemon.GetOutboxMessagesResponse} returns this
*/
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.OutgoingMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.OutgoingMessage}
 */
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.OutgoingMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetOutboxMessagesResponse} returns this
 */
proto.asphrdaemon.GetOutboxMessagesResponse.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetSentMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetSentMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetSentMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetSentMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetSentMessagesRequest}
 */
proto.asphrdaemon.GetSentMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetSentMessagesRequest;
  return proto.asphrdaemon.GetSentMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetSentMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetSentMessagesRequest}
 */
proto.asphrdaemon.GetSentMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetSentMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetSentMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetSentMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetSentMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asphrdaemon.GetSentMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetSentMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetSentMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetSentMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetSentMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.asphrdaemon.OutgoingMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetSentMessagesResponse}
 */
proto.asphrdaemon.GetSentMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetSentMessagesResponse;
  return proto.asphrdaemon.GetSentMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetSentMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetSentMessagesResponse}
 */
proto.asphrdaemon.GetSentMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asphrdaemon.OutgoingMessage;
      reader.readMessage(value,proto.asphrdaemon.OutgoingMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetSentMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetSentMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetSentMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetSentMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asphrdaemon.OutgoingMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutgoingMessage messages = 1;
 * @return {!Array<!proto.asphrdaemon.OutgoingMessage>}
 */
proto.asphrdaemon.GetSentMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.asphrdaemon.OutgoingMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asphrdaemon.OutgoingMessage, 1));
};


/**
 * @param {!Array<!proto.asphrdaemon.OutgoingMessage>} value
 * @return {!proto.asphrdaemon.GetSentMessagesResponse} returns this
*/
proto.asphrdaemon.GetSentMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asphrdaemon.OutgoingMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asphrdaemon.OutgoingMessage}
 */
proto.asphrdaemon.GetSentMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asphrdaemon.OutgoingMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.asphrdaemon.GetSentMessagesResponse} returns this
 */
proto.asphrdaemon.GetSentMessagesResponse.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.MessageSeenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.MessageSeenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.MessageSeenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.MessageSeenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.MessageSeenRequest}
 */
proto.asphrdaemon.MessageSeenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.MessageSeenRequest;
  return proto.asphrdaemon.MessageSeenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.MessageSeenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.MessageSeenRequest}
 */
proto.asphrdaemon.MessageSeenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.MessageSeenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.MessageSeenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.MessageSeenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.MessageSeenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.asphrdaemon.MessageSeenRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.MessageSeenRequest} returns this
 */
proto.asphrdaemon.MessageSeenRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.MessageSeenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.MessageSeenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.MessageSeenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.MessageSeenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.MessageSeenResponse}
 */
proto.asphrdaemon.MessageSeenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.MessageSeenResponse;
  return proto.asphrdaemon.MessageSeenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.MessageSeenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.MessageSeenResponse}
 */
proto.asphrdaemon.MessageSeenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.MessageSeenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.MessageSeenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.MessageSeenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.MessageSeenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetStatusRequest}
 */
proto.asphrdaemon.GetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetStatusRequest;
  return proto.asphrdaemon.GetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetStatusRequest}
 */
proto.asphrdaemon.GetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    registered: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    releaseHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latencySeconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serverAddress: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetStatusResponse}
 */
proto.asphrdaemon.GetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetStatusResponse;
  return proto.asphrdaemon.GetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetStatusResponse}
 */
proto.asphrdaemon.GetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRegistered(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReleaseHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatencySeconds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegistered();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReleaseHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatencySeconds();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getServerAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool registered = 1;
 * @return {boolean}
 */
proto.asphrdaemon.GetStatusResponse.prototype.getRegistered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.asphrdaemon.GetStatusResponse} returns this
 */
proto.asphrdaemon.GetStatusResponse.prototype.setRegistered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string release_hash = 2;
 * @return {string}
 */
proto.asphrdaemon.GetStatusResponse.prototype.getReleaseHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetStatusResponse} returns this
 */
proto.asphrdaemon.GetStatusResponse.prototype.setReleaseHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 latency_seconds = 3;
 * @return {number}
 */
proto.asphrdaemon.GetStatusResponse.prototype.getLatencySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.GetStatusResponse} returns this
 */
proto.asphrdaemon.GetStatusResponse.prototype.setLatencySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string server_address = 4;
 * @return {string}
 */
proto.asphrdaemon.GetStatusResponse.prototype.getServerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.asphrdaemon.GetStatusResponse} returns this
 */
proto.asphrdaemon.GetStatusResponse.prototype.setServerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetLatencyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetLatencyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetLatencyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetLatencyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetLatencyRequest}
 */
proto.asphrdaemon.GetLatencyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetLatencyRequest;
  return proto.asphrdaemon.GetLatencyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetLatencyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetLatencyRequest}
 */
proto.asphrdaemon.GetLatencyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetLatencyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetLatencyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetLatencyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetLatencyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.GetLatencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.GetLatencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.GetLatencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetLatencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    latencySeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.GetLatencyResponse}
 */
proto.asphrdaemon.GetLatencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.GetLatencyResponse;
  return proto.asphrdaemon.GetLatencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.GetLatencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.GetLatencyResponse}
 */
proto.asphrdaemon.GetLatencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatencySeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.GetLatencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.GetLatencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.GetLatencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.GetLatencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatencySeconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 latency_seconds = 1;
 * @return {number}
 */
proto.asphrdaemon.GetLatencyResponse.prototype.getLatencySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.GetLatencyResponse} returns this
 */
proto.asphrdaemon.GetLatencyResponse.prototype.setLatencySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.ChangeLatencyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.ChangeLatencyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.ChangeLatencyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.ChangeLatencyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    latencySeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.ChangeLatencyRequest}
 */
proto.asphrdaemon.ChangeLatencyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.ChangeLatencyRequest;
  return proto.asphrdaemon.ChangeLatencyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.ChangeLatencyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.ChangeLatencyRequest}
 */
proto.asphrdaemon.ChangeLatencyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatencySeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.ChangeLatencyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.ChangeLatencyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.ChangeLatencyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.ChangeLatencyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatencySeconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 latency_seconds = 1;
 * @return {number}
 */
proto.asphrdaemon.ChangeLatencyRequest.prototype.getLatencySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.asphrdaemon.ChangeLatencyRequest} returns this
 */
proto.asphrdaemon.ChangeLatencyRequest.prototype.setLatencySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.ChangeLatencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.ChangeLatencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.ChangeLatencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.ChangeLatencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.ChangeLatencyResponse}
 */
proto.asphrdaemon.ChangeLatencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.ChangeLatencyResponse;
  return proto.asphrdaemon.ChangeLatencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.ChangeLatencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.ChangeLatencyResponse}
 */
proto.asphrdaemon.ChangeLatencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.ChangeLatencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.ChangeLatencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.ChangeLatencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.ChangeLatencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.KillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.KillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.KillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.KillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.KillRequest}
 */
proto.asphrdaemon.KillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.KillRequest;
  return proto.asphrdaemon.KillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.KillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.KillRequest}
 */
proto.asphrdaemon.KillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.KillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.KillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.KillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.KillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asphrdaemon.KillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asphrdaemon.KillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asphrdaemon.KillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.KillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asphrdaemon.KillResponse}
 */
proto.asphrdaemon.KillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asphrdaemon.KillResponse;
  return proto.asphrdaemon.KillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asphrdaemon.KillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asphrdaemon.KillResponse}
 */
proto.asphrdaemon.KillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asphrdaemon.KillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asphrdaemon.KillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asphrdaemon.KillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asphrdaemon.KillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.asphrdaemon.InvitationProgress = {
  OUTGOINGASYNC: 0,
  OUTGOINGSYNC: 1,
  COMPLETE: 2
};

goog.object.extend(exports, proto.asphrdaemon);
