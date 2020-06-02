const radios = [{
        name: "Jedynka",
        src: "http://mp3.polskieradio.pl:8900/;",
        type: "audio/mp3"
    },
    {
        name: "Dwójka",
        src: "http://mp3.polskieradio.pl:8902/;",
        type: "audio/mp3"
    },
    {
        name: "Trójka",
        src: "http://mp3.polskieradio.pl:8904/;",
        type: "audio/mp3"
    },
    {
        name: "RMF FM",
        src: "http://195.150.20.242:8000/rmf_fm",
        type: "audio/mp3"
    },
    {
        name: "Radio Maryja",
        src: "http://radio.zamarproductions.com:5946/;",
        type: "audio/mp3"
    },
    {
        name: "Radio ZET",
        src: "http://zet090-02.cdn.eurozet.pl:8404/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Złote Przeboje",
        src: "http://poznan7.radio.pionier.net.pl:8000/tuba9-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "Złote Przeboje Gdańsk",
        src: "http://stream10.radioagora.pl/zp_gda_128.mp3",
        type: "audio/mp3"
    },
    {
        name: "PR Poznań",
        src: "http://stream4.nadaje.com:8578/poznan",
        type: "audio/mp3"
    },
    {
        name: "PR Kraków",
        src: "http://stream4.nadaje.com:9680/radiokrakow-s3",
        type: "audio/mp3"
    },
    {
        name: "PR Katowice",
        src: "http://stream4.nadaje.com:9212/radiokatowice",
        type: "audio/mp3"
    },
    {
        name: "PR Opole",
        src: "http://dab.radio.opole.pl:8035/1",
        type: "audio/mp3"
    },
    {
        name: "Meloradio FM",
        src: "http://mel.cdn.eurozet.pl/mel-ols.mp3",
        type: "audio/mp3"
    },
    {
        name: "PR Zachód",
        src: "http://stream02.zachod.pl:10113/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Tok FM",
        src: "http://poznan5-4.radio.pionier.net.pl:8000/tuba10-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "PR Szczecin",
        src: "http://stream4.nadaje.com:11986/prs.aac",
        type: "audio/mp3"
    },
    {
        name: "PR Olsztyn",
        src: "http://olsztyn.radio.pionier.net.pl:7055/;",
        type: "audio/mp3"
    },
    {
        name: "PR Białystok",
        src: "http://stream4.nadaje.com:15476/radiobialystok",
        type: "audio/mp3"
    },
    {
        name: "PR Koszalin",
        src: "http://s0.radiohost.pl:8240/;",
        type: "audio/mp3"
    },
    {
        name: "PR Pomorza i Kujaw",
        src: "http://stream.radiopik.pl:9004/;",
        type: "audio/mp3"
    },
    {
        name: "Białoruskie radio racja",
        src: "http://air.racyja.com:8000/racja256",
        type: "audio/mp3"
    },
    {
        name: "RMF Classic",
        src: "http://rmfstream1.interia.pl:8000/rmf_classic",
        type: "audio/mp3"
    },
    {
        name: "Antyradio FM",
        src: "http://ant-kat-01.cdn.eurozet.pl:8604/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Plus Gdańsk",
        src: "http://plu-gdn-02.cdn.eurozet.pl:8304/;",
        type: "audio/mp3"
    },
    {
        name: "VOX FM",
        src: "http://85.219.133.18/radio.php?id=-1&url=http://www.eskago.pl/radio/vox-fm",
        type: "audio/mp3"
    },
    {
        name: "Radio Rodzina",
        src: "http://sluchaj.radiorodzina.pl/RadioRodzinaWroclawLIVE.mp3",
        type: "audio/mp3"
    },
    {
        name: "Muzyczne Radio",
        src: "http://stream.nadaje.com:9900/;",
        type: "audio/mp3"
    },
    {
        name: "Radio RDN",
        src: "http://rdn.pl:8002/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Plus Legnica",
        src: "http://stream.plus.legnica.pl:8000/plusaacp",
        type: "audio/mp3"
    },
    {
        name: "Radio eM",
        src: "http://91.200.187.58/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Pogoda",
        src: "http://stream13.radioagora.pl/tuba38-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "KRP Katolickie Radio Podlasie",
        src: "http://s1.slotex.pl:7038/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Victoria",
        src: "https://stream.v4.radiovictoria.pl:8076/;?type=http&nocache=4494",
        type: "audio/mp3"
    },
    {
        name: "Muzo FM",
        src: "http://stream4.nadaje.com/muzo",
        type: "audio/mp3"
    },
    {
        name: "Rock Radio",
        src: "http://stream13.radioagora.pl/tuba9004-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Doxa",
        src: "http://81.210.92.213:8000/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Weekend",
        src: "http://stream.weekendfm.pl:8000/weekendfm_najlepsza.aac",
        type: "audio/mp3"
    },
    {
        name: "VIA - Katolickie Radio Rzeszów",
        src: "http://62.133.128.18:8040/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Elka",
        src: "http://live.elka.pl:8000/elkamp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Nadzieja",
        src: "http://streaming01.technologicznie.net:8000/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Fiat",
        src: "http://stream2.nadaje.com:8056/;",
        type: "audio/mp3"
    },
    {
        name: "Radio CCM",
        src: "http://primary.moodyradiostream.org/radioccm",
        type: "audio/mp3"
    },
    {
        name: "Radio Emaus",
        src: "http://stream.radioemaus.pl:8000/mp3stream",
        type: "audio/mp3"
    },
    {
        name: "Radio Fara",
        src: "http://62.133.128.22:8000/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Plus Gniezno",
        src: "http://plu02.cdn.eurozet.pl:8308/plu-gnz.fb.mp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Plus Radom",
        src: "http://78.46.170.230:8040/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Plus Warszawa",
        src: "http://plu02.cdn.eurozet.pl:8318/plu-waw.mp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Leliwa",
        src: "http://stream2.nadaje.com:8054/;",
        type: "audio/mp3"
    },
    {
        name: "Chillzet FM",
        src: "http://chi-net.cdn.eurozet.pl:8900/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Fama Kielce",
        src: "http://stream2.nadaje.com:8076/",
        type: "audio/mp3"
    },
    {
        name: "Radio Niepokalanów",
        src: "http://88.199.169.10:8000/;",
        type: "audio/mp3"
    },
    {
        name: "Radio Parada",
        src: "http://stream4.nadaje.com:15274/live",
        type: "audio/mp3"
    },
    {
        name: "Wasze Radio FM",
        src: "http://stream1.waszeradiofm.pl:8000/stream",
        type: "audio/mp3"
    },
    {
        name: "Radio Głos",
        src: "http://87.204.92.180:8000/;",
        type: "audio/mp3"
    },
    {
        name: "Krdp FM",
        src: "http://s1.slotex.pl:7762/;",
        type: "audio/mp3"
    },
    {
        name: "Radio 90 FM",
        src: "http://streams.radio90.pl:8000/radio90_128kbps_stereo.mp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Bielsko",
        src: "http://stream.nadaje.com:8044/",
        type: "audio/mp3"
    },
    {
        name: "Radio Eska",
        src: "http://waw02-03.ic.smcdn.pl:8000/t043-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "RMF MAXXX",
        src: "http://195.150.20.242:8000/rmf_maxxx",
        type: "audio/mp3"
    },
    {
        name: "ESKA Trójmiasto",
        src: "http://waw02-03.ic.smcdn.pl:8000/t048-1.mp3",
        type: "audio/mp3"
    },
    {
        name: "Złote przeboje Gdańsk",
        src: "http://stream10.radioagora.pl/zp_gda_128.mp3",
        type: "audio/mp3"
    },
    {
        name: "Radio Kaszebe",
        src: "http://stream3.nadaje.com:8048/;",
        type: "audio/mp3"
    }
];

const content = document.querySelector('#content');

radios.forEach((elem) => {
    content.innerHTML += `<p>${elem.name}</p><audio src="${elem.src}" type="${elem.type}" preload="none" controls></audio>`;
});