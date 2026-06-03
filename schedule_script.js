document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Actual data from tomoko369.github.io/Deliverables
  const projects = [
    {
      "id": 8,
      "title": "自己紹介",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/93c5fd/ffffff?text=Profile",
      "description": "クリエイターとしての経歴、スキルセット、実績をまとめた自己紹介ページ。",
      "link": "https://tomoko369.github.io/Deliverables/self-introduction/index.html"
    },
    {
      "id": 9,
      "title": "講師・レッスン",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/6ee7b7/ffffff?text=Teacher",
      "description": "個人レッスンや講師活動についての詳細情報を掲載したウェブサイト。",
      "link": "https://tomoko369.github.io/teacher/"
    },
    {
      "id": 17,
      "title": "問い合わせフォーム",
      "category": "GAS",
      "image": "https://placehold.co/600x400/60a5fa/ffffff?text=Inquiry+Form",
      "description": "サイトに埋め込み可能な、GASベースの高機能問い合わせフォーム。",
      "link": "https://tomoko369.github.io/Deliverables/#contact-section"
    },
    {
      "id": 22,
      "title": "雑談とビジネス音声配信と動画配信サイト",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/ff7e67/ffffff?text=Streaming+Site",
      "description": "雑談やビジネスの音声配信と、日本語・英語・中国語に対応した動画配信サイト。",
      "link": "https://tomoko369.github.io/Chatandbusiness/"
    },
    {
      "id": 3,
      "title": "創理紹介サイト",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/d8b4fe/ffffff?text=Sori+Site",
      "description": "コミュニティ「創理」の魅力を伝える紹介サイト。パステルカラーの優しいデザイン。",
      "link": "https://introductionlp.netlify.app/"
    },
    {
      "id": 5,
      "title": "ポートフォリオサイト",
      "category": "デザイン",
      "image": "https://placehold.co/600x400/86efac/ffffff?text=Portfolio",
      "description": "ミニマルで洗練されたデザイナー向けのポートフォリオテンプレート。",
      "link": "https://tomoko369.github.io/potogfilio/"
    },
    {
      "id": 6,
      "title": "やる気ないもん",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/fdba74/ffffff?text=Yarukinai",
      "description": "「やる気ないもん」公式HP。LINEスタンプやグッズの紹介。",
      "link": "https://tomoko369.github.io/YARUKINAI/"
    },
    {
      "id": 7,
      "title": "御守り祈願",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/fca5a5/ffffff?text=Omamori",
      "description": "運気を上げるための御守り祈願サイト。デジタル御守り機能付き。",
      "link": "https://tomoko369.github.io/omamorikigan/"
    },
    {
      "id": 14,
      "title": "仕事・質問依頼文作成図鑑",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/f9a8d4/ffffff?text=Question+Book",
      "description": "仕事の依頼や質問文をスムーズに作成できるお助けツール。",
      "link": "https://tomoko369.github.io/Howtoaskquestions/"
    },
    {
      "id": 10,
      "title": "YouTubeチャンネル",
      "category": "動画",
      "image": "https://placehold.co/600x400/f87171/ffffff?text=YouTube",
      "description": "技術解説やライフスタイルなどの発信を行っているYouTubeチャンネル。",
      "link": "https://www.youtube.com/channel/UCEY8cUNyv_KM16FUnc9Lwdw"
    },
    {
      "id": 11,
      "title": "マークダウン式メモ",
      "category": "拡張機能",
      "image": "https://placehold.co/600x400/c4b5fd/ffffff?text=Markdown+Memo",
      "description": "ブラウザで手軽に使えるマークダウン記法対応のメモ帳拡張機能。",
      "link": "#"
    },
    {
      "id": 12,
      "title": "ストップウォッチURLメモ",
      "category": "拡張機能",
      "image": "https://placehold.co/600x400/fb7185/ffffff?text=Stopwatch",
      "description": "作業時間を計測しながら、関連するURLをメモできる便利ツール。",
      "link": "#"
    },
    {
      "id": 13,
      "title": "カラースポイト機能",
      "category": "拡張機能",
      "image": "https://placehold.co/600x400/67e8f9/ffffff?text=Color+Picker",
      "description": "Webページ上の色を簡単に取得・コピーできるデザイナー向け拡張機能。",
      "link": "#"
    },
    {
      "id": 15,
      "title": "西暦和暦変換",
      "category": "拡張機能",
      "image": "https://placehold.co/600x400/2dd4bf/ffffff?text=Date+Converter",
      "description": "簡単に西暦と和暦を変換できる便利ツール。",
      "link": "#"
    },
    {
      "id": 16,
      "title": "申し込みフォーム",
      "category": "GAS",
      "image": "https://placehold.co/600x400/34d399/ffffff?text=Form+App",
      "description": "Googleフォームと連携し、自動返信や管理を行う申し込みシステム。",
      "link": "#"
    },
    {
      "id": 18,
      "title": "開運適正 九星気学",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/c084fc/ffffff?text=Fortune",
      "description": "九星気学を用いて、あなたの開運適正を診断するWebサイト。",
      "link": "https://tomoko369.github.io/fortunetelling/"
    },
    {
      "id": 19,
      "title": "タイピング練習ソフト",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/fbbf24/ffffff?text=Typing+Game",
      "description": "友達と競えるタイピング練習ゲーム。",
      "link": "https://tomoko369.github.io/-/"
    },
    {
      "id": 1,
      "title": "音声書き起こしツール",
      "category": "音声ツール",
      "image": "https://placehold.co/600x400/a5b4fc/ffffff?text=Voice+Tool",
      "description": "OpenAI Whisperを使用したローカル書き起こしツール。",
      "link": "#"
    },
    {
      "id": 20,
      "title": "毎日の星占い",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/a78bfa/ffffff?text=Horoscope",
      "description": "毎日の運勢をランキング形式で紹介する星占いサイト。",
      "link": "https://tomoko369.github.io/uranai0210/"
    },
    {
      "id": 21,
      "title": "ジャーナリング振り返り機能",
      "category": "GAS",
      "image": "https://placehold.co/600x400/ffb7b2/ffffff?text=Journaling",
      "description": "日々の振り返りを記録し、AIからフィードバックをもらえるツール。",
      "link": "#"
    },
    {
      "id": 23,
      "title": "YouTube記録ボタン",
      "category": "GAS・Webサイト",
      "image": "https://placehold.co/600x400/ef4444/ffffff?text=YouTube+Record",
      "description": "YouTubeの再生数と登録者数を記録するボタン。",
      "link": "https://tomoko369.github.io/YOUTUBE--0214/"
    },
    {
      "id": 24,
      "title": "URL保存＆送信機能",
      "category": "拡張機能",
      "image": "https://placehold.co/600x400/8b5cf6/ffffff?text=URL+Save",
      "description": "URLを10個保存し、WEBHOOKで送信する機能。",
      "link": "#"
    },
    {
      "id": 25,
      "title": "Xスペースダウンロード",
      "category": "音声ツール",
      "image": "https://placehold.co/600x400/1d9bf0/ffffff?text=X+Space+DL",
      "description": "エックスのスペースをDLする機能。",
      "link": "#"
    },
    {
      "id": 26,
      "title": "英単語帳",
      "category": "GAS",
      "image": "https://placehold.co/600x400/4ade80/ffffff?text=Vocabulary+Book",
      "description": "英語をグーグルフォームで記載し、データを蓄積するシステム。",
      "link": "#"
    },
    {
      "id": 27,
      "title": "うちの子もしかしてチェック",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/fb923c/ffffff?text=Check+Site",
      "description": "手軽に確認できるセルフチェックサイト。",
      "link": "https://tomoko369.github.io/adhd/"
    },
    {
      "id": 28,
      "title": "天気と気圧と気分入力",
      "category": "GAS",
      "image": "https://placehold.co/600x400/38bdf8/ffffff?text=Weather+Mood",
      "description": "天気と気圧と気分の入力ソフト。",
      "link": "#"
    },
    {
      "id": 29,
      "title": "星占い（今日の開運）",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/a78bfa/ffffff?text=Horoscope",
      "description": "今日の開運メッセージをお届けする星占いサイト。",
      "link": "https://tomoko369.github.io/uranai0305/"
    },
    {
      "id": 30,
      "title": "テキスト音声変換",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/818cf8/ffffff?text=Text+to+Speech",
      "description": "テキストを音声に変換するWEBサイト。",
      "link": "https://tomoko369.github.io/textread/"
    },
    {
      "id": 31,
      "title": "PDFをTEXT変換",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/f472b6/ffffff?text=PDF+to+Text",
      "description": "PDFファイルのテキストを抽出して変換するWEBツール。",
      "link": "https://tomoko369.github.io/PDFtxet/"
    },
    {
      "id": 32,
      "title": "小学校の準備アプリ",
      "category": "Webサイト",
      "image": "https://placehold.co/600x400/14b8a6/ffffff?text=Kids+Planner",
      "description": "現在時刻天気持ち物時間割一括管理。",
      "link": "https://tomoko369.github.io/timetable/"
    }
  ];

  // Helper function to assign color based on category
  function getTagClasses(category) {
    if (category.includes('Webサイト')) return 'bg-tertiary-container text-on-tertiary';
    if (category.includes('GAS')) return 'bg-primary-container text-on-primary-container';
    if (category.includes('拡張機能')) return 'bg-secondary-container text-on-secondary-container';
    return 'bg-on-surface text-surface';
  }

  // Render cards
  function renderCards(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(p => {
          if (filter === '音声ツール') {
            return p.category.includes('音声ツール') || p.category.includes('動画');
          }
          return p.category.includes(filter);
        });

    filteredProjects.forEach(project => {
      const isLink = project.link && project.link !== '#' && project.link.startsWith('http');
      
      const card = document.createElement(isLink ? 'a' : 'div');
      if (isLink) {
        card.href = project.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }
      card.className = 'flex flex-col bg-surface-container-low rounded-xl border border-secondary-fixed overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer';
      
      // Iframe implementation for live preview
      let mediaHtml = '';
      if (isLink) {
        mediaHtml = `
          <div class="iframe-thumbnail-wrapper">
            <iframe src="${project.link}" scrolling="no" tabindex="-1" loading="lazy" title="${project.title}"></iframe>
          </div>
        `;
      } else {
        mediaHtml = `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">`;
      }
      
      const tagClasses = getTagClasses(project.category);
      
      card.innerHTML = `
        <div class="aspect-video relative overflow-hidden bg-surface-variant">
          ${mediaHtml}
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-3 gap-2">
            <h3 class="font-headline-md text-headline-md text-primary leading-tight">${project.title}</h3>
            <span class="${tagClasses} px-3 py-1 rounded-full text-[12px] font-bold whitespace-nowrap">${project.category}</span>
          </div>
          <p class="text-on-surface-variant font-body-md text-body-md leading-relaxed mt-auto">
            ${project.description}
          </p>
        </div>
      `;
      
      galleryGrid.appendChild(card);
    });
  }

  // Initial render
  renderCards();

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active classes for Tailwind design
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('bg-surface', 'text-primary', 'border', 'border-outline');
      });
      
      btn.classList.remove('bg-surface', 'text-primary', 'border-outline');
      btn.classList.add('bg-primary', 'text-white', 'border-primary');
      
      const filterValue = btn.getAttribute('data-filter');
      renderCards(filterValue);
    });
  });
});
