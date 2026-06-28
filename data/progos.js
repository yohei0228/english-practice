// PROGOS B2 practice data (self-authored format cards + mock prompts).
// 型は自作（progos-b2-templates 由来）。Part順は本番固定: Interview→ReadAloud→Presentation→Graph→RolePlay.
const PROGOS = {
  parts: [
    { id: 1, key: "interview",    title: "Part 1: Interview",    icon: "&#127908;", prep: 0,  speak: 20,
      format: "一問一答。各20秒で即答。短く2〜3文。深く考えず口を動かすのが目的。", hasModel: false },
    { id: 2, key: "readaloud",    title: "Part 2: Read Aloud",   icon: "&#128483;", prep: 0,  speak: 15,
      format: "表示文を正確な発音とイントネーションで音読。Listenで手本を聞いてから読む。", hasModel: false },
    { id: 3, key: "presentation", title: "Part 3: Presentation", icon: "&#128221;", prep: 40, speak: 60,
      format: "結論→理由2つ(各々に例)→結論。In my opinion … First … For example … That's why …", hasModel: true },
    { id: 4, key: "graph",        title: "Part 4: Graph",        icon: "&#128202;", prep: 40, speak: 60,
      format: "概要→全体傾向→細部(数字・ピーク/逆転)→含意。数字を1つ引き、目立つ点を名指す。", hasModel: true },
    { id: 5, key: "roleplay",     title: "Part 5: Role Play",    icon: "&#128172;", prep: 40, speak: 30,
      format: "各ターン 受け→本体→条件/次の一手。I see … Could you …? As long as … Having said that …", hasModel: true }
  ],

  interview: [
    { prompt: "What do you do, and what are you mainly working on these days?" },
    { prompt: "How do you usually spend your time off?" },
    { prompt: "Tell me about a project you enjoyed recently. Why did you enjoy it?" },
    { prompt: "What is the most challenging part of your job?" },
    { prompt: "How do you keep yourself motivated at work?" },
    { prompt: "What kind of teammate do you enjoy working with?" },
    { prompt: "What new skill would you like to learn this year?" },
    { prompt: "How do you usually start your morning?" },
    { prompt: "What do you like about the city you live in?" },
    { prompt: "What is something you are looking forward to next month?" }
  ],

  readaloud: [
    { text: "Our customer service team is responsible for maintaining high satisfaction across all regions." },
    { text: "Although the number of inquiries increased significantly, our response time remained stable." },
    { text: "We are committed to delivering a reliable and trustworthy experience for every customer." },
    { text: "The new feature was launched last week, and early feedback has been largely positive." },
    { text: "To stay competitive, we must balance short-term results with long-term investment." }
  ],

  presentation: [
    { topic: "Talk about whether companies should let employees work from home.",
      points: ["Your opinion (for or against)", "Two reasons to support your opinion", "One example from your own experience"],
      model: "In my opinion, companies should let employees work from home, for two reasons. First, employees want options on how and where they work. For example, in my team, some members focus much better at home. Second, working from home gives companies an advantage in hiring good people from all over the world. As long as they have a stable connection, location doesn't matter. That's why I believe companies should let employees work from home." },
    { topic: "Talk about whether it is better to work in a large company or a small startup.",
      points: ["Your opinion", "Two reasons", "One example from your own experience"],
      model: "In my opinion, working at a startup is better than working at a large company, for two reasons. First, a startup gives employees many opportunities. For example, a young employee can lead a new service launch in a leadership role. Second, they can also benefit from a rising stock price if the business succeeds. Of course, nobody can predict whether a startup will succeed, but it's worth taking that risk. That's why I believe working at a startup is better." },
    { topic: "Talk about the most important skill for a leader.",
      points: ["The skill you choose", "Two reasons why it matters", "One example"],
      model: "In my opinion, the most important skill for a leader is communication, for two reasons. First, a leader has to align many people toward one goal. For example, when I led a project, sharing the 'why' clearly kept everyone moving in the same direction. Second, clear communication prevents small misunderstandings from becoming big problems. That's why I believe communication is the most important skill for a leader." }
  ],

  graph: [
    { title: "Monthly GMV of two categories (¥ billion)",
      data: "Electronics: 40 → 44 → 50 → 58 → 65 → 72  (Jan–Jun, rising)\nApparel:     60 → 58 → 55 → 52 → 50 → 48  (Jan–Jun, falling)",
      points: ["Overview", "Overall trend", "Comparison / crossover point", "Implication"],
      model: "This graph shows the GMV of two categories from January to June. Overall, Electronics increased steadily, while Apparel declined. Electronics rose from 40 to 72 billion yen, whereas Apparel fell from 60 to 48 billion yen. As a result, Electronics overtook Apparel in May. This suggests that we should focus more on electronics to grow our overall GMV." },
    { title: "Monthly active users of a new feature (millions)",
      data: "Jan 1.0 → Feb 1.8 → Mar 3.2 → Apr 5.0 (peak) → May 4.2 → Jun 3.5",
      points: ["Overview", "Rise → peak → decline", "Peak value and timing", "Implication"],
      model: "This graph shows the monthly active users of a new feature from January to June. Overall, the MAU rose sharply from January to March and reached a peak of 5 million in April, but it gradually declined from May to June, reaching 3.5 million in June. This suggests that we need to strengthen our initiative to keep users active after the launch." }
  ],

  roleplay: [
    { scenario: "You are a manager. Your team member Alex asks to take three days off next week, but the team is very busy with a product launch.",
      turns: [
        { alex: "Hi, I'd like to take three days off next week — Wednesday to Friday. Is that okay?",
          hint: "受け → 状況 → 条件/代案 → ボールを返す",
          model: "Thanks for reaching out. I see you'd like to take three days off next week. As you know, we're facing a product launch then, so it would be helpful if you could take your days off the following week instead. Would that work for you?" },
        { alex: "But I already booked a trip with my family for those days. Is there any way to make it work?",
          hint: "譲歩しつつ条件 → 落とし所。If(もし難しければ)/As long asを使い分け",
          model: "I see your point. Having said that, I was wondering if you could complete your key tasks this week, so that other members can proceed smoothly. If that turns out to be difficult, it would be helpful if you could stay reachable in case we need your support." },
        { alex: "Okay, that sounds fair. I'll finish my main tasks before I leave and stay reachable on chat.",
          hint: "感謝で受け → 確認 → 送り出す",
          model: "That sounds great. Just to confirm, you'll wrap up your main tasks before Wednesday and stay reachable on chat. Please reach out to me if you need any support. Enjoy your trip!" }
      ] }
  ]
};
