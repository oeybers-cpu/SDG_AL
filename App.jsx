import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { BookOpen, GraduationCap, Users, TrendingUp, Heart, Scale, Home } from 'lucide-react'
import './App.css'

const sdgData = [
  { id: 1, title: "No Poverty", color: "#E5243B", description: "End poverty in all its forms everywhere", literacy: "Reading skills enable access to economic opportunities; 171M could escape poverty with basic literacy" },
  { id: 2, title: "Zero Hunger", color: "#DDA63A", description: "End hunger, achieve food security", literacy: "Literacy helps farmers access agricultural information and understand nutrition labels" },
  { id: 3, title: "Good Health", color: "#4C9F38", description: "Ensure healthy lives and well-being", literacy: "Reading medical instructions and health information; literate mothers have lower infant mortality rates" },
  { id: 4, title: "Quality Education", color: "#C5192D", description: "Ensure inclusive and equitable quality education", literacy: "Literacy is the foundation - prerequisite for all other learning and lifelong education" },
  { id: 5, title: "Gender Equality", color: "#FF3A21", description: "Achieve gender equality and empower all women", literacy: "Literate women are more empowered; 10% increase in female literacy = 3% GDP increase" },
  { id: 6, title: "Clean Water", color: "#26BDE2", description: "Ensure water and sanitation for all", literacy: "Understanding water safety information and participating in community water management" },
  { id: 7, title: "Clean Energy", color: "#FCC30B", description: "Ensure access to affordable, clean energy", literacy: "Reading technical information about renewable energy and understanding energy efficiency" },
  { id: 8, title: "Decent Work", color: "#A21942", description: "Promote sustained economic growth", literacy: "Literacy qualifies people for better jobs; illiteracy costs $1.5T annually" },
  { id: 9, title: "Innovation", color: "#FD6925", description: "Build resilient infrastructure", literacy: "Technical literacy enables participation in innovation and infrastructure development" },
  { id: 10, title: "Reduced Inequalities", color: "#DD1367", description: "Reduce inequality within and among countries", literacy: "Literacy reduces marginalization and enables equal participation in society" },
  { id: 11, title: "Sustainable Cities", color: "#FD9D24", description: "Make cities inclusive and sustainable", literacy: "Reading urban planning information and participating in community development" },
  { id: 12, title: "Responsible Consumption", color: "#BF8B2E", description: "Ensure sustainable consumption patterns", literacy: "Understanding product information and making informed consumer choices" },
  { id: 13, title: "Climate Action", color: "#3F7E44", description: "Take urgent action on climate change", literacy: "Understanding climate science and participating in environmental advocacy" },
  { id: 14, title: "Life Below Water", color: "#0A97D9", description: "Conserve oceans and marine resources", literacy: "Ocean literacy and understanding marine conservation efforts" },
  { id: 15, title: "Life on Land", color: "#56C02B", description: "Protect terrestrial ecosystems", literacy: "Environmental literacy and understanding ecosystem information" },
  { id: 16, title: "Peace & Justice", color: "#00689D", description: "Promote peaceful and inclusive societies", literacy: "Civic literacy enables democratic participation, informed voting, and understanding rights" },
  { id: 17, title: "Partnerships", color: "#19486A", description: "Strengthen global partnerships", literacy: "Communication skills enable global collaboration and understanding international agreements" }
]

const keyBenefits = [
  { icon: Heart, title: "Health & Well-being", description: "Literate mothers have lower infant mortality rates. Reading health information saves lives during crises like Ebola and COVID-19.", stat: "SDG 3" },
  { icon: GraduationCap, title: "Quality Education", description: "Literacy is the foundation for all learning. Students who can read are more likely to complete their education and pursue lifelong learning.", stat: "SDG 4" },
  { icon: TrendingUp, title: "Economic Growth", description: "If all students in low-income countries had basic reading skills, 171 million people could escape extreme poverty.", stat: "SDG 8" },
  { icon: Users, title: "Gender Equality", description: "For every 10% increase of female students, GDP increases by 3%. Literate women are more likely to educate their daughters.", stat: "SDG 5" },
  { icon: Scale, title: "Peace & Justice", description: "Literacy enables democratic participation, informed voting, and helps process trauma in post-conflict situations.", stat: "SDG 16" },
  { icon: BookOpen, title: "Reduced Inequalities", description: "Literacy builds self-esteem, reduces marginalization, and enables equal participation in society.", stat: "SDG 10" }
]

function App() {
  const [selectedSDG, setSelectedSDG] = useState(null)

  return (
    <div className="min-h-screen bg-[var(--dark)] text-[var(--light)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--darker)] border-b border-[var(--border)] backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-[var(--aqua-blue)]" />
            <span className="text-xl font-bold gradient-text">Academic Literacy for SDGs</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#intro" className="hover:text-[var(--aqua-blue)] transition-colors">About</a>
            <a href="#sdgs" className="hover:text-[var(--aqua-blue)] transition-colors">17 Goals</a>
            <a href="#benefits" className="hover:text-[var(--aqua-blue)] transition-colors">Key Benefits</a>
            <a href="#stats" className="hover:text-[var(--aqua-blue)] transition-colors">Impact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--royal-blue)] via-[var(--dark)] to-[var(--darker)] opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Academic Literacy</span>
            <br />
            <span className="text-[var(--light)]">for Sustainable Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-8 max-w-3xl mx-auto">
            How Reading, Writing, and Critical Thinking Support the UN's 17 Sustainability Goals
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--aqua-blue)] to-[var(--royal-blue)] text-[var(--dark)] hover:opacity-90 transition-opacity text-lg px-8 py-6"
            onClick={() => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Connections
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-16 px-4 bg-[var(--darker)]">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-[var(--card-bg)] border-[var(--border)] backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">The Foundation of Sustainable Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries in a global partnership.
              </p>
              <blockquote className="border-l-4 border-[var(--aqua-blue)] pl-4 italic text-[var(--muted-foreground)]">
                "The future starts with the alphabet." — Irina Bokova, former UNESCO Director-General
              </blockquote>
              <p>
                <strong className="text-[var(--aqua-blue)]">Academic literacy</strong> — the ability to read, write, think critically, and communicate effectively — is not just a goal in itself (SDG 4: Quality Education). It is the <strong>foundational skill</strong> that enables progress across all 17 Sustainable Development Goals.
              </p>
              <p>
                Without the ability to read, especially in mother tongues, it would not be possible for people to gain the knowledge and skills critical to achieving sustainable development. Literacy empowers individuals to make informed decisions, participate in democratic processes, access economic opportunities, and contribute to healthier, more equitable communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 17 SDGs Grid */}
      <section id="sdgs" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">The 17 Sustainable Development Goals</span>
          </h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12 text-lg">
            Click on any goal to discover how academic literacy supports its achievement
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {sdgData.map((sdg) => (
              <Card 
                key={sdg.id}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl gradient-border"
                style={{ 
                  background: `linear-gradient(135deg, ${sdg.color}22, var(--card-bg))`,
                  borderColor: selectedSDG?.id === sdg.id ? sdg.color : 'transparent'
                }}
                onClick={() => setSelectedSDG(sdg)}
              >
                <CardHeader>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.id}
                  </div>
                  <CardTitle className="text-xl" style={{ color: sdg.color }}>{sdg.title}</CardTitle>
                  <CardDescription className="text-[var(--muted-foreground)]">{sdg.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Selected SDG Details */}
          {selectedSDG && (
            <Card className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--darker)] border-2 animate-fade-in" style={{ borderColor: selectedSDG.color }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                    style={{ backgroundColor: selectedSDG.color }}
                  >
                    {selectedSDG.id}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2" style={{ color: selectedSDG.color }}>
                      SDG {selectedSDG.id}: {selectedSDG.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-[var(--light)]">{selectedSDG.description}</CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedSDG(null)}
                    className="text-[var(--light)] hover:bg-[var(--muted)]"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-3 text-[var(--aqua-blue)]">How Academic Literacy Supports This Goal:</h3>
                <p className="text-lg leading-relaxed">{selectedSDG.literacy}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-[var(--darker)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Six Key Benefits of Literacy</span>
          </h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12 text-lg">
            How academic literacy creates cross-cutting impact across the SDGs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-[var(--card-bg)] border-[var(--border)] hover:border-[var(--aqua-blue)] transition-all duration-300 gradient-border">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--aqua-blue)] to-[var(--royal-blue)] flex items-center justify-center mb-3">
                      <Icon className="w-8 h-8 text-[var(--dark)]" />
                    </div>
                    <CardTitle className="text-xl text-[var(--aqua-blue)]">{benefit.title}</CardTitle>
                    <div className="text-sm text-[var(--sun-color)] font-semibold">{benefit.stat}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--muted-foreground)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">The Global Impact of Literacy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-[#E5243B22] to-[var(--card-bg)] border-[#E5243B] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-[#E5243B] mb-2">781M</div>
                <p className="text-[var(--muted-foreground)]">Illiterate adults globally</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#C5192D22] to-[var(--card-bg)] border-[#C5192D] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-[#C5192D] mb-2">171M</div>
                <p className="text-[var(--muted-foreground)]">Could escape poverty with basic literacy</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#A2194222] to-[var(--card-bg)] border-[#A21942] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-[#A21942] mb-2">$1.5T</div>
                <p className="text-[var(--muted-foreground)]">Annual cost of illiteracy to global economy</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#FF3A2122] to-[var(--card-bg)] border-[#FF3A21] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-[#FF3A21] mb-2">+3%</div>
                <p className="text-[var(--muted-foreground)]">GDP increase per 10% rise in female literacy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Critical Thinking Section */}
      <section className="py-16 px-4 bg-[var(--darker)]">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-[var(--card-bg)] border-[var(--border)]">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">Critical Thinking & Sustainability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Academic literacy goes beyond basic reading and writing. It encompasses <strong className="text-[var(--aqua-blue)]">critical thinking</strong>, <strong className="text-[var(--aqua-blue)]">analytical reasoning</strong>, and <strong className="text-[var(--aqua-blue)]">effective communication</strong> — skills that are essential for addressing complex global challenges.
              </p>
              <p>
                Through academic literacy, learners develop the ability to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)] ml-4">
                <li>Question existing systems and norms</li>
                <li>Analyze complex sustainability challenges from multiple perspectives</li>
                <li>Develop innovative solutions to environmental and social problems</li>
                <li>Engage in informed decision-making about climate action, resource management, and social justice</li>
                <li>Participate meaningfully in democratic processes and global partnerships</li>
              </ul>
              <p>
                As research shows, critical thinking is the critical element in education related to sustainability. When people can read, write, and think critically, they become empowered agents of change in their communities and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Join the Movement</span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-8">
            Every literate person marks a victory over poverty and a step toward a more sustainable, equitable world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[var(--aqua-blue)] to-[var(--royal-blue)] text-[var(--dark)] hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://sdgs.un.org/goals', '_blank')}
            >
              Learn More About the SDGs
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[var(--aqua-blue)] text-[var(--aqua-blue)] hover:bg-[var(--aqua-blue)] hover:text-[var(--dark)]"
              onClick={() => window.open('https://www.unesco.org/en/literacy', '_blank')}
            >
              Support Literacy Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[var(--darker)] border-t border-[var(--border)]">
        <div className="container mx-auto text-center">
          <p className="text-[var(--muted-foreground)] mb-2">
            Based on research from the <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-[var(--aqua-blue)] hover:underline">United Nations Sustainable Development Goals</a>
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            © 2025 Academic Literacy for Sustainable Development. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
