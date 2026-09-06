const footballData = {
  overview: {
    title: "歐洲職業足球生態系統",
    description: "歐洲職業足球是全球商業價值最高、競爭最激烈、組織結構最完善的體育生態。它由歐洲足協（UEFA）主導，結合了各國國內聯賽的金字塔升降級制、跨國三大盃賽的榮譽爭奪，以及多樣化的俱樂部所有權模式與嚴格的財務監管法案，共同交織出一個龐大且持續演進的足球帝國。",
    stats: [
      { label: "歐洲足協成員國", value: "55 個" },
      { label: "年總商業產值", value: "約 300 億歐元" },
      { label: "全球收視人口", value: "逾 30 億人" },
      { label: "職業球會數量", value: "上千家" }
    ]
  },
  bigFiveLeagues: [
    {
      id: "epl",
      name: "英格蘭超級聯賽",
      engName: "English Premier League (EPL)",
      country: "英格蘭",
      established: 1992,
      teams: 20,
      avgAttendance: "38,500+",
      revenue: "約 69 億歐元 (全球第一)",
      playStyle: "節奏極快、身體對抗激烈、攻防轉換迅速，注重高強度壓迫與長傳快攻。",
      relegationRules: "賽季末最後 3 名直接降級至英冠聯賽 (EFL Championship)。",
      uefaSlots: "前 4 名晉級歐冠分組賽；第 5 名與足總盃冠軍晉級歐聯；聯賽盃冠軍（或聯賽排名）晉級歐協聯。",
      competitiveness: "極高。擁有傳統「Big 6」豪門（曼城、阿森納、利物浦、切爾西、曼聯、熱刺），且中下游球隊因高額轉播權利金分配，亦具備極強購買力與爆冷實力，被譽為「世界第一聯賽」。",
      logoColor: "linear-gradient(135deg, #38003c 0%, #8b008b 100%)",
      accentColor: "#3d195a",
      teamsList: [
        "曼徹斯特城 (Manchester City)",
        "阿森納 (Arsenal)",
        "利物浦 (Liverpool)",
        "阿斯頓維拉 (Aston Villa)",
        "熱刺 (Tottenham Hotspur)",
        "切爾西 (Chelsea)",
        "曼徹斯特聯 (Manchester United)",
        "紐卡索聯 (Newcastle United)",
        "西漢姆聯 (West Ham United)",
        "布萊頓 (Brighton & Hove Albion)",
        "伯恩茅斯 (Bournemouth)",
        "水晶宮 (Crystal Palace)",
        "狼隊 (Wolverhampton Wanderers)",
        "富勒姆 (Fulham)",
        "艾佛頓 (Everton)",
        "布倫特福德 (Brentford)",
        "諾丁漢森林 (Nottingham Forest)",
        "萊斯特城 (Leicester City)",
        "伊普斯維奇 (Ipswich Town)",
        "南安普敦 (Southampton)",
        "柯文垂城 (Coventry City)"
      ]
    },
    {
      id: "laliga",
      name: "西班牙甲級聯賽",
      engName: "La Liga EA Sports",
      country: "西班牙",
      established: 1929,
      teams: 20,
      avgAttendance: "29,500+",
      revenue: "約 35 億歐元",
      playStyle: "極度重視控球、傳導配合、戰術紀律與精細的個人技術，比賽節奏相對英超慢但更細膩。",
      relegationRules: "賽季末最後 3 名直接降級至西乙聯賽 (Segunda División)。",
      uefaSlots: "前 4 名晉級歐冠分組賽；第 5 名與國王盃冠軍晉級歐聯；第 6 名晉級歐協聯。",
      competitiveness: "高。歷史上呈現「雙雄爭霸」（皇家馬德里與巴塞隆納）格局，近年馬德里競技亦有挑戰實力。西甲球隊在歐洲盃賽（歐冠及歐聯）中歷史統治力極強。",
      logoColor: "linear-gradient(135deg, #ee1c24 0%, #f7a81b 100%)",
      accentColor: "#ee1c24",
      teamsList: [
        "皇家馬德里 (Real Madrid)",
        "巴塞隆納 (FC Barcelona)",
        "馬德里競技 (Atlético Madrid)",
        "畢爾包競技 (Athletic Club)",
        "皇家社會 (Real Sociedad)",
        "皇家貝蒂斯 (Real Betis)",
        "吉羅納 (Girona FC)",
        "瓦倫西亞 (Valencia CF)",
        "塞維利亞 (Sevilla FC)",
        "比利亞雷爾 (Villarreal CF)",
        "奧薩蘇納 (CA Osasuna)",
        "赫塔費 (Getafe CF)",
        "塞爾塔維戈 (Celta de Vigo)",
        "馬約卡 (RCD Mallorca)",
        "巴列卡諾 (Rayo Vallecano)",
        "拉斯帕爾馬斯 (UD Las Palmas)",
        "阿拉維斯 (Deportivo Alavés)",
        "雷加利斯 (CD Leganés)",
        "皇家巴利亞多利德 (Real Valladolid)",
        "西班牙人 (RCD Espanyol)"
      ]
    },
    {
      id: "bundesliga",
      name: "德國甲級聯賽",
      engName: "Bundesliga",
      country: "德國",
      established: 1963,
      teams: 18,
      avgAttendance: "43,000+ (全球體育聯賽第一)",
      revenue: "約 32 億歐元",
      playStyle: "大開大合、高強度全場壓迫（Gegenpressing）、快速垂直推進與極佳的團隊體能素質，賽季總進球數偏高。",
      relegationRules: "最後 2 名直接降級至德乙；倒數第 3 名與德乙第 3 名進行雙回合升降級附加賽。",
      uefaSlots: "前 4 名晉級歐冠分組賽；第 5 名與德國盃冠軍晉級歐聯；第 6 名晉級歐協聯。",
      competitiveness: "中高。拜仁慕尼黑歷史上擁有絕對的統治地位（曾創下德甲 11 連冠），但多特蒙德、勒沃庫森等強權近年強勢崛起。德甲以健康的財政與極佳的現場球迷氣氛著稱。",
      logoColor: "linear-gradient(135deg, #d3010c 0%, #1e1e1e 100%)",
      accentColor: "#d3010c",
      teamsList: [
        "拜仁慕尼黑 (FC Bayern München)",
        "多特蒙德 (Borussia Dortmund)",
        "拜耳勒沃庫森 (Bayer 04 Leverkusen)",
        "RB萊比錫 (RB Leipzig)",
        "斯圖加特 (VfB Stuttgart)",
        "法蘭克福 (Eintracht Frankfurt)",
        "霍芬海姆 (TSG Hoffenheim)",
        "弗萊堡 (SC Freiburg)",
        "海登海姆 (1. FC Heidenheim)",
        "文達不萊梅 (SV Werder Bremen)",
        "沃爾夫斯堡 (VfL Wolfsburg)",
        "奧格斯堡 (FC Augsburg)",
        "門興格拉德巴赫 (Borussia Mönchengladbach)",
        "美因茲 05 (1. FSV Mainz 05)",
        "柏林聯 (1. FC Union Berlin)",
        "波鴻 (VfL Bochum)",
        "聖保利 (FC St. Pauli)",
        "霍爾斯坦基爾 (Holstein Kiel)"
      ]
    },
    {
      id: "seriea",
      name: "義大利甲級聯賽",
      engName: "Serie A",
      country: "義大利",
      established: 1898,
      teams: 20,
      avgAttendance: "29,000+",
      revenue: "約 26 億歐元",
      playStyle: "戰術深度極高，注重防守組織、空間封鎖、防守反擊與中場調度，比賽充滿智慧交鋒與防守藝術。",
      relegationRules: "賽季末最後 3 名直接降級至義乙聯賽 (Serie B)。",
      uefaSlots: "前 4 名晉級歐冠分組賽；第 5 名與義大利盃冠軍晉級歐聯；第 6 名晉級歐協聯。",
      competitiveness: "高。歷史上以「神聖同盟」（尤文圖斯、AC米蘭、國際米蘭）為首，近年那不勒斯、亞特蘭大、羅馬及拉齊奧等隊實力拉近，呈現群雄逐鹿的精彩局面，觀賞性大增。",
      logoColor: "linear-gradient(135deg, #0093d5 0%, #002f6c 100%)",
      accentColor: "#0093d5",
      teamsList: [
        "國際米蘭 (FC Internazionale Milano)",
        "AC米蘭 (AC Milan)",
        "尤文圖斯 (Juventus FC)",
        "亞特蘭大 (Atalanta BC)",
        "波隆那 (Bologna FC)",
        "羅馬 (AS Roma)",
        "拉齊奧 (SS Lazio)",
        "佛羅倫薩 (ACF Fiorentina)",
        "杜林 (Torino FC)",
        "那不勒斯 (SSC Napoli)",
        "熱那亞 (Genoa CFC)",
        "蒙札 (AC Monza)",
        "維羅納 (Hellas Verona FC)",
        "萊切 (US Lecce)",
        "烏迪內斯 (Udinese Calcio)",
        "卡利亞里 (Cagliari Calcio)",
        "恩波利 (Empoli FC)",
        "帕爾馬 (Parma Calcio)",
        "科莫 (Como 1907)",
        "威尼斯 (Venezia FC)"
      ]
    },
    {
      id: "ligue1",
      name: "法國甲級聯賽",
      engName: "Ligue 1 McDonald's",
      country: "法國",
      established: 1932,
      teams: 18,
      avgAttendance: "23,000+",
      revenue: "約 20 億歐元",
      playStyle: "節奏明快，極度依賴球員的爆發力與身體素質，防守緊密且極具侵略性，是歐洲最知名的「天才搖籃」。",
      relegationRules: "最後 2 名直接降級至法乙；倒數第 3 名與法乙附加賽勝者進行升降級附加賽。",
      uefaSlots: "前 3 名晉級歐冠分組賽，第 4 名參加歐冠資格賽；第 5 名與法國盃冠軍晉級歐聯；第 6 名晉級歐協聯。",
      competitiveness: "中。自卡達財團入主巴黎聖日耳曼（PSG）後，法甲基本呈現 PSG 一強獨大的局面。然而，里爾、摩納哥與馬賽等隊偶爾能發起挑戰。此聯賽為五大聯賽中主要的球員輸出地。",
      logoColor: "linear-gradient(135deg, #dae025 0%, #091c3e 100%)",
      accentColor: "#091c3e",
      teamsList: [
        "巴黎聖日耳曼 (Paris Saint-Germain)",
        "摩納哥 (AS Monaco)",
        "布雷斯特 (Stade Brestois 29)",
        "里爾 (LOSC Lille)",
        "尼斯 (OGC Nice)",
        "朗斯 (RC Lens)",
        "里昂 (Olympique Lyonnais)",
        "馬賽 (Olympique de Marseille)",
        "蘭斯 (Stade de Reims)",
        "雷恩 (Stade Rennais FC)",
        "土魯斯 (Toulouse FC)",
        "蒙彼利埃 (Montpellier HSC)",
        "斯特拉斯堡 (RC Strasbourg Alsace)",
        "勒哈費爾 (Le Havre AC)",
        "南特 (FC Nantes)",
        "歐塞爾 (AJ Auxerre)",
        "昂熱 (Angers SCO)",
        "聖埃蒂安 (AS Saint-Étienne)"
      ]
    }
  ],
  pyramids: {
    england: {
      country: "英格蘭",
      levels: [
        {
          tier: 1,
          name: "英格蘭超級聯賽 (Premier League)",
          teams: 20,
          description: "頂級聯賽，商業價值全球第一。賽季結束後倒數三名降級。",
          status: "professional"
        },
        {
          tier: 2,
          name: "英格蘭冠軍聯賽 (EFL Championship)",
          teams: 24,
          description: "次級聯賽，被公認為世界最富裕且競爭最激烈的「二級聯賽」。前兩名直接升級，第 3 至第 6 名進行升級附加賽爭奪最後一個升級名額（升級附加賽決賽被稱為價值上億英鎊的比賽）。最後三名降級。",
          status: "professional"
        },
        {
          tier: 3,
          name: "英格蘭甲級聯賽 (EFL League One)",
          teams: 24,
          description: "第三級別職業聯賽。前兩名直接升級，第 3 至第 6 名打附加賽爭奪一個升級名額。最後四名降級。",
          status: "professional"
        },
        {
          tier: 4,
          name: "英格蘭乙級聯賽 (EFL League Two)",
          teams: 24,
          description: "第四級別，也是英格蘭職業聯賽（EFL）的最低層級。前三名直接升級，第 4 至第 7 名打附加賽爭奪一個名額。最後兩名降級至半職業的全國聯賽。",
          status: "professional"
        },
        {
          tier: 5,
          name: "英格蘭全國聯賽 (National League)",
          teams: 24,
          description: "第五級別，是職業與半職業（Non-League）的交界處。冠軍直接升級，第 2 至第 7 名打附加賽爭取另一個升級名額。倒數四名降入第六級聯賽。",
          status: "semi-professional"
        }
      ]
    },
    spain: {
      country: "西班牙",
      levels: [
        {
          tier: 1,
          name: "西班牙甲級聯賽 (La Liga EA Sports)",
          teams: 20,
          description: "頂級聯賽，歷史上奪得歐戰冠軍次數最多的聯賽。賽季末倒數三名直接降級。",
          status: "professional"
        },
        {
          tier: 2,
          name: "西班牙乙級聯賽 (La Liga Hypermotion)",
          teams: 22,
          description: "次級聯賽。前兩名直接升級，第 3 至第 6 名（排除 B 隊）進行升級附加賽。最後四名降級。",
          status: "professional"
        },
        {
          tier: 3,
          name: "西班牙皇家足協第一聯賽 (Primera Federación)",
          teams: 40,
          description: "第三級別聯賽，分為兩個分區（每區 20 隊）。兩分區冠軍直接升級，第 2 至第 5 名打附加賽爭奪另外兩個升級名額。每區倒數五名降級。",
          status: "semi-professional"
        }
      ]
    }
  },
  uefaCompetitions: [
    {
      id: "ucl",
      name: "歐洲冠軍聯賽",
      shortName: "歐冠 (UCL)",
      prestige: "★★★★★",
      description: "歐洲俱樂部賽事的最高殿堂，聚集了歐洲各大聯賽最頂尖的球隊。奪得歐冠冠軍是每家俱樂部的終極夢想，也是衡量一家豪門球隊是否取得「大滿貫」的核心指標。",
      format: "自 2024/25 賽季起改制為「瑞士制 (Swiss Model)」，參賽隊數增加至 36 隊。所有球隊在單一積分榜中競爭，每隊在聯賽階段與 8 個不同的對手交手（4 主 4 客）。前 8 名直接晉級 16 強，第 9 至 24 名進行雙回合附加賽爭奪剩餘 8 個席位，25 名及以下直接淘汰，不再降入歐聯。",
      eligibility: "五大聯賽前四名、其他歐洲主流聯賽的冠亞軍，或通過外圍賽晉級。"
    },
    {
      id: "uel",
      name: "歐洲聯賽",
      shortName: "歐聯 (UEL)",
      prestige: "★★★★☆",
      description: "歐洲次級俱樂部賽事。參賽球隊包括五大聯賽的國內盃賽冠軍、聯賽第五名（或第六名），以及在歐冠資格賽淘汰的球隊。競爭同樣極為激烈，冠軍可直接獲得下賽季歐冠分組賽門票。",
      format: "同樣採取 36 隊「瑞士制」，聯賽階段每隊踢 8 場比賽。前 8 名直接晉級 16 強，第 9 至 24 名打附加賽。淘汰機制與歐冠相同，25 名及以下直接出局，不降入歐協聯。",
      eligibility: "頂級聯賽中游偏上球隊、足協盃賽冠軍，以及歐冠附加賽出局者。"
    },
    {
      id: "uecl",
      name: "歐洲協會聯賽",
      shortName: "歐協聯 (UECL)",
      prestige: "★★★☆☆",
      description: "歐洲第三級別俱樂部賽事，於 2021 年增設。主要目的是為了讓中小型聯賽（如北歐、東歐及巴爾幹地區）的俱樂部有更多參與歐洲賽事的機會，並讓五大聯賽的第六或第七名球隊參與。冠軍可直升下季歐聯。",
      format: "36 隊「瑞士制」，但聯賽階段每隊踢 6 場比賽（3 主 3 客）。前 8 名晉級 16 強，第 9 至 24 名進行附加賽。",
      eligibility: "各聯賽排名較後的歐戰資格獲得者（通常為英超聯賽盃冠軍或聯賽第七名）、歐聯外圍賽淘汰者。"
    }
  ],
  ownershipModels: [
    {
      id: "socios",
      name: "球迷會員制 (Socios / 50+1 Rule)",
      description: "球會由球迷會員共同擁有，並以民主選舉產生主席和管理層。在德國，更有著名的「50+1」政策，即球會的母會必須擁有至少 51% 的表決權，防止外部資本完全掌控球隊。",
      pros: "球會文化得以完整保留，票價通常非常親民，避免球會被無良外資投機或破產變賣。",
      cons: "無法直接引進超級財團的無限資金，在轉會市場上的購買力完全仰賴球會自身的商業開發與門票收入，融資難度高。",
      examples: "皇家馬德里、巴塞隆納、拜仁慕尼黑、多特蒙德。"
    },
    {
      id: "private",
      name: "私有財團與主權基金 (Private & State-Backed)",
      description: "球會股權由個人富商、企業集團或國家主權財富基金（Sovereign Wealth Funds）全資或多數持有。近年來，來自中東的石油資本與美國私募股權基金成為這類模式的主力。",
      pros: "能夠在極短時間內注入天文數字的資金，興建球場、升級訓練基地、引進世界級巨星與教練，迅速提升戰績。",
      cons: "球會淪為資本博弈或國家公關（Sportswashing）的工具，一旦老闆撤資，球會可能面臨破產深淵；且容易違反財務公平法案。",
      examples: "曼城（阿布達比財團 CFG）、巴黎聖日耳曼（卡達 QSI）、紐卡索聯（沙烏地阿拉伯主權基金 PIF）、切爾西（美國聯席資本）。"
    },
    {
      id: "mco",
      name: "多球會營運模式 (Multi-Club Ownership)",
      description: "同一家母公司或投資集團在多個國家同時擁有並營運多家足球會。這些球會之間形成網絡，進行資源共享、數據共通與球員內部輸送。",
      pros: "年輕球員可以在集團內部低級別球會歷練，成熟後內部低成本轉會至核心球會；全球球探網絡共享，極大降低營運成本。",
      cons: "中下游的子球會淪為「衛星隊」或「養人基地」，失去獨立爭奪最高榮譽的雄心，被指責破壞體育公平性。",
      examples: "城市足球集團 (City Football Group - 旗下有曼城、吉羅納、紐約城、橫濱水手等 13 隊)、紅牛集團 (Red Bull - 旗下有萊比錫、薩爾斯堡、紐約紅牛等)。"
    }
  ],
  financialRules: {
    title: "財務公平法案 (FFP) 與利潤與永續發展規則 (PSR)",
    description: "為了解決俱樂部因過度透支而面臨破產的危機，並抑制金元足球帶來的無序擴張，歐洲足協與英超聯賽分別制定了嚴格的財務規則。",
    rulesList: [
      {
        name: "UEFA FFP / 財務永續規則 (Financial Sustainability Regulations)",
        detail: "核心要求是球會必須「收支平衡 (Break-even requirement)」。在特定週期內，球會的虧損額度有嚴格上限。自 2023 年起，引入「球員成本控制比例」——球隊的薪資、轉會費攤銷及經紀人佣金總和，最終不得超過球會總收入的 70%。"
      },
      {
        name: "英超 PSR (Profit and Sustainability Rules)",
        detail: "英超特有的財務規則，規定球會在連續三個賽季內的累計虧損不得超過 1.05 億英鎊。若虧損超出此限制，球會將面臨巨額罰款，甚至最嚴厲的「聯賽扣分」處罰。近年如艾佛頓 (Everton) 與諾丁漢森林 (Nottingham Forest) 都曾因違反 PSR 被扣除聯賽積分，直接影響保級形勢。"
      }
    ],
    impact: "這些財務法案改變了足壇生態：豪門球隊無法再單靠老闆無底線地「掏腰包」買人，必須極力提升自身的商業贊助與球員出售收益；而中小型球隊在引進投資時也面臨更多掣肘，階級固化與帳務技巧（如利用折舊攤銷或出售球場關聯交易）成為新的博弈焦點。"
  },
  clubs: [
    { name: "皇家馬德里", engName: "Real Madrid CF", league: "西甲", tier: 1, ownership: "球迷會員制 (Socios)", owner: "全體會員 (主席：Florentino Pérez)", desc: "西甲頂級豪門，奪得歐冠冠軍次數最多（15次以上）的球隊，歷史上最成功的俱樂部。實行完全的會員制選舉。" },
    { name: "巴塞隆納", engName: "FC Barcelona", league: "西甲", tier: 1, ownership: "球迷會員制 (Socios)", owner: "全體會員 (主席：Joan Laporta)", desc: "西甲傳統豪門，以拉瑪西亞青訓營及傳控足球（Tiki-Taka）聞名全球，同樣為會員制球會，近年面臨較為嚴重的財務危機。" },
    { name: "曼徹斯特聯", engName: "Manchester United FC", league: "英超", tier: 1, ownership: "私有財團 (上市公司)", owner: "格雷澤家族 (Glazer Family) & 拉特克里夫爵士 (Jim Ratcliffe / INEOS)", desc: "英格蘭歷史底蘊最深、商業產值最高的球會之一，目前由美國格雷澤家族與英國化工巨頭 INEOS 共同持股與管理。" },
    { name: "曼徹斯特城", engName: "Manchester City FC", league: "英超", tier: 1, ownership: "多球會營運/主權基金背景", owner: "城市足球集團 (CFG - 主要控股：阿布達比聯合集團)", desc: "近年英超統治者，城市足球集團（CFG）旗艦球會，背靠阿聯酋主權資本，在瓜迪奧拉帶領下奪得歷史性三冠王。" },
    { name: "阿森納", engName: "Arsenal FC", league: "英超", tier: 1, ownership: "私有財團", owner: "克倫克體育娛樂集團 (Kroenke Sports & Entertainment)", desc: "英超傳統豪門，擁有不敗奪冠等輝煌歷史，完全由美國體育大亨克倫克控制，近年重返爭冠行列。" },
    { name: "利物浦", engName: "Liverpool FC", league: "英超", tier: 1, ownership: "私有財團", owner: "芬威體育集團 (Fenway Sports Group - FSG)", desc: "英格蘭老牌豪門，與曼聯為歷史宿敵。由美國芬威集團經營，強調以數據分析 and 性價比轉會進行科學化管理。" },
    { name: "拜仁慕尼黑", engName: "FC Bayern München", league: "德甲", tier: 1, ownership: "球迷會員制 (德甲 50+1)", owner: "拜仁慕尼黑會員 (75.1% 股份，其餘為阿迪達斯、奧迪、安聯持股)", desc: "德甲絕對霸主，財政極其健康，徹底貫徹德甲 50+1 政策，球迷擁有最高話語權，是歐洲健康經營的典範。" },
    { name: "多特蒙德", engName: "Borussia Dortmund (BVB)", league: "德甲", tier: 1, ownership: "球迷會員制 (德甲 50+1 / 上市公司)", owner: "多特蒙德會員 (主要控股)", desc: "德甲勁旅，以「黃色風暴」魔鬼主場威斯特法倫球場及全歐最高的場均上座率著稱，擅長發掘年輕天才並高價售出。" },
    { name: "國際米蘭", engName: "FC Internazionale Milano", league: "意甲", tier: 1, ownership: "私有財團/私募股權", owner: "橡樹資本 (Oaktree Capital - 美國私募股權基金)", desc: "意甲豪門，曾創下三冠王偉業。近年因前持股者蘇寧集團債務違約，股權被美國債權人橡樹資本強制接管。" },
    { name: "尤文圖斯", engName: "Juventus FC", league: "意甲", tier: 1, ownership: "私有財團 (上市公司)", owner: "阿涅利家族 (Agnelli Family - EXOR 集團)", desc: "意甲歷史奪冠次數最多的球會，由義大利工業巨頭阿涅利家族控制超過百年，近年經歷了財務造假案處罰與重組。" },
    { name: "巴黎聖日耳曼", engName: "Paris Saint-Germain FC (PSG)", league: "法甲", tier: 1, ownership: "私有財團/主權基金背景", owner: "卡達體育投資公司 (QSI)", desc: "法甲現代超級霸主，2011年被卡達主權資本收購後迅速成為金元足球代表，曾簽下內馬爾、姆巴佩與梅西等超級巨星。" },
    { name: "吉羅納", engName: "Girona FC", league: "西甲", tier: 1, ownership: "多球會營運 (MCO)", owner: "城市足球集團 (CFG - 47% 股份)", desc: "西班牙加泰隆尼亞地區俱樂部，身為城市足球集團旗下子球會，共享球探與球員租借資源，近年在西甲奇蹟般取得歷史性突破。" },
    { name: "薩爾斯堡紅牛", engName: "FC Red Bull Salzburg", league: "奧地利超級聯賽", tier: 1, ownership: "多球會營運 (MCO)", owner: "紅牛集團 (Red Bull)", desc: "奧地利霸主，紅牛集團足球版圖的起點之一，作為集團的人才孵化基地，曾培養出哈蘭德、索博斯洛伊等頂級巨星。" },
    { name: "科莫 1907", engName: "Como 1907", league: "意甲", tier: 1, ownership: "私有財團", owner: "Djarum Group (印尼煙草與金融巨頭黃氏兄弟)", desc: "義大利風景區科莫的球會，由印尼巨富黃氏家族收購，邀請法布雷加斯等名宿執教與參股，近年一路升級重返意甲。" }
  ],
  legendaryClubs: [
    {
      id: "rm-legend",
      name: "皇家馬德里",
      engName: "Real Madrid CF",
      era: "歐冠之王與銀河戰艦",
      achievement: "🏆 15座歐洲冠軍聯賽冠軍 (歷史第一)",
      peakPeriod: "1956-1960 (五連冠) / 2014-2018 (五年四冠) / 2022-2024",
      story: "皇家馬德里是足壇無可爭議的最高殿堂。從1950年代迪斯蒂法諾和普斯卡什橫掃歐洲奪得歐冠前五屆冠軍，到2000年代佛羅倫蒂諾開創「銀河戰艦 (Galácticos)」巨星政策，再到C羅時期創下歐冠改制後絕無僅有的「三連霸」神話，皇馬代表著極致的榮譽感與必勝信念。2024年皇馬再次奪得第15座歐冠，確立了其跨世紀的絕對統治力。",
      keyPlayers: "迪斯蒂法諾、普斯卡什、席丹、C.羅納度、莫德里奇、本澤馬、貝爾",
      bgColor: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
      accentColor: "#b45309"
    },
    {
      id: "barca-legend",
      name: "巴塞隆納",
      engName: "FC Barcelona",
      era: "夢三宇宙隊與六冠王",
      achievement: "🏆 2009年六冠王 / 2015年五冠王 / Tiki-Taka 戰術革命",
      peakPeriod: "2008-2012 (瓜迪奧拉執教時期) / 2014-2016 (MSN三叉戟)",
      story: "巴塞隆納在瓜迪奧拉帶領下開創了現代足壇最震撼的「夢三王朝」。他們依靠拉瑪西亞青訓營培養的梅西、哈維、伊涅斯塔等核心，以窒息般的 Tiki-Taka 控球傳導戰術風靡全球，在2009年創下史無前例的「六冠王」偉業。2015年，由梅西、蘇亞雷斯、內馬爾組成的「MSN」三叉戟橫掃歐洲，再次奪得三冠王，其華麗的進攻風格成為歷史經典。",
      keyPlayers: "梅西、哈維、伊涅斯塔、普約爾、蘇亞雷斯、內馬爾、克魯伊夫",
      bgColor: "linear-gradient(135deg, #004d98 0%, #a50044 100%)",
      accentColor: "#f59e0b"
    },
    {
      id: "milan-legend",
      name: "AC米蘭",
      engName: "AC Milan",
      era: "紅黑不敗神話與荷蘭三劍客",
      achievement: "🏆 意甲 58 場不敗紀錄 (五大聯賽歷史第一) / 7次歐冠冠軍",
      peakPeriod: "1988-1990 (薩基王朝) / 1991-1993 (卡佩羅不敗之師)",
      story: "1980年代末至90年代初，AC米蘭在貝魯斯柯尼的資金支持下迎來黃金時代。由巴斯滕、古利特、里傑卡爾德組成的「荷蘭三劍客」，搭配巴雷西、馬爾蒂尼的鋼鐵防線，在薩基指導下橫掃歐洲。隨後名帥卡佩羅執教期間，更創下了驚人的聯賽「連續 58 場不敗」神話，被公認為足球歷史上攻防平衡最完美的王者之師。",
      keyPlayers: "范巴斯滕、古利特、里傑卡爾德、巴雷西、馬爾蒂尼、卡卡、舍甫琴科",
      bgColor: "linear-gradient(135deg, #e50012 0%, #000000 100%)",
      accentColor: "#fbbf24"
    },
    {
      id: "bayern-legend",
      name: "拜仁慕尼黑",
      engName: "FC Bayern München",
      era: "德甲巨人與歐洲新霸主",
      achievement: "🏆 2013年 & 2020年兩次三冠王 / 德甲十一連冠",
      peakPeriod: "1974-1976 (歐冠三連冠) / 2012-2013 (海因克斯) / 2020 (弗里克六冠王)",
      story: "拜仁慕尼黑代表著德國足球的鋼鐵意志與科學化經營。1970年代在「凱撒大帝」貝肯鮑爾帶領下實現歐冠三連冠。新世紀以來，拜仁在2013年（「羅貝里」組合巔峰）和2020年（全場高壓逼搶、歐冠全勝奪冠）兩次加冕「三冠王」，其中2020年更追平巴薩的六冠王神蹟，展現了強大無比的身體對抗與進攻壓迫力。",
      keyPlayers: "貝肯鮑爾、蓋德穆勒、拉姆、施魏因施泰格、羅本、里貝里、萊萬多夫斯基、穆勒",
      bgColor: "linear-gradient(135deg, #dc052d 0%, #0066b2 100%)",
      accentColor: "#f59e0b"
    },
    {
      id: "manutd-legend",
      name: "曼徹斯特聯",
      engName: "Manchester United FC",
      era: "紅魔三冠王與弗格森帝國",
      achievement: "🏆 1999年英超歷史唯一三冠王 / 20次英格蘭頂級聯賽冠軍",
      peakPeriod: "1998-1999 (三冠王) / 2007-2009 (C羅與魯尼雙子星)",
      story: "曼聯的輝煌歷史深深刻有弗格森爵士的烙印。1999年，由碧咸、吉格斯、斯科爾斯等「92班」黃金一代領銜的紅魔，在歐冠決賽補時階段上演不可思議的驚天逆轉擊敗拜仁，奪得英超歷史唯一的「三冠王」偉業。2008年，曼聯憑藉C羅、魯尼和特維斯的黃金鋒線，再次稱霸歐洲，確立了「紅魔帝國」的統治地位。",
      keyPlayers: "弗格森 (領隊)、碧咸、吉格斯、斯科爾斯、簡東拿、C.羅納度、魯尼",
      bgColor: "linear-gradient(135deg, #da291c 0%, #000000 100%)",
      accentColor: "#fbeb30"
    },
    {
      id: "liverpool-legend",
      name: "利物浦",
      engName: "Liverpool FC",
      era: "紅軍王朝與伊斯坦堡奇蹟",
      achievement: "🏆 1970-80年代稱霸歐洲 / 2005年伊斯坦堡驚天逆轉 / 6次歐冠冠軍",
      peakPeriod: "1977-1984 (香克利與派斯奠基) / 2005 (貝尼特斯奇蹟) / 2019-2020 (克洛普時代)",
      story: "利物浦在1970至80年代曾是全歐洲最令人畏懼的紅色力量，狂奪4次歐冠與多座聯賽冠軍。2005年歐冠決賽，利物浦在半場0-3落後AC米蘭的絕境下，下半場6分鐘內連追3球，最終點球大戰奪冠，史稱「伊斯坦堡奇蹟」。近年在克洛普執教下，紅軍以極具侵略性的「搖滾足球」重返歐洲之巔，並奪得隊史首座英超冠軍。",
      keyPlayers: "達格利什、索內斯、傑拉德、阿隆索、薩拉赫、范戴克、克洛普 (領隊)",
      bgColor: "linear-gradient(135deg, #c8102e 0%, #00b050 100%)",
      accentColor: "#f6eb61"
    },
    {
      id: "ajax-legend",
      name: "阿賈克斯",
      engName: "AFC Ajax",
      era: "全攻全守革命與青訓搖籃",
      achievement: "🏆 1971-1973 歐冠三連冠 / 全攻全守 (Total Football) 鼻祖",
      peakPeriod: "1970-1973 (克魯伊夫時期) / 1995 (青年軍奪冠)",
      story: "阿賈克斯對現代足球戰術發展做出了無與倫比的貢獻。1970年代，傳奇巨星克魯伊夫與名帥米歇爾斯在此開創了「全攻全守」足球革命，模糊了場上球員的固定位置限制，憑此橫掃歐洲奪得歐冠三連冠。1995年，范加爾帶領平均年齡僅23歲的自家青訓青兵，再次奪得歐冠，確立了他們作為「世界青訓第一搖籃」的尊貴地位。",
      keyPlayers: "克魯伊夫、內斯肯斯、范巴斯滕、里傑卡爾德、博格坎普、西多夫、克魯伊維特",
      bgColor: "linear-gradient(135deg, #ffffff 0%, #d2122e 100%)",
      accentColor: "#0f172a"
    },
    {
      id: "arsenal-legend",
      name: "阿森納",
      engName: "Arsenal FC",
      era: "英超 49 場不敗之師",
      achievement: "🏆 2003-2004 賽季英超不敗奪冠 (The Invincibles) / 49場不敗紀錄",
      peakPeriod: "2003-2004 賽季",
      story: "在名帥溫格的執教下，2003-04賽季的阿森納寫下了英超歷史上最難以企及的神話。他們以26勝12平的「不敗戰績」捧得英超金盃，隨後將不敗紀錄延續至跨季的49場。陣中亨利和皮雷的高速進攻、維埃拉的鐵血中場，搭配極具觀賞性的水銀瀉地式短傳配合，讓這支球隊被載入史冊，公認為英超歷史上最強的藝術之師。",
      keyPlayers: "亨利、皮雷、維埃拉、柏金、坎貝爾、阿什利科爾、溫格 (領隊)",
      bgColor: "linear-gradient(135deg, #ef0107 0%, #063672 100%)",
      accentColor: "#fbeb30"
    },
    {
      id: "inter-legend",
      name: "國際米蘭",
      engName: "FC Internazionale Milano",
      era: "大國際時代與狂人三冠王",
      achievement: "🏆 2010年義大利歷史唯一三冠王 / 1960年代大國際時代 (Grande Inter)",
      peakPeriod: "1963-1965 (赫雷拉鏈式防守) / 2009-2010 (穆里尼奧鐵血之師)",
      story: "國際米蘭的輝煌在於將「防守戰術」發揮到極致。1960年代在名帥赫雷拉帶領下，開創「鏈式防守 (Catenaccio)」奪得歐冠連冠。2010年，在「狂人」穆里尼奧執教下，國米憑藉堅不可摧的防線與高效的反擊戰術，在歐冠中接連擊敗車路士、巴薩、拜仁，奪得義大利足球歷史至今唯一的「三冠王」神蹟，寫下戰術史上的防守巔峰。",
      keyPlayers: "馬佐拉、法切蒂、薩內蒂、米利托、斯內德、埃托奧、穆里尼奧 (領隊)",
      bgColor: "linear-gradient(135deg, #0066b2 0%, #000000 100%)",
      accentColor: "#f59e0b"
    },
    {
      id: "juventus-legend",
      name: "尤文圖斯",
      engName: "Juventus FC",
      era: "斑馬軍團與意甲霸權",
      achievement: "🏆 意甲歷史最多奪冠 (36次) / 2011-2020 聯賽九連冠",
      peakPeriod: "1982-1985 (普拉蒂尼時期) / 1996-1998 (里皮執教) / 2011-2019",
      story: "尤文圖斯是義大利國內賽場的絕對统治者。無論足壇風雲如何變幻，尤文圖斯始終保持著無與倫比的穩定。從80年代普拉蒂尼領銜稱霸，到90年代里皮帶領皮耶羅奪得歐冠，再到2011-2020年間創下空前絕後的「意甲九連冠」霸業。斑馬軍團強調嚴格的紀律性、戰術執行力以及強大的防守靈魂，是義大利足球長青樹。",
      keyPlayers: "普拉蒂尼、巴喬、皮耶羅、布馮、內德維德、基耶利尼、皮爾洛",
      bgColor: "linear-gradient(135deg, #000000 0%, #ffffff 100%)",
      accentColor: "#fbbf24"
    }
  ],
  clubLocations: [
    /* 英格蘭超級聯賽 (Premier League) */
    { name: "曼城", engName: "Manchester City", league: "英超", leagueKey: "epl", city: "曼徹斯特 (Manchester)", stadium: "阿提哈德球場 (Etihad Stadium)", capacity: 53400, lat: 53.4831, lng: -2.2004 },
    { name: "阿森納", engName: "Arsenal", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "酋長球場 (Emirates Stadium)", capacity: 60704, lat: 51.5549, lng: -0.1084 },
    { name: "利物浦", engName: "Liverpool", league: "英超", leagueKey: "epl", city: "利物浦 (Liverpool)", stadium: "安菲爾德球場 (Anfield)", capacity: 61276, lat: 53.4308, lng: -2.9608 },
    { name: "阿斯頓維拉", engName: "Aston Villa", league: "英超", leagueKey: "epl", city: "伯明罕 (Birmingham)", stadium: "維拉公園球場 (Villa Park)", capacity: 42682, lat: 52.5091, lng: -1.8848 },
    { name: "熱刺", engName: "Tottenham Hotspur", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "托特納姆熱刺球場 (Tottenham Hotspur Stadium)", capacity: 62850, lat: 51.6043, lng: -0.0664 },
    { name: "切爾西", engName: "Chelsea", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "史丹佛橋球場 (Stamford Bridge)", capacity: 40341, lat: 51.4817, lng: -0.1910 },
    { name: "紐卡索聯", engName: "Newcastle United", league: "英超", leagueKey: "epl", city: "紐卡索 (Newcastle)", stadium: "聖詹姆士公園球場 (St. James' Park)", capacity: 52305, lat: 54.9756, lng: -1.6217 },
    { name: "曼徹斯特聯", engName: "Manchester United", league: "英超", leagueKey: "epl", city: "曼徹斯特 (Manchester)", stadium: "老特拉福球場 (Old Trafford)", capacity: 74310, lat: 53.4631, lng: -2.2913 },
    { name: "西漢姆聯", engName: "West Ham United", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "倫敦體育場 (London Stadium)", capacity: 62500, lat: 51.5387, lng: -0.0166 },
    { name: "水晶宮", engName: "Crystal Palace", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "塞爾赫斯特公園球場 (Selhurst Park)", capacity: 25486, lat: 51.3983, lng: -0.0855 },
    { name: "布萊頓", engName: "Brighton & Hove Albion", league: "英超", leagueKey: "epl", city: "布萊頓 (Brighton)", stadium: "美國運通球場 (Amex Stadium)", capacity: 31876, lat: 50.8616, lng: -0.0837 },
    { name: "伯恩茅斯", engName: "AFC Bournemouth", league: "英超", leagueKey: "epl", city: "伯恩茅斯 (Bournemouth)", stadium: "活力球場 (Vitality Stadium)", capacity: 11307, lat: 50.7353, lng: -1.8383 },
    { name: "富勒姆", engName: "Fulham", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "克拉文農莊球場 (Craven Cottage)", capacity: 25700, lat: 51.4749, lng: -0.2217 },
    { name: "狼隊", engName: "Wolverhampton Wanderers", league: "英超", leagueKey: "epl", city: "伍爾弗漢普頓 (Wolverhampton)", stadium: "莫利紐克斯球場 (Molineux Stadium)", capacity: 31750, lat: 52.5902, lng: -2.1304 },
    { name: "埃弗頓", engName: "Everton", league: "英超", leagueKey: "epl", city: "利物浦 (Liverpool)", stadium: "葛迪遜公園球場 (Goodison Park)", capacity: 39572, lat: 53.4389, lng: -2.9664 },
    { name: "布倫特福德", engName: "Brentford", league: "英超", leagueKey: "epl", city: "倫敦 (London)", stadium: "Gtech 社區球場 (Gtech Community Stadium)", capacity: 17250, lat: 51.4907, lng: -0.2887 },
    { name: "諾丁漢森林", engName: "Nottingham Forest", league: "英超", leagueKey: "epl", city: "諾丁漢 (Nottingham)", stadium: "城市足球場 (City Ground)", capacity: 30445, lat: 52.9400, lng: -1.1328 },
    { name: "萊斯特城", engName: "Leicester City", league: "英超", leagueKey: "epl", city: "萊斯特 (Leicester)", stadium: "皇權球場 (King Power Stadium)", capacity: 32262, lat: 52.6204, lng: -1.1422 },
    { name: "伊普斯維奇", engName: "Ipswich Town", league: "英超", leagueKey: "epl", city: "伊普斯維奇 (Ipswich)", stadium: "波特曼路球場 (Portman Road)", capacity: 29673, lat: 52.0551, lng: 1.1447 },
    { name: "南安普敦", engName: "Southampton", league: "英超", leagueKey: "epl", city: "南安普敦 (Southampton)", stadium: "聖瑪麗球場 (St. Mary's Stadium)", capacity: 32384, lat: 50.9058, lng: -1.3910 },
    { name: "柯文垂城", engName: "Coventry City", league: "英超/英格蘭", leagueKey: "epl", city: "柯文垂 (Coventry)", stadium: "柯文垂建築協會球場 (Coventry Building Society Arena)", capacity: 32609, lat: 52.4480, lng: -1.4955 },

    /* 西班牙甲級聯賽 (La Liga) */
    { name: "皇家馬德里", engName: "Real Madrid", league: "西甲", leagueKey: "laliga", city: "馬德里 (Madrid)", stadium: "聖地亞哥·伯納烏球場 (Santiago Bernabéu)", capacity: 85000, lat: 40.4531, lng: -3.6883 },
    { name: "巴塞隆納", engName: "FC Barcelona", league: "西甲", leagueKey: "laliga", city: "巴塞隆納 (Barcelona)", stadium: "蒙特惠奇奧林匹克球場 / 諾坎普 (Camp Nou)", capacity: 54367, lat: 41.3638, lng: 2.1556 },
    { name: "吉羅納", engName: "Girona FC", league: "西甲", leagueKey: "laliga", city: "赫羅納 (Girona)", stadium: "蒙蒂利維球場 (Montilivi)", capacity: 14624, lat: 41.9609, lng: 2.8286 },
    { name: "馬德里競技", engName: "Atlético Madrid", league: "西甲", leagueKey: "laliga", city: "馬德里 (Madrid)", stadium: "大都會球場 (Cívitas Metropolitano)", capacity: 70460, lat: 40.4362, lng: -3.5995 },
    { name: "畢爾包競技", engName: "Athletic Club", league: "西甲", leagueKey: "laliga", city: "畢爾包 (Bilbao)", stadium: "聖馬梅斯球場 (San Mamés)", capacity: 53289, lat: 43.2642, lng: -2.9493 },
    { name: "皇家社會", engName: "Real Sociedad", league: "西甲", leagueKey: "laliga", city: "聖塞巴斯提安 (San Sebastián)", stadium: "雷阿萊競技場 (Reale Arena)", capacity: 39500, lat: 43.3014, lng: -1.9736 },
    { name: "皇家貝蒂斯", engName: "Real Betis", league: "西甲", leagueKey: "laliga", city: "塞維亞 (Seville)", stadium: "貝尼托·比利亞馬林球場 (Benito Villamarín)", capacity: 60721, lat: 37.3565, lng: -5.9818 },
    { name: "比亞雷亞爾", engName: "Villarreal CF", league: "西甲", leagueKey: "laliga", city: "比利亞雷阿爾 (Villarreal)", stadium: "陶瓷球場 (Estadio de la Cerámica)", capacity: 23000, lat: 39.9442, lng: -0.1037 },
    { name: "瓦倫西亞", engName: "Valencia CF", league: "西甲", leagueKey: "laliga", city: "瓦倫西亞 (Valencia)", stadium: "梅斯塔利亞球場 (Mestalla)", capacity: 49430, lat: 39.4746, lng: -0.3582 },
    { name: "阿拉維斯", engName: "Deportivo Alavés", league: "西甲", leagueKey: "laliga", city: "維多利亞 (Vitoria-Gasteiz)", stadium: "門迪索羅薩球場 (Mendizorrotza)", capacity: 19840, lat: 42.8371, lng: -2.6882 },
    { name: "奧薩蘇納", engName: "CA Osasuna", league: "西甲", leagueKey: "laliga", city: "潘普洛納 (Pamplona)", stadium: "薩達爾球場 (El Sadar)", capacity: 23576, lat: 42.7967, lng: -1.6370 },
    { name: "赫塔費", engName: "Getafe CF", league: "西甲", leagueKey: "laliga", city: "赫塔費 (Getafe)", stadium: "阿方索·佩雷斯球場 (Coliseum)", capacity: 16500, lat: 40.3257, lng: -3.7149 },
    { name: "塞爾塔維戈", engName: "Celta Vigo", league: "西甲", leagueKey: "laliga", city: "維戈 (Vigo)", stadium: "巴拉伊多斯球場 (Abanca-Balaídos)", capacity: 24791, lat: 42.2119, lng: -8.7397 },
    { name: "塞維亞", engName: "Sevilla FC", league: "西甲", leagueKey: "laliga", city: "塞維亞 (Seville)", stadium: "拉蒙·桑切斯·皮斯胡安球場 (Ramón Sánchez-Pizjuán)", capacity: 43883, lat: 37.3840, lng: -5.9706 },
    { name: "馬略卡", engName: "RCD Mallorca", league: "西甲", leagueKey: "laliga", city: "帕爾馬 (Palma)", stadium: "孫莫什球場 (Mallorca Son Moix)", capacity: 23142, lat: 39.5900, lng: 2.6300 },
    { name: "拉斯帕爾馬斯", engName: "UD Las Palmas", league: "西甲", leagueKey: "laliga", city: "大加那利 (Las Palmas)", stadium: "大加那利體育場 (Estadio Gran Canaria)", capacity: 32400, lat: 28.1004, lng: -15.4566 },
    { name: "巴列卡諾", engName: "Rayo Vallecano", league: "西甲", leagueKey: "laliga", city: "馬德里 (Madrid)", stadium: "巴列卡斯球場 (Campo de Vallecas)", capacity: 14708, lat: 40.3919, lng: -3.6588 },
    { name: "萊加內斯", engName: "CD Leganés", league: "西甲", leagueKey: "laliga", city: "萊加內斯 (Leganés)", stadium: "布塔克市政球場 (Estadio Butarque)", capacity: 12450, lat: 40.3404, lng: -3.7607 },
    { name: "皇家瓦拉多利德", engName: "Real Valladolid", league: "西甲", leagueKey: "laliga", city: "瓦拉多利德 (Valladolid)", stadium: "索里利亞球場 (José Zorrilla)", capacity: 27618, lat: 41.6444, lng: -4.7611 },
    { name: "西班牙人", engName: "RCD Espanyol", league: "西甲", leagueKey: "laliga", city: "巴塞隆納 (Barcelona)", stadium: "RCDE 球場 (RCDE Stadium)", capacity: 40000, lat: 41.3478, lng: 2.0756 },

    /* 德國甲級聯賽 (Bundesliga) */
    { name: "勒沃庫森", engName: "Bayer Leverkusen", league: "德甲", leagueKey: "bundesliga", city: "勒沃庫森 (Leverkusen)", stadium: "拜耳競技場 (BayArena)", capacity: 30210, lat: 51.0383, lng: 7.0022 },
    { name: "斯圖加特", engName: "VfB Stuttgart", league: "德甲", leagueKey: "bundesliga", city: "斯圖加特 (Stuttgart)", stadium: "MHP 競技場 (MHPArena)", capacity: 60449, lat: 48.7923, lng: 9.2321 },
    { name: "拜仁慕尼黑", engName: "Bayern Munich", league: "德甲", leagueKey: "bundesliga", city: "慕尼黑 (Munich)", stadium: "安聯球場 (Allianz Arena)", capacity: 75024, lat: 48.2188, lng: 11.6247 },
    { name: "RB萊比錫", engName: "RB Leipzig", league: "德甲", leagueKey: "bundesliga", city: "萊比錫 (Leipzig)", stadium: "紅牛競技場 (Red Bull Arena)", capacity: 47069, lat: 51.3458, lng: 12.3483 },
    { name: "多特蒙德", engName: "Borussia Dortmund", league: "德甲", leagueKey: "bundesliga", city: "多特蒙德 (Dortmund)", stadium: "西格納伊度納公園 (Signal Iduna Park)", capacity: 81365, lat: 51.4926, lng: 7.4519 },
    { name: "法蘭克福", engName: "Eintracht Frankfurt", league: "德甲", leagueKey: "bundesliga", city: "法蘭克福 (Frankfurt)", stadium: "德意志銀行公園 (Deutsche Bank Park)", capacity: 58000, lat: 50.0686, lng: 8.6455 },
    { name: "霍芬海姆", engName: "TSG Hoffenheim", league: "德甲", leagueKey: "bundesliga", city: "辛斯海姆 (Sinsheim)", stadium: "PreZero 競技場 (PreZero Arena)", capacity: 30150, lat: 49.2384, lng: 8.8878 },
    { name: "海登海姆", engName: "1. FC Heidenheim", league: "德甲", leagueKey: "bundesliga", city: "海登海姆 (Heidenheim)", stadium: "福伊特競技場 (Voith-Arena)", capacity: 15000, lat: 48.6685, lng: 10.1392 },
    { name: "雲達不萊梅", engName: "Werder Bremen", league: "德甲", leagueKey: "bundesliga", city: "不萊梅 (Bremen)", stadium: "威悉體育場 (Weserstadion)", capacity: 42100, lat: 53.0664, lng: 8.8376 },
    { name: "弗萊堡", engName: "SC Freiburg", league: "德甲", leagueKey: "bundesliga", city: "弗萊堡 (Freiburg)", stadium: "歐洲公園球場 (Europa-Park Stadion)", capacity: 34700, lat: 48.0208, lng: 7.8283 },
    { name: "奧格斯堡", engName: "FC Augsburg", league: "德甲", leagueKey: "bundesliga", city: "奧格斯堡 (Augsburg)", stadium: "WWK 競技場 (WWK Arena)", capacity: 30660, lat: 48.3231, lng: 10.8860 },
    { name: "沃夫斯堡", engName: "VfL Wolfsburg", league: "德甲", leagueKey: "bundesliga", city: "沃夫斯堡 (Wolfsburg)", stadium: "大眾汽車競技場 (Volkswagen Arena)", capacity: 30000, lat: 52.4326, lng: 10.8039 },
    { name: "美因茲", engName: "Mainz 05", league: "德甲", leagueKey: "bundesliga", city: "美因茲 (Mainz)", stadium: "美娃競技場 (Mewa Arena)", capacity: 33305, lat: 49.9840, lng: 8.2243 },
    { name: "門興格拉德巴赫", engName: "Borussia Mönchengladbach", league: "德甲", leagueKey: "bundesliga", city: "門興格拉德巴赫 (Mönchengladbach)", stadium: "普魯士公園球場 (Borussia-Park)", capacity: 54042, lat: 51.1746, lng: 6.3855 },
    { name: "柏林聯", engName: "Union Berlin", league: "德甲", leagueKey: "bundesliga", city: "柏林 (Berlin)", stadium: "老林務所畔體育場 (Stadion An der Alten Försterei)", capacity: 22012, lat: 52.4572, lng: 13.5681 },
    { name: "波鴻", engName: "VfL Bochum", league: "德甲", leagueKey: "bundesliga", city: "波鴻 (Bochum)", stadium: "沃諾維亞魯爾球場 (Vonovia Ruhrstadion)", capacity: 26000, lat: 51.4900, lng: 7.2364 },
    { name: "聖保利", engName: "FC St. Pauli", league: "德甲", leagueKey: "bundesliga", city: "漢堡 (Hamburg)", stadium: "米勒門球場 (Millerntor-Stadion)", capacity: 29546, lat: 53.5546, lng: 9.9678 },
    { name: "荷爾斯泰因基爾", engName: "Holstein Kiel", league: "德甲", leagueKey: "bundesliga", city: "基爾 (Kiel)", stadium: "荷爾斯泰因球場 (Holstein-Stadion)", capacity: 15034, lat: 54.3494, lng: 10.1232 },

    /* 義大利甲級聯賽 (Serie A) */
    { name: "國際米蘭", engName: "Inter Milan", league: "意甲", leagueKey: "seriea", city: "米蘭 (Milan)", stadium: "朱塞佩·梅阿查球場 (San Siro)", capacity: 75923, lat: 45.4781, lng: 9.1240 },
    { name: "AC米蘭", engName: "AC Milan", league: "意甲", leagueKey: "seriea", city: "米蘭 (Milan)", stadium: "聖西羅球場 (San Siro)", capacity: 75923, lat: 45.4781, lng: 9.1240 },
    { name: "尤文圖斯", engName: "Juventus", league: "意甲", leagueKey: "seriea", city: "杜林 (Turin)", stadium: "安聯球場 (Allianz Stadium)", capacity: 41507, lat: 45.1096, lng: 7.6413 },
    { name: "亞特蘭大", engName: "Atalanta", league: "意甲", leagueKey: "seriea", city: "貝加莫 (Bergamo)", stadium: "格維斯體育場 (Gewiss Stadium)", capacity: 21747, lat: 45.7088, lng: 9.6806 },
    { name: "博洛尼亞", engName: "Bologna FC", league: "意甲", leagueKey: "seriea", city: "波隆那 (Bologna)", stadium: "雷納托·達拉亞球場 (Stadio Renato Dall'Ara)", capacity: 36462, lat: 44.4923, lng: 11.3099 },
    { name: "羅馬", engName: "AS Roma", league: "意甲", leagueKey: "seriea", city: "羅馬 (Rome)", stadium: "羅馬奧林匹克體育場 (Stadio Olimpico)", capacity: 70634, lat: 41.9341, lng: 12.4547 },
    { name: "拉齊奧", engName: "SS Lazio", league: "意甲", leagueKey: "seriea", city: "羅馬 (Rome)", stadium: "羅馬奧林匹克體育場 (Stadio Olimpico)", capacity: 70634, lat: 41.9341, lng: 12.4547 },
    { name: "佛羅倫斯", engName: "Fiorentina", league: "意甲", leagueKey: "seriea", city: "佛羅倫斯 (Florence)", stadium: "阿特米奧·弗蘭基球場 (Stadio Artemio Franchi)", capacity: 43147, lat: 43.7808, lng: 11.2825 },
    { name: "杜林", engName: "Torino FC", league: "意甲", leagueKey: "seriea", city: "杜林 (Turin)", stadium: "杜林大奧林匹克體育場 (Stadio Olimpico Grande Torino)", capacity: 28177, lat: 45.0418, lng: 7.6500 },
    { name: "拿坡里", engName: "SSC Napoli", league: "意甲", leagueKey: "seriea", city: "拿坡里 (Naples)", stadium: "迪亞哥·阿曼多·馬拉度納球場 (Stadio Diego Armando Maradona)", capacity: 54726, lat: 40.8280, lng: 14.1930 },
    { name: "熱那亞", engName: "Genoa CFC", league: "意甲", leagueKey: "seriea", city: "熱那亞 (Genoa)", stadium: "路易吉·費拉里斯球場 (Stadio Luigi Ferraris)", capacity: 36598, lat: 44.4165, lng: 8.9526 },
    { name: "蒙扎", engName: "AC Monza", league: "意甲", leagueKey: "seriea", city: "蒙札 (Monza)", stadium: "U-Power 體育場 (Brianteo)", capacity: 16917, lat: 45.5828, lng: 9.2965 },
    { name: "維羅納", engName: "Hellas Verona", league: "意甲", leagueKey: "seriea", city: "維羅納 (Verona)", stadium: "馬爾康托尼奧·本特戈蒂球場 (Marcantonio Bentegodi)", capacity: 31045, lat: 45.4353, lng: 10.9686 },
    { name: "萊切", engName: "US Lecce", league: "意甲", leagueKey: "seriea", city: "萊切 (Lecce)", stadium: "維亞德爾馬雷球場 (Stadio Via del Mare)", capacity: 31533, lat: 40.3601, lng: 18.2091 },
    { name: "烏迪內斯", engName: "Udinese Calcio", league: "意甲", leagueKey: "seriea", city: "烏迪內 (Udine)", stadium: "藍能體育場 (Bluenergy Stadium)", capacity: 25144, lat: 46.0816, lng: 13.2003 },
    { name: "卡利亞里", engName: "Cagliari Calcio", league: "意甲", leagueKey: "seriea", city: "卡利亞里 (Cagliari)", stadium: "Unipol 多莫斯球場 (Unipol Domus)", capacity: 16416, lat: 39.1998, lng: 9.1368 },
    { name: "恩波利", engName: "Empoli FC", league: "意甲", leagueKey: "seriea", city: "恩波利 (Empoli)", stadium: "卡洛·卡斯特拉尼球場 (Stadio Carlo Castellani)", capacity: 16284, lat: 43.7258, lng: 10.9547 },
    { name: "帕爾馬", engName: "Parma Calcio", league: "意甲", leagueKey: "seriea", city: "帕爾馬 (Parma)", stadium: "恩尼奧·塔爾迪尼球場 (Stadio Ennio Tardini)", capacity: 22352, lat: 44.7951, lng: 10.3384 },
    { name: "科莫 1907", engName: "Como 1907", league: "意甲", leagueKey: "seriea", city: "科莫 (Como)", stadium: "朱塞佩·西尼加利亞球場 (Stadio Giuseppe Sinigaglia)", capacity: 13602, lat: 45.8143, lng: 9.0734 },
    { name: "威尼斯", engName: "Venezia FC", league: "意甲", leagueKey: "seriea", city: "威尼斯 (Venice)", stadium: "皮埃爾·路易吉·彭佐球場 (Stadio Pier Luigi Penzo)", capacity: 11150, lat: 45.4287, lng: 12.3605 },

    /* 法國甲級聯賽 (Ligue 1) */
    { name: "巴黎聖日耳曼", engName: "Paris Saint-Germain", league: "法甲", leagueKey: "ligue1", city: "巴黎 (Paris)", stadium: "王子公園體育場 (Parc des Princes)", capacity: 47929, lat: 48.8414, lng: 2.2530 },
    { name: "摩納哥", engName: "AS Monaco", league: "法甲", leagueKey: "ligue1", city: "摩納哥 (Monaco)", stadium: "路易二世體育場 (Stade Louis II)", capacity: 18523, lat: 43.7276, lng: 7.4156 },
    { name: "布雷斯特", engName: "Stade Brestois 29", league: "法甲", leagueKey: "ligue1", city: "布雷斯特 (Brest)", stadium: "弗朗西斯·勒布萊球場 (Francis-Le Blé)", capacity: 15220, lat: 48.4031, lng: -4.4608 },
    { name: "里爾", engName: "LOSC Lille", league: "法甲", leagueKey: "ligue1", city: "里爾 (Lille)", stadium: "皮埃爾·莫魯瓦球場 (Decathlon Arena)", capacity: 50186, lat: 50.6119, lng: 3.1305 },
    { name: "尼斯", engName: "OGC Nice", league: "法甲", leagueKey: "ligue1", city: "尼斯 (Nice)", stadium: "安聯里維耶拉球場 (Allianz Riviera)", capacity: 36178, lat: 43.7053, lng: 7.1926 },
    { name: "里昂", engName: "Olympique Lyonnais", league: "法甲", leagueKey: "ligue1", city: "里昂 (Lyon)", stadium: "奧林匹克里昂體育場 (Groupama Stadium)", capacity: 59186, lat: 45.7653, lng: 4.9819 },
    { name: "朗斯", engName: "RC Lens", league: "法甲", leagueKey: "ligue1", city: "朗斯 (Lens)", stadium: "博拉爾特-德勒利球場 (Stade Bollaert-Delelis)", capacity: 38223, lat: 50.4328, lng: 2.8150 },
    { name: "馬賽", engName: "Olympique de Marseille", league: "法甲", leagueKey: "ligue1", city: "馬賽 (Marseille)", stadium: "韋洛德羅姆球場 (Orange Vélodrome)", capacity: 67394, lat: 43.2699, lng: 5.3959 },
    { name: "蘭斯", engName: "Stade de Reims", league: "法甲", leagueKey: "ligue1", city: "蘭斯 (Reims)", stadium: "奧古斯特·德洛納球場 (Stade Auguste-Delaune)", capacity: 21684, lat: 49.2472, lng: 4.0244 },
    { name: "雷恩", engName: "Stade Rennais", league: "法甲", leagueKey: "ligue1", city: "雷恩 (Rennes)", stadium: "羅阿宗公園球場 (Roazhon Park)", capacity: 29778, lat: 48.1075, lng: -1.7128 },
    { name: "土魯斯", engName: "Toulouse FC", league: "法甲", leagueKey: "ligue1", city: "土魯斯 (Toulouse)", stadium: "土魯斯市政球場 (Stadium de Toulouse)", capacity: 33150, lat: 43.5833, lng: 1.4341 },
    { name: "蒙彼利埃", engName: "Montpellier HSC", league: "法甲", leagueKey: "ligue1", city: "蒙彼利埃 (Montpellier)", stadium: "莫桑球場 (Stade de la Mosson)", capacity: 32900, lat: 43.6222, lng: 3.8122 },
    { name: "斯特拉斯堡", engName: "RC Strasbourg", league: "法甲", leagueKey: "ligue1", city: "史特拉斯堡 (Strasbourg)", stadium: "梅納烏球場 (Stade de la Meinau)", capacity: 26109, lat: 48.5601, lng: 7.7544 },
    { name: "南特", engName: "FC Nantes", league: "法甲", leagueKey: "ligue1", city: "南特 (Nantes)", stadium: "博茹瓦爾球場 (Stade de la Beaujoire)", capacity: 35322, lat: 47.2558, lng: -1.5247 },
    { name: "勒阿弗爾", engName: "Le Havre AC", league: "法甲", leagueKey: "ligue1", city: "勒阿弗爾 (Le Havre)", stadium: "大洋體育場 (Stade Océane)", capacity: 25178, lat: 49.4988, lng: 0.1699 },
    { name: "歐塞爾", engName: "AJ Auxerre", league: "法甲", leagueKey: "ligue1", city: "歐塞爾 (Auxerre)", stadium: "阿貝·德尚球場 (Stade de l'Abbé-Deschamps)", capacity: 18541, lat: 47.7869, lng: 3.5881 },
    { name: "昂熱", engName: "Angers SCO", league: "法甲", leagueKey: "ligue1", city: "昂熱 (Angers)", stadium: "雷蒙·科帕球場 (Stade Raymond Kopa)", capacity: 18752, lat: 47.4603, lng: -0.5303 },
    { name: "聖埃蒂安", engName: "AS Saint-Étienne", league: "法甲", leagueKey: "ligue1", city: "聖艾蒂安 (Saint-Étienne)", stadium: "若弗魯瓦·吉夏爾球場 (Geoffroy-Guichard)", capacity: 41965, lat: 45.4608, lng: 4.3900 }
  ],
  clubSquads: {
    "曼徹斯特城": {
      manager: "佩普·瓜迪奧拉 (Pep Guardiola)",
      captain: "凱文·德布勞內 (Kevin De Bruyne)",
      gk: [
        { num: 31, name: "埃德森 (Ederson)", nat: "巴西 🇧🇷", role: "主力門將" },
        { num: 18, name: "史蒂芬·奧爾特加 (Stefan Ortega)", nat: "德國 🇩🇪", role: "盃賽門將" },
        { num: 33, name: "斯科特·卡森 (Scott Carson)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "第三門將" }
      ],
      df: [
        { num: 3, name: "魯本·迪亞斯 (Rúben Dias)", nat: "葡萄牙 🇵🇹", role: "後防領袖" },
        { num: 24, name: "約什科·格瓦迪奧爾 (Joško Gvardiol)", nat: "克羅埃西亞 🇭🇷", role: "左後衛/中衛" },
        { num: 2, name: "凱爾·沃克 (Kyle Walker)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "隊長/右後衛" },
        { num: 82, name: "里科·劉易斯 (Rico Lewis)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "邊後衛新星" }
      ],
      mf: [
        { num: 5, name: "埃利奧特·安德森 (Elliot Anderson)", nat: "蘇格蘭 🏴󠁧󠁢󠁳󠁣󠁴󠁿", role: "1.16億鎊天價引進/中場新核心 🔥新加盟" },
        { num: 8, name: "恩佐·費南德斯 (Enzo Fernández)", nat: "阿根廷 🇦🇷", role: "世界盃冠軍/新加盟中場指揮官 🔥新轉入" },
        { num: 18, name: "拉揚·謝爾基 (Rayan Cherki)", nat: "法國 🇫🇷", role: "法國盤帶魔術師/進攻組織核心 🔥新轉入" },
        { num: 17, name: "凱文·德布勞內 (Kevin De Bruyne)", nat: "比利時 🇧🇪", role: "中場大腦/傳奇組織核心" },
        { num: 19, name: "伊爾凱·京多安 (İlkay Gündoğan)", nat: "德國 🇩🇪", role: "老將隊魂/中場指揮" },
        { num: 16, name: "馬特奧·科瓦契奇 (Mateo Kovačić)", nat: "克羅埃西亞 🇭🇷", role: "全能中場" },
        { num: 27, name: "馬特烏斯·努內斯 (Matheus Nunes)", nat: "葡萄牙 🇵🇹", role: "推進型中場" }
      ],
      fw: [
        { num: 9, name: "厄林·哈蘭德 (Erling Haaland)", nat: "挪威 🇳🇴", role: "世界頂級中鋒/進球機器" },
        { num: 7, name: "伊利曼·恩迪亞耶 (Iliman Ndiaye)", nat: "塞內加爾 🇸🇳", role: "英超6500萬鎊壓哨簽約/頂級爆破邊鋒 🔥新加盟" },
        { num: 24, name: "安托萬·塞梅尼奧 (Antoine Semenyo)", nat: "加納 🇬🇭", role: "英超頂級爆破重砲邊鋒/邊路新核 🔥新加盟" },
        { num: 47, name: "菲爾·福登 (Phil Foden)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "23/24英超最佳球員" },
        { num: 11, name: "傑雷米·杜庫 (Jérémy Doku)", nat: "比利時 🇧🇪", role: "爆破型邊鋒" }
      ]
    },
    "皇家馬德里": {
      manager: "卡洛·安切洛蒂 (Carlo Ancelotti)",
      captain: "盧卡·莫德里奇 (Luka Modrić)",
      gk: [
        { num: 1, name: "蒂博·庫爾圖瓦 (Thibaut Courtois)", nat: "比利時 🇧🇪", role: "世界頂級門將" },
        { num: 13, name: "安德里·盧寧 (Andriy Lunin)", nat: "烏克蘭 🇺🇦", role: "歐冠功臣門將" }
      ],
      df: [
        { num: 12, name: "特倫特·亞歷山大-阿諾德 (Alexander-Arnold)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "世界級長傳大師右後衛 🔥新加盟" },
        { num: 22, name: "安東尼奧·呂迪格 (Antonio Rüdiger)", nat: "德國 🇩🇪", role: "鐵血主力中衛" },
        { num: 3, name: "埃德爾·米利唐 (Éder Militão)", nat: "巴西 🇧🇷", role: "主力中衛" },
        { num: 4, name: "大衛·阿拉巴 (David Alaba)", nat: "奧地利 🇦🇹", role: "後防老將" },
        { num: 2, name: "丹尼·卡瓦哈爾 (Dani Carvajal)", nat: "西班牙 🇪🇸", role: "副隊長/傳奇右後衛" },
        { num: 23, name: "費蘭·門迪 (Ferland Mendy)", nat: "法國 🇫🇷", role: "主力左後衛" },
        { num: 17, name: "盧卡斯·巴斯克斯 (Lucas Vázquez)", nat: "西班牙 🇪🇸", role: "全能右翼" },
        { num: 20, name: "弗蘭·加西亞 (Fran García)", nat: "西班牙 🇪🇸", role: "邊後衛" }
      ],
      mf: [
        { num: 5, name: "裘德·貝林漢姆 (Jude Bellingham)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "世界級全能進攻中場" },
        { num: 10, name: "盧卡·莫德里奇 (Luka Modrić)", nat: "克羅埃西亞 🇭🇷", role: "金球大師/球隊第一隊長" },
        { num: 8, name: "費德里科·巴爾韋德 (Federico Valverde)", nat: "烏拉圭 🇺🇾", role: "鐵人隊魂/重砲中場" },
        { num: 6, name: "愛德華多·卡馬文加 (Eduardo Camavinga)", nat: "法國 🇫🇷", role: "全能天才中場" },
        { num: 14, name: "奧雷利安·楚阿梅尼 (Aurélien Tchouaméni)", nat: "法國 🇫🇷", role: "防守中場主力" },
        { num: 15, name: "阿爾達·居萊爾 (Arda Güler)", nat: "土耳其 🇹🇷", role: "頂級創造力新星" },
        { num: 19, name: "達尼·塞瓦略斯 (Dani Ceballos)", nat: "西班牙 🇪🇸", role: "中場輪換" }
      ],
      fw: [
        { num: 9, name: "基利安·姆巴佩 (Kylian Mbappé)", nat: "法國 🇫🇷", role: "世界第一巨星前鋒" },
        { num: 7, name: "維尼修斯·儒尼奧爾 (Vinícius Júnior)", nat: "巴西 🇧🇷", role: "金球爭奪者/邊路大殺器" },
        { num: 11, name: "羅德里戈 (Rodrygo)", nat: "巴西 🇧🇷", role: "全能鋒線殺手" },
        { num: 16, name: "恩德里克 (Endrick)", nat: "巴西 🇧🇷", role: "巴西超級新星中鋒" },
        { num: 21, name: "卜拉欣·迪亞斯 (Brahim Díaz)", nat: "摩洛哥 🇲🇦", role: "進攻變速器" }
      ]
    },
    "巴塞隆納": {
      manager: "漢斯-迪特·弗里克 (Hansi Flick)",
      captain: "馬克-安德烈·特爾施特根 (Marc-André ter Stegen)",
      gk: [
        { num: 1, name: "馬克-安德烈·特爾施特根 (Ter Stegen)", nat: "德國 🇩🇪", role: "主力門將兼隊長" },
        { num: 25, name: "沃伊切赫·什琴斯尼 (Wojciech Szczęsny)", nat: "波蘭 🇵🇱", role: "特邀老將門將" },
        { num: 13, name: "伊尼亞基·佩尼亞 (Iñaki Peña)", nat: "西班牙 🇪🇸", role: "替補門將" }
      ],
      df: [
        { num: 2, name: "保·庫巴西 (Pau Cubarsí)", nat: "西班牙 🇪🇸", role: "拉瑪西亞中衛超新星" },
        { num: 4, name: "羅納德·阿勞霍 (Ronald Araújo)", nat: "烏拉圭 🇺🇾", role: "後防巨塔" },
        { num: 23, name: "儒勒·孔德 (Jules Koundé)", nat: "法國 🇫🇷", role: "頂級攻守右後衛" },
        { num: 3, name: "亞歷杭德羅·巴爾德 (Alejandro Balde)", nat: "西班牙 🇪🇸", role: "飛翼左後衛" },
        { num: 5, name: "伊尼戈·馬丁內斯 (Iñigo Martínez)", nat: "西班牙 🇪🇸", role: "資深中衛" },
        { num: 15, name: "安德烈亞斯·克里斯滕森 (Christensen)", nat: "丹麥 🇩🇰", role: "中衛/後腰" },
        { num: 24, name: "埃里克·加西亞 (Eric García)", nat: "西班牙 🇪🇸", role: "防守多面手" }
      ],
      mf: [
        { num: 16, name: "羅德里 (Rodri)", nat: "西班牙 🇪🇸", role: "2024金球獎得主/世界第一後腰重磅加盟 🔥新轉入" },
        { num: 8, name: "佩德里 (Pedri)", nat: "西班牙 🇪🇸", role: "中場魔術師/傳控核心" },
        { num: 6, name: "加維 (Gavi)", nat: "西班牙 🇪🇸", role: "鬥志之魂/全能中場" },
        { num: 20, name: "達尼·奧爾莫 (Dani Olmo)", nat: "西班牙 🇪🇸", role: "2024歐洲盃金靴/進攻核心" },
        { num: 21, name: "弗蘭基·德容 (Frenkie de Jong)", nat: "荷蘭 🇳🇱", role: "推進大腦" },
        { num: 16, name: "費爾明·洛佩斯 (Fermín López)", nat: "西班牙 🇪🇸", role: "奧運金牌重砲中場" },
        { num: 17, name: "馬克·卡薩多 (Marc Casadó)", nat: "西班牙 🇪🇸", role: "拉瑪西亞防守中場" }
      ],
      fw: [
        { num: 19, name: "拉明·亞馬爾 (Lamine Yamal)", nat: "西班牙 🇪🇸", role: "歐洲金童/世界第一超新星" },
        { num: 9, name: "羅伯特·萊萬多夫斯基 (Lewandowski)", nat: "波蘭 🇵🇱", role: "神級中鋒/進球保障" },
        { num: 11, name: "拉菲尼亞 (Raphinha)", nat: "巴西 🇧🇷", role: "副隊長/邊路發動機" },
        { num: 7, name: "費蘭·托雷斯 (Ferran Torres)", nat: "西班牙 🇪🇸", role: "攻擊多面手" },
        { num: 10, name: "安蘇·法蒂 (Ansu Fati)", nat: "西班牙 🇪🇸", role: "邊鋒" },
        { num: 18, name: "保·維克托 (Pau Víctor)", nat: "西班牙 🇪🇸", role: "鋒線新秀" }
      ]
    },
    "阿森納": {
      manager: "米克爾·阿爾特塔 (Mikel Arteta)",
      captain: "馬丁·厄德高 (Martin Ødegaard)",
      gk: [
        { num: 22, name: "大衛·拉亞 (David Raya)", nat: "西班牙 🇪🇸", role: "英超金手套門將" },
        { num: 32, name: "內托 (Neto)", nat: "巴西 🇧🇷", role: "二號門將" }
      ],
      df: [
        { num: 2, name: "威廉·薩利巴 (William Saliba)", nat: "法國 🇫🇷", role: "世界頂級中衛" },
        { num: 6, name: "加布里埃爾 (Gabriel Magalhães)", nat: "巴西 🇧🇷", role: "防線磐石" },
        { num: 4, name: "本·懷特 (Ben White)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "主力右後衛" },
        { num: 12, name: "尤里安·廷伯 (Jurriën Timber)", nat: "荷蘭 🇳🇱", role: "攻守兼備邊後衛" },
        { num: 33, name: "里卡多·卡拉菲奧里 (Calafiori)", nat: "義大利 🇮🇹", role: "義大利國腳後衛" },
        { num: 17, name: "奧列克桑德·津琴科 (Zinchenko)", nat: "烏克蘭 🇺🇦", role: "內收型邊後衛" }
      ],
      mf: [
        { num: 8, name: "馬丁·厄德高 (Martin Ødegaard)", nat: "挪威 🇳🇴", role: "槍手隊長/進攻發動機" },
        { num: 41, name: "德克蘭·賴斯 (Declan Rice)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "一億英鎊身價後腰" },
        { num: 23, name: "米克爾·梅里諾 (Mikel Merino)", nat: "西班牙 🇪🇸", role: "歐洲盃冠軍中場" },
        { num: 5, name: "托馬斯·帕爾特伊 (Thomas Partey)", nat: "加納 🇬🇭", role: "後腰屏障" },
        { num: 20, name: "若日尼奧 (Jorginho)", nat: "義大利 🇮🇹", role: "老將節拍器" }
      ],
      fw: [
        { num: 7, name: "布卡約·薩卡 (Bukayo Saka)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "槍手太子/世界級右翼" },
        { num: 29, name: "凱·哈弗茨 (Kai Havertz)", nat: "德國 🇩🇪", role: "萬能前鋒/支點中鋒" },
        { num: 11, name: "加布里埃爾·馬丁內利 (Martinelli)", nat: "巴西 🇧🇷", role: "左路快馬" },
        { num: 9, name: "加布里埃爾·熱蘇斯 (Gabriel Jesus)", nat: "巴西 🇧🇷", role: "靈動中鋒" },
        { num: 19, name: "萊昂德羅·特羅薩德 (Trossard)", nat: "比利時 🇧🇪", role: "關鍵殺手/全能前鋒" },
        { num: 30, name: "拉希姆·斯特林 (Raheem Sterling)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "資深邊鋒" }
      ]
    },
    "利物浦": {
      manager: "安東尼·伊勞拉 (Andoni Iraola)",
      captain: "維吉爾·范戴克 (Virgil van Dijk)",
      gk: [
        { num: 1, name: "阿利松·貝克爾 (Alisson Becker)", nat: "巴西 🇧🇷", role: "世界頂級門將" },
        { num: 62, name: "奎維因·凱萊赫 (Caoimhín Kelleher)", nat: "愛爾蘭 🇮🇪", role: "神級二號門將" }
      ],
      df: [
        { num: 4, name: "維吉爾·范戴克 (Virgil van Dijk)", nat: "荷蘭 🇳🇱", role: "隊長/世界第一中衛" },
        { num: 5, name: "易卜拉希馬·科納特 (Ibrahima Konaté)", nat: "法國 🇫🇷", role: "主力中衛" },
        { num: 84, name: "康納·布拉德利 (Conor Bradley)", nat: "北愛爾蘭 🇬🇧", role: "主力右後衛超新星" },
        { num: 26, name: "安德魯·羅伯遜 (Andrew Robertson)", nat: "蘇格蘭 🏴󠁧󠁢󠁳󠁣󠁴󠁿", role: "主力左後衛" },
        { num: 2, name: "喬·戈麥斯 (Joe Gomez)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "後防萬金油" },
        { num: 21, name: "科斯塔斯·齊米卡斯 (Tsimikas)", nat: "希臘 🇬🇷", role: "左後衛" }
      ],
      mf: [
        { num: 8, name: "多米尼克·索博斯洛伊 (Szoboszlai)", nat: "匈牙利 🇭🇺", role: "進攻發電機/重砲手" },
        { num: 10, name: "亞歷克西斯·麥卡利斯特 (Mac Allister)", nat: "阿根廷 🇦🇷", role: "世界盃冠軍中場大腦" },
        { num: 38, name: "瑞安·赫拉芬貝赫 (Gravenberch)", nat: "荷蘭 🇳🇱", role: "中場全能組織者" },
        { num: 3, name: "遠藤航 (Wataru Endo)", nat: "日本 🇯🇵", role: "防守中場鐵閘" },
        { num: 17, name: "柯蒂斯·瓊斯 (Curtis Jones)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "本土中場" },
        { num: 19, name: "哈維·埃利奧特 (Harvey Elliott)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "進攻中場" }
      ],
      fw: [
        { num: 9, name: "亞歷山大·伊薩克 (Alexander Isak)", nat: "瑞典 🇸🇪", role: "1.25億鎊隊史紀錄引進/新主力神鋒 🔥新加盟" },
        { num: 18, name: "科迪·加克波 (Cody Gakpo)", nat: "荷蘭 🇳🇱", role: "左翼/中鋒" },
        { num: 20, name: "迪奧戈·若塔 (Diogo Jota)", nat: "葡萄牙 🇵🇹", role: "禁區終結者" },
        { num: 14, name: "費德里科·基耶薩 (Federico Chiesa)", nat: "義大利 🇮🇹", role: "爆發型邊鋒" }
      ]
    },
    "拜仁慕尼黑": {
      manager: "樊尚·孔帕尼 (Vincent Kompany)",
      captain: "曼努埃爾·諾伊爾 (Manuel Neuer)",
      gk: [
        { num: 1, name: "曼努埃爾·諾伊爾 (Manuel Neuer)", nat: "德國 🇩🇪", role: "門衛門神/傳奇隊長" },
        { num: 26, name: "斯文·烏爾賴希 (Sven Ulreich)", nat: "德國 🇩🇪", role: "功勳二號門將" },
        { num: 18, name: "丹尼爾·佩雷茨 (Daniel Peretz)", nat: "以色列 🇮🇱", role: "替補門將" }
      ],
      df: [
        { num: 2, name: "達約特·烏帕梅卡諾 (Upamecano)", nat: "法國 🇫🇷", role: "主力中衛" },
        { num: 3, name: "金玟哉 (Kim Min-jae)", nat: "韓國 🇰🇷", role: "亞洲頂級中衛/怪獸防線" },
        { num: 19, name: "阿方索·戴維斯 (Alphonso Davies)", nat: "加拿大 🇨🇦", role: "閃電飛翼左後衛" },
        { num: 21, name: "伊藤洋輝 (Hiroki Ito)", nat: "日本 🇯🇵", role: "左後衛/中衛" },
        { num: 22, name: "拉斐爾·格雷羅 (Raphaël Guerreiro)", nat: "葡萄牙 🇵🇹", role: "技術型邊後衛" },
        { num: 23, name: "薩沙·博埃 (Sacha Boey)", nat: "法國 🇫🇷", role: "右後衛" },
        { num: 44, name: "約瑟普·斯塔尼希奇 (Stanišić)", nat: "克羅埃西亞 🇭🇷", role: "後防多面手" }
      ],
      mf: [
        { num: 6, name: "約書亞·基米希 (Joshua Kimmich)", nat: "德國 🇩🇪", role: "隊魂/戰術核心" },
        { num: 42, name: "賈馬爾·穆西亞拉 (Jamal Musiala)", nat: "德國 🇩🇪", role: "世界頂級進攻中場" },
        { num: 16, name: "若昂·帕利尼亞 (João Palhinha)", nat: "葡萄牙 🇵🇹", role: "頂級掃蕩後腰" },
        { num: 45, name: "亞歷山大·帕夫洛維奇 (Aleksandar Pavlović)", nat: "德國 🇩🇪", role: "中場新星" },
        { num: 8, name: "萊昂·格雷茨卡 (Leon GRETZKA)", nat: "德國 🇩🇪", role: "全能B2B中場" },
        { num: 27, name: "康拉德·萊默爾 (Konrad Laimer)", nat: "奧地利 🇦🇹", role: "高壓逼搶悍將" }
      ],
      fw: [
        { num: 9, name: "哈里·凱恩 (Harry Kane)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "世界最強中鋒/歐洲金靴" },
        { num: 14, name: "路易斯·迪亞斯 (Luis Díaz)", nat: "哥倫比亞 🇨🇴", role: "7500萬歐元重磅加盟/頂級狂飆邊鋒 🔥新加盟" },
        { num: 17, name: "邁克爾·奧利塞 (Michael Olise)", nat: "法國 🇫🇷", role: "頂級邊路新援" },
        { num: 10, name: "勒魯瓦·薩內 (Leroy Sané)", nat: "德國 🇩🇪", role: "爆發力邊鋒" },
        { num: 7, name: "塞爾日·格納布里 (Serge Gnabry)", nat: "德國 🇩🇪", role: "進球前鋒" },
        { num: 11, name: "金斯利·科曼 (Kingsley Coman)", nat: "法國 🇫🇷", role: "奪冠錦鯉/邊路突破手" },
        { num: 25, name: "托馬斯·穆勒 (Thomas Müller)", nat: "德國 🇩🇪", role: "空間解讀者/拜仁傳奇" },
        { num: 39, name: "馬蒂斯·特爾 (Mathys Tel)", nat: "法國 🇫🇷", role: "年輕前鋒" }
      ]
    },
    "國際米蘭": {
      manager: "西蒙尼·因扎吉 (Simone Inzaghi)",
      captain: "勞塔羅·馬丁內斯 (Lautaro Martínez)",
      gk: [
        { num: 1, name: "揚·索默 (Yann Sommer)", nat: "瑞士 🇨🇭", role: "主力門將" },
        { num: 13, name: "何塞普·馬丁內斯 (Josep Martínez)", nat: "西班牙 🇪🇸", role: "二號門將" }
      ],
      df: [
        { num: 95, name: "亞歷山德羅·巴斯托尼 (Bastoni)", nat: "義大利 🇮🇹", role: "世界級出球中衛" },
        { num: 15, name: "弗朗切斯科·阿切爾比 (Acerbi)", nat: "義大利 🇮🇹", role: "防線統帥" },
        { num: 28, name: "邦雅曼·帕瓦爾 (Benjamin Pavard)", nat: "法國 🇫🇷", role: "世界盃冠軍後衛" },
        { num: 32, name: "費德里科·迪馬爾科 (Dimarco)", nat: "義大利 🇮🇹", role: "意甲第一左翼衛" },
        { num: 2, name: "登澤爾·鄧弗里斯 (Dumfries)", nat: "荷蘭 🇳🇱", role: "邊路重裝戰車" },
        { num: 6, name: "斯特凡·德弗賴 (Stefan de Vrij)", nat: "荷蘭 🇳🇱", role: "荷蘭主力中衛" },
        { num: 36, name: "馬泰奧·達米安 (Matteo Darmian)", nat: "義大利 🇮🇹", role: "萬能老將" }
      ],
      mf: [
        { num: 23, name: "尼科洛·巴雷拉 (Nicolò Barella)", nat: "義大利 🇮🇹", role: "國米心臟/全能中場" },
        { num: 20, name: "哈坎·恰爾汗奧盧 (Çalhanoğlu)", nat: "土耳其 🇹🇷", role: "頂級組織後腰/罰球大師" },
        { num: 22, name: "亨里克·姆希塔良 (Mkhitaryan)", nat: "亞美尼亞 🇦🇲", role: "老將戰術大腦" },
        { num: 16, name: "達維德·弗拉泰西 (Frattesi)", nat: "義大利 🇮🇹", role: "後插上殺手" },
        { num: 7, name: "彼得·澤林斯基 (Piotr Zieliński)", nat: "波蘭 🇵🇱", role: "中場組織名將" },
        { num: 21, name: "克里斯蒂安·阿斯拉尼 (Asllani)", nat: "阿爾巴尼亞 🇦🇱", role: "後腰輪換" }
      ],
      fw: [
        { num: 10, name: "勞塔羅·馬丁內斯 (Lautaro Martínez)", nat: "阿根廷 🇦🇷", role: "國米隊長/意甲金靴射手" },
        { num: 9, name: "馬庫斯·圖拉姆 (Marcus Thuram)", nat: "法國 🇫🇷", role: "法國國腳全能前鋒" },
        { num: 99, name: "邁赫迪·塔雷米 (Mehdi Taremi)", nat: "伊朗 🇮🇷", role: "亞洲頂級射手" },
        { num: 8, name: "馬爾科·阿瑙托維奇 (Arnautović)", nat: "奧地利 🇦🇹", role: "強力支點中鋒" },
        { num: 11, name: "華金·科雷亞 (Joaquín Correa)", nat: "阿根廷 🇦🇷", role: "靈巧前鋒" }
      ]
    },
    "巴黎聖日耳曼": {
      manager: "路易斯·恩里克 (Luis Enrique)",
      captain: "馬爾基尼奧斯 (Marquinhos)",
      gk: [
        { num: 1, name: "吉安路易吉·多納魯馬 (Donnarumma)", nat: "義大利 🇮🇹", role: "義大利主力國門" },
        { num: 39, name: "馬特維·薩福諾夫 (Safonov)", nat: "俄羅斯 🇷🇺", role: "二號門將" },
        { num: 80, name: "阿爾瑙·特納斯 (Arnau Tenas)", nat: "西班牙 🇪🇸", role: "奧運金牌門將" }
      ],
      df: [
        { num: 5, name: "馬爾基尼奧斯 (Marquinhos)", nat: "巴西 🇧🇷", role: "巴黎隊長/後防支柱" },
        { num: 2, name: "阿什拉夫·哈基米 (Achraf Hakimi)", nat: "摩洛哥 🇲🇦", role: "世界最佳右後衛之一" },
        { num: 25, name: "努諾·門德斯 (Nuno Mendes)", nat: "葡萄牙 🇵🇹", role: "世界頂級左後衛" },
        { num: 51, name: "威廉·帕喬 (Willian Pacho)", nat: "厄瓜多 🇪🇨", role: "鐵血新援中衛" },
        { num: 35, name: "盧卡斯·貝拉爾多 (Lucas Beraldo)", nat: "巴西 🇧🇷", role: "巴西中衛新星" },
        { num: 21, name: "盧卡斯·埃爾南德斯 (Lucas Hernandez)", nat: "法國 🇫🇷", role: "法國國腳後衛" },
        { num: 3, name: "普雷斯內爾·金彭貝 (Kimpembe)", nat: "法國 🇫🇷", role: "青訓老將" }
      ],
      mf: [
        { num: 17, name: "維蒂尼亞 (Vitinha)", nat: "葡萄牙 🇵🇹", role: "巴黎中場大腦" },
        { num: 87, name: "若昂·內維斯 (João Neves)", nat: "葡萄牙 🇵🇹", role: "億元級全能中場天才" },
        { num: 33, name: "沃倫·扎伊爾-埃梅里 (Zaïre-Emery)", nat: "法國 🇫🇷", role: "法國18歲天才國腳" },
        { num: 8, name: "法比安·魯伊斯 (Fabián Ruiz)", nat: "西班牙 🇪🇸", role: "2024歐洲盃最佳中場" },
        { num: 19, name: "李剛仁 (Kang-in Lee)", nat: "韓國 🇰🇷", role: "亞洲金童/邊路組織核心" }
      ],
      fw: [
        { num: 10, name: "奧斯曼·登貝萊 (Ousmane Dembélé)", nat: "法國 🇫🇷", role: "頂級雙足邊路爆破手" },
        { num: 29, name: "布拉德利·巴爾科拉 (Bradley Barcola)", nat: "法國 🇫🇷", role: "法甲進球榜首/左路新王" },
        { num: 9, name: "貢薩洛·拉莫斯 (Gonçalo Ramos)", nat: "葡萄牙 🇵🇹", role: "主力中鋒" },
        { num: 23, name: "蘭達爾·科洛·穆阿尼 (Kolo Muani)", nat: "法國 🇫🇷", role: "全能前鋒" },
        { num: 11, name: "馬爾科·阿森西奧 (Marco Asensio)", nat: "西班牙 🇪🇸", role: "重砲前鋒" }
      ]
    },
    "柯文垂城": {
      manager: "馬克·羅賓斯 (Mark Robins)",
      captain: "本·希夫 (Ben Sheaf)",
      gk: [
        { num: 40, name: "布拉德利·柯林斯 (Bradley Collins)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "主力門將" },
        { num: 13, name: "本·威爾遜 (Ben Wilson)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "副選門將" }
      ],
      df: [
        { num: 4, name: "鮑比·托馬斯 (Bobby Thomas)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "主力中衛" },
        { num: 15, name: "利亞姆·基欽 (Liam Kitching)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "主力左中衛" },
        { num: 2, name: "米蘭·范艾克 (Milan van Ewijk)", nat: "荷蘭 🇳🇱", role: "高速飛翼右後衛" },
        { num: 27, name: "傑克·比德韋爾 (Jake Bidwell)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "主力左後衛" },
        { num: 22, name: "喬爾·拉蒂博迪埃 (Latibeaudiere)", nat: "牙買加 🇯🇲", role: "後防萬金油" }
      ],
      mf: [
        { num: 14, name: "本·希夫 (Ben Sheaf)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "隊長/核心防守後腰" },
        { num: 28, name: "喬希·埃克爾斯 (Josh Eccles)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "青訓本土中場" },
        { num: 8, name: "傑米·艾倫 (Jamie Allen)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "全能跑動中場" },
        { num: 7, name: "坂元達裕 (Tatsuhiro Sakamoto)", nat: "日本 🇯🇵", role: "日本國腳/邊路技術大腦" },
        { num: 5, name: "傑克·魯多尼 (Jack Rudoni)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "進攻中場組織核心" }
      ],
      fw: [
        { num: 9, name: "埃利斯·西姆斯 (Ellis Simms)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "強力主力中鋒" },
        { num: 11, name: "哈吉·萊特 (Haji Wright)", nat: "美國 🇺🇸", role: "美國國腳/王牌射手" },
        { num: 23, name: "布蘭登·托馬斯-阿桑特 (Thomas-Asante)", nat: "加納 🇬🇭", role: "速度型前鋒" },
        { num: 24, name: "馬特·戈登 (Matt Godden)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", role: "鋒線老將" }
      ]

    },
    "切爾西": {
      "manager": "恩佐·馬雷斯卡 (Enzo Maresca)",
      "captain": "里斯·詹姆斯 (Reece James)",
      "gk": [
            {
                  "num": 1,
                  "name": "羅伯特·桑切斯 (Robert Sánchez)",
                  "nat": "西班牙 🇪🇸",
                  "role": "主力門將"
            },
            {
                  "num": 12,
                  "name": "菲利普·約根森 (Filip Jørgensen)",
                  "nat": "丹麥 🇩🇰",
                  "role": "盃賽門將"
            }
      ],
      "df": [
            {
                  "num": 24,
                  "name": "里斯·詹姆斯 (Reece James)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "隊長/頂級右後衛"
            },
            {
                  "num": 6,
                  "name": "利維·科爾威爾 (Levi Colwill)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "主力左中衛"
            },
            {
                  "num": 29,
                  "name": "韋斯利·福法納 (Wesley Fofana)",
                  "nat": "法國 🇫🇷",
                  "role": "主力中後衛"
            },
            {
                  "num": 3,
                  "name": "馬克·庫庫雷利亞 (Marc Cucurella)",
                  "nat": "西班牙 🇪🇸",
                  "role": "歐洲盃冠軍左後衛"
            },
            {
                  "num": 27,
                  "name": "馬洛·古斯托 (Malo Gusto)",
                  "nat": "法國 🇫🇷",
                  "role": "高速右後衛"
            }
      ],
      "mf": [
            {
                  "num": 20,
                  "name": "科爾·帕爾默 (Cole Palmer)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "英超核心前腰/進攻靈魂"
            },
            {
                  "num": 25,
                  "name": "莫伊塞斯·凱塞多 (Moisés Caicedo)",
                  "nat": "厄瓜多 🇪🇨",
                  "role": "億元級防守鐵閘/主力後腰"
            },
            {
                  "num": 22,
                  "name": "基爾南·霍爾 (Kiernan Dewsbury-Hall)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "全能中場組織"
            },
            {
                  "num": 45,
                  "name": "羅密歐·拉維亞 (Roméo Lavia)",
                  "nat": "比利時 🇧🇪",
                  "role": "防守後腰"
            }
      ],
      "fw": [
            {
                  "num": 15,
                  "name": "尼古拉斯·傑克遜 (Nicolas Jackson)",
                  "nat": "塞內加爾 🇸🇳",
                  "role": "主力前鋒"
            },
            {
                  "num": 7,
                  "name": "佩德羅·內托 (Pedro Neto)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "爆破型邊鋒"
            },
            {
                  "num": 11,
                  "name": "諾尼·馬杜埃凱 (Noni Madueke)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "右邊鋒突破手"
            },
            {
                  "num": 14,
                  "name": "若昂·菲利克斯 (João Félix)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "前場自由人"
            },
            {
                  "num": 18,
                  "name": "克里斯托弗·恩昆庫 (Christopher Nkunku)",
                  "nat": "法國 🇫🇷",
                  "role": "全能射手"
            },
            {
                  "num": 19,
                  "name": "賈登·桑喬 (Jadon Sancho)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "組織型邊鋒"
            }
      ]
},
    "曼徹斯特聯": {
      "manager": "魯本·阿莫林 (Rúben Amorim)",
      "captain": "布魯諾·費南德斯 (Bruno Fernandes)",
      "gk": [
            {
                  "num": 24,
                  "name": "安德烈·奧納納 (André Onana)",
                  "nat": "喀麥隆 🇨🇲",
                  "role": "主力門將/出球核心"
            },
            {
                  "num": 1,
                  "name": "阿爾泰·巴因迪爾 (Altay Bayındır)",
                  "nat": "土耳其 🇹🇷",
                  "role": "副選門將"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "馬泰斯·德利赫特 (Matthijs de Ligt)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "後防定海神針"
            },
            {
                  "num": 6,
                  "name": "利桑德羅·馬丁內斯 (Lisandro Martínez)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "鐵血阿根廷中衛"
            },
            {
                  "num": 15,
                  "name": "萊尼·約羅 (Leny Yoro)",
                  "nat": "法國 🇫🇷",
                  "role": "超新星中衛"
            },
            {
                  "num": 20,
                  "name": "迪奧戈·達洛特 (Diogo Dalot)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "主力邊後衛"
            },
            {
                  "num": 3,
                  "name": "努賽爾·馬茲拉維 (Noussair Mazraoui)",
                  "nat": "摩洛哥 🇲🇦",
                  "role": "技術型邊後衛"
            }
      ],
      "mf": [
            {
                  "num": 8,
                  "name": "布魯諾·費南德斯 (Bruno Fernandes)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "隊長/進攻核心司令塔"
            },
            {
                  "num": 37,
                  "name": "科比·梅努 (Kobbie Mainoo)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "青訓天才中場大腦"
            },
            {
                  "num": 25,
                  "name": "曼努埃爾·烏加特 (Manuel Ugarte)",
                  "nat": "烏拉圭 🇺🇾",
                  "role": "搶斷掃蕩後腰"
            },
            {
                  "num": 18,
                  "name": "卡塞米羅 (Casemiro)",
                  "nat": "巴西 🇧🇷",
                  "role": "防守鐵閘"
            }
      ],
      "fw": [
            {
                  "num": 9,
                  "name": "拉斯穆斯·霍伊倫 (Rasmus Højlund)",
                  "nat": "丹麥 🇩🇰",
                  "role": "主力強力中鋒"
            },
            {
                  "num": 10,
                  "name": "馬庫斯·拉什福德 (Marcus Rashford)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "左路快馬射手"
            },
            {
                  "num": 11,
                  "name": "約書亞·齊爾克澤 (Joshua Zirkzee)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "支點策應型中鋒"
            },
            {
                  "num": 17,
                  "name": "亞歷杭德羅·加納喬 (Alejandro Garnacho)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "邊路爆破奇兵"
            },
            {
                  "num": 16,
                  "name": "阿馬德·迪亞洛 (Amad Diallo)",
                  "nat": "象牙海岸 🇨🇮",
                  "role": "右路靈動邊鋒"
            }
      ]
},
    "熱刺": {
      "manager": "安格·波斯特科格魯 (Ange Postecoglou)",
      "captain": "孫興慜 (Son Heung-min)",
      "gk": [
            {
                  "num": 1,
                  "name": "古列爾莫·維卡里奧 (Guglielmo Vicario)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力門將"
            }
      ],
      "df": [
            {
                  "num": 17,
                  "name": "克里斯蒂安·羅梅羅 (Cristian Romero)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "副隊長/世界盃冠軍中衛"
            },
            {
                  "num": 37,
                  "name": "米基·范德文 (Micky van de Ven)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "世界最高速頂級中衛"
            },
            {
                  "num": 13,
                  "name": "德斯特尼·烏多吉 (Destiny Udogie)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力左後衛"
            },
            {
                  "num": 23,
                  "name": "佩德羅·波羅 (Pedro Porro)",
                  "nat": "西班牙 🇪🇸",
                  "role": "助攻狂人右後衛"
            }
      ],
      "mf": [
            {
                  "num": 10,
                  "name": "詹姆斯·麥迪森 (James Maddison)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "前場創造力核心"
            },
            {
                  "num": 21,
                  "name": "德揚·庫盧塞夫斯基 (Dejan Kulusevski)",
                  "nat": "瑞典 🇸🇪",
                  "role": "全能中前場發動機"
            },
            {
                  "num": 8,
                  "name": "伊夫·比蘇馬 (Yves Bissouma)",
                  "nat": "馬利 🇲🇱",
                  "role": "防守後腰"
            },
            {
                  "num": 29,
                  "name": "帕普·薩爾 (Pape Matar Sarr)",
                  "nat": "塞內加爾 🇸🇳",
                  "role": "高能跑動中場"
            }
      ],
      "fw": [
            {
                  "num": 7,
                  "name": "孫興慜 (Son Heung-min)",
                  "nat": "韓國 🇰🇷",
                  "role": "傳奇隊長/亞洲天王/頭號射手"
            },
            {
                  "num": 19,
                  "name": "多米尼克·索蘭克 (Dominic Solanke)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "頂級主力中鋒"
            },
            {
                  "num": 22,
                  "name": "布倫南·約翰遜 (Brennan Johnson)",
                  "nat": "威爾斯 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
                  "role": "高產右邊鋒"
            },
            {
                  "num": 9,
                  "name": "理查利森 (Richarlison)",
                  "nat": "巴西 🇧🇷",
                  "role": "強力前鋒"
            },
            {
                  "num": 28,
                  "name": "薩維奧 (Sávio)",
                  "nat": "巴西 🇧🇷",
                  "role": "7500萬鎊自曼城重磅引進/頂級突破邊翼 🔥新加盟"
            }
      ]
},
    "阿斯頓維拉": {
      "manager": "烏奈·埃梅里 (Unai Emery)",
      "captain": "約翰·麥金 (John McGinn)",
      "gk": [
            {
                  "num": 23,
                  "name": "埃米利亞諾·馬丁內斯 (Emiliano Martínez)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "世界最佳門將/雅辛獎得主"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "埃茲里·孔薩 (Ezri Konsa)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "英格蘭國腳中衛"
            },
            {
                  "num": 14,
                  "name": "保·托雷斯 (Pau Torres)",
                  "nat": "西班牙 🇪🇸",
                  "role": "出球大師中衛"
            },
            {
                  "num": 12,
                  "name": "盧卡斯·迪涅 (Lucas Digne)",
                  "nat": "法國 🇫🇷",
                  "role": "主力左後衛"
            },
            {
                  "num": 2,
                  "name": "馬蒂·卡什 (Matty Cash)",
                  "nat": "波蘭 🇵🇱",
                  "role": "右後衛"
            }
      ],
      "mf": [
            {
                  "num": 7,
                  "name": "約翰·麥金 (John McGinn)",
                  "nat": "蘇格蘭 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                  "role": "隊長/前場壓迫核心"
            },
            {
                  "num": 8,
                  "name": "尤里·蒂勒曼斯 (Youri Tielemans)",
                  "nat": "比利時 🇧🇪",
                  "role": "重砲調度中場"
            },
            {
                  "num": 24,
                  "name": "阿馬杜·奧納納 (Amadou Onana)",
                  "nat": "比利時 🇧🇪",
                  "role": "中場巨人屏障"
            }
      ],
      "fw": [
            {
                  "num": 11,
                  "name": "奧利·沃特金斯 (Ollie Watkins)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "主力頭號中鋒"
            },
            {
                  "num": 9,
                  "name": "喬恩·杜蘭 (Jhon Durán)",
                  "nat": "哥倫比亞 🇨🇴",
                  "role": "超級替補殺手"
            },
            {
                  "num": 31,
                  "name": "利昂·貝利 (Leon Bailey)",
                  "nat": "牙買加 🇯🇲",
                  "role": "爆發型右邊鋒"
            }
      ]
},
    "紐卡索聯": {
      "manager": "埃迪·豪 (Eddie Howe)",
      "captain": "布魯諾·吉馬良斯 (Bruno Guimarães)",
      "gk": [
            {
                  "num": 22,
                  "name": "尼克·波普 (Nick Pope)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "主力高門神"
            }
      ],
      "df": [
            {
                  "num": 5,
                  "name": "法比安·舍爾 (Fabian Schär)",
                  "nat": "瑞士 🇨🇭",
                  "role": "出球重砲中衛"
            },
            {
                  "num": 4,
                  "name": "斯文·博特曼 (Sven Botman)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "後防基石"
            },
            {
                  "num": 21,
                  "name": "蒂諾·利夫拉門托 (Tino Livramento)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "邊後衛"
            },
            {
                  "num": 20,
                  "name": "劉易斯·霍爾 (Lewis Hall)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "進攻型左後衛"
            }
      ],
      "mf": [
            {
                  "num": 39,
                  "name": "布魯諾·吉馬良斯 (Bruno Guimarães)",
                  "nat": "巴西 🇧🇷",
                  "role": "隊長/世界級中場節拍器"
            },
            {
                  "num": 7,
                  "name": "喬林頓 (Joelinton)",
                  "nat": "巴西 🇧🇷",
                  "role": "中場推土機"
            },
            {
                  "num": 8,
                  "name": "桑德羅·托納利 (Sandro Tonali)",
                  "nat": "義大利 🇮🇹",
                  "role": "義大利國腳頂級中場"
            }
      ],
      "fw": [
            {
                  "num": 9,
                  "name": "馬蒂亞斯·費南德斯-帕爾多 (Matias Fernandez-Pardo)",
                  "nat": "比利時 🇧🇪",
                  "role": "5100萬鎊自里爾重磅引進/鋒線超新星 🔥新加盟"
            },
            {
                  "num": 10,
                  "name": "安東尼·戈登 (Anthony Gordon)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "英格蘭國腳王牌邊鋒"
            },
            {
                  "num": 11,
                  "name": "哈維·巴恩斯 (Harvey Barnes)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "內切爆射專家"
            }
      ]
},
    "馬德里競技": {
      "manager": "迪亞哥·西蒙尼 (Diego Simeone)",
      "captain": "科克 (Koke)",
      "gk": [
            {
                  "num": 13,
                  "name": "揚·奧布拉克 (Jan Oblak)",
                  "nat": "斯洛維尼亞 🇸🇮",
                  "role": "世界頂級門神"
            }
      ],
      "df": [
            {
                  "num": 2,
                  "name": "荷西·希門尼斯 (José Giménez)",
                  "nat": "烏拉圭 🇺🇾",
                  "role": "鐵血防線核心"
            },
            {
                  "num": 24,
                  "name": "羅賓·勒諾爾芒 (Robin Le Normand)",
                  "nat": "西班牙 🇪🇸",
                  "role": "歐洲盃冠軍中衛"
            },
            {
                  "num": 16,
                  "name": "納韋爾·莫利納 (Nahuel Molina)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "主力右後衛"
            }
      ],
      "mf": [
            {
                  "num": 6,
                  "name": "科克 (Koke)",
                  "nat": "西班牙 🇪🇸",
                  "role": "隊長/隊史傳奇"
            },
            {
                  "num": 5,
                  "name": "羅德里戈·德保羅 (Rodrigo De Paul)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "阿根廷主力中場"
            },
            {
                  "num": 4,
                  "name": "康納·加拉格爾 (Conor Gallagher)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "全能鐵肺中場"
            },
            {
                  "num": 14,
                  "name": "馬科斯·略倫特 (Marcos Llorente)",
                  "nat": "西班牙 🇪🇸",
                  "role": "全能戰士"
            }
      ],
      "fw": [
            {
                  "num": 7,
                  "name": "安東尼·格列茲曼 (Antoine Griezmann)",
                  "nat": "法國 🇫🇷",
                  "role": "馬競歷史射手王/進攻靈魂"
            },
            {
                  "num": 19,
                  "name": "胡利安·阿爾瓦雷斯 (Julián Álvarez)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "大滿貫王牌前鋒"
            },
            {
                  "num": 9,
                  "name": "亞歷山大·瑟洛特 (Alexander Sørloth)",
                  "nat": "挪威 🇳🇴",
                  "role": "西甲金靴級中鋒"
            }
      ]
},
    "畢爾包競技": {
      "manager": "埃內斯托·巴爾韋德 (Ernesto Valverde)",
      "captain": "奧斯卡·德馬科斯 (Óscar de Marcos)",
      "gk": [
            {
                  "num": 1,
                  "name": "烏奈·西蒙 (Unai Simón)",
                  "nat": "西班牙 🇪🇸",
                  "role": "西班牙主力國門"
            }
      ],
      "df": [
            {
                  "num": 3,
                  "name": "達尼·維維安 (Dani Vivian)",
                  "nat": "西班牙 🇪🇸",
                  "role": "歐洲盃冠軍主力中衛"
            },
            {
                  "num": 17,
                  "name": "尤里·貝爾奇切 (Yuri Berchiche)",
                  "nat": "西班牙 🇪🇸",
                  "role": "主力左後衛"
            },
            {
                  "num": 18,
                  "name": "奧斯卡·德馬科斯 (Óscar de Marcos)",
                  "nat": "西班牙 🇪🇸",
                  "role": "傳奇隊長"
            }
      ],
      "mf": [
            {
                  "num": 8,
                  "name": "奧伊漢·桑切特 (Oihan Sancet)",
                  "nat": "西班牙 🇪🇸",
                  "role": "中場核心司令塔"
            },
            {
                  "num": 16,
                  "name": "伊尼戈·魯伊斯 (Ruiz de Galarreta)",
                  "nat": "西班牙 🇪🇸",
                  "role": "節拍器"
            }
      ],
      "fw": [
            {
                  "num": 10,
                  "name": "尼科·威廉斯 (Nico Williams)",
                  "nat": "西班牙 🇪🇸",
                  "role": "歐洲盃決賽MVP/世界頂級突破手"
            },
            {
                  "num": 9,
                  "name": "伊尼亞基·威廉斯 (Iñaki Williams)",
                  "nat": "加納 🇬🇭",
                  "role": "隊史鐵人快馬前鋒"
            },
            {
                  "num": 12,
                  "name": "戈爾卡·古魯澤塔 (Gorka Guruzeta)",
                  "nat": "西班牙 🇪🇸",
                  "role": "主力中鋒"
            }
      ]
},
    "勒沃庫森": {
      "manager": "哈維·阿隆索 (Xabi Alonso)",
      "captain": "盧卡斯·赫拉德茨基 (Lukáš Hrádecký)",
      "gk": [
            {
                  "num": 1,
                  "name": "盧卡斯·赫拉德茨基 (Lukáš Hrádecký)",
                  "nat": "芬蘭 🇫🇮",
                  "role": "功勳隊長門神"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "約納坦·塔 (Jonathan Tah)",
                  "nat": "德國 🇩🇪",
                  "role": "後防定海神針"
            },
            {
                  "num": 12,
                  "name": "艾德蒙·塔普索巴 (Edmond Tapsoba)",
                  "nat": "布吉納法索 🇧🇫",
                  "role": "頂級出球中衛"
            },
            {
                  "num": 20,
                  "name": "亞歷杭德羅·格里馬爾多 (Grimaldo)",
                  "nat": "西班牙 🇪🇸",
                  "role": "世界第一自由球左翼衛"
            },
            {
                  "num": 30,
                  "name": "耶雷米·弗林蓬 (Jeremie Frimpong)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "超音速右翼衛"
            }
      ],
      "mf": [
            {
                  "num": 10,
                  "name": "弗洛里安·維爾茨 (Florian Wirtz)",
                  "nat": "德國 🇩🇪",
                  "role": "德國金童/中場魔術師"
            },
            {
                  "num": 34,
                  "name": "格拉尼特·扎卡 (Granit Xhaka)",
                  "nat": "瑞士 🇨🇭",
                  "role": "更衣室領袖/大腦節拍器"
            },
            {
                  "num": 25,
                  "name": "埃塞基耶爾·帕拉西奧斯 (Palacios)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "防守鐵腰"
            }
      ],
      "fw": [
            {
                  "num": 22,
                  "name": "維克托·博尼法斯 (Victor Boniface)",
                  "nat": "奈及利亞 🇳🇬",
                  "role": "強力對抗中鋒"
            },
            {
                  "num": 14,
                  "name": "帕特里克·希克 (Patrik Schick)",
                  "nat": "捷克 🇨🇿",
                  "role": "絕殺神鋒"
            }
      ]
},
    "多特蒙德": {
      "manager": "努里·沙欣 (Nuri Şahin)",
      "captain": "埃姆雷·詹 (Emre Can)",
      "gk": [
            {
                  "num": 1,
                  "name": "格雷戈·科貝爾 (Gregor Kobel)",
                  "nat": "瑞士 🇨🇭",
                  "role": "世界頂級門將"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "尼科·施洛特貝克 (Nico Schlotterbeck)",
                  "nat": "德國 🇩🇪",
                  "role": "德國主力出球中衛"
            },
            {
                  "num": 3,
                  "name": "瓦爾德馬·安東 (Waldemar Anton)",
                  "nat": "德國 🇩🇪",
                  "role": "主力中衛"
            },
            {
                  "num": 26,
                  "name": "尤利安·雷爾森 (Julian Ryerson)",
                  "nat": "挪威 🇳🇴",
                  "role": "鐵血邊衛"
            }
      ],
      "mf": [
            {
                  "num": 10,
                  "name": "尤利安·布蘭特 (Julian Brandt)",
                  "nat": "德國 🇩🇪",
                  "role": "10號組織大腦"
            },
            {
                  "num": 23,
                  "name": "埃姆雷·詹 (Emre Can)",
                  "nat": "德國 🇩🇪",
                  "role": "隊長/防守後腰"
            },
            {
                  "num": 13,
                  "name": "帕斯卡爾·格羅斯 (Pascal Groß)",
                  "nat": "德國 🇩🇪",
                  "role": "助攻大師"
            },
            {
                  "num": 20,
                  "name": "馬塞爾·薩比策 (Marcel Sabitzer)",
                  "nat": "奧地利 🇦🇹",
                  "role": "歐冠最佳跑動中場"
            }
      ],
      "fw": [
            {
                  "num": 9,
                  "name": "塞爾胡·吉拉西 (Serhou Guirassy)",
                  "nat": "幾內亞 🇬🇳",
                  "role": "主力王牌中鋒"
            },
            {
                  "num": 27,
                  "name": "卡里姆·阿德耶米 (Karim Adeyemi)",
                  "nat": "德國 🇩🇪",
                  "role": "最高速飛翼"
            },
            {
                  "num": 43,
                  "name": "傑米·吉滕斯 (Jamie Gittens)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "邊路爆破奇兵"
            }
      ]
},
    "RB萊比錫": {
      "manager": "馬爾科·羅澤 (Marco Rose)",
      "captain": "威利·奧爾班 (Willi Orbán)",
      "gk": [
            {
                  "num": 1,
                  "name": "彼得·古拉奇 (Péter Gulácsi)",
                  "nat": "匈牙利 🇭🇺",
                  "role": "主力門將"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "威利·奧爾班 (Willi Orbán)",
                  "nat": "匈牙利 🇭🇺",
                  "role": "隊長/防線核心"
            },
            {
                  "num": 23,
                  "name": "卡斯特羅·盧克巴 (Castello Lukeba)",
                  "nat": "法國 🇫🇷",
                  "role": "主力中衛"
            },
            {
                  "num": 22,
                  "name": "戴維·勞姆 (David Raum)",
                  "nat": "德國 🇩🇪",
                  "role": "德國主力傳中王左衛"
            }
      ],
      "mf": [
            {
                  "num": 10,
                  "name": "哈維·西蒙斯 (Xavi Simons)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "進攻核心天才"
            },
            {
                  "num": 8,
                  "name": "阿馬杜·海達拉 (Amadou Haidara)",
                  "nat": "馬利 🇲🇱",
                  "role": "全能中場"
            }
      ],
      "fw": [
            {
                  "num": 30,
                  "name": "本亞明·塞斯科 (Benjamin Šeško)",
                  "nat": "斯洛維尼亞 🇸🇮",
                  "role": "超級中鋒新星"
            },
            {
                  "num": 11,
                  "name": "洛伊斯·奧蓬達 (Loïs Openda)",
                  "nat": "比利時 🇧🇪",
                  "role": "閃電射手"
            }
      ]
},
    "尤文圖斯": {
      "manager": "蒂亞戈·莫塔 (Thiago Motta)",
      "captain": "達尼洛 (Danilo)",
      "gk": [
            {
                  "num": 29,
                  "name": "米歇爾·迪格雷戈里奧 (Di Gregorio)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力國門"
            }
      ],
      "df": [
            {
                  "num": 3,
                  "name": "布雷默 (Bremer)",
                  "nat": "巴西 🇧🇷",
                  "role": "義甲第一中後衛"
            },
            {
                  "num": 4,
                  "name": "費德里科·加蒂 (Federico Gatti)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力中衛"
            },
            {
                  "num": 27,
                  "name": "安德烈亞·坎比亞索 (Cambiaso)",
                  "nat": "義大利 🇮🇹",
                  "role": "全能邊衛自由人"
            }
      ],
      "mf": [
            {
                  "num": 10,
                  "name": "凱南·伊爾迪茲 (Kenan Yıldız)",
                  "nat": "土耳其 🇹🇷",
                  "role": "新10號金童"
            },
            {
                  "num": 8,
                  "name": "特恩·庫普邁納斯 (Koopmeiners)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "中場組織重砲"
            },
            {
                  "num": 19,
                  "name": "凱夫倫·圖拉姆 (Khéphren Thuram)",
                  "nat": "法國 🇫🇷",
                  "role": "推進型中場"
            }
      ],
      "fw": [
            {
                  "num": 9,
                  "name": "杜桑·弗拉霍維奇 (Dušan Vlahović)",
                  "nat": "塞爾維亞 🇷🇸",
                  "role": "主力頭號神鋒"
            },
            {
                  "num": 7,
                  "name": "弗朗西斯科·孔塞桑 (Conceição)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "盤帶邊鋒"
            },
            {
                  "num": 11,
                  "name": "尼古拉斯·岡薩雷斯 (Nico González)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "全能邊鋒"
            }
      ]
},
    "AC米蘭": {
      "manager": "保羅·豐塞卡 (Paulo Fonseca)",
      "captain": "達維德·卡拉布里亞 (Davide Calabria)",
      "gk": [
            {
                  "num": 16,
                  "name": "邁克·邁尼昂 (Mike Maignan)",
                  "nat": "法國 🇫🇷",
                  "role": "世界頂級門將/法國一門"
            }
      ],
      "df": [
            {
                  "num": 19,
                  "name": "特奧·埃爾南德斯 (Theo Hernández)",
                  "nat": "法國 🇫🇷",
                  "role": "世界第一帶刀左後衛"
            },
            {
                  "num": 23,
                  "name": "菲卡約·托莫里 (Fikayo Tomori)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "主力中衛"
            },
            {
                  "num": 31,
                  "name": "斯特拉希尼亞·帕夫洛維奇 (Pavlović)",
                  "nat": "塞爾維亞 🇷🇸",
                  "role": "硬漢中衛"
            }
      ],
      "mf": [
            {
                  "num": 14,
                  "name": "蒂賈尼·賴因德斯 (Tijjani Reijnders)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "中場推進大腦"
            },
            {
                  "num": 29,
                  "name": "優素福·福法納 (Youssouf Fofana)",
                  "nat": "法國 🇫🇷",
                  "role": "防守鐵腰"
            },
            {
                  "num": 8,
                  "name": "魯本·洛夫圖斯-奇克 (Loftus-Cheek)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "進攻中場"
            }
      ],
      "fw": [
            {
                  "num": 10,
                  "name": "拉斐爾·萊奧 (Rafael Leão)",
                  "nat": "葡萄牙 🇵🇹",
                  "role": "米蘭頭號核心/世界級左路超巨"
            },
            {
                  "num": 11,
                  "name": "克里斯蒂安·普利西奇 (Christian Pulisic)",
                  "nat": "美國 🇺🇸",
                  "role": "美國隊長/進球大腿"
            },
            {
                  "num": 7,
                  "name": "阿爾瓦羅·莫拉塔 (Álvaro Morata)",
                  "nat": "西班牙 🇪🇸",
                  "role": "歐洲盃冠軍隊長/主力中鋒"
            }
      ]
},
    "拿坡里": {
      "manager": "安東尼奧·孔蒂 (Antonio Conte)",
      "captain": "喬瓦尼·迪洛倫佐 (Giovanni Di Lorenzo)",
      "gk": [
            {
                  "num": 1,
                  "name": "亞歷克斯·梅雷特 (Alex Meret)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力門將"
            }
      ],
      "df": [
            {
                  "num": 22,
                  "name": "喬瓦尼·迪洛倫佐 (Di Lorenzo)",
                  "nat": "義大利 🇮🇹",
                  "role": "隊長/右後衛"
            },
            {
                  "num": 4,
                  "name": "亞歷山德羅·布翁喬爾諾 (Buongiorno)",
                  "nat": "義大利 🇮🇹",
                  "role": "新援中衛鐵閘"
            },
            {
                  "num": 13,
                  "name": "阿米爾·拉馬尼 (Amir Rrahmani)",
                  "nat": "科索沃 🇽🇰",
                  "role": "主力中衛"
            }
      ],
      "mf": [
            {
                  "num": 68,
                  "name": "斯坦尼斯拉夫·洛博特卡 (Lobotka)",
                  "nat": "斯洛伐克 🇸🇰",
                  "role": "中場節拍器"
            },
            {
                  "num": 99,
                  "name": "安德烈-弗蘭克·贊博·安吉薩 (Anguissa)",
                  "nat": "喀麥隆 🇨🇲",
                  "role": "全能中場"
            },
            {
                  "num": 8,
                  "name": "斯科特·麥克托米奈 (McTominay)",
                  "nat": "蘇格蘭 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                  "role": "插上得分王"
            }
      ],
      "fw": [
            {
                  "num": 77,
                  "name": "赫維恰·克瓦拉茨赫利亞 (Kvaratskhelia)",
                  "nat": "喬治亞 🇬🇪",
                  "role": "拿坡里王牌/盤帶魔術師"
            },
            {
                  "num": 11,
                  "name": "羅梅盧·盧卡庫 (Romelu Lukaku)",
                  "nat": "比利時 🇧🇪",
                  "role": "主力重裝中鋒"
            },
            {
                  "num": 21,
                  "name": "馬特奧·波利塔諾 (Matteo Politano)",
                  "nat": "義大利 🇮🇹",
                  "role": "右邊鋒"
            }
      ]
},
    "亞特蘭大": {
      "manager": "吉安·皮耶羅·加斯佩里尼 (Gasperini)",
      "captain": "拉斐爾·托洛伊 (Rafael Tolói)",
      "gk": [
            {
                  "num": 29,
                  "name": "馬爾科·卡爾內塞基 (Carnesecchi)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力門將"
            }
      ],
      "df": [
            {
                  "num": 4,
                  "name": "伊薩克·希恩 (Isak Hien)",
                  "nat": "瑞典 🇸🇪",
                  "role": "主力中衛"
            },
            {
                  "num": 19,
                  "name": "培姆·吉姆西蒂 (Berat Djimsiti)",
                  "nat": "阿爾巴尼亞 🇦🇱",
                  "role": "中衛"
            },
            {
                  "num": 77,
                  "name": "馬特奧·魯傑里 (Matteo Ruggeri)",
                  "nat": "義大利 🇮🇹",
                  "role": "主力左翼衛"
            }
      ],
      "mf": [
            {
                  "num": 15,
                  "name": "馬爾滕·德容恩 (Marten de Roon)",
                  "nat": "荷蘭 🇳🇱",
                  "role": "隊長/鐵腰"
            },
            {
                  "num": 13,
                  "name": "埃德森 (Éderson)",
                  "nat": "巴西 🇧🇷",
                  "role": "頂級搶斷中場"
            },
            {
                  "num": 8,
                  "name": "馬里奧·帕薩利奇 (Mario Pašalić)",
                  "nat": "克羅埃西亞 🇭🇷",
                  "role": "全能中場"
            }
      ],
      "fw": [
            {
                  "num": 11,
                  "name": "阿德莫拉·盧克曼 (Ademola Lookman)",
                  "nat": "奈及利亞 🇳🇬",
                  "role": "金球候選/歐聯決賽帽子戲法超巨"
            },
            {
                  "num": 32,
                  "name": "馬特奧·雷特吉 (Mateo Retegui)",
                  "nat": "義大利 🇮🇹",
                  "role": "義甲進球榜首"
            },
            {
                  "num": 17,
                  "name": "夏爾·德凱特拉雷 (De Ketelaere)",
                  "nat": "比利時 🇧🇪",
                  "role": "組織型前鋒"
            }
      ]
},
    "摩納哥": {
      "manager": "阿迪·許特爾 (Adi Hütter)",
      "captain": "德尼斯·扎卡利亞 (Denis Zakaria)",
      "gk": [
            {
                  "num": 1,
                  "name": "拉多斯瓦夫·馬耶茨基 (Majecki)",
                  "nat": "波蘭 🇵🇱",
                  "role": "主力門將"
            }
      ],
      "df": [
            {
                  "num": 5,
                  "name": "蒂洛·科雷爾 (Thilo Kehrer)",
                  "nat": "德國 🇩🇪",
                  "role": "後防主力"
            },
            {
                  "num": 2,
                  "name": "萬德松 (Vanderson)",
                  "nat": "巴西 🇧🇷",
                  "role": "右後衛"
            },
            {
                  "num": 12,
                  "name": "卡約·恩里克 (Caio Henrique)",
                  "nat": "巴西 🇧🇷",
                  "role": "主力左後衛"
            }
      ],
      "mf": [
            {
                  "num": 6,
                  "name": "德尼斯·扎卡利亞 (Denis Zakaria)",
                  "nat": "瑞士 🇨🇭",
                  "role": "隊長/防守後腰"
            },
            {
                  "num": 18,
                  "name": "南野拓實 (Takumi Minamino)",
                  "nat": "日本 🇯🇵",
                  "role": "日本王牌/前場進攻核心"
            },
            {
                  "num": 11,
                  "name": "馬格尼斯·阿克利烏什 (Akliouche)",
                  "nat": "法國 🇫🇷",
                  "role": "技術天才邊翼"
            }
      ],
      "fw": [
            {
                  "num": 36,
                  "name": "布雷爾·恩博洛 (Breel Embolo)",
                  "nat": "瑞士 🇨🇭",
                  "role": "主力強力中鋒"
            },
            {
                  "num": 9,
                  "name": "福拉林·巴洛貢 (Folarin Balogun)",
                  "nat": "美國 🇺🇸",
                  "role": "主力射手"
            }
      ]
},
    "馬賽": {
      "manager": "羅伯托·德澤爾比 (Roberto De Zerbi)",
      "captain": "萊昂納多·巴萊爾迪 (Leonardo Balerdi)",
      "gk": [
            {
                  "num": 1,
                  "name": "赫羅尼莫·魯利 (Gerónimo Rulli)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "世界盃冠軍門將"
            }
      ],
      "df": [
            {
                  "num": 5,
                  "name": "萊昂納多·巴萊爾迪 (Leonardo Balerdi)",
                  "nat": "阿根廷 🇦🇷",
                  "role": "隊長/主力中衛"
            },
            {
                  "num": 3,
                  "name": "昆廷·梅蘭 (Quentin Merlin)",
                  "nat": "法國 🇫🇷",
                  "role": "主力左後衛"
            }
      ],
      "mf": [
            {
                  "num": 23,
                  "name": "皮埃爾-埃米爾·霍伊別爾 (Højbjerg)",
                  "nat": "丹麥 🇩🇰",
                  "role": "中場大腦指揮官"
            },
            {
                  "num": 25,
                  "name": "阿德里安·拉比奧 (Adrien Rabiot)",
                  "nat": "法國 🇫🇷",
                  "role": "法國主力國腳中場"
            }
      ],
      "fw": [
            {
                  "num": 10,
                  "name": "梅森·格林伍德 (Mason Greenwood)",
                  "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                  "role": "法甲金靴級頭號射手/雙足天才"
            },
            {
                  "num": 9,
                  "name": "埃利·瓦希 (Elye Wahi)",
                  "nat": "法國 🇫🇷",
                  "role": "主力速度前鋒"
            }
      ]
},
    "伯恩茅斯": {
      "manager": "安東尼·伊勞拉 (Andoni Iraola)",
      "captain": "亞當·史密斯 (Adam Smith)",
      "gk": [
        { "num": 13, "name": "凱帕·阿里薩瓦拉加 (Kepa Arrizabalaga)", "nat": "西班牙 🇪🇸", "role": "歐冠冠軍主力門將" },
        { "num": 42, "name": "馬克·特拉弗斯 (Mark Travers)", "nat": "愛爾蘭 🇮🇪", "role": "副選門將" }
      ],
      "df": [
        { "num": 27, "name": "伊利亞·扎巴爾尼 (Illia Zabarnyi)", "nat": "烏克蘭 🇺🇦", "role": "主力中衛基石" },
        { "num": 5, "name": "馬科斯·塞內西 (Marcos Senesi)", "nat": "阿根廷 🇦🇷", "role": "阿根廷主力中衛" },
        { "num": 15, "name": "亞當·史密斯 (Adam Smith)", "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "role": "隊長/資深右後衛" },
        { "num": 3, "name": "米洛什·科爾克茲 (Milos Kerkez)", "nat": "匈牙利 🇭🇺", "role": "超新星左後衛" },
        { "num": 2, "name": "迪恩·赫伊森 (Dean Huijsen)", "nat": "西班牙 🇪🇸", "role": "高大潛力中衛" }
      ],
      "mf": [
        { "num": 4, "name": "劉易斯·庫克 (Lewis Cook)", "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "role": "中場組織樞紐" },
        { "num": 10, "name": "馬庫斯·塔弗尼爾 (Marcus Tavernier)", "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "role": "進攻組織發動機" },
        { "num": 8, "name": "亞歷克斯·斯科特 (Alex Scott)", "nat": "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "role": "英格蘭中場新星" },
        { "num": 16, "name": "馬庫斯·克里斯蒂 (Ryan Christie)", "nat": "蘇格蘭 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "role": "全能逼搶中場" }
      ],
      "fw": [
        { "num": 9, "name": "埃瓦尼爾森 (Evanilson)", "nat": "巴西 🇧🇷", "role": "破隊史紀錄主力中鋒/頭號進攻核心" },
        { "num": 11, "name": "丹戈·瓦塔拉 (Dango Ouattara)", "nat": "布吉納法索 🇧🇫", "role": "邊路快馬突破手" },
        { "num": 17, "name": "路易斯·西尼斯特拉 (Luis Sinisterra)", "nat": "哥倫比亞 🇨🇴", "role": "主力內切技術型邊鋒" },
        { "num": 19, "name": "賈斯汀·克魯伊維特 (Justin Kluivert)", "nat": "荷蘭 🇳🇱", "role": "荷蘭名宿之子/靈動射手" },
        { "num": 26, "name": "埃內斯·於納爾 (Enes Ünal)", "nat": "土耳其 🇹🇷", "role": "強力支點中鋒" }
      ]
    },
    "里昂": {
      "manager": "皮埃爾·薩熱 (Pierre Sage)",
      "captain": "亞歷山大·拉卡澤特 (Lacazette)",
      "gk": [
        { "num": 23, "name": "盧卡斯·佩里 (Lucas Perri)", "nat": "巴西 🇧🇷", "role": "巴西國門主力門將" },
        { "num": 1, "name": "安東尼·洛佩斯 (Anthony Lopes)", "nat": "葡萄牙 🇵🇹", "role": "隊史功勳門將" }
      ],
      "df": [
        { "num": 55, "name": "杜耶·查萊塔-察爾 (Ćaleta-Car)", "nat": "克羅埃西亞 🇭🇷", "role": "主力中衛" },
        { "num": 19, "name": "穆薩·尼亞卡特 (Moussa Niakhaté)", "nat": "塞內加爾 🇸🇳", "role": "鐵血中衛" },
        { "num": 3, "name": "尼古拉斯·塔利亞菲科 (Tagliafico)", "nat": "阿根廷 🇦🇷", "role": "世界盃冠軍主力左後衛" },
        { "num": 22, "name": "克林頓·馬塔 (Clinton Mata)", "nat": "安哥拉 🇦🇴", "role": "主力右後衛" }
      ],
      "mf": [
        { "num": 17, "name": "坦納·特斯曼 (Tanner Tessmann)", "nat": "美國 🇺🇸", "role": "主力引進後腰/攻守大腦 🔥新援" },
        { "num": 8, "name": "科朗坦·托利索 (Corentin Tolisso)", "nat": "法國 🇫🇷", "role": "世界盃冠軍全能中場" },
        { "num": 6, "name": "馬克斯·卡克雷 (Maxence Caqueret)", "nat": "法國 🇫🇷", "role": "跑動梳理中場" },
        { "num": 31, "name": "內馬尼亞·馬蒂奇 (Nemanja Matić)", "nat": "塞爾維亞 🇷🇸", "role": "資深後腰防守大師" },
        { "num": 4, "name": "保羅·阿庫奧庫 (Paul Akouokou)", "nat": "象牙海岸 🇨🇮", "role": "防守後腰" }
      ],
      "fw": [
        { "num": 10, "name": "亞歷山大·拉卡澤特 (Alexandre Lacazette)", "nat": "法國 🇫🇷", "role": "隊長/隊史傳奇射手王" },
        { "num": 11, "name": "馬利克·福法納 (Malick Fofana)", "nat": "比利時 🇧🇪", "role": "歐洲頂級爆破邊翼新星" },
        { "num": 69, "name": "喬治·米考塔澤 (Georges Mikautadze)", "nat": "喬治亞 🇬🇪", "role": "歐洲盃金靴強力中鋒" },
        { "num": 37, "name": "歐內斯特·努瓦馬 (Ernest Nuamah)", "nat": "加納 🇬🇭", "role": "高速突破手" }
      ]
    }
  },
  leagueStandings: {
    epl: [
      { rank: 1, team: "曼徹斯特城", played: 3, won: 3, drawn: 0, lost: 0, gf: 9, ga: 2, gd: "+7", pts: 9, form: ["W", "W", "W"] },
      { rank: 2, team: "阿森納", played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 2, gd: "+4", pts: 6, form: ["W", "W", "L"] },
      { rank: 3, team: "切爾西", played: 3, won: 2, drawn: 0, lost: 1, gf: 7, ga: 5, gd: "+2", pts: 6, form: ["L", "W", "W"] },
      { rank: 4, team: "利物浦", played: 3, won: 1, drawn: 2, lost: 0, gf: 5, ga: 3, gd: "+2", pts: 5, form: ["D", "D", "W"] },
      { rank: 5, team: "布倫特福德", played: 3, won: 1, drawn: 2, lost: 0, gf: 5, ga: 2, gd: "+3", pts: 5, form: ["W", "D", "D"] },
      { rank: 6, team: "紐卡索聯", played: 3, won: 1, drawn: 2, lost: 0, gf: 4, ga: 2, gd: "+2", pts: 5, form: ["D", "W", "D"] },
      { rank: 7, team: "布萊頓", played: 3, won: 1, drawn: 1, lost: 1, gf: 6, ga: 2, gd: "+4", pts: 4, form: ["W", "D", "L"] },
      { rank: 8, team: "埃弗頓", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 2, gd: "+2", pts: 4, form: ["L", "W", "D"] },
      { rank: 9, team: "曼徹斯特聯", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 3, gd: "+1", pts: 3, form: ["W", "L", "L"] },
      { rank: 10, team: "水晶宮", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 7, gd: "-4", pts: 3, form: ["L", "L", "W"] },
      { rank: 11, team: "伊普斯維奇", played: 3, won: 1, drawn: 0, lost: 2, gf: 2, ga: 6, gd: "-4", pts: 3, form: ["L", "W", "L"] },
      { rank: 12, team: "伯恩茅斯", played: 3, won: 0, drawn: 2, lost: 1, gf: 3, ga: 4, gd: "-1", pts: 2, form: ["D", "D", "L"] },
      { rank: 13, team: "諾丁漢森林", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 3, gd: "-1", pts: 2, form: ["D", "D", "L"] },
      { rank: 14, team: "西漢姆聯", played: 3, won: 0, drawn: 2, lost: 1, gf: 3, ga: 5, gd: "-2", pts: 2, form: ["L", "D", "D"] },
      { rank: 15, team: "熱刺", played: 3, won: 0, drawn: 1, lost: 2, gf: 3, ga: 8, gd: "-5", pts: 1, form: ["D", "L", "L"] },
      { rank: 16, team: "富勒姆", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 5, gd: "-3", pts: 1, form: ["L", "D", "L"] },
      { rank: 17, team: "狼隊", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, gd: "-4", pts: 1, form: ["L", "D", "L"] },
      { rank: 18, team: "萊斯特城", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, gd: "-4", pts: 1, form: ["L", "L", "D"] },
      { rank: 19, team: "阿斯頓維拉", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 6, gd: "-5", pts: 0, form: ["L", "L", "L"] },
      { rank: 20, team: "柯文垂城", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 6, gd: "-5", pts: 0, form: ["L", "L", "L"] }
    ],
    laliga: [
      { rank: 1, team: "巴塞隆納", played: 3, won: 3, drawn: 0, lost: 0, gf: 10, ga: 0, gd: "+10", pts: 9, form: ["W", "W", "W"] },
      { rank: 2, team: "皇家馬德里", played: 4, won: 3, drawn: 0, lost: 1, gf: 9, ga: 2, gd: "+7", pts: 9, form: ["W", "W", "L", "W"] },
      { rank: 3, team: "皇家貝蒂斯", played: 4, won: 3, drawn: 0, lost: 1, gf: 5, ga: 5, gd: "0", pts: 9, form: ["W", "L", "W", "W"] },
      { rank: 4, team: "阿拉維斯", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, gd: "+4", pts: 7, form: ["W", "D", "W"] },
      { rank: 5, team: "奧薩蘇納", played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 3, gd: "+2", pts: 7, form: ["D", "W", "W"] },
      { rank: 6, team: "馬德里競技", played: 4, won: 2, drawn: 1, lost: 1, gf: 5, ga: 4, gd: "+1", pts: 7, form: ["D", "W", "L", "W"] },
      { rank: 7, team: "畢爾包競技", played: 4, won: 2, drawn: 0, lost: 2, gf: 5, ga: 4, gd: "+1", pts: 6, form: ["W", "L", "W", "L"] },
      { rank: 8, team: "塞維利亞", played: 3, won: 2, drawn: 0, lost: 1, gf: 4, ga: 3, gd: "+1", pts: 6, form: ["L", "W", "W"] },
      { rank: 9, team: "巴列卡諾", played: 4, won: 1, drawn: 1, lost: 2, gf: 3, ga: 6, gd: "-3", pts: 4, form: ["L", "W", "D", "L"] },
      { rank: 10, team: "皇家社會", played: 4, won: 1, drawn: 1, lost: 2, gf: 3, ga: 6, gd: "-3", pts: 4, form: ["W", "L", "D", "L"] },
      { rank: 11, team: "西班牙人", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 3, gd: "+1", pts: 3, form: ["L", "L", "W"] },
      { rank: 12, team: "吉羅納", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, gd: "-2", pts: 3, form: ["L", "W", "L"] },
      { rank: 13, team: "赫塔費", played: 3, won: 1, drawn: 0, lost: 2, gf: 1, ga: 4, gd: "-3", pts: 3, form: ["W", "L", "L"] },
      { rank: 14, team: "馬約卡", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 3, gd: "-1", pts: 2, form: ["D", "D", "L"] },
      { rank: 15, team: "比亞雷亞爾", played: 4, won: 0, drawn: 2, lost: 2, gf: 4, ga: 6, gd: "-2", pts: 2, form: ["D", "L", "D", "L"] },
      { rank: 16, team: "塞爾塔維戈", played: 4, won: 0, drawn: 2, lost: 2, gf: 3, ga: 6, gd: "-3", pts: 2, form: ["L", "D", "L", "D"] },
      { rank: 17, team: "雷加利斯", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 4, gd: "-2", pts: 2, form: ["D", "D", "L"] },
      { rank: 18, team: "瓦倫西亞", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 5, gd: "-3", pts: 1, form: ["L", "D", "L"] },
      { rank: 19, team: "拉斯帕爾馬斯", played: 3, won: 0, drawn: 1, lost: 2, gf: 3, ga: 7, gd: "-4", pts: 1, form: ["D", "L", "L"] },
      { rank: 20, team: "皇家巴利亞多利德", played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 7, gd: "-6", pts: 1, form: ["L", "D", "L"] }
    ],
    bundesliga: [
      { rank: 1, team: "拜仁慕尼黑", played: 2, won: 2, drawn: 0, lost: 0, gf: 7, ga: 2, gd: "+5", pts: 6, form: ["W", "W"] },
      { rank: 2, team: "勒沃庫森", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 2, gd: "+4", pts: 6, form: ["W", "W"] },
      { rank: 3, team: "海登海姆", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 0, gd: "+6", pts: 6, form: ["W", "W"] },
      { rank: 4, team: "多特蒙德", played: 2, won: 1, drawn: 1, lost: 0, gf: 4, ga: 1, gd: "+3", pts: 4, form: ["W", "D"] },
      { rank: 5, team: "RB萊比錫", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 2, gd: "+1", pts: 3, form: ["W", "L"] },
      { rank: 6, team: "法蘭克福", played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, gd: "+1", pts: 3, form: ["L", "W"] },
      { rank: 7, team: "弗萊堡", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, gd: "0", pts: 3, form: ["W", "L"] },
      { rank: 8, team: "柏林聯", played: 2, won: 1, drawn: 1, lost: 0, gf: 2, ga: 1, gd: "+1", pts: 4, form: ["D", "W"] },
      { rank: 9, team: "沃爾夫斯堡", played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, gd: "+1", pts: 3, form: ["L", "W"] },
      { rank: 10, team: "文達不萊梅", played: 2, won: 0, drawn: 2, lost: 0, gf: 4, ga: 4, gd: "0", pts: 2, form: ["D", "D"] },
      { rank: 11, team: "美因茲 05", played: 2, won: 0, drawn: 2, lost: 0, gf: 4, ga: 4, gd: "0", pts: 2, form: ["D", "D"] },
      { rank: 12, team: "斯圖加特", played: 2, won: 0, drawn: 1, lost: 1, gf: 4, ga: 6, gd: "-2", pts: 1, form: ["L", "D"] },
      { rank: 13, team: "奧格斯堡", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 6, gd: "-4", pts: 1, form: ["D", "L"] },
      { rank: 14, team: "霍芬海姆", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 5, gd: "-2", pts: 3, form: ["W", "L"] },
      { rank: 15, team: "門興格拉德巴赫", played: 2, won: 0, drawn: 0, lost: 2, gf: 2, ga: 5, gd: "-3", pts: 0, form: ["L", "L"] },
      { rank: 16, team: "聖保利", played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 3, gd: "-3", pts: 0, form: ["L", "L"] },
      { rank: 17, team: "波鴻", played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 3, gd: "-3", pts: 0, form: ["L", "L"] },
      { rank: 18, team: "霍爾斯坦基爾", played: 2, won: 0, drawn: 0, lost: 2, gf: 2, ga: 5, gd: "-3", pts: 0, form: ["L", "L"] }
    ],
    seriea: [
      { rank: 1, team: "國際米蘭", played: 3, won: 2, drawn: 1, lost: 0, gf: 8, ga: 2, gd: "+6", pts: 7, form: ["D", "W", "W"] },
      { rank: 2, team: "尤文圖斯", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 0, gd: "+6", pts: 7, form: ["W", "W", "D"] },
      { rank: 3, team: "杜林", played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 3, gd: "+2", pts: 7, form: ["D", "W", "W"] },
      { rank: 4, team: "烏迪內斯", played: 3, won: 2, drawn: 1, lost: 0, gf: 4, ga: 2, gd: "+2", pts: 7, form: ["D", "W", "W"] },
      { rank: 5, team: "拿坡里", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, gd: "+1", pts: 6, form: ["L", "W", "W"] },
      { rank: 6, team: "維羅納", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 3, gd: "+2", pts: 6, form: ["W", "L", "W"] },
      { rank: 7, team: "恩波利", played: 3, won: 1, drawn: 2, lost: 0, gf: 3, ga: 2, gd: "+1", pts: 5, form: ["D", "W", "D"] },
      { rank: 8, team: "拉齊奧", played: 3, won: 1, drawn: 1, lost: 1, gf: 6, ga: 5, gd: "+1", pts: 4, form: ["W", "L", "D"] },
      { rank: 9, team: "帕爾馬", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, gd: "0", pts: 4, form: ["D", "W", "L"] },
      { rank: 10, team: "熱那亞", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 4, gd: "-1", pts: 4, form: ["D", "W", "L"] },
      { rank: 11, team: "佛羅倫薩", played: 3, won: 0, drawn: 3, lost: 0, gf: 3, ga: 3, gd: "0", pts: 3, form: ["D", "D", "D"] },
      { rank: 12, team: "亞特蘭大", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 6, gd: "-1", pts: 3, form: ["W", "L", "L"] },
      { rank: 13, team: "萊切", played: 3, won: 1, drawn: 0, lost: 2, gf: 1, ga: 6, gd: "-5", pts: 3, form: ["L", "L", "W"] },
      { rank: 14, team: "AC米蘭", played: 3, won: 0, drawn: 2, lost: 1, gf: 5, ga: 6, gd: "-1", pts: 2, form: ["D", "L", "D"] },
      { rank: 15, team: "蒙札", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 3, gd: "-1", pts: 2, form: ["D", "L", "D"] },
      { rank: 16, team: "卡利亞里", played: 3, won: 0, drawn: 2, lost: 1, gf: 1, ga: 2, gd: "-1", pts: 2, form: ["D", "D", "L"] },
      { rank: 17, team: "羅馬", played: 3, won: 0, drawn: 2, lost: 1, gf: 1, ga: 2, gd: "-1", pts: 2, form: ["D", "L", "D"] },
      { rank: 18, team: "波隆那", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 5, gd: "-3", pts: 2, form: ["D", "L", "D"] },
      { rank: 19, team: "科莫", played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 5, gd: "-4", pts: 1, form: ["L", "D", "L"] },
      { rank: 20, team: "威尼斯", played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 4, gd: "-3", pts: 1, form: ["L", "D", "L"] }
    ],
    ligue1: [
      { rank: 1, team: "巴黎聖日耳曼", played: 3, won: 3, drawn: 0, lost: 0, gf: 13, ga: 2, gd: "+11", pts: 9, form: ["W", "W", "W"] },
      { rank: 2, team: "馬賽", played: 3, won: 2, drawn: 1, lost: 0, gf: 10, ga: 4, gd: "+6", pts: 7, form: ["W", "D", "W"] },
      { rank: 3, team: "摩納哥", played: 3, won: 2, drawn: 1, lost: 0, gf: 4, ga: 1, gd: "+3", pts: 7, form: ["W", "W", "D"] },
      { rank: 4, team: "朗斯", played: 3, won: 2, drawn: 1, lost: 0, gf: 4, ga: 1, gd: "+3", pts: 7, form: ["W", "W", "D"] },
      { rank: 5, team: "南特", played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 1, gd: "+4", pts: 7, form: ["D", "W", "W"] },
      { rank: 6, team: "里爾", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 3, gd: "+2", pts: 6, form: ["W", "W", "L"] },
      { rank: 7, team: "勒哈費爾", played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 5, gd: "+1", pts: 6, form: ["L", "W", "W"] },
      { rank: 8, team: "斯特拉斯堡", played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 5, gd: "0", pts: 4, form: ["D", "W", "L"] },
      { rank: 9, team: "尼斯", played: 3, won: 1, drawn: 1, lost: 1, gf: 6, ga: 4, gd: "+2", pts: 4, form: ["L", "D", "W"] },
      { rank: 10, team: "雷恩", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 5, gd: "-1", pts: 3, form: ["W", "L", "L"] },
      { rank: 11, team: "土魯斯", played: 3, won: 0, drawn: 2, lost: 1, gf: 2, ga: 4, gd: "-2", pts: 2, form: ["D", "D", "L"] },
      { rank: 12, team: "布雷斯特", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 7, gd: "-2", pts: 3, form: ["L", "L", "W"] },
      { rank: 13, team: "蘭斯", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 5, gd: "-1", pts: 4, form: ["L", "D", "W"] },
      { rank: 14, team: "里昂", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 8, gd: "-4", pts: 3, form: ["L", "L", "W"] },
      { rank: 15, team: "歐塞爾", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 6, gd: "-3", pts: 3, form: ["W", "L", "L"] },
      { rank: 16, team: "蒙彼利埃", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 10, gd: "-8", pts: 1, form: ["D", "L", "L"] },
      { rank: 17, team: "昂熱", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 7, gd: "-6", pts: 0, form: ["L", "L", "L"] },
      { rank: 18, team: "聖埃蒂安", played: 3, won: 0, drawn: 0, lost: 3, gf: 0, ga: 7, gd: "-7", pts: 0, form: ["L", "L", "L"] }
    ]
  },
  meta: {
    lastUpdatedDate: "2026-09-06",
    lastMatchDate: "2026-09-05",
    intlBreakWindow: "2026-09-01 至 2026-09-08",
    nextRoundStartDate: "2026-09-12 (週六)"
  },
  leagueFixtures: {
    "uefa": [
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-16 03:00",
            "home": "曼徹斯特城",
            "away": "國際米蘭",
            "status": "即將上演",
            "stadium": "阿提哈德球場 (曼徹斯特)",
            "highlight": "歐冠決賽重演・英意霸主天王山戰役",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-16 03:00",
            "home": "皇家馬德里",
            "away": "拜仁慕尼黑",
            "status": "即將上演",
            "stadium": "聖地牙哥·伯納烏球場 (馬德里)",
            "highlight": "歐洲德比 (European Clásico)・雙方合計21座歐冠底蘊",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-17 03:00",
            "home": "巴黎聖日耳曼",
            "away": "阿森納",
            "status": "即將上演",
            "stadium": "王子公園體育場 (巴黎)",
            "highlight": "法英跨國豪門強強碰撞・阿爾特塔作客舊主",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-17 03:00",
            "home": "AC米蘭",
            "away": "利物浦",
            "status": "即將上演",
            "stadium": "聖西羅球場 (米蘭)",
            "highlight": "伊斯坦堡史詩宿敵重聚・紅黑軍團決戰紅軍",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-18 03:00",
            "home": "馬德里競技",
            "away": "勒沃庫森",
            "status": "即將上演",
            "stadium": "西維塔斯·大都會球場 (馬德里)",
            "highlight": "西蒙尼鐵血防守 vs 德甲冠軍凌厲快打",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐冠 第 1 輪",
            "competition": "歐洲冠軍聯賽 (UCL)",
            "date": "2026-09-18 03:00",
            "home": "尤文圖斯",
            "away": "切爾西",
            "status": "即將上演",
            "stadium": "安聯體育場 (杜林)",
            "highlight": "意英老牌豪門歐冠焦點大戰",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐聯 第 1 輪",
            "competition": "歐洲聯賽 (UEL)",
            "date": "2026-09-24 03:00",
            "home": "曼徹斯特聯",
            "away": "羅馬",
            "status": "即將上演",
            "stadium": "老特拉福球場 (曼徹斯特)",
            "highlight": "紅魔主場迎戰紅狼・歐聯最受矚目大戰",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐聯 第 1 輪",
            "competition": "歐洲聯賽 (UEL)",
            "date": "2026-09-24 03:00",
            "home": "多特蒙德",
            "away": "畢爾包競技",
            "status": "即將上演",
            "stadium": "西格納伊度納公園 (多特蒙德)",
            "highlight": "黃黑之牆威斯特法倫大戰巴斯克雄獅",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-06",
            "home": "德國",
            "away": "匈牙利",
            "score": "5 - 0",
            "status": "完賽",
            "stadium": "杜塞爾多夫水星娛樂競技場",
            "highlight": "🌍 日耳曼戰車五球狂勝・穆西亞拉維爾茨雙星閃耀",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-06",
            "home": "荷蘭",
            "away": "波士尼亞與赫塞哥維納",
            "score": "5 - 2",
            "status": "完賽",
            "stadium": "恩荷芬飛利浦球場",
            "highlight": "🌍 橙衣軍團進攻風暴・齊爾克澤建功",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 B 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-06",
            "home": "愛爾蘭",
            "away": "英格蘭",
            "score": "0 - 2",
            "status": "完賽",
            "stadium": "都柏林英傑華球場 (Aviva Stadium)",
            "highlight": "🌍 三獅軍團客場告捷・賴斯、格拉利許破門反戈",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-05",
            "home": "法國",
            "away": "義大利",
            "score": "1 - 3",
            "status": "完賽",
            "stadium": "巴黎王子公園體育場",
            "highlight": "🌍 藍衣軍團客場史詩逆轉・巴爾科拉閃擊難救主",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-05",
            "home": "葡萄牙",
            "away": "克羅埃西亞",
            "score": "2 - 1",
            "status": "完賽",
            "stadium": "里斯本光明球場 (Estádio da Luz)",
            "highlight": "🌍 C羅打入職業生涯第900球里程碑・葡萄牙旗開得勝",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 1 輪 (完賽)",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-05",
            "home": "塞爾維亞",
            "away": "西班牙",
            "score": "0 - 0",
            "status": "完賽",
            "stadium": "貝爾格萊德紅星體育場",
            "highlight": "🌍 新科歐洲盃冠軍客場握手言和",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 2 輪",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-09 02:45",
            "home": "法國",
            "away": "比利時",
            "status": "即將上演",
            "stadium": "里昂安盟球場 (Groupama Stadium)",
            "highlight": "🌍 國際比賽日強強對話・高盧雄雞 vs 歐洲紅魔",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 2 輪",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-10 02:45",
            "home": "荷蘭",
            "away": "德國",
            "status": "即將上演",
            "stadium": "阿姆斯特丹競技場 (Johan Cruyff Arena)",
            "highlight": "🌍 國際比賽日傳統死敵交鋒・橙衣軍團迎戰日耳曼戰車",
            "isGiant": true,
            "isCrossLeague": true
        },
        {
            "round": "歐國聯 A 級第 2 輪",
            "competition": "歐洲國家聯賽 (UEFA Nations League)",
            "date": "2026-09-09 02:45",
            "home": "以色列",
            "away": "義大利",
            "status": "即將上演",
            "stadium": "中立場地 (匈牙利布達佩斯)",
            "highlight": "🌍 國際比賽日・藍衣軍團歐國聯客場爭勝",
            "isGiant": false,
            "isCrossLeague": true
        },
        {
            "round": "歐洲超級盃 (完賽)",
            "competition": "歐洲超級盃 (UEFA Super Cup)",
            "date": "2026-08-14",
            "home": "皇家馬德里",
            "away": "亞特蘭大",
            "score": "2 - 0",
            "status": "完賽",
            "stadium": "華沙國家體育場",
            "highlight": "🏆 歐冠王 vs 歐聯盃王・皇馬捧起新賽季首冠",
            "isGiant": true,
            "isCrossLeague": true
        }
    ],
    "epl": [
        {
            "round": "第 4 輪",
            "date": "2026-09-12 20:30",
            "home": "曼徹斯特城",
            "away": "利物浦",
            "status": "即將上演",
            "stadium": "阿提哈德球場",
            "highlight": "🔥 2026/27 爭冠天王山對決",
            "isGiant": true
        },
        {
            "round": "第 4 輪",
            "date": "2026-09-12 23:00",
            "home": "阿森納",
            "away": "切爾西",
            "status": "即將上演",
            "stadium": "酋長球場",
            "highlight": "北倫敦 vs 西倫敦傳統大戰",
            "isGiant": true
        },
        {
            "round": "第 4 輪",
            "date": "2026-09-13 01:30",
            "home": "曼徹斯特聯",
            "away": "阿斯頓維拉",
            "status": "即將上演",
            "stadium": "老特拉福球場",
            "highlight": "歐冠席位關鍵卡位戰",
            "isGiant": true
        },
        {
            "round": "第 4 輪",
            "date": "2026-09-13 21:00",
            "home": "柯文垂城",
            "away": "西漢姆聯",
            "status": "即將上演",
            "stadium": "柯文垂建築協會球場",
            "highlight": "天藍軍團主場保衛戰",
            "isGiant": false
        },
        {
            "round": "第 3 輪 (完賽)",
            "date": "2026-08-30",
            "home": "利物浦",
            "away": "曼徹斯特聯",
            "score": "3 - 1",
            "status": "完賽",
            "stadium": "安菲爾德球場",
            "highlight": "雙紅會精彩勝利",
            "isGiant": true
        },
        {
            "round": "第 3 輪 (完賽)",
            "date": "2026-08-29",
            "home": "熱刺",
            "away": "阿森納",
            "score": "2 - 2",
            "status": "完賽",
            "stadium": "熱刺球場",
            "highlight": "北倫敦德比平分秋色",
            "isGiant": true
        }
    ],
    "laliga": [
        {
            "round": "第 4 輪",
            "date": "2026-09-13 23:15",
            "home": "皇家馬德里",
            "away": "馬德里競技",
            "status": "即將上演",
            "stadium": "伯納烏球場",
            "highlight": "🔥 馬德里同城德比 (Derbi Madrileño)",
            "isGiant": true
        },
        {
            "round": "第 4 輪",
            "date": "2026-09-14 04:00",
            "home": "巴塞隆納",
            "away": "比亞雷亞爾",
            "status": "即將上演",
            "stadium": "Spotify 諾坎普球場",
            "highlight": "亞馬爾領銜進攻風暴",
            "isGiant": true
        },
        {
            "round": "第 4 輪 (完賽)",
            "date": "2026-09-05",
            "home": "畢爾包競技",
            "away": "馬德里競技",
            "score": "3 - 0",
            "status": "完賽",
            "stadium": "聖馬梅斯球場",
            "highlight": "巴斯克雄獅三球大勝・威廉斯建功",
            "isGiant": true
        },
        {
            "round": "第 3 輪 (完賽)",
            "date": "2026-08-31",
            "home": "巴塞隆納",
            "away": "皇家社會",
            "score": "3 - 0",
            "status": "完賽",
            "stadium": "Spotify 諾坎普球場",
            "highlight": "零封大勝",
            "isGiant": true
        },
        {
            "round": "第 3 輪 (完賽)",
            "date": "2026-08-30",
            "home": "皇家貝蒂斯",
            "away": "皇家馬德里",
            "score": "1 - 2",
            "status": "完賽",
            "stadium": "比利亞馬林球場",
            "highlight": "姆巴佩絕殺建功",
            "isGiant": true
        }
    ],
    "bundesliga": [
        {
            "round": "第 3 輪",
            "date": "2026-09-12 22:30",
            "home": "拜仁慕尼黑",
            "away": "多特蒙德",
            "status": "即將上演",
            "stadium": "安聯球場",
            "highlight": "🔥 德國國家德比 (Der Klassiker)",
            "isGiant": true
        },
        {
            "round": "第 3 輪",
            "date": "2026-09-13 01:30",
            "home": "勒沃庫森",
            "away": "斯圖加特",
            "status": "即將上演",
            "stadium": "拜耳競技場",
            "highlight": "德甲強強對抗",
            "isGiant": true
        },
        {
            "round": "第 2 輪 (完賽)",
            "date": "2026-08-29",
            "home": "RB萊比錫",
            "away": "拜仁慕尼黑",
            "score": "1 - 2",
            "status": "完賽",
            "stadium": "紅牛競技場",
            "highlight": "凱恩頭球破門",
            "isGiant": true
        }
    ],
    "seriea": [
        {
            "round": "第 3 輪",
            "date": "2026-09-13 03:45",
            "home": "國際米蘭",
            "away": "拿坡里",
            "status": "即將上演",
            "stadium": "聖西羅球場",
            "highlight": "🔥 意甲南北巔峰大戰",
            "isGiant": true
        },
        {
            "round": "第 3 輪",
            "date": "2026-09-13 22:00",
            "home": "尤文圖斯",
            "away": "亞特蘭大",
            "status": "即將上演",
            "stadium": "安聯體育場",
            "highlight": "傳統豪門對壘",
            "isGiant": true
        },
        {
            "round": "第 2 輪 (完賽)",
            "date": "2026-08-30",
            "home": "AC米蘭",
            "away": "拉齊奧",
            "score": "2 - 1",
            "status": "完賽",
            "stadium": "聖西羅球場",
            "highlight": "紅黑軍團主場告捷",
            "isGiant": true
        }
    ],
    "ligue1": [
        {
            "round": "第 4 輪",
            "date": "2026-09-13 04:00",
            "home": "巴黎聖日耳曼",
            "away": "馬賽",
            "status": "即將上演",
            "stadium": "王子公園體育場",
            "highlight": "🔥 法國國家德比 (Le Classique)",
            "isGiant": true
        },
        {
            "round": "第 4 輪",
            "date": "2026-09-12 23:00",
            "home": "摩納哥",
            "away": "里爾",
            "status": "即將上演",
            "stadium": "路易二世球場",
            "highlight": "歐冠名額關鍵對決",
            "isGiant": true
        }
    ]
}
};
