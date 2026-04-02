const TEMPLATES = [
  {
    id: 1,
    category: "丁寧表現",
    template: "I was wondering if you could v",
    meaning: "〜していただけないかと思いまして",
    questions: [
      {
        jp: "この商品の写真を追加していただけないかと思いまして。",
        en: "I was wondering if you could add more photos of this product.",
        hint: "丁寧な依頼"
      },
      {
        jp: "来週の戦略会議でGMVの進捗を共有していただけないかと思いまして。",
        en: "I was wondering if you could share the GMV progress at next week's strategy meeting.",
        hint: "丁寧な依頼"
      },
      {
        jp: "出品者向けのガイドラインを見直していただけないかと思いまして。",
        en: "I was wondering if you could review the guidelines for sellers.",
        hint: "丁寧な依頼"
      }
    ]
  },
  {
    id: 2,
    category: "時制",
    template: "Has S ever p.p.?",
    meaning: "〜したことはありますか？",
    questions: [
      {
        jp: "このマーケットプレイスで買い物をしたことはありますか？",
        en: "Have you ever shopped on this marketplace?",
        hint: "経験を尋ねる"
      },
      {
        jp: "彼はライブコマースのイベントを運営したことはありますか？",
        en: "Has he ever managed a live commerce event?",
        hint: "経験を尋ねる"
      },
      {
        jp: "あなたのチームはA/Bテストを実施したことはありますか？",
        en: "Has your team ever conducted an A/B test?",
        hint: "経験を尋ねる"
      }
    ]
  },
  {
    id: 3,
    category: "接続詞",
    template: "SV as soon as sv",
    meaning: "〜するとすぐに",
    questions: [
      {
        jp: "注文が入るとすぐに出品者に通知が届きます。",
        en: "The seller receives a notification as soon as an order comes in.",
        hint: "即時の動作"
      },
      {
        jp: "新機能をリリースするとすぐにユーザーからフィードバックが届いた。",
        en: "We received feedback from users as soon as we released the new feature.",
        hint: "即時の動作"
      },
      {
        jp: "キャンペーンが始まるとすぐにトラフィックが急増した。",
        en: "Traffic surged as soon as the campaign started.",
        hint: "即時の動作"
      }
    ]
  },
  {
    id: 4,
    category: "接続詞",
    template: "As long as sv, SV",
    meaning: "〜する限り",
    questions: [
      {
        jp: "品質基準を満たす限り、どの出品者でも参加できます。",
        en: "As long as they meet the quality standards, any seller can participate.",
        hint: "条件の継続"
      },
      {
        jp: "顧客満足度が高い限り、手数料の値上げは受け入れられるでしょう。",
        en: "As long as customer satisfaction remains high, the fee increase will be accepted.",
        hint: "条件の継続"
      },
      {
        jp: "KPIを達成し続ける限り、チームの予算は維持されます。",
        en: "As long as we keep hitting our KPIs, the team's budget will be maintained.",
        hint: "条件の継続"
      }
    ]
  },
  {
    id: 5,
    category: "接続詞",
    template: "As far as sv, SV",
    meaning: "〜する限りでは",
    questions: [
      {
        jp: "私が知る限りでは、競合他社はまだこの市場に参入していません。",
        en: "As far as I know, our competitors haven't entered this market yet.",
        hint: "知識の範囲"
      },
      {
        jp: "データを見る限りでは、コンバージョン率は改善しています。",
        en: "As far as the data shows, the conversion rate is improving.",
        hint: "知識の範囲"
      },
      {
        jp: "私が覚えている限りでは、その仕様変更は先月承認されました。",
        en: "As far as I remember, that specification change was approved last month.",
        hint: "知識の範囲"
      }
    ]
  },
  {
    id: 6,
    category: "接続詞",
    template: "Now that sv, SV",
    meaning: "〜した今、",
    questions: [
      {
        jp: "新しい決済システムが導入された今、取引はよりスムーズになるでしょう。",
        en: "Now that the new payment system has been implemented, transactions will be smoother.",
        hint: "状況変化の結果"
      },
      {
        jp: "四半期のデータが揃った今、来期の戦略を立てましょう。",
        en: "Now that we have the quarterly data, let's plan the strategy for next quarter.",
        hint: "状況変化の結果"
      },
      {
        jp: "彼がチームに加わった今、プロジェクトを加速できます。",
        en: "Now that he has joined the team, we can accelerate the project.",
        hint: "状況変化の結果"
      }
    ]
  },
  {
    id: 7,
    category: "丁寧表現",
    template: "If possible, ...",
    meaning: "可能であれば",
    questions: [
      {
        jp: "可能であれば、今週中に出品者への返信をお願いします。",
        en: "If possible, please reply to the seller by the end of this week.",
        hint: "控えめな依頼"
      },
      {
        jp: "可能であれば、ダッシュボードにリアルタイムのGMVデータを追加したいです。",
        en: "If possible, I'd like to add real-time GMV data to the dashboard.",
        hint: "控えめな依頼"
      },
      {
        jp: "可能であれば、来月のローンチ前にユーザーテストを実施しましょう。",
        en: "If possible, let's conduct user testing before next month's launch.",
        hint: "控えめな依頼"
      }
    ]
  },
  {
    id: 8,
    category: "表現",
    template: "It's not that sv. It's just that sv",
    meaning: "〜というわけではない。ただ〜なだけ",
    questions: [
      {
        jp: "この機能が悪いというわけではない。ただ優先度が低いだけです。",
        en: "It's not that this feature is bad. It's just that it's low priority.",
        hint: "否定+補足説明"
      },
      {
        jp: "売上が落ちているというわけではない。ただ成長速度が鈍化しているだけです。",
        en: "It's not that sales are declining. It's just that the growth rate is slowing down.",
        hint: "否定+補足説明"
      },
      {
        jp: "彼のアイデアに反対しているわけではない。ただもっとデータが必要なだけです。",
        en: "It's not that I disagree with his idea. It's just that we need more data.",
        hint: "否定+補足説明"
      }
    ]
  },
  {
    id: 9,
    category: "感情表現",
    template: "SV... that sv",
    meaning: "〜して…だ（感情の原因）",
    questions: [
      {
        jp: "月間アクティブユーザーが100万人を超えて嬉しいです。",
        en: "I'm happy that our monthly active users have exceeded one million.",
        hint: "感情の原因"
      },
      {
        jp: "チームが締め切りに間に合わなくて残念です。",
        en: "I'm disappointed that the team didn't meet the deadline.",
        hint: "感情の原因"
      },
      {
        jp: "新しいパートナーシップが成立して興奮しています。",
        en: "I'm excited that the new partnership has been established.",
        hint: "感情の原因"
      }
    ]
  },
  {
    id: 10,
    category: "程度",
    template: "SV so...that sv",
    meaning: "とても〜なので…だ",
    questions: [
      {
        jp: "サーバー負荷がとても高かったので、サイトがダウンした。",
        en: "The server load was so high that the site went down.",
        hint: "結果を伴う程度"
      },
      {
        jp: "そのキャンペーンはとても効果的だったので、在庫がすぐになくなった。",
        en: "The campaign was so effective that the inventory sold out quickly.",
        hint: "結果を伴う程度"
      },
      {
        jp: "UIの変更がとても複雑だったので、リリースを延期しなければならなかった。",
        en: "The UI changes were so complex that we had to postpone the release.",
        hint: "結果を伴う程度"
      }
    ]
  },
  {
    id: 11,
    category: "目的",
    template: "SV so that s could v",
    meaning: "〜できるように",
    questions: [
      {
        jp: "出品者が売上を追跡できるように、ダッシュボードを作成しました。",
        en: "We created a dashboard so that sellers could track their sales.",
        hint: "目的を示す"
      },
      {
        jp: "ユーザーが簡単に返品できるように、プロセスを簡略化しました。",
        en: "We simplified the process so that users could easily return items.",
        hint: "目的を示す"
      },
      {
        jp: "チームがリモートで協力できるように、新しいツールを導入しました。",
        en: "We introduced new tools so that the team could collaborate remotely.",
        hint: "目的を示す"
      }
    ]
  },
  {
    id: 12,
    category: "仮定法",
    template: "If sv(past), S would/could/might V",
    meaning: "もし〜なら、…するのに",
    questions: [
      {
        jp: "もし予算がもっとあれば、マーケティングキャンペーンを拡大するのに。",
        en: "If we had more budget, we would expand the marketing campaign.",
        hint: "現在の仮定"
      },
      {
        jp: "もしエンジニアがもう一人いれば、この機能をもっと早くリリースできるのに。",
        en: "If we had one more engineer, we could release this feature sooner.",
        hint: "現在の仮定"
      },
      {
        jp: "もし手数料を下げたら、もっと多くの出品者が集まるかもしれないのに。",
        en: "If we lowered the commission fee, we might attract more sellers.",
        hint: "現在の仮定"
      }
    ]
  },
  {
    id: 13,
    category: "仮定法",
    template: "If s had p.p., S would've/could've p.p.",
    meaning: "もし〜していたら、…していただろう",
    questions: [
      {
        jp: "もしもっと早くA/Bテストをしていたら、コンバージョン率を改善できていただろう。",
        en: "If we had conducted the A/B test earlier, we could've improved the conversion rate.",
        hint: "過去の仮定"
      },
      {
        jp: "もし在庫管理システムを導入していたら、欠品を防げていただろう。",
        en: "If we had implemented an inventory management system, we would've prevented stockouts.",
        hint: "過去の仮定"
      },
      {
        jp: "もし顧客の声をもっと聞いていたら、あの失敗は避けられていただろう。",
        en: "If we had listened to our customers more, we could've avoided that failure.",
        hint: "過去の仮定"
      }
    ]
  },
  {
    id: 14,
    category: "仮定法",
    template: "If s had p.p., S would V",
    meaning: "もし〜していたら、今…するのに（混合仮定法）",
    questions: [
      {
        jp: "もし去年AIを導入していたら、今もっと効率的に運営しているのに。",
        en: "If we had adopted AI last year, we would operate more efficiently now.",
        hint: "過去→現在の仮定"
      },
      {
        jp: "もし彼が早めに転職していたら、今このチームにいるのに。",
        en: "If he had changed jobs earlier, he would be on this team now.",
        hint: "過去→現在の仮定"
      },
      {
        jp: "もしあのとき海外展開していたら、今もっと大きな市場シェアを持っているのに。",
        en: "If we had expanded overseas back then, we would have a larger market share now.",
        hint: "過去→現在の仮定"
      }
    ]
  },
  {
    id: 15,
    category: "仮定法",
    template: "If s were to v, S would V",
    meaning: "仮に〜するとしたら",
    questions: [
      {
        jp: "仮にサブスクリプションモデルに切り替えるとしたら、収益構造が変わるだろう。",
        en: "If we were to switch to a subscription model, the revenue structure would change.",
        hint: "仮想の状況"
      },
      {
        jp: "仮に全カテゴリーで送料無料にするとしたら、利益率に影響するだろう。",
        en: "If we were to offer free shipping across all categories, it would affect the profit margin.",
        hint: "仮想の状況"
      },
      {
        jp: "仮に競合がこの市場に参入するとしたら、差別化戦略が必要になるだろう。",
        en: "If a competitor were to enter this market, we would need a differentiation strategy.",
        hint: "仮想の状況"
      }
    ]
  },
  {
    id: 16,
    category: "仮定法",
    template: "I wish that sv(past)",
    meaning: "〜だったらいいのに",
    questions: [
      {
        jp: "もっと多くのデータアナリストがチームにいたらいいのに。",
        en: "I wish that we had more data analysts on the team.",
        hint: "現在への願望"
      },
      {
        jp: "配送コストがもっと安かったらいいのに。",
        en: "I wish that shipping costs were lower.",
        hint: "現在への願望"
      },
      {
        jp: "この機能がもっとユーザーフレンドリーだったらいいのに。",
        en: "I wish that this feature were more user-friendly.",
        hint: "現在への願望"
      }
    ]
  },
  {
    id: 17,
    category: "仮定法",
    template: "I wish that s had p.p.",
    meaning: "〜だったらよかったのに",
    questions: [
      {
        jp: "あのバグをローンチ前に発見できていたらよかったのに。",
        en: "I wish that we had found that bug before the launch.",
        hint: "過去への後悔"
      },
      {
        jp: "もっと早く市場調査を始めていたらよかったのに。",
        en: "I wish that we had started the market research earlier.",
        hint: "過去への後悔"
      },
      {
        jp: "あのとき出品者の意見をもっと聞いていたらよかったのに。",
        en: "I wish that we had listened to the sellers' opinions more back then.",
        hint: "過去への後悔"
      }
    ]
  },
  {
    id: 18,
    category: "仮定法",
    template: "SV that s v(base)",
    meaning: "〜するよう提案する",
    questions: [
      {
        jp: "マネージャーは、チームがスプリントレビューを毎週行うよう提案した。",
        en: "The manager suggested that the team hold a sprint review every week.",
        hint: "提案・要求の that節"
      },
      {
        jp: "ディレクターは、新しいカテゴリーを追加する前にユーザーリサーチを行うよう求めた。",
        en: "The director requested that we conduct user research before adding a new category.",
        hint: "提案・要求の that節"
      },
      {
        jp: "CEOは、全部署がAIツールを導入するよう推奨した。",
        en: "The CEO recommended that every department adopt AI tools.",
        hint: "提案・要求の that節"
      }
    ]
  },
  {
    id: 19,
    category: "仮定法",
    template: "It is...that s v(base)",
    meaning: "〜することが重要だ",
    questions: [
      {
        jp: "出品者がプラットフォームのポリシーを遵守することが不可欠です。",
        en: "It is essential that sellers comply with the platform's policies.",
        hint: "重要性を示す that節"
      },
      {
        jp: "新しいメンバーがオンボーディングプロセスを完了することが重要です。",
        en: "It is important that new members complete the onboarding process.",
        hint: "重要性を示す that節"
      },
      {
        jp: "チームがローンチ前にすべてのテストケースを確認することが必要です。",
        en: "It is necessary that the team review all test cases before the launch.",
        hint: "重要性を示す that節"
      }
    ]
  },
  {
    id: 20,
    category: "助動詞",
    template: "S should've p.p.",
    meaning: "〜すべきだった",
    questions: [
      {
        jp: "ローンチ前にもっと負荷テストをすべきだった。",
        en: "We should've done more load testing before the launch.",
        hint: "過去への後悔・反省"
      },
      {
        jp: "あの出品者にもっと早くサポートを提供すべきだった。",
        en: "We should've provided support to that seller earlier.",
        hint: "過去への後悔・反省"
      },
      {
        jp: "競合の動きをもっと注意深く監視すべきだった。",
        en: "We should've monitored our competitors' moves more carefully.",
        hint: "過去への後悔・反省"
      }
    ]
  },
  {
    id: 21,
    category: "助動詞",
    template: "S might've p.p.",
    meaning: "〜したかもしれない",
    questions: [
      {
        jp: "サーバーの設定ミスが障害を引き起こしたかもしれない。",
        en: "A server misconfiguration might've caused the outage.",
        hint: "過去の推測"
      },
      {
        jp: "クーポンが予想以上にコンバージョン率を押し上げたかもしれない。",
        en: "The coupon might've boosted the conversion rate more than expected.",
        hint: "過去の推測"
      },
      {
        jp: "競合がすでに同じ機能を開発し始めたかもしれない。",
        en: "Our competitors might've already started developing the same feature.",
        hint: "過去の推測"
      }
    ]
  },
  {
    id: 22,
    category: "助動詞",
    template: "S must've p.p.",
    meaning: "〜したに違いない",
    questions: [
      {
        jp: "あのプロモーションがトラフィック急増の原因に違いない。",
        en: "That promotion must've caused the traffic spike.",
        hint: "確信のある過去の推測"
      },
      {
        jp: "彼はレポートを徹夜で仕上げたに違いない。",
        en: "He must've stayed up all night to finish the report.",
        hint: "確信のある過去の推測"
      },
      {
        jp: "ユーザーはチェックアウトのプロセスで混乱したに違いない。",
        en: "The users must've been confused by the checkout process.",
        hint: "確信のある過去の推測"
      }
    ]
  },
  {
    id: 23,
    category: "助動詞",
    template: "S can't have p.p.",
    meaning: "〜したはずがない",
    questions: [
      {
        jp: "その出品者がたった1日で1000件の注文を受けたはずがない。",
        en: "That seller can't have received 1,000 orders in just one day.",
        hint: "不可能な過去の推測"
      },
      {
        jp: "チーム全員がその仕様変更に同意したはずがない。",
        en: "The entire team can't have agreed to that specification change.",
        hint: "不可能な過去の推測"
      },
      {
        jp: "彼がそんな重要なメールを見逃したはずがない。",
        en: "He can't have missed such an important email.",
        hint: "不可能な過去の推測"
      }
    ]
  },
  {
    id: 24,
    category: "表現",
    template: "S is friends with...",
    meaning: "〜と友達だ",
    questions: [
      {
        jp: "私たちのCEOは業界の主要なインフルエンサーと友人です。",
        en: "Our CEO is friends with key influencers in the industry.",
        hint: "友人関係"
      },
      {
        jp: "彼女はあの大手EC企業の創業者と友人です。",
        en: "She is friends with the founder of that major e-commerce company.",
        hint: "友人関係"
      },
      {
        jp: "彼はベンチャーキャピタルの投資家数名と友人です。",
        en: "He is friends with several venture capital investors.",
        hint: "友人関係"
      }
    ]
  },
  {
    id: 25,
    category: "時制",
    template: "...have passed since sv",
    meaning: "〜してから…が経った",
    questions: [
      {
        jp: "プラットフォームをローンチしてから3年が経った。",
        en: "Three years have passed since we launched the platform.",
        hint: "経過時間"
      },
      {
        jp: "最後の大規模アップデートをしてから6ヶ月が経った。",
        en: "Six months have passed since we did the last major update.",
        hint: "経過時間"
      },
      {
        jp: "あのセキュリティインシデントが発生してから2週間が経った。",
        en: "Two weeks have passed since that security incident occurred.",
        hint: "経過時間"
      }
    ]
  },
  {
    id: 26,
    category: "表現",
    template: "a...of mine/yours/his etc",
    meaning: "私の/あなたの〜のひとつ",
    questions: [
      {
        jp: "私の同僚のひとりがあなたのプラットフォームで出品しています。",
        en: "A colleague of mine is selling on your platform.",
        hint: "所有の表現"
      },
      {
        jp: "私のクライアントのひとりが御社のサービスに興味を持っています。",
        en: "A client of mine is interested in your service.",
        hint: "所有の表現"
      },
      {
        jp: "彼の提案のひとつが取締役会で承認されました。",
        en: "A proposal of his was approved at the board meeting.",
        hint: "所有の表現"
      }
    ]
  },
  {
    id: 27,
    category: "数量",
    template: "a number of...",
    meaning: "いくつかの〜",
    questions: [
      {
        jp: "いくつかの出品者からプラットフォーム手数料について苦情が来ています。",
        en: "A number of sellers have complained about the platform fees.",
        hint: "不特定の数量"
      },
      {
        jp: "いくつかの改善点がユーザーテストで特定されました。",
        en: "A number of improvements were identified during user testing.",
        hint: "不特定の数量"
      },
      {
        jp: "いくつかの新しいカテゴリーを来月追加する予定です。",
        en: "We plan to add a number of new categories next month.",
        hint: "不特定の数量"
      }
    ]
  },
  {
    id: 28,
    category: "数量",
    template: "the number of...",
    meaning: "〜の数",
    questions: [
      {
        jp: "アクティブな出品者の数は前年比で20%増加しました。",
        en: "The number of active sellers increased by 20% year over year.",
        hint: "特定の数量"
      },
      {
        jp: "カスタマーサポートへの問い合わせの数が減少しています。",
        en: "The number of inquiries to customer support is decreasing.",
        hint: "特定の数量"
      },
      {
        jp: "返品の数を来四半期までに半減させたいです。",
        en: "We want to cut the number of returns in half by next quarter.",
        hint: "特定の数量"
      }
    ]
  },
  {
    id: 29,
    category: "使役",
    template: "S makes O V",
    meaning: "SがOにVさせる（強制）",
    questions: [
      {
        jp: "マネージャーはチーム全員に日報を書かせている。",
        en: "The manager makes everyone on the team write a daily report.",
        hint: "強制の使役"
      },
      {
        jp: "その不具合のせいでユーザーは何度もログインし直させられる。",
        en: "The bug makes users log in again multiple times.",
        hint: "強制の使役"
      },
      {
        jp: "会社はすべての出品者に本人確認を完了させている。",
        en: "The company makes all sellers complete identity verification.",
        hint: "強制の使役"
      }
    ]
  },
  {
    id: 30,
    category: "使役",
    template: "S has O V",
    meaning: "SがOにVしてもらう",
    questions: [
      {
        jp: "デザインチームにモックアップを作ってもらいました。",
        en: "I had the design team create the mockups.",
        hint: "依頼の使役"
      },
      {
        jp: "外部の業者にセキュリティ監査をしてもらいましょう。",
        en: "Let's have an external vendor conduct the security audit.",
        hint: "依頼の使役"
      },
      {
        jp: "データチームにこのレポートを検証してもらいます。",
        en: "I'll have the data team verify this report.",
        hint: "依頼の使役"
      }
    ]
  },
  {
    id: 31,
    category: "使役",
    template: "S has O p.p.",
    meaning: "SがOを〜してもらう/される",
    questions: [
      {
        jp: "ウェブサイトのデザインをリニューアルしてもらいました。",
        en: "We had the website design renewed.",
        hint: "受動の使役"
      },
      {
        jp: "出品者はアカウントを一時停止された。",
        en: "The seller had their account suspended.",
        hint: "被害の使役"
      },
      {
        jp: "契約書を弁護士に確認してもらいました。",
        en: "We had the contract reviewed by a lawyer.",
        hint: "受動の使役"
      }
    ]
  },
  {
    id: 32,
    category: "使役",
    template: "S lets O V",
    meaning: "SがOにVさせてあげる（許可）",
    questions: [
      {
        jp: "プラットフォームは出品者が価格を自由に設定させてあげている。",
        en: "The platform lets sellers set their prices freely.",
        hint: "許可の使役"
      },
      {
        jp: "マネージャーはチームメンバーにリモートで働かせてあげている。",
        en: "The manager lets team members work remotely.",
        hint: "許可の使役"
      },
      {
        jp: "新しいポリシーは出品者がまとめ買い割引を提供させてあげている。",
        en: "The new policy lets sellers offer bundle discounts.",
        hint: "許可の使役"
      }
    ]
  },
  {
    id: 33,
    category: "知覚動詞",
    template: "S see/hear O V",
    meaning: "OがVするのを見る/聞く（完了）",
    questions: [
      {
        jp: "ユーザーがチェックアウト画面で離脱するのを確認しました。",
        en: "We saw users drop off at the checkout screen.",
        hint: "知覚動詞（完了）"
      },
      {
        jp: "CEOがそのプロジェクトを承認するのを聞きました。",
        en: "I heard the CEO approve that project.",
        hint: "知覚動詞（完了）"
      },
      {
        jp: "コンバージョン率がキャンペーン後に急上昇するのを見ました。",
        en: "We saw the conversion rate spike after the campaign.",
        hint: "知覚動詞（完了）"
      }
    ]
  },
  {
    id: 34,
    category: "知覚動詞",
    template: "S see/hear O -ing",
    meaning: "OがVしているのを見る/聞く（進行中）",
    questions: [
      {
        jp: "競合が新しい市場に進出しているのを見ています。",
        en: "We are seeing competitors expanding into new markets.",
        hint: "知覚動詞（進行中）"
      },
      {
        jp: "顧客がSNSでブランドについて話しているのを聞いています。",
        en: "We hear customers talking about the brand on social media.",
        hint: "知覚動詞（進行中）"
      },
      {
        jp: "ユーザーがアプリの新機能を積極的に使っているのを見ています。",
        en: "We are seeing users actively using the new feature of the app.",
        hint: "知覚動詞（進行中）"
      }
    ]
  },
  {
    id: 35,
    category: "不定詞",
    template: "It is...to~",
    meaning: "〜することは…だ（形式主語）",
    questions: [
      {
        jp: "すべてのレビューに返信することは重要です。",
        en: "It is important to reply to all reviews.",
        hint: "形式主語 It"
      },
      {
        jp: "プロダクトロードマップを定期的に見直すことは不可欠です。",
        en: "It is essential to review the product roadmap regularly.",
        hint: "形式主語 It"
      },
      {
        jp: "データに基づいて意思決定をすることは賢明です。",
        en: "It is wise to make decisions based on data.",
        hint: "形式主語 It"
      }
    ]
  },
  {
    id: 36,
    category: "不定詞",
    template: "SV...to~",
    meaning: "〜して…だ（感情の副詞的用法）",
    questions: [
      {
        jp: "GMVが目標を達成して嬉しいです。",
        en: "I'm glad to see the GMV hit the target.",
        hint: "感情の原因（不定詞）"
      },
      {
        jp: "チームがこの提案を採用して安心しました。",
        en: "I was relieved to hear the team adopt this proposal.",
        hint: "感情の原因（不定詞）"
      },
      {
        jp: "あなたとこのプロジェクトで一緒に働けて光栄です。",
        en: "I'm honored to work with you on this project.",
        hint: "感情の原因（不定詞）"
      }
    ]
  },
  {
    id: 37,
    category: "不定詞",
    template: "S is too...to~",
    meaning: "〜すぎて…できない",
    questions: [
      {
        jp: "この問題は複雑すぎて一人では解決できない。",
        en: "This problem is too complex to solve alone.",
        hint: "過度で不可能"
      },
      {
        jp: "あのバグは小さすぎてユーザーは気づけない。",
        en: "That bug is too small for users to notice.",
        hint: "過度で不可能"
      },
      {
        jp: "現在のシステムは古すぎて新しいAPIと統合できない。",
        en: "The current system is too old to integrate with the new API.",
        hint: "過度で不可能"
      }
    ]
  },
  {
    id: 38,
    category: "不定詞",
    template: "S is...enough to~",
    meaning: "十分…なので〜できる",
    questions: [
      {
        jp: "このプラットフォームは十分安定しているので大規模セールに耐えられる。",
        en: "This platform is stable enough to handle a large-scale sale.",
        hint: "十分な程度"
      },
      {
        jp: "そのデータは十分説得力があるので経営陣を納得させられる。",
        en: "The data is compelling enough to convince the management.",
        hint: "十分な程度"
      },
      {
        jp: "彼女は十分経験豊富なので新しいチームをリードできる。",
        en: "She is experienced enough to lead the new team.",
        hint: "十分な程度"
      }
    ]
  },
  {
    id: 39,
    category: "不定詞",
    template: "It is...for person to~",
    meaning: "人にとって〜することは…だ",
    questions: [
      {
        jp: "新規出品者にとって最初の販売を達成することは難しい。",
        en: "It is difficult for new sellers to make their first sale.",
        hint: "人にとっての難易度"
      },
      {
        jp: "カスタマーサポートチームにとってすべてのチケットに24時間以内に対応することは大変です。",
        en: "It is challenging for the customer support team to respond to all tickets within 24 hours.",
        hint: "人にとっての難易度"
      },
      {
        jp: "エンジニアにとってレガシーコードを理解することは時間がかかります。",
        en: "It is time-consuming for engineers to understand the legacy code.",
        hint: "人にとっての難易度"
      }
    ]
  },
  {
    id: 40,
    category: "不定詞",
    template: "It is...of person to~",
    meaning: "〜するとは人は…だ（性格判断）",
    questions: [
      {
        jp: "競合のデータを共有してくれるとは、彼は寛大ですね。",
        en: "It is generous of him to share the competitor data.",
        hint: "人の性格への評価"
      },
      {
        jp: "リスクを指摘してくれるとは、あなたは賢明ですね。",
        en: "It is wise of you to point out the risks.",
        hint: "人の性格への評価"
      },
      {
        jp: "テストなしでデプロイするとは、彼は無謀ですね。",
        en: "It is reckless of him to deploy without testing.",
        hint: "人の性格への評価"
      }
    ]
  },
  {
    id: 41,
    category: "不定詞",
    template: "In order to~, SV",
    meaning: "〜するために",
    questions: [
      {
        jp: "リテンション率を上げるために、ロイヤリティプログラムを導入しました。",
        en: "In order to increase the retention rate, we introduced a loyalty program.",
        hint: "目的"
      },
      {
        jp: "市場シェアを拡大するために、新しいカテゴリーを追加する必要があります。",
        en: "In order to expand our market share, we need to add new categories.",
        hint: "目的"
      },
      {
        jp: "出品者のオンボーディングを改善するために、チュートリアル動画を作成しました。",
        en: "In order to improve seller onboarding, we created tutorial videos.",
        hint: "目的"
      }
    ]
  },
  {
    id: 42,
    category: "不定詞",
    template: "All S has to do is to~",
    meaning: "Sは〜しさえすればよい",
    questions: [
      {
        jp: "出品者は商品写真をアップロードしさえすればよい。",
        en: "All the seller has to do is to upload the product photos.",
        hint: "唯一の必要な行動"
      },
      {
        jp: "承認を得るにはマネージャーに申請書を提出しさえすればよい。",
        en: "All you have to do is to submit the application to the manager.",
        hint: "唯一の必要な行動"
      },
      {
        jp: "アカウントを有効にするには本人確認を完了しさえすればよい。",
        en: "All you have to do is to complete the identity verification to activate your account.",
        hint: "唯一の必要な行動"
      }
    ]
  },
  {
    id: 43,
    category: "不定詞",
    template: "S has no choice but to~",
    meaning: "〜するしかない",
    questions: [
      {
        jp: "サーバーの負荷を考えると、メンテナンス時間を延長するしかない。",
        en: "Given the server load, we have no choice but to extend the maintenance window.",
        hint: "やむを得ない行動"
      },
      {
        jp: "規約に違反した出品者のアカウントを停止するしかない。",
        en: "We have no choice but to suspend the account of the seller who violated the terms.",
        hint: "やむを得ない行動"
      },
      {
        jp: "予算が削減された以上、プロジェクトの範囲を縮小するしかない。",
        en: "Since the budget has been cut, we have no choice but to reduce the project scope.",
        hint: "やむを得ない行動"
      }
    ]
  },
  {
    id: 44,
    category: "不定詞",
    template: "S has nothing to do with...",
    meaning: "〜とは無関係だ",
    questions: [
      {
        jp: "今回のシステム障害はアップデートとは無関係です。",
        en: "This system outage has nothing to do with the update.",
        hint: "無関係を示す"
      },
      {
        jp: "売上の低下はマーケティングチームとは無関係です。",
        en: "The decline in sales has nothing to do with the marketing team.",
        hint: "無関係を示す"
      },
      {
        jp: "その不具合は今朝のデプロイとは無関係です。",
        en: "That bug has nothing to do with this morning's deployment.",
        hint: "無関係を示す"
      }
    ]
  },
  {
    id: 45,
    category: "不定詞",
    template: "S is likely to~",
    meaning: "〜しそうだ",
    questions: [
      {
        jp: "この新機能はユーザーエンゲージメントを向上させそうだ。",
        en: "This new feature is likely to improve user engagement.",
        hint: "可能性が高い"
      },
      {
        jp: "来月のセールはGMVの新記録を達成しそうだ。",
        en: "Next month's sale is likely to set a new GMV record.",
        hint: "可能性が高い"
      },
      {
        jp: "配送遅延は顧客の不満を引き起こしそうだ。",
        en: "Shipping delays are likely to cause customer dissatisfaction.",
        hint: "可能性が高い"
      }
    ]
  },
  {
    id: 46,
    category: "動名詞",
    template: "S is interested in -ing",
    meaning: "〜することに興味がある",
    questions: [
      {
        jp: "私たちはAIを活用した商品レコメンデーションの導入に興味があります。",
        en: "We are interested in implementing AI-powered product recommendations.",
        hint: "興味・関心"
      },
      {
        jp: "何人かの出品者がライブコマース機能の利用に興味を持っています。",
        en: "Several sellers are interested in using the live commerce feature.",
        hint: "興味・関心"
      },
      {
        jp: "投資家は当社の東南アジアへの展開に興味があります。",
        en: "The investors are interested in our expansion into Southeast Asia.",
        hint: "興味・関心"
      }
    ]
  },
  {
    id: 47,
    category: "動名詞",
    template: "S is afraid of -ing",
    meaning: "〜することを恐れている",
    questions: [
      {
        jp: "一部の出品者は手数料が上がることを恐れています。",
        en: "Some sellers are afraid of the commission fee going up.",
        hint: "恐れ"
      },
      {
        jp: "チームはリファクタリング中に既存の機能を壊すことを恐れています。",
        en: "The team is afraid of breaking existing features during refactoring.",
        hint: "恐れ"
      },
      {
        jp: "経営陣は市場シェアを失うことを恐れています。",
        en: "The management is afraid of losing market share.",
        hint: "恐れ"
      }
    ]
  },
  {
    id: 48,
    category: "動名詞",
    template: "S is good at -ing",
    meaning: "〜するのが得意だ",
    questions: [
      {
        jp: "彼女はデータを分析して実用的なインサイトを見つけるのが得意です。",
        en: "She is good at analyzing data and finding actionable insights.",
        hint: "得意なこと"
      },
      {
        jp: "このチームは短い締め切りでプロダクトを出すのが得意です。",
        en: "This team is good at delivering products under tight deadlines.",
        hint: "得意なこと"
      },
      {
        jp: "彼はステークホルダーとの関係構築が得意です。",
        en: "He is good at building relationships with stakeholders.",
        hint: "得意なこと"
      }
    ]
  },
  {
    id: 49,
    category: "動名詞",
    template: "S is used to -ing",
    meaning: "〜することに慣れている",
    questions: [
      {
        jp: "私たちのチームはアジャイル開発で働くことに慣れています。",
        en: "Our team is used to working in agile development.",
        hint: "慣れている状態"
      },
      {
        jp: "カスタマーサポートチームは怒っている顧客に対応することに慣れています。",
        en: "The customer support team is used to dealing with angry customers.",
        hint: "慣れている状態"
      },
      {
        jp: "彼女は毎週経営陣にプレゼンすることに慣れています。",
        en: "She is used to presenting to the management every week.",
        hint: "慣れている状態"
      }
    ]
  },
  {
    id: 50,
    category: "動名詞",
    template: "S get used to -ing",
    meaning: "〜することに慣れる",
    questions: [
      {
        jp: "新しい出品者はプラットフォームの操作に慣れるのに時間がかかります。",
        en: "New sellers take time to get used to navigating the platform.",
        hint: "慣れるプロセス"
      },
      {
        jp: "チームはリモートワークに徐々に慣れてきました。",
        en: "The team has gradually gotten used to working remotely.",
        hint: "慣れるプロセス"
      },
      {
        jp: "英語でのミーティングに慣れる必要があります。",
        en: "We need to get used to having meetings in English.",
        hint: "慣れるプロセス"
      }
    ]
  }
];
