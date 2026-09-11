// Premier League History & Evolution Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initTimeline();
  initQuiz();
});

// Timeline Data with Unique Historical Imagery and rich context
const timelineData = [
  {
    year: '1863',
    category: 'ancient',
    title: '倫敦共濟會酒館：英足總誕生與現代足球規則成型',
    desc: '1863年10月26日，11所倫敦俱樂部代表在共濟會酒館（Freemasons\' Tavern）聚會，正式創立世界歷史最悠久的足球主管機構英足總（The FA）。正式通過禁止用手持球、禁止踢人絆人的《劍橋規則》，宣告現代足球（Association Football）與橄欖球（Rugby）正式分流。',
    tags: ['共濟會酒館', '英足總誕生', '現代足球始祖', '劍橋規則']
  },
  {
    year: '1888',
    category: 'ancient',
    title: '世界第一個職業聯賽創立：老英甲與普雷斯頓不敗雙冠',
    desc: '阿斯頓維拉董事威廉·麥格雷戈寫信提議建立固定主客場聯賽，1888年「英格蘭足球聯賽」（The Football League）誕生，12支創始球隊參賽。首屆冠軍普雷斯頓北區（Preston North End）創下整季聯賽與足總盃均不敗奪冠的「最初的不敗之師」（The Proud Preston）。',
    tags: ['世界首個職業聯賽', '老英甲起源', '雙循環積分之祖', '普雷斯頓不敗']
  },
  {
    year: '1958',
    category: 'ancient',
    title: '慕尼黑空難與曼聯浴火重生：巴斯比寶貝神話',
    desc: '馬特·巴斯比爵士（Matt Busby）帶領才華橫溢的年輕曼聯軍團橫掃英格蘭。1958年歐冠作客返航遭遇慕尼黑空難，8名主力球員不幸罹難。十年後的1968年，巴斯比與空難倖存者博比·查爾頓爵士率隊在溫布利首奪歐洲冠軍盃，為英格蘭球會開啟歐陸征程。',
    tags: ['慕尼黑空難', '巴斯比寶貝', '溫布利首奪歐冠', '紅魔浴火精神']
  },
  {
    year: '1970s - 1980s',
    category: 'ancient',
    title: '香克利與佩斯利的利物浦紅色帝國霸權',
    desc: '比爾·香克利（Bill Shankly）重塑利物浦並留下一句名言：「足球無關生死，足球高於生死。」隨後鮑勃·佩斯利（Bob Paisley）接棒，在9年內豪奪6座老英甲冠軍與3座歐洲冠軍球會盃，確立英格蘭足球在歐洲的統治級地位。',
    tags: ['利物浦紅色王朝', '香克利名言', '佩斯利歐冠三冠', '安菲爾德神話']
  },
  {
    year: '1985 - 1990',
    category: 'ancient',
    title: '至暗時刻與浴火重生：海瑟爾、希斯堡與《泰勒報告》',
    desc: '1985年海瑟爾球場慘案導致英格蘭球隊遭歐洲全面禁賽5年；1989年希斯堡球場慘案97名球迷罹難。隨後英國政府發布劃時代的《泰勒報告》（Taylor Report），強制要求頂級球場拆除鐵絲網、全面改建為全座席。這場痛定思痛的改革，為1992年英超的誕生掃清了陰霾。',
    tags: ['至暗低谷', '歐戰全面禁賽', '希斯堡慘案', '泰勒報告全座席改革']
  },
  {
    year: '1992',
    category: 'founding',
    title: '英超破繭獨立：電視轉播與商業革命',
    image: 'assets/premier/premier_1992_breakaway.jpg',
    desc: '為了擺脫舊英格蘭足球聯賽體系對轉播權利益的束縛，22支頂級球會集體出走，於1992年5月27日正式成立英格蘭超級足球聯賽（FA Premier League）。與天空電視台（BSkyB）簽下史無前例的3.04億英鎊轉播天價合約，徹底改變世界足球商業版圖。',
    tags: ['脫離老英甲', '天空體育轉播約', '商業重構', '現代足球起點']
  },
  {
    year: '1992 - 1999',
    category: 'manu',
    title: '紅魔弗格森王朝與「92班」三冠王神話',
    desc: '亞歷克斯·弗格森爵士起用貝克漢姆、吉格斯、斯科爾斯、內維爾兄弟等青訓奇才「92班」（Class of 92）。1998-1999賽季，曼聯在諾坎普神奇逆轉拜仁慕尼黑，成為英格蘭首支囊括英超、足總盃與歐冠的「三冠王」偉大豪門。',
    tags: ['弗格森時間', '曼聯92班', '諾坎普三冠王', '紅魔初代目']
  },
  {
    year: '2003 - 2004',
    category: 'arsenal',
    title: '阿森納 49 場不敗金身：The Invincibles 傳奇',
    image: 'assets/premier/premier_invincibles_2004.jpg',
    desc: '溫格（Arsène Wenger）率領海布里槍手以 26 勝 12 平 0 負的非凡戰績奪得英超冠軍，創下整季不敗神話，並跨季締造 49 場不敗歷史紀錄。亨利、維埃拉、博格坎普的優雅進攻，獲英超官方特別授予唯一的「純金英超冠軍獎盃」。',
    tags: ['阿森納不敗奪冠', '純金英超金盃', '教授溫格', '亨利大帝']
  },
  {
    year: '2004 - 2008',
    category: 'chelsea',
    title: '盧布巨浪入主與穆里尼奧鐵血藍軍：打破雙雄壟斷',
    desc: '俄羅斯富豪阿布拉莫維奇收購切爾西，注入巨額資金引進世界巨星。「狂人」穆里尼奧降臨，以單季僅失 15 球的恐怖防守紀錄橫掃英超（2004-05），打破曼聯與阿森納長達十年的二元壟斷，確立「Big 4」歐戰爭霸格局。',
    tags: ['阿布金元時代', '狂人穆里尼奧', '單季失15球神蹟', 'Big 4 崛起']
  },
  {
    year: '2011 - 2012',
    category: 'mancity',
    title: '93:20 讀秒絕殺！阿奎羅開創曼城英超初冠',
    image: 'assets/premier/premier_aguero_2012.jpg',
    desc: '末輪爭冠最後時刻，曼城必須擊敗女王公園巡遊者（QPR）。在 1-2 落後進入補時的窒息局面下，哲科 91 分鐘扳平，隨後 93 分 20 秒阿奎羅（Agüero）冷靜擺脫推射絕殺！伊蒂哈德球場徹底沸騰，曼城憑淨勝球力壓同城死敵曼聯，奪下首座英超冠軍！',
    tags: ['93:20奇蹟', '阿奎羅讀秒絕殺', '淨勝球爭冠', '藍月王朝破曉']
  },
  {
    year: '2015 - 2016',
    category: 'miracle',
    title: '1 比 5000 狐狸城童話：萊斯特城震撼全球體壇',
    desc: '季前博彩公司開出 1 賠 5000 的天文奪冠賠率，前一季還在為保級苦戰的萊斯特城，在義大利教頭拉涅利帶領下，瓦爾迪連場破門破紀錄、坎特無處不在的攔截，締造了世界體育史上最不可思議的平民神話。',
    tags: ['1賠5000天文賠率', '狐狸城童話', '瓦爾迪勵志傳奇', '拉涅利']
  },
  {
    year: '2017 - 2022',
    category: 'mancity',
    title: '瓜迪奧拉 vs 克洛普：英超歷史最高分極限雙雄會',
    desc: '曼城在 2017-18 賽季成為英超史上首支「百分百神隊」（Centurions 100分）。隨後利物浦在克洛普調教下掀起高位重金屬壓迫風暴，2018-19 賽季曼城 98 分、利物浦 97 分的終極撕咬震古爍今，利物浦終在 2020 年斬獲隊史等待 30 年的首座英超金盃。',
    tags: ['曼城100分紀錄', '瓜克傳奇爭霸', '紅軍等待30年首冠', '極致戰術革命']
  },
  {
    year: '2023 - 2026',
    category: 'mancity',
    title: '曼城史無前例四連冠霸業與新群雄割據',
    desc: '哈蘭德（Erling Haaland）加盟橫掃射手榜打破單季進球紀錄，曼城在 2024 年達成英格蘭頂級聯賽 136 年歷史上唯一的「聯賽四連霸」（Four-in-a-row）。同時阿森納、利物浦青年軍、紐卡斯爾與阿斯頓維拉迅速崛起，英超競爭水準達到全盛頂峰。',
    tags: ['四連霸歷史神話', '哈蘭德打破紀錄', '群雄並起', '地表第一聯賽']
  }
];

// Initialize Timeline Component
function initTimeline() {
  const container = document.getElementById('timeline-container');
  const filterBtns = document.querySelectorAll('.timeline-controls .filter-btn');

  function render(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? timelineData 
      : timelineData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      const el = document.createElement('div');
      el.className = `timeline-item ${isLeft ? 'left' : 'right'}`;

      let imgHtml = '';
      if (item.image) {
        imgHtml = `
          <div class="timeline-img-box">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
        `;
      }

      const tagsHtml = item.tags.map(t => `<span class="timeline-tag">#${t}</span>`).join('');

      el.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-year">⏱️ ${item.year}</div>
          <h3 class="timeline-title">${item.title}</h3>
          ${imgHtml}
          <p class="timeline-desc">${item.desc}</p>
          <div class="timeline-tags">${tagsHtml}</div>
        </div>
      `;
      container.appendChild(el);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
}

// Interactive Fan Quiz
const quizQuestions = [
  {
    title: 'Q1. 當球隊在第 85 分鐘 0-1 落後時，你更期待看到何種逆轉方式？',
    options: [
      { text: '🩸 全隊瘋狂高位壓迫，在客隊半場狂轟濫炸，補時最後 1 秒頭球絕殺（熱血命硬）', club: 'manu_liverpool' },
      { text: '🎯 行雲流水的傳控幾何，撕開密集防線打入教科書般的配合進球（優雅美學）', club: 'arsenal_city' },
      { text: '🛡️ 鐵血肉搏逼搶獲得任意球，高空爭頂一錘定音，隨後全員封堵門線（實用硬漢）', club: 'chelsea_underdog' }
    ]
  },
  {
    title: 'Q2. 你心目中最完美的球隊引援與陣容構建策略是什麼？',
    options: [
      { text: '👑 不惜天價砸下當世最搶眼的超級巨星，打造橫掃歐洲的豪門霸氣', club: 'chelsea_city' },
      { text: '🌱 信任青訓天才與名帥戰術體系，培養富有俱樂部認同感的靈魂核心', club: 'arsenal_manu' },
      { text: '📊 數據分析精準淘寶，善用體能與精神屬性以弱勝強，締造草根傳奇', club: 'liverpool_underdog' }
    ]
  },
  {
    title: 'Q3. 在英超長達 38 輪的漫長殘酷賽程中，你最看重的是什麼特質？',
    options: [
      { text: '🏆 哪怕場面醜陋也能拿滿 3 分的「爭冠冠軍相」與恐怖穩定度', club: 'mancity' },
      { text: '🔥 永不言棄的死鬥意志，在安菲爾德或老特拉福德掀起震耳欲聾的紅色海嘯', club: 'liverpool_manu' },
      { text: '⚡ 令人窒息的快節奏對攻、青春風暴與不斷創新的現代足球戰術', club: 'arsenal' }
    ]
  }
];

const clubProfiles = {
  mancity: {
    name: '曼城 (Manchester City)',
    icon: '🩵',
    desc: '【完美主義者與戰術極客】你崇尚瓜迪奧拉極致的球場空間掌控、無懈可擊的傳控壓迫與無情收割比賽的冠軍穩定度。你相信真正的強大是把足球化為一門精準的藝術。'
  },
  liverpool: {
    name: '利物浦 (Liverpool)',
    icon: '🔴',
    desc: '【重金屬搖滾與信仰狂熱者】你心中激盪著「You\'ll Never Walk Alone」的赤誠信仰！熱愛激情四射的高位逼搶與大開大闔的快速反擊，深信球隊的靈魂建立在整座城市的共鳴與永不放棄的絕境逆轉中。'
  },
  arsenal: {
    name: '阿森納 (Arsenal)',
    icon: '⚪🔴',
    desc: '【理想主義與青春風暴倡導者】從溫格的不敗金身槍手到阿爾特塔的青年近衛軍，你追求賞心悅目的傳接配合與美學足球。即使在低谷期，也始終守護著對純粹足球的浪漫情懷。'
  },
  manu: {
    name: '曼聯 (Manchester United)',
    icon: '👹',
    desc: '【鐵血紅魔與弗格森精神繼承者】你迷戀老特拉福德夢劇場的輝煌底蘊、弗格森時間的讀秒奇蹟，以及92班血脈相承的傲骨。天生的豪門尊嚴讓你永遠渴望重返世界之巔。'
  },
  chelsea: {
    name: '切爾西 (Chelsea)',
    icon: '🦁💙',
    desc: '【無畏野心家與鐵血贏家】你崇尚強硬的身體對抗、無堅不摧的防守與大賽中的決絕殺氣。從阿布入主到兩度加冕歐冠，藍軍的基因就是用最直接的勝負慾征服一切懷疑。'
  },
  underdog: {
    name: '平民黑馬 (Like Leicester & Newcastle)',
    icon: '🦊',
    desc: '【熱血浪漫的下剋上信徒】你最愛的不是巨頭的橫行霸道，而是萊斯特城 1:5000 的狐狸城童話、維拉與紐卡的狂野突破！你相信在英超，只要拼盡每一分力氣，草根也能弒神！'
  }
};

function initQuiz() {
  const qTitle = document.getElementById('quiz-q-title');
  const optContainer = document.getElementById('quiz-options-container');
  const qBox = document.getElementById('quiz-question-container');
  const rBox = document.getElementById('quiz-result');
  const rTitle = document.getElementById('quiz-result-title');
  const rDesc = document.getElementById('quiz-result-desc');
  const restartBtn = document.getElementById('quiz-restart-btn');

  let currentQ = 0;
  let scores = { mancity: 0, liverpool: 0, arsenal: 0, manu: 0, chelsea: 0, underdog: 0 };

  function showQuestion() {
    if (currentQ >= quizQuestions.length) {
      showResult();
      return;
    }

    const q = quizQuestions[currentQ];
    qTitle.textContent = q.title;
    optContainer.innerHTML = '';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        applyScore(opt.club);
        currentQ++;
        showQuestion();
      });
      optContainer.appendChild(btn);
    });
  }

  function applyScore(type) {
    if (type === 'manu_liverpool') { scores.manu += 2; scores.liverpool += 2; }
    else if (type === 'arsenal_city') { scores.arsenal += 2; scores.mancity += 2; }
    else if (type === 'chelsea_underdog') { scores.chelsea += 2; scores.underdog += 2; }
    else if (type === 'chelsea_city') { scores.chelsea += 2; scores.mancity += 2; }
    else if (type === 'arsenal_manu') { scores.arsenal += 2; scores.manu += 2; }
    else if (type === 'liverpool_underdog') { scores.liverpool += 2; scores.underdog += 2; }
    else if (type === 'mancity') { scores.mancity += 3; }
    else if (type === 'liverpool_manu') { scores.liverpool += 2; scores.manu += 2; }
    else if (type === 'arsenal') { scores.arsenal += 3; }
  }

  function showResult() {
    qBox.style.display = 'none';
    rBox.classList.add('active');

    // Find top club
    let highestClub = 'mancity';
    let maxScore = -1;
    for (const [club, s] of Object.entries(scores)) {
      if (s > maxScore) {
        maxScore = s;
        highestClub = club;
      }
    }

    const res = clubProfiles[highestClub] || clubProfiles.mancity;
    rTitle.innerHTML = `<div class="quiz-result-club-icon">${res.icon}</div>你的英超靈魂主隊：${res.name}`;
    rDesc.textContent = res.desc;
  }

  restartBtn.addEventListener('click', () => {
    currentQ = 0;
    scores = { mancity: 0, liverpool: 0, arsenal: 0, manu: 0, chelsea: 0, underdog: 0 };
    rBox.classList.remove('active');
    qBox.style.display = 'block';
    showQuestion();
  });

  showQuestion();
}
