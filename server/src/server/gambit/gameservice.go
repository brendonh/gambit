package gambit

import (
	"fmt"

	. "github.com/brendonh/go-service"

	"code.google.com/p/go.net/websocket"
)


func GameMessageHandler(endpoint *WebsocketEndpoint, buf []byte, 
	session Session, conn *websocket.Conn) {

	fmt.Printf("Got: %v\n", buf)
}