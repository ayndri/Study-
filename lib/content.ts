// Konten latihan TOEFL ITP & data beasiswa — dipakai lintas halaman.

export type Level = "mudah" | "sedang" | "sulit";

export type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  level?: Level; // tanpa level dianggap "sedang"
};

export type Clip = {
  id: string;
  label: string;
  kind: "conversation" | "lecture";
  script: string;
  questions: Question[];
};

// ===================== LISTENING =====================
export const LISTENING_CLIPS: Clip[] = [
  {
    id: "c1",
    label: "Part A · Dialog 1",
    kind: "conversation",
    script:
      "Woman: I heard you are applying for the LPDP scholarship. Have you taken the TOEFL yet?\nMan: Yes, I took the ITP test last month and scored 543.",
    questions: [
      {
        q: "What did the man do last month?",
        options: ["Applied for a job", "Took the TOEFL ITP test", "Started his master's", "Moved to another city"],
        answer: 1,
        explain: '"I took the ITP test last month."',
      },
    ],
  },
  {
    id: "c2",
    label: "Part A · Dialog 2",
    kind: "conversation",
    script:
      "Man: The library closes at nine tonight, right?\nWoman: Actually, during exam week it stays open until midnight.",
    questions: [
      {
        q: "What does the woman imply?",
        options: [
          "The library is closed tonight",
          "The library opens later than usual this week",
          "The man should study at home",
          "Exams have been cancelled",
        ],
        answer: 1,
        explain: '"during exam week it stays open until midnight" — lebih lama dari biasanya.',
      },
    ],
  },
  {
    id: "c3",
    label: "Part A · Dialog 3",
    kind: "conversation",
    script:
      "Woman: I can't find my student ID anywhere, and I need it for the exam.\nMan: Why don't you go to the administration office? They can print a temporary one.",
    questions: [
      {
        q: "What does the man suggest the woman do?",
        options: [
          "Cancel the exam",
          "Look for the ID again",
          "Get a temporary ID from the office",
          "Borrow a friend's ID",
        ],
        answer: 2,
        explain: '"Why don\'t you go to the administration office? They can print a temporary one."',
      },
    ],
  },
  {
    id: "c4",
    label: "Part A · Dialog 4",
    kind: "conversation",
    script:
      "Man: Are you coming to Professor Lee's lecture this afternoon?\nWoman: I wish I could, but I have a lab session at the same time.",
    questions: [
      {
        q: "What does the woman mean?",
        options: [
          "She will attend the lecture",
          "She cannot attend the lecture",
          "The lecture was cancelled",
          "She dislikes Professor Lee",
        ],
        answer: 1,
        explain: '"I wish I could, but I have a lab session at the same time" — ia tidak bisa hadir.',
      },
    ],
  },
  {
    id: "c5",
    label: "Part A · Dialog 5",
    kind: "conversation",
    script:
      "Woman: How was the scholarship interview?\nMan: Honestly, it was over my head — the questions were much harder than I expected.",
    questions: [
      {
        q: 'What does the man mean by "over my head"?',
        options: ["It was boring", "It was too easy", "It was too difficult", "It was too short"],
        answer: 2,
        explain: '"over my head" = terlalu sulit dipahami.',
      },
    ],
  },
  {
    id: "c6",
    label: "Part A · Dialog 6",
    kind: "conversation",
    script:
      "Man: Did you finish the research proposal?\nWoman: Not yet. I've been so busy that I keep putting it off.",
    questions: [
      {
        q: "What is the woman's problem?",
        options: [
          "She lost the proposal",
          "She keeps delaying the proposal",
          "She already submitted it",
          "She does not understand the topic",
        ],
        answer: 1,
        explain: '"put off" = menunda.',
      },
    ],
  },
  {
    id: "c7",
    label: "Part A · Dialog 7",
    kind: "conversation",
    script:
      "Woman: This statistics assignment is a piece of cake.\nMan: Really? I've been struggling with it all week.",
    questions: [
      {
        q: "What does the woman mean?",
        options: [
          "The assignment is about food",
          "The assignment is very easy for her",
          "She has not started it",
          "The assignment is impossible",
        ],
        answer: 1,
        explain: '"a piece of cake" = sangat mudah.',
      },
    ],
  },
  {
    id: "c8",
    label: "Part A · Dialog 8",
    kind: "conversation",
    script:
      "Man: I ran into Dr. Sari at the conference yesterday.\nWoman: No way! I didn't know she was attending.",
    questions: [
      {
        q: "What does the woman express?",
        options: ["Anger", "Boredom", "Surprise", "Disappointment"],
        answer: 2,
        explain: '"No way!" mengungkapkan keterkejutan.',
      },
    ],
  },
  {
    id: "l1",
    label: "Part C · Kuliah 1 (Machine Learning)",
    kind: "lecture",
    script:
      "Today we will discuss machine learning, a branch of artificial intelligence. Unlike traditional programming, where every rule is explicitly coded by a human, machine learning systems learn patterns directly from data. This ability makes them especially useful for tasks such as image recognition and language translation.",
    questions: [
      {
        q: "Machine learning is described as a branch of:",
        options: ["Statistics", "Robotics", "Artificial intelligence", "Linguistics"],
        answer: 2,
        explain: '"machine learning, a branch of artificial intelligence".',
      },
      {
        q: "How does machine learning differ from traditional programming?",
        options: [
          "It uses faster computers",
          "It learns patterns from data instead of explicit rules",
          "It requires no data",
          "It only works on images",
        ],
        answer: 1,
        explain: '"learn patterns directly from data" vs aturan yang dikodekan eksplisit.',
      },
      {
        q: "Which task is mentioned as an example?",
        options: ["Weather forecasting", "Language translation", "Car manufacturing", "Accounting"],
        answer: 1,
        explain: '"tasks such as image recognition and language translation".',
      },
    ],
  },
  {
    id: "l2",
    label: "Part C · Kuliah 2 (Printing Press)",
    kind: "lecture",
    script:
      "In today's session we will look at how the printing press transformed Europe. Before Johannes Gutenberg introduced movable type around 1440, books were copied by hand, which made them rare and expensive. The printing press dramatically lowered costs, so ideas spread faster than ever before. This wider access to information helped fuel movements such as the Reformation and the Scientific Revolution.",
    questions: [
      {
        q: "What is the main topic of the lecture?",
        options: [
          "The life of Gutenberg",
          "How the printing press transformed Europe",
          "The Scientific Revolution",
          "Medieval handwriting",
        ],
        answer: 1,
        explain: '"how the printing press transformed Europe".',
      },
      {
        q: "According to the lecturer, how were books made before Gutenberg?",
        options: ["Printed cheaply", "Copied by hand", "Imported from Asia", "Written on stone"],
        answer: 1,
        explain: '"books were copied by hand".',
      },
    ],
  },
];

// ===================== STRUCTURE =====================
export const STRUCTURE_QUESTIONS: Question[] = [
  { q: "______ the invention of the printing press, most books were copied by hand.", options: ["Before", "Ago", "Sooner", "Prior"], answer: 0, explain: '"Before" preposisi waktu yang tepat. "Prior" harus "prior to".' },
  { q: "The committee has not yet decided ______ the new academic policy.", options: ["adopt", "to adopt", "adopting", "adopted"], answer: 1, explain: 'Setelah "decide" dipakai to-infinitive.' },
  { q: "Not until the late nineteenth century ______ a practical electric light bulb.", options: ["Edison invented", "did Edison invent", "Edison did invent", "invented Edison"], answer: 1, explain: "Frasa negatif di awal memicu inversi." },
  { q: "The professor, along with her students, ______ attending the conference.", options: ["are", "is", "were", "have"], answer: 1, explain: 'Subjek inti "The professor" (tunggal) → "is".' },
  { q: "______ that the Earth revolves around the Sun.", options: ["It is known", "Knowing", "To know", "Known"], answer: 0, explain: 'Butuh subjek+verba lengkap: "It is known that...".' },
  { q: "If she ______ harder, she would have passed the exam.", options: ["studies", "studied", "had studied", "study"], answer: 2, explain: "Conditional tipe 3: if + past perfect." },
  { q: "The scientist ______ theory changed physics won the Nobel Prize.", options: ["who", "whom", "whose", "which"], answer: 2, explain: '"whose" menunjukkan kepemilikan (teorinya).' },
  { q: "Neither the students nor the teacher ______ aware of the change.", options: ["are", "were", "was", "have been"], answer: 2, explain: 'Dengan "neither…nor", verba mengikuti subjek terdekat ("the teacher" → tunggal).' },
  { q: "The advisor recommended that he ______ the application before Friday.", options: ["submits", "submitted", "submit", "submitting"], answer: 2, explain: "Subjunctive setelah 'recommend that' → bentuk dasar." },
  { q: "______ arriving at the airport, they realized they had forgotten the tickets.", options: ["On", "In", "At", "By"], answer: 0, explain: '"On + V-ing" = segera setelah.' },
  { q: "The more you practice, ______ you will become.", options: ["the good", "better", "the better", "best"], answer: 2, explain: "Pola 'the more…the better'." },
  { q: "By the time the guests arrived, we ______ the dinner.", options: ["prepare", "prepared", "had prepared", "have prepared"], answer: 2, explain: "'By the time' + aksi lebih dulu → past perfect." },
  { q: "She is looking forward to ______ from the committee soon.", options: ["hear", "hearing", "heard", "be hearing"], answer: 1, explain: "'look forward to' + V-ing (to = preposisi)." },
  { q: "Rarely ______ such a beautiful performance.", options: ["I have seen", "have I seen", "I saw", "did I saw"], answer: 1, explain: "Setelah 'Rarely' di awal → inversi (aux + subjek)." },
  { q: "The equipment in the laboratory ______ regularly maintained.", options: ["are", "is", "were", "have been"], answer: 1, explain: "'equipment' uncountable → tunggal." },
  { q: "<b>Written Expression:</b> Each of the applicants <u>were</u> <u>required</u> <u>to submit</u> <u>a personal</u> statement.", options: ["were", "required", "to submit", "a personal"], answer: 0, explain: '"Each of..." tunggal → "was required".' },
  { q: "<b>Written Expression:</b> The research <u>conducted</u> by the team <u>were</u> published <u>in a</u> leading <u>journal</u>.", options: ["conducted", "were", "in a", "journal"], answer: 1, explain: '"research" tunggal → "was published".' },
  { q: "<b>Written Expression:</b> She is one of the <u>most</u> <u>talented</u> <u>student</u> in the <u>entire</u> department.", options: ["most", "talented", "student", "entire"], answer: 2, explain: '"one of the + superlative + noun jamak" → "students".' },
  { q: "<b>Written Expression:</b> <u>Despite of</u> the heavy rain, the ceremony <u>proceeded</u> <u>as</u> <u>planned</u>.", options: ["Despite of", "proceeded", "as", "planned"], answer: 0, explain: 'Yang benar "Despite" (tanpa "of").' },
  { q: "<b>Written Expression:</b> The data <u>collected</u> last year <u>suggest</u> that the program <u>are</u> highly <u>effective</u>.", options: ["collected", "suggest", "are", "effective"], answer: 2, explain: '"the program" tunggal → "is".' },
  { q: "<b>Written Expression:</b> The new policy will <u>affect</u> <u>economic</u> growth <u>more</u> <u>quicker</u> than expected.", options: ["affect", "economic", "more", "quicker"], answer: 3, explain: 'Perbandingan ganda: "more quicker" → "more quickly".' },
  { q: "<b>Written Expression:</b> <u>Although</u> the project was difficult, <u>but</u> the team <u>completed</u> it <u>on time</u>.", options: ["Although", "but", "completed", "on time"], answer: 1, explain: 'Jangan gandakan konjungsi: hapus "but".' },
  { q: "<b>Written Expression:</b> The manager asked <u>where</u> <u>could the report</u> <u>be found</u> in <u>the system</u>.", options: ["where", "could the report", "be found", "the system"], answer: 1, explain: "Embedded question tanpa inversi → 'where the report could be found'." },
  { q: "<b>Written Expression:</b> There <u>is</u> <u>many</u> <u>reasons</u> to invest in renewable <u>energy</u>.", options: ["is", "many", "reasons", "energy"], answer: 0, explain: "'reasons' jamak → 'There are'." },
  // --- tambahan mudah ---
  { q: "She ______ to campus every morning.", options: ["go", "goes", "going", "gone"], answer: 1, explain: "Subjek 'She' present → goes.", level: "mudah" },
  { q: "They ______ students at ITS.", options: ["is", "am", "are", "be"], answer: 2, explain: "They → are.", level: "mudah" },
  { q: "I have lived here ______ 2019.", options: ["for", "since", "from", "at"], answer: 1, explain: "since + titik waktu.", level: "mudah" },
  { q: "This book is ______ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], answer: 1, explain: "comparative kata panjang → more + adj.", level: "mudah" },
  { q: "There ______ a lot of information online.", options: ["are", "is", "were", "have"], answer: 1, explain: "'information' uncountable → is.", level: "mudah" },
  { q: "He can ______ English very well.", options: ["speaks", "speaking", "speak", "spoke"], answer: 2, explain: "Setelah modal 'can' → V1.", level: "mudah" },
  // --- tambahan sulit ---
  { q: "______ had the meeting begun than the fire alarm rang.", options: ["No sooner", "Not until", "Hardly", "Rarely"], answer: 0, explain: "Pola 'No sooner … than' dengan inversi.", level: "sulit" },
  { q: "The professor demanded that every report ______ submitted electronically.", options: ["is", "was", "be", "being"], answer: 2, explain: "Subjunctive setelah 'demand that' → bentuk dasar 'be'.", level: "sulit" },
  { q: "______ for the timely intervention, the project would have failed.", options: ["Had it not been", "If it was not", "Were it not", "Not being"], answer: 0, explain: "Inversi conditional tipe 3 tanpa 'if': Had it not been for…", level: "sulit" },
  { q: "So rapidly ______ that few could keep up with the changes.", options: ["technology advanced", "did technology advance", "technology did advance", "advanced technology"], answer: 1, explain: "'So + adverb' di awal → inversi.", level: "sulit" },
  { q: "<b>Written Expression:</b> The committee, <u>whom</u> <u>members</u> were elected last year, <u>meets</u> <u>monthly</u>.", options: ["whom", "members", "meets", "monthly"], answer: 0, explain: "Kepemilikan → 'whose members', bukan 'whom'.", level: "sulit" },
  { q: "<b>Written Expression:</b> Not only <u>the students</u> but also the teacher <u>were</u> <u>surprised</u> by the <u>result</u>.", options: ["the students", "were", "surprised", "result"], answer: 1, explain: "'not only…but also' → verba ikut subjek terdekat 'the teacher' (tunggal) → was.", level: "sulit" },
];

// ===================== READING =====================
export const READING1_PASSAGE = [
  "The transition to renewable energy has become one of the defining challenges of the twenty-first century. As concerns about climate change intensify, governments and industries alike are searching for reliable alternatives to fossil fuels. Among these alternatives, solar and wind power have emerged as the most promising, largely because their costs have fallen dramatically over the past two decades.",
  "Solar photovoltaic panels, which convert sunlight directly into electricity, illustrate this shift clearly. In 2010, generating a unit of solar electricity was several times more expensive than generating the same amount from coal. Today, in many regions, solar power is the cheapest source of new electricity available. This decline is the result of improved manufacturing techniques, economies of scale, and sustained investment in research.",
  "Nevertheless, renewable sources present a significant obstacle: intermittency. The sun does not always shine, and the wind does not always blow. Because electricity must be supplied precisely when it is demanded, this variability complicates the management of power grids. Engineers have therefore turned to large-scale battery storage and to smarter grids that can balance supply and demand across wide areas.",
  "Ultimately, experts argue that no single technology will solve the problem alone. A resilient energy system will likely combine several renewable sources with storage, efficiency measures, and flexible demand. The pace of this transformation, they caution, will depend less on technology than on political will and coordinated investment.",
];
export const READING1_QUESTIONS: Question[] = [
  { q: "What is the main idea of the passage?", options: ["Fossil fuels remain cheaper than renewables", "Renewable energy is becoming central, though challenges like intermittency remain", "Solar power has completely replaced coal", "Climate change cannot be solved"], answer: 1, explain: "Membahas naiknya energi terbarukan dan tantangan yang tersisa." },
  { q: "According to the passage, why has solar power become cheaper?", options: ["Government bans on coal", "Improved manufacturing, economies of scale, and research investment", "A decrease in demand", "Fewer safety rules"], answer: 1, explain: "Disebut eksplisit di paragraf 2." },
  { q: 'The word "intermittency" in paragraph 3 is closest in meaning to:', options: ["high cost", "irregular availability", "pollution", "complexity of design"], answer: 1, explain: "Matahari & angin tidak selalu ada → ketersediaan tidak tetap." },
  { q: "It can be inferred that the energy transition will mainly depend on:", options: ["one breakthrough technology", "political will and coordinated investment", "cheaper coal", "reducing demand to zero"], answer: 1, explain: 'Kalimat terakhir menyebutnya.' },
  { q: "How do engineers address variability?", options: ["Building more coal plants", "Battery storage and smarter grids", "Fewer solar panels", "Ignoring demand"], answer: 1, explain: 'Paragraf 3.' },
];

export const READING2_PASSAGE = [
  "For much of the twentieth century, many educators believed that raising a child with two languages could cause confusion and slow development. Recent research, however, has largely overturned this view. Far from being a burden, bilingualism appears to offer measurable cognitive advantages that last throughout life.",
  "One of the most studied benefits involves what psychologists call executive function—the mental skills used to focus attention, switch between tasks, and ignore distractions. Because bilingual people constantly select one language while suppressing the other, their brains receive continual practice in these skills. Studies suggest that this practice can make them more efficient at tasks requiring concentration, even when no language is involved.",
  "The advantages are not limited to childhood. Some evidence indicates that lifelong bilingualism may delay the onset of age-related memory decline by several years. While bilingualism is clearly not a cure, researchers believe the constant mental exercise helps build what is often described as cognitive reserve.",
  "Still, scientists caution against exaggeration. The size of these effects varies, and not every study finds them. What is now widely accepted, however, is that learning a second language does no harm—and very likely does considerable good.",
];
export const READING2_QUESTIONS: Question[] = [
  { q: "What is the main purpose of the passage?", options: ["To teach a second language", "To explain the cognitive benefits of bilingualism", "To criticize modern education", "To compare English and other languages"], answer: 1, explain: "Seluruh teks membahas manfaat kognitif bilingualisme." },
  { q: "The older view about raising bilingual children was that it:", options: ["improved memory", "could cause confusion and slow development", "was too expensive", "guaranteed success"], answer: 1, explain: "Paragraf 1: keyakinan lama menganggapnya membingungkan." },
  { q: 'The term "executive function" refers to:', options: ["a job in a company", "skills for focusing, switching tasks, and ignoring distractions", "the ability to speak fluently", "long-term memory only"], answer: 1, explain: "Didefinisikan di paragraf 2." },
  { q: "According to the passage, lifelong bilingualism may:", options: ["cure memory loss", "delay age-related memory decline", "reduce intelligence", "replace exercise"], answer: 1, explain: 'Paragraf 3: "delay the onset of age-related memory decline".' },
  { q: "The author's attitude in the final paragraph is best described as:", options: ["completely certain", "cautiously positive", "strongly negative", "indifferent"], answer: 1, explain: "Mengingatkan agar tidak berlebihan, tetapi menilai efeknya baik." },
];

export const READING3_PASSAGE = [
  "Most people think of sleep simply as a period of rest, a time when the body shuts down to recover from the day. Yet research over the past few decades has revealed that sleep is a remarkably active state, especially for the brain. Far from switching off, the sleeping brain is busy sorting, storing, and strengthening the information gathered while we are awake.",
  "This process is known as memory consolidation. During deep sleep, the brain appears to replay the day's experiences, transferring fragile short-term memories into more stable long-term storage. Studies have shown that students who sleep after learning new material tend to remember it far better than those who stay awake, even when total study time is identical.",
  "Sleep also seems to support creativity and problem-solving. In one well-known experiment, participants who slept between attempts at a difficult puzzle were more than twice as likely to discover a hidden shortcut. Researchers suspect that sleep helps the brain reorganize information, allowing connections that were not obvious during waking hours to emerge.",
  "The practical lesson is clear. Sacrificing sleep to cram for an exam is often counterproductive, because the very process that cements learning is being cut short. A consistent sleep schedule, experts argue, may be one of the most effective and least appreciated study tools available.",
];
export const READING3_QUESTIONS: Question[] = [
  { q: "What is the main idea of the passage?", options: ["Sleep is only for physical rest", "Sleep actively supports memory and learning", "Students should study all night", "Dreams predict the future"], answer: 1, explain: "Teks menekankan peran aktif tidur bagi memori & belajar.", level: "mudah" },
  { q: 'The term "memory consolidation" refers to the process of:', options: ["forgetting information", "moving memories into stable long-term storage", "waking up", "studying harder"], answer: 1, explain: "Didefinisikan di paragraf 2.", level: "sedang" },
  { q: "According to the passage, students who sleep after learning:", options: ["remember material better", "forget more quickly", "need less study time overall", "become less creative"], answer: 0, explain: "Paragraf 2 menyatakannya eksplisit.", level: "mudah" },
  { q: "The puzzle experiment is mentioned to show that sleep can:", options: ["cause confusion", "aid creativity and problem-solving", "reduce intelligence", "replace practice"], answer: 1, explain: "Paragraf 3 tentang kreativitas & pemecahan masalah.", level: "sedang" },
  { q: "It can be inferred that pulling an all-nighter to cram is:", options: ["highly effective", "often counterproductive", "recommended by experts", "necessary before exams"], answer: 1, explain: '"often counterproductive" di paragraf terakhir.', level: "sulit" },
];

// ===================== WRITING =====================
export const WRITING_PROMPTS = [
  "Some people believe university students should be required to attend classes; others believe attendance should be optional. Which view do you agree with? Use specific reasons and examples to support your answer.",
  'Esai LPDP — "Komitmen Kembali & Kontribusiku bagi Indonesia": Jelaskan rencana kontribusi konkret di bidang teknik informatika untuk Indonesia setelah menyelesaikan studi S2. Kaitkan dengan pengalaman dan tujuan jangka panjangmu.',
  "Rencana Studi — Uraikan mengapa kamu memilih Program S2 Teknik Informatika ITS, topik riset yang ingin kamu tekuni, gambaran mata kuliah/laboratorium yang relevan, dan target penyelesaian studi.",
];

// ===================== VOCABULARY (100+) =====================
export const VOCAB: [string, string, string, string][] = [
  ["comprehensive", "adjective", "menyeluruh, lengkap", "The report gave a comprehensive overview of the project."],
  ["prerequisite", "noun", "prasyarat", "A bachelor's degree is a prerequisite for this program."],
  ["endeavor", "noun / verb", "usaha, upaya", "Earning a scholarship is a challenging but rewarding endeavor."],
  ["feasible", "adjective", "layak, dapat dilaksanakan", "The committee judged the research plan to be feasible."],
  ["substantial", "adjective", "besar, signifikan", "She made a substantial contribution to the study."],
  ["articulate", "verb / adjective", "mengungkapkan dengan jelas", "He can articulate complex ideas simply."],
  ["rigorous", "adjective", "ketat, teliti", "The selection follows a rigorous evaluation process."],
  ["prominent", "adjective", "terkemuka, menonjol", "She is a prominent researcher in machine learning."],
  ["alleviate", "verb", "meringankan, mengurangi", "The new policy aims to alleviate poverty."],
  ["advocate", "verb / noun", "mendukung; pendukung", "They advocate for wider access to education."],
  ["diligent", "adjective", "rajin, tekun", "Diligent preparation improved his test score."],
  ["coherent", "adjective", "runtut, koheren", "A coherent essay flows logically from start to finish."],
  ["eligible", "adjective", "memenuhi syarat", "Only eligible candidates may apply for the grant."],
  ["disseminate", "verb", "menyebarluaskan", "Researchers disseminate findings through journals."],
  ["ambiguous", "adjective", "ambigu, bermakna ganda", "Avoid ambiguous wording in your statement."],
  ["underlying", "adjective", "yang mendasari", "We must address the underlying cause of the problem."],
  ["versatile", "adjective", "serbaguna, fleksibel", "Python is a versatile programming language."],
  ["meticulous", "adjective", "teliti, cermat", "She kept meticulous records of the experiment."],
  ["profound", "adjective", "mendalam", "The mentor had a profound influence on her career."],
  ["concise", "adjective", "ringkas, padat", "Keep your answers clear and concise."],
  ["abundant", "adjective", "berlimpah", "The region has abundant natural resources."],
  ["accumulate", "verb", "menumpuk, mengumpulkan", "Data accumulate rapidly in modern systems."],
  ["adequate", "adjective", "memadai", "The funding was adequate for the first phase."],
  ["adjacent", "adjective", "bersebelahan", "The lab is adjacent to the library."],
  ["advocate", "verb", "menganjurkan", "Experts advocate regular practice."],
  ["allocate", "verb", "mengalokasikan", "The government allocated funds for research."],
  ["ambiguity", "noun", "ketaksaan", "The clause created legal ambiguity."],
  ["analogous", "adjective", "serupa, analog", "The heart is analogous to a pump."],
  ["anticipate", "verb", "mengantisipasi", "We anticipate strong demand next year."],
  ["arbitrary", "adjective", "sewenang-wenang, acak", "The rule seemed arbitrary and unfair."],
  ["assess", "verb", "menilai", "Teachers assess students through exams."],
  ["attain", "verb", "mencapai", "She attained the required score."],
  ["augment", "verb", "menambah, memperbesar", "Scholarships augment a student's resources."],
  ["autonomous", "adjective", "mandiri, otonom", "The vehicle is fully autonomous."],
  ["beneficial", "adjective", "bermanfaat", "Exercise is beneficial to health."],
  ["bias", "noun", "prasangka, bias", "The study controlled for selection bias."],
  ["coincide", "verb", "bertepatan", "The deadline coincides with the holiday."],
  ["compel", "verb", "memaksa", "The evidence compelled them to change the plan."],
  ["compile", "verb", "menyusun, menghimpun", "She compiled the data into a report."],
  ["comprise", "verb", "terdiri atas", "The course comprises ten modules."],
  ["conceive", "verb", "membayangkan, merancang", "They conceived a new approach to the problem."],
  ["consecutive", "adjective", "berturut-turut", "He won three consecutive awards."],
  ["consensus", "noun", "kesepakatan bersama", "The panel reached a consensus."],
  ["constitute", "verb", "membentuk, merupakan", "These steps constitute the whole process."],
  ["contradict", "verb", "bertentangan dengan", "The new data contradict the old theory."],
  ["conventional", "adjective", "konvensional, lazim", "Conventional methods are still widely used."],
  ["crucial", "adjective", "krusial, penting sekali", "Timing is crucial in the experiment."],
  ["cumulative", "adjective", "kumulatif", "The cumulative effect was significant."],
  ["deduce", "verb", "menyimpulkan", "From the clues, she deduced the answer."],
  ["deficient", "adjective", "kekurangan", "The diet was deficient in vitamins."],
  ["deliberate", "adjective", "sengaja, saksama", "It was a deliberate decision."],
  ["denote", "verb", "menandakan", "The symbol denotes addition."],
  ["deteriorate", "verb", "memburuk", "Air quality deteriorated over time."],
  ["devise", "verb", "merancang", "They devised a clever solution."],
  ["diminish", "verb", "berkurang, mengurangi", "Interest diminished after the launch."],
  ["distinct", "adjective", "jelas berbeda", "The two species are distinct."],
  ["diverse", "adjective", "beragam", "The team is culturally diverse."],
  ["dominant", "adjective", "dominan", "English is the dominant language of science."],
  ["elaborate", "verb / adjective", "menjelaskan rinci; rumit", "Please elaborate on your plan."],
  ["elicit", "verb", "memancing, memperoleh", "The survey elicited useful feedback."],
  ["eloquent", "adjective", "fasih, penuh daya ungkap", "She gave an eloquent speech."],
  ["emerge", "verb", "muncul", "New evidence has emerged."],
  ["empirical", "adjective", "empiris, berbasis data", "The claim needs empirical support."],
  ["enhance", "verb", "meningkatkan", "The tool enhances productivity."],
  ["enormous", "adjective", "sangat besar", "The project required enormous effort."],
  ["equivalent", "adjective / noun", "setara", "One dollar is not equivalent to one euro."],
  ["evident", "adjective", "jelas terlihat", "The benefits are evident."],
  ["exceed", "verb", "melampaui", "Demand exceeded supply."],
  ["explicit", "adjective", "eksplisit, gamblang", "Give explicit instructions."],
  ["facilitate", "verb", "memfasilitasi, memudahkan", "Technology facilitates learning."],
  ["fluctuate", "verb", "berfluktuasi", "Prices fluctuate daily."],
  ["fundamental", "adjective", "mendasar", "Trust is fundamental to teamwork."],
  ["hypothesis", "noun", "hipotesis", "The experiment tested the hypothesis."],
  ["implement", "verb", "menerapkan", "They implemented the new system."],
  ["implication", "noun", "implikasi", "The findings have policy implications."],
  ["inevitable", "adjective", "tak terhindarkan", "Some errors are inevitable."],
  ["infer", "verb", "menyimpulkan (dari petunjuk)", "We can infer the meaning from context."],
  ["inherent", "adjective", "melekat, bawaan", "There are risks inherent in the process."],
  ["innovative", "adjective", "inovatif", "They proposed an innovative design."],
  ["integral", "adjective", "menyatu, tak terpisahkan", "Testing is integral to development."],
  ["integrate", "verb", "memadukan", "The app integrates several tools."],
  ["intricate", "adjective", "rumit, berbelit", "The machine has an intricate design."],
  ["justify", "verb", "membenarkan, memberi alasan", "Justify your conclusion with data."],
  ["legitimate", "adjective", "sah, absah", "That is a legitimate concern."],
  ["magnitude", "noun", "besaran, skala", "The magnitude of the problem is huge."],
  ["mitigate", "verb", "meredakan, meringankan", "Measures to mitigate climate change are urgent."],
  ["negligible", "adjective", "dapat diabaikan", "The difference was negligible."],
  ["notion", "noun", "gagasan, anggapan", "The notion is widely accepted."],
  ["novel", "adjective", "baru, orisinal", "She proposed a novel method."],
  ["obscure", "adjective / verb", "kabur; mengaburkan", "The point was obscured by jargon."],
  ["ongoing", "adjective", "sedang berlangsung", "Research on the topic is ongoing."],
  ["paradigm", "noun", "paradigma, kerangka pikir", "The discovery caused a paradigm shift."],
  ["persistent", "adjective", "gigih, terus-menerus", "Persistent effort pays off."],
  ["phenomenon", "noun", "fenomena", "Migration is a global phenomenon."],
  ["plausible", "adjective", "masuk akal", "That is a plausible explanation."],
  ["precise", "adjective", "tepat, presisi", "Measurements must be precise."],
  ["predominant", "adjective", "yang utama, dominan", "Rice is the predominant crop."],
  ["prevalent", "adjective", "lazim, meluas", "The habit is prevalent among students."],
  ["prospective", "adjective", "calon, prospektif", "Prospective students visited the campus."],
  ["refute", "verb", "membantah, menyanggah", "New data refute the theory."],
  ["reinforce", "verb", "memperkuat", "Practice reinforces learning."],
  ["reluctant", "adjective", "enggan", "He was reluctant to change."],
  ["subsequent", "adjective", "berikutnya", "Subsequent tests confirmed the result."],
  ["sufficient", "adjective", "cukup, memadai", "We have sufficient data."],
  ["tentative", "adjective", "sementara, belum pasti", "The schedule is still tentative."],
  ["thorough", "adjective", "menyeluruh, teliti", "She did a thorough review."],
  ["undermine", "verb", "melemahkan", "Errors undermine credibility."],
  ["utilize", "verb", "memanfaatkan", "We utilize renewable energy."],
  ["valid", "adjective", "sahih, valid", "The argument is valid."],
  ["viable", "adjective", "dapat berjalan, layak", "It is a viable business model."],
  ["widespread", "adjective", "tersebar luas", "The technology is now widespread."],
];

// ===================== BEASISWA =====================
export const BEASISWA_STEPS: [string, string, string][] = [
  ["Persiapan awal", "3–6 bulan sebelum daftar", "Kumpulkan dokumen dasar, tingkatkan skor TOEFL ITP hingga memenuhi syarat, dan riset program S2 Teknik Informatika ITS."],
  ["Dapatkan LoA dari ITS", "Sebelum/selama pendaftaran", "Ikuti seleksi masuk Pascasarjana ITS untuk memperoleh Letter of Acceptance. LoA memperkuat berkasmu (sangat disarankan)."],
  ["Pendaftaran online LPDP", "Sesuai jadwal batch", "Buat akun, isi formulir, unggah dokumen, dan tulis esai komitmen serta rencana studi."],
  ["Seleksi Administrasi", "±1–2 minggu setelah tutup", "Panitia memverifikasi kelengkapan & keabsahan berkas. Pastikan semua dokumen valid dan sesuai format."],
  ["Seleksi Bakat Skolastik", "Setelah lolos administrasi", "Tes kemampuan verbal, kuantitatif, dan penalaran secara daring. Latih soal-soal penalaran."],
  ["Seleksi Substansi (Wawancara)", "Tahap akhir", "Wawancara mendalam soal motivasi, rencana studi, dan komitmen kembali ke Indonesia."],
  ["Pengumuman & Pengayaan", "Setelah dinyatakan lolos", "Ikuti tahap pengayaan (persiapan keberangkatan) lalu mulai studi di ITS."],
];

export const BEASISWA_DOCS: [string, string][] = [
  ["KTP & Kartu Keluarga", "Identitas diri yang masih berlaku."],
  ["Ijazah & Transkrip S1", "IPK memenuhi ambang minimum (umumnya ≥ 3,00)."],
  ["Sertifikat TOEFL ITP / IELTS", "Skor memenuhi syarat program & LPDP."],
  ["LoA dari ITS (disarankan)", "Letter of Acceptance dari Pascasarjana Teknik Informatika ITS."],
  ["Surat Rekomendasi", "Dari dosen/atasan (biasanya 1–2 surat)."],
  ["Esai Komitmen & Kontribusi", "Rencana kontribusi konkret bagi Indonesia."],
  ["Rencana Studi / Proposal", "Topik riset, mata kuliah, target lulus."],
  ["Surat Pernyataan", "Sesuai format resmi LPDP."],
  ["Sertifikat pendukung", "Prestasi, pengalaman organisasi, publikasi (jika ada)."],
];

export const RUBRIC: [string, string][] = [
  ["Menjawab prompt sepenuhnya", "Semua bagian pertanyaan terjawab, posisi/tesis jelas."],
  ["Struktur jelas", "Ada pembuka, isi berparagraf, dan penutup."],
  ["Ada contoh & alasan spesifik", "Bukan sekadar pernyataan umum."],
  ["Kalimat penghubung yang baik", "Transisi antar-ide mengalir."],
  ["Tata bahasa & tenses tepat", "Sedikit atau tanpa kesalahan mengganggu."],
  ["Ragam kosakata", "Menghindari pengulangan kata yang sama."],
  ["Panjang & waktu sesuai", "±250–350 kata dalam waktu latihan."],
];

export const SECTION_LABELS: Record<string, string> = {
  listening: "Listening",
  structure: "Structure",
  reading: "Reading",
};
