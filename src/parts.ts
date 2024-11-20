export default [
  {
    "title": "CPU: Central Processing Unit",
    "summary": "Procesori kryesor i sistemit. Përpunon të gjitha udhëzimet e dhëna nga softueri dhe hardueri. Ndikon direkt në performancën e përgjithshme të kompjuterit.",
    "camera": {
      "alpha": 2,
      "beta": 1.4,
      "radius": 2.8,
      "target": [1.4, 2.5, -3.6],
      "position": [0.25, 2.97, -1.09]
    },
    "info": {
      "imageURI": "./images/CPU.jpeg",
      "physicalPosition": "Vendoset në socket-in e procesorit në motherboard, zakonisht afër qendrës së motherboard-it. Mbi të ndodhet ftohësi i tij.",
      "description": "Procesori është zemra e çdo kompjuteri dhe është përgjegjës për kryerjen e të gjitha operacioneve logjike dhe llogaritëse që kërkohen nga softueri dhe hardueri i sistemit. Ai interpreton dhe ekzekuton udhëzimet e dhëna nga programet dhe pajisjet, duke vepruar si dirigjent i të gjitha proceseve brenda kompjuterit. CPU përmban bërthama (cores) që mund të jenë të shumëfishta dhe që punojnë paralelisht për të përpunuar detyrat në mënyrë efikase. Teknologjitë si \"hyper-threading\" dhe \"turbo boost\" mundësojnë përmirësimin e mëtejshëm të performancës duke shfrytëzuar burimet maksimale të procesorit.",
      "interoperability": "CPU komunikon me RAM për të marrë të dhëna dhe instruksione, ndërsa përdor GPU për përpunimin grafik. Ai gjithashtu bashkëpunon me storage për aksesin në të dhënat e ruajtura.",
      "performance": "CPU ndikon drejtpërdrejt në shpejtësinë e përpunimit, numrin e detyrave që mund të trajtohen në të njëjtën kohë dhe reagimin e përgjithshëm të sistemit.",
      "importance": "Pa CPU, një kompjuter nuk mund të përpunojë asnjë detyrë. Performanca e tij përcakton efektivitetin e sistemeve të tjera."
    }
  },
  {
    "title": "GPU: Graphics Processing Unit",
    "summary": "Përgjegjës për përpunimin dhe paraqitjen e grafikave dhe vizualizimeve komplekse. E rëndësishme për lojëra, dizajn grafik dhe aplikacione të AI.",
    "camera": {
      "alpha": 1.56,
      "beta": 2.01,
      "radius": 3.68,
      "target": [0.88, 1.89, -3.69],
      "position": [0.91, 0.31, -0.36]
    },
    "info": {
      "imageURI": "./images/GPU.webp",
      "physicalPosition": "Montuar në slot-in PCIe të motherboard-it, zakonisht pranë CPU-së.",
      "description": "Njësia e Përpunimit Grafik (GPU) është projektuar specifikisht për përpunimin e të dhënave vizuale dhe për paraqitjen e imazheve komplekse, duke luajtur një rol kyç në lojëra, modelim 3D, dhe aplikacione të bazuara në inteligjencë artificiale. GPU funksionon nëpërmjet mijëra bërthamave të vogla të cilat përpunojnë paralelisht informacione të shumta vizuale, duke siguruar një përvojë të lëngshme dhe të detajuar. Me teknologji si ray tracing dhe shpejtësi të larta të kujtesës video (VRAM), GPU është thelbësore për çdo sistem që kërkon përpunim grafik të fuqishëm.",
      "interoperability": "GPU merr të dhëna nga CPU dhe RAM për të përpunuar dhe gjeneruar imazhe. Ajo lidhet me ekranin përmes porteve video si HDMI ose DisplayPort.",
      "performance": "Përshpejton përpunimin grafik dhe redukton ngarkesën e CPU-së, duke rritur performancën në aplikacione grafike intensive.",
      "importance": "Thelbësore për detyra që kërkojnë përpunim grafik ose paralel si lojërat, modelimi 3D dhe trajnimi i modeleve të AI."
    }
  },
  {
    "title": "RAM: Random Access Memory",
    "summary": "Kujtesë afatshkurtër ku ruhen përkohësisht të dhënat që përdoren nga proceset aktive. Ndikon në shpejtësinë dhe aftësinë multitasking të sistemit.",
    "camera": {
      "alpha": 1.86,
      "beta": 1.39,
      "radius": 2.8,
      "target": [1.01, 2.57, -4.34],
      "position": [0.206, 3.069, -1.706]
    },
    "info": {
      "imageURI": "./images/RAM.jpg",
      "physicalPosition": "Vendosur në slot-et DIMM të motherboard-it, afër CPU-së.",
      "description": "RAM është kujtesa afatshkurtër e kompjuterit, ku ruhen përkohësisht të dhënat dhe programet aktive që po përdoren nga CPU. Ajo mundëson akses të shpejtë në të dhëna, duke siguruar që proceset dhe aplikacionet të funksionojnë pa vonesa. Me rritjen e kapacitetit të RAM-it, përdoruesit mund të hapin më shumë aplikacione njëkohësisht dhe të kryejnë operacione komplekse pa ngadalësime. RAM është një komponent jetik për performancën, veçanërisht në kompjuterët e përdorur për detyra intensive si montimi i videove, modelimi 3D dhe lojërat.",
      "interoperability": "RAM bashkëpunon me CPU për të ruajtur dhe ndarë të dhënat e përkohshme, duke përmirësuar shpejtësinë e aksesit në të dhëna.",
      "performance": "Kapaciteti dhe shpejtësia e RAM ndikon në aftësinë e sistemit për të multitaskuar dhe për të përpunuar aplikacione të rënda.",
      "importance": "Pa RAM, CPU do të kishte performancë shumë të ulët pasi do të mbështetej vetëm te storage, i cili është më i ngadaltë."
    }
  },
  {
    "title": "Motherboard",
    "summary": "Komponenti qendror që lidh dhe koordinon të gjithë pjesët e tjera të sistemit. Përfshin porta, konektorë dhe rrugë elektrike për komunikim të ndërsjellë.",
    "camera": {
      "alpha": 1.5345,
      "beta": 1.7108,
      "radius": 4.41,
      "target": [1.318, 2.456, -4.45],
      "position": [1.4767, 1.84, -0.086]
    },
    "info": {
      "imageURI": "./images/Motherboard.webp",
      "physicalPosition": "Struktura kryesore e brendshme e kompjuterit ku lidhen të gjithë komponentët. Vendoset brenda kasës. Kasa duhet të suportojë madhësinë fizike ose siç quhet ndryshe, formën e motherboard-it, si p.sh. ATX, Micro ATX etj.",
      "description": "Plaka amë është qendra nervore e kompjuterit, që lidh dhe koordinon të gjithë komponentët. Ajo përfshin një rrjet të gjerë portash, konektorësh dhe rrugë elektrike që mundësojnë komunikimin midis CPU-së, GPU-së, RAM-it, pajisjeve të ruajtjes dhe furnizimit me energji. Plaka amë siguron që të gjitha komponentët të funksionojnë së bashku në harmoni, duke përmbajtur çipa të rëndësishëm si BIOS ose UEFI për menaxhimin e hardware-it dhe bootimin e sistemit operativ. Cilësia dhe përputhshmëria e pllakës amë kanë një ndikim të drejtpërdrejtë në qëndrueshmërinë dhe performancën e përgjithshme të sistemit.",
      "interoperability": "Është ndërmjetësi i cili lejon CPU, RAM, GPU, dhe storage të komunikojnë dhe të punojnë së bashku në mënyrë efektive.",
      "performance": "Përmirësimet në teknologjinë e motherboard-it mund të rrisin kapacitetin dhe shpejtësinë e sistemit.",
      "importance": "Pa motherboard, komponentët nuk mund të lidhen dhe të funksionojnë si një njësi e vetme."
    }
  },
  {
    "title": "Storage: SSD ose HDD",
    "summary": "Pajisje për ruajtjen afatgjatë të të dhënave dhe skedarëve. SSD ofron shpejtësi më të lartë, ndërsa HDD ka kapacitet më të madh me kosto më të ulët.",
    "camera": {
      "alpha": 1.58,
      "beta": 1.575,
      "radius": 2.7987,
      "target": [1.735, 1.3628, -4.40041],
      "position": [1.70409, 1.349747, -1.60186]
    },
    "info": {
      "imageURI": "./images/nvme-hdd-ssd.avif",
      "physicalPosition": "Montuar në slot-et e magazinimit në kasë, zakonisht pranë PSU-së ose në një ndarje të veçantë. SSD-të NVMe PCIe zakonisht janë të montuara direkt në slota M.2 ose në PCIe në pllakën amë, duke u lidhur përmes portave të dedikuara që mbështesin standardet e shpejtësisë së lartë të transmetimit të të dhënave. Këto slota janë të pozicionuara afër CPU-së për minimizimin e latencës dhe përmirësimin e performancës.",
      "description": "Pajisjet e ruajtjes, si SSD-të (Solid State Drives) dhe HDD-të (Hard Disk Drives), janë përgjegjëse për ruajtjen e të dhënave dhe skedarëve të sistemit. SSD-të përdorin memorie flash dhe ofrojnë shpejtësi jashtëzakonisht të lartë të leximit dhe shkrimit, gjë që përmirëson ndjeshëm kohën e hapjes së programeve dhe bootimit të sistemit operativ. Në anën tjetër, HDD-të ofrojnë kapacitet të lartë me kosto më të ulët, duke qenë një zgjedhje ideale për arkivimin e të dhënave. Për sistemet që kërkojnë balancë midis performancës dhe hapësirës, kombinimi i një SSD për skedarë të sistemit dhe një HDD për ruajtje masive është një opsion optimal.",
      "interoperability": "Storage ndërvepron me CPU dhe RAM për të ruajtur dhe aksesuar të dhënat e kërkuara nga programet.",
      "performance": "SSD-të përmirësojnë ndjeshëm shpejtësinë e nisjes së sistemit dhe aksesit në të dhëna, duke reduktuar kohën e pritjes.",
      "importance": "Ruajtja është jetike për funksionimin e kompjuterit pasi strehon të gjitha të dhënat dhe sistemin operativ."
    }
  },
  {
    "title": "PSU: Power Supply Unit",
    "summary": "Konverton energjinë elektrike nga rrjeti në energji DC që përdorin komponentët. Siguron furnizim të qëndrueshëm dhe të sigurt.",
    "camera": {
      "alpha": 1.55,
      "beta": 1.505,
      "radius": 2.6775,
      "target": [2.007, 0.7828, -3.449],
      "position": [1.9585, 0.690255, -0.77349]
    },
    "info": {
      "imageURI": "./images/PSU.png",
      "physicalPosition": "Montuar në pjesën e poshtme ose të pasme të kasës.",
      "description": "Furnizuesi me energji (PSU) është komponenti që konverton energjinë elektrike nga rrjeti në energji të përshtatshme për komponentët e kompjuterit. Ai siguron furnizim të qëndrueshëm me energji, duke mbrojtur sistemin nga mbingarkesat dhe fluktuacionet elektrike. PSU përmban lidhje të ndryshme për t’u përshtatur me kërkesat energjetike të CPU-së, GPU-së, dhe pajisjeve të tjera periferike. Një PSU me cilësi të lartë dhe fuqi të mjaftueshme është jetik për një funksionim të sigurt dhe të qëndrueshëm të sistemit.",
      "interoperability": "PSU lidh komponentët përmes kabllove për të siguruar një furnizim të qëndrueshëm me energji.",
      "performance": "Një PSU cilësor siguron që komponentët të funksionojnë në mënyrë të qëndrueshme, pa nënfurnizim ose mbifurnizim.",
      "importance": "Një furnizim i qëndrueshëm dhe i sigurt me energji është thelbësor për funksionimin dhe jetëgjatësinë e komponentëve."
    }
  },
  {
    "title": "Cooling System",
    "summary": "Përfshin ventilatorët dhe/ose ftohësit me ujë për të mbajtur temperaturën e sistemit brenda kufijve të sigurt. Parandalon mbinxehjen dhe degradimin e performancës.",
    "camera": {
      "alpha": 1.6058,
      "beta": 2.5732,
      "radius": 3.6935,
      "target": [1.0193, 3.40557, -3.5939],
      "position": [0.94973, 0.29278425, -1.60699]
    },
    "info": {
      "imageURI": "./images/Cooling.jpg",
      "physicalPosition": "Montuar mbi CPU, brenda kasës ose në pjesë të tjera strategjike për ventilim.",
      "description": "Sistemet e ftohjes përfshijnë ventilatorë, ftohës me ujë ose kombinime hibride që mbajnë temperaturën e komponentëve brenda kufijve të sigurt. Duke parandaluar mbinxehjen, këto sisteme rrisin jetëgjatësinë e pjesëve dhe mbajnë performancën në nivele optimale. Për sistemet që përdoren për detyra intensive si lojërat apo renderimet 3D, një sistem i fuqishëm ftohjeje është thelbësor për të ruajtur qëndrueshmërinë dhe për të parandaluar \"thermal throttling\"-un.",
      "interoperability": "Bashkëpunon me sensorët e motherboard-it për të kontrolluar shpejtësinë e ventilatorëve.",
      "performance": "Ndihmon në ruajtjen e performancës optimale duke parandaluar mbinxehjen dhe trokitjen termike.",
      "importance": "Parandalon dëmtimet termike dhe ndikon drejtpërdrejt në jetëgjatësinë e komponentëve."
    }
  },
  {
    "title": "Case",
    "summary": "Një strukturë mbrojtëse që përmban dhe organizon komponentët e brendshëm. Siguron qasje të lehtë për përditësime dhe ventilim të mirë për ftohje.",
    "camera": {
      "alpha": 2.513,
      "beta": 1.047,
      "radius": 7,
      "target": [0.5, 2, -3.5],
      "position": [-4.404, 5.5, 0.06325]
    },
    "info": {
      "imageURI": "./images/Case.webp",
      "physicalPosition": "Struktura e jashtme që përmban të gjithë komponentët e brendshëm.",
      "description": "Kasa është struktura që mban të gjithë komponentët e kompjuterit dhe siguron mbrojtje mekanike dhe elektrike. Ajo ofron hapësira për montimin e pjesëve, ventilim për qarkullimin e ajrit dhe akses të lehtë për mirëmbajtje apo përditësime të sistemit. Një kasë e dizajnuar mirë ndihmon në optimizimin e menaxhimit të kabllove dhe përmirëson rrjedhën e ajrit, duke mbështetur sistemin e ftohjes për performancë më të mirë. Përveç funksionalitetit, ajo luan edhe një rol estetik, duke u përshtatur me preferencat e përdoruesit.",
      "interoperability": "Ndihmon në vendosjen dhe lidhjen e saktë të komponentëve për një qarkullim të mirë të ajrit dhe akses për mirëmbajtje.",
      "performance": "Një dizajn i mirë i kasës përmirëson qarkullimin e ajrit dhe ftohjen, duke ruajtur performancën.",
      "importance": "Thelbësore për mbrojtjen dhe ftohjen e komponentëve, duke ndikuar në qëndrueshmërinë dhe funksionimin afatgjatë."
    }
  }
];
