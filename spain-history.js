// Spain Football History & El Clásico Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initTimeline();
  initQuiz();
});

// Timeline Data with Unique Historical Imagery for Key Eras
const timelineData = [
  {
    year: '1889 - 1902',
    category: 'early',
    title: '足球傳入與西班牙首家俱樂部誕生',
    image: 'assets/spain/huelva_1889.jpg',
    desc: '英國力拓礦業礦工將現代足球引進安達盧西亞，1889年西班牙歷史最悠久的足球隊「韋爾瓦娛樂」（Recreativo de Huelva）正式成立。隨後瑞士人甘伯在1899年創立巴塞隆納，1902年馬德里足球俱樂部（皇馬前身）創立，同年為慶祝國王阿方索十三世登基創辦首屆國王盃。',
    tags: ['韋爾瓦創立', '甘伯創立巴薩', '馬德里FC誕生', '國王盃始祖']
  },
  {
    year: '1902',
    category: 'clasico',
    title: '歷史首次國家 Derby (El Clásico) 於馬德里賽馬場',
    image: 'assets/spain/first_clasico_1902.jpg',
    desc: '首屆加冕盃（國王盃前身）準決賽在馬德里賽馬場（Hipódromo de Madrid）的泥土地上開打，巴塞隆納以 3-1 擊敗馬德里FC。紳士們身著長袖翻領球衣，看台上圍滿頭戴圓頂禮帽的貴族球迷，兩大豪門長達百年的史詩恩怨自此破土而出。',
    tags: ['加冕盃首戰', '歷史首次交手', '百年死敵起點']
  },
  {
    year: '1929 - 1939',
    category: 'early',
    title: '西甲正式開打與西班牙內戰停擺',
    desc: '1929年西班牙甲級聯賽正式啟動，巴塞隆納贏得首屆西甲冠軍。但1936-1939年爆發慘烈內戰，佛朗哥將軍建立獨裁統治，聯賽被迫中斷三年。巴薩俱樂部主席蘇紐爾（Josep Sunyol）遭佛朗哥軍隊逮捕槍決，加泰隆尼亞文化遭到極端打壓，球場成為對抗極權的唯一象徵。',
    tags: ['西甲誕生', '內戰停擺', '政治清洗', '巴薩主席犧牲']
  },
  {
    year: '1943',
    category: 'clasico',
    title: '11-1 爭議慘案：佛朗哥威權下的綠茵陰影',
    desc: '大元帥盃（國王盃在獨裁時期的稱號）準決賽次回合，巴薩在首回合3-0領先情況下，次回合在馬德里客場遭到國家安全局長與軍警進更衣室恐嚇，最終以 1-11 慘敗給皇馬。這場比賽成為巴薩百年來難以抹滅的歷史受難傷疤。',
    tags: ['大元帥盃', '11-1歷史瘡疤', '政治高壓', '不可癒合之痛']
  },
  {
    year: '1953 - 1960',
    category: 'real',
    title: '迪斯蒂法諾加盟爭端與歐冠五連冠神話',
    image: 'assets/spain/vintage_distefano.jpg',
    desc: '「金箭」迪斯蒂法諾轉會爭議引發兩隊空前政治角力，足協一度裁定兩隊共享球員，巴薩憤而退出。迪斯蒂法諾披上白衣後率隊橫掃歐陸，連續包攬前五屆歐洲冠軍球會盃（1956-1960），確立皇馬世界足壇王者的崇高地位。',
    tags: ['金箭迪斯蒂法諾', '歐冠五連冠', '伯納烏主席', '純白王朝']
  },
  {
    year: '1973 - 1974',
    category: 'barca',
    title: '克魯伊夫降臨：反抗獨裁的精神旗幟',
    desc: '荷蘭飛人克魯伊夫以破紀錄身價加盟巴薩，並在伯納烏客場率隊以 5-0 狂勝皇馬，更給兒子取名為加泰隆尼亞守護聖人「約迪」（Jordi）。在佛朗哥統治暮期，克魯伊夫成為加泰隆尼亞反抗中央壓迫、爭取尊嚴的精神圖騰。',
    tags: ['克魯伊夫加盟', '伯納烏5-0', '加泰民族象徵', '浪漫反抗']
  },
  {
    year: '1988 - 1994',
    category: 'barca',
    title: '克魯伊夫執教「夢一隊」與拉瑪西亞哲學革新',
    image: 'assets/spain/cruyff_tikitaka.jpg',
    desc: '克魯伊夫以總教練身份回歸巴薩，建立以控球、空間幾何理解與高位逼搶為核心的戰術哲學，徹底改造「拉瑪西亞」青訓營。1992年在溫布利捧起巴薩隊史首座歐冠，並達成西甲四連冠，奠定傳控足球（Tiki-Taka）的思想火種。',
    tags: ['拉瑪西亞', '溫布利首冠', '夢一隊', '傳控思想奠基']
  },
  {
    year: '2000 - 2006',
    category: 'real',
    title: '銀河艦隊一期：齊達內「天外飛仙」與巨星時代',
    image: 'assets/spain/galacticos_zidane.jpg',
    desc: '佛羅倫提諾入主皇馬，開啟「一年一巨星」策略，以破紀錄天價挖角巴薩隊長菲戈（引發諾坎普球迷投擲豬頭洩憤的「豬頭門」），隨後齊達內、羅納度、貝克漢姆相繼加盟。2002年漢普頓公園球場，齊達內以一腳驚世駭俗的凌空抽射「天外飛仙」奪得第九冠！',
    tags: ['銀河艦隊一期', '齊達內天外飛仙', '菲戈叛逃', '一年一巨星']
  },
  {
    year: '2008 - 2012',
    category: 'spain',
    title: 'Tiki-Taka 稱霸世界：鬥牛士軍團大賽三連冠',
    image: 'assets/spain/spain_world_cup.jpg',
    desc: '西班牙國家隊摒棄兩大豪門政治隔閡，由哈維、伊涅斯塔、卡西利亞斯、拉莫斯攜手，將傳控幾何發揮到極致。接連奪下 2008 歐國盃、2010 世界盃與 2012 歐國盃，成為世界男子足球史上首個達成大賽三連冠的不可超越王朝！',
    tags: ['2010大力神盃', '大賽三連冠', '傳控巔峰', '歷史無冕王翻身']
  },
  {
    year: '2009 - 2018',
    category: 'clasico',
    title: '梅羅十年極限雙驕爭鋒：世紀 Derby 黃金盛世',
    image: 'assets/spain/messi_cr7.jpg',
    desc: '瓜迪奧拉率領的「六冠王巴薩夢三隊」 vs 穆里尼奧打造的「鐵血皇馬反擊戰艦」。梅西與 C 羅兩位當世球王長達近十年的巔峰正面對壘，幾乎包攬了該時期所有的金球獎與歐冠，將世紀 Derby 提升至全人類體育娛樂的極限天花板。',
    tags: ['梅西 vs C羅', '瓜穆相爭', '金球雙雄', '六冠王宇宙隊']
  },
  {
    year: '2014 - 2024',
    category: 'real',
    title: '皇馬十年奪六座歐冠：15冠王者神話',
    desc: '在齊達內與安切洛蒂執教下，皇馬先後達成歐冠三連霸壯舉，並在2024年拿下隊史第15座歐冠金盃。展現了無論處於何等絕境，都能憑藉強大勝者氣場、極速轉換與關鍵球星終結能力反殺對手的歐冠 DNA。',
    tags: ['歐冠三連冠', '第15座金盃', '安切洛蒂', '逆轉之王']
  },
  {
    year: '2024 - 2026',
    category: 'spain',
    title: '新一代青春風暴：亞馬爾與西班牙足球新盛世',
    image: 'assets/spain/yamal_euro2024.jpg',
    desc: '2024年歐國盃，年僅17歲的拉瑪西亞新星亞馬爾（Lamine Yamal）攜手尼科·威廉斯（Nico Williams）大放異彩，率西班牙全勝豪取第四座歐國盃冠軍。皇馬亦迎來貝林漢姆與姆巴佩加盟，西班牙足球迎來了嶄新輝煌的黃金未來。',
    tags: ['亞馬爾橫空出世', '2024歐國盃冠軍', '新銀河戰艦', '青春風暴']
  }
];

function initTimeline() {
  const container = document.getElementById('timeline-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function render(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? timelineData 
      : timelineData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      const node = document.createElement('div');
      node.className = `timeline-node ${isLeft ? 'left' : 'right'}`;

      const tagsHtml = item.tags.map(t => `<span class="tag-item">#${t}</span>`).join('');
      const imgHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-img" loading="lazy">` : '';

      node.innerHTML = `
        <div class="timeline-content">
          <span class="timeline-year">${item.year}</span>
          <h3>${item.title}</h3>
          ${imgHtml}
          <p>${item.desc}</p>
          <div class="timeline-tags">${tagsHtml}</div>
        </div>
      `;
      container.appendChild(node);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.getAttribute('data-filter'));
    });
  });

  render('all');
}

// Interactive Quiz Logic
const quizData = [
  {
    q: "1. 當你觀看一場足球比賽時，你最渴望看到哪種贏球方式？",
    options: [
      { text: "精妙絕倫的短傳配合、70%以上的控球率，如同下棋般拆解對手防線", side: "barca" },
      { text: "關鍵時刻巨星挺身而出、極速閃電反擊、在絕境中最後一分鐘逆轉取勝", side: "real" }
    ]
  },
  {
    q: "2. 對於俱樂部的核心價值，你更認同哪一種哲學？",
    options: [
      { text: "重用自家青訓培育的子弟兵，貫徹一致的技術哲學與地域文化榮譽", side: "barca" },
      { text: "匯集全世界最頂級的超級巨星，一切以冠軍獎盃與勝利為最高唯一準則", side: "real" }
    ]
  },
  {
    q: "3. 提到「西班牙足球」，你腦海中最先浮現的神話是？",
    options: [
      { text: "瓜迪奧拉與梅西的「六冠王」宇宙隊，以及哈維、伊涅斯塔的中場魔術", side: "barca" },
      { text: "15座歐洲冠軍獎盃的純白傳奇，迪斯蒂法諾與齊達內、C羅的霸氣王者姿態", side: "real" }
    ]
  }
];

let currentQ = 0;
let scores = { barca: 0, real: 0 };

function initQuiz() {
  const qTitle = document.getElementById('quiz-q-title');
  const qOptions = document.getElementById('quiz-options-container');
  const qResult = document.getElementById('quiz-result');
  const restartBtn = document.getElementById('quiz-restart-btn');

  function showQuestion(idx) {
    if (idx >= quizData.length) {
      showResult();
      return;
    }
    const cur = quizData[idx];
    qTitle.textContent = cur.q;
    qOptions.innerHTML = '';
    cur.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span>⚽</span> <span>${opt.text}</span>`;
      btn.addEventListener('click', () => {
        scores[opt.side]++;
        currentQ++;
        showQuestion(currentQ);
      });
      qOptions.appendChild(btn);
    });
  }

  function showResult() {
    qTitle.style.display = 'none';
    qOptions.style.display = 'none';
    qResult.style.display = 'block';

    const resultTitle = document.getElementById('quiz-result-title');
    const resultDesc = document.getElementById('quiz-result-desc');

    if (scores.barca > scores.real) {
      resultTitle.textContent = "💙❤️ 你的靈魂屬於：紅藍薩迷 (Culés)！";
      resultDesc.textContent = "你崇尚空間幾何、藝術控球與拉瑪西亞青訓信仰。對你來說，「足球不只是一項運動，更是傳遞哲學與信仰的藝術」！";
    } else {
      resultTitle.textContent = "👑🤍 你的靈魂屬於：純白美凌格 (Madridistas)！";
      resultDesc.textContent = "你擁有天生的大心臟與王者之志！崇尚巨星璀璨、永不言敗與在逆境中絕殺對手的霸氣。對你來說，歐冠獎盃與冠軍就是最高的尊嚴！";
    }
  }

  restartBtn.addEventListener('click', () => {
    currentQ = 0;
    scores = { barca: 0, real: 0 };
    qTitle.style.display = 'block';
    qOptions.style.display = 'flex';
    qResult.style.display = 'none';
    showQuestion(0);
  });

  showQuestion(0);
}
