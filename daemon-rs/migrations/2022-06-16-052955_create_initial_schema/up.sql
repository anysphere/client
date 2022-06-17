-- exactly 1 element always!
CREATE TABLE config (
    uid integer PRIMARY KEY NOT NULL,
    server_address text,
    server_address_default boolean NOT NULL, -- whether the user is using the default server address! if so we replace from code at every startup
    latency integer,
    latency_default boolean NOT NULL, -- whether the user is using the default latency! if so we replace from code at every startup
    has_registered boolean NOT NULL,
    registration_uid integer,
    FOREIGN KEY(registration_uid) REFERENCES registration(uid)
);

-- 0-1 elements always!
CREATE TABLE registration (
    uid integer PRIMARY KEY NOT NULL,
    public_key blob NOT NULL,
    private_key blob NOT NULL,
    allocation integer NOT NULL,
    pir_secret_key blob NOT NULL,
    pir_galois_key blob NOT NULL,
    authentication_token text NOT NULL
);

-- never delete a friend! instead, set `deleted` to true, or else we will lose history!
-- (if you actually do delete, you need to also delete from the message tables, or else 
-- the foreign key constraints will fail)
CREATE TABLE friend (
    uid integer PRIMARY KEY NOT NULL,
    unique_name text NOT NULL,
    display_name text NOT NULL,
    enabled boolean NOT NULL,
    deleted boolean NOT NULL
);

CREATE TABLE address (
    uid integer PRIMARY KEY NOT NULL,
    read_index integer NOT NULL,
  -- ack_index is the index into the acking data for this friend
  -- this NEEDS to be unique for every friend!!
  -- This needs to be between 0 <= ack_index < MAX_FRIENDS
    ack_index integer NOT NULL,
    read_key blob NOT NULL,
    write_key blob NOT NULL,
    FOREIGN KEY(uid) REFERENCES friend(uid)
);

CREATE TABLE status (
    uid integer PRIMARY KEY NOT NULL,
  -- sent_acked_seqnum is the latest sequence number that was ACKed by the friend
  -- any message with seqnum > sent_acked_seqnum MUST be retried.
    sent_acked_seqnum integer NOT NULL, 
  -- received_seqnum is the value that should be ACKed. we acknowledge that we
  -- have received all sequence numbers up to and including this value.
    received_seqnum integer NOT NULL,
    FOREIGN KEY(uid) REFERENCES friend(uid)
);

-- message includes ALL real messages
CREATE TABLE message (
    uid integer PRIMARY KEY NOT NULL,
    s text NOT NULL -- the payload!
);

CREATE TABLE draft (
    uid integer PRIMARY KEY NOT NULL,
    to_friend integer NOT NULL,
    FOREIGN KEY(uid) REFERENCES message(uid),
    FOREIGN KEY(to_friend) REFERENCES friend(uid)
);

-- sent includes messages that have only partially been sent, and still have chunks (delivered=false)
CREATE TABLE sent (
    uid integer PRIMARY KEY NOT NULL,
    to_friend integer NOT NULL,
    num_chunks integer NOT NULL,
    sent_at timestamp NOT NULL, -- time when the user pressed 'Send'
    delivered boolean NOT NULL, -- true when the entire message has been delivered and acked
    delivered_at timestamp, -- time when the message was delivered
    FOREIGN KEY(uid) REFERENCES message(uid),
    FOREIGN KEY(to_friend) REFERENCES friend(uid)
);

-- received includes messages that have only partially been received, and still have chunks (delivered=false)
CREATE TABLE received (
    uid integer PRIMARY KEY NOT NULL,
    from_friend integer NOT NULL,
    num_chunks integer NOT NULL,
    received_at timestamp NOT NULL, -- timestamp when the first chunk was received
    delivered boolean NOT NULL, -- true when the entire message has been delivered
    delivered_at timestamp, -- timestamp when the last chunk was delivered
    seen boolean NOT NULL,
    FOREIGN KEY(uid) REFERENCES message(uid),
    FOREIGN KEY(from_friend) REFERENCES friend(uid)
);

CREATE TABLE outgoing_chunk (
    to_friend integer NOT NULL,
    sequence_number integer NOT NULL,
    chunk_index integer NOT NULL,
    message_uid integer NOT NULL,
  -- the message is encoded using message.proto so it will be a bytestream
    message blob NOT NULL,
    PRIMARY KEY (to_friend, sequence_number),
    FOREIGN KEY(message_uid) REFERENCES sent(uid),
    FOREIGN KEY(to_friend) REFERENCES friend(uid)
);

CREATE TABLE incoming_chunk (
    from_friend integer NOT NULL,
    sequence_number integer NOT NULL,
    chunk_index integer NOT NULL,
    message_uid integer NOT NULL,
  -- the message is encoded using message.proto so it will be a bytestream
    message blob NOT NULL,
    PRIMARY KEY (from_friend, sequence_number),
    FOREIGN KEY(message_uid) REFERENCES received(uid),
    FOREIGN KEY(from_friend) REFERENCES friend(uid)
);






------------------END OF SCHEMA------------------
------------------START OF DATA------------------


INSERT INTO config (uid, server_address_default, latency_default, has_registered) VALUES (1, true, true, false);