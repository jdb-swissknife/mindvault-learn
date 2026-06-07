import { useState } from 'react'
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
    title: 'Self-improving workflow',
    body: 'Successful steps can turn into reusable skills, better prompts, and cleaner handoffs so the agent improves with use.',
  },
  {
    title: 'Practical lessons',
    body: 'Short lessons show how to actually build and use these workflows, with examples you can copy into work, learning, and daily life.',
  },
]

const useCases: CardItem[] = [
  {
    title: 'Run life admin without the chaos',
    body: 'Handle inbox cleanup, research purchases, compare options, draft follow-ups, and keep personal projects moving.',
  },
  {
    title: 'Turn scattered context into one working system',
    body: 'Connect notes, tasks, docs, links, and conversations so the agent can act with context instead of guessing.',
  },
  {
    title: 'Build a real operator for your day',
    body: 'Use the agent to prep meetings, summarize decisions, manage recurring tasks, and keep the next step obvious.',
  },
  {
    title: 'Learn by doing, not by theory',
    body: 'Each lesson is tied to a workflow you can actually run. Less inspiration. More useful output on day one.',
  },
]

const lessonTracks: CardItem[] = [
  {
    title: 'Agent setup',
    body: 'Get the base system running with memory, tools, notes, and a repeatable structure that does not fall apart after the first session.',
  },
  {
    title: 'Workflow lessons',
    body: 'See how to build daily assistants for planning, writing, research, travel, personal ops, and focused learning.',
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
    body: 'A normal chatbot gives you answers. This is about giving an agent memory, tools, practical workflows, and lessons so it can help you act, not just talk.',
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

function SectionHeading({ eyebrow, title, body, dark = false }: { eyebrow: string; title: string; body: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-onyx'}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? 'text-stone-400' : 'text-stone-600'}`}>
        {body}
      </p>
    </div>
  )
}

function Card({ title, body, dark = false }: CardItem & { dark?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${dark ? 'border-charcoal-700 bg-charcoal-800' : 'border-sand-300 bg-white'}`}>
      <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-onyx'}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-7 ${dark ? 'text-stone-400' : 'text-stone-600'}`}>{body}</p>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(() => localStorage.getItem('mv_learn_submitted') === 'true')

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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rust-500">PERSONAL AI SYSTEM</p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A virtual computer that learns how you work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">
              Mind<span className="text-rust-500">Vault</span> Personal gives you an agent with memory, practical tools, and improvement loops. Then learn.mindvaultstudio.net shows you how to actually use it through short, useful lessons.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToId('waitlist')} className="inline-flex items-center justify-center rounded-lg bg-rust-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rust-600">
                Join the waitlist
              </button>
              <button onClick={() => scrollToId('lessons')} className="inline-flex items-center justify-center rounded-lg border border-stone-500 px-7 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-300 hover:text-white">
                See the lessons
              </button>
              <a href="/quest.html" className="inline-flex items-center justify-center rounded-lg border border-rust-500/40 px-7 py-3.5 text-sm font-semibold text-rust-500 transition-colors hover:border-rust-500 hover:bg-rust-100/10">
                Open the lesson journey
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-stone-400 sm:grid-cols-3">
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">Memory that sticks</div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">Tools that do real work</div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-800/80 px-4 py-4">Lessons you can apply fast</div>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal-700 bg-charcoal-800 p-5 shadow-2xl shadow-black/20">
            <div className="rounded-2xl border border-charcoal-700 bg-charcoal-900 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone-500">
                <span>System view</span>
                <span>Live loop</span>
              </div>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-sand-100 p-5 text-onyx">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Virtual computer</div>
                  <p className="mt-3 font-serif text-2xl leading-tight">Browser, notes, docs, files, search, calendar.</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">One system that can move between the tools you already use instead of forcing every task into one blank chat box.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Memory</div>
                    <p className="mt-3 text-lg font-semibold text-white">Preferences, facts, lessons, and decisions stay searchable.</p>
                  </div>
                  <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-500">Improvement</div>
                    <p className="mt-3 text-lg font-semibold text-white">Good workflows become reusable skills instead of disappearing after one session.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-rust-500/40 bg-rust-100 p-5 text-onyx">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-rust-600">Learn</div>
                  <p className="mt-3 text-lg font-semibold">Short lessons turn the system into something you can actually use every week.</p>
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
            title="Most AI usage resets every tab. This is the fix."
            body="People do not need more prompts. They need one system that can remember context, use tools, improve over time, and teach them how to make it useful in real life."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="what-you-get" className="border-b border-charcoal-700 bg-charcoal-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-20">
          <SectionHeading
            dark
            eyebrow="WHAT YOU GET"
            title="One personal agent system, built for actual use."
            body="This is for the person who wants more than a clever demo. You get the structure for a usable personal agent, the tools to make it productive, and the lessons to keep improving it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <Card key={item.title} {...item} dark />
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
            title="Practical lessons that turn the idea into a working habit."
            body="The learning side is simple on purpose. Short lessons. Real workflows. Practical tool walkthroughs. Enough structure to help you build your own personal agent without drowning in theory. The live lesson journey stays available alongside this landing page."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lessonTracks.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-8">
            <a href="/quest.html" className="inline-flex items-center justify-center rounded-lg bg-charcoal-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal-800">
              Explore the current lesson journey
            </a>
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rust-500">GET ACCESS</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-onyx sm:text-4xl">
              Join the list for launch updates, early lessons, and practical tool drops.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
              If this is the kind of personal AI system you want, drop your email. I will send the first useful lessons and launch updates through learn.mindvaultstudio.net.
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
