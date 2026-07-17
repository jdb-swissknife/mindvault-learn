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

const offerPath: CardItem[] = [
  {
    title: 'Learn',
    body: 'Start with short Agent Quest missions that show what to build, why it matters, and what a useful outcome looks like. Public previews show the shape without giving away the full walkthrough.',
  },
  {
    title: 'Membership',
    body: 'Use the managed MindVault Personal workspace for memory, tools, templates, member drops, and practical workflows that keep improving over time.',
  },
  {
    title: 'Guided Build Sprint',
    body: 'Work live with MindVault to install the system into your actual life or business. Each call ends with a visible asset added to your private Build Ledger.',
  },
]

const firstCallOutcomes: CardItem[] = [
  {
    title: 'Personal context installed',
    body: 'Goals, working style, current projects, preferences, and useful facts get saved so the agent stops starting from zero.',
  },
  {
    title: 'Safety rules written',
    body: 'Clear boundaries define what the agent can do, what needs approval, and what should never happen without you.',
  },
  {
    title: 'First task agent created',
    body: 'One focused helper gets a role, rules, memory, tools, and a success checklist instead of becoming another generic chat.',
  },
  {
    title: 'First workflow saved',
    body: 'A real repeat task becomes a reusable command, checklist, or skill that can run again instead of disappearing after the call.',
  },
]

const ledgerItems: CardItem[] = [
  {
    title: 'North Star',
    body: 'The 30/60/90-day win stays visible at the top so every build session points at a real outcome.',
  },
  {
    title: 'Open loops',
    body: 'What MindVault owes, what the member owes, what is waiting on access, and what gets built next.',
  },
  {
    title: 'Build log',
    body: 'Every call records the date, focus, summary, action items, workflows built, agents created, and reusable assets saved.',
  },
  {
    title: 'Agent bench',
    body: 'Planning, research, follow-up, learning, money, client ops, and custom task agents live in one clear inventory.',
  },
  {
    title: 'Workflow library',
    body: 'Saved prompts, commands, checklists, recurring tasks, and lesson links are stored where they can be reused.',
  },
  {
    title: 'Quest progress',
    body: 'Streaks, XP, unlocked templates, completed missions, and the next best step stay connected to real work.',
  },
]

const protectedQuestTiles: CardItem[] = [
  {
    title: 'Agent Home Base',
    body: 'Set up the workspace, notes, files, memory, and daily command structure.',
  },
  {
    title: 'Personal Context',
    body: 'Capture goals, preferences, projects, voice, examples, and decisions.',
  },
  {
    title: 'Safety Rules',
    body: 'Separate automatic actions, approval-required actions, and never-do boundaries.',
  },
  {
    title: 'First Task Agent',
    body: 'Turn one repeatable job into a focused helper with a clear success checklist.',
  },
  {
    title: 'Real Workflow Run',
    body: 'Apply the system to a practical outcome like renewals, follow-up, research, or planning.',
  },
  {
    title: 'Saved Skill',
    body: 'Capture the winning move so the same workflow can run again later.',
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
    title: 'Who is learn.trustmvs.com for?',
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

  useEffect(() => {
    const hasPreviewUrl = window.location.search.includes('v=')
    if (!hasPreviewUrl) return

    const timer = window.setTimeout(() => {
      window.history.replaceState(null, '', '/')
    }, 400)

    return () => window.clearTimeout(timer)
  }, [])

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToApply = () => {
    window.location.href = '/apply/'
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
            <button onClick={() => scrollToId('build-sprint')} className="hidden text-sm font-medium text-stone-400 transition-colors hover:text-white sm:inline">
              Build Sprint
            </button>
            <button onClick={() => scrollToId('waitlist')} className="rounded-lg bg-rust-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
              Secure your agent
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
                Secure your agent
              </button>
              <button onClick={() => scrollToId('agent-quest')} className="inline-flex items-center justify-center rounded-lg border border-stone-500 px-7 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-300 hover:text-white">
                See Agent Quest
              </button>
              <button onClick={() => scrollToId('build-sprint')} className="inline-flex items-center justify-center rounded-lg border border-rust-500/40 px-7 py-3.5 text-sm font-semibold text-rust-500 transition-colors hover:border-rust-500 hover:bg-rust-100/10">
                See the Build Sprint
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

      <section id="build-sprint" className="border-b border-sand-300 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="GUIDED BUILD SPRINT"
                title="Your personal agent, installed into real life."
                body="Agent Quest teaches the system. MindVault Personal gives you the workspace. The Build Sprint helps you install it into your actual life or business with a private proof ledger that shows exactly what was built."
              />
              <div className="mt-8 grid gap-4">
                {offerPath.map((item) => (
                  <Card key={item.title} {...item} />
                ))}
              </div>
              <button onClick={goToApply} className="mt-8 inline-flex items-center justify-center rounded-xl bg-rust-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                Apply for the Build Sprint
              </button>
            </div>

            <div className="rounded-[2rem] border border-charcoal-700 bg-charcoal-900 p-5 text-white shadow-2xl shadow-black/20">
              <div className="rounded-3xl border border-rust-500/30 bg-rust-100 p-5 text-onyx">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-600">First setup call</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">Leave with a working foundation, not notes.</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">The first session creates the base system: context, rules, one task agent, and one workflow your agent can reuse.</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {firstCallOutcomes.map((item) => (
                  <Card key={item.title} {...item} dark />
                ))}
              </div>
            </div>
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
                <p className="mt-3 font-serif text-2xl leading-tight text-onyx">Secure your agent early, build the first quest path, and help shape what gets unlocked next.</p>
                <p className="mt-4 text-sm leading-7 text-stone-600">The goal is not a cute badge system. The goal is momentum. You always know what to build next, why it matters, and what new capability opens when you finish.</p>
                <button onClick={() => scrollToId('waitlist')} className="mt-6 inline-flex items-center justify-center rounded-xl bg-rust-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                  Secure your agent
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
            eyebrow="LEARN.TRUSTMVS.COM"
            title="Show the learning system without giving away the lesson library."
            body="The public page should feel like the real member area, not a word doc. Visitors see the quest path, outcomes, and locked structure. Full walkthroughs, commands, and templates stay inside member access."
          />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-charcoal-700 bg-charcoal-900 shadow-2xl shadow-black/20">
            <div className="border-b border-charcoal-700 bg-charcoal-800 px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rust-500" />
                  <span className="h-3 w-3 rounded-full bg-sand-300" />
                  <span className="h-3 w-3 rounded-full bg-stone-500" />
                  <span className="ml-2 rounded-full border border-charcoal-700 bg-charcoal-900 px-3 py-1 text-xs font-medium text-stone-400">member quest room</span>
                </div>
                <div className="rounded-full border border-rust-500/30 bg-rust-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
                  Protected preview
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-charcoal-950 p-5 text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Week 1 foundation path</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">Build the base system first.</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">The public preview shows the map. Members unlock the walkthrough, commands, troubleshooting notes, and reusable templates.</p>
                <div className="mt-7 grid gap-3">
                  {protectedQuestTiles.map((item, index) => (
                    <div key={item.title} className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">Quest {String(index + 1).padStart(2, '0')}</p>
                          <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-stone-400">{item.body}</p>
                        </div>
                        <span className="rounded-full border border-rust-500/30 bg-rust-100 px-3 py-1 text-xs font-semibold text-rust-700">Locked</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sand-100 p-5 sm:p-7">
                <div className="rounded-3xl border border-sand-300 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">Member view</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-onyx">A guided build room, not a document dump.</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">Each quest should show the scenario, the outcome, the next action, and what unlocks next. The full lesson content stays gated so the public page sells the system instead of exposing the product.</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Visible publicly</div>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                        <li>• quest name and outcome</li>
                        <li>• progress path and unlock logic</li>
                        <li>• finished artifact examples</li>
                        <li>• proof that the system is practical</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-rust-500/30 bg-rust-100 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-600">Member only</div>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                        <li>• full walkthroughs</li>
                        <li>• copy-ready commands</li>
                        <li>• templates and troubleshooting</li>
                        <li>• saved workflow installation steps</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-charcoal-700 bg-charcoal-900 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500">Example unlock</p>
                    <p className="mt-3 text-lg font-semibold leading-7">Finish the first task agent, unlock the Build Ledger template and next workflow mission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="BUILD LEDGER"
              title="The private proof page that earns the renewal."
              body="Every setup session and sprint call should leave a trace: what changed, what was built, what is next, and which useful assets now belong to the member."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {ledgerItems.map((item) => (
                <Card key={item.title} {...item} />
              ))}
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">SECURE YOUR AGENT</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-onyx sm:text-4xl">
              Secure your agent for Agent Quest and the Mind<span className="text-rust-500">Vault</span> Personal system.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
              If this is the kind of personal AI system you want, drop your email to secure your agent. I will send launch updates, first quest access, practical lesson previews, and member tool drops through learn.trustmvs.com.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
              Want guided setup? <a href="/apply/" className="font-semibold text-rust-500 transition-colors hover:text-rust-600">Submit the Build Sprint intake</a> so the first call starts with a game plan.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-rust-500/30 bg-rust-100 px-5 py-4 text-sm leading-7 text-stone-700">
                Your agent is secured. I will send the first lessons when they are ready.
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
                  {loading ? 'Saving...' : 'Secure your agent'}
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
