let engineers = [
    {
        name: "Fendar Duskshadow",
        src: "./img/fendar_duskshadow.png",
        desc: "Build Track on a hex on the edge of the map.",
        isBanned: false
    },
    {
        name: "Adelaide Chivers",
        src: "./img/adelaide_chivers.png",
        desc: "Gain Spellcar.",
        isBanned: false
    },
    {
        name: "Eloi Klaus",
        src: "./img/eloi_klaus.png",
        desc: "When you Move + Activate this turn, Activate any number of Spellcars for free and Reclaim one Crystal. (You must pay any inherent costs.)",
        isBanned: false
    },
    {
        name: "Aerlion",
        src: "./img/aerlion.png",
        desc: "Place Wasteland. During this turn, you may Transfer through it for free.",
        isBanned: false
    },
    {
        name: "Garek Tesias",
        src: "./img/garek_tesias.png",
        desc: "Swap the position of two Spellcars on your folio or move one to an empty slot. (You may move a Spellcar into the thrid row of your railyard this way even if you have not filled the second.)",
        isBanned: false
    },
    {
        name: "Arret Draamiyaar",
        src: "./img/arret_draamiyaar.png",
        desc: "Copy the ability of another player's faceup Engineer.",
        isBanned: false
    },
    {
        name: "Irion Juiz",
        src: "./img/irion_juiz.png",
        desc: "Pay one Crystal to move one of your train cars to an adjacent hex.",
        isBanned: false
    },
    {
        name: "Candide Malephaise",
        src: "./img/candide_malephaise.png",
        desc: "Build Track on a hex that has at least one competitor train car.",
        isBanned: false
    },
    {
        name: "Lixis Ran Kanda",
        src: "./img/lixis_ran_kanda.png",
        desc: "Choose a hex in your Network that does not contain a Good. Place a Good that matches the terrain from the supply onto that hex.",
        isBanned: false
    },
    {
        name: "Daedalus Khimsey",
        src: "./img/daedalus_khimsey.png",
        desc: "Deliver one Good from your Network.",
        isBanned: false
    },
    {
        name: "Luc Von Gott",
        src: "./img/luc_von_gott.png",
        desc: "Pay one Crystal to Gain Mana.",
        isBanned: false
    },
    {
        name: "Lynssara Yuuno",
        src: "./img/lynssara_yuuno.png",
        desc: "Pay two Crystals to Build Track on any terrain (except Wasteland) anywhere on the map that does not have a Good on it.",
        isBanned: false
    },
    {
        name: "Orman Kaspar",
        src: "./img/orman_kaspar.png",
        desc: "Reclaim three Crystals.",
        isBanned: false
    },
    {
        name: "Malandrax Mecchi",
        src: "./img/malandrax_mecchi.png",
        desc: "Pay one Crystal to choose an In-Network hex. Move a Good from an adjacent hex into that hex.",
        isBanned: false
    },
    {
        name: "Rixia Van Sorrel",
        src: "./img/rixia_van_sorrel.png",
        desc: "Pay one Crystal to choose a hex in your Network with a Good on it. Place a Good of the same color from the supply onto that hex.",
        isBanned: false
    },
    {
        name: "Manch",
        src: "./img/manch.png",
        desc: "Pay one Crystal to Refresh your Captain.",
        isBanned: false
    },
    {
        name: "Sarafina Vanedran",
        src: "./img/sarafina_vanedran.png",
        desc: "When you Move + Activate this turn, ignore inherent mana costs on Spellcars. (You must pay Move + Activate costs.)",
        isBanned: false
    },
    {
        name: "Megana Dalevan",
        src: "./img/megana_dalevan.png",
        desc: "Pay two Crystals to choose a Network-Adjacent Hex. Treat one hex adjacent to it as In-Network for this turn. (Hexes adjacent to it are considered Network-Adjacent.)",
        isBanned: false
    },
    {
        name: "Uumi Nuoc",
        src: "./img/uumi_nuoc.png",
        desc: "Pay one Crystal to copy the effect of a Spellcar from the Market. You must pay any inherent costs for that Spellcar.",
        isBanned: false
    },
    {
        name: "Nilara Torn",
        src: "./img/nilara_torn.png",
        desc: "Pay two Crystals to copy the effect of an opponent's face-up Captain. You do not have to pay any costs to Activate that Captain. That Captain is not Exhausted by the action.",
        isBanned: false
    },
    {
        name: "Wendy Thristle",
        src: "./img/wendy_thristle.png",
        desc: "One Competitor, City, or Wasteland Transfer during this turn is free.",
        isBanned: false
    },
];

let surveyors = [
    {
        name: "Amaranthalos",
        src: "./img/amaranthalos.png",
        desc: "Each other player must slide a Demand Tile off of their folio. They will use it for points and Awards, but it no longer counts towards triggering game end.",
        isBanned: false
    },
    {
        name: "Aella Ivaline Dran'hei",
        src: "./img/aella_ivaline_dranhei.png",
        desc: "Draw three Station Masters from the supply. Choose one and put it into play over Aella. Return the other two for the supply.",
        isBanned: false
    },
    {
        name: "Cin Atalar",
        src: "./img/cin_atalar.png",
        desc: "Choose a hex in your Network. Move all Goods from adjacent hexes into that hex.",
        isBanned: false
    },
    {
        name: "Almir Nol Kanda",
        src: "./img/almir_nol_kanda.png",
        desc: "Choose a hex in your Network that does not contain a Good. Place a Good matching that terrain from the supply onto that hex. Perform this ability up to three times.",
        isBanned: false
    },
    {
        name: "Doc Silnan",
        src: "./img/doc_silnan.png",
        desc: "Copy the ability of another player's Surveyor (face up or face-down).",
        isBanned: false
    },
    {
        name: "Anya Southwind",
        src: "./img/anya_southwind.png",
        desc: "Move one of your train cars to an adjacent hex. Perform this ability up to four times. You may move the same train car multiple times.",
        isBanned: false
    },
    {
        name: "Eirene Lemina Kobor",
        src: "./img/eirene_lemina_kobor.png",
        desc: "Take an extra turn after this one.",
        isBanned: false
    },
    {
        name: "Arianna Tzaar",
        src: "./img/arianna_tzaar.png",
        desc: "Draw three Awards from the supply. You may choose one and put it",
        isBanned: false
    },
    {
        name: "Hikaru Sorayama",
        src: "./img/hikaru_sorayama.png",
        desc: "Reclaim Mana and Gain two Crystals.",
        isBanned: false
    },
    {
        name: "Ariel Malephaise",
        src: "./img/ariel_malephaise.png",
        desc: "Choose a hex in your Network. Remove all train cars (including your own) in that hex and adjacent hexes from the map and return them to their Company's supply.",
        isBanned: false
    },
    {
        name: "Hydeart Burnstein",
        src: "./img/hydeart_burnstein.png",
        desc: "Choose one terrain type (except Wasteland). Build Track on up to four different hexes of that type.",
        isBanned: false
    },
    {
        name: "John Strong Stevenson",
        src: "./img/john_strong_stevenson.png",
        desc: "Build Track on any terrain (except Wasteland). Do this up to three times.",
        isBanned: false
    },
    {
        name: "Ran Ugobia",
        src: "./img/ran_ugobia.png",
        desc: "Refresh your Engineer and Captain. You may immediately use them without exhausting them.",
        isBanned: false
    },
    {
        name: "Lyal Kerigan",
        src: "./img/lyal_kerigan.png",
        desc: "Deliver up to four Goods of a single type from your Network. (This delivery is eligible for Demand Tiles.)",
        isBanned: false
    },
    {
        name: "Telemyr",
        src: "./img/telemyr.png",
        desc: "Permanently swap your Captain, Engineer, or Station Master with another player's. If the Specialist you take was exhausted, Refresh it.",
        isBanned: false
    },
    {
        name: "Marigold",
        src: "./img/marigold.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Tezola Telmorre",
        src: "./img/tezola_telmorre.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Milton Barts",
        src: "./img/milton_barts.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Wardlaw O'Brien",
        src: "./img/wardlaw_obrien.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Mindra Dirac",
        src: "./img/mindra_dirac.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Welsie Acktern",
        src: "./img/welsie_acktern.png",
        desc: "",
        isBanned: false
    },
];

let stationMasters = [
    {
        name: "Casparan Kellovich",
        src: "./img/casparan_kellovich.png",
        desc: "Each time you Build Track on the edge of the map, Reclaim two Mana.",
        isBanned: false
    },
    {
        name: "Antine Frass",
        src: "./img/antine_frass.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Iain Bergham",
        src: "./img/iain_bergham.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Clive Melmont",
        src: "./img/clive_melmont.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Irini Grenhart",
        src: "./img/irini_grenhart.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Dareios Kuel",
        src: "./img/dareios_kuel.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Leto Fulgore",
        src: "./img/leto_fulgore.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Feylana Chorgitz",
        src: "./img/feylana_chorgitz.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Lucca Turlotte",
        src: "./img/lucca_turlotte.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Nicomedes An'sige",
        src: "./img/nicomedes_ansige.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Tegusgan",
        src: "./img/tegusgan.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Peril",
        src: "./img/peril.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Tzart Kargan",
        src: "./img/tzart_kargan.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Quadrana Sekten",
        src: "./img/quadrana_sekten.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Viona Larone",
        src: "./img/viona_larone.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Sanathes Danah",
        src: "./img/sanathes_danah.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Voco Astrum",
        src: "./img/voco_astrum.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Simon La Faucheuse",
        src: "./img/simon_faucheuse.png",
        desc: "",
        isBanned: false
    },
    {
        name: "Wilhelm Barts",
        src: "./img/wilhelm_barts.png",
        desc: "",
        isBanned: false
    },
];