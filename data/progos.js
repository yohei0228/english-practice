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
    { text: "To stay competitive, we must balance short-term results with long-term investment." },
    { text: "Once we align on the goal, the rest of the plan becomes much easier to build." },
    { text: "Our priority this quarter is to improve retention rather than chase new users." },
    { text: "Please review the draft and flag anything that looks unclear before Friday." }
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
      model: "In my opinion, the most important skill for a leader is communication, for two reasons. First, a leader has to align many people toward one goal. For example, when I led a project, sharing the 'why' clearly kept everyone moving in the same direction. Second, clear communication prevents small misunderstandings from becoming big problems. That's why I believe communication is the most important skill for a leader." },
    { topic: "Talk about whether a company should focus more on new customers or existing customers.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, we should focus more on existing customers, for two reasons. First, retention is usually cheaper than acquisition. For example, in my team, repeat buyers cost far less to reach than new ones. Second, loyal customers tend to spend more over time. That's why I believe we should prioritize keeping the customers we already have." },
    { topic: "Talk about the role of data in making business decisions.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, data should guide most business decisions, for two reasons. First, data shows what is really happening, not just what we assume. For example, we once found a hidden bottleneck only after looking at the numbers. Second, it lets us measure whether a change actually worked. That's why I believe we should rely on data, while still leaving room for judgment." },
    { topic: "Talk about whether remote teams can be as effective as in-person teams.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, remote teams can be just as effective, for two reasons. First, clear written communication keeps everyone aligned. For example, my team runs smoothly with short daily updates. Second, remote work lets us hire skilled people anywhere. That's why I believe remote teams can match in-person teams, as long as the process is solid." },
    { topic: "Talk about how a company should respond when a product launch fails.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, the first step is to stay calm and learn from it, for two reasons. First, a quick review shows what went wrong. For example, after one launch missed its target, we found the issue in the onboarding flow. Second, fixing the root cause prevents the same mistake. That's why I believe a failed launch should be treated as useful feedback, not just a loss." },
    { topic: "Talk about whether companies should invest more in new technology or in their people.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, companies should invest in their people first, for two reasons. First, skilled people can make the most of any tool. For example, new software only helped us after the team was trained well. Second, strong people stay and grow the business. That's why I believe investing in people gives a more sustainable return." },
    { topic: "Talk about the best way to give feedback to a teammate.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, the best feedback is specific and timely, for two reasons. First, a concrete example makes it easy to act on. For example, I point to one moment rather than a vague impression. Second, giving it early stops small issues from growing. That's why I believe feedback should be clear, kind, and given soon." },
    { topic: "Talk about how you decide what to work on when everything feels urgent.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, you should step back and prioritize by impact, for two reasons. First, not everything urgent is important. For example, I focus first on the task that moves our main goal. Second, a clear order keeps the team calm. That's why I believe we should rank work by impact, even when everything feels urgent." },
    { topic: "Talk about whether it is better to launch a product quickly or to wait until it is perfect.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, it is usually better to launch quickly, for two reasons. First, real users teach you more than any plan. For example, our first version was rough, but the feedback shaped a much better product. Second, waiting too long lets competitors move first. That's why I believe we should launch early and improve step by step, as long as the basics are solid." },
    { topic: "Talk about what makes a team work well together.",
      points: ["Your opinion", "Two reasons", "One example"],
      model: "In my opinion, trust is what makes a team work well, for two reasons. First, when people trust each other, they share problems early. For example, my team flags risks before they grow. Second, trust lets members disagree without taking it personally. That's why I believe building trust is the foundation of a strong team." }
  ],

  graph: [
    { title: "Monthly GMV of two categories (¥ billion)",
      data: "Electronics: 40 → 44 → 50 → 58 → 65 → 72  (Jan–Jun, rising)\nApparel:     60 → 58 → 55 → 52 → 50 → 48  (Jan–Jun, falling)",
      points: ["Overview", "Overall trend", "Comparison / crossover point", "Implication"],
      model: "This graph shows the GMV of two categories from January to June. Overall, Electronics increased steadily, while Apparel declined. Electronics rose from 40 to 72 billion yen, whereas Apparel fell from 60 to 48 billion yen. As a result, Electronics overtook Apparel in May. This suggests that we should focus more on electronics to grow our overall GMV." },
    { title: "Monthly active users of a new feature (millions)",
      data: "Jan 1.0 → Feb 1.8 → Mar 3.2 → Apr 5.0 (peak) → May 4.2 → Jun 3.5",
      points: ["Overview", "Rise → peak → decline", "Peak value and timing", "Implication"],
      model: "This graph shows the monthly active users of a new feature from January to June. Overall, the MAU rose sharply from January to March and reached a peak of 5 million in April, but it gradually declined from May to June, reaching 3.5 million in June. This suggests that we need to strengthen our initiative to keep users active after the launch." },
    { title: "Quarterly revenue and cost (¥ million)",
      data: "Revenue: 100 → 130 → 160 → 200  (Q1–Q4)\nCost:     90 → 100 → 115 → 130  (Q1–Q4)",
      points: ["Overview", "Both trends", "Gap / margin", "Implication"],
      model: "This graph shows quarterly revenue and cost from Q1 to Q4. Overall, both rose, but revenue grew much faster than cost. Revenue climbed from 100 to 200 million yen, while cost rose only from 90 to 130. As a result, the margin widened steadily. This suggests that the business is becoming more profitable as it scales." },
    { title: "Customer satisfaction score by month (out of 100)",
      data: "Jan 72 → Feb 75 → Mar 74 → Apr 80 → May 83 → Jun 85",
      points: ["Overview", "Overall trend", "Notable dip", "Implication"],
      model: "This graph shows the customer satisfaction score from January to June. Overall, the score rose steadily from 72 to 85. There was a small dip in March, but it recovered quickly the next month. This suggests that our service quality is improving, though we should find out what caused the March dip." }
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
      ] },
    { scenario: "You are a sales manager. A client likes your proposal but says the price is over their budget.",
      turns: [
        { alex: "We love the proposal, but the price is about 20% over our budget. Can you match it?",
          hint: "受け → 制約を示す → 代替案を出す",
          model: "Thanks, I'm glad you like the proposal. I see there's a gap with your budget. I'm afraid I can't go that low on price, but I could adjust the scope so the cost fits. Would that work for you?" },
        { alex: "Hmm, we'd really like the full scope if possible. Is there any flexibility?",
          hint: "譲歩しつつ条件をつける",
          model: "I understand. Having said that, I could offer a small discount if you commit to a one-year contract. As long as the term is longer, I have more room to move on price." },
        { alex: "A one-year commitment could work for us. Let's explore that.",
          hint: "確認 → 次の一手",
          model: "Great. Just to confirm, you're open to a one-year term in exchange for a better rate. Let me put the numbers together and send them over today." }
      ] },
    { scenario: "You are a team lead. A teammate missed a deadline that delayed the launch.",
      turns: [
        { alex: "I'm really sorry — I didn't finish the report on time and it held up the launch.",
          hint: "受け止め → 責めずに事実確認",
          model: "Thanks for being upfront about it. I see it caused a delay. Before we move on, can you walk me through what got in the way?" },
        { alex: "I underestimated how long the data work would take, and I didn't ask for help.",
          hint: "学びに変換 → 今後の合意",
          model: "That makes sense, and I appreciate your honesty. Going forward, it would help if you could flag a risk early, as soon as a task starts slipping. That way we can adjust together." },
        { alex: "Understood. I'll raise a flag much sooner next time.",
          hint: "前向きに締める",
          model: "Great. Let's also add a quick mid-point check so nothing piles up. Thanks for owning this." }
      ] }
  ]
};
