// trapeze Top Bar
const bgImg = document.querySelector('div')
const main = document.querySelector('div')
const TopBar = document.querySelector('div')
const header2h2 = document.querySelector('h2')
const puce = document.querySelectorAll('h3')
const s1 = document.querySelector('.styletb1')
const s2 = document.querySelector('.styletb2')
const s3 = document.querySelector('.styletb3')
const s4 = document.querySelector('.styletb4')
const s5 = document.querySelector('.styletb5')

const container = document.querySelector('.container')
const sidebar = document.querySelector('div')
const sd = document.querySelectorAll('div')
const sb1 = document.querySelector('a')
const sb2 = document.querySelector('a')
const sb3 = document.querySelector('a')
const sb4 = document.querySelector('a')
const sb5 = document.querySelector('a')

const artisteCont = document.querySelector('.content')

// burger
function openNav() {
    document.getElementById("myNav").style.width = "100%";
   }

function closeNav() {
     document.getElementById("myNav").style.width = "0%";
   }

// Sound hover TopBar

s1.addEventListener('mouseover', () => {
    console.log('jazz');
})

s2.addEventListener('mouseover', () => {
    console.log('rock');
})

s3.addEventListener('mouseover', () => {
    console.log('metal');
})

s4.addEventListener('mouseover', () => {
    console.log('Funk / Disco');
})

s5.addEventListener('mouseover', () => {
    console.log('Reggae');
})

let sbS = document.querySelector('.sba1');
sbS.addEventListener('click', (event) => {
    event.preventDefault()
    displayArtiste(0)
})

let sbA = document.querySelector('.sba2');
sbA.addEventListener('click', (event) => {
    event.preventDefault()
    displayArtiste(1)
})

let sbB = document.querySelector('.sba3');
sbB.addEventListener('click', (event) => {
    event.preventDefault()
    displayArtiste(2)
})

let sbC = document.querySelector('.sba4');
sbC.addEventListener('click', (event) => {
    event.preventDefault()
    displayArtiste(3)
})

let sbD = document.querySelector('.sba5');
sbD.addEventListener('click', (event) => {
    event.preventDefault()
    displayArtiste(4)
})

// tableau artistes

const artistes = [
    {
        id: 1,
        firstName: "Mike",
        lastName: "Kerr",
        picture: "photo bassist/mike_kerr.jpg",
        bioPar1: "Mike Kerr (1,87 m - 116 kg), né le 21 décembre 1968 à Toledo dans l'Ohio, surnommé « The Smashing Machine » est un pratiquant américain de combat libre et un ancien champion de lutte. Il fut numéro 1 mondial de 1997 à 2000, avant que sa carrière ne connaisse un lent déclin.",
        bioPar2: "Mike Kerr a été initialement lutteur. Il est champion universitaire de lutte (NCAA) en 1992, puis champion amateur (FILA) de lutte libre en 1994. De 1999 à 2001, il remporte toutes les compétitions poids lourd de grappling organisées par l'Abu Dhabi Combat Club.",
        bioPar3: "Kerr est rentré en combat libre en 1997. Il est notamment célèbre pour avoir remporté le tournoi poids lourds de l'UFC 14 le 13 mars 1997 et le tournoi poids lourds de l'UFC 15 le 17 octobre 1997. Il a également combattu au Pride.", 
        bioPar4: "Numéro 1 mondial du combat libre de 1997 à 2000, craint pour sa lutte et ses coups de genou, il essuie ensuite deux défaites, et disparait du combat libre: dopé et dépendant aux analgésiques, il subit une cure de désintoxication. Son retour, trois ans après s'avèrera désastreux, Kerr étant incapable de retrouver le niveau de son début de carrière, et essuyant de nombreuses défaites, à chaque fois dès le premier round.",
        bioPar5: "En 2003, HBO sort un documentaire intitulé « The Smashing Machine: The Life and Times of Mark Kerr », un film où l'on suit Kerr dans son entrainement et ses combats professionnels, et où il dévoile sa dépendance aux antalgiques. Ken Shamrock, Bas Rutten et Mark Coleman apparaissent également dans le film.",
        
        matosBass1: "Gretsch Electromatic Jr",
        matosBass2: "Fender StarCaster",
        matosBass3: "Fender Deluxe Jaguar Bass sur Hook Line and Sinke",

        matosAmp1: "Ampeg ampli basse SVT",
        matosAmp2: "2 Ampeg amplis guitare GVT",

        matosEffect1: "Electro-Harmonix POG2 Polyphonic Octave Generator",
        matosEffect2: "Boss PS-6 Harmonist Pitch Shifter",
        matosEffect3: "ZVex Mastotron Fuzz Pedal",
        matosEffect4: "Electro-Harmonix Germanium 4 Big Muff Pi",
        matosEffect5: "Boss LS-2 Line Selector/Power Supply",

        playTab: "https://www.songsterr.com/a/wsa/royal-blood-come-one-over-tab-s397048",
        playImgTab: "tablature/come_on_over_tab.png",
        playYt: "https://www.youtube.com/embed/vlSAjp-XaTo/player_api",
    },
    {
        id: 2,
        firstName: "Christopher",
        lastName: "Wolstenholme",
        picture: "photo bassist/Christopher Wolstenholme.jpg",
        bioPar1: "Christopher Tony Wolstenholme, né le 2 décembre 1978 à Rotherham (Yorkshire du Sud), est le bassiste du groupe de rock britannique Muse. Multi-instrumentiste, il joue également occasionnellement sur certaines chansons des parties de guitare, clavier, batterie, percussions ou d'harmonica. En studio comme en concert, il assure les parties de chœurs.",
        bioPar2: "Chris a grandi à Rotherham avant de s'installer dans le Devon, région natale de sa mère, en 1989 à l'âge de onze ans. Vers douze ans, il intègre un groupe de musique, Fixed Penalty, dans son lycée, en tant que batteur. Il sait déjà jouer de la guitare et de la batterie lorsque Matthew Bellamy et Dominic Howard lui proposent le rôle de bassiste afin d'intégrer leur groupe. Cette proposition fut faite à la suite d'une prestation de Chris jouant de la batterie tout en chantant juste, avec son premier groupe ce qui impressionna Matthew Bellamy et Dominic Howard.",
        bioPar3: "Chris accepte la proposition et apprend seul un nouvel instrument : la guitare basse. Le trio a joué quelques petits concerts sous le nom de Rocket Baby Dolls, avant que le groupe ne change de nom et donne ses premiers concerts sous le nom de Muse.",
        bioPar4: "Christopher est le plus jeune des membres du groupe. Il est séparé de sa femme, Kelly avec qui il a eu six enfants : Alfie (né le 7 juillet 1999), Ava-Jo (née le 31 décembre 2001), Frankie (né le 26 août 2003), Ernie (né le 19 octobre 2008), Buster (né le 4 novembre 2010) et Teddi Dorothy (née le 5 janvier 2012). Le groupe déplaça quelques dates de leurs concerts prévus aux États-Unis à l'automne 2010, afin que le bassiste puisse assister à la naissance de son cinquième enfant.",
        bioPar5: "Bien que très attaché à la tranquillité du Devon, bien plus appropriée selon lui pour sa famille, il décide d’emménager à Dublin en avril 2010 avec son ex-épouse Kelly et leurs enfants. Il explique ce choix par le besoin d'être proche d'un aéroport international tout en confirmant qu'il souhaitait éviter Londres. Cependant, il a été confirmé que lui et sa famille avaient emménagé à Londres, après que le groupe ait émis le souhait de composer leur prochain album tout en vivant tous dans la même ville. Il y vit toujours et est désormais en couple avec une certaine Caris Ball depuis 2017, avec qui il entretenait une amitié de longue date. Ils se sont mariés le 1er décembre 2018. Il a eu avec elle son septième enfant, une fille, Mabel Aurora Ball (née le 3 mars 2020). Le 29 octobre 2021, Chris a eu un nouvel enfant avec Caris Ball, Duke Buddy Ball Wolstenholme (Chris a donc 8 enfants dont 6 de son union avec Kelly, tandis que Caris en a 4 dont 2 d'une union précédente).",
    
        matosBass1: "Rickenbacker 4001",
        matosBass2: "Status Chris Wolstenholme Signature Bass",
        matosBass3: "Kitara Doubleneck Bass",
        
        matosAmp1: "Ampeg ampli basse SVT-VR",
        matosAmp2: "",

        matosEffect1: "Way huge Fat Sandwich",
        matosEffect2: "Zvex Fuzz Mastroton",
        matosEffect3: "Zvex Wolky Mammoth",
        matosEffect4: "Akaï Deep Impact",
        matosEffect5: "OCD Distro",

        playTab: "https://www.songsterr.com/a/wsa/muse-hysteria-bass-tab-s11430",
        playImgTab: "tab/hysteria tab.png",
        playYt: "https://www.youtube.com/embed/3dm_5qWWDV8/player_api",
        
    },
    {
        id: 3,
        firstName: "Roger",
        lastName: "Glover",
        picture: "photo bassist/Roger Glover.jpg",
        bioPar1: "Roger David Glover, né le 30 novembre 1945 à Brecon (Royaume-Uni), est un bassiste de rock, connu pour être membre du groupe Deep Purple, en particulier au sein de la célèbre Mark II.",
        bioPar2: "Ses parents tiennent à Londres un pub où jouent fréquemment des groupes de rock. Après 6 ans de piano, il se met à la guitare acoustique puis à la basse.",
        bioPar3: "Son premier groupe s'appelle les Madison qui formeront en 1963, après une fusion avec les Lightnings, un autre groupe du même lycée que celui de Glover, Episode Six.",
        bioPar4: "En mai 1965, le groupe devient professionnel avec l'arrivée de Ian Gillan. Il a vu passer en son sein Mike Underwood (déjà vu avec Ritchie Blackmore).",
        bioPar5: "Le 7 juin 1969, Ian Gillan enregistre avec Deep Purple le single Hallelujah (à l'insu de Nick Simper et Rod Evans) et Roger Glover est convoqué comme musicien de studio. Une semaine après il intègre Deep Purple. Il restera membre du groupe jusqu'en 1973. C'est lui qui aura l'idée du titre du morceau légendaire du groupe : Smoke on the Water, dont l'histoire relate l'incendie du Casino de Montreux. Il est à nouveau membre du groupe lors de son retour en 1984 avec l'album Perfect Strangers, après avoir joué dans le groupe de Ritchie Blackmore, Rainbow, entre 1979 et 1983.",
    
        matosBass1: "Vigier Excess 2",
        matosBass2: "Fender Precision",
        matosBass3: "Vigier Excess Roger Glover Custom Electric Bass Guitar",
        
        matosAmp1: "TC Electronic Blacksmith + TC Electronic RS410",
        matosAmp2: "Marshall Major + Marshall Straight-front 4x10 Cabinet",

        matosEffect1: "TC Electronic NDR-1 Nova Drive",
        matosEffect2: "TC Electronic Dark Distortion",
        matosEffect3: "TC Electronic Hall Of Fame Reverb",
        matosEffect4: "TC Electronic Spectra Drive",
        matosEffect5: "TC Electronic Flashback Delay",
        
        playTab: "https://www.songsterr.com/a/wsa/deep-purple-highway-star-bass-tab-s490",
        playImgTab: "tab/highway star tab.png",
        playYt: "https://www.youtube.com/embed/LBoHGatV5aQ",
    },
    {
        id: 4,
        firstName: "Flea",
        lastName: "",
        picture: "photo bassist/Flea.jpg",
        bioPar1: "Michael Peter Balzary, dit Flea (« puce » en anglais), est un bassiste, pianiste, trompettiste et acteur australo-américain, né le 16 octobre 1962 à Melbourne, en Australie. Il est l'un des membres fondateurs du groupe de rock Red Hot Chili Peppers, avec le chanteur Anthony Kiedis. Son surnom vient à la fois de sa petite taille et de sa façon assez sautillante d'occuper l'espace d'une scène. Le magazine Rolling Stone le classe second meilleur bassiste de tous les temps derrière John Entwistle.",
        bioPar2: "Alors qu’il n’a que quatre ans, ses parents divorcent et sa mère se remarie en 1967 avec un musicien new-yorkais de jazz, Urban Walter Jr, « alcoolique, junkie et très violent » selon les dires de Flea aujourd’hui. Ce jazzman initie Flea à la musique qui va prendre une place de la première importance dans la vie du jeune Michael.",
        bioPar3: "Cette même année, il déménage avec sa mère, son beau-père et sa sœur à New York. La première chose dont il se souvient est la cabine du bateau en provenance de Melbourne qu’il s’est pris sur la figure, lorsqu’il voulait admirer la Statue de la Liberté. C’est à partir de ce moment-là que Michael, sous l’influence de son beau-père, s’initie au jazz et à la soul music. La famille Balzary emménage dans une grande maison où de nombreux musiciens amis de Walter viennent pour des jams sessions. En assistant à ces concerts improvisés des grands noms du jazz chez lui, Michael décide de faire lui aussi de la musique.",
        bioPar4: "Il s'essaie d'abord à la batterie, puis commence la trompette à l'âge de dix ans, sur le conseil d'Urban. Il écoute les maîtres du jazz : Miles Davis, Charlie Mingus, Louis Armstrong, … Flea garde le souvenir de cette période émaillée des bêtises qu’il a pu faire à cette époque, à 9-10 ans : petits cambriolages pour les gangs du Bronx, vols de pièces de voitures, deal de drogues… Un des grands moments de cette période demeure sa rencontre, en 1973, avec son idole Dizzy Gillespie en backstage après un concert, grâce à sa mère : pendant un quart d’heure, le jeune trompettiste a pu témoigner de son amour pour le jazz, la musique et pour Dizzy lui-même qui fut d’ailleurs très touché. Ils trouvèrent même le temps d’échanger quelques notes à la trompette par la suite. En raison des tournées de Walter à travers les États-Unis, la famille Balzary déménage à Los Angeles en 1973. Âgé de 11 ans, il est inscrit à la Bancroft Junior School et il se souvient : « Je suis arrivé d'Australie en 1972 et depuis lors Los Angeles s'est convertie en une cochonnerie, dans tous les sens du terme. »",
        bioPar5: "Dans l'émission Behind The Music sur VH1, il a confessé qu'au début il ne s'intéressait pas au rock et voulait devenir musicien de jazz comme son beau-père mais a changé d'avis après avoir découvert la musique de Kiss, Jimi Hendrix et Led Zeppelin par l'intermédiaire d'Hillel Slovak, futur membre des Red Hot Chili Peppers. Il devient rapidement, grâce à de nombreuses heures de travail consacrées quotidiennement à la trompette l’élève préféré de ses professeurs de musique. Ces derniers le considèrent même comme le meilleur trompettiste qu’ils aient eu depuis Harv Helbert (qui fréquentait l'établissement quelques années plus tôt).",
    
        matosBass1: "Ernie Ball Music Man Stringray Bass",
        matosBass2: "Fleabass",
        matosBass3: "Fender Flea Signature Jazz Bass",
        
        matosAmp1: "Gallien-Krueger 2001RB Amplifier Head / Gallien-Krueger 800RB Bass Amp Head",
        matosAmp2: "Fender Rumble 200 c3 / Mesa Boogie 2x15 Road Ready Bass Cabinet",

        matosEffect1: "Electro-Harmonix Original Q-Tron",
        matosEffect2: "Malekko Heavy Industry B:ASSMASTER",
        matosEffect3: "MXR M133 Micro Amp",
        matosEffect4: "Boss ODB-3 Bass OverDrive",
        matosEffect5: "Electro-Harmonix Bassballs Nano",
        
        playTab: "https://www.songsterr.com/a/wsa/deep-purple-highway-star-bass-tab-s490",
        playImgTab: "tab/highway star tab.png",
        playYt: "https://www.youtube.com/embed/ZqMseqjqwTo",
    },
    {
        id: 5,
        firstName: "",
        lastName: "",
        picture: "",
        bioPar1: "",
        bioPar2: "",
        bioPar3: "",
        bioPar4: "",
        bioPar5: "",
    },
]


const displayArtiste = (num) => {
    const artistesNode = artistes.filter((art, index) => index == num).map(artiste => {
        return createArtiste(artiste)
    });
    console.log(artistesNode);
        artisteCont.innerHTML = ""
    artisteCont.append(...artistesNode)
}

let condition = false

let imgCle = document.querySelector('.cle');
let sideBarMenu = document.querySelector('.sidebar');
imgCle.addEventListener('click', () => {
    if (condition) {
        sideBarMenu.style.display = "none"
        imgCle.style.opacity = "0.5"
        condition = !condition
    } else {
    sideBarMenu.style.display = "block"
    imgCle.style.opacity = "1"
    condition = !condition
    }
})

sideBarMenu.addEventListener('click', () => {
    if (condition) {
        sideBarMenu.style.display = "none"
        imgCle.style.opacity = "0.5"
        condition = !condition
    }
})

const createArtiste = (artiste) => {
    console.log(artiste);
    const divAll = document.createElement('div')
    divAll.classList.add('divAll')

        const div1 = document.createElement('div')
        div1.classList.add('bio')

        const itemh1 = document.createElement('h1')
        itemh1.classList.add('itemh1')
        itemh1.innerText = artiste.firstName + " " + artiste.lastName

        const img = document.createElement('img')
        img.src = artiste.picture
        img.alt = "photo"

        const br1 = document.createElement('br')
        const par1 = document.createElement('p')
        par1.innerText = artiste.bioPar1

        const br2 = document.createElement('br')
        const par2 = document.createElement('p')
        par2.innerText = artiste.bioPar2

        const br3 = document.createElement('br')
        const par3 = document.createElement('p')
        par3.innerText = artiste.bioPar3


        const br4 = document.createElement('br')
        const par4 = document.createElement('p')
        par4.innerText = artiste.bioPar4

        const br5 = document.createElement('br')
        const par5 = document.createElement('p')
        par5.innerText = artiste.bioPar5
        

        itemh1.appendChild(img)
        div1.append(itemh1, par1, br1, par2, br2, par3, br3, par4, br4, par5, br5)


        const div2 = document.createElement('div')
        div2.classList.add('matos')
        
        const item2h1 = document.createElement('h1')
        item2h1.classList.add('itemh1')
        item2h1.innerText = "Le matos"

        const brBass = document.createElement('br')
        const ulBass = document.createElement('ul')
        ulBass.innerText = "Basses :"

        const liBass1 = document.createElement('li')
        liBass1.innerText = " - " + artiste.matosBass1

        const liBass2 = document.createElement('li')
        liBass2.innerText = " - " + artiste.matosBass2

        const liBass3 = document.createElement('li')
        liBass3.innerText = " - " + artiste.matosBass3

        const brAmp = document.createElement('br')
        const ulAmp = document.createElement('ul')
        ulAmp.innerText = "Amplis :"

        const liAmp1 = document.createElement('li')
        liAmp1.innerText = " - " + artiste.matosAmp1
        
        const liAmp2 = document.createElement('li')
        liAmp2.innerText = " - " + artiste.matosAmp2

        const brEft = document.createElement('br')
        const ulEft = document.createElement('ul')
        ulEft.innerText = "Effets :"

        const liEft1 = document.createElement('li')
        liEft1.innerText = " - " + artiste.matosEffect1
        
        const liEft2 = document.createElement('li')
        liEft2.innerText = " - " + artiste.matosEffect2

        const liEft3 = document.createElement('li')
        liEft3.innerText = " - " + artiste.matosEffect3

        const liEft4 = document.createElement('li')
        liEft4.innerText = " - " + artiste.matosEffect4

        const liEft5 = document.createElement('li')
        liEft5.innerText = " - " + artiste.matosEffect5
        const brEftEnd = document.createElement('br')



        ulEft.append(liEft1, liEft2, liEft3, liEft4, liEft5)
        ulAmp.append(liAmp1, liAmp2)
        ulBass.append(liBass1, liBass2, liBass3)
        div2.append(item2h1, brBass, ulBass, brAmp, ulAmp, brEft, ulEft, brEftEnd)
        

        const div3 = document.createElement('div')
        div3.classList.add('play')

        const item3h1 = document.createElement('h1')
        item3h1.innerText = "Let's Play"

        const div31 = document.createElement('div')
        div31.classList.add('play2')

        const tab = document.createElement('div')
        tab.classList.add('tab')

        const tabLink = document.createElement('a')
        tabLink.target = "_blank"
        tabLink.href = artiste.playTab

        const tabImg = document.createElement('img')
        tabImg.src = artiste.playImgTab
        tabImg.style.width = "100%"
        tabImg.style.height = "auto"

        const yt = document.createElement('div')
        yt.classList.add('youtube')

        const youtube = document.createElement('iframe')
        youtube.src = artiste.playYt
        // youtube.style.width = "750px"
        // youtube.style.height = "7000px"

        const coment = document.createElement('textarea')

        yt.append(youtube, coment)

        tabLink.appendChild(tabImg)
        tab.appendChild(tabLink)
        
        div31.append(tab, yt)
        div3.append(item3h1, div31)

        divAll.append(div1, div2, div3)


        return divAll
}

displayArtiste(0)