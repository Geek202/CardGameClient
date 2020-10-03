# CardGameClient
This is the client code for my CS Card Game project
## How it works
### Tools
- Vue.js 3 to create the web interface
- Websockets to communicate with the game server
- Octicons for nice icons
### Network protocol
The network protocol uses WebSockets for 2-way communication between the client and the server. The messages are sent as text payloads and contain JSON encoded objects. Each packet contains a property `type` that specifies what type of packet it is.
#### Packet types
| Type | Direction | Example Content | Description |
|--|--|--|--|
| `login` | To server | `{`<br>`"type":"login",`<br>`"name":"Tom"`<br>`}` | Contains the username of the player to identify with the server. A formal request to join the game |
| `login` | To client | `{`<br>`"type":"login",`<br>`"username":"tom",`<br>`"player_count":1,`<br>`"host":"tom"`<br>`}` | A packet confirming the client's request to join the game, and contains other information about the state of the game. |
| `start_game` | To server | `{`<br>`"type":"start_game"`<br>`}` | Tells the server to start the game. The server first verifies that the user who sent the message is the host and ingores this packet if they are not. |
| `player_sync` | To client | `{`<br>`"type":"player_sync",`<br>`"hand":`<br>`[{`<br>`"colour":"RED",`<br>`"value":6`<br>`}],`<br>`"score":0,"played_card":1`<br>`}` | Syncronises the state of the current player with the client. The hand is an array of card objects that the user can play from. The score is unused and will probably be removed soon. `played_card` is the index into the `hand` array that specifies which card the user has selected to play that round. |
| `game_state` | To client | `{`<br>`"type":"game_state",`<br>`"host":"tom",`<br>`"player_count":2,`<br>`"game_state":"IN_GAME",`<br>`"limbo_cards":[]`<br>`}` | Used to update the clients view of the game state. `host` is the username of the player who joined the game first and can begin the round. `game_state` is one of `LOBBY`, `IN_GAME` and `ENDED`. `limbo_cards` is currently unused. |
| `play_card` | To server | `{`<br>`"type":"play_card",`<br>`"card_num":1`<br>`}` | Tells the server the index of the players selection of card. |
| `round_end` | To client | `{`<br>`"type":"round_end",`<br>`"winner":"tom"`<br>`}` | Tells the client that a round has ended and who the winner was. |
| `game_results` | To client | `{`<br>`"type":"game_results",`<br>`"leaderboard": ["tom", "bob"]`<br>`}` | Tells the client that the game has ended and includes the leaderboard to be displayed. |
