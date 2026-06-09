let engineers = [
    {
        name: "Fendar Duskshadow",
        src: "./img/fendar_duskshadow.png",
        desc: "Build Track on a hex on the edge of the map.",
        isBanned: false,
        type: "Engineers",
        isExpansion: true
    },
    {
        name: "Adelaide Chivers",
        src: "./img/adelaide_chivers.png",
        desc: "Gain Spellcar.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Eloi Klaus",
        src: "./img/eloi_klaus.png",
        desc: "When you Move + Activate this turn, Activate any number of Spellcars for free and Reclaim one Crystal. (You must pay any inherent costs.)",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Aerlion",
        src: "./img/aerlion.png",
        desc: "Place Wasteland. During this turn, you may Transfer through it for free.",
        isBanned: false,
        aggression: "medium",
        type: "Engineers"
    },
    {
        name: "Garek Tesias",
        src: "./img/garek_tesias.png",
        desc: "Swap the position of two Spellcars on your folio or move one to an empty slot. (You may move a Spellcar into the thrid row of your railyard this way even if you have not filled the second.)",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Arret Draamiyaar",
        src: "./img/arret_draamiyaar.png",
        desc: "Copy the ability of another player's faceup Engineer.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Irion Juiz",
        src: "./img/irion_juiz.png",
        desc: "Pay one Crystal to move one of your train cars to an adjacent hex.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Candide Malephaise",
        src: "./img/candide_malephaise.png",
        desc: "Build Track on a hex that has at least one competitor train car.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Lixis Ran Kanda",
        src: "./img/lixis_ran_kanda.png",
        desc: "Choose a hex in your Network that does not contain a Good. Place a Good that matches the terrain from the supply onto that hex.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Daedalus Khimsey",
        src: "./img/daedalus_khimsey.png",
        desc: "Deliver one Good from your Network.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Luc Von Gott",
        src: "./img/luc_von_gott.png",
        desc: "Pay one Crystal to Gain Mana.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Lynssara Yuuno",
        src: "./img/lynssara_yuuno.png",
        desc: "Pay two Crystals to Build Track on any terrain (except Wasteland) anywhere on the map that does not have a Good on it.",
        isBanned: false,
        type: "Engineers",
        isExpansion: true
    },
    {
        name: "Orman Kaspar",
        src: "./img/orman_kaspar.png",
        desc: "Reclaim three Crystals.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Malandrax Mecchi",
        src: "./img/malandrax_mecchi.png",
        desc: "Pay one Crystal to choose an In-Network hex. Move a Good from an adjacent hex into that hex.",
        isBanned: false,
        aggression: "medium",
        type: "Engineers"
    },
    {
        name: "Rixia Van Sorrel",
        src: "./img/rixia_van_sorrel.png",
        desc: "Pay one Crystal to choose a hex in your Network with a Good on it. Place a Good of the same color from the supply onto that hex.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Manch",
        src: "./img/manch.png",
        desc: "Pay one Crystal to Refresh your Captain.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Sarafina Vanedran",
        src: "./img/sarafina_vanedran.png",
        desc: "When you Move + Activate this turn, ignore inherent mana costs on Spellcars. (You must pay Move + Activate costs.)",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Megana Dalevan",
        src: "./img/megana_dalevan.png",
        desc: "Pay two Crystals to choose a Network-Adjacent Hex. Treat one hex adjacent to it as In-Network for this turn. (Hexes adjacent to it are considered Network-Adjacent.)",
        isBanned: false,
        type: "Engineers",
        isExpansion: true
    },
    {
        name: "Uumi Nuoc",
        src: "./img/uumi_nuoc.png",
        desc: "Pay one Crystal to copy the effect of a Spellcar from the Market. You must pay any inherent costs for that Spellcar.",
        isBanned: false,
        type: "Engineers"
    },
    {
        name: "Nilara Torn",
        src: "./img/nilara_torn.png",
        desc: "Pay two Crystals to copy the effect of an opponent's face-up Captain. You do not have to pay any costs to Activate that Captain. That Captain is not Exhausted by the action.",
        isBanned: false,
        type: "Engineers",
        isExpansion: true
    },
    {
        name: "Wendy Thristle",
        src: "./img/wendy_thristle.png",
        desc: "One Competitor, City, or Wasteland Transfer during this turn is free.",
        isBanned: false,
        type: "Engineers"
    },
];

let surveyors = [
    {
        name: "Amaranthalos",
        src: "./img/amaranthalos.png",
        desc: "Each other player must slide a Demand Tile off of their folio. They will use it for points and Awards, but it no longer counts towards triggering game end.",
        isBanned: false,
        type: "Surveyors",
        isExpansion: true
    },
    // {
    //     name: "Aella Ivaline Dran'hei",
    //     src: "./img/aella_ivaline_dranhei.png",
    //     desc: "Draw three Station Masters from the supply. Choose one and put it into play over Aella. Return the other two for the supply.",
    //     isBanned: false,
    //     type: "Surveyors"
    // },
    {
        name: "Cin Atalar",
        src: "./img/cin_atalar.png",
        desc: "Choose a hex in your Network. Move all Goods from adjacent hexes into that hex.",
        isBanned: false,
        aggression: "high",
        type: "Surveyors"
    },
    {
        name: "Almir Nol Kanda",
        src: "./img/almir_nol_kanda.png",
        desc: "Choose a hex in your Network that does not contain a Good. Place a Good matching that terrain from the supply onto that hex. Perform this ability up to three times.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Doc Silnan",
        src: "./img/doc_silnan.png",
        desc: "Copy the ability of another player's Surveyor (face up or face-down).",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Anya Southwind",
        src: "./img/anya_southwind.png",
        desc: "Move one of your train cars to an adjacent hex. Perform this ability up to four times. You may move the same train car multiple times.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Eirene Lemina Kobor",
        src: "./img/eirene_lemina_kobor.png",
        desc: "Take an extra turn after this one.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Arianna Tzaar",
        src: "./img/arianna_tzaar.png",
        desc: "Draw three Awards from the supply. You may choose one and put it into play. (Return the other two to the supply.) The chosen Awaard is scored the same as the two drawn at the beggining of the game.",
        isBanned: false,
        type: "Surveyors",
        isExpansion: true
    },
    {
        name: "Hikaru Sorayama",
        src: "./img/hikaru_sorayama.png",
        desc: "Reclaim Mana and Gain two Crystals.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Ariel Malephaise",
        src: "./img/ariel_malephaise.png",
        desc: "Choose a hex in your Network. Remove all train cars (including your own) in that hex and adjacent hexes from the map and return them to their Company's supply.",
        isBanned: false,
        aggression: "high",
        type: "Surveyors"
    },
    {
        name: "Hydeart Burnstein",
        src: "./img/hydeart_burnstein.png",
        desc: "Choose one terrain type (except Wasteland). Build Track on up to four different hexes of that type.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "John Strong Stevenson",
        src: "./img/john_strong_stevenson.png",
        desc: "Build Track on any terrain (except Wasteland). Do this up to three times.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Ran Ugobia",
        src: "./img/ran_ugobia.png",
        desc: "Refresh your Engineer and Captain. You may immediately use them without exhausting them.",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Lyal Kerigan",
        src: "./img/lyal_kerigan.png",
        desc: "Deliver up to four Goods of a single type from your Network. (This delivery is eligible for Demand Tiles.)",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Telemyr",
        src: "./img/telemyr.png",
        desc: "Permanently swap your Captain, Engineer, or Station Master with another player's. If the Specialist you take was exhausted, Refresh it.",
        isBanned: false,
        aggression: "medium",
        type: "Surveyors"
    },
    {
        name: "Marigold",
        src: "./img/marigold.png",
        desc: "Gain Spellcar. Refresh Mana or Gain Mana. Gain Specialist or Refresh Specialists.",
        isBanned: false,
        type: "Surveyors",
        isExpansion: true
    },
    {
        name: "Tezola Telmorre",
        src: "./img/tezola_telmorre.png",
        desc: "When it is your turn to make a final delivery at the end of the game, deliver three types of Goods instead of one. You are eligible for a Demand Tile for each of these deliveries.",
        isBanned: false,
        type: "Surveyors",
        isExpansion: true
    },
    {
        name: "Milton Barts",
        src: "./img/milton_barts.png",
        desc: "Gain Spellcar twice, then Activate them both for free. (You must pay any inherent costs.)",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Wardlaw O'Brien",
        src: "./img/wardlaw_obrien.png",
        desc: "Swap the position of any two Demand Tiles on the map. Do this up to two times. To claim one of these swapped Demand Tiles, ignore the City color and Deliver Goods that match the tile’s color.",
        isBanned: false,
        aggression: "medium",
        type: "Surveyors"
    },
    {
        name: "Mindra Dirac",
        src: "./img/mindra_dirac.png",
        desc: "Choose a hex in your Network. Build Track on each adjacent hex (if able).",
        isBanned: false,
        type: "Surveyors"
    },
    {
        name: "Welsie Acktern",
        src: "./img/welsie_acktern.png",
        desc: "Build Track on any terrain (except Wasteland) anywhere on the map. Then Build Track on any Home Terrain adjacent to that hex.",
        isBanned: false,
        type: "Surveyors"
    },
];

let stationMasters = [
    {
        name: "Casparan Kellovich",
        src: "./img/casparan_kellovich.png",
        desc: "Each time you Build Track on the edge of the map, Reclaim two Mana.",
        isBanned: false,
        type: "Station Masters",
        isExpansion: true
    },
    {
        name: "Antine Frass",
        src: "./img/antine_frass.png",
        desc: "Whenever you Build Track, City Transfers are free.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Iain Bergham",
        src: "./img/iain_bergham.png",
        desc: "Each time an opponent Builds Track on a hex where you have a train car, Reclaim 2 Mana.",
        isBanned: false,
        type: "Station Masters",
        isExpansion: true
    },
    {
        name: "Clive Melmont",
        src: "./img/clive_melmont.png",
        desc: "uring the Activate Specialists phase of your turn, Reclaim 1 Mana.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Irini Grenhart",
        src: "./img/irini_grenhart.png",
        desc: "Whenever you Build Track, Competitor Transfers cost only 1 Mana.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Dareios Kuel",
        src: "./img/dareios_kuel.png",
        desc: "During the Activate Specialists phase of your turn, you may Return two In-Network Goods to the supply then Gain Mana.",
        isBanned: false,
        aggression: "high",
        type: "Station Masters"
    },
    {
        name: "Leto Fulgore",
        src: "./img/leto_fulgore.png",
        desc: "When you Deliver at the End of the Line, you may Gain Mana.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Feylana Chorgitz",
        src: "./img/feylana_chorgitz.png",
        desc: "During the Activate Specialists phase of your turn, you may pay 1 Mana to return an In- Network Good to the supply, then Refresh your Engineer.",
        isBanned: false,
        aggression: "medium",
        type: "Station Masters"
    },
    {
        name: "Levine Casterlie",
        src: "./img/levine_casterlie.png",
        desc: "When you Move + Activate, your second Spellcar Activation is free, and your third Spellcar Activation costs 1 Mana. (You must pay any inherent costs.)",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Hai of Noirwood",
        src: "./img/hai_noirwood.png",
        desc: "You may claim Demand tiles worth 1 more than you qualify for when you Deliver at the End of the Line.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Lucca Turlotte",
        src: "./img/lucca_turlotte.png",
        desc: "During the Activate Specialists phase of your turn, you may pay 2 Mana to return two In- Network Good to the supply, then Refresh your Captain.",
        isBanned: false,
        aggression: "high",
        type: "Station Masters"
    },
    {
        name: "Nicomedes An'sige",
        src: "./img/nicomedes_ansige.png",
        desc: "When you Administrate, you may Deliver one Good.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Tegusgan",
        src: "./img/tegusgan.png",
        desc: "During the Activate Specialists phase of your turn, you may pay 2 Mana to return two In-Network Good to the supply then Build Track on any terrain (except Wasteland).",
        isBanned: false,
        aggression: "high",
        type: "Station Masters"
    },
    {
        name: "Peril",
        src: "./img/peril.png",
        desc: "Instead of Activating after you Move your Conductor, you may Activate then Move. Moving to the End of Line this way moves you back to Start without delivering.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Tzart Kargan",
        src: "./img/tzart_kargan.png",
        desc: "When you Administrate, you may Build Track in your Home Terrain.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Quadrana Sekten",
        src: "./img/quadrana_sekten.png",
        desc: "Whenever you Deliver, if you can Deliver enough Goods to fulfill more than one demand, you may claim more than one Demand Tile.",
        isBanned: false,
        type: "Station Masters",
        isExpansion: true
    },
    {
        name: "Viona Larone",
        src: "./img/viona_larone.png",
        desc: "When you Move + Activate, you may pay 1 Mana to Activate a single Spellcar twice. You may not Activate any other Spellcars this turn. (You must pay any inherent costs.)",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Sanathes Danah",
        src: "./img/sanathes_danah.png",
        desc: "Whenever you Build Track, Wasteland Transfers cost only 1 Mana.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Voco Astrum",
        src: "./img/voco_astrum.png",
        desc: "If you Deliver at the End of the Line without taking a Demand Tile, add two Goods from the supply to your folio. These Goods must match the color of a City connected to your Network.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Simon La Faucheuse",
        src: "./img/simon_faucheuse.png",
        desc: "Moving your Conductor one or two spaces is free. Moving three spaces costs2 Mana. Moving four spaces costs 4 Mana.",
        isBanned: false,
        type: "Station Masters"
    },
    {
        name: "Wilhelm Barts",
        src: "./img/wilhelm_barts.png",
        desc: "When you Administrate, Gain Spellcar.",
        isBanned: false,
        type: "Station Masters",
        isExpansion: true
    },
];