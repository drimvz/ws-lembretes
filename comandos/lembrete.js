const { Client, Location, List, Buttons, LocalAuth } = require('whatsapp-web.js');
const Enmap = require('enmap');

module.exports = async (client, message) => {

    comandos(client, message)

}

async function comandos(client, message) {

    //console.log('opa x1');

    if (message.body.startsWith("!lembrete ")) {
        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });
        dbz.push('bomdia',  message.from)
        const ser = message.body.split("!lembrete ");
        const aqui = ser[1];

        if (dbz.has(message.from)) {
            dbz.push(message.from,  `${aqui}`)
            console.log(message.from)
            console.log(ser, '\n', aqui, '\n', dbz)
        }
        else {
            dbz.set(message.from, [])
            dbz.push(message.from, `${aqui}`)
            console.log(message.from)
            console.log(ser, '\n', aqui, '\n', dbz)
        }
        const usuario = dbz.get(message.from);
        console.log(usuario,'\n',usuario.length)
        

        switch (usuario.length) {
            case 1:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0]      
                );
                break;

            case 2:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1]
                );
                break;

            case 3:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2]
                );
                break;

            case 4:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3]

                );
                break;

            case 5:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4]

                );
                break;

            case 6:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5]

                );
                break;

            case 7:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] 

                );
                break;

            case 8:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7]

                );
                break;

            case 9:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7] +
                    '\nlembrete 9: ' + usuario[8] 

                );
                break;

            case 10:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7] +
                    '\nlembrete 9: ' + usuario[8] +
                    '\nlembrete 10: ' + usuario[9] 

                );
                break;

        }
        


    }

    if (message.body.startsWith("!remover ")) {
        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });

        const ser = message.body.split("!remover ");
        const aqui = ser[1];
        console.log(aqui)
        const usuario = dbz.get(message.from);
        console.log(usuario, '\n', usuario.length)

        dbz.remove(message.from, usuario[(aqui)-1])
        console.log(dbz)


        /*if (dbz.has(message.from)) {
            dbz.remove(message.from,  aqui)
            console.log(aqui)
            console.log(dbz)
          console.log(message.from)
         console.log(ser, '\n', aqui, '\n', dbz)
        }*/

    }

    if (message.body.startsWith("!lembretes")) {
        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });
        const usuario = dbz.get(message.from);
        if (usuario === undefined)return;
        console.log(usuario, '\n', usuario.length)

        switch (usuario.length) {
            case 1:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0]      
                );
                break;

            case 2:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1]
                );
                break;

            case 3:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2]
                );
                break;

            case 4:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3]

                );
                break;

            case 5:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4]

                );
                break;

            case 6:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5]

                );
                break;

            case 7:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] 

                );
                break;

            case 8:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7]

                );
                break;

            case 9:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7] +
                    '\nlembrete 9: ' + usuario[8] 

                );
                break;

            case 10:
                client.sendMessage(
                    message.from, "lembrete 1: " + usuario[0] +
                    '\nlembrete 2: ' + usuario[1] +
                    '\nlembrete 3: ' + usuario[2] +
                    '\nlembrete 4: ' + usuario[3] +
                    '\nlembrete 5: ' + usuario[4] +
                    '\nlembrete 6: ' + usuario[5] +
                    '\nlembrete 7: ' + usuario[6] +
                    '\nlembrete 8: ' + usuario[7] +
                    '\nlembrete 9: ' + usuario[8] +
                    '\nlembrete 10: ' + usuario[9] 

                );
                break;

        }



        /*if (dbz.has(message.from)) {
            dbz.remove(message.from,  aqui)
            console.log(aqui)
            console.log(dbz)
//            console.log(message.from)
//            console.log(ser, '\n', aqui, '\n', dbz)
        }*/

    }

}
