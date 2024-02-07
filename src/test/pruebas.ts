import esriId from "@arcgis/core/identity/IdentityManager.js";
import ServerInfo from "@arcgis/core/identity/ServerInfo.js";

  let serverInfo = new ServerInfo();
  serverInfo.server  = "https://bogesaagavtcv.red.ecopetrol.com.co/server/rest/services";
  serverInfo.tokenServiceUrl = "https://bogesaagavtcv.red.ecopetrol.com.co/arcgis/sharing/rest/generateToken";
  serverInfo.hasServer = true;

  // esriId.registerServers([serverInfo]);

    var userInfo = {
      username : "miguel.villamizar@ecopetrol.com.co",
      password : "2023AmarilloRojo**"
    }
    esriId.generateToken(serverInfo, userInfo).then(function (response){

      console.log(response);
        response.server = serverInfo.server;
        response.userId = userInfo.username;
        esriId.registerToken(response);
    });
