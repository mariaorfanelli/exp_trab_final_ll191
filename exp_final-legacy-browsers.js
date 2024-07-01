/****************** 
 * Exp_Final *
 ******************/


// store info about the experiment session:
let expName = 'exp_final';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(inicio_testeRoutineBegin());
flowScheduler.add(inicio_testeRoutineEachFrame());
flowScheduler.add(inicio_testeRoutineEnd());
flowScheduler.add(adult_englishRoutineBegin());
flowScheduler.add(adult_englishRoutineEachFrame());
flowScheduler.add(adult_englishRoutineEnd());
flowScheduler.add(chi_frenchRoutineBegin());
flowScheduler.add(chi_frenchRoutineEachFrame());
flowScheduler.add(chi_frenchRoutineEnd());
flowScheduler.add(adult_germanRoutineBegin());
flowScheduler.add(adult_germanRoutineEachFrame());
flowScheduler.add(adult_germanRoutineEnd());
flowScheduler.add(chi_brazilianRoutineBegin());
flowScheduler.add(chi_brazilianRoutineEachFrame());
flowScheduler.add(chi_brazilianRoutineEnd());
flowScheduler.add(adult_frenchRoutineBegin());
flowScheduler.add(adult_frenchRoutineEachFrame());
flowScheduler.add(adult_frenchRoutineEnd());
flowScheduler.add(chi_englishRoutineBegin());
flowScheduler.add(chi_englishRoutineEachFrame());
flowScheduler.add(chi_englishRoutineEnd());
flowScheduler.add(adult_brazilian_MRoutineBegin());
flowScheduler.add(adult_brazilian_MRoutineEachFrame());
flowScheduler.add(adult_brazilian_MRoutineEnd());
flowScheduler.add(chi_germanRoutineBegin());
flowScheduler.add(chi_germanRoutineEachFrame());
flowScheduler.add(chi_germanRoutineEnd());
flowScheduler.add(adult_brazilian_FRoutineBegin());
flowScheduler.add(adult_brazilian_FRoutineEachFrame());
flowScheduler.add(adult_brazilian_FRoutineEnd());
flowScheduler.add(obrigadaRoutineBegin());
flowScheduler.add(obrigadaRoutineEachFrame());
flowScheduler.add(obrigadaRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'TestingScript2_purr.mp3', 'path': 'TestingScript2_purr.mp3'},
    {'name': 'ADULT_AMERICANENGLISH_WAV_CUT_purr.mp3', 'path': 'ADULT_AMERICANENGLISH_WAV_CUT_purr.mp3'},
    {'name': 'CHI2_FRENCH_4_03_WAV_CUT_purr.mp3', 'path': 'CHI2_FRENCH_4_03_WAV_CUT_purr.mp3'},
    {'name': 'ADULT_GERMAN_WAV_CUT_purr.mp3', 'path': 'ADULT_GERMAN_WAV_CUT_purr.mp3'},
    {'name': 'CHI4_BRAZILIAN_WAV_CUT_purr.mp3', 'path': 'CHI4_BRAZILIAN_WAV_CUT_purr.mp3'},
    {'name': 'ADULT_FRENCH_F_purr.mp3', 'path': 'ADULT_FRENCH_F_purr.mp3'},
    {'name': 'CHI3_AMERICANENGLISH_4_09_WAV_CUT_purr.mp3', 'path': 'CHI3_AMERICANENGLISH_4_09_WAV_CUT_purr.mp3'},
    {'name': 'ADULT_BRAZILIAN_M_purr.mp3', 'path': 'ADULT_BRAZILIAN_M_purr.mp3'},
    {'name': 'CHI1_GERMAN_4_03_WAV_CUT_purr.mp3', 'path': 'CHI1_GERMAN_4_03_WAV_CUT_purr.mp3'},
    {'name': 'ADULT_BRAZILIAN_F_purr.mp3', 'path': 'ADULT_BRAZILIAN_F_purr.mp3'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var inicio_testeClock;
var instruções_iniciais;
var treinar;
var pergunta_teste;
var teste_papagaio;
var slider_teste;
var adult_englishClock;
var instruções_iniciais_2;
var pergunta_adult_english;
var adult_english_audio;
var slider_adult_english;
var chi_frenchClock;
var instruções_iniciais_3;
var pergunta_chi_french;
var chi_french_audio;
var slider_chi_french;
var adult_germanClock;
var instruções_adult_german;
var pergunta_adult_german;
var adult_german_audio;
var slider_adult_german;
var chi_brazilianClock;
var instruções_chi_brazilian;
var pergunta_chi_brazilian;
var chi_brazilian_audio;
var slider_chi_brazilian;
var adult_frenchClock;
var instruções_adult_french;
var pergunta_adult_french;
var adult_french_audio;
var slider_adult_french;
var chi_englishClock;
var instruções_chi_english;
var pergunta_chi_english;
var chi_english_audio;
var slider_chi_english;
var adult_brazilian_MClock;
var instruções_adult_brazilian_M;
var pergunta_adult_brazilian_M;
var adult_brazilian_M_audio;
var slider_adult_brazilian_M;
var chi_germanClock;
var instruções_chi_german;
var pergunta_chi_german;
var chi_german_audio;
var slider_chi_german;
var adult_brazilian_FClock;
var instruções_adult_brazilian_F;
var pergunta_adult_brazilian_F;
var adult_brazilian_F_audio;
var slider_adult_brazilian_F;
var obrigadaClock;
var Obrigada;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "inicio_teste"
  inicio_testeClock = new util.Clock();
  instruções_iniciais = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_iniciais',
    text: 'Você ouvirá uma série de áudios e para cada um deverá dizer o quanto eles soam como português do Brasil.\n\nA escala é de 1 a 5. Sendo 1 para áudios que não soam nada como o português do Brasil e 5 para áudios que soam como português do Brasil.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  treinar = new visual.TextStim({
    win: psychoJS.window,
    name: 'treinar',
    text: 'Vamos treinar primeiro.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pergunta_teste = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_teste',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  teste_papagaio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  teste_papagaio.setVolume(1.0);
  slider_teste = new visual.Slider({
    win: psychoJS.window, name: 'slider_teste',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  // Initialize components for Routine "adult_english"
  adult_englishClock = new util.Clock();
  instruções_iniciais_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_iniciais_2',
    text: 'OK, agora vamos começar os testes.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_adult_english = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_adult_english',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  adult_english_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  adult_english_audio.setVolume(1.0);
  slider_adult_english = new visual.Slider({
    win: psychoJS.window, name: 'slider_adult_english',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "chi_french"
  chi_frenchClock = new util.Clock();
  instruções_iniciais_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_iniciais_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_chi_french = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_chi_french',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  chi_french_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  chi_french_audio.setVolume(1.0);
  slider_chi_french = new visual.Slider({
    win: psychoJS.window, name: 'slider_chi_french',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "adult_german"
  adult_germanClock = new util.Clock();
  instruções_adult_german = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_adult_german',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_adult_german = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_adult_german',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  adult_german_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  adult_german_audio.setVolume(1.0);
  slider_adult_german = new visual.Slider({
    win: psychoJS.window, name: 'slider_adult_german',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "chi_brazilian"
  chi_brazilianClock = new util.Clock();
  instruções_chi_brazilian = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_chi_brazilian',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_chi_brazilian = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_chi_brazilian',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  chi_brazilian_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  chi_brazilian_audio.setVolume(1.0);
  slider_chi_brazilian = new visual.Slider({
    win: psychoJS.window, name: 'slider_chi_brazilian',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "adult_french"
  adult_frenchClock = new util.Clock();
  instruções_adult_french = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_adult_french',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_adult_french = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_adult_french',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  adult_french_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  adult_french_audio.setVolume(1.0);
  slider_adult_french = new visual.Slider({
    win: psychoJS.window, name: 'slider_adult_french',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "chi_english"
  chi_englishClock = new util.Clock();
  instruções_chi_english = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_chi_english',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_chi_english = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_chi_english',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  chi_english_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  chi_english_audio.setVolume(1.0);
  slider_chi_english = new visual.Slider({
    win: psychoJS.window, name: 'slider_chi_english',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "adult_brazilian_M"
  adult_brazilian_MClock = new util.Clock();
  instruções_adult_brazilian_M = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_adult_brazilian_M',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_adult_brazilian_M = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_adult_brazilian_M',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  adult_brazilian_M_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  adult_brazilian_M_audio.setVolume(1.0);
  slider_adult_brazilian_M = new visual.Slider({
    win: psychoJS.window, name: 'slider_adult_brazilian_M',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "chi_german"
  chi_germanClock = new util.Clock();
  instruções_chi_german = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_chi_german',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_chi_german = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_chi_german',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  chi_german_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  chi_german_audio.setVolume(1.0);
  slider_chi_german = new visual.Slider({
    win: psychoJS.window, name: 'slider_chi_german',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "adult_brazilian_F"
  adult_brazilian_FClock = new util.Clock();
  instruções_adult_brazilian_F = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruções_adult_brazilian_F',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pergunta_adult_brazilian_F = new visual.TextStim({
    win: psychoJS.window,
    name: 'pergunta_adult_brazilian_F',
    text: 'De 1 a 5, quanto o áudio que você acabou de ouvir soa como Português do Brasil? (Sendo 1 nada parecido e 5 muito parecido).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  adult_brazilian_F_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  adult_brazilian_F_audio.setVolume(1.0);
  slider_adult_brazilian_F = new visual.Slider({
    win: psychoJS.window, name: 'slider_adult_brazilian_F',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [],
    granularity: 1, style: ["RADIO", "LABELS_45"],
    color: new util.Color('Red'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "obrigada"
  obrigadaClock = new util.Clock();
  Obrigada = new visual.TextStim({
    win: psychoJS.window,
    name: 'Obrigada',
    text: 'Obrigada pela sua participação! \n\nPor favor, me envie o arquivo csv que será baixado no seu computador.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var inicio_testeComponents;
function inicio_testeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inicio_teste' ---
    t = 0;
    inicio_testeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inicio_teste.started', globalClock.getTime());
    teste_papagaio.setValue('TestingScript2_purr.mp3');
    teste_papagaio.secs=5;
    teste_papagaio.setVolume(1.0);
    slider_teste.reset()
    // keep track of which components have finished
    inicio_testeComponents = [];
    inicio_testeComponents.push(instruções_iniciais);
    inicio_testeComponents.push(treinar);
    inicio_testeComponents.push(pergunta_teste);
    inicio_testeComponents.push(teste_papagaio);
    inicio_testeComponents.push(slider_teste);
    
    inicio_testeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function inicio_testeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inicio_teste' ---
    // get current time
    t = inicio_testeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_iniciais* updates
    if (t >= 0.0 && instruções_iniciais.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_iniciais.tStart = t;  // (not accounting for frame time here)
      instruções_iniciais.frameNStart = frameN;  // exact frame index
      
      instruções_iniciais.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_iniciais.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_iniciais.setAutoDraw(false);
    }
    
    
    // *treinar* updates
    if (t >= 25.5 && treinar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treinar.tStart = t;  // (not accounting for frame time here)
      treinar.frameNStart = frameN;  // exact frame index
      
      treinar.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (treinar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      treinar.setAutoDraw(false);
    }
    
    
    // *pergunta_teste* updates
    if (t >= 40 && pergunta_teste.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_teste.tStart = t;  // (not accounting for frame time here)
      pergunta_teste.frameNStart = frameN;  // exact frame index
      
      pergunta_teste.setAutoDraw(true);
    }
    
    frameRemains = 40 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_teste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_teste.setAutoDraw(false);
    }
    
    // start/stop teste_papagaio
    if (t >= 36 && teste_papagaio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teste_papagaio.tStart = t;  // (not accounting for frame time here)
      teste_papagaio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ teste_papagaio.play(); });  // screen flip
      teste_papagaio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 36 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (teste_papagaio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= teste_papagaio.tStart + 0.5) {
        teste_papagaio.stop();  // stop the sound (if longer than duration)
        teste_papagaio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_teste* updates
    if (t >= 40 && slider_teste.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_teste.tStart = t;  // (not accounting for frame time here)
      slider_teste.frameNStart = frameN;  // exact frame index
      
      slider_teste.setAutoDraw(true);
    }
    
    
    // Check slider_teste for response to end Routine
    if (slider_teste.getRating() !== undefined && slider_teste.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    inicio_testeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inicio_testeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inicio_teste' ---
    inicio_testeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('inicio_teste.stopped', globalClock.getTime());
    teste_papagaio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_teste.response', slider_teste.getRating());
    psychoJS.experiment.addData('slider_teste.rt', slider_teste.getRT());
    // the Routine "inicio_teste" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adult_englishComponents;
function adult_englishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adult_english' ---
    t = 0;
    adult_englishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('adult_english.started', globalClock.getTime());
    adult_english_audio.setValue('ADULT_AMERICANENGLISH_WAV_CUT_purr.mp3');
    adult_english_audio.secs=20;
    adult_english_audio.setVolume(1.0);
    slider_adult_english.reset()
    // keep track of which components have finished
    adult_englishComponents = [];
    adult_englishComponents.push(instruções_iniciais_2);
    adult_englishComponents.push(pergunta_adult_english);
    adult_englishComponents.push(adult_english_audio);
    adult_englishComponents.push(slider_adult_english);
    
    adult_englishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adult_englishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adult_english' ---
    // get current time
    t = adult_englishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_iniciais_2* updates
    if (t >= 0.0 && instruções_iniciais_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_iniciais_2.tStart = t;  // (not accounting for frame time here)
      instruções_iniciais_2.frameNStart = frameN;  // exact frame index
      
      instruções_iniciais_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_iniciais_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_iniciais_2.setAutoDraw(false);
    }
    
    
    // *pergunta_adult_english* updates
    if (t >= 35.5 && pergunta_adult_english.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_adult_english.tStart = t;  // (not accounting for frame time here)
      pergunta_adult_english.frameNStart = frameN;  // exact frame index
      
      pergunta_adult_english.setAutoDraw(true);
    }
    
    frameRemains = 35.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_adult_english.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_adult_english.setAutoDraw(false);
    }
    
    // start/stop adult_english_audio
    if (t >= 15.5 && adult_english_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adult_english_audio.tStart = t;  // (not accounting for frame time here)
      adult_english_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ adult_english_audio.play(); });  // screen flip
      adult_english_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 15.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (adult_english_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= adult_english_audio.tStart + 0.5) {
        adult_english_audio.stop();  // stop the sound (if longer than duration)
        adult_english_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_adult_english* updates
    if (t >= 35.5 && slider_adult_english.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_adult_english.tStart = t;  // (not accounting for frame time here)
      slider_adult_english.frameNStart = frameN;  // exact frame index
      
      slider_adult_english.setAutoDraw(true);
    }
    
    
    // Check slider_adult_english for response to end Routine
    if (slider_adult_english.getRating() !== undefined && slider_adult_english.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adult_englishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adult_englishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adult_english' ---
    adult_englishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adult_english.stopped', globalClock.getTime());
    adult_english_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_adult_english.response', slider_adult_english.getRating());
    psychoJS.experiment.addData('slider_adult_english.rt', slider_adult_english.getRT());
    // the Routine "adult_english" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chi_frenchComponents;
function chi_frenchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'chi_french' ---
    t = 0;
    chi_frenchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('chi_french.started', globalClock.getTime());
    chi_french_audio.setValue('CHI2_FRENCH_4_03_WAV_CUT_purr.mp3');
    chi_french_audio.secs=20;
    chi_french_audio.setVolume(1.0);
    slider_chi_french.reset()
    // keep track of which components have finished
    chi_frenchComponents = [];
    chi_frenchComponents.push(instruções_iniciais_3);
    chi_frenchComponents.push(pergunta_chi_french);
    chi_frenchComponents.push(chi_french_audio);
    chi_frenchComponents.push(slider_chi_french);
    
    chi_frenchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function chi_frenchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'chi_french' ---
    // get current time
    t = chi_frenchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_iniciais_3* updates
    if (t >= 0.0 && instruções_iniciais_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_iniciais_3.tStart = t;  // (not accounting for frame time here)
      instruções_iniciais_3.frameNStart = frameN;  // exact frame index
      
      instruções_iniciais_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_iniciais_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_iniciais_3.setAutoDraw(false);
    }
    
    
    // *pergunta_chi_french* updates
    if (t >= 25.5 && pergunta_chi_french.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_chi_french.tStart = t;  // (not accounting for frame time here)
      pergunta_chi_french.frameNStart = frameN;  // exact frame index
      
      pergunta_chi_french.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_chi_french.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_chi_french.setAutoDraw(false);
    }
    
    // start/stop chi_french_audio
    if (t >= 5.5 && chi_french_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chi_french_audio.tStart = t;  // (not accounting for frame time here)
      chi_french_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ chi_french_audio.play(); });  // screen flip
      chi_french_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (chi_french_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= chi_french_audio.tStart + 0.5) {
        chi_french_audio.stop();  // stop the sound (if longer than duration)
        chi_french_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_chi_french* updates
    if (t >= 25.5 && slider_chi_french.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_chi_french.tStart = t;  // (not accounting for frame time here)
      slider_chi_french.frameNStart = frameN;  // exact frame index
      
      slider_chi_french.setAutoDraw(true);
    }
    
    
    // Check slider_chi_french for response to end Routine
    if (slider_chi_french.getRating() !== undefined && slider_chi_french.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    chi_frenchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function chi_frenchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'chi_french' ---
    chi_frenchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('chi_french.stopped', globalClock.getTime());
    chi_french_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_chi_french.response', slider_chi_french.getRating());
    psychoJS.experiment.addData('slider_chi_french.rt', slider_chi_french.getRT());
    // the Routine "chi_french" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adult_germanComponents;
function adult_germanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adult_german' ---
    t = 0;
    adult_germanClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('adult_german.started', globalClock.getTime());
    adult_german_audio.setValue('ADULT_GERMAN_WAV_CUT_purr.mp3');
    adult_german_audio.secs=20;
    adult_german_audio.setVolume(1.0);
    slider_adult_german.reset()
    // keep track of which components have finished
    adult_germanComponents = [];
    adult_germanComponents.push(instruções_adult_german);
    adult_germanComponents.push(pergunta_adult_german);
    adult_germanComponents.push(adult_german_audio);
    adult_germanComponents.push(slider_adult_german);
    
    adult_germanComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adult_germanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adult_german' ---
    // get current time
    t = adult_germanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_adult_german* updates
    if (t >= 0.0 && instruções_adult_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_adult_german.tStart = t;  // (not accounting for frame time here)
      instruções_adult_german.frameNStart = frameN;  // exact frame index
      
      instruções_adult_german.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_adult_german.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_adult_german.setAutoDraw(false);
    }
    
    
    // *pergunta_adult_german* updates
    if (t >= 25.5 && pergunta_adult_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_adult_german.tStart = t;  // (not accounting for frame time here)
      pergunta_adult_german.frameNStart = frameN;  // exact frame index
      
      pergunta_adult_german.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_adult_german.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_adult_german.setAutoDraw(false);
    }
    
    // start/stop adult_german_audio
    if (t >= 5.5 && adult_german_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adult_german_audio.tStart = t;  // (not accounting for frame time here)
      adult_german_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ adult_german_audio.play(); });  // screen flip
      adult_german_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (adult_german_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= adult_german_audio.tStart + 0.5) {
        adult_german_audio.stop();  // stop the sound (if longer than duration)
        adult_german_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_adult_german* updates
    if (t >= 25.5 && slider_adult_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_adult_german.tStart = t;  // (not accounting for frame time here)
      slider_adult_german.frameNStart = frameN;  // exact frame index
      
      slider_adult_german.setAutoDraw(true);
    }
    
    
    // Check slider_adult_german for response to end Routine
    if (slider_adult_german.getRating() !== undefined && slider_adult_german.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adult_germanComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adult_germanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adult_german' ---
    adult_germanComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adult_german.stopped', globalClock.getTime());
    adult_german_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_adult_german.response', slider_adult_german.getRating());
    psychoJS.experiment.addData('slider_adult_german.rt', slider_adult_german.getRT());
    // the Routine "adult_german" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chi_brazilianComponents;
function chi_brazilianRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'chi_brazilian' ---
    t = 0;
    chi_brazilianClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('chi_brazilian.started', globalClock.getTime());
    chi_brazilian_audio.setValue('CHI4_BRAZILIAN_WAV_CUT_purr.mp3');
    chi_brazilian_audio.secs=20;
    chi_brazilian_audio.setVolume(1.0);
    slider_chi_brazilian.reset()
    // keep track of which components have finished
    chi_brazilianComponents = [];
    chi_brazilianComponents.push(instruções_chi_brazilian);
    chi_brazilianComponents.push(pergunta_chi_brazilian);
    chi_brazilianComponents.push(chi_brazilian_audio);
    chi_brazilianComponents.push(slider_chi_brazilian);
    
    chi_brazilianComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function chi_brazilianRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'chi_brazilian' ---
    // get current time
    t = chi_brazilianClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_chi_brazilian* updates
    if (t >= 0.0 && instruções_chi_brazilian.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_chi_brazilian.tStart = t;  // (not accounting for frame time here)
      instruções_chi_brazilian.frameNStart = frameN;  // exact frame index
      
      instruções_chi_brazilian.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_chi_brazilian.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_chi_brazilian.setAutoDraw(false);
    }
    
    
    // *pergunta_chi_brazilian* updates
    if (t >= 25.5 && pergunta_chi_brazilian.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_chi_brazilian.tStart = t;  // (not accounting for frame time here)
      pergunta_chi_brazilian.frameNStart = frameN;  // exact frame index
      
      pergunta_chi_brazilian.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_chi_brazilian.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_chi_brazilian.setAutoDraw(false);
    }
    
    // start/stop chi_brazilian_audio
    if (t >= 5.5 && chi_brazilian_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chi_brazilian_audio.tStart = t;  // (not accounting for frame time here)
      chi_brazilian_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ chi_brazilian_audio.play(); });  // screen flip
      chi_brazilian_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (chi_brazilian_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= chi_brazilian_audio.tStart + 0.5) {
        chi_brazilian_audio.stop();  // stop the sound (if longer than duration)
        chi_brazilian_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_chi_brazilian* updates
    if (t >= 25.5 && slider_chi_brazilian.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_chi_brazilian.tStart = t;  // (not accounting for frame time here)
      slider_chi_brazilian.frameNStart = frameN;  // exact frame index
      
      slider_chi_brazilian.setAutoDraw(true);
    }
    
    
    // Check slider_chi_brazilian for response to end Routine
    if (slider_chi_brazilian.getRating() !== undefined && slider_chi_brazilian.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    chi_brazilianComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function chi_brazilianRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'chi_brazilian' ---
    chi_brazilianComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('chi_brazilian.stopped', globalClock.getTime());
    chi_brazilian_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_chi_brazilian.response', slider_chi_brazilian.getRating());
    psychoJS.experiment.addData('slider_chi_brazilian.rt', slider_chi_brazilian.getRT());
    // the Routine "chi_brazilian" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adult_frenchComponents;
function adult_frenchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adult_french' ---
    t = 0;
    adult_frenchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('adult_french.started', globalClock.getTime());
    adult_french_audio.setValue('ADULT_FRENCH_F_purr.mp3');
    adult_french_audio.secs=20;
    adult_french_audio.setVolume(1.0);
    slider_adult_french.reset()
    // keep track of which components have finished
    adult_frenchComponents = [];
    adult_frenchComponents.push(instruções_adult_french);
    adult_frenchComponents.push(pergunta_adult_french);
    adult_frenchComponents.push(adult_french_audio);
    adult_frenchComponents.push(slider_adult_french);
    
    adult_frenchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adult_frenchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adult_french' ---
    // get current time
    t = adult_frenchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_adult_french* updates
    if (t >= 0.0 && instruções_adult_french.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_adult_french.tStart = t;  // (not accounting for frame time here)
      instruções_adult_french.frameNStart = frameN;  // exact frame index
      
      instruções_adult_french.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_adult_french.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_adult_french.setAutoDraw(false);
    }
    
    
    // *pergunta_adult_french* updates
    if (t >= 25.5 && pergunta_adult_french.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_adult_french.tStart = t;  // (not accounting for frame time here)
      pergunta_adult_french.frameNStart = frameN;  // exact frame index
      
      pergunta_adult_french.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_adult_french.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_adult_french.setAutoDraw(false);
    }
    
    // start/stop adult_french_audio
    if (t >= 5.5 && adult_french_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adult_french_audio.tStart = t;  // (not accounting for frame time here)
      adult_french_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ adult_french_audio.play(); });  // screen flip
      adult_french_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (adult_french_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= adult_french_audio.tStart + 0.5) {
        adult_french_audio.stop();  // stop the sound (if longer than duration)
        adult_french_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_adult_french* updates
    if (t >= 25.5 && slider_adult_french.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_adult_french.tStart = t;  // (not accounting for frame time here)
      slider_adult_french.frameNStart = frameN;  // exact frame index
      
      slider_adult_french.setAutoDraw(true);
    }
    
    
    // Check slider_adult_french for response to end Routine
    if (slider_adult_french.getRating() !== undefined && slider_adult_french.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adult_frenchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adult_frenchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adult_french' ---
    adult_frenchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adult_french.stopped', globalClock.getTime());
    adult_french_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_adult_french.response', slider_adult_french.getRating());
    psychoJS.experiment.addData('slider_adult_french.rt', slider_adult_french.getRT());
    // the Routine "adult_french" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chi_englishComponents;
function chi_englishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'chi_english' ---
    t = 0;
    chi_englishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('chi_english.started', globalClock.getTime());
    chi_english_audio.setValue('CHI3_AMERICANENGLISH_4_09_WAV_CUT_purr.mp3');
    chi_english_audio.secs=20;
    chi_english_audio.setVolume(1.0);
    slider_chi_english.reset()
    // keep track of which components have finished
    chi_englishComponents = [];
    chi_englishComponents.push(instruções_chi_english);
    chi_englishComponents.push(pergunta_chi_english);
    chi_englishComponents.push(chi_english_audio);
    chi_englishComponents.push(slider_chi_english);
    
    chi_englishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function chi_englishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'chi_english' ---
    // get current time
    t = chi_englishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_chi_english* updates
    if (t >= 0.0 && instruções_chi_english.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_chi_english.tStart = t;  // (not accounting for frame time here)
      instruções_chi_english.frameNStart = frameN;  // exact frame index
      
      instruções_chi_english.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_chi_english.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_chi_english.setAutoDraw(false);
    }
    
    
    // *pergunta_chi_english* updates
    if (t >= 25.5 && pergunta_chi_english.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_chi_english.tStart = t;  // (not accounting for frame time here)
      pergunta_chi_english.frameNStart = frameN;  // exact frame index
      
      pergunta_chi_english.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_chi_english.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_chi_english.setAutoDraw(false);
    }
    
    // start/stop chi_english_audio
    if (t >= 5.5 && chi_english_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chi_english_audio.tStart = t;  // (not accounting for frame time here)
      chi_english_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ chi_english_audio.play(); });  // screen flip
      chi_english_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (chi_english_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= chi_english_audio.tStart + 0.5) {
        chi_english_audio.stop();  // stop the sound (if longer than duration)
        chi_english_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_chi_english* updates
    if (t >= 25.5 && slider_chi_english.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_chi_english.tStart = t;  // (not accounting for frame time here)
      slider_chi_english.frameNStart = frameN;  // exact frame index
      
      slider_chi_english.setAutoDraw(true);
    }
    
    
    // Check slider_chi_english for response to end Routine
    if (slider_chi_english.getRating() !== undefined && slider_chi_english.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    chi_englishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function chi_englishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'chi_english' ---
    chi_englishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('chi_english.stopped', globalClock.getTime());
    chi_english_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_chi_english.response', slider_chi_english.getRating());
    psychoJS.experiment.addData('slider_chi_english.rt', slider_chi_english.getRT());
    // the Routine "chi_english" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adult_brazilian_MComponents;
function adult_brazilian_MRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adult_brazilian_M' ---
    t = 0;
    adult_brazilian_MClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('adult_brazilian_M.started', globalClock.getTime());
    adult_brazilian_M_audio.setValue('ADULT_BRAZILIAN_M_purr.mp3');
    adult_brazilian_M_audio.secs=20;
    adult_brazilian_M_audio.setVolume(1.0);
    slider_adult_brazilian_M.reset()
    // keep track of which components have finished
    adult_brazilian_MComponents = [];
    adult_brazilian_MComponents.push(instruções_adult_brazilian_M);
    adult_brazilian_MComponents.push(pergunta_adult_brazilian_M);
    adult_brazilian_MComponents.push(adult_brazilian_M_audio);
    adult_brazilian_MComponents.push(slider_adult_brazilian_M);
    
    adult_brazilian_MComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adult_brazilian_MRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adult_brazilian_M' ---
    // get current time
    t = adult_brazilian_MClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_adult_brazilian_M* updates
    if (t >= 0.0 && instruções_adult_brazilian_M.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_adult_brazilian_M.tStart = t;  // (not accounting for frame time here)
      instruções_adult_brazilian_M.frameNStart = frameN;  // exact frame index
      
      instruções_adult_brazilian_M.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_adult_brazilian_M.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_adult_brazilian_M.setAutoDraw(false);
    }
    
    
    // *pergunta_adult_brazilian_M* updates
    if (t >= 25.5 && pergunta_adult_brazilian_M.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_adult_brazilian_M.tStart = t;  // (not accounting for frame time here)
      pergunta_adult_brazilian_M.frameNStart = frameN;  // exact frame index
      
      pergunta_adult_brazilian_M.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_adult_brazilian_M.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_adult_brazilian_M.setAutoDraw(false);
    }
    
    // start/stop adult_brazilian_M_audio
    if (t >= 5.5 && adult_brazilian_M_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adult_brazilian_M_audio.tStart = t;  // (not accounting for frame time here)
      adult_brazilian_M_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ adult_brazilian_M_audio.play(); });  // screen flip
      adult_brazilian_M_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (adult_brazilian_M_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= adult_brazilian_M_audio.tStart + 0.5) {
        adult_brazilian_M_audio.stop();  // stop the sound (if longer than duration)
        adult_brazilian_M_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_adult_brazilian_M* updates
    if (t >= 25.5 && slider_adult_brazilian_M.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_adult_brazilian_M.tStart = t;  // (not accounting for frame time here)
      slider_adult_brazilian_M.frameNStart = frameN;  // exact frame index
      
      slider_adult_brazilian_M.setAutoDraw(true);
    }
    
    
    // Check slider_adult_brazilian_M for response to end Routine
    if (slider_adult_brazilian_M.getRating() !== undefined && slider_adult_brazilian_M.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adult_brazilian_MComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adult_brazilian_MRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adult_brazilian_M' ---
    adult_brazilian_MComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adult_brazilian_M.stopped', globalClock.getTime());
    adult_brazilian_M_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_adult_brazilian_M.response', slider_adult_brazilian_M.getRating());
    psychoJS.experiment.addData('slider_adult_brazilian_M.rt', slider_adult_brazilian_M.getRT());
    // the Routine "adult_brazilian_M" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chi_germanComponents;
function chi_germanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'chi_german' ---
    t = 0;
    chi_germanClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('chi_german.started', globalClock.getTime());
    chi_german_audio.setValue('CHI1_GERMAN_4_03_WAV_CUT_purr.mp3');
    chi_german_audio.secs=20;
    chi_german_audio.setVolume(1.0);
    slider_chi_german.reset()
    // keep track of which components have finished
    chi_germanComponents = [];
    chi_germanComponents.push(instruções_chi_german);
    chi_germanComponents.push(pergunta_chi_german);
    chi_germanComponents.push(chi_german_audio);
    chi_germanComponents.push(slider_chi_german);
    
    chi_germanComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function chi_germanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'chi_german' ---
    // get current time
    t = chi_germanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_chi_german* updates
    if (t >= 0.0 && instruções_chi_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_chi_german.tStart = t;  // (not accounting for frame time here)
      instruções_chi_german.frameNStart = frameN;  // exact frame index
      
      instruções_chi_german.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_chi_german.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_chi_german.setAutoDraw(false);
    }
    
    
    // *pergunta_chi_german* updates
    if (t >= 25.5 && pergunta_chi_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_chi_german.tStart = t;  // (not accounting for frame time here)
      pergunta_chi_german.frameNStart = frameN;  // exact frame index
      
      pergunta_chi_german.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_chi_german.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_chi_german.setAutoDraw(false);
    }
    
    // start/stop chi_german_audio
    if (t >= 5.5 && chi_german_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chi_german_audio.tStart = t;  // (not accounting for frame time here)
      chi_german_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ chi_german_audio.play(); });  // screen flip
      chi_german_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (chi_german_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= chi_german_audio.tStart + 0.5) {
        chi_german_audio.stop();  // stop the sound (if longer than duration)
        chi_german_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_chi_german* updates
    if (t >= 25.5 && slider_chi_german.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_chi_german.tStart = t;  // (not accounting for frame time here)
      slider_chi_german.frameNStart = frameN;  // exact frame index
      
      slider_chi_german.setAutoDraw(true);
    }
    
    
    // Check slider_chi_german for response to end Routine
    if (slider_chi_german.getRating() !== undefined && slider_chi_german.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    chi_germanComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function chi_germanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'chi_german' ---
    chi_germanComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('chi_german.stopped', globalClock.getTime());
    chi_german_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_chi_german.response', slider_chi_german.getRating());
    psychoJS.experiment.addData('slider_chi_german.rt', slider_chi_german.getRT());
    // the Routine "chi_german" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adult_brazilian_FComponents;
function adult_brazilian_FRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adult_brazilian_F' ---
    t = 0;
    adult_brazilian_FClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('adult_brazilian_F.started', globalClock.getTime());
    adult_brazilian_F_audio.setValue('ADULT_BRAZILIAN_F_purr.mp3');
    adult_brazilian_F_audio.secs=20;
    adult_brazilian_F_audio.setVolume(1.0);
    slider_adult_brazilian_F.reset()
    // keep track of which components have finished
    adult_brazilian_FComponents = [];
    adult_brazilian_FComponents.push(instruções_adult_brazilian_F);
    adult_brazilian_FComponents.push(pergunta_adult_brazilian_F);
    adult_brazilian_FComponents.push(adult_brazilian_F_audio);
    adult_brazilian_FComponents.push(slider_adult_brazilian_F);
    
    adult_brazilian_FComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adult_brazilian_FRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adult_brazilian_F' ---
    // get current time
    t = adult_brazilian_FClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruções_adult_brazilian_F* updates
    if (t >= 0.0 && instruções_adult_brazilian_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruções_adult_brazilian_F.tStart = t;  // (not accounting for frame time here)
      instruções_adult_brazilian_F.frameNStart = frameN;  // exact frame index
      
      instruções_adult_brazilian_F.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruções_adult_brazilian_F.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruções_adult_brazilian_F.setAutoDraw(false);
    }
    
    
    // *pergunta_adult_brazilian_F* updates
    if (t >= 25.5 && pergunta_adult_brazilian_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pergunta_adult_brazilian_F.tStart = t;  // (not accounting for frame time here)
      pergunta_adult_brazilian_F.frameNStart = frameN;  // exact frame index
      
      pergunta_adult_brazilian_F.setAutoDraw(true);
    }
    
    frameRemains = 25.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pergunta_adult_brazilian_F.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pergunta_adult_brazilian_F.setAutoDraw(false);
    }
    
    // start/stop adult_brazilian_F_audio
    if (t >= 5.5 && adult_brazilian_F_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adult_brazilian_F_audio.tStart = t;  // (not accounting for frame time here)
      adult_brazilian_F_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ adult_brazilian_F_audio.play(); });  // screen flip
      adult_brazilian_F_audio.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5.5 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (adult_brazilian_F_audio.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= adult_brazilian_F_audio.tStart + 0.5) {
        adult_brazilian_F_audio.stop();  // stop the sound (if longer than duration)
        adult_brazilian_F_audio.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *slider_adult_brazilian_F* updates
    if (t >= 25.5 && slider_adult_brazilian_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_adult_brazilian_F.tStart = t;  // (not accounting for frame time here)
      slider_adult_brazilian_F.frameNStart = frameN;  // exact frame index
      
      slider_adult_brazilian_F.setAutoDraw(true);
    }
    
    
    // Check slider_adult_brazilian_F for response to end Routine
    if (slider_adult_brazilian_F.getRating() !== undefined && slider_adult_brazilian_F.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adult_brazilian_FComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adult_brazilian_FRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adult_brazilian_F' ---
    adult_brazilian_FComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adult_brazilian_F.stopped', globalClock.getTime());
    adult_brazilian_F_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('slider_adult_brazilian_F.response', slider_adult_brazilian_F.getRating());
    psychoJS.experiment.addData('slider_adult_brazilian_F.rt', slider_adult_brazilian_F.getRT());
    // the Routine "adult_brazilian_F" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var obrigadaComponents;
function obrigadaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'obrigada' ---
    t = 0;
    obrigadaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(15.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('obrigada.started', globalClock.getTime());
    // keep track of which components have finished
    obrigadaComponents = [];
    obrigadaComponents.push(Obrigada);
    
    obrigadaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function obrigadaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'obrigada' ---
    // get current time
    t = obrigadaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Obrigada* updates
    if (t >= 0.0 && Obrigada.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Obrigada.tStart = t;  // (not accounting for frame time here)
      Obrigada.frameNStart = frameN;  // exact frame index
      
      Obrigada.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Obrigada.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Obrigada.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    obrigadaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function obrigadaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'obrigada' ---
    obrigadaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('obrigada.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
