const { Client, Location, List, Buttons, LocalAuth } = require('whatsapp-web.js');
const { readdirSync } = require('fs');
const qrcode = require('qrcode-terminal');
const cron = require ('cron');
const Enmap = require ( 'enmap' );
const client = new Client({ authStrategy: new LocalAuth(), session: {}, puppeteer: { headless: true, args: ["--no-sandbox"], }, });
client.initialize();client.on('qr', qr => {qrcode.generate(qr, {small: true});});
client.on('auth_failure', msg => {console.error('AUTHENTICATION FAILURE', msg);});

client.on('ready', () => {

    console.log('BOT LIGADO!'); //var dbz = new Enmap({name: "zap",dataDir: "./data/zap"}); //var data = dbz.get('bomdia') //console.log(data)
    
    let bomdia = new cron.CronJob('30 09 * * *', () => {

        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });
        var data = dbz.get('bomdia')

        data.forEach(function (d) {
            vazio = []
            var lembretes = dbz.get(d) //datb = lembretes.toString() //datc = datb.replace(',','\n') //console.log(lembretes) //console.log(lembretes.length)
            if (!lembretes.length >= 1) {
                console.log('zika')
                return;
            }

            lembretes.forEach(function (d, i) {
                contagem = i + 1;
                vazio.push("\nmensagem " + contagem + ": " + d + "\n\n")
            });

            datc = vazio.toString();
            var datd = datc.replace(',', '');

            client.sendMessage(d, "*Bom dia, Você possui lembretes:*\n" + datd)
            vazio = []
        })
    })

    let boatarde = new cron.CronJob('00 16 * * *', () => {
        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });
        var data = dbz.get('bomdia')

        data.forEach(function (d) {
            vazio = []
            var lembretes = dbz.get(d) //datb = lembretes.toString() //datc = datb.replace(',','\n') //console.log(lembretes) //console.log(lembretes.length)
            if (!lembretes.length >= 1) {
                console.log('zika')
                return;
            }

            lembretes.forEach(function (d, i) {
                contagem = i + 1;
                vazio.push("\nmensagem" + contagem + ": " + d + "\n\n")
            });

            datc = vazio.toString();
            var datd = datc.replace(',', '');

            client.sendMessage(d, "*boa tarde, Você possui lembretes:*\n" + datd)
            vazio = []
        })
    })

    let boanoite = new cron.CronJob('30 22 * * *', () => {
        var dbz = new Enmap({
            name: "zap",
            dataDir: "./data/zap"
        });
        var data = dbz.get('bomdia')

        data.forEach(function (d) {
            vazio = []
            var lembretes = dbz.get(d) //datb = lembretes.toString() //datc = datb.replace(',','\n') //console.log(lembretes) //console.log(lembretes.length)
            if (!lembretes.length >= 1) {
                console.log('zika')
                return;
            }

            lembretes.forEach(function (d, i) {
                contagem = i + 1;
                vazio.push("\nmensagem" + contagem + ": " + d + "\n\n")
            });

            datc = vazio.toString();
            var datd = datc.replace(',', '');

            client.sendMessage(d, "*boa noite, Você possui lembretes:*\n" + datd)
            vazio = []
        })
    })
    
    bomdia.start()
    boatarde.start()
    boanoite.start()

});

client.on('group_join', (notification) => {
    // User has joined or been added to the group.
    console.log('join', notification);
    //client.sendMessage('120363024728626412@g.us','bem vindo(a)')
    
});
client.on('group_leave', (notification) => {
    // User has left or been kicked from the group.
    console.log('leave');
});
client.on('group_update', (notification) => {
    // Group picture, subject or description has been updated.
    console.log('update', notification);
});
client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});


const evtFiles = readdirSync('./comandos/')
evtFiles.forEach(f => {
const eventName = "message";
const event = require(`./comandos/${f}`)

client.on(eventName, event.bind(null, client))
})
