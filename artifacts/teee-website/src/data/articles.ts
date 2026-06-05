export type Article = {
  slug: string;
  num: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: Section[];
};

export type Section = {
  heading?: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "the-peak-end-rule",
    num: "01",
    category: "EX Method",
    title: "The Peak-End Rule: Why the Last Day of Onboarding Matters More Than the First",
    excerpt: "Kahneman's peak-end rule says people judge experiences by their peak and their end — not the average. Here's how that changes everything about employee journey design.",
    readTime: "7 min read",
    date: "May 2025",
    body: [
      {
        paragraphs: [
          "Daniel Kahneman's Nobel Prize-winning research on the 'peak-end rule' revealed something counterintuitive about how humans remember experiences: we don't recall the average of every moment. We recall two things — the most intense moment (the peak) and the final moment (the end). Everything in between fades.",
          "This has profound consequences for employee experience design. And almost no organization applies it."
        ]
      },
      {
        heading: "The onboarding paradox",
        paragraphs: [
          "Most companies obsess over day one of onboarding. The welcome package. The office tour. The CEO town hall. It's the highest-effort moment in the new hire journey — and research suggests it's not the one that matters most.",
          "What matters is the end of onboarding. The moment the new employee transitions from 'new hire' to 'full contributor.' Is that moment acknowledged? Celebrated? Or does it just... quietly happen on a Tuesday when nobody notices?",
          "Ask yourself: when was the last time your organization designed the last day of onboarding with the same intention as the first?"
        ]
      },
      {
        heading: "Peak matters too — and you're probably designing the wrong one",
        paragraphs: [
          "The 'peak' in the peak-end rule is the most emotionally intense moment — positive or negative. In onboarding, the negative peak is almost always the moment a new hire realizes something was misrepresented during hiring. The role isn't what was described. The team is dysfunctional. The manager doesn't actually have time for them.",
          "These negative peaks don't disappear. They crystallize. They become the story the employee tells — internally and eventually externally.",
          "Smart EX design flips this: intentionally engineer a positive peak. A meaningful early win. A surprising moment of inclusion. A one-on-one conversation where someone senior asks what they need and actually acts on the answer."
        ]
      },
      {
        heading: "What this means for your journey design",
        paragraphs: [
          "Stop auditing every touchpoint equally. Start by identifying: what is the emotional peak of this lifecycle stage, and is it positive or negative? What is the final moment, and does it land with intention or just disappear?",
          "In our EX Diagnostic work, we consistently find that organizations spend 80% of their onboarding energy on the beginning and almost none on the end. The exit survey confirms it — new hires who leave in the first 12 months almost always describe the same inflection point: the moment they realized the job wasn't the job.",
          "You can't fix what you don't measure. But you also can't fix what you haven't designed. The peak-end rule tells you where to aim."
        ]
      },
      {
        heading: "The practical playbook",
        paragraphs: [
          "Map your onboarding journey and mark the current peak (ask recent joiners: 'what moment stands out most?'). Map the current end (ask: 'what was the last structured touchpoint before you felt fully integrated?'). Then redesign both with intention — not efficiency.",
          "The science is clear. The moments that shape memory are not the most frequent ones. They're the most intense and the most recent. Design for those."
        ]
      }
    ]
  },
  {
    slug: "exit-interview-data",
    num: "02",
    category: "Diagnostics",
    title: "What Your Exit Interview Data Is Actually Telling You (And What It's Not)",
    excerpt: "Exit interviews are the most misread signal in HR. The truth is in what people don't say — and when they stopped saying anything at all.",
    readTime: "5 min read",
    date: "April 2025",
    body: [
      {
        paragraphs: [
          "Exit interview data is the most widely collected and most badly misread signal in HR. Every CHRO has a slide deck of exit themes. Almost none of them contain the actual truth of why people left.",
          "Here's why — and what to do instead."
        ]
      },
      {
        heading: "The social desirability problem",
        paragraphs: [
          "People leaving jobs are still embedded in professional networks. Their ex-manager might be a reference. Their ex-colleague might be a hiring connection. Exit interviews are conducted by HR — often the same HR team that reports to the same leadership that created the problem. The incentive to be honest is low. The incentive to be diplomatic is high.",
          "So people say 'a better opportunity' when they mean 'my manager made me feel invisible.' They say 'career growth' when they mean 'I asked for a promotion three times and was told to wait.'",
          "Exit interview data doesn't tell you why people left. It tells you what people were comfortable saying to someone with institutional ties."
        ]
      },
      {
        heading: "The silence is the signal",
        paragraphs: [
          "The most important data in exit interviews is often absent. When did the employee stop raising concerns in their 1:1s? When did they stop responding to engagement pulses? When did they go quiet in team meetings?",
          "In our Diagnostic work, we consistently find that the decision to leave was made an average of 3-6 months before the resignation. The exit interview captures the announcement, not the cause.",
          "The real diagnostic question isn't 'why are you leaving?' It's 'when did you stop believing it would get better?'"
        ]
      },
      {
        heading: "What actually works",
        paragraphs: [
          "Triangulate. Cross-reference exit themes with: 1) engagement pulse data from 6-12 months prior, 2) manager-level attrition patterns (are certain managers losing talent disproportionately?), 3) lifecycle stage analysis (are people leaving at 18 months? 36? Why that stage?).",
          "Use stay interviews — conversations with high-performing employees who are still there, asking what would make them leave. Stay interviews are rare, uncomfortable, and vastly more predictive than exit data.",
          "Finally, treat exit interview responses as leads, not findings. Each 'better opportunity' hides a specific story worth investigating with a follow-up survey sent 3-6 months after departure, when the person is safely outside the network and more willing to be direct."
        ]
      },
      {
        heading: "The diagnostic shift",
        paragraphs: [
          "The frame to shift: stop treating exit data as the answer and start treating it as the beginning of the investigation. What it tells you is where to look. What you find when you look is what matters.",
          "Most organizations never make that second move. The slide deck becomes the end of the story instead of the start of one."
        ]
      }
    ]
  },
  {
    slug: "journey-mapping-not-workshop",
    num: "03",
    category: "EX Method",
    title: "Journey Mapping Is Not a Workshop Exercise",
    excerpt: "Most journey maps end up on a wall and die there. Here's how to make one that actually drives decisions.",
    readTime: "6 min read",
    date: "April 2025",
    body: [
      {
        paragraphs: [
          "The employee journey map is HR's most frequently created and least frequently used artifact. Organizations spend two days in a workshop with sticky notes, produce a beautiful wall-sized visual of the employee lifecycle, photograph it, put it in a deck, and then... nothing changes.",
          "The map dies because it was never designed to live."
        ]
      },
      {
        heading: "Three reasons journey maps fail",
        paragraphs: [
          "First: they're built on opinion, not evidence. Workshop participants reconstruct what they think the employee experience is — from memory, from their own experience, from the loudest voices in the room. The resulting map reflects the organization's self-image, not employees' lived reality.",
          "Second: they treat all moments equally. A journey map that gives equal visual weight to 'receives laptop' and 'has first performance conversation' is not a diagnostic tool. It's a process inventory. Useful for auditing; useless for prioritizing.",
          "Third: they have no owner. The map comes out of the workshop, gets presented to leadership, and then sits in a shared drive. Nobody is accountable for closing the gaps it reveals because it wasn't built to produce specific, owned actions."
        ]
      },
      {
        heading: "What a working journey map looks like",
        paragraphs: [
          "A working journey map is built on signal — not opinion. It combines qualitative interviews (what do employees say about this moment?), quantitative pulse data (how do they rate it?), and behavioral traces (what actually happens vs. what's supposed to happen?).",
          "It weights moments by what the science says shapes memory: emotionally intense moments and final moments in each lifecycle stage get more diagnostic attention than routine touchpoints.",
          "It is specific to a persona. A journey map for a first-time manager in a regional office looks completely different from one for a senior individual contributor at headquarters. Averaging them together produces a map nobody recognizes as their own experience."
        ]
      },
      {
        heading: "The heat-map is the product",
        paragraphs: [
          "The output of a working journey map isn't a flowchart. It's a heat-map — a grid of lifecycle moments crossed with experience drivers (clarity, connection, growth, fairness, wellbeing), color-coded by sentiment. Red squares are where experience breaks down. Green squares are where it holds. The pattern tells you where to intervene.",
          "Critically: the heat-map has named owners for each red square, and a defined baseline so you can measure whether interventions actually move the needle."
        ]
      },
      {
        heading: "From artifact to operating rhythm",
        paragraphs: [
          "The final step most organizations skip: the journey map needs to be a living document, not a workshop output. It gets updated as signal comes in. It gets reviewed quarterly by someone with authority to act on it. It informs every HR initiative before launch, not after.",
          "When a journey map is built on evidence, weighted by what matters, specific to a real persona, and owned by someone with authority — it stops being a wall decoration and starts being how you run EX."
        ]
      }
    ]
  },
  {
    slug: "triangulation-beats-survey",
    num: "04",
    category: "Data & Evidence",
    title: "Why Triangulation Beats Any Single Survey Score",
    excerpt: "One number from one survey is an opinion. Three independent signals pointing the same way is evidence. The difference matters.",
    readTime: "4 min read",
    date: "March 2025",
    body: [
      {
        paragraphs: [
          "The engagement score is the most trusted number in HR — and one of the least reliable. Not because engagement doesn't matter, but because a single number from a single source isn't evidence. It's a data point. There's a difference, and it matters enormously when you're trying to act on it."
        ]
      },
      {
        heading: "The single-source problem",
        paragraphs: [
          "Survey scores are subject to response bias (who responds and why), timing bias (a bad week inflates negative responses), social desirability effects (people say what they think is expected), and Hawthorne effects (being observed changes behavior). Any one of these can move your score by several points without any actual change in employee experience.",
          "When leadership sees a 3-point drop in engagement, they call an all-hands. When it goes up 4 points, they celebrate. But without triangulation, neither signal means much. You don't know if the change is real."
        ]
      },
      {
        heading: "What triangulation means in practice",
        paragraphs: [
          "Triangulation means using three independent sources of signal and only trusting a finding when at least two of them agree. In EX work, those three sources are typically:",
          "1. Quantitative survey data (engagement pulses, lifecycle surveys, manager effectiveness ratings)",
          "2. Qualitative signal (journey interviews, focus groups, open-text responses analyzed for theme)",
          "3. Behavioral traces (turnover data, internal mobility rates, absence patterns, promotion velocity by demographic)",
          "When all three point the same direction, you have a finding worth acting on. When only one does, you have a hypothesis worth investigating."
        ]
      },
      {
        heading: "The practical threshold",
        paragraphs: [
          "In our Diagnostic work, we apply a simple rule: we don't put a finding in a client-facing report until at least two independent sources confirm it. This slows the work down slightly and prevents us from chasing noise. It also means that when we say 'there is an experience gap in onboarding for junior hires,' we can show the survey data that shows it, the interview themes that describe it, and the 18-month attrition rate that proves the cost of it.",
          "That kind of evidence is defensible in front of a board. A single survey score is not."
        ]
      },
      {
        heading: "Start with what you have",
        paragraphs: [
          "Most organizations already have two of the three sources. They have engagement survey data. They have attrition data. What they often lack is the qualitative layer — the human voices that explain what the numbers are showing. Adding even a small number of structured journey interviews (15-20 per persona) transforms a pattern into a story.",
          "Stories move people. Numbers frame the problem. The combination produces change."
        ]
      }
    ]
  },
  {
    slug: "manager-moment-problem",
    num: "05",
    category: "People Science",
    title: "The Manager Moment Problem: Why Culture Breaks at the First Line",
    excerpt: "Every culture initiative eventually collides with the manager layer. Most fail there. Here's why — and what to do about it.",
    readTime: "8 min read",
    date: "March 2025",
    body: [
      {
        paragraphs: [
          "Every culture initiative runs on the same optimistic assumption: if leadership sets the tone and HR designs the programs, the culture will trickle down to employees. In theory, it's reasonable. In practice, it collides with the manager layer — and that's where most culture change dies.",
          "The manager layer is where organizational culture becomes personal experience. And most organizations have almost no visibility into what happens there."
        ]
      },
      {
        heading: "Why managers are the culture",
        paragraphs: [
          "Gallup's research is clear: a manager explains 70% of the variance in team engagement. Not company values. Not HR programs. Not office perks. The specific human being who sets your objectives, gives you feedback (or doesn't), advocates (or doesn't) for your development, and shows up (or doesn't) for a real 1:1.",
          "This means that in most organizations, culture isn't one thing. It's as many things as there are managers — each running their own micro-culture, shaped by their habits, insecurities, workload, and the invisible norms of their specific team.",
          "Leadership's culture and an employee's lived experience can be entirely different realities."
        ]
      },
      {
        heading: "The invisibility problem",
        paragraphs: [
          "The manager layer is almost entirely invisible in most EX measurement approaches. Engagement surveys aggregate scores to the team level, protecting manager anonymity in the name of safety. Exit interviews politely blame 'better opportunities.' Stay interviews rarely happen.",
          "The result is that underperforming managers — the ones creating the toxic micro-cultures that drive your best people out — often go undetected for years. The signal is there in attrition data, if someone is looking at it by team. It's there in promotion rates and internal transfer requests. But rarely does anyone connect those dots."
        ]
      },
      {
        heading: "Three interventions that actually work",
        paragraphs: [
          "First: make manager effectiveness measurable. Upward feedback surveys, run rigorously and anonymously, give managers data about their own impact. Most managers don't know they're the problem. They need the mirror.",
          "Second: create the manager as a persona in your journey map. The manager experience — how clarity, support, and development feel from their seat — is often the worst in the organization. Burned-out managers create burned-out teams. Fix upstream.",
          "Third: redesign the 1:1. The 1:1 is the highest-leverage manager behavior in the employee experience, and most organizations give managers zero training on how to run one. A structured 1:1 protocol — what to ask, how to listen, how to follow up — produces measurable improvement in team engagement within one quarter."
        ]
      },
      {
        heading: "The uncomfortable truth",
        paragraphs: [
          "Some managers won't change. The hardest part of EX work at the manager layer is distinguishing between capability gaps (fixable with support and training) and will gaps (not fixable, requiring different decisions).",
          "Organizations that protect underperforming managers for reasons of tenure, relationships, or conflict avoidance are subsidizing the exit of high performers. The data always shows this. The courage to act on it is what separates high-performance cultures from good-enough ones."
        ]
      }
    ]
  },
  {
    slug: "how-to-close-the-loop",
    num: "06",
    category: "Transformation",
    title: "How to Close the Loop: What HR Leaders Get Wrong About Feedback",
    excerpt: "Most feedback loops close for leadership, not for employees. That's the exact moment trust disappears.",
    readTime: "5 min read",
    date: "February 2025",
    body: [
      {
        paragraphs: [
          "There is one question employees ask after every engagement survey, every town hall listening session, every pulse check, every focus group: 'What happened with what we said?'",
          "In most organizations, the answer is silence — or worse, a vague 'leadership is reviewing the feedback' that never produces a visible outcome. This is how trust in HR listening programs dies, one unanswered question at a time."
        ]
      },
      {
        heading: "The asymmetric loop",
        paragraphs: [
          "Most feedback loops close for leadership. The results get analyzed, presented to the executive team, incorporated into HR planning. Leadership is fully in the loop. Employees — the people who provided the feedback, who took 20 minutes out of a busy day to answer honestly — hear nothing.",
          "This asymmetry communicates something clearly, even if unintentionally: your input was useful data for us. It wasn't a conversation. Thank you for participating.",
          "Every time this happens, response rates drop. Willingness to be honest erodes. The next survey produces increasingly diplomatic answers because employees have learned that honesty doesn't lead anywhere."
        ]
      },
      {
        heading: "What closing the loop actually means",
        paragraphs: [
          "Closing the loop is not: 'Thank you for participating in our annual engagement survey. We heard you and are committed to improvement.' That is not closing a loop. That is sending a corporate non-answer.",
          "Closing the loop means: within 6-8 weeks of collecting feedback, every person who participated receives a specific communication that says: here is what we found, here are the three things we are doing about it, here is who owns each one, and here is how you'll know when it's done.",
          "It means the people who surfaced a specific concern — even if they did so anonymously — see a visible, specific response to that concern. Not a general 'we're working on culture.' A concrete action with a named owner and a timeline."
        ]
      },
      {
        heading: "The minimum viable close",
        paragraphs: [
          "If you've never closed a loop before, start with the smallest possible version. After your next pulse survey: pick the two or three most common themes. Write one paragraph each explaining what you found and what you're doing. Send it to every participant within four weeks. Do it every time.",
          "This simple act — consistent, specific, timely — rebuilds more trust faster than any culture initiative. Because it demonstrates that the organization keeps its implicit promise: if you tell us the truth, we'll use it honestly."
        ]
      },
      {
        heading: "The deeper principle",
        paragraphs: [
          "At TEEE, we build the close-the-loop step into every engagement as a non-negotiable. We don't run a diagnostic, produce findings, and disappear. We stay in the room until the people who gave us signal hear back what changed.",
          "Not because it's good practice. Because it's the difference between an extraction (we took your data) and a conversation (we heard you). Only the latter earns you the right to ask again."
        ]
      }
    ]
  },
  {
    slug: "hr-guide-to-ai",
    num: "07",
    category: "AI + HR",
    title: "The HR Leader's Guide to AI That Actually Works",
    excerpt: "Most AI pilots fail not because of the technology, but because of the adoption gap. Here's what gets ignored.",
    readTime: "6 min read",
    date: "January 2025",
    body: [
      {
        paragraphs: [
          "Every HR team is somewhere on the AI journey right now. Some are cautiously experimenting. Some are running pilots. Some have already deployed tools that nobody is using. The last category is the most common — and the most expensive lesson.",
          "AI doesn't fail in HR because the technology is bad. It fails because adoption is an afterthought."
        ]
      },
      {
        heading: "The adoption gap",
        paragraphs: [
          "The typical AI rollout in HR goes like this: leadership buys a tool, IT configures it, HR is told they will now use it. A few early adopters do. Most don't. Six months later, usage data shows 20% adoption. A new push is announced. Nothing materially changes.",
          "The adoption gap is not a technology problem. It's a change management problem masquerading as a technology problem. HR leaders who understand this solve for the human side first — and then the tools tend to work."
        ]
      },
      {
        heading: "What actually predicts adoption",
        paragraphs: [
          "In our work at the intersection of HR and AI implementation, three factors predict adoption more reliably than anything else:",
          "1. Perceived usefulness in the specific workflow. Not 'AI is useful in general.' Does this specific tool save this specific person time on this specific task they do every week? If they can't answer yes immediately, adoption will fail.",
          "2. Visible endorsement from the first line. If team managers don't use it — or worse, don't believe in it — their teams won't either. Manager buy-in is not optional.",
          "3. Early win visibility. Someone on the team needs to have a visible, shareable success with the tool within the first two weeks. One good story travels further than any training."
        ]
      },
      {
        heading: "The HR-specific AI use cases worth pursuing",
        paragraphs: [
          "Not all AI use cases are equal in HR. The highest-value, lowest-resistance applications we've seen succeed are: AI-assisted sentiment analysis on open-text survey responses (saves hours, surfaces themes that humans miss), AI-powered job description analysis for bias detection (objective, non-threatening, immediately useful), and AI scheduling for interview coordination (unambiguously saves time, no change management required).",
          "The highest-risk applications — AI in performance reviews, AI in hiring decisions — require significantly more investment in ethics, explainability, and governance before deployment. Move here only when the foundations are solid."
        ]
      },
      {
        heading: "The leader's role",
        paragraphs: [
          "The HR leader's job in an AI rollout is not to be the technology expert. It's to be the adoption architect. That means designing the rollout around the human experience of adoption — starting small, celebrating early wins, creating psychological safety to try and fail, and measuring usage honestly.",
          "The tools are ready. The question is whether the organization is."
        ]
      }
    ]
  },
  {
    slug: "why-automation-fails",
    num: "08",
    category: "Automation",
    title: "Why Automation Fails: It's Not the Technology",
    excerpt: "The failure point is almost always cultural — teams that don't trust what they didn't build.",
    readTime: "4 min read",
    date: "December 2024",
    body: [
      {
        paragraphs: [
          "Automation projects have a surprisingly consistent failure pattern. The technology works. The process is mapped correctly. The vendor delivered what was promised. And still, six months later, people are working around the automation instead of through it.",
          "The failure point is almost always the same: trust. Teams don't trust what they didn't build."
        ]
      },
      {
        heading: "The not-invented-here problem",
        paragraphs: [
          "When a process is automated without meaningful involvement from the people who run that process, two things happen. First, the automation inevitably misses edge cases that the human practitioners handle intuitively — gaps that the process map couldn't capture. Second, and more importantly, the team feels no ownership over the new system.",
          "No ownership means no willingness to make it work. Every error becomes evidence that automation is bad. Every workaround becomes a small act of reclaiming control. The automation quietly fails while everyone pretends it's working."
        ]
      },
      {
        heading: "The fix is upstream",
        paragraphs: [
          "The teams that successfully automate processes consistently do one thing differently: they involve the process practitioners in the design. Not in a 'we gathered requirements' way — in a genuine 'you own this' way. The people who run the process become the people who spec the automation, test it, identify the gaps, and advocate for it.",
          "This takes longer. It requires more meetings. It produces better outcomes."
        ]
      },
      {
        heading: "The culture preconditions",
        paragraphs: [
          "Successful automation also requires psychological safety — teams need to feel safe to say 'the automation got this wrong' without it being heard as 'the automation is a failure.' Creating that environment is leadership's job, not the implementation team's.",
          "Finally: automate boring things first. Start with the tasks people genuinely dislike doing — the manual data pulls, the repetitive reporting, the scheduling coordination. Early wins in automation should feel like gifts, not threats. That sets the cultural tone for everything that comes after."
        ]
      }
    ]
  },
  {
    slug: "employee-experience-systems-problem",
    num: "09",
    category: "EX Method",
    title: "Employee Experience Is a Systems Problem",
    excerpt: "Until you fix the workflow beneath the culture, no amount of perks or engagement initiatives will hold.",
    readTime: "5 min read",
    date: "November 2024",
    body: [
      {
        paragraphs: [
          "Most culture interventions treat employee experience as a motivation problem. Give people purpose. Recognize them more. Build community. Improve benefits. These things matter — but they are insufficient if the underlying workflow is broken.",
          "Employee experience is, at its root, a systems problem. And systems don't respond to perks."
        ]
      },
      {
        heading: "The workflow beneath the culture",
        paragraphs: [
          "When we do Diagnostic work with clients, we consistently find that the most painful employee experience moments are not caused by poor management or inadequate recognition — they're caused by process failures. The approval workflow that takes three weeks for a decision that should take one day. The HRIS that doesn't talk to the payroll system. The onboarding checklist that nobody owns and nobody completes. The performance review process that requires 6 hours of input for 20 minutes of conversation.",
          "These workflow failures produce frustration, anxiety, and helplessness — the enemies of engagement. No wellness program fixes them. You have to fix the system."
        ]
      },
      {
        heading: "Why organizations avoid the systems view",
        paragraphs: [
          "System-level fixes are expensive, cross-functional, and slow. They require engineering involvement, budget approvals, and organizational change that crosses departmental lines. Culture programs are faster, cheaper, and much easier to launch.",
          "So organizations optimize for what they can control and launch, rather than what will actually move the needle. Three years of culture initiatives later, engagement scores are flat and the same broken workflows are still producing the same daily frustrations."
        ]
      },
      {
        heading: "The diagnostic starting point",
        paragraphs: [
          "The right diagnostic question isn't 'how engaged are your people?' It's 'what are the three biggest workflow failures in your employee lifecycle, and how much do they cost in time, errors, and trust?'",
          "Answer that question honestly, with data, and you'll know exactly where to start. The culture conversations can then happen on top of a foundation that actually works."
        ]
      }
    ]
  },
  {
    slug: "smb-advantage-ai",
    num: "10",
    category: "Small Business",
    title: "The SMB Advantage: How Small Teams Move Faster with AI",
    excerpt: "Small businesses don't need to catch up. They need to leapfrog. Here's how.",
    readTime: "7 min read",
    date: "October 2024",
    body: [
      {
        paragraphs: [
          "When small and mid-size businesses look at AI adoption, the instinct is to feel behind. Large enterprises have dedicated AI teams, data infrastructure, and budgets. SMBs have a shared drive and a generalist HR manager.",
          "But this framing misses something important: small teams have an adoption advantage that enterprises would pay millions to recreate."
        ]
      },
      {
        heading: "Why small teams adopt faster",
        paragraphs: [
          "Enterprise AI adoption is slow because it's complex. Data governance. Compliance review. IT approval. Change management across thousands of employees. Every step requires committee sign-off. The average enterprise AI deployment takes 18-24 months from decision to scaled adoption.",
          "A 60-person company can trial a new AI tool on Monday, get feedback from the whole team by Wednesday, and decide whether to keep it by Friday. The feedback loop is immediate. The decision-making is human-scale. The ability to course-correct is nearly instant.",
          "That speed advantage compounds. Small teams that are willing to experiment rapidly can test and discard more tools in a quarter than an enterprise can review in a year."
        ]
      },
      {
        heading: "The leapfrog playbook",
        paragraphs: [
          "The smartest SMBs we work with don't try to match enterprise-scale AI infrastructure. They leapfrog it by going directly to the tools that took enterprises years to get approved: AI-assisted recruitment screening, automated candidate communications, AI-powered survey analysis, intelligent scheduling, and real-time sentiment monitoring on team communications.",
          "They run these tools on small budgets, iterate quickly, and build institutional knowledge about what works — knowledge that eventually becomes a competitive moat."
        ]
      },
      {
        heading: "The constraint that becomes the advantage",
        paragraphs: [
          "The SMB constraint that feels most limiting — the generalist HR manager with no data science background — is often what makes adoption succeed. They can explain to every employee exactly what the tool does, answer their questions personally, and build the human trust layer that enterprise IT departments can't.",
          "The question for SMB leaders isn't 'how do we keep up?' It's 'how do we move so fast that the enterprises are chasing us?'"
        ]
      }
    ]
  },
  {
    slug: "training-vs-tool",
    num: "11",
    category: "Capability Building",
    title: "Training vs. Tool: Why Most AI Rollouts Miss the Point",
    excerpt: "A tool nobody uses is a liability, not an asset. The investment should be in people, not platforms.",
    readTime: "5 min read",
    date: "September 2024",
    body: [
      {
        paragraphs: [
          "When organizations decide to 'do AI,' the first question is almost always: which tool should we buy? The budget conversation is about licenses, subscriptions, and platform costs. The capability conversation — if it happens at all — comes later.",
          "This is backwards. And it's why most AI investments underperform."
        ]
      },
      {
        heading: "The tool-first fallacy",
        paragraphs: [
          "Tools are an amplifier. They amplify what people can already do. A team with strong analytical skills and clear workflows will use an AI tool and produce dramatically better output. A team without those foundations will use the same tool to produce the same mediocre work, faster.",
          "Buying a tool without building capability is like buying a professional kitchen without training your staff. The equipment sits there. People work around it. Eventually someone asks why the kitchen isn't producing better meals."
        ]
      },
      {
        heading: "What capability building actually requires",
        paragraphs: [
          "Real AI capability building is not a training course. It's not a certification program. It's not a half-day workshop on prompt engineering. It's a sustained investment in three things: critical thinking about AI outputs (knowing when to trust and when to question), workflow redesign (actually changing how work gets done, not just adding a tool), and experimentation culture (making it safe to try things and fail).",
          "The organizations that get durable value from AI have all three. Most have none."
        ]
      },
      {
        heading: "The ratio that matters",
        paragraphs: [
          "A useful rule of thumb: for every dollar spent on AI tools, spend at least as much on capability building. If you can only afford one, build capability first. People with strong critical thinking and clear process can use free tools effectively. People without those foundations will underuse the most expensive platform you can buy.",
          "The investment is in people. The tools follow."
        ]
      }
    ]
  },
  {
    slug: "process-maps-to-living-systems",
    num: "12",
    category: "Process Design",
    title: "From Process Maps to Living Systems",
    excerpt: "A new way to think about workflow: not a document, but a responsive, improvable system.",
    readTime: "8 min read",
    date: "August 2024",
    body: [
      {
        paragraphs: [
          "Process maps are everywhere in modern organizations. Every process has one. Most of them are wrong — not because they were designed badly, but because they were designed once and never updated.",
          "The process map captures how work was supposed to flow on the day it was drawn. It does not capture how work actually flows today, after the team restructure, the system change, the three people who left, and the workarounds that everyone does but nobody talks about."
        ]
      },
      {
        heading: "The static document problem",
        paragraphs: [
          "A static process map has a specific and predictable lifecycle: created with good intentions, presented in a meeting, filed in a shared drive, referenced never. Six months later, it is already obsolete. A year later, it describes a reality that no longer exists.",
          "Nobody updates it because nobody owns it. Nobody owns it because ownership was never assigned. The document becomes corporate archaeology — interesting to look at, impossible to act on."
        ]
      },
      {
        heading: "What a living system looks like",
        paragraphs: [
          "A living system has three properties that a static document doesn't: it reflects actual current practice (not intended practice), it has an owner who is accountable for its accuracy, and it can generate alerts when the process drifts from its intended flow.",
          "In practice, living process systems use a combination of documented workflows and behavioral data. You know the process is supposed to work in a certain way. You also monitor the actual data — cycle times, error rates, exception frequency — and surface drift automatically. When the data says the process is breaking down, someone is notified."
        ]
      },
      {
        heading: "The EX connection",
        paragraphs: [
          "Process failures are one of the most common causes of employee experience degradation. The onboarding process that no one follows. The performance review workflow that produces anxiety instead of clarity. The offboarding checklist that gets skipped.",
          "When we map employee journeys, we consistently find that the worst experience moments track directly to broken processes — not broken intentions. The organization meant well. The process failed.",
          "The shift from document to living system is the difference between knowing your process is broken and knowing it the moment it starts to break."
        ]
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Start with your highest-impact process: the one that, if broken, costs you the most in employee trust, time, or quality. Audit it against current reality — not the map, but what actually happens. Assign an owner. Set a review cadence. Define the metric that tells you it's drifting.",
          "One living process is worth more than fifty static maps. The discipline is in the maintenance, not the creation."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
