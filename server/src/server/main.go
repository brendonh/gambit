package main

import (
	"fmt"
	"os"
	"os/signal"

	"server/gambit"
)


func main() {
	var server = gambit.BuildServer("data/gambit")
	fmt.Printf("Server: %v\n", server)

	var stopper = make(chan os.Signal, 1)
	signal.Notify(stopper)

	server.Start()
	
	<-stopper
	close(stopper)

	fmt.Printf("\nShutting down ...\n")
	server.Stop()
	server.DB.Close()
}