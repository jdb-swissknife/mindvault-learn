import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

type CardItem = {
  title: string
  body: string
}

const featureCards: CardItem[] = [
  {
    title: 'Virtual computer',
    body: 'Use one agent across browser tabs, files, notes, docs, spreadsheets, search, and real tools instead of bouncing between disconnected prompts.',
  },
  {
    title: 'Memory that compounds',
    body: 'Keep preferences, decisions, reusable context, and facts in one place so the system stops making you start from zero every day.',
  },
  {
    title: 'Real use cases, not demo theater',
    body: 'Most people have seen the demos and still cannot recreate them in real work. We focus on the workflows people actually want to run, then show how to turn them into repeatable personal and business operations.',
  },
  {
    title: 'Managed models and tools',
    body: 'You do not have to babysit token usage, pick LLM models, or chase the latest stack. MindVault Studio tracks the tools, tests what is useful, and brings the best pieces into the member experience.',
  },
]

const memberAdvantages: CardItem[] = [
  {
    title: 'Daily tool watch',
    body: 'MindVault Studio keeps up with new agentic tools, model releases, browser agents, memory systems, and practical features so members do not have to live in AI news.',
  },
  {
    title: 'Tested before it reaches you',
    body: 'We sort through the noise, try the tools against real workflows, and only bring forward what can help you save time, remember more, or run better personal operations.',
  },
  {
    title: 'Member drops and upgrades',
    body: 'When something becomes useful enough, it turns into a lesson, workflow, template, saved skill, or managed feature inside the MindVault Personal experience.',
  },
]

const useCases: CardItem[] = [
  {
    title: 'Create as many specialized task agents as you want',
    body: 'Build a research agent, planning agent, subscription tracker, inbox follow-up agent, sales research agent, client ops helper, or any other focused helper you need. Each one gets a clear job instead of forcing everything through one generic chat.',
  },
  {
    title: 'Work inside a controlled virtual computer',
    body: 'Give your agents a contained workspace with browser, files, notes, tools, and workflow structure. You can test ideas, set boundaries, and build confidence before connecting anything to higher-stakes systems.',
  },
  {
    title: 'Run personal and business workflows side by side',
    body: 'Use the same environment for life admin, learning, planning, research, content, follow-up, client work, and operations. Personal agents and business agents can live in one system without becoming a mess.',
  },
  {
    title: 'Use tools and lessons to build better agents',
    body: 'You are not left staring at a blank prompt box. Lessons, examples, templates, and practical tools show you how to create agents that remember context, follow rules, complete tasks, and improve over time.',
  },
]

const lessonTracks: CardItem[] = [
  {
    title: 'Agent setup',
    body: 'Get the base system running with memory, tools, notes, and a repeatable structure that does not fall apart after the first session.',
  },
  {
    title: 'Workflow lessons',
    body: 'See how to move from impressive demos to daily assistants for planning, writing, research, travel, personal ops, and focused learning.',
  },
  {
    title: 'Tool recipes',
    body: 'Use practical tools like search, browser automation, files, notes, scheduling, summaries, and reusable templates.',
  },
  {
    title: 'Improvement loops',
    body: 'Capture what worked, save it as a repeatable skill, and tighten the system over time instead of letting it drift.',
  },
]

type QuestMilestone = {
  quest: string
  title: string
  xp: string
  unlock: string
  outcome: string
}

const questPrinciples: CardItem[] = [
  {
    title: 'Streaks with a purpose',
    body: 'The streak is not there to make you click. It is there to help you build a real habit of using your agent for work that matters.',
  },
  {
    title: 'XP for useful outcomes',
    body: 'Progress comes from finishing practical work: saving memory, building a tracker, creating a task agent, or turning a repeat task into a workflow.',
  },
  {
    title: 'Unlocks that pay off',
    body: 'New prompts, tool recipes, templates, and advanced agent patterns unlock as you prove the basics and build your own system.',
  },
]

const questMilestones: QuestMilestone[] = [
  {
    quest: 'Quest 01',
    title: 'Build your first useful personal agent',
    xp: '250 XP',
    unlock: 'Daily command menu',
    outcome: 'Leave with a morning workflow for planning, follow-up, learning, cleanup, and one time-saving action.',
  },
  {
    quest: 'Quest 02',
    title: 'Create a specialized task agent',
    xp: '400 XP',
    unlock: 'Task agent templates',
    outcome: 'Turn one repeatable job into a focused agent with a role, rules, memory, and a success checklist.',
  },
  {
    quest: 'Quest 03',
    title: 'Connect memory to real tools',
    xp: '600 XP',
    unlock: 'Workflow skill library',
    outcome: 'Build a small system that remembers context, uses tools, and saves the winning steps for next time.',
  },
  {
    quest: 'Quest 04',
    title: 'Run a personal or business ops mission',
    xp: '800 XP',
    unlock: 'Advanced agent patterns',
    outcome: 'Apply the system to a real outcome like renewals, inbox follow-up, client prep, research, or content planning.',
  },
]

const launchPerks: CardItem[] = [
  {
    title: 'Founding member path',
    body: 'Join before launch and help shape which quests, templates, and task-agent examples get built first.',
  },
  {
    title: 'Early unlocks',
    body: 'Get the starter quest pack for memory, personal agents, business agents, safety rules, and practical tool workflows.',
  },
  {
    title: 'Real feedback loop',
    body: 'The system gets better from member use. Useful workflows become lessons, saved skills, templates, and managed upgrades.',
  },
]

type LessonPreviewItem = {
  day: string
  title: string
  focus: string
  scenario: string
  sampleCommand: string
  agentResponse: string
  lessonSteps: string[]
  outcomeTitle: string
  outcomeItems: string[]
  result: string
}

const lessonPreviewDays: LessonPreviewItem[] = [
  {
    day: 'Day 1',
    title: 'Build a subscription tracker that catches renewals',
    focus: 'Memory, spending, reminders, and recurring checks',
    scenario: 'You have subscriptions spread across personal tools, business tools, phone apps, and free trials. The lesson shows how to turn that mess into a small agent workflow that remembers renewal dates and checks in before money leaves your account.',
    sampleCommand: 'Create a subscription tracker for me. Add Claude Pro at $20/month on the 12th, Canva Pro at $13/month with a trial ending June 20, Google One at $9.99/month on the 3rd, and ChatGPT Plus at $20/month on the 18th. Remind me 3 days before each renewal and give me a monthly keep, cancel, or downgrade review.',
    agentResponse: 'I created the tracker, saved each renewal date, flagged Canva as trial risk, calculated your visible monthly spend at $62.99, and set a recurring review command so we can check value before each charge.',
    lessonSteps: [
      'Enter messy subscription details in plain English.',
      'Turn them into a clean tracker with price, renewal date, category, and owner.',
      'Save reminder rules and a monthly review command.',
      'Ask the agent to identify trial risk, duplicate tools, and subscriptions you forgot about.',
    ],
    outcomeTitle: 'Your finished subscription system',
    outcomeItems: [
      'Renewal calendar with reminders',
      'Monthly spend total and trial risks',
      'Keep, cancel, or downgrade review prompt',
    ],
    result: 'You leave with a real subscription tracker, not a chat answer. The agent remembers renewals, checks trial risk, and gives you a repeatable monthly money review.',
  },
  {
    day: 'Day 2',
    title: 'Capture ideas before they disappear',
    focus: 'Fast context capture and retrieval',
    scenario: 'The lesson turns random thoughts, client ideas, and project notes into searchable memory so they can come back when they are useful.',
    sampleCommand: 'Save this as a business idea: build a client onboarding checklist for roofers with intake questions, first follow-up, install schedule, and review request timing.',
    agentResponse: 'Captured and tagged under business workflows, roofing, onboarding, and client experience. I also created three next questions to turn it into a usable checklist later.',
    lessonSteps: [
      'Capture raw ideas without cleaning them up first.',
      'Add useful tags and context so the idea can be found later.',
      'Ask the agent to turn the idea into next questions.',
      'Review saved ideas by topic when you are ready to build.',
    ],
    outcomeTitle: 'Your idea capture habit',
    outcomeItems: ['Tagged idea memory', 'Next questions for action', 'A retrieval command for future review'],
    result: 'You get a repeatable way to save thoughts, tag them, and turn scattered ideas into useful next steps.',
  },
  {
    day: 'Day 3',
    title: 'Turn videos into action briefs',
    focus: 'Research, summarization, and decisions',
    scenario: 'Instead of collecting long videos you never act on, the lesson shows how to pull out decisions, warnings, useful quotes, and experiments worth trying.',
    sampleCommand: 'Watch this video and give me the practical actions. I want decisions, quotes worth saving, risks, and 3 experiments I could run this week.',
    agentResponse: 'Brief created with key points, useful quotes, risks, action items, and a short experiment list sorted by time required.',
    lessonSteps: ['Give the agent a video or transcript.', 'Ask for actions instead of a generic summary.', 'Save useful quotes and risks.', 'Turn the best points into experiments or tasks.'],
    outcomeTitle: 'Your action brief',
    outcomeItems: ['Practical actions', 'Saved quotes and risks', 'Small experiments to test'],
    result: 'You get a faster research habit that turns long videos into decisions, notes, and usable tasks.',
  },
  {
    day: 'Day 4',
    title: 'Build your daily command habit',
    focus: 'Personal operating rhythm',
    scenario: 'The lesson gives you a short daily menu so the agent becomes useful every morning instead of sitting unused until you remember it exists.',
    sampleCommand: 'Give me my daily command menu for planning, follow-up, learning, cleanup, and anything that could save me time today.',
    agentResponse: 'Here are the 5 commands worth running today, ordered by impact and time required. I included one planning command, one follow-up command, one cleanup command, one learning command, and one money check.',
    lessonSteps: ['Create a short daily command menu.', 'Tie each command to a real outcome.', 'Pick the highest-impact command first.', 'Save the menu so it becomes a routine.'],
    outcomeTitle: 'Your daily agent menu',
    outcomeItems: ['Morning planning command', 'Follow-up and cleanup command', 'One learning or money check'],
    result: 'You leave with a simple daily routine that makes the agent useful every morning instead of occasional.',
  },
  {
    day: 'Day 5',
    title: 'Request better tools',
    focus: 'Workflow design and tool requests',
    scenario: 'The lesson shows how to describe a tool request clearly enough that it can become a workflow, not just a vague AI idea.',
    sampleCommand: 'Help me describe a tool that turns missed calls into follow-up tasks with caller name, callback window, urgency, and approval rules.',
    agentResponse: 'Tool request drafted with trigger, inputs, output, approval rules, edge cases, and success criteria so it can be built or handed off cleanly.',
    lessonSteps: ['Name the workflow trigger.', 'Define inputs and outputs.', 'Set approval rules and failure cases.', 'Write success criteria so the tool can be judged later.'],
    outcomeTitle: 'Your tool request brief',
    outcomeItems: ['Trigger and input list', 'Approval and safety rules', 'Build-ready success criteria'],
    result: 'You get a cleaner way to turn vague AI ideas into practical workflows a real system can run.',
  },
  {
    day: 'Day 6',
    title: 'Set safety rules',
    focus: 'Control and human approval',
    scenario: 'The lesson helps you decide what the agent can do automatically, what needs approval, and what it should never do without you.',
    sampleCommand: 'Create rules for what you can do automatically, what needs my approval, and what you should never do for email, spending, files, and outreach.',
    agentResponse: 'Safety card created with low-risk actions, approval-required actions, and never-do boundaries for each area.',
    lessonSteps: ['List the areas where the agent may act.', 'Separate low-risk actions from approval-required actions.', 'Write never-do boundaries.', 'Save the safety card for future workflows.'],
    outcomeTitle: 'Your safety card',
    outcomeItems: ['Automatic actions', 'Approval-required actions', 'Never-do boundaries'],
    result: 'You get a control layer that lets the agent become more useful without becoming reckless.',
  },
]

const buildLoop: CardItem[] = [
  {
    title: '1. Capture context',
    body: 'Save the facts, preferences, and decisions that matter so your agent can stop asking the same questions twice.',
  },
  {
    title: '2. Put tools to work',
    body: 'Run the agent across real tasks like research, files, scheduling, outreach, planning, and day-to-day operations.',
  },
  {
    title: '3. Save the winning moves',
    body: 'Turn solid workflows into reusable skills, checklists, and lessons so the good work does not disappear.',
  },
  {
    title: '4. Improve the system',
    body: 'Review where the agent helped, where it stumbled, and what should become the next durable part of your stack.',
  },
]

const faqs: CardItem[] = [
  {
    title: 'What do you mean by a virtual computer?',
    body: 'A virtual computer is an agent that can work across digital surfaces for you. Browser tabs, files, notes, search, docs, and workflows become part of one operating system instead of isolated tools.',
  },
  {
    title: 'Does it actually remember me?',
    body: 'That is the point. The system is built around durable memory, searchable context, saved facts, and reusable skills so you stop re-explaining the same preferences and projects.',
  },
  {
    title: 'What makes this different from a normal chatbot?',
    body: 'A normal chatbot gives you answers. This gives you a managed agent system with memory, tools, practical workflows, and lessons so you can get to real use instead of chasing prompts, models, and settings.',
  },
  {
    title: 'What if I have already tried agent demos?',
    body: 'That is exactly the gap we care about. Most people do not need another flashy demo. They need help turning what they saw into repeatable personal workflows and real business operations.',
  },
  {
    title: 'Do I need to manage models, tokens, or tool updates?',
    body: 'No. MindVault Studio keeps watch on the agentic tool landscape every day. We handle token usage, model selection, tool changes, and useful new features so you can stay focused on outcomes instead of AI plumbing.',
  },
  {
    title: 'What is Agent Quest?',
    body: 'Agent Quest is the guided launch path inside MindVault Personal. You complete practical missions, build agents, earn XP, keep streaks, and unlock templates or tool recipes as your system gets more useful.',
  },
  {
    title: 'Who is learn.mindvaultstudio.net for?',
    body: 'Founders, creators, operators, curious professionals, and anyone who wants a personal AI system that is useful in real life, not just fun for five minutes.',
  },
]

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="MindVault" className="h-8 w-auto rounded-sm" />
      <div className="text-lg font-semibold tracking-tight text-white">
        Mind<span className="text-rust-500">Vault</span>
      </div>
    </div>
  )
}

function BrandText({ text }: { text: string }) {
  const parts = text.split('MindVault')

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && (
            <>
              Mind<span className="text-rust-500">Vault</span>
            </>
          )}
          {part}
        </span>
      ))}
    </>
  )
}

function SectionHeading({ eyebrow, title, body, dark = false }: { eyebrow: string; title: string; body: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-onyx'}`}>
        <BrandText text={title} />
      </h2>
      <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? 'text-stone-400' : 'text-stone-600'}`}>
        <BrandText text={body} />
      </p>
    </div>
  )
}

function Card({ title, body, dark = false }: CardItem & { dark?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${dark ? 'border-charcoal-700 bg-charcoal-800' : 'border-sand-300 bg-white'}`}>
      <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-onyx'}`}><BrandText text={title} /></h3>
      <p className={`mt-3 text-sm leading-7 ${dark ? 'text-stone-400' : 'text-stone-600'}`}><BrandText text={body} /></p>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(() => localStorage.getItem('mv_learn_submitted') === 'true')
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0)
  const selectedLesson = lessonPreviewDays[selectedLessonIndex]

  useEffect(() => {
    const hasPreviewUrl = window.location.search.includes('v=') || window.location.hash === '#lesson-preview'
    if (!hasPreviewUrl) return

    const timer = window.setTimeout(() => {
      window.history.replaceState(null, '', '/')
    }, 400)

    return () => window.clearTimeout(timer)
  }, [])

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      if (supabase) {
        const { error } = await supabase.from('landing_leads').insert({
          email,
          phone: null,
          source: 'learn-landing',
        })
        if (error) throw error
      }
      setSubmitted(true)
      localStorage.setItem('mv_learn_submitted', 'true')
      setEmail('')
    } catch (error) {
      console.error('Lead capture failed', error)
      setSubmitted(true)
      localStorage.setItem('mv_learn_submitted', 'true')
      setEmail('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-sand-100 font-[Inter,Arial,sans-serif] text-onyx">
      <nav className="border-b border-charcoal-700 bg-charcoal-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToId('what-you-get')} className="hidden text-sm font-medium text-stone-400 transition-colors hover:text-white sm:inline">
              What You Get
            </button>
            <button onClick={() => scrollToId('agent-quest')} className="hidden text-sm font-medium text-stone-400 transition-colors hover:text-white md:inline">
              Agent Quest
            </button>
            <button onClick={() => scrollToId('lessons')} className="hidden text-sm font-medium text-stone-400 transition-colors hover:text-white sm:inline">
              Lessons
            </button>
            <button onClick={() => scrollToId('waitlist')} className="rounded-lg bg-rust-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-charcoal-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rust-500">AGENT QUEST LAUNCHING SOON</p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your personal agent for building what matters.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">
              Start a business, organize your work, build a side gig, and learn faster with an agent that remembers where you are going. Mind<span className="text-rust-500">Vault</span> Personal gives you memory, tools, lessons, and Agent Quest to turn ideas into real outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToId('waitlist')} className="inline-flex items-center justify-center rounded-lg bg-rust-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                Join the launch list
              </button>
              <button onClick={() => scrollToId('agent-quest')} className="inline-flex items-center justify-center rounded-lg border border-stone-500 px-7 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-300 hover:text-white">
                See Agent Quest
              </button>
              <button onClick={() => scrollToId('lesson-preview')} className="inline-flex items-center justify-center rounded-lg border border-rust-500/40 px-7 py-3.5 text-sm font-semibold text-rust-500 transition-colors hover:border-rust-500 hover:bg-rust-100/10">
                Preview the learning system
              </button>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-stone-400 sm:grid-cols-3">
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">Streaks with a purpose</div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">XP for real outcomes</div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">Unlock practical tools</div>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal-700 bg-charcoal-800 p-5 shadow-2xl shadow-black/20">
            <div className="rounded-2xl border border-charcoal-700 bg-charcoal-900 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone-500">
                <span>Agent Quest</span>
                <span>Launch preview</span>
              </div>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-sand-100 p-5 text-onyx">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Quest engine</div>
                  <p className="mt-3 font-serif text-2xl leading-tight">Build agents. Earn XP. Unlock the next tool.</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">The game layer points at real work: trackers, briefs, follow-ups, saved memory, task agents, and workflows you can use again.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Streak</div>
                    <p className="mt-3 text-lg font-semibold text-white">Daily missions keep the agent from becoming another forgotten login.</p>
                  </div>
                  <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Unlocks</div>
                    <p className="mt-3 text-lg font-semibold text-white">Templates, tool recipes, and advanced agent patterns open as you build.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-rust-500/40 bg-rust-100 p-5 text-onyx">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-600">Launch soon</div>
                  <p className="mt-3 text-lg font-semibold">Founding members help shape the first quest packs and task-agent examples.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-sand-300 bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="WHY THIS MATTERS"
            title="Most agent demos do not survive contact with real work."
            body="People do not need another flashy walkthrough. They need one system that can remember context, use tools, improve over time, and teach them how to turn agent potential into repeatable use cases and business operations."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-charcoal-700 bg-charcoal-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-18 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">MEMBER ADVANTAGE</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
              You do not have to keep up with the agent race. That is our job.
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-400">
              Mind<span className="text-rust-500">Vault</span> Studio is not just handing you a login and walking away. We will be working every day to stay current on the latest agentic tools, features, models, and workflows, then bring the useful ones to you as a member.
            </p>
            <div className="mt-8 rounded-2xl border border-rust-500/30 bg-rust-100 p-5 text-onyx">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust-600">What membership means</p>
              <p className="mt-3 text-lg font-semibold leading-7">
                Your agent system should keep getting sharper because Mind<span className="text-rust-500">Vault</span> Studio keeps doing the research, testing, and tool packaging behind the scenes.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            {memberAdvantages.map((item) => (
              <Card key={item.title} {...item} dark />
            ))}
          </div>
        </div>
      </section>

      <section id="what-you-get" className="border-b border-charcoal-700 bg-charcoal-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            dark
            eyebrow="WHAT YOU GET"
            title="Build your own bench of personal and business agents."
            body="MindVault Personal gives you a controlled virtual computer for creating as many specialized task agents as you want. Each agent can have a clear job, memory, rules, tools, and lessons behind it, so you can build useful helpers without giving them uncontrolled access to your real world."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <Card key={item.title} {...item} dark />
            ))}
          </div>
        </div>
      </section>

      <section id="agent-quest" className="border-b border-sand-300 bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="AGENT QUEST"
                title="Make building your agent feel like progress you can see."
                body="Agent Quest brings streaks, XP, unlocks, and guided missions into the MindVault Personal launch. It should feel fun, but it stays honest: progress is tied to real artifacts, practical agents, saved memory, and workflows you can use in your personal life or business."
              />
              <div className="mt-8 rounded-3xl border border-rust-500/30 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rust-600">Launch soon</p>
                <p className="mt-3 font-serif text-2xl leading-tight text-onyx">Join early, build the first quest path, and help shape what gets unlocked next.</p>
                <p className="mt-4 text-sm leading-7 text-stone-600">The goal is not a cute badge system. The goal is momentum. You always know what to build next, why it matters, and what new capability opens when you finish.</p>
                <button onClick={() => scrollToId('waitlist')} className="mt-6 inline-flex items-center justify-center rounded-xl bg-rust-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                  Get launch access
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-charcoal-700 bg-charcoal-900 p-5 text-white shadow-2xl shadow-black/20">
              <div className="flex flex-col gap-4 border-b border-charcoal-700 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Quest dashboard</p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight">Your launch path</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-charcoal-700 bg-charcoal-800 px-3 py-2">
                    <div className="font-semibold text-white">05</div>
                    <div className="mt-1 text-stone-500">Streak</div>
                  </div>
                  <div className="rounded-xl border border-rust-500/30 bg-rust-100 px-3 py-2 text-onyx">
                    <div className="font-semibold">1,250</div>
                    <div className="mt-1 text-stone-600">XP</div>
                  </div>
                  <div className="rounded-xl border border-charcoal-700 bg-charcoal-800 px-3 py-2">
                    <div className="font-semibold text-white">12</div>
                    <div className="mt-1 text-stone-500">Unlocks</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {questMilestones.map((item) => (
                  <div key={item.quest} className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">{item.quest}</p>
                        <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full border border-rust-500/40 bg-rust-100 px-3 py-1 text-xs font-semibold text-rust-700">{item.xp}</span>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
                      <div className="rounded-xl border border-rust-500/20 bg-rust-100 px-4 py-3 text-sm font-semibold text-onyx">Unlock: {item.unlock}</div>
                      <div className="rounded-xl border border-charcoal-700 bg-charcoal-900 px-4 py-3 text-sm leading-6 text-stone-300">{item.outcome}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {questPrinciples.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-sand-300 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="THE LOOP"
            title="How the system gets better instead of staying flat."
            body="The point is not just to use an agent. The point is to build one that compounds. Save context. Use tools. Capture winning workflows. Turn them into reusable lessons."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {buildLoop.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="lessons" className="border-b border-sand-300 bg-sand-200">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="LEARN.MINDVAULTSTUDIO.NET"
            title="Agent Quest turns lessons into a working habit."
            body="The learning side is simple on purpose. Short missions. Real workflows. Practical tool walkthroughs. Each preview shows the scenario, the reusable prompt, what the agent builds, and the finished outcome. The full quest path stays protected inside access."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lessonTracks.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div id="lesson-preview" className="mt-14 overflow-hidden rounded-[2rem] border border-charcoal-700 bg-charcoal-900 shadow-2xl shadow-black/20">
            <div className="border-b border-charcoal-700 bg-charcoal-800 px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rust-500" />
                  <span className="h-3 w-3 rounded-full bg-sand-300" />
                  <span className="h-3 w-3 rounded-full bg-stone-500" />
                  <span className="ml-2 rounded-full border border-charcoal-700 bg-charcoal-900 px-3 py-1 text-xs font-medium text-stone-400">learn.mindvaultstudio.net</span>
                </div>
                <div className="rounded-full border border-rust-500/30 bg-rust-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
                  Guided preview
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr_280px]">
              <aside className="border-b border-charcoal-700 bg-charcoal-950 p-5 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Week 1</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-white">From demo curiosity to daily habit.</h3>
                <div className="mt-6 space-y-3">
                  {lessonPreviewDays.map((lesson, index) => (
                    <button
                      key={lesson.day}
                      type="button"
                      onClick={() => setSelectedLessonIndex(index)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        selectedLessonIndex === index
                          ? 'border-rust-500/60 bg-rust-100 text-onyx'
                          : 'border-charcoal-700 bg-charcoal-800 text-stone-300 hover:border-rust-500/40'
                      }`}
                    >
                      <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${selectedLessonIndex === index ? 'text-rust-600' : 'text-rust-500'}`}>
                        {lesson.day}
                      </span>
                      <span className="mt-2 block text-sm font-semibold leading-5">{lesson.title}</span>
                    </button>
                  ))}
                </div>
              </aside>

              <div className="bg-sand-100 p-5 sm:p-7">
                <div className="rounded-3xl border border-sand-300 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">Sample lesson flow</p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-onyx">{selectedLesson.title}</h3>
                      <p className="mt-3 text-sm font-medium text-stone-500">Focus: {selectedLesson.focus}</p>
                    </div>
                    <div className="rounded-full border border-sand-300 bg-sand-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600">
                      Preview only
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Real scenario</div>
                      <p className="mt-3 text-sm leading-7 text-stone-700">{selectedLesson.scenario}</p>
                    </div>
                    <div className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Prompt you can reuse</div>
                      <p className="mt-3 rounded-xl bg-charcoal-900 p-4 text-sm leading-7 text-sand-100">“{selectedLesson.sampleCommand}”</p>
                    </div>
                    <div className="rounded-2xl border border-rust-500/30 bg-rust-100 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-600">Agent builds</div>
                      <p className="mt-3 text-sm leading-7 text-stone-700">{selectedLesson.agentResponse}</p>
                    </div>
                    <div className="rounded-2xl border border-sand-300 bg-white p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">What the lesson teaches</div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedLesson.lessonSteps.map((step, index) => (
                          <div key={step} className="rounded-xl border border-sand-300 bg-sand-100 p-4 text-sm leading-6 text-stone-700">
                            <span className="font-semibold text-rust-600">{index + 1}. </span>{step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-sand-300 bg-white p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Inside the full lesson</div>
                      <div className="mt-4 grid gap-3 blur-[2px] sm:grid-cols-3">
                        <div className="rounded-xl bg-sand-100 p-4 text-sm font-semibold text-stone-600">Exact setup steps</div>
                        <div className="rounded-xl bg-sand-100 p-4 text-sm font-semibold text-stone-600">Copy-ready commands</div>
                        <div className="rounded-xl bg-sand-100 p-4 text-sm font-semibold text-stone-600">Troubleshooting notes</div>
                      </div>
                      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-rust-500/30 bg-white/90 px-4 py-3 text-sm font-semibold text-onyx shadow-lg backdrop-blur">
                        The preview shows a real use case and outcome. The member version includes the full walkthrough and saved workflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="border-t border-charcoal-700 bg-charcoal-950 p-5 text-white lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Finished outcome</p>
                <div className="mt-5 rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                  <div className="text-sm font-semibold text-stone-300">By the end of {selectedLesson.day}</div>
                  <p className="mt-3 text-lg font-semibold leading-7 text-white">{selectedLesson.result}</p>
                </div>
                <div className="mt-5 rounded-2xl border border-rust-500/30 bg-rust-100 p-5 text-onyx">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-600">{selectedLesson.outcomeTitle}</div>
                  <div className="mt-4 grid gap-3">
                    {selectedLesson.outcomeItems.map((item) => (
                      <div key={item} className="rounded-xl border border-rust-500/20 bg-white px-4 py-3 text-sm font-semibold leading-6 text-stone-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500">Why this works</div>
                  <p className="mt-3 text-sm leading-7 text-stone-300">Each lesson teaches a real workflow, gives you a reusable prompt, shows what the agent builds, and leaves you with a saved system you can use again.</p>
                </div>
                <button onClick={() => scrollToId('waitlist')} className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-rust-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                  Join the list to unlock week 1
                </button>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-charcoal-700 bg-charcoal-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            dark
            eyebrow="FAQ"
            title="A few quick answers before you jump in."
            body="The goal is a personal agent system that is practical, teachable, and able to improve with you over time."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <Card key={item.title} {...item} dark />
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-sand-100">
        <div className="mx-auto max-w-4xl px-4 py-18 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-sand-300 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">GET LAUNCH ACCESS</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-onyx sm:text-4xl">
              Join the launch list for Agent Quest and the Mind<span className="text-rust-500">Vault</span> Personal system.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
              If this is the kind of personal AI system you want, drop your email. I will send launch updates, first quest access, practical lesson previews, and member tool drops through learn.mindvaultstudio.net.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-rust-500/30 bg-rust-100 px-5 py-4 text-sm leading-7 text-stone-700">
                You are on the list. I will send the first lessons when they are ready.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-xl border border-sand-300 bg-sand-100 px-4 text-sm text-onyx outline-none transition focus:border-rust-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-rust-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-rust-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Saving...' : 'Join the waitlist'}
                </button>
              </form>
            )}

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {launchPerks.map((item) => (
                <div key={item.title} className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                  <h3 className="text-sm font-semibold text-onyx">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
              <p>No spam. Just lessons, launch notes, and practical workflows.</p>
              <a href="/privacy.html" className="font-medium text-rust-500 transition-colors hover:text-rust-600">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-sand-300 bg-sand-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-600 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Mind<span className="text-rust-500">Vault</span> Studio. Personal AI systems, practical tools, and lessons that compound.
            </p>
            <p className="italic text-rust-500">Build the system once. Let it keep getting smarter.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
