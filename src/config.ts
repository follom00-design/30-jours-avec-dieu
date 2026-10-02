/**
 * Configuration principale de la Landing Page
 * Vous pouvez changer ici le prix ou l'URL de paiement externe en une seule ligne.
 */

export const PRODUCT_NAME = "30 JOURS AVEC DIEU";
export const PRODUCT_SUBTITLE = "Un parcours simple pour retrouver une routine de prière.";
export const PRODUCT_PRICE = "5 000 FCFA";
export const PURCHASE_URL: string = "https://kenstreaming.mychariow.shop/prd_pgtealci";

export const PRODUCT_BADGES = [
  "30 jours guidés",
  "Lecture sur téléphone",
  "Accès immédiat",
];

export const DAILY_PARTS = [
  {
    icon: "📖",
    title: "Parole du jour",
    description: "Une référence biblique sélectionnée pour ancrer le thème quotidien.",
    detail: "Un verset court, percutant et facile à méditer dans la journée.",
  },
  {
    icon: "💭",
    title: "Réflexion",
    description: "Une courte méditation accessible, concrète et enracinée dans le quotidien.",
    detail: "Pas de grand discours théologique complexe : des mots simples qui touchent le cœur.",
  },
  {
    icon: "🙏",
    title: "Prière guidée",
    description: "Une prière qui t'aide à mettre des mots sur ce que tu ressens.",
    detail: "Idéal pour les matins ou les soirs où tu ne sais pas par quoi commencer.",
  },
  {
    icon: "✍️",
    title: "Temps personnel",
    description: "Un espace pour noter ta propre réflexion et ce que Dieu dépose en toi.",
    detail: "Une question pour sonder ton cœur en toute sincérité.",
  },
  {
    icon: "🌱",
    title: "Petit pas",
    description: "Une action simple et réaliste à mettre en pratique avant la fin du jour.",
    detail: "Pour que la prière s'incarne concrètement dans tes relations et tes choix.",
  },
];

export const BONUSES = [
  {
    num: "BONUS 01",
    title: "10 prières du matin",
    description: "Des prières courtes pour démarrer la journée dans la paix, la confiance et la sérénité avant de regarder ton téléphone.",
    tag: "Inclus",
  },
  {
    num: "BONUS 02",
    title: "10 prières du soir",
    description: "Pour déposer tes fardeaux, calmer tes pensées encombrées et t'endormir sous le regard bienveillant de Dieu.",
    tag: "Inclus",
  },
  {
    num: "BONUS 03",
    title: "Prières pour les moments difficiles",
    description: "Face au doute, au stress, à la solitude ou à l'épreuve : des mots fidèles pour continuer d'espérer.",
    tag: "Inclus",
  },
  {
    num: "BONUS 04",
    title: "Calendrier de suivi 30 jours",
    description: "Un calendrier visuel pour cocher chaque journée franchie et visualiser ton engagement avec fierté.",
    tag: "Inclus",
  },
  {
    num: "BONUS 05",
    title: "Version optimisée pour téléphone",
    description: "Mise en page ultra-fluide pour une lecture confortable dans le métro, au lit ou pendant ta pause café.",
    tag: "Inclus",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que 30 Jours avec Dieu ?",
    answer: "C'est un WebBook chrétien interactif et épuré spécialement pensé pour t'accompagner pendant un mois entier. Chaque jour, tu reçois un verset biblique, une réflexion claire, une prière guidée, une question d'introspection et un petit pas concret pour retrouver une routine vivante.",
  },
  {
    question: "Comment vais-je accéder au WebBook ?",
    answer: "Dès que ton paiement de 5 000 FCFA est validé, tu reçois instantanément ton lien d'accès personnel par e-mail et sur la page de confirmation. Tu peux l'ouvrir en un clic sans installer d'application lourde.",
  },
  {
    question: "Puis-je le lire sur mon téléphone ?",
    answer: "Oui, absolument ! Le WebBook a été conçu en priorité pour les smartphones (iPhone et Android). La lecture est fluide, la taille de police est agréable et tu peux l'ajouter directement à l'écran d'accueil de ton smartphone comme une application.",
  },
  {
    question: "Est-ce un PDF ?",
    answer: "C'est encore plus confortable qu'un simple PDF : c'est un WebBook numérique moderne avec une interface soignée, responsive et lisible sur tout écran. Tu bénéficies également d'une version téléchargeable pour une lecture hors-ligne.",
  },
  {
    question: "Puis-je l'imprimer ?",
    answer: "Oui, une version document propre et imprimable est comprise si tu préfères le papier pour surligner au feutre ou ranger les fiches dans ton classeur de prière.",
  },
  {
    question: "Quand vais-je recevoir mon accès ?",
    answer: "Immédiatement après le paiement. Le processus est 100% automatisé, 24h/24 et 7j/7.",
  },
  {
    question: "Combien coûte le parcours ?",
    answer: "Le tarif complet est de 5 000 FCFA (paiement unique, pas d'abonnement récurrent). Il comprend l'accès complet aux 30 jours et aux 5 bonus exclusifs.",
  },
  {
    question: "Puis-je recommencer le parcours ?",
    answer: "Oui, ton accès reste disponible. Tu pourras refaire les 30 jours à ton propre rythme, l'année prochaine ou quand tu ressentiras le besoin de te recentrer.",
  },
];

export const PREVIEW_DAYS = [
  {
    id: "jour-1",
    dayNumber: "Jour 01",
    theme: "Revenir au calme",
    verse: "« Arrêtez, et sachez que je suis Dieu. » — Psaume 46:11",
    reflection: "Souvent, nous voulons prier mais notre esprit est déjà accaparé par mille urgences. Aujourd'hui, il ne s'agit pas de faire une grande prière de 30 minutes, mais simplement d'apprendre à s'asseoir et à respirer en Sa présence.",
    prayer: "« Seigneur, je dépose devant toi le bruit de ma journée et l'agitation de mes pensées. Apprends-moi à faire silence pour t'écouter. Je suis là, tout simplement. Amen. »",
    action: "Prends 2 minutes de silence total avant de toucher à ton téléphone ce matin.",
  },
  {
    id: "jour-7",
    dayNumber: "Jour 07",
    theme: "Trouver la paix dans l'inquiétude",
    verse: "« Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu. » — Philippiens 4:6",
    reflection: "L'inquiétude ne change rien au lendemain, elle ne fait que voler la force d'aujourd'hui. Déposer ses fardeaux est un acte de confiance qui s'apprend un matin après l'autre.",
    prayer: "« Père céleste, voici ce qui pèse sur mes épaules aujourd'hui. Je choisis de ne plus porter ce poids seul(e). Je te confie mes craintes et je reçois ta paix. Amen. »",
    action: "Écris sur un papier la chose qui te préoccupe le plus, puis déchire-le en priant.",
  },
  {
    id: "jour-14",
    dayNumber: "Jour 14",
    theme: "La gratitude qui transforme le regard",
    verse: "« Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ. » — 1 Thessaloniciens 5:18",
    reflection: "Quand nous remercions Dieu pour les petites grâces ordinaires — le souffle de vie, un toit, un encouragement —, notre regard cesse de fixer ce qui manque.",
    prayer: "« Merci mon Dieu pour les bénédictions invisibles que j'oublie si souvent de remarquer. Que mon cœur reste attentif à ta bonté quotidienne. Amen. »",
    action: "Envoie un message de bénédiction ou de remerciement sincère à un proche aujourd'hui.",
  },
];
