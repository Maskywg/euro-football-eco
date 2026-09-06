/**
 * ==========================================================================
 * European Football Ecosystem Dashboard - Dynamic Application Logic
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  init3DBackground();
  initHeroStats();
  initLeagues();
  initDedicatedStandings();
  initFootballMap();
  initPyramids();
  initUEFACompetitions();
  initOwnershipModels();
  initFFPRules();
  initClubSearch();
  initLegendaryClubs();
  initSquadModal();
  initScrollspy();
});

/* ==========================================================================
   Scrollspy Navigation Indicator
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('.section, header, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Hero Stats Renderer
   ========================================================================== */
function initHeroStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !footballData.overview.stats) return;

  container.innerHTML = footballData.overview.stats.map(stat => `
    <div class="glass-card stat-card">
      <div class="stat-val">${stat.value}</div>
      <div class="stat-lbl">${stat.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Five Leagues Section Logic
   ========================================================================== */
function initLeagues() {
  const gridContainer = document.getElementById('leagues-grid-container');
  const detailDisplay = document.getElementById('league-detail-display');
  if (!gridContainer || !detailDisplay) return;

  // Generate League Selector Cards
  gridContainer.innerHTML = footballData.bigFiveLeagues.map((league, idx) => `
    <div class="league-card ${idx === 0 ? 'active' : ''}" data-league-id="${league.id}" style="--gradient-brand: ${league.logoColor}; border-color: ${idx === 0 ? league.accentColor : 'var(--border-glass)'}">
      <div class="league-logo-bg" style="background: ${league.logoColor}">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="1.5" fill="none" />
          <path d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
        </svg>
      </div>
      <h3>${league.name}</h3>
      <span class="country-badge">${league.country}</span>
    </div>
  `).join('');

  // Default Detail Rendering (first league)
  renderLeagueDetail(footballData.bigFiveLeagues[0].id);

  // Card click event listeners
  const leagueCards = gridContainer.querySelectorAll('.league-card');
  leagueCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active states
      leagueCards.forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'var(--border-glass)';
      });

      // Add active state to clicked
      card.classList.add('active');
      const leagueId = card.getAttribute('data-league-id');
      const league = footballData.bigFiveLeagues.find(l => l.id === leagueId);
      card.style.borderColor = league.accentColor;

      // Animate and render detail
      detailDisplay.style.opacity = 0;
      detailDisplay.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderLeagueDetail(leagueId);
        detailDisplay.style.opacity = 1;
        detailDisplay.style.transform = 'translateY(0)';
      }, 200);
    });
  });
}

function renderLeagueDetail(leagueId) {
  const detailDisplay = document.getElementById('league-detail-display');
  const league = footballData.bigFiveLeagues.find(l => l.id === leagueId);
  if (!league || !detailDisplay) return;

  detailDisplay.innerHTML = `
    <div class="detail-layout">
      <div class="detail-left">
        <div class="detail-brand-strip" style="background: ${league.logoColor}"></div>
        <div class="detail-title-block">
          <h3>${league.name}</h3>
          <span>${league.engName}</span>
        </div>
        <div class="detail-specs">
          <div class="spec-item">
            <span class="spec-lbl">成立年份</span>
            <span class="spec-val">${league.established} 年</span>
          </div>
          <div class="spec-item">
            <span class="spec-lbl">參賽隊數</span>
            <span class="spec-val">${league.teams} 隊</span>
          </div>
          <div class="spec-item">
            <span class="spec-lbl">場均上座人數</span>
            <span class="spec-val">${league.avgAttendance}</span>
          </div>
          <div class="spec-item">
            <span class="spec-lbl">年總營收</span>
            <span class="spec-val">${league.revenue}</span>
          </div>
        </div>
        <button class="btn-tab active" style="margin-top: 1.25rem; width: 100%; justify-content: center; display: flex; align-items: center; gap: 0.5rem; border-radius: 10px;" onclick="jumpToLeagueMap('${league.id}')">
          🗺️ 在地圖上查看此聯賽球隊分佈
        </button>
      </div>
      <div class="detail-right">
        <!-- Sub Tab Navigation -->
        <div class="detail-tab-menu">
          <button class="detail-tab-btn active" data-detail-tab="info">聯賽分析</button>
          <button class="detail-tab-btn" data-detail-tab="teams">參賽球隊 (${league.teamsList.length})</button>
          <button class="detail-tab-btn" data-detail-tab="standings">📊 即時戰績榜</button>
          <button class="detail-tab-btn" data-detail-tab="fixtures">📅 焦點賽程</button>
        </div>

        <!-- Tab 1: Info -->
        <div class="detail-tab-content" id="detail-tab-info">
          <div class="detail-text-block" style="margin-bottom: 1.25rem;">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              球風與競技特點
            </h4>
            <p>${league.playStyle}</p>
          </div>
          <div class="detail-text-block" style="margin-bottom: 1.25rem;">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
              升降級規則
            </h4>
            <p>${league.relegationRules}</p>
          </div>
          <div class="detail-text-block" style="margin-bottom: 1.25rem;">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
              歐戰席次分配
            </h4>
            <p>${league.uefaSlots}</p>
          </div>
          <div class="detail-text-block">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              聯賽競爭格局
            </h4>
            <p>${league.competitiveness}</p>
          </div>
        </div>

        <!-- Tab 2: Teams Grid -->
        <div class="detail-tab-content teams-grid" id="detail-tab-teams" style="display: none;">
          ${league.teamsList.map(team => {
            const isNew = team.includes('柯文垂城') || team.includes('伊普斯維奇') || team.includes('南安普敦') || team.includes('萊斯特城') ||
                          team.includes('雷加利斯') || team.includes('巴利亞多利德') || team.includes('西班牙人') ||
                          team.includes('聖保利') || team.includes('基爾') || team.includes('霍爾斯坦') ||
                          team.includes('帕爾馬') || team.includes('科莫') || team.includes('威尼斯') ||
                          team.includes('歐塞爾') || team.includes('昂熱') || team.includes('聖埃蒂安');
            return `
              <div class="team-item ${isNew ? 'team-promoted' : ''}">
                <svg width="8" height="8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
                <span>${team}</span>
                ${isNew ? '<span style="font-size: 0.68rem; font-weight: 700; color: #ea580c; background: rgba(234, 88, 12, 0.12); padding: 0.1rem 0.4rem; border-radius: 4px; margin-left: 0.35rem;">新升班</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Tab 3: Standings Table -->
        <div class="detail-tab-content" id="detail-tab-standings" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.8rem; color: #0284c7; background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(2, 132, 199, 0.25); padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 600;">
              🗓️ 最後登錄日期：${(footballData.meta && footballData.meta.lastUpdatedDate) || '2026-09-06'}（最後完賽日：${(footballData.meta && footballData.meta.lastMatchDate) || '2026-09-05'}）
            </span>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">點擊球隊名稱可直接開啟球員陣容</span>
          </div>
          <div class="standings-table-container">
            <table class="standings-table">
              <thead>
                <tr>
                  <th>排名</th>
                  <th style="text-align: left; padding-left: 1rem;">俱樂部球隊</th>
                  <th>已賽</th>
                  <th>勝</th>
                  <th>平</th>
                  <th>負</th>
                  <th>進球</th>
                  <th>失球</th>
                  <th>淨勝</th>
                  <th>積分</th>
                  <th>近五場</th>
                </tr>
              </thead>
              <tbody>
                ${(footballData.leagueStandings && footballData.leagueStandings[league.id] ? footballData.leagueStandings[league.id] : []).map(row => {
                  let rankClass = 'rank-normal';
                  if (row.rank <= 4) rankClass = 'rank-ucl';
                  else if (row.rank === 5) rankClass = 'rank-uel';
                  else if (row.rank === 6) rankClass = 'rank-uecl';
                  else if (row.rank >= (league.teams - 2)) rankClass = 'rank-relegation';

                  return `
                    <tr onclick="openClubSquadModal('${row.team}')" title="點擊查看 ${row.team} 現役球員陣容">
                      <td><span class="rank-badge ${rankClass}">${row.rank}</span></td>
                      <td class="col-team" style="padding-left: 1rem;">
                        <span>${row.team}</span>
                      </td>
                      <td>${row.played}</td>
                      <td>${row.won}</td>
                      <td>${row.drawn}</td>
                      <td>${row.lost}</td>
                      <td>${row.gf}</td>
                      <td>${row.ga}</td>
                      <td>${row.gd}</td>
                      <td class="col-pts">${row.pts}</td>
                      <td>
                        <div class="form-guide-badges">
                          ${row.form.map(f => `<span class="form-badge form-${f.toLowerCase()}">${f}</span>`).join('')}
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
          <div class="standings-legend">
            <div class="standings-legend-item"><span class="legend-dot" style="background: var(--color-blue);"></span> 1-4 名：歐洲冠軍聯賽 (UCL)</div>
            <div class="standings-legend-item"><span class="legend-dot" style="background: #ea580c;"></span> 5 名：歐霸盃 (UEL)</div>
            <div class="standings-legend-item"><span class="legend-dot" style="background: #10b981;"></span> 6 名：歐協聯 (UECL)</div>
            <div class="standings-legend-item"><span class="legend-dot" style="background: #ef4444;"></span> 降級區 (Relegation)</div>
          </div>
        </div>

        <!-- Tab 4: Match Fixtures -->
        <div class="detail-tab-content" id="detail-tab-fixtures" style="display: none;">
          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 8px; padding: 0.6rem 0.9rem; margin-bottom: 1rem; font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
            <span>🌍 <strong>國際比賽日週 (9/1 - 9/11)</strong>：歐洲五大聯賽各俱樂部全面休賽，第 4 輪賽事將於 <strong>9/12 (週六)</strong> 展開。</span>
            <span style="color: #0284c7; font-weight: 600;">最後登錄：${(footballData.meta && footballData.meta.lastUpdatedDate) || '2026-09-06'}</span>
          </div>
          <div class="fixtures-container">
            ${(footballData.leagueFixtures && footballData.leagueFixtures[league.id] ? footballData.leagueFixtures[league.id] : []).map(f => {
              const isGiantClash = f.isGiant !== false;
              const isCross = f.isCrossLeague;
              const cardClasses = ['fixture-card'];
              if (isCross) cardClasses.push('card-cross-league');
              else if (isGiantClash) cardClasses.push('card-giant-clash');
              return `
              <div class="${cardClasses.join(' ')}">
                <div class="fixture-meta">
                  <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span class="fixture-round">${f.round}</span>
                    ${isCross ? '<span class="badge-cross-league">🌐 跨聯盟歐戰</span>' : ''}
                    ${isGiantClash ? '<span class="badge-giant-match">🔥 豪門對決</span>' : ''}
                  </div>
                  <span class="fixture-date">📅 ${f.date}</span>
                </div>
                <div class="fixture-matchup">
                  <span class="fixture-team" onclick="openClubSquadModal('${f.home}')" title="查看主隊球員陣容">${f.home}</span>
                  ${f.score 
                    ? `<span class="fixture-score-badge">${f.score}</span>` 
                    : `<span class="fixture-vs-badge">VS</span>`}
                  <span class="fixture-team" onclick="openClubSquadModal('${f.away}')" title="查看客隊球員陣容">${f.away}</span>
                </div>
                <div class="fixture-info-right">
                  <span class="fixture-highlight">${f.highlight}</span>
                  <span class="fixture-stadium">🏟️ ${f.stadium}</span>
                </div>
              </div>
            `;}).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind tab switching events
  const tabBtns = detailDisplay.querySelectorAll('.detail-tab-btn');
  const tabContents = detailDisplay.querySelectorAll('.detail-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-detail-tab');
      tabContents.forEach(content => {
        if (content.id === `detail-tab-${targetTab}`) {
          content.style.display = targetTab === 'teams' ? 'grid' : 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  // Bind team item clicks to open interactive squad modal
  const teamItems = detailDisplay.querySelectorAll('.team-item');
  teamItems.forEach(item => {
    item.addEventListener('click', () => {
      const teamText = item.querySelector('span').textContent;
      const cnName = teamText.split(' (')[0];
      if (typeof openClubSquadModal === 'function') {
        openClubSquadModal(cnName);
      }
    });
  });
}

/* ==========================================================================
   Dedicated Standings & Fixtures Section Logic
   ========================================================================== */
function initDedicatedStandings() {
  const container = document.getElementById('dedicated-standings-container');
  const tabs = document.querySelectorAll('#standings-league-tabs .btn-tab');
  if (!container || !footballData.leagueStandings) return;

  const renderLeagueStandingsAndFixtures = (leagueId) => {
    const isUefa = leagueId === 'uefa';
    const league = isUefa 
      ? { id: 'uefa', name: 'UEFA 跨聯盟歐戰 (歐冠/歐聯)', teams: 36 } 
      : (footballData.bigFiveLeagues.find(l => l.id === leagueId) || footballData.bigFiveLeagues[0]);
    const standings = footballData.leagueStandings[leagueId] || [];
    const fixtures = (footballData.leagueFixtures && footballData.leagueFixtures[leagueId]) || [];

    const renderFixtureCard = (f) => {
      const isGiantClash = f.isGiant !== false;
      const isCross = f.isCrossLeague || isUefa;
      const cardClasses = ['fixture-card'];
      if (isCross) cardClasses.push('card-cross-league');
      else if (isGiantClash) cardClasses.push('card-giant-clash');

      return `
        <div class="${cardClasses.join(' ')}">
          <div class="fixture-meta">
            <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="fixture-round">${f.round}</span>
              ${isCross ? '<span class="badge-cross-league">🌐 跨聯盟歐戰</span>' : ''}
              ${isGiantClash ? '<span class="badge-giant-match">🔥 豪門對決</span>' : ''}
            </div>
            <span class="fixture-date">📅 ${f.date}</span>
          </div>
          <div class="fixture-matchup">
            <span class="fixture-team" onclick="openClubSquadModal('${f.home}')" title="查看主隊球員陣容">${f.home}</span>
            ${f.score 
              ? `<span class="fixture-score-badge">${f.score}</span>` 
              : `<span class="fixture-vs-badge">VS</span>`}
            <span class="fixture-team" onclick="openClubSquadModal('${f.away}')" title="查看客隊球員陣容">${f.away}</span>
          </div>
          <div class="fixture-info-right">
            <span class="fixture-highlight">${f.highlight}</span>
            <span class="fixture-stadium">🏟️ ${f.stadium}</span>
          </div>
        </div>
      `;
    };

    if (isUefa) {
      // Specialized View for UEFA Cross-League Competitions
      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge-cross-league" style="font-size: 0.85rem; padding: 0.3rem 0.75rem;">⭐ 跨聯盟豪門賽事巡禮</span>
              <span class="badge-giant-match" style="font-size: 0.85rem; padding: 0.3rem 0.75rem;">🔥 世紀強強對話</span>
            </div>
            <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.25rem;">2026-2027 歐洲冠軍聯賽 & 歐聯盃・全新瑞士制聯賽階段</h3>
            <span style="color: var(--text-secondary); font-size: 0.9rem;">涵蓋英超、西甲、意甲、德甲、法甲頂級豪門跨國交鋒・每週固定更新賽程賽況</span>
          </div>
          <button class="btn-tab active" style="padding: 0.5rem 1rem; border-radius: 8px;" onclick="jumpToLeagueMap('all')">
            🗺️ 地圖檢視歐冠參賽豪門主場
          </button>
        </div>

        <!-- UEFA Format Info Banner -->
        <div style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(124, 58, 237, 0.1)); border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 12px; padding: 1.25rem; margin-bottom: 2rem;">
          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: space-between; align-items: center;">
            <div>
              <h4 style="color: var(--color-blue); font-size: 1.05rem; margin-bottom: 0.25rem;">🏆 瑞士制 (Swiss Model) 單一大聯賽制</h4>
              <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0;">取消傳統小組賽，36 隊統一排名！每隊與 8 支不同對手各踢一場（4主4客），前8名直進16強，9-24名踢附加賽。</p>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <span style="background: rgba(2, 132, 199, 0.15); color: var(--color-blue); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.82rem; font-weight: 700;">8 場聯賽硬仗</span>
              <span style="background: rgba(245, 158, 11, 0.15); color: #d97706; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.82rem; font-weight: 700;">無同國迴避限制</span>
            </div>
          </div>
        </div>

        <!-- Fixtures List Header -->
        <div style="margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.25rem;">📅 跨聯盟焦點豪門對決賽程 (每週賽程更新)</h3>
            <span style="color: var(--color-blue); font-size: 0.85rem; font-weight: 600;">共 ${fixtures.length} 場重磅焦點賽事</span>
          </div>
          <span style="color: var(--text-secondary); font-size: 0.88rem;">點擊對戰球隊名稱即可直接檢視該隊完整一線球員名單與球星陣容</span>
        </div>

        <div class="fixtures-container">
          ${fixtures.map(renderFixtureCard).join('')}
        </div>
      `;
      return;
    }

    const metaInfo = footballData.meta || {
      lastUpdatedDate: "2026-09-06",
      lastMatchDate: "2026-09-05",
      intlBreakWindow: "2026-09-01 至 2026-09-11",
      nextRoundStartDate: "2026-09-12 (週六)"
    };

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
            <h3 style="font-size: 1.5rem; color: var(--text-primary); margin: 0;">${league.name} 完整積分排名榜</h3>
            <span style="font-size: 0.78rem; font-weight: 700; color: #0284c7; background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(2, 132, 199, 0.25); padding: 0.2rem 0.6rem; border-radius: 6px;">
              🗓️ 最後登錄日期：${metaInfo.lastUpdatedDate}（最後賽事：${metaInfo.lastMatchDate}）
            </span>
          </div>
          <span style="color: var(--text-secondary); font-size: 0.9rem;">2026-2027 賽季即時數據・點擊任意球隊可立即檢視現役球員名單</span>
        </div>
        <button class="btn-tab active" style="padding: 0.5rem 1rem; border-radius: 8px;" onclick="jumpToLeagueMap('${league.id}')">
          🗺️ 在地圖查看 ${league.name} 所有主場
        </button>
      </div>

      <!-- International Match Window Notice Banner -->
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(2, 132, 199, 0.08)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: flex-start; gap: 0.75rem; max-width: 800px;">
            <span style="font-size: 1.6rem; line-height: 1;">🌍</span>
            <div>
              <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
                【9/1 – 9/6 為何無聯賽賽程？】本週為 FIFA 國際比賽日（歐洲國家聯賽賽期）
              </div>
              <p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 0.4rem 0; line-height: 1.5;">
                歐洲五大聯賽各俱樂部於 <strong>9/1 至 9/11 全面休賽</strong>，各隊主力球員（姆巴佩、哈蘭德、維爾茨、凱恩等）皆返回國家隊征戰<strong>歐洲國家聯賽 (UEFA Nations League)</strong>。
                因此國內聯賽在 9/1–9/6 期間無賽事，聯賽下一輪將於 <strong>${metaInfo.nextRoundStartDate}</strong> 重啟！
              </p>
              <div style="font-size: 0.82rem; color: var(--color-blue); font-weight: 600;">
                💡 9/5 – 9/6 期間歐國聯焦點戰果（德5-0匈、荷5-2波黑、愛0-2英、法1-3意、葡2-1克）已收錄於「跨聯盟豪門賽程」！
              </div>
            </div>
          </div>
          <button class="btn-tab" style="background: rgba(2, 132, 199, 0.15); border-color: var(--color-blue); color: var(--color-blue); font-weight: 700; padding: 0.5rem 0.9rem; border-radius: 8px; white-space: nowrap;" onclick="const t = document.querySelector('[data-standings-league=uefa]'); if(t) t.click();">
            ⭐ 前往查看 9/5-9/6 歐國聯戰報
          </button>
        </div>
      </div>

      <!-- Standings Table -->
      <div class="standings-table-container" style="margin-bottom: 2rem;">
        <table class="standings-table">
          <thead>
            <tr>
              <th>排名</th>
              <th style="text-align: left; padding-left: 1.25rem;">俱樂部球隊</th>
              <th>已賽</th>
              <th>勝</th>
              <th>平</th>
              <th>負</th>
              <th>進球</th>
              <th>失球</th>
              <th>淨勝</th>
              <th>積分</th>
              <th>近五場戰績</th>
            </tr>
          </thead>
          <tbody>
            ${standings.map(row => {
              let rankClass = 'rank-normal';
              if (row.rank <= 4) rankClass = 'rank-ucl';
              else if (row.rank === 5) rankClass = 'rank-uel';
              else if (row.rank === 6) rankClass = 'rank-uecl';
              else if (row.rank >= (league.teams - 2)) rankClass = 'rank-relegation';

              return `
                <tr onclick="openClubSquadModal('${row.team}')" title="點擊查看 ${row.team} 現役球員陣容" style="cursor: pointer;">
                  <td><span class="rank-badge ${rankClass}">${row.rank}</span></td>
                  <td class="col-team" style="padding-left: 1.25rem;">
                    <strong>${row.team}</strong>
                    <span style="font-size: 0.75rem; color: var(--color-blue); margin-left: 0.5rem;">[查看陣容]</span>
                  </td>
                  <td>${row.played}</td>
                  <td>${row.won}</td>
                  <td>${row.drawn}</td>
                  <td>${row.lost}</td>
                  <td>${row.gf}</td>
                  <td>${row.ga}</td>
                  <td>${row.gd}</td>
                  <td class="col-pts">${row.pts}</td>
                  <td>
                    <div class="form-guide-badges">
                      ${row.form.map(f => `<span class="form-badge form-${f.toLowerCase()}">${f}</span>`).join('')}
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <div class="standings-legend" style="margin-bottom: 2.5rem;">
        <div class="standings-legend-item"><span class="legend-dot" style="background: var(--color-blue);"></span> 1-4 名：歐洲冠軍聯賽 (UCL 席位)</div>
        <div class="standings-legend-item"><span class="legend-dot" style="background: #ea580c;"></span> 5 名：歐霸盃 (UEL 席位)</div>
        <div class="standings-legend-item"><span class="legend-dot" style="background: #10b981;"></span> 6 名：歐協聯 (UECL 席位)</div>
        <div class="standings-legend-item"><span class="legend-dot" style="background: #ef4444;"></span> 降級區 (降至次級聯賽)</div>
      </div>

      <!-- Match Fixtures Header -->
      <div style="margin-bottom: 1.25rem; border-top: 1px solid var(--border-glass); padding-top: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.25rem;">📅 ${league.name} 近期焦點德比與豪門對決賽程 (每週更新)</h3>
            <span style="color: var(--text-secondary); font-size: 0.88rem;">點擊對戰球隊可直接開啟該隊球員名單</span>
          </div>
          <span style="font-size: 0.8rem; color: #d97706; background: rgba(245, 158, 11, 0.1); padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 600;">
            🔥 標註「豪門對決」代表強強對碰焦點賽事
          </span>
        </div>
      </div>

      <div class="fixtures-container">
        ${fixtures.map(renderFixtureCard).join('')}
      </div>
    `;
  };

  // Bind League Tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const leagueId = tab.dataset.standingsLeague;
      renderLeagueStandingsAndFixtures(leagueId);
    });
  });

  // Render default (EPL)
  renderLeagueStandingsAndFixtures('epl');
}

/* ==========================================================================
   Pyramid Section Logic
   ========================================================================== */
function initPyramids() {
  const visualContainer = document.getElementById('pyramid-visual-container');
  const detailsContainer = document.getElementById('pyramid-details-container');
  const controls = document.querySelectorAll('[data-pyramid]');

  if (!visualContainer || !detailsContainer) return;

  let currentCountry = 'england';

  const updatePyramidView = (country) => {
    const pyramidData = footballData.pyramids[country];
    if (!pyramidData) return;

    const colors = ['#d4af37', '#0284c7', '#38bdf8', '#8b5cf6', '#a78bfa'];
    const totalTiers = pyramidData.levels.length;

    // Render Pyramid Tiers Visual
    visualContainer.innerHTML = pyramidData.levels.map((level, idx) => {
      const tierWidth = 100 - (idx * (60 / totalTiers)); // Generate trapezoid widths
      const tierColor = colors[idx % colors.length];
      return `
        <div class="pyramid-tier ${idx === 0 ? 'active' : ''}" 
             data-tier-index="${idx}"
             style="--tier-width: ${tierWidth}%; --tier-color: ${tierColor}">
          <span class="tier-number" style="--tier-color: ${tierColor}">L${level.tier}</span>
          <span class="tier-title">${level.name}</span>
        </div>
      `;
    }).join('');

    // Default Render details for top tier
    renderTierDetail(country, 0);

    // Setup tier clicks
    const tiers = visualContainer.querySelectorAll('.pyramid-tier');
    tiers.forEach(tier => {
      tier.addEventListener('click', () => {
        tiers.forEach(t => t.classList.remove('active'));
        tier.classList.add('active');
        
        const tierIdx = parseInt(tier.getAttribute('data-tier-index'));
        
        detailsContainer.style.opacity = 0;
        detailsContainer.style.transform = 'translateY(10px)';
        setTimeout(() => {
          renderTierDetail(country, tierIdx);
          detailsContainer.style.opacity = 1;
          detailsContainer.style.transform = 'translateY(0)';
        }, 150);
      });
    });
  };

  const renderTierDetail = (country, index) => {
    const level = footballData.pyramids[country].levels[index];
    const colors = ['#d4af37', '#0284c7', '#38bdf8', '#8b5cf6', '#a78bfa'];
    const tierColor = colors[index % colors.length];

    detailsContainer.innerHTML = `
      <div class="tier-detail-card">
        <h3 style="--tier-color: ${tierColor}">第 ${level.tier} 級：${level.name}</h3>
        <div class="tier-meta">
          <span class="badge-teams">參賽隊數: ${level.teams} 隊</span>
          <span class="badge-status ${level.status}">${level.status === 'professional' ? '職業聯賽' : '半職業聯賽'}</span>
        </div>
        <p>${level.description}</p>
      </div>
    `;
  };

  // Setup tab controls (England vs Spain)
  controls.forEach(btn => {
    btn.addEventListener('click', () => {
      controls.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentCountry = btn.getAttribute('data-pyramid');
      updatePyramidView(currentCountry);
    });
  });

  // Init default view
  updatePyramidView('england');
}

/* ==========================================================================
   UEFA Competitions Renderer
   ========================================================================== */
function initUEFACompetitions() {
  const container = document.getElementById('uefa-competitions-container');
  if (!container || !footballData.uefaCompetitions) return;

  container.innerHTML = footballData.uefaCompetitions.map(comp => `
    <div class="glass-card uefa-card ${comp.id}">
      <div class="uefa-header">
        <div class="uefa-title">
          <h3>${comp.name}</h3>
          <span class="uefa-prestige">${comp.prestige}</span>
        </div>
        <span class="uefa-badge">${comp.shortName}</span>
      </div>
      <div class="uefa-body">
        <p>${comp.description}</p>
        
        <div class="uefa-item">
          <h4>賽制規則 (新版瑞士制)</h4>
          <p>${comp.format}</p>
        </div>
        
        <div class="uefa-item">
          <h4>參賽資格</h4>
          <p>${comp.eligibility}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Ownership Models Logic
   ========================================================================== */
function initOwnershipModels() {
  const menuContainer = document.getElementById('ownership-menu-container');
  const detailsContainer = document.getElementById('ownership-details-container');
  if (!menuContainer || !detailsContainer) return;

  // Render navigation cards
  menuContainer.innerHTML = footballData.ownershipModels.map((model, idx) => `
    <div class="glass-card owner-nav-card ${idx === 0 ? 'active' : ''}" data-model-id="${model.id}">
      <h4>${model.name}</h4>
      <p>${model.description}</p>
    </div>
  `).join('');

  // Default display first model
  renderOwnershipDetail(footballData.ownershipModels[0].id);

  // Click events
  const navCards = menuContainer.querySelectorAll('.owner-nav-card');
  navCards.forEach(card => {
    card.addEventListener('click', () => {
      navCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const modelId = card.getAttribute('data-model-id');
      
      detailsContainer.style.opacity = 0;
      detailsContainer.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderOwnershipDetail(modelId);
        detailsContainer.style.opacity = 1;
        detailsContainer.style.transform = 'translateY(0)';
      }, 150);
    });
  });
}

function renderOwnershipDetail(modelId) {
  const detailsContainer = document.getElementById('ownership-details-container');
  const model = footballData.ownershipModels.find(m => m.id === modelId);
  if (!model || !detailsContainer) return;

  detailsContainer.innerHTML = `
    <h3>${model.name}</h3>
    <p class="ownership-right-desc">${model.description}</p>
    
    <div class="pros-cons-grid">
      <div class="pc-box pros">
        <h4>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          優勢/正面影響
        </h4>
        <p>${model.pros}</p>
      </div>
      <div class="pc-box cons">
        <h4>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          劣勢/風險潛在
        </h4>
        <p>${model.cons}</p>
      </div>
    </div>
    
    <div class="examples-box">
      <h4>代表球會案例</h4>
      <p>${model.examples}</p>
    </div>
  `;
}

/* ==========================================================================
   FFP & PSR Rules Renderer
   ========================================================================== */
function initFFPRules() {
  const container = document.getElementById('ffp-info-block');
  const ffpData = footballData.financialRules;
  if (!container || !ffpData) return;

  container.innerHTML = `
    <div class="ffp-title">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-blue)"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5z"/></svg>
      <h3>${ffpData.title}</h3>
    </div>
    <p class="ffp-desc">${ffpData.description}</p>
    
    <div class="ffp-rules-grid">
      ${ffpData.rulesList.map(rule => `
        <div class="ffp-rule-item">
          <h4>${rule.name}</h4>
          <p>${rule.detail}</p>
        </div>
      `).join('')}
    </div>
    
    <div class="ffp-impact">
      <strong>生態影響：</strong>${ffpData.impact}
    </div>
  `;
}

/* ==========================================================================
   Club Search Engine Logic
   ========================================================================== */
function initClubSearch() {
  const input = document.getElementById('club-search-input');
  const resultsContainer = document.getElementById('search-results-container');
  if (!input || !resultsContainer) return;

  const handleSearch = () => {
    const query = input.value.trim().toLowerCase();
    
    if (query === '') {
      resultsContainer.innerHTML = '<span class="search-placeholder">請輸入球會名稱開始搜尋</span>';
      return;
    }

    // 1. First find in the curated clubs array
    let matches = footballData.clubs.filter(club => 
      club.name.toLowerCase().includes(query) || 
      club.engName.toLowerCase().includes(query) || 
      club.league.toLowerCase().includes(query)
    );

    // 2. Also search all 96 teams dynamically in the leagues' teamsList
    footballData.bigFiveLeagues.forEach(league => {
      league.teamsList.forEach(teamStr => {
        // Format: "中文名稱 (English Name)"
        const parts = teamStr.split(' (');
        const cnName = parts[0];
        const enName = parts[1] ? parts[1].replace(')', '') : '';

        if (cnName.toLowerCase().includes(query) || enName.toLowerCase().includes(query)) {
          // Check if already in matches
          const alreadyAdded = matches.some(m => m.name === cnName || m.engName === enName);
          if (!alreadyAdded) {
            // Check if there is details or make a smart guess based on league rules
            let ownershipType = "私有所有權 (Private)";
            let ownerName = "財團或私人股權持有";

            if (league.id === "bundesliga") {
              ownershipType = "球迷會員制 (50+1)";
              ownerName = "會員母會控股";
            } else if (cnName === "皇家馬德里" || cnName === "巴塞隆納" || cnName === "畢爾包競技" || cnName === "奧薩蘇納") {
              ownershipType = "球迷會員制 (Socios)";
              ownerName = "全體會員選舉主席";
            }

            let customDesc = `${league.name}頂級聯賽參賽球會。`;
            if (league.id === "epl") {
              customDesc = `英超頂級賽事參賽球會。身處競爭極為激烈的英格蘭超級聯賽，具備傳統英倫足球拼搏強悍的球風與極高的全球轉播價值，在戰術對抗性上引領足壇。`;
            } else if (league.id === "laliga") {
              customDesc = `西甲頂級聯賽參賽球會。以細膩的西班牙控球傳導、精湛的球員技術以及高水準的戰術紀律見長，在西乙至西甲的升降金字塔中角逐，歷史底蘊深厚。`;
            } else if (league.id === "bundesliga") {
              customDesc = `德甲頂級聯賽參賽球會。貫徹德甲健康的財務精神與「50+1」球迷控股規則，打法強調高速垂直推进、激烈的全場跑動與逼搶，球會與在地社區連結極深。`;
            } else if (league.id === "seriea") {
              customDesc = `意甲頂級聯賽參賽球會。承襲了義大利足壇聞名於世的防守組織架構與防守反擊戰術，近年打法日益多元，極具戰術思辨色彩與賽事觀賞性。`;
            } else if (league.id === "ligue1") {
              customDesc = `法甲頂級聯賽參賽球會。作為全歐洲頂級球會的「天才搖籃」，常年培養出大量爆發力十足、速度極快且個人素質優異的年輕球星，賽事張力十足。`;
            }

            const leagueNameAbbr = league.name
              .replace('英格蘭超級聯賽', '英超')
              .replace('西班牙甲級聯賽', '西甲')
              .replace('德國甲級聯賽', '德甲')
              .replace('義大利甲級聯賽', '意甲')
              .replace('法國甲級聯賽', '法甲');

            matches.push({
              name: cnName,
              engName: enName,
              league: leagueNameAbbr,
              tier: 1,
              ownership: ownershipType,
              owner: ownerName,
              desc: customDesc
            });
          }
        }
      });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-placeholder" style="color: #ef4444;">
          找不到與「${input.value}」相符的球會。請嘗試輸入：皇家馬德里、曼城、拜仁、阿斯頓維拉、西漢姆聯...
        </div>
      `;
      return;
    }

    // Render results (render all matching clubs in a list style)
    resultsContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%;">
        ${matches.map(club => `
          <div class="club-result-card">
            <div class="club-result-header">
              <div class="club-result-name">
                <h3>${club.name}</h3>
                <span>${club.engName}</span>
              </div>
              <div class="club-badges">
                <span class="badge-info">${club.league}</span>
                <span class="badge-info">層級 L${club.tier}</span>
              </div>
            </div>
            <div class="club-result-body">
              <div class="club-desc">
                <h4>球會簡介</h4>
                <p>${club.desc}</p>
              </div>
              <div class="club-owner-info">
                <h5>所有權結構</h5>
                <p>${club.owner}</p>
                <span class="club-owner-type">${club.ownership}</span>
              </div>
              <div class="club-resources">
                <button type="button" class="resource-btn" style="background: rgba(2, 132, 199, 0.12); color: var(--color-blue); border-color: var(--color-blue); cursor: pointer;" onclick="openClubSquadModal('${club.name}')">
                  <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  👥 查看全隊現役陣容
                </button>
                <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' crest logo png transparent')}&tbm=isch" target="_blank" class="resource-btn">
                  <svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                  隊徽 PNG 下載
                </a>
                <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' ' + (club.engName || '') + ' jersey kit 2025 2026')}&tbm=isch" target="_blank" class="resource-btn">
                  <svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
                  球衣樣式查看/下載
                </a>
                <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' official store')}" target="_blank" class="resource-btn">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4L3 12v2c0 .55.45 1 1 1h1v6h10v-6h4c.55 0 1-.45 1-1zm-9 5H8v-4h4v4z"/></svg>
                  官方線上商城
                </a>
              </div>
            </div>
          </div>
        `).join('<div style="border-top: 1px dashed rgba(15,23,42,0.08); margin: 0.5rem 0;"></div>')}
      </div>
    `;
  };

  input.addEventListener('input', handleSearch);
}

/* ==========================================================================
   Theme Switcher Logic
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const sunIcon = toggleBtn.querySelector('.sun-icon');
  const moonIcon = toggleBtn.querySelector('.moon-icon');

  // Check if theme was saved in localStorage, default is light (since user requested light)
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  const setDarkTheme = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    if (typeof updateMapTiles === 'function') updateMapTiles(true);
  };

  const setLightTheme = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    if (typeof updateMapTiles === 'function') updateMapTiles(false);
  };

  // Init state
  if (isDark) {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  toggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-theme');
    if (isCurrentlyDark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  });
}

/* ==========================================================================
   Legendary Clubs Hall of Fame Renderer
   ========================================================================== */
function initLegendaryClubs() {
  const container = document.getElementById('legendary-grid-container');
  if (!container || !footballData.legendaryClubs) return;

  container.innerHTML = footballData.legendaryClubs.map(club => {
    // Generate card structure with inline background color blending
    return `
      <div class="glass-card legend-card" id="${club.id}" style="--legend-accent: ${club.accentColor}; --legend-gradient: ${club.bgColor}">
        <div class="legend-header">
          <div class="legend-title">
            <h3>${club.name}</h3>
            <span>${club.engName}</span>
          </div>
          <div class="legend-badge">${club.achievement}</div>
        </div>
        <div class="legend-body">
          <div class="legend-meta">
            <strong>高峰時期：</strong> ${club.peakPeriod}
          </div>
          <div class="legend-story">
            <p>${club.story}</p>
          </div>
          <div class="legend-lineup" style="display: none; margin-top: 1rem; border-top: 1px dashed var(--border-glass); padding-top: 1rem; font-size: 0.88rem; color: var(--text-secondary);">
            <strong>核心陣容與代表球星：</strong><br>
            <span style="display: inline-block; margin-top: 0.25rem;">${club.keyPlayers}</span>
          </div>
        </div>
        <div class="legend-footer" style="margin-top: 1.5rem; text-align: right;">
          <button class="btn-read-legend">
            <span>閱讀歷史與陣容</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Expand and collapse logic
  const cards = container.querySelectorAll('.legend-card');
  cards.forEach(card => {
    const btn = card.querySelector('.btn-read-legend');
    const lineupDiv = card.querySelector('.legend-lineup');
    const svg = btn.querySelector('svg');
    const btnText = btn.querySelector('span');

    btn.addEventListener('click', () => {
      const isExpanded = card.classList.contains('expanded');
      if (isExpanded) {
        card.classList.remove('expanded');
        lineupDiv.style.display = 'none';
        btnText.textContent = '閱讀歷史與陣容';
        svg.style.transform = 'rotate(0deg)';
      } else {
        card.classList.add('expanded');
        lineupDiv.style.display = 'block';
        btnText.textContent = '收起故事';
        svg.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   European Football Interactive Geographic Map
   ========================================================================== */
let footballMap = null;
let mapTileLayer = null;
let mapMarkersGroup = null;

function updateMapTiles(isDark) {
  if (!footballMap || typeof L === 'undefined') return;
  if (mapTileLayer) {
    footballMap.removeLayer(mapTileLayer);
  }

  // Use reliable OSM tile layer with subdomains
  const tileUrl = isDark
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

  mapTileLayer = L.tileLayer(tileUrl, {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: isDark ? 'abcd' : 'abc',
    maxZoom: 18
  });

  mapTileLayer.on('tileerror', function() {
    if (!footballMap._osmFallback) {
      footballMap._osmFallback = true;
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        subdomains: 'abc',
        maxZoom: 18
      }).addTo(footballMap);
    }
  });

  mapTileLayer.addTo(footballMap);
}

function initFootballMap(retries = 20) {
  const mapContainer = document.getElementById('football-map');
  if (!mapContainer || !footballData.clubLocations) return;

  // Retry if Leaflet script is still parsing
  if (typeof L === 'undefined') {
    if (retries > 0) {
      setTimeout(() => initFootballMap(retries - 1), 150);
    }
    return;
  }

  // Prevent duplicate initialization
  if (footballMap) {
    try { footballMap.remove(); } catch (e) {}
    footballMap = null;
  }

  // Initialize Leaflet Map centered in Europe
  footballMap = L.map('football-map', {
    center: [48.5, 4.0],
    zoom: 5,
    minZoom: 3,
    maxZoom: 14,
    scrollWheelZoom: false
  });

  // Enable scroll zoom on focus/click, disable on blur
  footballMap.on('focus', () => { footballMap.scrollWheelZoom.enable(); });
  footballMap.on('blur', () => { footballMap.scrollWheelZoom.disable(); });

  // Multiple resize invalidations to guarantee map tiles and pins render
  [100, 300, 600, 1200, 2000].forEach(delay => {
    setTimeout(() => { if (footballMap) footballMap.invalidateSize(); }, delay);
  });

  // Also invalidate when scrolled into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && footballMap) {
          footballMap.invalidateSize();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(mapContainer);
  }

  // Initial tile layer based on body theme class
  const isDark = document.body.classList.contains('dark-theme');
  updateMapTiles(isDark);
  updateMapTiles(isDark);

  mapMarkersGroup = L.layerGroup().addTo(footballMap);

  // League view coordinates & zooms
  const leagueViews = {
    all: { center: [48.5, 4.0], zoom: 5 },
    epl: { center: [52.8, -1.8], zoom: 6 },
    laliga: { center: [40.2, -3.7], zoom: 6 },
    bundesliga: { center: [51.2, 10.4], zoom: 6 },
    seriea: { center: [42.8, 12.6], zoom: 6 },
    ligue1: { center: [46.8, 2.5], zoom: 6 }
  };

  // Render markers function
  function renderMarkers(selectedLeague = 'all') {
    mapMarkersGroup.clearLayers();

    const filteredClubs = selectedLeague === 'all'
      ? footballData.clubLocations
      : footballData.clubLocations.filter(c => c.leagueKey === selectedLeague);

    filteredClubs.forEach(club => {
      // Abbreviation for pin
      let shortName = club.name.slice(0, 2);
      if (club.name === '巴黎聖日耳曼') shortName = 'PSG';
      if (club.name === '皇家馬德里') shortName = '皇馬';
      if (club.name === '馬德里競技') shortName = '馬競';
      if (club.name === '拜仁慕尼黑') shortName = '拜仁';
      if (club.name === '曼徹斯特聯') shortName = '曼聯';
      if (club.name === '多特蒙德') shortName = '多特';
      if (club.name === '國際米蘭') shortName = '國米';
      if (club.name === '尤文圖斯') shortName = '尤文';

      const customIcon = L.divIcon({
        className: 'custom-map-icon',
        html: `<div class="custom-club-pin pin-${club.leagueKey}" title="${club.name}">${shortName}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14]
      });

      const popupContent = `
        <div class="map-popup-card">
          <div class="map-popup-header">
            <div class="map-popup-title">
              <h4>${club.name}</h4>
              <span>${club.engName}</span>
            </div>
            <span class="legend-pill pill-${club.leagueKey} map-popup-badge">${club.league}</span>
          </div>
          <div class="map-popup-info">
            <div class="map-popup-info-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span><strong>城市：</strong>${club.city}</span>
            </div>
            <div class="map-popup-info-item">
              <svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>
              <span><strong>主場：</strong>${club.stadium}</span>
            </div>
            <div class="map-popup-info-item">
              <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              <span><strong>容量：</strong>${club.capacity.toLocaleString()} 人</span>
            </div>
          </div>
          <button class="map-popup-btn" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); margin-bottom: 0.35rem;" onclick="openClubSquadModal('${club.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            👥 查看現役球員陣容
          </button>
          <button class="map-popup-btn" onclick="searchAndScrollToClub('${club.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"/></svg>
            在搜尋器查看詳情 & 資源
          </button>
        </div>
      `;

      const marker = L.marker([club.lat, club.lng], { icon: customIcon });
      marker.bindPopup(popupContent, { maxWidth: 280 });
      mapMarkersGroup.addLayer(marker);
    });
  }

  // Initial render with all clubs
  renderMarkers('all');

  // Filter Tabs Event Listeners
  const filterBtns = document.querySelectorAll('#map-filter-tabs .btn-tab');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const leagueKey = btn.dataset.mapLeague;
      renderMarkers(leagueKey);

      if (leagueViews[leagueKey]) {
        footballMap.flyTo(leagueViews[leagueKey].center, leagueViews[leagueKey].zoom, {
          duration: 1.2,
          easeLinearity: 0.25
        });
      }
    });
  });
}

// Global helper for jumping to club search from anywhere (map popup, list, etc.)
window.searchAndScrollToClub = function(clubName) {
  const searchInput = document.getElementById('club-search-input');
  const searchSection = document.getElementById('search-section');
  if (searchInput && searchSection) {
    searchInput.value = clubName;
    searchInput.dispatchEvent(new Event('input'));
    searchSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.jumpToLeagueMap = function(leagueId) {
  const mapSection = document.getElementById('map-section');
  const targetTab = document.querySelector(`#map-filter-tabs .btn-tab[data-map-league="${leagueId}"]`);
  if (targetTab) {
    targetTab.click();
  }
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
  }
  if (footballMap) {
    setTimeout(() => { footballMap.invalidateSize(); }, 300);
  }
};

/* ==========================================================================
   Club Squad Modal & Roster Generator
   ========================================================================== */
function initSquadModal() {
  const modal = document.getElementById('club-squad-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 250);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

window.openClubSquadModal = function(clubName) {
  const modal = document.getElementById('club-squad-modal');
  const content = document.getElementById('modal-squad-content');
  if (!modal || !content) return;

  // Search club details across locations, clubs, or default
  let cleanName = clubName.trim();
  let club = (footballData.clubLocations && footballData.clubLocations.find(c => c.name === cleanName || cleanName.includes(c.name) || c.name.includes(cleanName)))
    || (footballData.clubs && footballData.clubs.find(c => c.name === cleanName || cleanName.includes(c.name) || c.name.includes(cleanName)))
    || { name: cleanName, engName: cleanName, league: "頂級聯賽", city: "歐洲足球重鎮", stadium: "俱樂部專用球場", capacity: 42000 };

  // Get custom squad or generate fallback
  let squad = (footballData.clubSquads && (footballData.clubSquads[cleanName] || footballData.clubSquads[club.name]));
  if (!squad) {
    squad = generateFallbackSquad(club);
  }

  const parseName = (rawName) => {
    if (!rawName) return { zh: '', en: '' };
    const match = rawName.match(/^(.*?)\s*\((.+?)\)$/);
    if (match) {
      return { zh: match[1].trim(), en: match[2].trim() };
    }
    return { zh: rawName.trim(), en: '' };
  };

  // Helper for rendering player positions
  const renderGroup = (title, icon, players) => {
    if (!players || players.length === 0) return '';
    return `
      <div class="squad-group">
        <div class="squad-group-title">
          <span>${icon} ${title}</span>
          <span class="squad-group-count">${players.length} 人</span>
        </div>
        <div class="squad-players-grid">
          ${players.map(p => {
            const names = parseName(p.name);
            return `
            <div class="player-card">
              <div class="player-num">${p.num || '-'}</div>
              <div class="player-meta">
                <div class="player-name-zh">${names.zh}</div>
                ${names.en ? `<div class="player-name-en">${names.en}</div>` : ''}
                <div class="player-sub">
                  <span>${p.nat || ''}</span>
                  <span class="player-role-badge">${p.role || '現役成員'}</span>
                </div>
              </div>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `;
  };

  content.innerHTML = `
    <div class="squad-modal-header">
      <div class="squad-club-info">
        <h3>
          ${club.name}
          <span class="legend-pill pill-${club.leagueKey || 'epl'}" style="font-size: 0.8rem; font-weight: 700;">${club.league || '五大聯賽'}</span>
        </h3>
        <div class="squad-club-eng">${club.engName || ''}</div>
        <div class="squad-club-meta">
          <span>📍 <strong>城市：</strong>${club.city || '歐洲'}</span>
          <span>🏟️ <strong>主場：</strong>${club.stadium || '主場體育場'}</span>
          <span>👥 <strong>容量：</strong>${(club.capacity || 40000).toLocaleString()} 人</span>
        </div>
      </div>
    </div>

    <div class="squad-leaders-bar">
      <div class="squad-leader-item">
        <div class="squad-leader-icon">👔</div>
        <div>
          <div class="squad-leader-label">總教練 (Manager)</div>
          ${(() => {
            const mNames = parseName(squad.manager || '教練團體系');
            return `
              <div class="squad-leader-val-zh">${mNames.zh}</div>
              ${mNames.en ? `<div class="squad-leader-val-en">${mNames.en}</div>` : ''}
            `;
          })()}
        </div>
      </div>
      <div class="squad-leader-item">
        <div class="squad-leader-icon">👑</div>
        <div>
          <div class="squad-leader-label">球隊隊長 (Captain)</div>
          ${(() => {
            const cNames = parseName(squad.captain || '球隊隊長');
            return `
              <div class="squad-leader-val-zh">${cNames.zh}</div>
              ${cNames.en ? `<div class="squad-leader-val-en">${cNames.en}</div>` : ''}
            `;
          })()}
        </div>
      </div>
    </div>

    <div class="squad-categories-container">
      ${renderGroup('守門員 (Goalkeepers)', '🧤', squad.gk)}
      ${renderGroup('後衛 (Defenders)', '🛡️', squad.df)}
      ${renderGroup('中場 (Midfielders)', '⚙️', squad.mf)}
      ${renderGroup('前鋒 (Forwards)', '⚡', squad.fw)}
    </div>

    <div class="squad-modal-actions">
      <button class="resource-btn" style="background: var(--color-blue); color: #ffffff; border: none; cursor: pointer;" onclick="searchAndScrollToClub('${club.name}'); document.getElementById('club-squad-modal').classList.remove('active'); document.getElementById('club-squad-modal').style.display = 'none';">
        <svg viewBox="0 0 24 24" style="fill: #fff;"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        前往搜尋器查看完整財務與所有權
      </button>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' crest logo png transparent')}&tbm=isch" target="_blank" class="resource-btn">
          隊徽 PNG 下載
        </a>
        <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' jersey kit 2025 2026')}&tbm=isch" target="_blank" class="resource-btn">
          新賽季球衣
        </a>
        <a href="https://www.google.com/search?q=${encodeURIComponent(club.name + ' official store')}" target="_blank" class="resource-btn">
          官方商城
        </a>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  setTimeout(() => { modal.classList.add('active'); }, 10);
};

// Complete DB of teams across EPL, La Liga, Serie A, Bundesliga, Ligue 1
const clubStarsDB = {
  // EPL
  "西漢姆聯": {
    manager: "胡倫·洛佩特吉 (Julen Lopetegui)",
    captain: "賈羅德·鮑文 (Jarrod Bowen)",
    stars: [
      { num: 20, name: "賈羅德·鮑文 (Jarrod Bowen)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "隊長/頭號射手" },
      { num: 14, name: "穆罕默德·庫杜斯 (Mohammed Kudus)", nat: "加納 🇬🇭", pos: "fw", role: "英超頂級過人王" },
      { num: 11, name: "尼克拉斯·菲爾克魯格 (Füllkrug)", nat: "德國 🇩🇪", pos: "fw", role: "主力強力中鋒" },
      { num: 19, name: "埃德森·阿爾瓦雷斯 (Álvarez)", nat: "墨西哥 🇲🇽", pos: "mf", role: "中場掃蕩鐵腰" },
      { num: 28, name: "托馬斯·紹切克 (Tomáš Souček)", nat: "捷克 🇨🇿", pos: "mf", role: "高空插上殺手" },
      { num: 25, name: "讓-克萊爾·托迪博 (Todibo)", nat: "法國 🇫🇷", pos: "df", role: "主力中衛" },
      { num: 26, name: "馬克斯·基爾曼 (Max Kilman)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "後防基石" },
      { num: 29, name: "阿隆·萬-比薩卡 (Wan-Bissaka)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "鏟球大師右後衛" },
      { num: 23, name: "阿爾馮斯·阿雷奧拉 (Areola)", nat: "法國 🇫🇷", pos: "gk", role: "世界盃冠軍主力門將" }
    ]
  },
  "水晶宮": {
    manager: "奧利弗·格拉斯納 (Oliver Glasner)",
    captain: "馬克·格伊 (Marc Guéhi)",
    stars: [
      { num: 6, name: "馬克·格伊 (Marc Guéhi)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "隊長/英格蘭主力國腳中衛" },
      { num: 10, name: "埃貝雷奇·埃澤 (Eberechi Eze)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "英格蘭國腳/前場魔術師" },
      { num: 14, name: "讓-菲利普·馬特塔 (Mateta)", nat: "法國 🇫🇷", pos: "fw", role: "奧運銀牌/頭號射手" },
      { num: 8, name: "傑弗森·萊爾馬 (Jefferson Lerma)", nat: "哥倫比亞 🇨🇴", pos: "mf", role: "防守後腰" },
      { num: 18, name: "鎌田大地 (Daichi Kamada)", nat: "日本 🇯🇵", pos: "mf", role: "日本國腳/組織前腰" },
      { num: 17, name: "納撒尼爾·克萊因 (Clyne)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "經驗邊衛" },
      { num: 1, name: "迪恩·亨德森 (Dean Henderson)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "gk", role: "主力英格蘭國門" }
    ]
  },
  "布萊頓": {
    manager: "法比安·許爾策勒 (Fabian Hürzeler)",
    captain: "劉易斯·鄧克 (Lewis Dunk)",
    stars: [
      { num: 5, name: "劉易斯·鄧克 (Lewis Dunk)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "傳奇隊長/防守領袖" },
      { num: 22, name: "三笘薰 (Kaoru Mitoma)", nat: "日本 🇯🇵", pos: "fw", role: "世界級盤帶爆破王" },
      { num: 18, name: "丹尼·維爾貝克 (Danny Welbeck)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "英超老將頭號中鋒" },
      { num: 24, name: "西蒙·阿丁格拉 (Simon Adingra)", nat: "象牙海岸 🇨🇮", pos: "fw", role: "非洲盃冠軍邊鋒" },
      { num: 11, name: "喬爾吉尼奧·魯特爾 (Rutter)", nat: "法國 🇫🇷", pos: "fw", role: "鋒線核心" },
      { num: 20, name: "卡洛斯·巴萊巴 (Carlos Baleba)", nat: "喀麥隆 🇨🇲", pos: "mf", role: "新星掃蕩後腰" },
      { num: 1, name: "巴特·費布魯亨 (Verbruggen)", nat: "荷蘭 🇳🇱", pos: "gk", role: "荷蘭主力國門" }
    ]
  },
  "狼隊": {
    manager: "加里·奧尼爾 (Gary O'Neil)",
    captain: "馬里奧·勒米納 (Mario Lemina)",
    stars: [
      { num: 5, name: "馬里奧·勒米納 (Mario Lemina)", nat: "加彭 🇬🇦", pos: "mf", role: "隊長/防守鐵腰" },
      { num: 10, name: "馬特烏斯·庫尼亞 (Matheus Cunha)", nat: "巴西 🇧🇷", pos: "fw", role: "巴西國腳/頭號王牌射手" },
      { num: 11, name: "黃喜燦 (Hwang Hee-chan)", nat: "韓國 🇰🇷", pos: "fw", role: "韓國國腳/主力前鋒" },
      { num: 9, name: "約爾根·斯特蘭德·拉爾森 (Strand Larsen)", nat: "挪威 🇳🇴", pos: "fw", role: "高大主力中鋒" },
      { num: 7, name: "安德烈 (André)", nat: "巴西 🇧🇷", pos: "mf", role: "巴西主力中場" },
      { num: 3, name: "拉揚·艾特-努里 (Aït-Nouri)", nat: "阿爾及利亞 🇩🇿", pos: "df", role: "英超頂級盤帶左翼衛" },
      { num: 1, name: "若澤·薩 (José Sá)", nat: "葡萄牙 🇵🇹", pos: "gk", role: "主力門將" }
    ]
  },
  "埃弗頓": {
    manager: "肖恩·戴奇 (Sean Dyche)",
    captain: "謝默斯·科爾曼 (Séamus Coleman)",
    stars: [
      { num: 1, name: "喬丹·皮克福德 (Jordan Pickford)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "gk", role: "英格蘭主力國門/門神" },
      { num: 6, name: "詹姆斯·塔科夫斯基 (Tarkowski)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "鐵血防線核心" },
      { num: 32, name: "賈拉德·布蘭斯維特 (Branthwaite)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "英格蘭億元級超新星中衛" },
      { num: 27, name: "伊德里薩·蓋耶 (Idrissa Gueye)", nat: "塞內加爾 🇸🇳", pos: "mf", role: "搶斷掃蕩大師" },
      { num: 9, name: "多米尼克·卡爾弗特-勒溫 (Calvert-Lewin)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "主力空霸中鋒" },
      { num: 7, name: "德懷特·麥克尼爾 (Dwight McNeil)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "遠射及傳中王" },
      { num: 10, name: "伊利曼·恩迪亞耶 (Ndiaye)", nat: "塞內加爾 🇸🇳", pos: "fw", role: "突破爆破手" }
    ]
  },
  "富勒姆": {
    manager: "馬爾科·席爾瓦 (Marco Silva)",
    captain: "湯姆·凱爾尼 (Tom Cairney)",
    stars: [
      { num: 1, name: "貝恩德·萊諾 (Bernd Leno)", nat: "德國 🇩🇪", pos: "gk", role: "德甲英超頂級撲救門神" },
      { num: 18, name: "安德烈亞斯·佩雷拉 (Andreas Pereira)", nat: "巴西 🇧🇷", pos: "mf", role: "定位球專家/前場核心" },
      { num: 7, name: "勞爾·希門尼斯 (Raúl Jiménez)", nat: "墨西哥 🇲🇽", pos: "fw", role: "主力狼王中鋒" },
      { num: 19, name: "羅德里戈·穆尼斯 (Rodrigo Muniz)", nat: "巴西 🇧🇷", pos: "fw", role: "巴西重砲中鋒" },
      { num: 11, name: "阿達馬·特拉奧雷 (Adama Traoré)", nat: "西班牙 🇪🇸", pos: "fw", role: "肌肉衝刺爆破手" },
      { num: 3, name: "卡爾文·巴錫 (Calvin Bassey)", nat: "奈及利亞 🇳🇬", pos: "df", role: "強悍中後衛" }
    ]
  },
  "布倫特福德": {
    manager: "托馬斯·弗蘭克 (Thomas Frank)",
    captain: "克里斯蒂安·諾爾高 (Christian Nørgaard)",
    stars: [
      { num: 6, name: "克里斯蒂安·諾爾高 (Nørgaard)", nat: "丹麥 🇩🇰", pos: "mf", role: "隊長/戰術核心" },
      { num: 19, name: "布萊恩·姆貝莫 (Bryan Mbeumo)", nat: "喀麥隆 🇨🇲", pos: "fw", role: "英超頂級邊路得分手" },
      { num: 11, name: "約阿內·維薩 (Yoane Wissa)", nat: "剛果民主共和國 🇨🇩", pos: "fw", role: "關鍵殺手中鋒" },
      { num: 9, name: "伊戈爾·蒂亞戈 (Igor Thiago)", nat: "巴西 🇧🇷", pos: "fw", role: "高價新援中鋒" },
      { num: 27, name: "維塔利·雅內爾特 (Janelt)", nat: "德國 🇩🇪", pos: "mf", role: "全能中場" },
      { num: 1, name: "馬克·弗萊肯 (Mark Flekken)", nat: "荷蘭 🇳🇱", pos: "gk", role: "荷蘭國腳主力門將" }
    ]
  },
  "諾丁漢森林": {
    manager: "努諾·埃斯皮里托·桑托 (Nuno Espírito Santo)",
    captain: "瑞恩·耶茨 (Ryan Yates)",
    stars: [
      { num: 26, name: "馬茨·塞爾斯 (Matz Sels)", nat: "比利時 🇧🇪", pos: "gk", role: "主力門神" },
      { num: 10, name: "摩根·吉布斯-懷特 (Gibbs-White)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "英格蘭國腳/頭號進攻核心" },
      { num: 11, name: "克里斯·伍德 (Chris Wood)", nat: "紐西蘭 🇳🇿", pos: "fw", role: "英超效率王/主力中鋒" },
      { num: 14, name: "卡勒姆·哈德森-奧多伊 (Hudson-Odoi)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "邊路內切快馬" },
      { num: 21, name: "安東尼·埃蘭加 (Anthony Elanga)", nat: "瑞典 🇸🇪", pos: "fw", role: "超高速反擊邊鋒" },
      { num: 4, name: "穆里略 (Murillo)", nat: "巴西 🇧🇷", pos: "df", role: "主力中衛" }
    ]
  },
  "伯恩茅斯": {
    manager: "安東尼·伊勞拉 (Andoni Iraola)",
    captain: "亞當·史密斯 (Adam Smith)",
    stars: [
      { num: 13, name: "凱帕·阿里薩瓦拉加 (Kepa)", nat: "西班牙 🇪🇸", pos: "gk", role: "歐冠冠軍門神" },
      { num: 9, name: "埃瓦尼爾森 (Evanilson)", nat: "巴西 🇧🇷", pos: "fw", role: "主力中鋒" },
      { num: 17, name: "路易斯·西尼斯特拉 (Sinisterra)", nat: "哥倫比亞 🇨🇴", pos: "fw", role: "邊路快馬" },
      { num: 4, name: "劉易斯·庫克 (Lewis Cook)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "中場樞紐" },
      { num: 27, name: "伊利亞·扎巴爾尼 (Zabarnyi)", nat: "烏克蘭 🇺🇦", pos: "df", role: "主力中衛" }
    ]
  },
  "萊斯特城": {
    manager: "史蒂夫·庫珀 (Steve Cooper)",
    captain: "傑米·瓦爾迪 (Jamie Vardy)",
    stars: [
      { num: 9, name: "傑米·瓦爾迪 (Jamie Vardy)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "藍狐傳奇隊長/不老神鋒" },
      { num: 8, name: "哈里·溫克斯 (Harry Winks)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "中場節拍器" },
      { num: 7, name: "阿卜杜勒·法塔烏 (Issahaku Fatawu)", nat: "加納 🇬🇭", pos: "fw", role: "爆破型邊鋒" },
      { num: 3, name: "沃特·費斯 (Wout Faes)", nat: "比利時 🇧🇪", pos: "df", role: "比利時主力中衛" },
      { num: 30, name: "麥斯·赫爾曼森 (Mads Hermansen)", nat: "丹麥 🇩🇰", pos: "gk", role: "主力門將" }
    ]
  },
  "伊普斯維奇": {
    manager: "基蘭·麥肯納 (Kieran McKenna)",
    captain: "薩姆·莫西 (Sam Morsy)",
    stars: [
      { num: 5, name: "薩姆·莫西 (Sam Morsy)", nat: "埃及 🇪🇬", pos: "mf", role: "隊長/中場鐵腰" },
      { num: 19, name: "利亞姆·德拉普 (Liam Delap)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "強力中鋒射手" },
      { num: 23, name: "薩米·斯莫迪奇 (Sammie Szmodics)", nat: "愛爾蘭 🇮🇪", pos: "fw", role: "英冠金靴前鋒" },
      { num: 20, name: "奧馬里·哈欽森 (Omari Hutchinson)", nat: "牙買加 🇯🇲", pos: "mf", role: "突破新星" },
      { num: 1, name: "阿里亞內特·穆里奇 (Muric)", nat: "科索沃 🇽🇰", pos: "gk", role: "主力門將" }
    ]
  },
  "南安普敦": {
    manager: "拉塞爾·馬丁 (Russell Martin)",
    captain: "傑克·史蒂芬斯 (Jack Stephens)",
    stars: [
      { num: 5, name: "傑克·史蒂芬斯 (Jack Stephens)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "df", role: "隊長/防守核心" },
      { num: 9, name: "亞當·阿姆斯特朗 (Adam Armstrong)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "fw", role: "主力射手" },
      { num: 33, name: "泰勒·迪布林 (Tyler Dibling)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "英格蘭超新星邊翼" },
      { num: 30, name: "阿隆·拉姆斯代爾 (Ramsdale)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "gk", role: "主力英格蘭國門" }
    ]
  },
  // La Liga
  "皇家社會": {
    manager: "伊馬諾爾·阿爾瓜西爾 (Imanol Alguacil)",
    captain: "米克爾·奧亞爾薩瓦爾 (Oyarzabal)",
    stars: [
      { num: 10, name: "米克爾·奧亞爾薩瓦爾 (Oyarzabal)", nat: "西班牙 🇪🇸", pos: "fw", role: "隊長/歐洲盃絕殺英雄" },
      { num: 14, name: "久保建英 (Takefusa Kubo)", nat: "日本 🇯🇵", pos: "fw", role: "日本天王/西甲爆破魔術師" },
      { num: 4, name: "馬丁·蘇維門迪 (Zubimendi)", nat: "西班牙 🇪🇸", pos: "mf", role: "西班牙國腳世界級後腰" },
      { num: 23, name: "布萊斯·門德斯 (Brais Méndez)", nat: "西班牙 🇪🇸", pos: "mf", role: "前場進攻指揮官" },
      { num: 1, name: "亞歷克斯·雷米羅 (Álex Remiro)", nat: "西班牙 🇪🇸", pos: "gk", role: "西班牙國門主力門將" }
    ]
  },
  "比亞雷亞爾": {
    manager: "馬塞利諾 (Marcelino)",
    captain: "勞爾·阿爾比奧爾 (Raúl Albiol)",
    stars: [
      { num: 3, name: "勞爾·阿爾比奧爾 (Raúl Albiol)", nat: "西班牙 🇪🇸", pos: "df", role: "老將隊長/防守領袖" },
      { num: 7, name: "赫拉德·莫雷諾 (Gerard Moreno)", nat: "西班牙 🇪🇸", pos: "fw", role: "頭號傳奇射手" },
      { num: 19, name: "尼古拉斯·佩佩 (Nicolas Pépé)", nat: "象牙海岸 🇨🇮", pos: "fw", role: "邊路突擊突破手" },
      { num: 16, name: "亞歷克斯·巴埃納 (Álex Baena)", nat: "西班牙 🇪🇸", pos: "mf", role: "西甲助攻王/奧運冠軍核心" },
      { num: 10, name: "丹尼·帕雷霍 (Dani Parejo)", nat: "西班牙 🇪🇸", pos: "mf", role: "任意球與長傳大師" }
    ]
  },
  "皇家貝蒂斯": {
    manager: "曼努埃爾·佩萊格里尼 (Pellegrini)",
    captain: "伊斯科 (Isco)",
    stars: [
      { num: 22, name: "伊斯科 (Isco)", nat: "西班牙 🇪🇸", pos: "mf", role: "球隊靈魂/魔術大腦" },
      { num: 20, name: "吉奧瓦尼·洛塞爾索 (Lo Celso)", nat: "阿根廷 🇦🇷", pos: "mf", role: "阿根廷國腳進球中場" },
      { num: 8, name: "維托爾·羅克 (Vitor Roque)", nat: "巴西 🇧🇷", pos: "fw", role: "巴西天才新星前鋒" },
      { num: 5, name: "馬克·巴特拉 (Marc Bartra)", nat: "西班牙 🇪🇸", pos: "df", role: "防線領袖" }
    ]
  },
  "塞維亞": {
    manager: "加西亞·皮米恩塔 (García Pimienta)",
    captain: "赫蘇斯·納瓦斯 (Jesús Navas)",
    stars: [
      { num: 16, name: "赫蘇斯·納瓦斯 (Jesús Navas)", nat: "西班牙 🇪🇸", pos: "df", role: "隊史第一傳奇隊長" },
      { num: 11, name: "多迪·盧克巴吉奧 (Lukebakio)", nat: "比利時 🇧🇪", pos: "fw", role: "主力邊路射手" },
      { num: 9, name: "凱萊奇·伊希納喬 (Iheanacho)", nat: "奈及利亞 🇳🇬", pos: "fw", role: "主力中鋒" },
      { num: 6, name: "內馬尼亞·古德利 (Nemanja Gudelj)", nat: "塞爾維亞 🇷🇸", pos: "df", role: "後防基石" }
    ]
  },
  "吉羅納": {
    manager: "米歇爾 (Míchel)",
    captain: "克里斯蒂安·斯圖亞尼 (Stuani)",
    stars: [
      { num: 7, name: "克里斯蒂安·斯圖亞尼 (Stuani)", nat: "烏拉圭 🇺🇾", pos: "fw", role: "隊長/禁區殺手" },
      { num: 8, name: "維克托·齊甘科夫 (Tsygankov)", nat: "烏克蘭 🇺🇦", pos: "fw", role: "邊路技術核心" },
      { num: 9, name: "阿貝爾·魯伊斯 (Abel Ruiz)", nat: "西班牙 🇪🇸", pos: "fw", role: "主力前鋒" },
      { num: 20, name: "布萊恩·希爾 (Bryan Gil)", nat: "西班牙 🇪🇸", pos: "fw", role: "高速邊鋒突破手" },
      { num: 17, name: "戴利·布林德 (Daley Blind)", nat: "荷蘭 🇳🇱", pos: "df", role: "出球後衛大師" }
    ]
  },
  // Serie A
  "羅馬": {
    manager: "克勞迪奧·拉涅利 (Claudio Ranieri)",
    captain: "洛倫佐·佩萊格里尼 (Pellegrini)",
    stars: [
      { num: 7, name: "洛倫佐·佩萊格里尼 (Pellegrini)", nat: "義大利 🇮🇹", pos: "mf", role: "隊長/進攻核心" },
      { num: 21, name: "保羅·迪巴拉 (Paulo Dybala)", nat: "阿根廷 🇦🇷", pos: "fw", role: "小寶石/世界頂級進攻魔術師" },
      { num: 11, name: "阿爾喬姆·多夫比克 (Dovbyk)", nat: "烏克蘭 🇺🇦", pos: "fw", role: "西甲金靴中鋒" },
      { num: 17, name: "夸迪奧·科內 (Manu Koné)", nat: "法國 🇫🇷", pos: "mf", role: "主力掃蕩推進中場" },
      { num: 23, name: "詹盧卡·曼奇尼 (Gianluca Mancini)", nat: "義大利 🇮🇹", pos: "df", role: "副隊長/鐵血中衛" },
      { num: 99, name: "米萊·斯維拉爾 (Mile Svilar)", nat: "塞爾維亞 🇷🇸", pos: "gk", role: "主力門將" }
    ]
  },
  "拉齊奧": {
    manager: "馬爾科·巴羅尼 (Marco Baroni)",
    captain: "馬蒂亞·扎卡尼 (Mattia Zaccagni)",
    stars: [
      { num: 10, name: "馬蒂亞·扎卡尼 (Mattia Zaccagni)", nat: "義大利 🇮🇹", pos: "fw", role: "隊長/義大利國腳邊鋒" },
      { num: 11, name: "瓦倫丁·卡斯特利亞諾斯 (Castellanos)", nat: "阿根廷 🇦🇷", pos: "fw", role: "主力前鋒" },
      { num: 8, name: "馬特奧·貢多齊 (Mattéo Guendouzi)", nat: "法國 🇫🇷", pos: "mf", role: "法國國腳鐵肺中場" },
      { num: 13, name: "阿萊西奧·羅馬尼奧利 (Romagnoli)", nat: "義大利 🇮🇹", pos: "df", role: "防線核心" },
      { num: 94, name: "伊萬·普羅維德爾 (Provedel)", nat: "義大利 🇮🇹", pos: "gk", role: "主力門神" }
    ]
  },
  "佛羅倫斯": {
    manager: "拉法埃萊·帕拉迪諾 (Raffaele Palladino)",
    captain: "克里斯蒂亞諾·比拉吉 (Cristiano Biraghi)",
    stars: [
      { num: 3, name: "克里斯蒂亞諾·比拉吉 (Biraghi)", nat: "義大利 🇮🇹", pos: "df", role: "隊長/左後衛" },
      { num: 20, name: "莫伊塞·基恩 (Moise Kean)", nat: "義大利 🇮🇹", pos: "fw", role: "義甲金靴競爭者/頭號射手" },
      { num: 7, name: "阿爾伯特·古德蒙德森 (Guðmundsson)", nat: "冰島 🇮🇸", pos: "fw", role: "王牌進攻核心" },
      { num: 29, name: "雅辛·阿德利 (Yacine Adli)", nat: "法國 🇫🇷", pos: "mf", role: "中場組織發動機" },
      { num: 43, name: "戴維·德赫亞 (David de Gea)", nat: "西班牙 🇪🇸", pos: "gk", role: "世界級門神/連撲點球傳奇" }
    ]
  },
  "科莫 1907": {
    manager: "塞斯克·法布雷加斯 (Cesc Fàbregas)",
    captain: "亞歷山德羅·貝勒莫 (Bellemo)",
    stars: [
      { num: 7, name: "加布里埃爾·斯特雷費扎 (Strefezza)", nat: "巴西 🇧🇷", pos: "fw", role: "邊路突擊王牌" },
      { num: 10, name: "帕特里克·庫特羅內 (Cutrone)", nat: "義大利 🇮🇹", pos: "fw", role: "主力本土射手" },
      { num: 79, name: "尼科·帕斯 (Nico Paz)", nat: "阿根廷 🇦🇷", pos: "mf", role: "阿根廷國腳超級金童" },
      { num: 18, name: "阿爾韋托·莫雷諾 (Alberto Moreno)", nat: "西班牙 🇪🇸", pos: "df", role: "歐冠級左邊衛" },
      { num: 1, name: "埃米爾·奧德羅 (Emil Audero)", nat: "義大利 🇮🇹", pos: "gk", role: "主力門將" }
    ]
  },
  // Bundesliga
  "斯圖加特": {
    manager: "塞巴斯蒂安·赫內斯 (Sebastian Hoeneß)",
    captain: "阿塔坎·卡拉佐爾 (Karazor)",
    stars: [
      { num: 16, name: "阿塔坎·卡拉佐爾 (Karazor)", nat: "土耳其 🇹🇷", pos: "mf", role: "隊長/防守後腰" },
      { num: 26, name: "德尼茲·翁達夫 (Deniz Undav)", nat: "德國 🇩🇪", pos: "fw", role: "德國主力國腳神鋒" },
      { num: 9, name: "埃爾梅丁·德米羅維奇 (Demirović)", nat: "波赫 🇧🇦", pos: "fw", role: "主力高產中鋒" },
      { num: 8, name: "恩佐·米約 (Enzo Millot)", nat: "法國 🇫🇷", pos: "mf", role: "奧運銀牌組織核心" },
      { num: 7, name: "馬克西米利安·米特爾施泰特 (Mittelstädt)", nat: "德國 🇩🇪", pos: "df", role: "德國主力左後衛" },
      { num: 33, name: "亞歷山大·尼貝爾 (Nübel)", nat: "德國 🇩🇪", pos: "gk", role: "德國國門主力門神" }
    ]
  },
  "法蘭克福": {
    manager: "迪諾·托普穆勒 (Dino Toppmöller)",
    captain: "凱文·特拉普 (Kevin Trapp)",
    stars: [
      { num: 1, name: "凱文·特拉普 (Kevin Trapp)", nat: "德國 🇩🇪", pos: "gk", role: "隊長/德國國門" },
      { num: 7, name: "奧馬爾·馬爾穆什 (Omar Marmoush)", nat: "埃及 🇪🇬", pos: "fw", role: "德甲進球助攻雙榜王/頂級神鋒" },
      { num: 11, name: "雨果·埃基蒂克 (Hugo Ekitiké)", nat: "法國 🇫🇷", pos: "fw", role: "法國天才前鋒" },
      { num: 16, name: "雨果·拉松 (Hugo Larsson)", nat: "瑞典 🇸🇪", pos: "mf", role: "頂級新星中場" },
      { num: 4, name: "羅賓·科赫 (Robin Koch)", nat: "德國 🇩🇪", pos: "df", role: "主力中衛" }
    ]
  },
  // Ligue 1
  "里爾": {
    manager: "布魯諾·熱內西奧 (Bruno Génésio)",
    captain: "邦雅曼·安德烈 (Benjamin André)",
    stars: [
      { num: 21, name: "邦雅曼·安德烈 (Benjamin André)", nat: "法國 🇫🇷", pos: "mf", role: "隊長/搶斷王鐵腰" },
      { num: 9, name: "喬納森·戴維 (Jonathan David)", nat: "加拿大 🇨🇦", pos: "fw", role: "加拿大王牌/法甲頂級射手" },
      { num: 23, name: "埃東·熱格羅瓦 (Zhegrova)", nat: "科索沃 🇽🇰", pos: "fw", role: "邊路突破大師" },
      { num: 10, name: "安赫爾·戈麥斯 (Angel Gomes)", nat: "英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos: "mf", role: "英格蘭主力國腳組織大腦" },
      { num: 30, name: "盧卡斯·謝瓦利埃 (Chevalier)", nat: "法國 🇫🇷", pos: "gk", role: "法國新晉國門超巨" }
    ]
  },
  "里昂": {
    manager: "皮埃爾·薩熱 (Pierre Sage)",
    captain: "亞歷山大·拉卡澤特 (Lacazette)",
    stars: [
      { num: 10, name: "亞歷山大·拉卡澤特 (Lacazette)", nat: "法國 🇫🇷", pos: "fw", role: "隊長/隊史射手王" },
      { num: 69, name: "喬治·米考塔澤 (Georges Mikautadze)", nat: "喬治亞 🇬🇪", pos: "fw", role: "歐洲盃金靴主力中鋒" },
      { num: 11, name: "馬利克·福法納 (Malick Fofana)", nat: "比利時 🇧🇪", pos: "fw", role: "突破邊翼新星" },
      { num: 8, name: "科朗坦·托利索 (Tolisso)", nat: "法國 🇫🇷", pos: "mf", role: "世界盃冠軍中場" },
      { num: 17, name: "坦納·特斯曼 (Tanner Tessmann)", nat: "美國 🇺🇸", pos: "mf", role: "主力後腰新援" },
      { num: 23, name: "盧卡斯·佩里 (Lucas Perri)", nat: "巴西 🇧🇷", pos: "gk", role: "主力門將" }
    ]
  }
};

function generateFallbackSquad(club) {
  const clubKey = Object.keys(clubStarsDB).find(k => club.name.includes(k) || k.includes(club.name));
  const clubInfo = clubKey ? clubStarsDB[clubKey] : null;

  const defaultNat = club.leagueKey === 'epl' ? '英格蘭 🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    : club.leagueKey === 'laliga' ? '西班牙 🇪🇸'
    : club.leagueKey === 'bundesliga' ? '德國 🇩🇪'
    : club.leagueKey === 'seriea' ? '義大利 🇮🇹'
    : club.leagueKey === 'ligue1' ? '法國 🇫🇷' : '歐洲 🇪🇺';

  const manager = clubInfo?.manager || `${club.name} 總教練組`;
  const captain = clubInfo?.captain || `${club.name} 第一隊長`;

  const gk = (clubInfo?.stars.filter(s => s.pos === 'gk') || []).concat([
    { num: 1, name: `正選主力門神 (${club.name} 1號)`, nat: defaultNat, role: "主力守門員" },
    { num: 13, name: `盃賽輪換門將`, nat: "外籍國門 🌐", role: "副選門將" }
  ]).slice(0, 2);

  const df = (clubInfo?.stars.filter(s => s.pos === 'df') || []).concat([
    { num: 4, name: `主力核心中後衛`, nat: defaultNat, role: "防線領袖" },
    { num: 5, name: `主力高空中衛`, nat: "外援鐵衛 🌐", role: "制空中衛" },
    { num: 2, name: `衝刺主力右後衛`, nat: defaultNat, role: "右邊路防線" },
    { num: 3, name: `主力左邊後衛`, nat: "外援邊衛 🌐", role: "左路推進" },
    { num: 15, name: `邊/中衛輪換防守者`, nat: defaultNat, role: "後防多面手" }
  ]).slice(0, 5);

  const mf = (clubInfo?.stars.filter(s => s.pos === 'mf') || []).concat([
    { num: 6, name: `防守掃蕩後腰`, nat: defaultNat, role: "中場屏障" },
    { num: 8, name: `攻守節奏調度中場`, nat: defaultNat, role: "中場發動機" },
    { num: 10, name: `進攻組織前腰`, nat: "外援司令塔 🌐", role: "前場核心" },
    { num: 16, name: `覆蓋型跑動中場`, nat: defaultNat, role: "逼搶突擊" }
  ]).slice(0, 5);

  const fw = (clubInfo?.stars.filter(s => s.pos === 'fw') || []).concat([
    { num: 9, name: `主力首發中鋒`, nat: defaultNat, role: "頭號得分手" },
    { num: 7, name: `主力突破左翼`, nat: "邊路快馬 🌐", role: "突破得分" },
    { num: 11, name: `主力突破右翼`, nat: defaultNat, role: "下底傳中" },
    { num: 19, name: `替補衝擊前鋒`, nat: "奇兵射手 🌐", role: "後備奇兵" }
  ]).slice(0, 4);

  return { manager, captain, gk, df, mf, fw };
}

/* ==========================================================================
   Interactive 3D Soccer Player Shooting Animation (3D Striker & Goal)
   ========================================================================== */
function init3DBackground() {
  const canvas = document.getElementById('bg-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Mouse interaction for camera tilt / parallax
  let mouseX = 0, mouseY = 0;
  let camRotX = 0.12, camRotY = -0.28;
  let targetCamRotX = 0.12, targetCamRotY = -0.28;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - width / 2) / (width / 2);
    mouseY = (e.clientY - height / 2) / (height / 2);
    targetCamRotX = 0.12 + mouseY * 0.2;
    targetCamRotY = -0.28 + mouseX * 0.35;
  });

  // Ambient particles & turf grass sparkles
  const SPARKLE_COUNT = 60;
  const sparkles = [];
  for (let i = 0; i < SPARKLE_COUNT; i++) {
    sparkles.push({
      x: (Math.random() - 0.5) * 1400,
      y: Math.random() * 250 - 50,
      z: (Math.random() - 0.5) * 1200,
      vx: (Math.random() - 0.5) * 0.6,
      vz: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  // 3D Goal Geometry
  const goalWidth = 340;
  const goalHeight = 160;
  const goalDepth = 110;
  const goalX = 380;
  const goalY = 80;
  const goalZ = 120;

  // 3D Pitch lines (Penalty box, spot, goal line)
  const pitchLines = [
    // Goal line
    { p1: [goalX, goalY + goalHeight, goalZ - 180], p2: [goalX, goalY + goalHeight, goalZ + 180] },
    // 6-yard box
    { p1: [goalX, goalY + goalHeight, goalZ - 110], p2: [goalX - 90, goalY + goalHeight, goalZ - 110] },
    { p1: [goalX - 90, goalY + goalHeight, goalZ - 110], p2: [goalX - 90, goalY + goalHeight, goalZ + 110] },
    { p1: [goalX - 90, goalY + goalHeight, goalZ + 110], p2: [goalX, goalY + goalHeight, goalZ + 110] },
    // Penalty box
    { p1: [goalX, goalY + goalHeight, goalZ - 230], p2: [goalX - 220, goalY + goalHeight, goalZ - 230] },
    { p1: [goalX - 220, goalY + goalHeight, goalZ - 230], p2: [goalX - 220, goalY + goalHeight, goalZ + 230] },
    { p1: [goalX - 220, goalY + goalHeight, goalZ + 230], p2: [goalX, goalY + goalHeight, goalZ + 230] }
  ];

  // Ball Trail effect
  const ballTrail = [];
  const MAX_TRAIL = 22;

  // Cycle states: 0: Run-up, 1: Backswing & Kick, 2: Ball in Flight / Follow-through, 3: Goal & Net Ripple, 4: Celebration reset
  let animTime = 0;

  function project3D(x, y, z, cx, cy, fov) {
    // Apply camera rotation
    const cosY = Math.cos(camRotY), sinY = Math.sin(camRotY);
    const cosX = Math.cos(camRotX), sinX = Math.sin(camRotX);

    // Rotate around Y
    const x1 = x * cosY - z * sinY;
    const z1 = z * cosY + x * sinY;

    // Rotate around X
    const y1 = y * cosX - z1 * sinX;
    const z2 = z1 * cosX + y * sinX + 700; // view distance offset

    if (z2 <= 20) return null; // Behind camera
    const scale = fov / z2;
    return {
      x: x1 * scale + cx,
      y: y1 * scale + cy,
      z: z2,
      scale: scale
    };
  }

  function drawBone(p1, p2, color, widthVal, glow) {
    if (!p1 || !p2) return;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = widthVal;
    ctx.lineCap = 'round';
    if (glow) {
      ctx.shadowColor = glow;
      ctx.shadowBlur = 8;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function drawSphereNode(p, radius, fillStyle, glowColor) {
    if (!p) return;
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(1, radius * p.scale), 0, Math.PI * 2);
    ctx.fillStyle = fillStyle;
    if (glowColor) {
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 10 * p.scale;
    }
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function animate() {
    requestAnimationFrame(animate);
    animTime += 0.018;

    // Camera damping
    camRotX += (targetCamRotX - camRotX) * 0.05;
    camRotY += (targetCamRotY - camRotY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    const isDark = document.body.classList.contains('dark-theme');
    const cyan = isDark ? '#38bdf8' : '#0284c7';
    const violet = isDark ? '#c084fc' : '#9333ea';
    const gold = '#fbbf24';
    const green = isDark ? '#10b981' : '#059669';
    const netColor = isDark ? 'rgba(148, 163, 184, 0.22)' : 'rgba(100, 116, 139, 0.18)';
    const pitchColor = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.12)';

    // Camera anchor point in screen space
    const cx = width > 1024 ? width * 0.62 : width * 0.5;
    const cy = height * 0.52;
    const fov = 650;

    // --- 1. Draw Pitch Grid & Penalty Area ---
    pitchLines.forEach(line => {
      const sp1 = project3D(line.p1[0], line.p1[1], line.p1[2], cx, cy, fov);
      const sp2 = project3D(line.p2[0], line.p2[1], line.p2[2], cx, cy, fov);
      if (sp1 && sp2) {
        ctx.beginPath();
        ctx.moveTo(sp1.x, sp1.y);
        ctx.lineTo(sp2.x, sp2.y);
        ctx.strokeStyle = pitchColor;
        ctx.lineWidth = 1.2 * sp1.scale;
        ctx.stroke();
      }
    });

    // --- 2. Ambient turf sparkles / stadium dust ---
    sparkles.forEach(p => {
      p.x += p.vx;
      p.z += p.vz;
      if (p.x < -700) p.x = 700;
      if (p.x > 700) p.x = -700;
      if (p.z < -600) p.z = 600;
      if (p.z > 600) p.z = -600;

      const sp = project3D(p.x, p.y, p.z, cx, cy, fov);
      if (sp) {
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, p.size * sp.scale, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(56, 189, 248, ${p.alpha * 0.6})` : `rgba(2, 132, 199, ${p.alpha * 0.4})`;
        ctx.fill();
      }
    });

    // --- 3. Animation Phase Calculation ---
    // Total cycle: 5.5 seconds
    const cycleDuration = 5.2;
    const t = animTime % cycleDuration;
    // Phases:
    // 0.0 ~ 1.5: Run up towards ball
    // 1.5 ~ 2.1: Plant foot, powerful windup & violent strike
    // 2.1 ~ 3.4: Ball rockets into top corner, net violently ripples, player follow-through
    // 3.4 ~ 4.4: Player arms raised in celebration, ball rolls in net
    // 4.4 ~ 5.2: Smooth transition fade to start

    let playerX = 0, playerY = 0, playerZ = 0;
    let rightLegRot = 0, leftLegRot = 0;
    let rightKneeBend = 0, leftKneeBend = 0;
    let torsoTilt = 0, torsoTwist = 0;
    let rightArmRot = 0, leftArmRot = 0;
    let ballX = 0, ballY = 0, ballZ = 0;
    let ballSpin = animTime * 15;
    let netRipple = 0;

    const ballRestX = -120;
    const ballRestY = 230;
    const ballRestZ = 15;

    const topCornerX = goalX + 20;
    const topCornerY = goalY + 18; // Top-right bin of the goal
    const topCornerZ = goalZ + 95;

    if (t < 1.5) {
      // Phase 1: Running approach
      const runT = t / 1.5;
      playerX = -320 + runT * 175; // Runs from -320 to -145
      playerY = 135;
      playerZ = -10 + Math.sin(runT * Math.PI * 4) * 8;

      const stride = Math.sin(runT * 18);
      rightLegRot = stride * 0.65;
      leftLegRot = -stride * 0.65;
      rightKneeBend = Math.max(0, -stride * 0.9);
      leftKneeBend = Math.max(0, stride * 0.9);
      rightArmRot = -stride * 0.7;
      leftArmRot = stride * 0.7;
      torsoTilt = 0.18;

      ballX = ballRestX;
      ballY = ballRestY;
      ballZ = ballRestZ;
    } else if (t < 2.1) {
      // Phase 2: Kick execution (Backswing to contact at t = 2.05)
      const kickT = (t - 1.5) / 0.6; // 0 to 1
      playerX = -145 + kickT * 20;
      playerY = 135;
      playerZ = -10;

      if (kickT < 0.65) {
        // High backswing
        const pBack = kickT / 0.65;
        rightLegRot = -0.9 * pBack; // Right leg cocked back
        rightKneeBend = 1.4 * pBack; // Knee bent
        leftLegRot = 0.35 * pBack;  // Plant foot forward
        leftKneeBend = 0.45 * pBack;
        torsoTilt = -0.15 * pBack;
        torsoTwist = -0.4 * pBack;
        rightArmRot = 0.6;
        leftArmRot = -0.8;
      } else {
        // Explosive forward downswing & strike
        const pDown = (kickT - 0.65) / 0.35;
        rightLegRot = -0.9 + pDown * 2.2; // Right leg swings aggressively forward
        rightKneeBend = 1.4 - pDown * 1.1; // Leg straightens at contact
        leftLegRot = 0.35;
        leftKneeBend = 0.5;
        torsoTilt = 0.25 * pDown;
        torsoTwist = 0.5 * pDown;
        rightArmRot = 0.6 - pDown * 1.2;
        leftArmRot = -0.8 + pDown * 1.5;
      }

      ballX = ballRestX;
      ballY = ballRestY;
      ballZ = ballRestZ;
    } else if (t < 3.4) {
      // Phase 3: Shot in flight & impact
      const flightT = (t - 2.1) / 1.3; // 0 to 1
      playerX = -125;
      playerY = 135;
      playerZ = -10;

      // Player follow-through slowly dampens
      const d = Math.min(1, flightT * 2);
      rightLegRot = 1.3 - d * 0.6;
      rightKneeBend = 0.3;
      leftLegRot = 0.35 - d * 0.2;
      leftKneeBend = 0.3;
      torsoTilt = 0.2 - d * 0.1;
      rightArmRot = -0.6 + d * 0.8;
      leftArmRot = 0.7 - d * 0.3;

      if (flightT < 0.55) {
        // Ball travels with curved supersonic arc towards top corner
        const pFly = flightT / 0.55;
        // Curve trajectory
        ballX = ballRestX + pFly * (topCornerX - ballRestX);
        // Realistic gravity + lift curve
        ballY = ballRestY + pFly * (topCornerY - ballRestY) - Math.sin(pFly * Math.PI) * 45;
        ballZ = ballRestZ + pFly * (topCornerZ - ballRestZ) + Math.sin(pFly * Math.PI) * 25; // Swerving curve
      } else {
        // Impact into upper 90 net & ripples
        const pNet = (flightT - 0.55) / 0.45;
        ballX = topCornerX + Math.sin(pNet * 16) * 6 * (1 - pNet);
        ballY = topCornerY + pNet * 40; // falls down in the net
        ballZ = topCornerZ + 8;
        netRipple = Math.sin(pNet * 18) * (1 - pNet) * 16;
      }
    } else {
      // Phase 4 & 5: Goal Celebration & Re-align
      const celebT = (t - 3.4) / (cycleDuration - 3.4);
      playerX = -125;
      playerY = 135;
      playerZ = -10;

      // Celebrate with arms in the air
      const cheer = Math.min(1, celebT * 3);
      rightArmRot = 0.2 + cheer * 1.5;
      leftArmRot = 0.4 + cheer * 1.5;
      rightLegRot = 0.15;
      leftLegRot = -0.15;
      rightKneeBend = 0.2;
      leftKneeBend = 0.2;
      torsoTilt = -0.12 * cheer;

      ballX = topCornerX;
      ballY = topCornerY + 110;
      ballZ = topCornerZ;
    }

    // Record ball trail
    ballTrail.push({ x: ballX, y: ballY, z: ballZ, time: t });
    if (ballTrail.length > MAX_TRAIL) ballTrail.shift();

    // --- 4. Draw 3D Goal and Dynamic Rippling Net ---
    const gP = [
      // Front posts: [TopLeft, TopRight, BottomLeft, BottomRight]
      [goalX, goalY, goalZ - goalWidth / 2],
      [goalX, goalY, goalZ + goalWidth / 2],
      [goalX, goalY + goalHeight, goalZ - goalWidth / 2],
      [goalX, goalY + goalHeight, goalZ + goalWidth / 2],
      // Back posts:
      [goalX + goalDepth, goalY + 30, goalZ - goalWidth / 2],
      [goalX + goalDepth, goalY + 30, goalZ + goalWidth / 2],
      [goalX + goalDepth, goalY + goalHeight, goalZ - goalWidth / 2],
      [goalX + goalDepth, goalY + goalHeight, goalZ + goalWidth / 2]
    ];

    const projGoal = gP.map(p => project3D(p[0], p[1], p[2], cx, cy, fov));

    // Goal frame posts (Thick white/silver tubes)
    const postColor = isDark ? '#e2e8f0' : '#475569';
    const postGlow = isDark ? 'rgba(226, 232, 240, 0.4)' : null;

    // Crossbar & front posts
    drawBone(projGoal[0], projGoal[1], postColor, 3.5 * (projGoal[0]?.scale || 1), postGlow); // Crossbar
    drawBone(projGoal[0], projGoal[2], postColor, 3.5 * (projGoal[0]?.scale || 1), postGlow); // Left post
    drawBone(projGoal[1], projGoal[3], postColor, 3.5 * (projGoal[1]?.scale || 1), postGlow); // Right post

    // Back depth support bars
    drawBone(projGoal[0], projGoal[4], postColor, 2 * (projGoal[0]?.scale || 1));
    drawBone(projGoal[1], projGoal[5], postColor, 2 * (projGoal[1]?.scale || 1));
    drawBone(projGoal[2], projGoal[6], postColor, 2 * (projGoal[2]?.scale || 1));
    drawBone(projGoal[3], projGoal[7], postColor, 2 * (projGoal[3]?.scale || 1));
    drawBone(projGoal[4], projGoal[5], postColor, 2 * (projGoal[4]?.scale || 1));
    drawBone(projGoal[6], projGoal[7], postColor, 2 * (projGoal[6]?.scale || 1));

    // Draw net grid with impact ripple deformation
    const netCols = 9;
    const netRows = 6;
    for (let r = 0; r <= netRows; r++) {
      const fy = r / netRows;
      const rowPoints = [];
      for (let c = 0; c <= netCols; c++) {
        const fz = c / netCols;
        // Interpolate along the back net
        const gx = goalX + goalDepth + (netRipple > 0 && fz > 0.6 && fy < 0.5 ? netRipple : 0);
        const gy = goalY + 30 + fy * (goalHeight - 30);
        const gz = (goalZ - goalWidth / 2) + fz * goalWidth;
        const sp = project3D(gx, gy, gz, cx, cy, fov);
        if (sp) rowPoints.push(sp);
      }
      for (let i = 0; i < rowPoints.length - 1; i++) {
        drawBone(rowPoints[i], rowPoints[i + 1], netColor, 0.8);
      }
    }

    // --- 5. Draw 3D Ball Trail ---
    if (t >= 2.05 && ballTrail.length > 2) {
      for (let i = 1; i < ballTrail.length; i++) {
        const bp1 = project3D(ballTrail[i - 1].x, ballTrail[i - 1].y, ballTrail[i - 1].z, cx, cy, fov);
        const bp2 = project3D(ballTrail[i].x, ballTrail[i].y, ballTrail[i].z, cx, cy, fov);
        if (bp1 && bp2) {
          const ratio = i / ballTrail.length;
          const trailColor = isDark
            ? `rgba(251, 191, 36, ${ratio * 0.8})`
            : `rgba(245, 158, 11, ${ratio * 0.6})`;
          drawBone(bp1, bp2, trailColor, (3 + ratio * 4) * bp2.scale, isDark ? 'rgba(251, 191, 36, 0.6)' : null);
        }
      }
    }

    // --- 6. Draw 3D Soccer Ball ---
    const ballProj = project3D(ballX, ballY, ballZ, cx, cy, fov);
    if (ballProj) {
      const bRad = 11 * ballProj.scale;
      // Ball glow & core
      ctx.beginPath();
      ctx.arc(ballProj.x, ballProj.y, bRad, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = isDark ? 'rgba(251, 191, 36, 0.9)' : 'rgba(2, 132, 199, 0.5)';
      ctx.shadowBlur = 14 * ballProj.scale;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Ball 3D pentagon/hexagon pattern markings
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.5 * ballProj.scale;
      for (let a = 0; a < 3; a++) {
        const angle = ballSpin + a * (Math.PI * 2 / 3);
        const px = ballProj.x + Math.cos(angle) * (bRad * 0.65);
        const py = ballProj.y + Math.sin(angle) * (bRad * 0.65);
        ctx.beginPath();
        ctx.arc(px, py, bRad * 0.28, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();
        ctx.stroke();
      }
    }

    // --- 7. Draw 3D Striker (Football Player Kinematics) ---
    // Skeletal Hierarchy:
    // Pelvis -> Spine -> Chest -> Head
    // Pelvis -> LeftHip -> LeftKnee -> LeftAnkle
    // Pelvis -> RightHip -> RightKnee -> RightAnkle
    // Chest -> LeftShoulder -> LeftElbow -> LeftHand
    // Chest -> RightShoulder -> RightElbow -> RightHand

    const pScale = 0.9;
    const pelvis = { x: playerX, y: playerY, z: playerZ };

    // Spine & Head
    const spineLength = 40 * pScale;
    const chest = {
      x: pelvis.x + Math.sin(torsoTilt) * spineLength,
      y: pelvis.y - Math.cos(torsoTilt) * spineLength,
      z: pelvis.z + Math.sin(torsoTwist) * 15
    };

    const neck = {
      x: chest.x + Math.sin(torsoTilt) * 16 * pScale,
      y: chest.y - Math.cos(torsoTilt) * 16 * pScale,
      z: chest.z
    };

    const head = {
      x: neck.x + Math.sin(torsoTilt) * 16 * pScale,
      y: neck.y - Math.cos(torsoTilt) * 16 * pScale,
      z: neck.z
    };

    // Right Leg (Kicking Leg)
    const legLen = 42 * pScale;
    const rHip = { x: pelvis.x + 8, y: pelvis.y + 6, z: pelvis.z + 12 };
    const rKnee = {
      x: rHip.x + Math.sin(rightLegRot) * legLen,
      y: rHip.y + Math.cos(rightLegRot) * legLen,
      z: rHip.z + 4
    };
    const rAnkle = {
      x: rKnee.x + Math.sin(rightLegRot - rightKneeBend) * legLen,
      y: rKnee.y + Math.cos(rightLegRot - rightKneeBend) * legLen,
      z: rKnee.z + 2
    };

    // Left Leg (Plant Leg)
    const lHip = { x: pelvis.x - 8, y: pelvis.y + 6, z: pelvis.z - 12 };
    const lKnee = {
      x: lHip.x + Math.sin(leftLegRot) * legLen,
      y: lHip.y + Math.cos(leftLegRot) * legLen,
      z: lHip.z - 4
    };
    const lAnkle = {
      x: lKnee.x + Math.sin(leftLegRot - leftKneeBend) * legLen,
      y: lKnee.y + Math.cos(leftLegRot - leftKneeBend) * legLen,
      z: lKnee.z - 2
    };

    // Shoulders & Arms
    const armLen = 32 * pScale;
    const rShoulder = { x: chest.x + 12, y: chest.y + 4, z: chest.z + 18 };
    const rElbow = {
      x: rShoulder.x + Math.sin(rightArmRot) * armLen,
      y: rShoulder.y + Math.cos(rightArmRot) * armLen * 0.7,
      z: rShoulder.z + Math.cos(rightArmRot) * 16
    };
    const rHand = {
      x: rElbow.x + Math.sin(rightArmRot + 0.5) * armLen,
      y: rElbow.y + Math.cos(rightArmRot + 0.5) * armLen * 0.7,
      z: rElbow.z + 6
    };

    const lShoulder = { x: chest.x - 12, y: chest.y + 4, z: chest.z - 18 };
    const lElbow = {
      x: lShoulder.x + Math.sin(leftArmRot) * armLen,
      y: lShoulder.y + Math.cos(leftArmRot) * armLen * 0.7,
      z: lShoulder.z - Math.cos(leftArmRot) * 16
    };
    const lHand = {
      x: lElbow.x + Math.sin(leftArmRot + 0.5) * armLen,
      y: lElbow.y + Math.cos(leftArmRot + 0.5) * armLen * 0.7,
      z: lElbow.z - 6
    };

    // Project player skeletal points into 2D
    const sPelvis = project3D(pelvis.x, pelvis.y, pelvis.z, cx, cy, fov);
    const sChest = project3D(chest.x, chest.y, chest.z, cx, cy, fov);
    const sNeck = project3D(neck.x, neck.y, neck.z, cx, cy, fov);
    const sHead = project3D(head.x, head.y, head.z, cx, cy, fov);

    const sRHip = project3D(rHip.x, rHip.y, rHip.z, cx, cy, fov);
    const sRKnee = project3D(rKnee.x, rKnee.y, rKnee.z, cx, cy, fov);
    const sRAnkle = project3D(rAnkle.x, rAnkle.y, rAnkle.z, cx, cy, fov);

    const sLHip = project3D(lHip.x, lHip.y, lHip.z, cx, cy, fov);
    const sLKnee = project3D(lKnee.x, lKnee.y, lKnee.z, cx, cy, fov);
    const sLAnkle = project3D(lAnkle.x, lAnkle.y, lAnkle.z, cx, cy, fov);

    const sRShoulder = project3D(rShoulder.x, rShoulder.y, rShoulder.z, cx, cy, fov);
    const sRElbow = project3D(rElbow.x, rElbow.y, rElbow.z, cx, cy, fov);
    const sRHand = project3D(rHand.x, rHand.y, rHand.z, cx, cy, fov);

    const sLShoulder = project3D(lShoulder.x, lShoulder.y, lShoulder.z, cx, cy, fov);
    const sLElbow = project3D(lElbow.x, lElbow.y, lElbow.z, cx, cy, fov);
    const sLHand = project3D(lHand.x, lHand.y, lHand.z, cx, cy, fov);

    // Render Player Skeleton with Cyber-Futuristic Glowing Armor & Joints
    const bodyGlow = isDark ? 'rgba(56, 189, 248, 0.6)' : 'rgba(2, 132, 199, 0.3)';
    const kickGlow = isDark ? 'rgba(251, 191, 36, 0.8)' : 'rgba(245, 158, 11, 0.5)';
    const pSc = sPelvis ? sPelvis.scale : 1;

    // Torso / Spine
    drawBone(sPelvis, sChest, cyan, 7 * pSc, bodyGlow);
    drawBone(sChest, sNeck, cyan, 5 * pSc, bodyGlow);

    // Head
    if (sHead) {
      drawSphereNode(sHead, 12, isDark ? '#ffffff' : '#0f172a', bodyGlow);
      // Visor / Face forward indicator
      ctx.beginPath();
      ctx.arc(sHead.x + 3 * pSc, sHead.y, 4 * pSc, 0, Math.PI * 2);
      ctx.fillStyle = gold;
      ctx.fill();
    }

    // Left Arm
    drawBone(sChest, sLShoulder, cyan, 4.5 * pSc, bodyGlow);
    drawBone(sLShoulder, sLElbow, cyan, 4 * pSc, bodyGlow);
    drawBone(sLElbow, sLHand, cyan, 3.5 * pSc, bodyGlow);
    drawSphereNode(sLHand, 4.5, gold);

    // Left Leg (Plant)
    drawBone(sPelvis, sLHip, cyan, 5 * pSc, bodyGlow);
    drawBone(sLHip, sLKnee, cyan, 5.5 * pSc, bodyGlow);
    drawBone(sLKnee, sLAnkle, cyan, 5 * pSc, bodyGlow);
    drawSphereNode(sLAnkle, 5, violet);

    // Right Arm
    drawBone(sChest, sRShoulder, cyan, 4.5 * pSc, bodyGlow);
    drawBone(sRShoulder, sRElbow, cyan, 4 * pSc, bodyGlow);
    drawBone(sRElbow, sRHand, cyan, 3.5 * pSc, bodyGlow);
    drawSphereNode(sRHand, 4.5, gold);

    // Right Leg (Striking power leg with dynamic kick highlights!)
    const strikeColor = (t >= 1.9 && t <= 2.4) ? gold : violet;
    const strikeGlowEffect = (t >= 1.9 && t <= 2.4) ? kickGlow : bodyGlow;
    drawBone(sPelvis, sRHip, strikeColor, 5 * pSc, strikeGlowEffect);
    drawBone(sRHip, sRKnee, strikeColor, 6 * pSc, strikeGlowEffect);
    drawBone(sRKnee, sRAnkle, strikeColor, 5.5 * pSc, strikeGlowEffect);
    drawSphereNode(sRAnkle, 6, gold, kickGlow); // Glowing football boot

    // Key Joints
    [sPelvis, sChest, sRHip, sLHip, sRKnee, sLKnee, sRShoulder, sLShoulder, sRElbow, sLElbow].forEach(j => {
      drawSphereNode(j, 3.5, gold);
    });

    // --- 8. Dynamic "GOAL!" holographic banner upon scoring ---
    if (t >= 2.65 && t <= 4.2) {
      const gAlpha = Math.min(1, (t - 2.65) * 3) * (t > 3.8 ? (4.2 - t) / 0.4 : 1);
      const bannerSp = project3D(goalX - 60, goalY - 45, goalZ, cx, cy, fov);
      if (bannerSp) {
        ctx.save();
        ctx.translate(bannerSp.x, bannerSp.y);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 ${Math.max(16, 32 * bannerSp.scale)}px sans-serif`;
        ctx.fillStyle = `rgba(251, 191, 36, ${gAlpha})`;
        ctx.shadowColor = 'rgba(251, 191, 36, 0.9)';
        ctx.shadowBlur = 18;
        ctx.fillText('⚽ GOOOAL!', 0, 0);
        ctx.restore();
      }
    }
  }

  animate();
}


