const MONOLOGUE_TOPICS = [
  {
    id: 1,
    category: "Self-Introduction & Personal Life",
    categoryJp: "自己紹介・パーソナルライフ",
    topic: "Talk about your personality.",
    topicJp: "自分の性格について話してみよう。",
    exampleEn: "I would describe myself as a fairly calm and thoughtful person. I tend to listen more than I talk in group settings, but I'm quite passionate when it comes to topics I care about. People often say I'm reliable and organized, which I think is true because I really enjoy having a plan and sticking to it.",
    exampleJp: "私はどちらかというと穏やかで思慮深い人間だと思います。グループでは話すより聞くことが多いですが、関心のある話題になるとかなり熱くなります。よく「頼りになる」「きちんとしている」と言われますが、計画を立ててそれを実行するのが好きなので、確かにその通りだと思います。"
  },
  {
    id: 2,
    category: "Self-Introduction & Personal Life",
    categoryJp: "自己紹介・パーソナルライフ",
    topic: "Describe your daily routine.",
    topicJp: "1日のルーティンについて話してみよう。",
    exampleEn: "I usually wake up around six thirty and start my day with a cup of coffee and some light reading. After that, I head to work and spend most of the morning focused on my main tasks. In the evening, I like to unwind by cooking dinner and watching something relaxing before going to bed around eleven.",
    exampleJp: "たいてい6時半頃に起きて、コーヒーを飲みながら軽く読書をして1日を始めます。その後仕事に向かい、午前中はメインの業務に集中します。夜は夕食を作ったり、リラックスできるものを見たりして過ごし、11時頃に就寝します。"
  },
  {
    id: 3,
    category: "Self-Introduction & Personal Life",
    categoryJp: "自己紹介・パーソナルライフ",
    topic: "How you spend weekends.",
    topicJp: "週末の過ごし方について話してみよう。",
    exampleEn: "My weekends are a mix of relaxation and catching up on personal projects. On Saturday mornings, I often go for a run or visit a local cafe to read. Sundays are usually reserved for errands and spending time with friends or family. I find that having a balance between being active and resting helps me recharge for the week ahead.",
    exampleJp: "週末はリラックスと個人的なプロジェクトの時間をバランスよく過ごしています。土曜の朝はランニングに行ったり、近所のカフェで読書をしたりします。日曜は用事を済ませたり、友人や家族と過ごすことが多いです。アクティブに動くことと休むことのバランスが、翌週への充電になると感じています。"
  },
  {
    id: 4,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "A book or movie you recently enjoyed.",
    topicJp: "最近楽しんだ本や映画について話してみよう。",
    exampleEn: "I recently watched a documentary about the history of artificial intelligence, and it really opened my eyes. It covered everything from early computing to modern machine learning in a way that was easy to follow. What I liked most was how it explored the ethical questions surrounding AI development. It made me think deeply about the future of technology and its impact on society.",
    exampleJp: "最近、人工知能の歴史に関するドキュメンタリーを観て、とても目が開かれました。初期のコンピューティングから現代の機械学習まで、分かりやすく網羅されていました。一番良かったのは、AI開発を取り巻く倫理的な問題にも踏み込んでいた点です。テクノロジーの未来と社会への影響について深く考えさせられました。"
  },
  {
    id: 5,
    category: "Childhood & Memories",
    categoryJp: "子ども時代・思い出",
    topic: "A memorable childhood experience.",
    topicJp: "幼少期の思い出について話してみよう。",
    exampleEn: "One of my most vivid childhood memories is going camping with my family near a lake every summer. I remember waking up early to go fishing with my father while the mist was still hanging over the water. Those trips taught me to appreciate nature and the importance of spending quality time with loved ones. Even now, the smell of a campfire instantly takes me back to those days.",
    exampleJp: "子ども時代で最も鮮明な思い出の一つは、毎年夏に家族と湖の近くでキャンプに行ったことです。霧がまだ水面に漂っている早朝に、父と釣りに出かけたのを覚えています。あの旅のおかげで、自然の素晴らしさと大切な人との時間の大切さを学びました。今でもキャンプファイヤーの匂いを嗅ぐと、あの頃に一瞬で戻ります。"
  },
  {
    id: 6,
    category: "Family & Relationships",
    categoryJp: "家族・人間関係",
    topic: "A family tradition or event.",
    topicJp: "家族の伝統や行事について話してみよう。",
    exampleEn: "Every New Year, my family gathers at my grandparents' house for a big dinner. We prepare traditional dishes together, and after the meal, we share our goals and wishes for the coming year. It's a tradition that has brought us closer over the years. I look forward to it every year because it reminds me how important family connections are.",
    exampleJp: "毎年お正月には、祖父母の家に家族が集まって盛大な食事をします。みんなで伝統料理を作り、食事の後は新年の目標や願いを共有します。この伝統のおかげで、年々家族の絆が深まっています。家族のつながりの大切さを思い出させてくれるので、毎年楽しみにしています。"
  },
  {
    id: 7,
    category: "Family & Relationships",
    categoryJp: "家族・人間関係",
    topic: "Qualities you look for in a friend.",
    topicJp: "友達に求める資質について話してみよう。",
    exampleEn: "The most important quality I look for in a friend is honesty. I really value people who are straightforward and genuine, even when the truth is hard to hear. I also appreciate friends who are supportive and can laugh with me during both good and tough times. Ultimately, I believe trust and mutual respect form the foundation of any strong friendship.",
    exampleJp: "友達に求める最も大切な資質は正直さです。真実が聞きにくいときでも、率直で誠実な人をとても大切にしています。また、良いときも辛いときも一緒に笑い合える、支え合える友人を大事にしています。結局のところ、信頼と相互尊重がどんな強い友情の基盤にもなると信じています。"
  },
  {
    id: 8,
    category: "Family & Relationships",
    categoryJp: "家族・人間関係",
    topic: "A role model in your life.",
    topicJp: "ロールモデルについて話してみよう。",
    exampleEn: "My biggest role model is my mother, who raised three children while building her own small business. She taught me that hard work and persistence can overcome almost any obstacle. What inspires me most is her ability to stay positive and kind even in difficult situations. Her example has shaped the way I approach challenges in my own life.",
    exampleJp: "私の最大のロールモデルは母です。母は3人の子どもを育てながら、自分の小さなビジネスを築きました。努力と粘り強さがあればほとんどの困難を乗り越えられると教えてくれました。最も尊敬しているのは、困難な状況でも前向きで優しくいられるところです。母の姿勢が、私自身の課題への向き合い方を形作ってくれました。"
  },
  {
    id: 9,
    category: "Family & Relationships",
    categoryJp: "家族・人間関係",
    topic: "Maintaining long-distance relationships.",
    topicJp: "遠距離の人間関係について話してみよう。",
    exampleEn: "Maintaining long-distance relationships can be challenging, but I've found that regular communication is key. I try to schedule video calls with close friends who live abroad at least once a month. Technology has made it so much easier to stay connected, whether through messaging apps or social media. I think the effort you put into keeping in touch really shows how much you value the relationship.",
    exampleJp: "遠距離の人間関係を維持するのは大変ですが、定期的なコミュニケーションが鍵だと感じています。海外に住む親しい友人とは、少なくとも月に一度はビデオ通話をするようにしています。メッセージアプリやSNSのおかげで、つながりを保つのがずっと簡単になりました。連絡を取り合う努力こそが、その関係をどれだけ大切にしているかを示すものだと思います。"
  },
  {
    id: 10,
    category: "Family & Relationships",
    categoryJp: "家族・人間関係",
    topic: "Handling conflicts with friends or family.",
    topicJp: "友人や家族との衝突の解決方法について話してみよう。",
    exampleEn: "When I have a conflict with someone close to me, I try to take a step back before reacting emotionally. I find that giving myself some time to cool down helps me see the situation more clearly. Then I try to have an honest conversation where both sides can share their feelings. I believe most conflicts can be resolved through open communication and a willingness to understand the other person's perspective.",
    exampleJp: "親しい人と衝突したときは、感情的に反応する前に一歩引くようにしています。少し冷静になる時間を取ることで、状況をより明確に見られるようになると感じています。その後、お互いの気持ちを共有できる率直な会話をするようにしています。ほとんどの衝突は、オープンなコミュニケーションと相手の視点を理解しようとする姿勢で解決できると信じています。"
  },
  {
    id: 11,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "Your favorite hobby and why.",
    topicJp: "趣味とその理由について話してみよう。",
    exampleEn: "My favorite hobby is reading, especially non-fiction books about business and psychology. I find it fascinating to learn how people think and make decisions. Reading also helps me relax after a long day at work. I usually try to finish at least two books a month, and I always keep a list of recommendations from friends and online reviews.",
    exampleJp: "私の一番の趣味は読書で、特にビジネスや心理学のノンフィクションが好きです。人がどう考え、どう意思決定するかを学ぶのがとても面白いです。読書は仕事で疲れた後のリラックスにもなります。月に少なくとも2冊は読むようにしていて、友人やオンラインレビューからのおすすめリストを常に持っています。"
  },
  {
    id: 12,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "A skill you want to learn.",
    topicJp: "習得したい技術について話してみよう。",
    exampleEn: "I've always wanted to learn how to play the piano. I think it's such a beautiful and versatile instrument that can express a wide range of emotions. I've watched many tutorials online but haven't committed to regular practice yet. My goal is to start taking lessons this year and eventually be able to play my favorite songs.",
    exampleJp: "ずっとピアノを弾けるようになりたいと思っていました。幅広い感情を表現できる、とても美しく多才な楽器だと思います。オンラインのチュートリアルはたくさん見ましたが、まだ定期的な練習には取り組めていません。今年中にレッスンを始めて、いつか好きな曲を弾けるようになるのが目標です。"
  },
  {
    id: 13,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "The role of music in your life.",
    topicJp: "音楽の役割について話してみよう。",
    exampleEn: "Music plays a huge role in my daily life. I listen to it while commuting, working out, and even while cooking. Different genres match different moods — I prefer jazz when I'm relaxing and upbeat pop when I need energy. I think music has the unique power to instantly change how you feel and connect you to memories from the past.",
    exampleJp: "音楽は日常生活で大きな役割を果たしています。通勤中、運動中、料理中にも聴いています。気分によってジャンルを変えていて、リラックスしたいときはジャズ、エネルギーが欲しいときは明るいポップを好みます。音楽には気分を一瞬で変え、過去の記憶とつなげてくれる独特の力があると思います。"
  },
  {
    id: 14,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "A sport you enjoy.",
    topicJp: "好きなスポーツについて話してみよう。",
    exampleEn: "I really enjoy playing tennis, which I picked up a few years ago. It's a great way to stay fit while having fun and being competitive at the same time. I usually play with friends on weekends at a local court. What I love most about tennis is that it requires both physical agility and mental strategy, so it never gets boring.",
    exampleJp: "数年前に始めたテニスがとても好きです。楽しみながら競争心も満たせる、素晴らしい運動方法です。週末に友人と近くのコートでプレーすることが多いです。テニスの一番好きなところは、身体的な敏捷性と頭脳的な戦略の両方が必要なので、飽きることがない点です。"
  },
  {
    id: 15,
    category: "Hobbies & Interests",
    categoryJp: "趣味・興味",
    topic: "Indoor vs outdoor activities.",
    topicJp: "インドア vs アウトドアについて話してみよう。",
    exampleEn: "I enjoy both indoor and outdoor activities, but if I had to choose, I'd lean toward outdoor ones. There's something refreshing about being in nature, whether it's hiking in the mountains or just taking a walk in a park. That said, on rainy days, I'm perfectly happy staying in and playing board games or watching movies. I think having a mix of both keeps life interesting and balanced.",
    exampleJp: "インドアもアウトドアも好きですが、どちらか選ぶならアウトドア寄りです。山でのハイキングでも公園の散歩でも、自然の中にいるとリフレッシュできるものがあります。とはいえ、雨の日は家でボードゲームをしたり映画を観たりするのも全然楽しいです。両方をバランスよく楽しむことが、生活を豊かにしてくれると思います。"
  },
  {
    id: 16,
    category: "Travel & Places",
    categoryJp: "旅行・場所",
    topic: "A city or country you want to visit.",
    topicJp: "行きたい国や都市について話してみよう。",
    exampleEn: "I've always dreamed of visiting Portugal, especially Lisbon. I've heard the city has a wonderful mix of historic architecture and vibrant modern culture. The food scene also sounds incredible, with fresh seafood and pastries like pasteis de nata. I think exploring the narrow streets and watching the sunset from a hilltop would be an unforgettable experience.",
    exampleJp: "ずっとポルトガル、特にリスボンを訪れるのが夢です。歴史的な建築と活気ある現代文化が素晴らしく融合していると聞いています。新鮮なシーフードやパステル・デ・ナタのようなお菓子など、食文化も素晴らしそうです。細い路地を散策して、丘の上から夕日を眺めるのは忘れられない体験になるだろうと思います。"
  },
  {
    id: 17,
    category: "Travel & Places",
    categoryJp: "旅行・場所",
    topic: "A memorable trip.",
    topicJp: "印象的な旅行について話してみよう。",
    exampleEn: "One of my most memorable trips was visiting Kyoto during autumn. The temples surrounded by red and golden leaves were absolutely breathtaking. I spent three days walking through different neighborhoods, trying local street food, and visiting shrines. That trip reminded me how important it is to slow down and appreciate the beauty around us.",
    exampleJp: "最も印象に残っている旅行の一つは、秋の京都を訪れたことです。紅葉に囲まれたお寺は本当に息をのむ美しさでした。3日間かけて様々な地域を歩き、地元の屋台グルメを楽しみ、神社を巡りました。あの旅は、立ち止まって周りの美しさに感謝することの大切さを思い出させてくれました。"
  },
  {
    id: 18,
    category: "Travel & Places",
    categoryJp: "旅行・場所",
    topic: "What makes a place feel like home.",
    topicJp: "家のように感じる場所について話してみよう。",
    exampleEn: "For me, what makes a place feel like home isn't about the physical space itself but the people in it. If I'm surrounded by people I care about, any place can feel comfortable and welcoming. That said, I also value having a quiet corner where I can read or think in peace. A sense of familiarity and safety is really what turns a place into a home.",
    exampleJp: "私にとって、家のように感じる場所は物理的な空間そのものではなく、そこにいる人々によるものです。大切な人に囲まれていれば、どんな場所でも居心地よく感じます。とはいえ、静かに読書や考え事ができるスペースも大事にしています。親しみと安心感こそが、場所を「家」に変えるものだと思います。"
  },
  {
    id: 19,
    category: "Travel & Places",
    categoryJp: "旅行・場所",
    topic: "A tourist attraction you recommend.",
    topicJp: "おすすめの観光スポットについて話してみよう。",
    exampleEn: "I would highly recommend visiting the Fushimi Inari Shrine in Kyoto. The thousands of bright orange torii gates create a stunning pathway up the mountain. It's best to go early in the morning to avoid the crowds and enjoy the peaceful atmosphere. The hike takes about two hours, and the view from the top is absolutely worth the effort.",
    exampleJp: "京都の伏見稲荷大社をぜひおすすめしたいです。何千もの鮮やかなオレンジ色の鳥居が山の上まで美しい道を作っています。混雑を避けて静かな雰囲気を楽しむには早朝に行くのがベストです。登山は約2時間かかりますが、山頂からの景色はその努力に十分値します。"
  },
  {
    id: 20,
    category: "Travel & Places",
    categoryJp: "旅行・場所",
    topic: "Big city vs small town.",
    topicJp: "大都市 vs 小さな町について話してみよう。",
    exampleEn: "I currently live in a big city, and I appreciate the convenience and variety it offers. There are countless restaurants, cultural events, and career opportunities right at my doorstep. However, I sometimes miss the quietness and close community feeling of a small town. I think the ideal situation would be living in a city but having easy access to the countryside for weekend getaways.",
    exampleJp: "現在は大都市に住んでいて、その便利さと多様性を気に入っています。数えきれないほどのレストランや文化イベント、キャリアの機会がすぐそばにあります。ただ、小さな町の静けさや親密なコミュニティ感が恋しくなることもあります。理想は都市に住みながら、週末には気軽に田舎へ行けることだと思います。"
  },
  {
    id: 21,
    category: "Work & Career",
    categoryJp: "仕事・キャリア",
    topic: "Your current or dream job.",
    topicJp: "現在の仕事や理想の仕事について話してみよう。",
    exampleEn: "I currently work in the tech industry, and I'm passionate about building products that solve real problems for people. My dream job would involve leading a team that creates innovative solutions at the intersection of technology and everyday life. I believe the most fulfilling careers are those where you can see the direct impact of your work. That sense of purpose is what drives me every day.",
    exampleJp: "現在テック業界で働いており、人々の本当の課題を解決するプロダクト作りに情熱を持っています。理想の仕事は、テクノロジーと日常生活の交差点で革新的なソリューションを生み出すチームを率いることです。最も充実したキャリアとは、自分の仕事の直接的な影響を実感できるものだと信じています。その使命感が毎日の原動力になっています。"
  },
  {
    id: 22,
    category: "Work & Career",
    categoryJp: "仕事・キャリア",
    topic: "What motivates you.",
    topicJp: "モチベーションについて話してみよう。",
    exampleEn: "What motivates me most is the desire to grow and improve every day. I set small, achievable goals that help me feel a sense of progress. I'm also motivated by working with talented people who challenge me to think differently. At the end of the day, knowing that my work contributes to something meaningful keeps me going even during tough times.",
    exampleJp: "私を最も動かすのは、毎日成長し改善したいという気持ちです。達成可能な小さな目標を設定して、進歩を実感するようにしています。また、自分の考え方に刺激を与えてくれる優秀な人たちと働くこともモチベーションになります。結局のところ、自分の仕事が何か意義あるものに貢献していると知ることが、辛いときでも前に進む力になっています。"
  },
  {
    id: 23,
    category: "Work & Career",
    categoryJp: "仕事・キャリア",
    topic: "Your ideal work environment.",
    topicJp: "理想の職場環境について話してみよう。",
    exampleEn: "My ideal work environment is one that values both collaboration and independent focus time. I perform best when I have the flexibility to work remotely some days and come into the office for team meetings. Open communication and a culture where people feel safe to share ideas are also essential. I think a healthy work environment is one where trust and autonomy are given to employees.",
    exampleJp: "私にとって理想の職場環境は、協働と個人の集中時間の両方を大切にする場所です。リモートワークとオフィスでのチームミーティングを柔軟に使い分けられると最もパフォーマンスが上がります。オープンなコミュニケーションと、安心してアイデアを共有できる文化も不可欠です。信頼と自律性が社員に与えられる環境こそ、健全な職場だと思います。"
  },
  {
    id: 24,
    category: "Work & Career",
    categoryJp: "仕事・キャリア",
    topic: "A challenging situation at work.",
    topicJp: "仕事での困難について話してみよう。",
    exampleEn: "Last year, I faced a situation where a major project deadline was moved up by two weeks unexpectedly. I had to quickly reprioritize tasks and coordinate with multiple teams to make it work. It was stressful, but I learned the importance of clear communication and staying calm under pressure. In the end, we delivered on time, and it became one of my proudest professional achievements.",
    exampleJp: "昨年、大きなプロジェクトの締め切りが突然2週間前倒しになるという状況に直面しました。すぐにタスクの優先順位を見直し、複数のチームと連携する必要がありました。ストレスはありましたが、明確なコミュニケーションとプレッシャー下での冷静さの大切さを学びました。最終的には期限通りに納品でき、最も誇りに思える仕事上の成果の一つになりました。"
  },
  {
    id: 25,
    category: "Work & Career",
    categoryJp: "仕事・キャリア",
    topic: "Work-life balance.",
    topicJp: "ワークライフバランスについて話してみよう。",
    exampleEn: "I believe work-life balance is essential for long-term productivity and happiness. I try to set clear boundaries, such as not checking work emails after a certain hour. Having hobbies and spending time with family helps me recharge and return to work with fresh energy. I think companies that respect their employees' personal time ultimately get better results.",
    exampleJp: "ワークライフバランスは、長期的な生産性と幸福のために不可欠だと考えています。一定の時間以降は仕事のメールを見ないなど、明確な境界線を設けるようにしています。趣味を楽しんだり家族と過ごしたりすることで充電でき、新たなエネルギーを持って仕事に戻れます。社員のプライベートな時間を尊重する会社は、最終的により良い成果を出せると思います。"
  },
  {
    id: 26,
    category: "Education & Lifelong Learning",
    categoryJp: "教育・生涯学習",
    topic: "A memorable teacher or mentor.",
    topicJp: "印象的な先生やメンターについて話してみよう。",
    exampleEn: "My high school English teacher was one of the most influential people in my life. She didn't just teach grammar and vocabulary — she encouraged us to think critically and express our own opinions. Her classes were always interactive and full of lively discussions. She showed me that learning a language is not just about passing exams but about opening doors to new ways of thinking.",
    exampleJp: "高校の英語の先生は、人生で最も影響を受けた人の一人です。文法や語彙を教えるだけでなく、批判的に考え、自分の意見を表現することを励ましてくれました。授業はいつもインタラクティブで活発な議論に満ちていました。言語を学ぶことは試験に受かるためだけでなく、新しい考え方への扉を開くことだと教えてくれました。"
  },
  {
    id: 27,
    category: "Education & Lifelong Learning",
    categoryJp: "教育・生涯学習",
    topic: "Benefits and drawbacks of online learning.",
    topicJp: "オンライン学習の長所と短所について話してみよう。",
    exampleEn: "Online learning offers incredible flexibility, allowing people to study at their own pace from anywhere in the world. It's also often more affordable than traditional education. However, I think it can be difficult to stay motivated without the structure of a physical classroom. The lack of face-to-face interaction can also make it harder to build relationships with classmates and instructors.",
    exampleJp: "オンライン学習は素晴らしい柔軟性を提供し、世界中どこからでも自分のペースで学べます。従来の教育より費用が安いことも多いです。ただし、物理的な教室の構造がないとモチベーションを維持するのが難しいと思います。対面での交流が少ないため、クラスメートや講師との関係を築きにくい面もあります。"
  },
  {
    id: 28,
    category: "Education & Lifelong Learning",
    categoryJp: "教育・生涯学習",
    topic: "A challenging course or subject.",
    topicJp: "難しかった授業や科目について話してみよう。",
    exampleEn: "The most challenging course I ever took was statistics in university. The concepts were abstract, and I struggled with the mathematical formulas at first. However, I formed a study group with classmates, and we helped each other work through difficult problems. By the end of the semester, I not only passed but actually developed a genuine interest in data analysis.",
    exampleJp: "大学で最も難しかった授業は統計学です。概念が抽象的で、最初は数学的な公式に苦労しました。しかし、クラスメートと勉強グループを作り、難しい問題を一緒に解決しました。学期の終わりには合格しただけでなく、データ分析に対する本当の興味が芽生えていました。"
  },
  {
    id: 29,
    category: "Education & Lifelong Learning",
    categoryJp: "教育・生涯学習",
    topic: "Value of higher education.",
    topicJp: "高等教育の価値について話してみよう。",
    exampleEn: "I think higher education provides valuable opportunities for personal and intellectual growth beyond just career preparation. University exposes you to diverse perspectives and teaches you how to think critically about complex issues. That said, it's not the only path to success, and vocational training or self-directed learning can be equally valuable depending on your goals. The key is to never stop learning, regardless of the format.",
    exampleJp: "高等教育は、キャリア準備だけでなく、個人的・知的成長のための貴重な機会を提供してくれると思います。大学では多様な視点に触れ、複雑な問題について批判的に考える方法を学びます。ただし、成功への唯一の道ではなく、目標によっては職業訓練や独学も同等に価値があります。大切なのは、形式に関わらず学び続けることだと思います。"
  },
  {
    id: 30,
    category: "Education & Lifelong Learning",
    categoryJp: "教育・生涯学習",
    topic: "A learning goal for next year.",
    topicJp: "来年の学習目標について話してみよう。",
    exampleEn: "My main learning goal for next year is to significantly improve my English speaking skills. I plan to practice daily through shadowing exercises and conversation practice with native speakers. I also want to take a certification exam to measure my progress objectively. I believe setting a concrete goal with a deadline helps me stay focused and accountable.",
    exampleJp: "来年の主な学習目標は、英語のスピーキング力を大幅に向上させることです。シャドーイングやネイティブスピーカーとの会話練習を毎日行う予定です。また、進捗を客観的に測るために資格試験を受けたいと思っています。期限のある具体的な目標を設定することで、集中力と責任感を保てると信じています。"
  },
  {
    id: 31,
    category: "Health & Lifestyle",
    categoryJp: "健康・ライフスタイル",
    topic: "Your approach to staying healthy.",
    topicJp: "健康維持の工夫について話してみよう。",
    exampleEn: "I try to maintain a balanced approach to health by focusing on three main areas: exercise, diet, and sleep. I work out about three times a week, alternating between running and strength training. I also make an effort to eat more vegetables and home-cooked meals rather than relying on convenience food. Getting seven to eight hours of sleep is something I prioritize because it affects everything else in my life.",
    exampleJp: "運動・食事・睡眠の3つの柱を中心に、バランスの取れた健康管理を心がけています。週に約3回、ランニングと筋トレを交互に行っています。また、コンビニ食に頼らず、野菜を多く摂り自炊するよう努力しています。7〜8時間の睡眠を優先しています。なぜなら、睡眠は生活の他の全てに影響するからです。"
  },
  {
    id: 32,
    category: "Health & Lifestyle",
    categoryJp: "健康・ライフスタイル",
    topic: "Mental health awareness.",
    topicJp: "メンタルヘルスの重要性について話してみよう。",
    exampleEn: "I think mental health awareness has improved a lot in recent years, but there's still a long way to go. Many people still hesitate to talk about their struggles due to social stigma. I believe workplaces and schools should provide more resources and create safe spaces for open discussions. Taking care of your mind is just as important as taking care of your body.",
    exampleJp: "メンタルヘルスへの意識は近年かなり改善されたと思いますが、まだまだ道のりは長いです。社会的な偏見のため、自分の悩みを話すことをためらう人はまだ多いです。職場や学校がもっとリソースを提供し、オープンな対話ができる安全な場を作るべきだと思います。心のケアは体のケアと同じくらい重要です。"
  },
  {
    id: 33,
    category: "Health & Lifestyle",
    categoryJp: "健康・ライフスタイル",
    topic: "Technology and health/fitness.",
    topicJp: "テクノロジーと健康について話してみよう。",
    exampleEn: "Technology has transformed the way we approach health and fitness. Smartwatches and fitness apps allow us to track our steps, heart rate, and sleep patterns easily. I personally use a fitness app to log my workouts and monitor my progress over time. While these tools are incredibly helpful, I think it's important not to become too obsessed with the numbers and to listen to your body as well.",
    exampleJp: "テクノロジーは健康やフィットネスへのアプローチを一変させました。スマートウォッチやフィットネスアプリで、歩数・心拍数・睡眠パターンを簡単に記録できます。私もフィットネスアプリでワークアウトの記録や進捗の管理をしています。これらのツールは非常に便利ですが、数字に執着しすぎず、自分の体の声にも耳を傾けることが大切だと思います。"
  },
  {
    id: 34,
    category: "Health & Lifestyle",
    categoryJp: "健康・ライフスタイル",
    topic: "Specialized diets (vegan, keto, etc.).",
    topicJp: "特定の食事法について話してみよう。",
    exampleEn: "Specialized diets like veganism and keto have become very popular in recent years. I think they can be beneficial for some people, depending on their health goals and lifestyle. However, it's important to do proper research and possibly consult a nutritionist before making drastic dietary changes. What works for one person may not work for another, so I believe in finding a sustainable eating plan that fits your individual needs.",
    exampleJp: "ビーガンやケトジェニックなどの特定の食事法は、近年とても人気になっています。健康目標やライフスタイルによっては、効果的な場合もあると思います。ただし、大幅な食事の変更をする前に、しっかり調べたり栄養士に相談することが大切です。ある人に合うものが別の人にも合うとは限らないので、自分に合った持続可能な食事プランを見つけることが重要だと考えています。"
  },
  {
    id: 35,
    category: "Health & Lifestyle",
    categoryJp: "健康・ライフスタイル",
    topic: "Hobbies and relaxation for burnout prevention.",
    topicJp: "趣味と燃え尽き予防について話してみよう。",
    exampleEn: "I strongly believe that having hobbies outside of work is crucial for preventing burnout. For me, activities like reading, taking walks, and spending time in nature help me decompress and reset. I've noticed that when I skip my hobbies for too long, my stress levels increase significantly. Making time for relaxation isn't lazy — it's actually a smart investment in your long-term productivity and well-being.",
    exampleJp: "仕事以外の趣味を持つことは、燃え尽き症候群を防ぐために不可欠だと強く信じています。私の場合、読書や散歩、自然の中で過ごすことがストレス解消とリセットに役立っています。趣味を長い間サボると、ストレスレベルが明らかに上がることに気づきました。リラックスの時間を作ることは怠けではなく、長期的な生産性と幸福への賢い投資です。"
  },
  {
    id: 36,
    category: "Society & Culture",
    categoryJp: "社会・文化",
    topic: "Social media and communication.",
    topicJp: "SNSとコミュニケーションについて話してみよう。",
    exampleEn: "Social media has completely changed the way we communicate with each other. It allows us to stay connected with people across the world instantly, which is amazing. However, I think it has also made some interactions feel more superficial compared to face-to-face conversations. Finding a healthy balance between online and offline communication is something I think everyone should be mindful of.",
    exampleJp: "SNSは私たちのコミュニケーション方法を完全に変えました。世界中の人と瞬時につながれるのは素晴らしいことです。しかし、対面の会話と比べて、やり取りが表面的に感じられるようになった面もあると思います。オンラインとオフラインのコミュニケーションのバランスを見つけることは、誰もが意識すべきことだと思います。"
  },
  {
    id: 37,
    category: "Society & Culture",
    categoryJp: "社会・文化",
    topic: "A cultural festival or celebration.",
    topicJp: "文化的な祭りやお祝いについて話してみよう。",
    exampleEn: "One of my favorite cultural celebrations is the summer festival, or matsuri, in Japan. The streets are filled with food stalls, traditional music, and people wearing colorful yukata. I especially love watching the fireworks display at the end of the evening. These festivals bring communities together and help preserve traditions that have been passed down for generations.",
    exampleJp: "私が好きな文化的なお祝いの一つは、日本の夏祭りです。通りには屋台が並び、伝統的な音楽が流れ、色とりどりの浴衣を着た人々で賑わいます。特に夜の花火大会を見るのが大好きです。こうしたお祭りは地域の人々をつなぎ、何世代にもわたって受け継がれてきた伝統を守る役割を果たしています。"
  },
  {
    id: 38,
    category: "Society & Culture",
    categoryJp: "社会・文化",
    topic: "Globalization and local cultures.",
    topicJp: "グローバル化と地域文化について話してみよう。",
    exampleEn: "Globalization has brought many benefits, such as easier access to international products, ideas, and opportunities. However, I'm concerned that it can sometimes lead to the loss of unique local cultures and traditions. I think it's important to embrace global connections while actively preserving what makes each culture special. Communities should find ways to celebrate their heritage even as they become more interconnected with the world.",
    exampleJp: "グローバル化は、国際的な商品やアイデア、機会へのアクセスが容易になるなど、多くの恩恵をもたらしました。しかし、独自の地域文化や伝統が失われることにつながる場合もあると心配しています。グローバルなつながりを受け入れつつ、各文化の特別さを積極的に守ることが大切だと思います。世界とのつながりが深まる中でも、地域の遺産を祝う方法を見つけるべきです。"
  },
  {
    id: 39,
    category: "Society & Culture",
    categoryJp: "社会・文化",
    topic: "Importance of learning foreign languages.",
    topicJp: "外国語学習の重要性について話してみよう。",
    exampleEn: "Learning a foreign language is one of the most rewarding things you can do. It not only helps you communicate with more people but also gives you a deeper understanding of different cultures. I've found that studying English has changed the way I think about my own language and culture. Even if you never become perfectly fluent, the process of learning itself builds patience, empathy, and cognitive flexibility.",
    exampleJp: "外国語を学ぶことは、最もやりがいのあることの一つです。より多くの人とコミュニケーションできるだけでなく、異文化への深い理解も得られます。英語を勉強することで、自分自身の言語や文化に対する考え方が変わったと感じています。完璧に流暢にならなくても、学ぶプロセス自体が忍耐力・共感力・認知的柔軟性を育ててくれます。"
  },
  {
    id: 40,
    category: "Society & Culture",
    categoryJp: "社会・文化",
    topic: "Multicultural societies.",
    topicJp: "多文化社会について話してみよう。",
    exampleEn: "I think multicultural societies are incredibly enriching because they expose people to a wide variety of perspectives, foods, and traditions. Living in a diverse community teaches you to be more open-minded and adaptable. Of course, there can be challenges related to language barriers and cultural misunderstandings. But I believe the benefits of diversity far outweigh the difficulties when people make an effort to learn from one another.",
    exampleJp: "多文化社会は、多様な視点・食文化・伝統に触れられるため、非常に豊かなものだと思います。多様なコミュニティで暮らすことは、より柔軟で開かれた考え方を育てます。もちろん、言語の壁や文化的な誤解といった課題もあります。しかし、互いから学ぼうとする努力があれば、多様性の恩恵は困難をはるかに上回ると信じています。"
  },
  {
    id: 41,
    category: "Technology & The Future",
    categoryJp: "テクノロジー・未来",
    topic: "A tech invention that impacted your life.",
    topicJp: "生活を変えたテクノロジーについて話してみよう。",
    exampleEn: "The smartphone is definitely the tech invention that has had the biggest impact on my life. It has replaced so many separate devices — my camera, my music player, my calendar, and even my wallet. I use it for everything from navigating new cities to staying in touch with friends. It's hard to imagine going back to a time when we didn't have all this functionality in our pockets.",
    exampleJp: "スマートフォンは間違いなく、私の生活に最も大きな影響を与えたテクノロジーです。カメラ、音楽プレーヤー、カレンダー、さらには財布まで、多くの個別デバイスの代わりになりました。初めての街でのナビゲーションから友人との連絡まで、あらゆることに使っています。この全機能がポケットになかった時代に戻ることは、もう想像できません。"
  },
  {
    id: 42,
    category: "Technology & The Future",
    categoryJp: "テクノロジー・未来",
    topic: "AI and its potential.",
    topicJp: "AIの可能性について話してみよう。",
    exampleEn: "Artificial intelligence has enormous potential to transform industries like healthcare, education, and transportation. I'm particularly excited about how AI can help doctors diagnose diseases earlier and more accurately. At the same time, I think we need to carefully consider the ethical implications, such as job displacement and bias in algorithms. The key is to develop AI responsibly so that it benefits everyone in society.",
    exampleJp: "人工知能は、医療・教育・交通などの産業を変革する巨大な可能性を持っています。特に、AIが医師の早期かつ正確な診断を助けることに期待しています。同時に、雇用の喪失やアルゴリズムの偏りなど、倫理的な影響を慎重に検討する必要があると思います。社会の全ての人に恩恵をもたらすよう、責任あるAI開発が鍵です。"
  },
  {
    id: 43,
    category: "Technology & The Future",
    categoryJp: "テクノロジー・未来",
    topic: "Technology and environmental problems.",
    topicJp: "テクノロジーと環境問題について話してみよう。",
    exampleEn: "Technology can play a vital role in addressing environmental problems. Innovations like solar panels, electric vehicles, and carbon capture systems offer real solutions to reduce emissions. However, technology alone isn't enough — we also need policy changes and shifts in individual behavior. I'm optimistic that the combination of technological innovation and collective action can help us tackle climate change effectively.",
    exampleJp: "テクノロジーは環境問題への対処で重要な役割を果たせます。ソーラーパネル、電気自動車、炭素回収システムなどの革新は、排出量削減のための現実的な解決策です。ただし、テクノロジーだけでは十分ではなく、政策変更や個人の行動変容も必要です。技術革新と集団行動の組み合わせが、気候変動に効果的に立ち向かう力になると楽観的に考えています。"
  },
  {
    id: 44,
    category: "Technology & The Future",
    categoryJp: "テクノロジー・未来",
    topic: "Online privacy and data protection.",
    topicJp: "オンラインプライバシーとデータ保護について話してみよう。",
    exampleEn: "Online privacy is becoming an increasingly important issue as we share more of our personal data digitally. Many people don't realize how much information companies collect about them through apps and websites. I think governments should implement stronger regulations to protect consumers' data. At the same time, individuals should be more careful about what they share online and use tools like two-factor authentication.",
    exampleJp: "個人データをデジタルで共有することが増える中、オンラインプライバシーはますます重要な問題になっています。アプリやウェブサイトを通じて企業がどれだけの情報を収集しているか、多くの人は気づいていません。政府は消費者データを保護するためのより強力な規制を導入すべきだと思います。同時に、個人もオンラインでの共有に注意し、二段階認証などのツールを活用すべきです。"
  },
  {
    id: 45,
    category: "Technology & The Future",
    categoryJp: "テクノロジー・未来",
    topic: "Technology and shopping/consumption.",
    topicJp: "テクノロジーと消費について話してみよう。",
    exampleEn: "Technology has revolutionized the way we shop, making it possible to buy almost anything with just a few taps on our phones. Online shopping is incredibly convenient, especially for comparing prices and reading reviews. However, I think it has also made impulse buying much easier, which can lead to overconsumption. Being mindful about our purchasing habits is more important than ever in this digital age.",
    exampleJp: "テクノロジーは買い物の方法を革命的に変え、スマホを数回タップするだけでほぼ何でも買えるようになりました。価格比較やレビューを読む際、オンラインショッピングは非常に便利です。しかし、衝動買いもずっと簡単になり、過剰消費につながる可能性もあります。このデジタル時代において、購買習慣を意識することはこれまで以上に大切です。"
  },
  {
    id: 46,
    category: "Environment & Sustainability",
    categoryJp: "環境・サステナビリティ",
    topic: "Climate change and its effects.",
    topicJp: "気候変動とその影響について話してみよう。",
    exampleEn: "Climate change is one of the most pressing challenges facing our generation. We can already see its effects through more frequent natural disasters, rising sea levels, and extreme weather patterns. I think both governments and individuals have a responsibility to take action. Even small changes, like reducing energy consumption at home, can make a difference when millions of people do them together.",
    exampleJp: "気候変動は、私たちの世代が直面する最も差し迫った課題の一つです。自然災害の頻発、海面上昇、異常気象など、すでにその影響は見えています。政府も個人も行動を起こす責任があると思います。家庭でのエネルギー消費削減のような小さな変化でも、何百万人もの人が一緒に行えば大きな違いを生み出せます。"
  },
  {
    id: 47,
    category: "Environment & Sustainability",
    categoryJp: "環境・サステナビリティ",
    topic: "A simple eco-friendly change.",
    topicJp: "エコな工夫について話してみよう。",
    exampleEn: "One simple eco-friendly change I've made is bringing my own reusable bag and water bottle everywhere I go. It might seem like a small thing, but it has significantly reduced the amount of single-use plastic I consume. I've also started being more conscious about food waste by planning my meals for the week. These small habits add up over time and make me feel like I'm contributing to a healthier planet.",
    exampleJp: "私が実践しているシンプルなエコ活動は、どこに行くにもマイバッグとマイボトルを持参することです。小さなことに見えるかもしれませんが、使い捨てプラスチックの消費量が大幅に減りました。また、1週間の献立を計画して食品ロスにも気を配るようになりました。こうした小さな習慣は時間とともに積み重なり、より健康な地球に貢献していると実感できます。"
  },
  {
    id: 48,
    category: "Environment & Sustainability",
    categoryJp: "環境・サステナビリティ",
    topic: "Sustainable living.",
    topicJp: "サステナブルな暮らしについて話してみよう。",
    exampleEn: "Sustainable living means making choices that minimize our negative impact on the environment. This can include things like buying locally produced food, using public transportation, and choosing products with less packaging. I've been trying to adopt more sustainable habits gradually rather than making drastic changes all at once. I believe that sustainability is a journey, and every step in the right direction counts.",
    exampleJp: "サステナブルな暮らしとは、環境への悪影響を最小限にする選択をすることです。地元産の食品を買う、公共交通機関を使う、包装の少ない商品を選ぶなどが含まれます。一度に大きく変えるのではなく、少しずつサステナブルな習慣を取り入れるようにしています。サステナビリティは旅であり、正しい方向への一歩一歩が大切だと信じています。"
  },
  {
    id: 49,
    category: "Environment & Sustainability",
    categoryJp: "環境・サステナビリティ",
    topic: "Deforestation and wildlife.",
    topicJp: "森林破壊と野生生物について話してみよう。",
    exampleEn: "Deforestation is a serious issue that threatens countless species of wildlife around the world. When forests are cleared for agriculture or development, animals lose their habitats and entire ecosystems are disrupted. I think we need stricter international regulations to protect forests, especially in tropical regions. Supporting organizations that work on reforestation is one way individuals can help make a positive impact.",
    exampleJp: "森林破壊は、世界中の無数の野生生物を脅かす深刻な問題です。農業や開発のために森林が伐採されると、動物は生息地を失い、生態系全体が崩壊します。特に熱帯地域の森林を保護するための、より厳しい国際規制が必要だと思います。植林活動を行う団体を支援することは、個人ができるポジティブな貢献の一つです。"
  },
  {
    id: 50,
    category: "Environment & Sustainability",
    categoryJp: "環境・サステナビリティ",
    topic: "Renewable energy.",
    topicJp: "再生可能エネルギーについて話してみよう。",
    exampleEn: "Renewable energy sources like solar, wind, and hydropower are essential for reducing our dependence on fossil fuels. The cost of these technologies has dropped dramatically in recent years, making them more accessible than ever. I think governments should invest more in renewable energy infrastructure and offer incentives for households and businesses to make the switch. Transitioning to clean energy is one of the most impactful things we can do to fight climate change.",
    exampleJp: "太陽光・風力・水力などの再生可能エネルギーは、化石燃料への依存を減らすために不可欠です。これらの技術コストは近年劇的に下がり、かつてないほど身近になっています。政府は再生可能エネルギーのインフラにもっと投資し、家庭や企業の切り替えに対するインセンティブを提供すべきだと思います。クリーンエネルギーへの移行は、気候変動と闘うために私たちができる最もインパクトのある取り組みの一つです。"
  },
  {
    id: 51,
    category: "Personal Growth & Reflection",
    categoryJp: "自己成長・内省",
    topic: "A significant personal goal you have.",
    topicJp: "大きな個人目標について話してみよう。",
    exampleEn: "One of my most significant personal goals is to become fluent in English so I can communicate confidently in any situation. I've been working toward this by practicing speaking every day and exposing myself to English media. It's not always easy, and there are times I feel like I'm not making progress, but I remind myself that consistency is key. I believe that achieving this goal will open up many new opportunities in both my career and personal life.",
    exampleJp: "私の最も大きな個人目標の一つは、どんな状況でも自信を持ってコミュニケーションが取れるよう英語を流暢に話せるようになることです。毎日スピーキング練習をし、英語メディアに触れることで取り組んでいます。簡単ではなく、進歩を感じられない時もありますが、継続が鍵だと自分に言い聞かせています。この目標を達成すれば、キャリアにもプライベートにも多くの新しい機会が開けると信じています。"
  },
  {
    id: 52,
    category: "Personal Growth & Reflection",
    categoryJp: "自己成長・内省",
    topic: "A challenge that helped you grow.",
    topicJp: "成長のきっかけとなった挑戦について話してみよう。",
    exampleEn: "A few years ago, I took on a project at work that was way beyond my comfort zone. I had to learn new skills quickly and manage a team for the first time, which was incredibly stressful. However, by the end of the project, I realized how much I had grown both professionally and personally. That experience taught me that stepping outside your comfort zone is one of the fastest ways to develop as a person.",
    exampleJp: "数年前、職場でコンフォートゾーンをはるかに超えるプロジェクトに挑戦しました。新しいスキルを素早く習得し、初めてチームを管理する必要があり、非常にストレスフルでした。しかしプロジェクト終了時には、仕事面でも個人的にも大きく成長したことに気づきました。あの経験から、コンフォートゾーンの外に出ることが最も早い成長方法の一つだと学びました。"
  },
  {
    id: 53,
    category: "Personal Growth & Reflection",
    categoryJp: "自己成長・内省",
    topic: "A habit you're trying to develop or break.",
    topicJp: "身につけたい・やめたい習慣について話してみよう。",
    exampleEn: "I've been trying to develop a consistent morning routine that includes reading and light exercise. For a long time, I would just scroll through my phone first thing in the morning, which left me feeling unproductive. Now I try to wake up a bit earlier and start my day with intention. It's still a work in progress, but on the days I stick to my routine, I notice a big difference in my energy and focus.",
    exampleJp: "読書と軽い運動を含む一貫した朝のルーティンを身につけようとしています。長い間、朝起きてすぐスマホをスクロールしてしまい、非生産的に感じていました。今は少し早く起きて、意識的に一日を始めるようにしています。まだ道半ばですが、ルーティンを守れた日は、エネルギーと集中力に大きな違いを感じます。"
  },
  {
    id: 54,
    category: "Personal Growth & Reflection",
    categoryJp: "自己成長・内省",
    topic: "Setting realistic goals.",
    topicJp: "達成可能な目標設定について話してみよう。",
    exampleEn: "I've learned that setting realistic goals is much more effective than aiming for something too ambitious right away. Breaking a big goal into smaller, manageable steps keeps me motivated and helps me track my progress. For example, instead of saying I want to read fifty books this year, I set a goal of one book per week. This approach reduces the pressure and makes the whole process more enjoyable.",
    exampleJp: "最初から大きすぎる目標を掲げるよりも、達成可能な目標を設定する方がはるかに効果的だと学びました。大きな目標を小さく管理しやすいステップに分解することで、モチベーションを保ち進捗を追えます。例えば、今年50冊読むと言う代わりに、週1冊という目標を立てています。このアプローチはプレッシャーを減らし、プロセス全体をより楽しいものにしてくれます。"
  },
  {
    id: 55,
    category: "Personal Growth & Reflection",
    categoryJp: "自己成長・内省",
    topic: "Failure as a learning experience.",
    topicJp: "失敗から学ぶことについて話してみよう。",
    exampleEn: "I used to be terrified of failure, but over time I've come to see it as one of the best teachers in life. When I failed an important exam a few years ago, it forced me to re-evaluate my study methods and work ethic. That setback ultimately led me to develop better habits and a stronger mindset. Now I try to view every failure as an opportunity to learn something valuable about myself.",
    exampleJp: "以前は失敗がとても怖かったのですが、時間が経つにつれ、人生で最高の先生の一つだと思えるようになりました。数年前に大切な試験に落ちた時、勉強法や仕事への取り組み方を見直さざるを得ませんでした。その挫折が結果的により良い習慣とより強いマインドセットを育ててくれました。今は、すべての失敗を自分自身について何か大切なことを学ぶ機会として捉えるようにしています。"
  },
  {
    id: 56,
    category: "Social Issues",
    categoryJp: "社会問題",
    topic: "Homelessness in urban areas.",
    topicJp: "都市部のホームレス問題について話してみよう。",
    exampleEn: "Homelessness in urban areas is a complex issue that involves factors like poverty, mental health challenges, and a lack of affordable housing. In many cities, you can see people living on the streets despite there being empty buildings nearby. I believe governments need to address the root causes rather than just providing temporary shelters. A combination of mental health support, job training, and affordable housing programs could make a real difference.",
    exampleJp: "都市部のホームレス問題は、貧困、メンタルヘルスの課題、手頃な住宅の不足など複雑な要因が絡んでいます。多くの都市では、空きビルがあるにもかかわらず路上生活をしている人を見かけます。一時的なシェルターを提供するだけでなく、根本的な原因に取り組む必要があると思います。メンタルヘルス支援、職業訓練、手頃な住宅プログラムの組み合わせが本当の変化をもたらすでしょう。"
  },
  {
    id: 57,
    category: "Social Issues",
    categoryJp: "社会問題",
    topic: "Volunteering and community service.",
    topicJp: "ボランティア活動について話してみよう。",
    exampleEn: "Volunteering is a wonderful way to give back to the community while also developing new skills. I've participated in several volunteer events, from beach cleanups to tutoring children, and each experience has been incredibly rewarding. It's amazing how even a few hours of your time can make a real impact on someone else's life. I think volunteering should be encouraged from a young age so that it becomes a natural part of people's lives.",
    exampleJp: "ボランティアは、新しいスキルを身につけながら地域社会に貢献できる素晴らしい方法です。ビーチ清掃から子どもの学習支援まで、いくつものボランティアイベントに参加してきましたが、どれも非常にやりがいのある経験でした。ほんの数時間の時間が誰かの人生に本当の影響を与えられるのは驚くべきことです。ボランティアは幼い頃から奨励し、自然な生活の一部になるべきだと思います。"
  },
  {
    id: 58,
    category: "Social Issues",
    categoryJp: "社会問題",
    topic: "Consumerism and the environment.",
    topicJp: "消費主義と環境について話してみよう。",
    exampleEn: "Modern consumerism has a huge impact on the environment, from the resources used in manufacturing to the waste created when products are thrown away. Fast fashion is a prime example, where cheap clothing is produced quickly and discarded just as fast. I've been trying to buy less and choose quality over quantity whenever possible. If more people adopted mindful consumption habits, it could significantly reduce our environmental footprint.",
    exampleJp: "現代の消費主義は、製造に使われる資源から製品が廃棄される際のゴミまで、環境に大きな影響を及ぼしています。ファストファッションはその典型で、安い服が素早く生産され、同じくらい早く捨てられます。できるだけ買う量を減らし、量より質を選ぶようにしています。より多くの人が意識的な消費習慣を取り入れれば、環境負荷を大幅に削減できるでしょう。"
  },
  {
    id: 59,
    category: "Social Issues",
    categoryJp: "社会問題",
    topic: "Challenges of an aging population.",
    topicJp: "高齢化社会の課題について話してみよう。",
    exampleEn: "Japan is one of the countries most affected by an aging population, and the challenges are becoming increasingly evident. There are fewer young workers to support the growing number of retirees, which puts strain on the social security system. Healthcare costs continue to rise as people live longer, and many rural communities are shrinking. I think we need innovative solutions, like leveraging technology for elder care and creating more inclusive workplaces for older adults.",
    exampleJp: "日本は高齢化の影響を最も受けている国の一つで、その課題はますます顕在化しています。増え続ける退職者を支える若い労働者が減少し、社会保障制度に負担がかかっています。長寿化に伴い医療費も上昇し続け、多くの地方コミュニティが縮小しています。高齢者介護へのテクノロジー活用や、シニアにとってより包摂的な職場づくりなど、革新的な解決策が必要だと思います。"
  },
  {
    id: 60,
    category: "Social Issues",
    categoryJp: "社会問題",
    topic: "The gender pay gap.",
    topicJp: "男女の賃金格差について話してみよう。",
    exampleEn: "The gender pay gap remains a significant issue in many countries around the world. Studies consistently show that women earn less than men for doing the same work, and the gap is even wider for women of color. I believe companies should be required to publish their pay data transparently so that inequalities can be identified and addressed. Equal pay for equal work is not just a women's issue; it's a matter of basic fairness for everyone.",
    exampleJp: "男女の賃金格差は、世界中の多くの国で依然として重要な問題です。研究では一貫して、女性は同じ仕事をしても男性より少ない給与を受け取っており、有色人種の女性ではさらに格差が広がっています。不平等を特定し対処できるよう、企業は賃金データを透明に公開すべきだと思います。同一労働同一賃金は女性だけの問題ではなく、すべての人にとっての基本的な公正の問題です。"
  },
  {
    id: 61,
    category: "Art & Creativity",
    categoryJp: "芸術・創造性",
    topic: "Art reflecting social or political issues.",
    topicJp: "芸術と社会・政治問題について話してみよう。",
    exampleEn: "Art has always been a powerful medium for reflecting social and political issues. Throughout history, artists have used their work to challenge the status quo and raise awareness about injustice. Street art, for example, often communicates messages about inequality and freedom that resonate with ordinary people. I think art that tackles these issues can inspire dialogue and even drive real change in society.",
    exampleJp: "芸術は常に社会的・政治的問題を映し出す強力な媒体でした。歴史を通じて、アーティストは作品を通じて現状に異議を唱え、不正義への意識を高めてきました。例えばストリートアートは、不平等や自由についてのメッセージを一般の人々に訴えかけます。こうした問題に取り組むアートは対話を促し、社会に本当の変化をもたらすこともできると思います。"
  },
  {
    id: 62,
    category: "Art & Creativity",
    categoryJp: "芸術・創造性",
    topic: "Creativity in problem-solving.",
    topicJp: "創造性と問題解決について話してみよう。",
    exampleEn: "Creativity isn't just about painting or writing; it plays a huge role in problem-solving as well. When you approach a challenge from a creative angle, you often discover solutions that logical thinking alone wouldn't reveal. In my work, I've found that brainstorming without restrictions first and then narrowing down ideas leads to the best outcomes. I believe fostering creativity should be a priority in both education and the workplace.",
    exampleJp: "創造性は絵を描いたり文章を書いたりすることだけでなく、問題解決にも大きな役割を果たします。課題に創造的な角度からアプローチすると、論理的思考だけでは見つからない解決策を発見できることがよくあります。仕事では、まず制限なしにブレインストーミングをし、その後アイデアを絞り込むのが最良の結果につながると感じています。創造性の育成は教育でも職場でも優先すべきだと思います。"
  },
  {
    id: 63,
    category: "Art & Creativity",
    categoryJp: "芸術・創造性",
    topic: "A piece of art that impressed you.",
    topicJp: "印象的な芸術作品について話してみよう。",
    exampleEn: "One piece of art that truly impressed me was a large-scale installation I saw at a contemporary art museum. It used light and mirrors to create an immersive experience that made you feel like you were floating in space. The artist wanted viewers to question their perception of reality, and it certainly achieved that. It reminded me that art doesn't just have to hang on a wall; it can completely transform how you experience a space.",
    exampleJp: "本当に印象に残った作品は、現代美術館で見た大規模なインスタレーションです。光と鏡を使い、宇宙に浮かんでいるような没入体験を生み出していました。アーティストは鑑賞者に現実の認識を問い直してほしかったそうで、まさにその通りでした。芸術は壁に掛けるだけでなく、空間の体験そのものを完全に変えられるのだと改めて感じました。"
  },
  {
    id: 64,
    category: "Art & Creativity",
    categoryJp: "芸術・創造性",
    topic: "Technology and modern art.",
    topicJp: "テクノロジーと現代アートについて話してみよう。",
    exampleEn: "Technology has dramatically expanded the possibilities of modern art. Digital tools allow artists to create works that would have been impossible just a few decades ago, from AI-generated imagery to interactive virtual reality experiences. Some people argue that technology-based art lacks the soul of traditional mediums, but I disagree. I think technology is simply another tool in an artist's toolkit, and what matters most is the intention and emotion behind the work.",
    exampleJp: "テクノロジーは現代アートの可能性を劇的に広げました。デジタルツールにより、AIが生成する画像からインタラクティブなVR体験まで、数十年前には不可能だった作品を制作できるようになりました。テクノロジーベースのアートには伝統的な媒体の魂が欠けていると主張する人もいますが、私はそう思いません。テクノロジーはアーティストのツールキットの新たな道具にすぎず、最も大切なのは作品の意図と感情だと思います。"
  },
  {
    id: 65,
    category: "Art & Creativity",
    categoryJp: "芸術・創造性",
    topic: "Everyone is creative in their own way.",
    topicJp: "誰もがクリエイティブであることについて話してみよう。",
    exampleEn: "I firmly believe that everyone is creative in their own way, even if they don't consider themselves artistic. Creativity shows up in how you solve everyday problems, how you decorate your home, or even how you tell a story to a friend. The problem is that many people were told as children that they weren't creative, and that belief stuck with them. I think we should encourage people to explore their creativity without the fear of judgment.",
    exampleJp: "たとえ自分を芸術的だと思っていなくても、誰もが独自の方法でクリエイティブだと確信しています。創造性は日常の問題解決の仕方、家の飾り方、友人への話の伝え方にも表れます。問題は、多くの人が子どもの頃に「自分はクリエイティブではない」と言われ、その信念が定着してしまったことです。評価を恐れずに創造性を探求するよう、人々を励ますべきだと思います。"
  },
  {
    id: 66,
    category: "Future Perspectives",
    categoryJp: "未来展望",
    topic: "Life in 50 years.",
    topicJp: "50年後の生活について話してみよう。",
    exampleEn: "It's fascinating to imagine what life might look like in fifty years. I think technology will be deeply integrated into every aspect of our daily lives, from how we work to how we receive medical treatment. Self-driving cars might be the norm, and virtual reality could replace traditional classrooms. While these advances are exciting, I hope we also find ways to preserve human connection and the natural environment in this high-tech future.",
    exampleJp: "50年後の生活がどうなるか想像するのはとても興味深いです。テクノロジーが、仕事から医療まで日常生活のあらゆる面に深く統合されるだろうと思います。自動運転車が当たり前になり、VRが従来の教室に取って代わるかもしれません。これらの進歩はワクワクしますが、このハイテクな未来でも人間のつながりや自然環境を守る方法を見つけてほしいと願っています。"
  },
  {
    id: 67,
    category: "Future Perspectives",
    categoryJp: "未来展望",
    topic: "Human colonization of other planets.",
    topicJp: "他惑星への移住について話してみよう。",
    exampleEn: "The idea of humans colonizing other planets has moved from science fiction to a real possibility, with companies like SpaceX actively working on Mars missions. While I find the concept thrilling, I also think we need to be careful not to repeat the environmental mistakes we've made on Earth. There are enormous technical challenges to overcome, such as creating breathable atmospheres and growing food in alien soil. Still, exploring space could push humanity to develop technologies that also benefit life here on Earth.",
    exampleJp: "人類が他の惑星に移住するという考えは、SpaceXのような企業が火星ミッションに取り組む中、SFから現実の可能性へと変わりました。この概念にワクワクする一方で、地球で犯した環境面の過ちを繰り返さないよう注意が必要だと思います。呼吸可能な大気の創出や異星の土壌での食料栽培など、克服すべき技術的課題は膨大です。それでも、宇宙探査は地球上の生活にも恩恵をもたらす技術開発を人類に促すかもしれません。"
  },
  {
    id: 68,
    category: "Future Perspectives",
    categoryJp: "未来展望",
    topic: "The future of education.",
    topicJp: "教育の未来について話してみよう。",
    exampleEn: "I believe the future of education will be much more personalized and technology-driven than it is today. AI tutors could adapt lessons to each student's learning pace and style, making education more effective for everyone. Online learning platforms have already shown that quality education can reach people anywhere in the world. However, I still think human teachers will play a crucial role in mentoring students and fostering critical thinking skills.",
    exampleJp: "教育の未来は、今よりもはるかにパーソナライズされ、テクノロジー主導になると思います。AIチューターが各生徒の学習ペースやスタイルに合わせてレッスンを適応させ、誰にとっても効果的な教育を実現できるでしょう。オンライン学習プラットフォームは、質の高い教育が世界中のどこにいても届くことをすでに証明しています。しかし、学生のメンタリングや批判的思考力の育成において、人間の教師が重要な役割を果たし続けると考えています。"
  },
  {
    id: 69,
    category: "Future Perspectives",
    categoryJp: "未来展望",
    topic: "Future of work (remote, automation).",
    topicJp: "仕事の未来について話してみよう。",
    exampleEn: "The future of work is changing rapidly due to remote work trends and increasing automation. Many jobs that exist today may be replaced by AI and robots within the next few decades. On the other hand, entirely new professions will emerge that we can't even imagine yet. I think the key to thriving in this changing landscape is to focus on skills that machines can't easily replicate, like creativity, empathy, and complex problem-solving.",
    exampleJp: "リモートワークの普及と自動化の進展により、仕事の未来は急速に変化しています。現在存在する多くの職業が、今後数十年以内にAIやロボットに置き換えられるかもしれません。一方で、まだ想像もできないような全く新しい職業も生まれるでしょう。この変化する環境で成功する鍵は、創造性・共感力・複雑な問題解決など、機械が簡単には再現できないスキルに注力することだと思います。"
  },
  {
    id: 70,
    category: "Future Perspectives",
    categoryJp: "未来展望",
    topic: "Climate change reshaping society.",
    topicJp: "気候変動と社会変化について話してみよう。",
    exampleEn: "Climate change is not just an environmental issue; it's reshaping societies around the world. Rising sea levels threaten coastal cities, extreme weather events are becoming more frequent, and food production is being disrupted. I think we'll see significant changes in where people live and how economies function within our lifetimes. Addressing climate change requires global cooperation, and I believe it will become the defining challenge of this century.",
    exampleJp: "気候変動は単なる環境問題ではなく、世界中の社会を再形成しています。海面上昇が沿岸都市を脅かし、極端な気象現象がより頻繁になり、食料生産が混乱しています。私たちが生きているうちに、人々の居住地や経済の機能に大きな変化が起こると思います。気候変動への対処にはグローバルな協力が必要であり、今世紀を定義する課題になると信じています。"
  },
  {
    id: 71,
    category: "Communication & Media",
    categoryJp: "コミュニケーション・メディア",
    topic: "Generational communication differences.",
    topicJp: "世代間コミュニケーションの違いについて話してみよう。",
    exampleEn: "Different generations often have very different communication styles, which can sometimes lead to misunderstandings. Older generations tend to prefer phone calls and face-to-face conversations, while younger people often communicate through text messages and social media. I've noticed this gap in my own family, where my grandparents prefer calling while I naturally reach for a messaging app. I think being aware of these differences and adapting our style can help bridge the generational divide.",
    exampleJp: "異なる世代はコミュニケーションスタイルが大きく異なることが多く、時に誤解を生むことがあります。年配の世代は電話や対面での会話を好む傾向がありますが、若い世代はテキストメッセージやSNSでコミュニケーションを取ることが多いです。自分の家族でもこのギャップに気づいていて、祖父母は電話を好む一方、私は自然とメッセージアプリに手を伸ばします。こうした違いを意識しスタイルを適応させることが、世代間の溝を埋める助けになると思います。"
  },
  {
    id: 72,
    category: "Communication & Media",
    categoryJp: "コミュニケーション・メディア",
    topic: "Role of journalism today.",
    topicJp: "現代のジャーナリズムの役割について話してみよう。",
    exampleEn: "Journalism plays a vital role in keeping the public informed and holding powerful institutions accountable. However, the rise of social media and citizen journalism has blurred the line between professional reporting and opinion. I think it's more important than ever for people to seek out reliable news sources and think critically about the information they consume. Quality journalism requires funding and support, and I hope society continues to value investigative reporting.",
    exampleJp: "ジャーナリズムは市民に情報を伝え、権力ある組織の説明責任を果たさせる重要な役割を担っています。しかし、SNSや市民ジャーナリズムの台頭により、プロの報道と意見の境界線が曖昧になっています。信頼できるニュースソースを探し、消費する情報を批判的に考えることがかつてないほど重要だと思います。質の高いジャーナリズムには資金と支援が必要であり、社会が調査報道を評価し続けることを願っています。"
  },
  {
    id: 73,
    category: "Communication & Media",
    categoryJp: "コミュニケーション・メディア",
    topic: "Vlogging and live streaming.",
    topicJp: "Vlog・ライブ配信について話してみよう。",
    exampleEn: "Vlogging and live streaming have become hugely popular forms of content creation in recent years. Platforms like YouTube and Twitch allow anyone to broadcast their experiences and connect with audiences worldwide. I find it interesting how these formats create a sense of intimacy between creators and viewers that traditional media doesn't offer. While it can be a great career for some, I think it's important for creators to maintain healthy boundaries and take care of their mental health.",
    exampleJp: "Vlogやライブ配信は、近年非常に人気のあるコンテンツ制作形態になりました。YouTubeやTwitchなどのプラットフォームにより、誰でも自分の経験を配信し世界中の視聴者とつながれます。これらの形式が、従来のメディアにはないクリエイターと視聴者の親密感を生み出しているのは興味深いです。一部の人にとっては素晴らしいキャリアになり得ますが、クリエイターが健全な境界線を保ちメンタルヘルスをケアすることが大切だと思います。"
  },
  {
    id: 74,
    category: "Communication & Media",
    categoryJp: "コミュニケーション・メディア",
    topic: "Echo chambers on social media.",
    topicJp: "SNSのエコーチャンバーについて話してみよう。",
    exampleEn: "Echo chambers on social media are a growing concern because they expose people only to opinions that match their own. Algorithms are designed to show us content we're likely to engage with, which often means we see the same perspectives repeated over and over. This can make us less tolerant of different viewpoints and more polarized in our beliefs. I try to follow a diverse range of accounts and actively seek out opinions that challenge my thinking.",
    exampleJp: "SNSのエコーチャンバーは、自分と同じ意見にしか触れられなくなるため、懸念が高まっています。アルゴリズムは私たちが関与しやすいコンテンツを表示するよう設計されており、同じ視点が繰り返し表示されがちです。これにより異なる視点への寛容さが低下し、信念がより両極化する可能性があります。私は多様なアカウントをフォローし、自分の考えに挑戦する意見を積極的に探すようにしています。"
  },
  {
    id: 75,
    category: "Communication & Media",
    categoryJp: "コミュニケーション・メディア",
    topic: "Pros and cons of 24-hour news.",
    topicJp: "24時間ニュースの是非について話してみよう。",
    exampleEn: "The 24-hour news cycle has both advantages and disadvantages. On the positive side, it means we can stay informed about breaking events as they happen anywhere in the world. However, the constant need to fill airtime often leads to sensationalism and repetitive coverage that can increase anxiety. I think it's healthy to set boundaries on how much news we consume and to take regular breaks from the constant stream of information.",
    exampleJp: "24時間ニュースサイクルにはメリットとデメリットの両方があります。良い面として、世界のどこで起きた速報にもリアルタイムで情報を得られます。しかし、常に放送時間を埋める必要があるため、センセーショナリズムや繰り返しの報道に陥りやすく、不安を増大させることがあります。ニュースの消費量に制限を設け、絶え間ない情報の流れから定期的に離れることが健全だと思います。"
  },
  {
    id: 76,
    category: "Food & Cuisine",
    categoryJp: "食・料理",
    topic: "A favorite traditional dish.",
    topicJp: "お気に入りの伝統料理について話してみよう。",
    exampleEn: "One of my favorite traditional dishes is miso soup, which has been a staple of Japanese cuisine for centuries. It's simple but incredibly comforting, especially on a cold morning. The combination of miso paste, tofu, and seasonal vegetables creates a warm, savory flavor that I never get tired of. I think traditional dishes like this are important because they carry the culture and history of a region in every bite.",
    exampleJp: "お気に入りの伝統料理の一つは、何世紀も日本料理の主食であり続ける味噌汁です。シンプルですが非常にほっとする味で、特に寒い朝にはたまりません。味噌、豆腐、旬の野菜の組み合わせが飽きることのない温かく風味豊かな味わいを生み出します。こうした伝統料理は、一口ごとにその地域の文化と歴史を伝えてくれるからこそ大切だと思います。"
  },
  {
    id: 77,
    category: "Food & Cuisine",
    categoryJp: "食・料理",
    topic: "Fast-food culture and society.",
    topicJp: "ファストフード文化と社会について話してみよう。",
    exampleEn: "Fast-food culture has become deeply embedded in modern society, largely because of our increasingly busy lifestyles. While fast food offers convenience and affordability, it often comes at the cost of nutrition and health. The rise of fast food has also contributed to issues like obesity and environmental waste from packaging. I think it's fine to enjoy fast food occasionally, but we should be mindful about making it a regular habit.",
    exampleJp: "ファストフード文化は、ますます忙しくなるライフスタイルを背景に、現代社会に深く根付いています。ファストフードは便利で手頃ですが、栄養や健康が犠牲になることが多いです。ファストフードの普及は、肥満や包装による環境廃棄物などの問題にも寄与しています。たまにファストフードを楽しむのは問題ないと思いますが、それが習慣にならないよう意識すべきです。"
  },
  {
    id: 78,
    category: "Food & Cuisine",
    categoryJp: "食・料理",
    topic: "Vegetarian or vegan diets.",
    topicJp: "ベジタリアン・ヴィーガン食について話してみよう。",
    exampleEn: "Vegetarian and vegan diets have gained a lot of popularity in recent years, driven by health, environmental, and ethical concerns. Reducing meat consumption can significantly lower your carbon footprint and may also improve your overall health. I've tried incorporating more plant-based meals into my diet, and I've been surprised by how delicious and satisfying they can be. I think it's important to respect people's dietary choices while also being open to trying new things yourself.",
    exampleJp: "ベジタリアンやヴィーガンの食事は、健康・環境・倫理的な観点から近年非常に人気が高まっています。肉の消費を減らすことでカーボンフットプリントを大幅に削減でき、全体的な健康改善にもつながる可能性があります。植物ベースの食事をもっと取り入れてみたところ、その美味しさと満足感に驚きました。人々の食事の選択を尊重しながら、自分自身も新しいことに挑戦する姿勢が大切だと思います。"
  },
  {
    id: 79,
    category: "Food & Cuisine",
    categoryJp: "食・料理",
    topic: "Social media and food trends.",
    topicJp: "SNSと食トレンドについて話してみよう。",
    exampleEn: "Social media has had a massive influence on food trends, with platforms like Instagram and TikTok turning certain dishes into viral sensations overnight. Restaurants now design their menus with visual appeal in mind, knowing that customers will photograph and share their meals. While this has introduced people to new cuisines and creative dishes, it can also promote style over substance. I think we should appreciate food for its taste and nutritional value, not just its appearance on a screen.",
    exampleJp: "SNSは食のトレンドに大きな影響を与えており、InstagramやTikTokなどのプラットフォームが特定の料理を一夜にしてバズらせています。レストランは顧客が写真を撮ってシェアすることを見越して、ビジュアル重視のメニューを作るようになりました。新しい料理や創造的な一皿を多くの人に紹介してくれる一方で、中身より見た目を重視する傾向もあります。画面上の見栄えだけでなく、味や栄養価で食を楽しむべきだと思います。"
  },
  {
    id: 80,
    category: "Food & Cuisine",
    categoryJp: "食・料理",
    topic: "A memorable cooking or dining experience.",
    topicJp: "印象的な食事体験について話してみよう。",
    exampleEn: "One of my most memorable dining experiences was at a small family-run restaurant in a quiet neighborhood. The owner personally came to our table to explain each dish, and you could taste the love and care in every bite. The food wasn't fancy, but it was honest and incredibly flavorful. That experience reminded me that the best meals often come from passion and tradition rather than expensive ingredients or elaborate presentations.",
    exampleJp: "最も印象的な食事体験の一つは、静かな住宅街にある小さな家族経営のレストランでした。オーナーが直接テーブルに来て各料理を説明してくれ、一口一口に愛情と丁寧さを感じました。華やかな料理ではありませんでしたが、誠実で信じられないほど風味豊かでした。あの経験から、最高の食事は高価な食材や凝った盛り付けよりも、情熱と伝統から生まれることが多いのだと改めて感じました。"
  },
  {
    id: 81,
    category: "Leisure & Entertainment",
    categoryJp: "余暇・エンターテインメント",
    topic: "Importance of leisure time.",
    topicJp: "余暇の重要性について話してみよう。",
    exampleEn: "Leisure time is essential for maintaining a healthy work-life balance and preventing burnout. When we take time to relax and do things we enjoy, we recharge our mental and physical energy. I've noticed that I'm much more productive at work when I've had a proper break over the weekend. I think society needs to move away from the idea that being busy all the time is something to be proud of.",
    exampleJp: "余暇は健全なワークライフバランスを維持し、バーンアウトを防ぐために不可欠です。リラックスして好きなことをする時間を取ると、心身のエネルギーが回復します。週末にしっかり休んだ後の方が、仕事の生産性がはるかに高いことに気づいています。常に忙しくしていることが誇るべきことだという考えから、社会は離れるべきだと思います。"
  },
  {
    id: 82,
    category: "Leisure & Entertainment",
    categoryJp: "余暇・エンターテインメント",
    topic: "Popularity of theme parks.",
    topicJp: "テーマパークの人気について話してみよう。",
    exampleEn: "Theme parks continue to be incredibly popular around the world because they offer a unique blend of excitement, nostalgia, and escapism. Places like Disneyland create magical experiences that appeal to both children and adults alike. The technology behind modern rides and attractions has become amazingly sophisticated, making the experiences more immersive than ever. I think theme parks will keep evolving and remain a favorite form of entertainment for generations to come.",
    exampleJp: "テーマパークは、興奮・ノスタルジア・非日常を独自に組み合わせているため、世界中で非常に人気があり続けています。ディズニーランドのような場所は、子どもにも大人にも魅力的な魔法のような体験を提供します。現代のアトラクションの技術は驚くほど洗練され、かつてないほど没入感のある体験が可能になっています。テーマパークは今後も進化を続け、世代を超えて愛される娯楽であり続けると思います。"
  },
  {
    id: 83,
    category: "Leisure & Entertainment",
    categoryJp: "余暇・エンターテインメント",
    topic: "Solo travel or solo activities.",
    topicJp: "一人旅・ソロ活動について話してみよう。",
    exampleEn: "Solo travel is something I highly recommend because it forces you to step outside your comfort zone and rely entirely on yourself. When you travel alone, you're more open to meeting new people and experiencing things spontaneously. I went on a solo trip a while back and found it incredibly liberating to set my own schedule and follow my curiosity. It taught me a lot about independence and gave me the confidence to handle unexpected situations.",
    exampleJp: "一人旅は、コンフォートゾーンの外に出て完全に自分自身に頼ることを迫られるため、ぜひおすすめしたいです。一人で旅をすると、新しい人との出会いや自発的な体験にオープンになれます。以前一人旅をした時、自分のスケジュールを決め好奇心の赴くままに行動できる解放感は素晴らしいものでした。独立心について多くを学び、予期せぬ状況に対処する自信がつきました。"
  },
  {
    id: 84,
    category: "Leisure & Entertainment",
    categoryJp: "余暇・エンターテインメント",
    topic: "Sports building teamwork and community.",
    topicJp: "スポーツとチームワークについて話してみよう。",
    exampleEn: "Sports are one of the best ways to build teamwork skills and create a sense of community. Whether it's a local soccer league or a school basketball team, working together toward a common goal teaches valuable lessons about cooperation and communication. I've always found that the friendships formed through sports tend to be especially strong and lasting. Beyond the physical benefits, sports can also teach resilience, discipline, and how to handle both winning and losing gracefully.",
    exampleJp: "スポーツはチームワークスキルを構築し、コミュニティ意識を醸成する最良の方法の一つです。地域のサッカーリーグでも学校のバスケットボールチームでも、共通の目標に向かって協力することで、協調性やコミュニケーションについて貴重な教訓が得られます。スポーツを通じて形成された友情は特に強く長続きすることをいつも感じています。身体的な利点に加え、スポーツはレジリエンス、規律、そして勝ちも負けも品よく受け入れる姿勢も教えてくれます。"
  },
  {
    id: 85,
    category: "Leisure & Entertainment",
    categoryJp: "余暇・エンターテインメント",
    topic: "Streaming services and viewing habits.",
    topicJp: "ストリーミングサービスの影響について話してみよう。",
    exampleEn: "Streaming services like Netflix and Disney Plus have completely transformed how we consume entertainment. Instead of waiting for a weekly episode, we can now binge-watch entire series in one sitting. While this is incredibly convenient, I've noticed it can also make me feel less patient and less able to savor individual episodes. I think finding a balance between binge-watching and taking time to reflect on what you've watched leads to a more enjoyable viewing experience.",
    exampleJp: "NetflixやDisney+などのストリーミングサービスは、私たちのエンターテインメントの消費方法を完全に変えました。毎週のエピソードを待つ代わりに、シリーズ全体を一気見できるようになりました。これは非常に便利ですが、忍耐力が低下し個々のエピソードを味わう力が弱まっているとも感じています。一気見と視聴したものを振り返る時間のバランスを取ることが、より楽しい視聴体験につながると思います。"
  },
  {
    id: 86,
    category: "Language & Communication",
    categoryJp: "言語・コミュニケーション",
    topic: "Body language in conversation.",
    topicJp: "会話におけるボディランゲージについて話してみよう。",
    exampleEn: "Body language plays a surprisingly large role in how we communicate with others. Research suggests that a significant portion of our communication is nonverbal, including gestures, facial expressions, and posture. I've become more aware of my own body language in meetings, making sure to maintain eye contact and use open gestures. Understanding body language can also help you read situations better and respond more empathetically to the people around you.",
    exampleJp: "ボディランゲージは、他者とのコミュニケーションにおいて驚くほど大きな役割を果たしています。研究によると、コミュニケーションのかなりの部分はジェスチャー、表情、姿勢などの非言語です。会議では自分のボディランゲージをより意識するようになり、アイコンタクトを保ちオープンなジェスチャーを心がけています。ボディランゲージを理解することは、状況をより良く読み取り、周囲の人々により共感的に応答する助けにもなります。"
  },
  {
    id: 87,
    category: "Language & Communication",
    categoryJp: "言語・コミュニケーション",
    topic: "Benefits of learning a new language.",
    topicJp: "新しい言語を学ぶメリットについて話してみよう。",
    exampleEn: "Learning a new language offers benefits that go far beyond just being able to communicate with more people. Studies show it can improve your memory, enhance your problem-solving skills, and even delay the onset of age-related cognitive decline. When I started studying English seriously, I found that it also deepened my understanding of my own language and culture. I believe everyone should try learning at least one foreign language because it truly broadens your perspective on the world.",
    exampleJp: "新しい言語を学ぶことは、より多くの人とコミュニケーションできるようになるだけでなく、それをはるかに超えるメリットがあります。研究によると、記憶力の向上、問題解決能力の強化、さらには加齢に伴う認知機能の低下を遅らせる効果もあるそうです。英語を本格的に勉強し始めたとき、自分自身の言語や文化への理解も深まりました。少なくとも一つの外国語を学ぶことで、世界に対する視野が本当に広がるので、誰もが挑戦すべきだと思います。"
  },
  {
    id: 88,
    category: "Language & Communication",
    categoryJp: "言語・コミュニケーション",
    topic: "Cultural differences in communication.",
    topicJp: "異文化コミュニケーションの違いについて話してみよう。",
    exampleEn: "Cultural differences in communication can be fascinating but also lead to misunderstandings if we're not careful. In some cultures, direct communication is valued, while in others, people rely more on context and indirect expressions. For instance, in Japan, saying 'no' directly is often avoided in favor of more subtle refusals. I think being aware of these differences is crucial when working in international environments or traveling abroad.",
    exampleJp: "コミュニケーションにおける文化的違いは興味深いものですが、注意しないと誤解につながることもあります。直接的なコミュニケーションが重んじられる文化もあれば、文脈や間接的な表現に頼る文化もあります。例えば日本では、「いいえ」と直接言うことは避けられ、より婉曲的な断り方が好まれます。国際的な環境で働いたり海外を旅する際には、こうした違いを認識することが不可欠だと思います。"
  },
  {
    id: 89,
    category: "Language & Communication",
    categoryJp: "言語・コミュニケーション",
    topic: "Emojis and internet slang.",
    topicJp: "絵文字やネットスラングについて話してみよう。",
    exampleEn: "Emojis and internet slang have become an integral part of how we communicate online. They add emotion and nuance to text-based conversations that would otherwise feel flat. However, they can sometimes cause confusion, especially across different cultures or generations. I use emojis frequently in casual chats, but I'm careful to keep my professional communication more formal. I think the evolution of digital language is a fascinating reflection of how society is changing.",
    exampleJp: "絵文字やネットスラングは、オンラインコミュニケーションに不可欠な要素になっています。テキストベースの会話に感情やニュアンスを加え、そうでなければ平坦に感じる会話を豊かにします。しかし、異なる文化や世代間で混乱を招くこともあります。カジュアルなチャットでは頻繁に絵文字を使いますが、ビジネスのコミュニケーションではよりフォーマルさを心がけています。デジタル言語の進化は、社会がどう変化しているかを映す興味深い鏡だと思います。"
  },
  {
    id: 90,
    category: "Language & Communication",
    categoryJp: "言語・コミュニケーション",
    topic: "Language barriers abroad.",
    topicJp: "海外での言語の壁について話してみよう。",
    exampleEn: "Encountering language barriers when traveling abroad can be frustrating, but it can also lead to unexpectedly meaningful interactions. I remember trying to order food in a country where I didn't speak the language, and the restaurant owner and I ended up communicating through gestures and smiles. That experience taught me that human connection goes beyond words. Of course, learning a few basic phrases in the local language shows respect and can make your trip much smoother.",
    exampleJp: "海外旅行で言語の壁に直面するのはもどかしいですが、思いがけず意味のある交流につながることもあります。言葉が通じない国で食事を注文しようとした時、レストランのオーナーとジェスチャーと笑顔でコミュニケーションを取ったことを覚えています。あの経験から、人間のつながりは言葉を超えるものだと学びました。もちろん、現地の言葉の基本フレーズを少し学ぶことは敬意を示し、旅をよりスムーズにしてくれます。"
  },
  {
    id: 91,
    category: "Personal Relationships & Emotions",
    categoryJp: "人間関係・感情",
    topic: "Importance of empathy.",
    topicJp: "共感力の重要性について話してみよう。",
    exampleEn: "Empathy is one of the most important qualities a person can have because it allows us to understand and share the feelings of others. In both personal and professional relationships, being empathetic helps build trust and deeper connections. I try to practice empathy by actively listening to people without immediately jumping to solutions or judgments. I believe the world would be a much kinder place if more people made an effort to see things from others' perspectives.",
    exampleJp: "共感力は人が持てる最も重要な資質の一つで、他者の気持ちを理解し共有することを可能にします。個人的な関係でも仕事上の関係でも、共感的であることは信頼とより深いつながりの構築に役立ちます。すぐに解決策や判断に飛びつかず、積極的に人の話に耳を傾けることで共感力を実践するよう心がけています。より多くの人が他者の視点から物事を見る努力をすれば、世界はもっと優しい場所になると信じています。"
  },
  {
    id: 92,
    category: "Personal Relationships & Emotions",
    categoryJp: "人間関係・感情",
    topic: "Social support and mental health.",
    topicJp: "社会的支援とメンタルヘルスについて話してみよう。",
    exampleEn: "Having a strong social support network is incredibly important for mental health. When we go through difficult times, knowing that there are people who care about us can make all the difference. I've found that simply talking to a friend about my worries often makes them feel much more manageable. I think we need to normalize asking for help and checking in on each other regularly, rather than waiting until someone is in crisis.",
    exampleJp: "強い社会的支援ネットワークを持つことは、メンタルヘルスにとって非常に重要です。困難な時期を過ごす際、自分を気にかけてくれる人がいると知っているだけで大きな違いがあります。友人に心配事を話すだけで、はるかに対処しやすく感じることがよくあります。危機的状況になるまで待つのではなく、助けを求めることやお互いを定期的に気にかけることを当たり前にすべきだと思います。"
  },
  {
    id: 93,
    category: "Personal Relationships & Emotions",
    categoryJp: "人間関係・感情",
    topic: "Apologies and forgiveness.",
    topicJp: "謝罪と許しについて話してみよう。",
    exampleEn: "Learning how to apologize sincerely and how to forgive are both essential life skills. A genuine apology requires acknowledging what you did wrong and showing that you understand how it affected the other person. On the other hand, forgiveness doesn't mean forgetting; it means choosing to let go of resentment for your own peace of mind. I've learned that holding onto grudges only hurts yourself in the long run, and that both apologizing and forgiving take real courage.",
    exampleJp: "心から謝罪する方法と許す方法を学ぶことは、どちらも不可欠なライフスキルです。本当の謝罪には、自分が何を間違えたかを認め、それが相手にどう影響したかを理解していると示すことが必要です。一方、許しとは忘れることではなく、自分自身の心の平安のために怨みを手放す選択をすることです。恨みを抱え続けることは長期的には自分を傷つけるだけであり、謝罪も許しも本当の勇気が必要だと学びました。"
  },
  {
    id: 94,
    category: "Personal Relationships & Emotions",
    categoryJp: "人間関係・感情",
    topic: "Social media and romantic relationships.",
    topicJp: "SNSと恋愛について話してみよう。",
    exampleEn: "Social media has changed the landscape of romantic relationships in many ways, from how people meet to how they communicate. Dating apps have made it easier to connect with potential partners, but they can also create a culture of disposability. Couples often face pressure to present a perfect image of their relationship online, which doesn't always reflect reality. I think it's important for couples to prioritize real-life communication over their online presence.",
    exampleJp: "SNSは、出会い方からコミュニケーション方法まで、恋愛の風景を様々な面で変えました。マッチングアプリはパートナー候補とのつながりを容易にしましたが、使い捨て的な文化を生む面もあります。カップルはオンラインで完璧な関係像を見せるプレッシャーに直面することが多く、それは必ずしも現実を反映していません。オンラインでの見せ方よりも、実生活でのコミュニケーションを優先することが大切だと思います。"
  },
  {
    id: 95,
    category: "Personal Relationships & Emotions",
    categoryJp: "人間関係・感情",
    topic: "Living with roommates.",
    topicJp: "ルームメイトとの生活について話してみよう。",
    exampleEn: "Living with roommates can be a great experience if you set clear expectations from the beginning. It teaches you important skills like compromise, communication, and respecting shared spaces. I lived with roommates during college, and while there were occasional disagreements about chores or noise, we always managed to work things out through honest conversation. I'd recommend it to anyone because it helps you learn how to coexist with people who have different habits and lifestyles.",
    exampleJp: "ルームメイトとの生活は、最初に明確な期待値を設定すれば素晴らしい経験になり得ます。妥協、コミュニケーション、共有スペースの尊重など重要なスキルが身につきます。大学時代にルームメイトと暮らしていましたが、家事や騒音について時折意見が食い違っても、率直な会話で常に解決できました。異なる習慣やライフスタイルを持つ人と共存する方法を学べるので、誰にでもおすすめしたいです。"
  },
  {
    id: 96,
    category: "Motivational & Inspirational",
    categoryJp: "モチベーション・インスピレーション",
    topic: "A motivational quote you live by.",
    topicJp: "大切にしている名言について話してみよう。",
    exampleEn: "One quote that has always stayed with me is 'The only way to do great work is to love what you do' by Steve Jobs. It reminds me that passion is the foundation of excellence, and without it, work becomes just a means to an end. Whenever I feel stuck or unmotivated, I come back to this idea and ask myself whether I'm truly aligned with what matters to me. I think finding meaning in your work, no matter how small, makes all the difference in your daily life.",
    exampleJp: "ずっと心に留めている名言は、スティーブ・ジョブズの「素晴らしい仕事をする唯一の方法は、自分のしていることを愛すること」です。情熱は卓越の基盤であり、それがなければ仕事は単なる手段に過ぎなくなると気づかせてくれます。行き詰まったりモチベーションが下がったりした時、この考えに立ち返り、本当に自分にとって大切なことと一致しているか問いかけます。どんなに小さくても仕事に意味を見出すことが、日々の生活に大きな違いをもたらすと思います。"
  },
  {
    id: 97,
    category: "Motivational & Inspirational",
    categoryJp: "モチベーション・インスピレーション",
    topic: "Importance of resilience.",
    topicJp: "レジリエンスの重要性について話してみよう。",
    exampleEn: "Resilience is the ability to bounce back from setbacks, and I believe it's one of the most valuable traits a person can develop. Life is full of unexpected challenges, and how we respond to them defines who we become. I've had moments where things didn't go as planned, but each time I picked myself up, I came out stronger and more confident. Building resilience isn't about avoiding difficulty; it's about learning to navigate it with grace and determination.",
    exampleJp: "レジリエンスとは挫折から立ち直る力のことで、人が身につけられる最も価値ある特性の一つだと思います。人生は予期せぬ挑戦に満ちており、それにどう応じるかが自分をどんな人間にするかを決めます。計画通りにいかない時もありましたが、立ち上がるたびにより強く自信を持てるようになりました。レジリエンスを築くとは困難を避けることではなく、品位と決意をもって乗り越える方法を学ぶことです。"
  },
  {
    id: 98,
    category: "Motivational & Inspirational",
    categoryJp: "モチベーション・インスピレーション",
    topic: "How gratitude improves your outlook.",
    topicJp: "感謝の気持ちの効果について話してみよう。",
    exampleEn: "Practicing gratitude has genuinely improved my outlook on life. When I started writing down three things I'm grateful for each day, I noticed a shift in how I perceive challenges and setbacks. Instead of focusing on what's going wrong, I began to appreciate the good things that I often took for granted. Research also supports the idea that gratitude can reduce stress, improve sleep, and strengthen relationships. It's a simple habit with surprisingly powerful effects.",
    exampleJp: "感謝を実践することで、人生に対する見方が本当に改善されました。毎日感謝していることを3つ書き留め始めたところ、課題や挫折の捉え方に変化が生まれました。うまくいかないことに焦点を当てる代わりに、当たり前だと思っていた良いことに感謝するようになりました。感謝がストレスを軽減し、睡眠を改善し、人間関係を強化するという研究結果もあります。シンプルな習慣ですが、驚くほど強力な効果があります。"
  },
  {
    id: 99,
    category: "Motivational & Inspirational",
    categoryJp: "モチベーション・インスピレーション",
    topic: "Setting priorities.",
    topicJp: "優先順位の設定について話してみよう。",
    exampleEn: "Learning to set priorities has been a game-changer for my productivity and peace of mind. When everything feels urgent, it's easy to become overwhelmed and accomplish very little. I've found that identifying the two or three most important tasks each day and focusing on those first makes a huge difference. It's also important to recognize that saying 'no' to less important things is not selfish; it's a way of protecting your time and energy for what truly matters.",
    exampleJp: "優先順位の設定を学ぶことは、生産性と心の平穏にとって大きな転機でした。すべてが緊急に感じられると、圧倒されてほとんど何も達成できなくなりがちです。毎日最も重要な2つか3つのタスクを特定し、それに集中することで大きな違いが生まれることがわかりました。それほど重要でないことに「いいえ」と言うのはわがままではなく、本当に大切なことのために時間とエネルギーを守る方法だと認識することも大切です。"
  },
  {
    id: 100,
    category: "Miscellaneous",
    categoryJp: "その他",
    topic: "Maintaining a positive mindset.",
    topicJp: "前向きな気持ちを保つことについて話してみよう。",
    exampleEn: "Maintaining a positive mindset doesn't mean ignoring problems or pretending everything is fine. It means choosing to focus on solutions rather than dwelling on negativity. I've found that surrounding myself with supportive people, staying physically active, and practicing mindfulness all help me stay optimistic even during tough times. A positive mindset is like a muscle; the more you exercise it, the stronger it becomes and the easier it is to face life's challenges.",
    exampleJp: "前向きな気持ちを保つとは、問題を無視したりすべてがうまくいっているふりをすることではありません。否定的なことにとらわれるのではなく、解決策に集中する選択をすることです。支えてくれる人々に囲まれ、体を動かし、マインドフルネスを実践することで、困難な時でも楽観的でいられると感じています。ポジティブなマインドセットは筋肉のようなもので、鍛えれば鍛えるほど強くなり、人生の課題に立ち向かうことが容易になります。"
  }
];
