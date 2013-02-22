package gambit

import (
	"github.com/brendonh/go-service"
	"github.com/brendonh/loge/src/loge"
)

type GambitServer struct {
	goservice.Server
	DB *loge.LogeDB
}

func BuildServer(dbpath string) *GambitServer {
	var services = goservice.NewServiceCollection()

	var server = goservice.NewServer(services, goservice.BasicSessionCreator)

	var websocketEndpoint = goservice.NewWebsocketEndpoint(":4567", server)
	websocketEndpoint.Handler = GameMessageHandler
	server.AddEndpoint(websocketEndpoint)

	return &GambitServer {
		*server,
		loge.NewLogeDB(loge.NewLevelDBStore(dbpath)),
	}
}