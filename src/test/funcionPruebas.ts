
import esriRequest from "@arcgis/core/request";

var portalUrl = "https://bogesaagavtcv.red.ecopetrol.com.co/arcgis";
//Edicion
var portalGroupEdicionId = 'e1cfdd76f0dc44369347f54ec5dc23fe';
var portalGroupConsultaId = 'caa1b06d25f94c72902ef2b5b30555cd';
var url = `${portalUrl}/sharing/rest/community/groups/${portalGroupConsultaId}/userList`;

var urlJsonEdicion = `${portalUrl}/sharing/rest/community/groups/${portalGroupEdicionId}/userList?f=pjson`;
var urlJsonConsulta = `${portalUrl}/sharing/rest/community/groups/${portalGroupConsultaId}/userList?f=pjson`;

// fetch(urlJson, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// })
//     .then(response => console.log(response))

esriRequest(urlJsonEdicion, {
    responseType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
).then(function (response) {
    console.log("Edicion")
    console.log("Success: ", response);
}, function (error) {
    console.log("Error: ", error);
});

esriRequest(urlJsonConsulta, {
    responseType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
).then(function (response) {
    console.log("Consulta")
    console.log("Success: ", response);
}, function (error) {
    console.log("Error: ", error);
});


