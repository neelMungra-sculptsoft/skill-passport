import type { LearnerData } from '../types'

export const mockData: LearnerData = {
  learner: 'Emily (TL A)',
  courses: [
    {
      id: 'course-1',
      name: 'Lumi-Test - Multi Emails Test (Oct 2025)',
      categories: [
        {
          id: 'augmented-intelligence',
          name: 'Augmented Intelligence',
          score: 2.4,
          skills: [
            {
              id: 'human-ai-collaboration',
              name: 'Human-AI Collaboration',
              description:
                'The ability to work alongside AI systems effectively, leveraging their strengths while contributing uniquely human judgment and creativity.',
              overallScore: 2.9,
              sessions: [
                {
                  sessionId: 1,
                  score: 2,
                  feedback: {
                    good: 'Showed curiosity in exploring AI tools during group exercises.',
                    improve:
                      'Could engage more actively with AI outputs rather than accepting them at face value.',
                  },
                },
                {
                  sessionId: 2,
                  score: 3,
                  feedback: {
                    good: 'Demonstrated improved ability to direct AI tools toward specific tasks.',
                    improve:
                      'Work on critically evaluating AI-generated suggestions before using them.',
                  },
                },
                {
                  sessionId: 3,
                  score: 2,
                  feedback: {
                    good: 'Attempted to combine AI outputs with personal insights in the assignment.',
                    improve:
                      'The integration felt surface-level; try to build on AI outputs more meaningfully.',
                  },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: {
                    good: 'Strong collaborative approach — used AI as a thinking partner effectively.',
                    improve:
                      'Document your reasoning process so others can follow your AI-assisted thinking.',
                  },
                },
                {
                  sessionId: 5,
                  score: 3,
                  feedback: {
                    good: 'Good iterative use of AI in refining your prototype.',
                    improve: 'Push further in challenging AI assumptions and testing edge cases.',
                  },
                },
                {
                  sessionId: 6,
                  score: 4,
                  feedback: {
                    good: 'Excellent framing of AI as a collaborator during the presentation.',
                    improve:
                      'Ensure you clearly attribute which ideas were AI-assisted vs original.',
                  },
                },
                {
                  sessionId: 7,
                  score: 3,
                  feedback: {
                    good: 'Consistent use of AI tools throughout the sprint.',
                    improve: 'Explore more diverse AI tools beyond the defaults provided.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'AI Collaboration Map',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ai-collab-1/400/300',
                },
                {
                  title: 'Human-AI Workflow Design',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ai-collab-2/400/300',
                },
                {
                  title: 'Reflection on AI Partnership',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ai-collab-3/400/300',
                },
              ],
            },
            {
              id: 'effective-prompting',
              name: 'Effective Prompting',
              description:
                'Turning tacit know-how into instructions that make machines genuinely useful.',
              overallScore: 2.7,
              sessions: [
                {
                  sessionId: 1,
                  score: 1,
                  feedback: {
                    good: 'Limited contribution during the session, resulting in insufficient evidence to assess this skill.',
                    improve:
                      'You could practice crafting structured AI prompts. You could test and refine prompts iteratively.',
                  },
                },
                {
                  sessionId: 2,
                  score: 2,
                  feedback: {
                    good: 'Showed understanding of basic prompt structure.',
                    improve:
                      'Add more context and constraints to your prompts to get better outputs.',
                  },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: {
                    good: 'Prompts were more specific and goal-oriented this session.',
                    improve: 'Experiment with chain-of-thought prompting for complex tasks.',
                  },
                },
                {
                  sessionId: 4,
                  score: 2,
                  feedback: {
                    good: 'Attempted multi-step prompting strategies.',
                    improve: 'Results were inconsistent — revisit prompt structure for clarity.',
                  },
                },
                {
                  sessionId: 5,
                  score: 4,
                  feedback: {
                    good: 'Impressive use of role-based prompting to generate targeted outputs.',
                    improve: 'Try applying few-shot examples to further improve response quality.',
                  },
                },
                {
                  sessionId: 6,
                  score: 3,
                  feedback: {
                    good: 'Good application of iterative prompt refinement.',
                    improve: 'Document your best-performing prompts as reusable templates.',
                  },
                },
                {
                  sessionId: 7,
                  score: 4,
                  feedback: {
                    good: 'Demonstrated strong command of advanced prompting techniques.',
                    improve:
                      "Share learnings with the group to elevate the team's collective skill.",
                  },
                },
                {
                  sessionId: 8,
                  score: 1,
                  feedback: {
                    good: 'Maintained consistent effort throughout.',
                    improve:
                      'Focus on translating prompting skills into measurable output quality.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Empathy Map Prompt',
                  type: 'image',
                  url: 'https://picsum.photos/seed/prompt-1/400/300',
                },
                {
                  title: 'Existing Solutions Analysis',
                  type: 'image',
                  url: 'https://picsum.photos/seed/prompt-2/400/300',
                },
                {
                  title: 'Prompt Iteration Log',
                  type: 'image',
                  url: 'https://picsum.photos/seed/prompt-3/400/300',
                },
                {
                  title: 'Final Prompt Portfolio',
                  type: 'image',
                  url: 'https://picsum.photos/seed/prompt-4/400/300',
                },
              ],
            },
            {
              id: 'explainable-ai',
              name: 'Explainable-AI',
              description:
                'Understanding and communicating how AI systems arrive at their outputs in ways that humans can interpret and trust.',
              overallScore: 2.0,
              sessions: [
                {
                  sessionId: 1,
                  score: 1,
                  feedback: {
                    good: 'Engaged with the introductory material on AI transparency.',
                    improve:
                      'Develop a clearer vocabulary for describing AI decision-making processes.',
                  },
                },
                {
                  sessionId: 2,
                  score: 2,
                  feedback: {
                    good: 'Beginning to identify when AI outputs need explanation.',
                    improve: 'Practice breaking down AI outputs for a non-technical audience.',
                  },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: {
                    good: "Good attempt at explaining the model's reasoning in your case study.",
                    improve: 'Use visual aids or analogies to make explanations more accessible.',
                  },
                },
                {
                  sessionId: 4,
                  score: 2,
                  feedback: {
                    good: 'Identified key limitations of the AI tool used.',
                    improve: 'Go deeper into why those limitations exist, not just what they are.',
                  },
                },
                {
                  sessionId: 5,
                  score: 1,
                  feedback: {
                    good: 'Showed awareness of explainability as a design requirement.',
                    improve: 'Apply explainability thinking to your own project deliverables.',
                  },
                },
                {
                  sessionId: 6,
                  score: 3,
                  feedback: {
                    good: 'Solid explanation of model outputs in the group presentation.',
                    improve:
                      'Address the "so what" — why does explainability matter for end users?',
                  },
                },
                {
                  sessionId: 7,
                  score: 2,
                  feedback: {
                    good: 'Consistent engagement with explainability topics.',
                    improve:
                      'Seek out real-world examples of explainable AI to ground your understanding.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'XAI Case Study',
                  type: 'image',
                  url: 'https://picsum.photos/seed/xai-1/400/300',
                },
                {
                  title: 'Model Transparency Report',
                  type: 'image',
                  url: 'https://picsum.photos/seed/xai-2/400/300',
                },
              ],
            },
            {
              id: 'ethical-use-of-ai',
              name: 'Ethical Use of AI',
              description:
                'Applying a principled framework to AI usage that considers bias, fairness, privacy, and societal impact.',
              overallScore: 2.2,
              sessions: [
                {
                  sessionId: 1,
                  score: 2,
                  feedback: {
                    good: 'Raised important questions about data privacy during group discussion.',
                    improve:
                      'Connect ethical concerns to concrete design decisions in your projects.',
                  },
                },
                {
                  sessionId: 2,
                  score: 3,
                  feedback: {
                    good: 'Strong awareness of algorithmic bias and its implications.',
                    improve:
                      'Develop actionable mitigation strategies, not just problem identification.',
                  },
                },
                {
                  sessionId: 3,
                  score: 2,
                  feedback: {
                    good: 'Applied an ethical lens to evaluate the case study.',
                    improve:
                      'Consider multiple stakeholder perspectives, not just the primary user.',
                  },
                },
                {
                  sessionId: 4,
                  score: 1,
                  feedback: {
                    good: 'Participated in the ethics debate with thoughtful contributions.',
                    improve:
                      'Ground your arguments in real AI ethics frameworks (e.g., EU AI Act).',
                  },
                },
                {
                  sessionId: 5,
                  score: 3,
                  feedback: {
                    good: 'Excellent identification of fairness issues in the dataset exercise.',
                    improve: 'Propose specific remediation steps for the biases you identified.',
                  },
                },
                {
                  sessionId: 6,
                  score: 2,
                  feedback: {
                    good: 'Consistent application of ethical thinking across sessions.',
                    improve:
                      'Explore the tension between innovation speed and ethical due diligence.',
                  },
                },
                {
                  sessionId: 7,
                  score: 3,
                  feedback: {
                    good: 'Final project incorporated ethical considerations meaningfully.',
                    improve: 'Formalize your ethical review process into a repeatable checklist.',
                  },
                },
                {
                  sessionId: 8,
                  score: 2,
                  feedback: {
                    good: 'Demonstrated growth in ethical reasoning over the course.',
                    improve: 'Continue engaging with emerging AI ethics literature post-program.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Ethics Framework Analysis',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ethics-1/400/300',
                },
                {
                  title: 'Bias Audit Report',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ethics-2/400/300',
                },
                {
                  title: 'Ethical AI Design Guidelines',
                  type: 'image',
                  url: 'https://picsum.photos/seed/ethics-3/400/300',
                },
              ],
            },
          ],
        },
        {
          id: 'durable-skills',
          name: 'Durable Skills',
          score: 3.1,
          skills: [
            {
              id: 'critical-thinking',
              name: 'Critical Thinking',
              description:
                'The capacity to analyze information objectively, evaluate evidence, and form well-reasoned judgments.',
              overallScore: 3.4,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: {
                    good: 'Asked insightful clarifying questions during the problem framing exercise.',
                    improve:
                      'Push beyond surface-level analysis — explore root causes more deeply.',
                  },
                },
                {
                  sessionId: 2,
                  score: 4,
                  feedback: {
                    good: 'Strong evaluation of competing hypotheses in the case study.',
                    improve: 'Practice steel-manning opposing viewpoints before dismissing them.',
                  },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: {
                    good: 'Good use of evidence to support your analysis.',
                    improve: 'Be more explicit about the assumptions underlying your conclusions.',
                  },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: {
                    good: 'Demonstrated excellent logical structure in your argument.',
                    improve: 'Incorporate more diverse sources of evidence.',
                  },
                },
                {
                  sessionId: 5,
                  score: 3,
                  feedback: {
                    good: 'Effectively identified logical fallacies in the group debate.',
                    improve: "Apply the same rigor to your own reasoning as you do to others'.",
                  },
                },
                {
                  sessionId: 6,
                  score: 4,
                  feedback: {
                    good: 'Outstanding critical analysis of the industry case.',
                    improve: 'Explore second-order effects of proposed solutions.',
                  },
                },
                {
                  sessionId: 7,
                  score: 3,
                  feedback: {
                    good: 'Consistent critical engagement throughout the program.',
                    improve:
                      'Document your critical thinking process to make it teachable to others.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Systems Thinking Map',
                  type: 'image',
                  url: 'https://picsum.photos/seed/critical-1/400/300',
                },
                {
                  title: 'Root Cause Analysis',
                  type: 'image',
                  url: 'https://picsum.photos/seed/critical-2/400/300',
                },
                {
                  title: 'Argument Evaluation Framework',
                  type: 'image',
                  url: 'https://picsum.photos/seed/critical-3/400/300',
                },
              ],
            },
            {
              id: 'communication',
              name: 'Communication',
              description:
                'The ability to convey ideas clearly and persuasively across different formats and audiences.',
              overallScore: 3.2,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: {
                    good: 'Clear and confident delivery in the opening presentation.',
                    improve: 'Tailor your language more to the technical level of your audience.',
                  },
                },
                {
                  sessionId: 2,
                  score: 2,
                  feedback: {
                    good: 'Written communication was structured and well-organized.',
                    improve: 'Work on conciseness — some points were over-explained.',
                  },
                },
                {
                  sessionId: 3,
                  score: 4,
                  feedback: {
                    good: 'Excellent use of visuals to support your narrative.',
                    improve: 'Practice handling follow-up questions more fluidly.',
                  },
                },
                {
                  sessionId: 4,
                  score: 3,
                  feedback: {
                    good: 'Active listening and thoughtful responses in group discussion.',
                    improve: 'Be more assertive in sharing your perspective when others dominate.',
                  },
                },
                {
                  sessionId: 5,
                  score: 4,
                  feedback: {
                    good: 'Compelling storytelling in the pitch session.',
                    improve: 'Strengthen your opening hook to capture attention faster.',
                  },
                },
                {
                  sessionId: 6,
                  score: 3,
                  feedback: {
                    good: 'Good adaptation of communication style across sessions.',
                    improve: 'Develop a signature communication style that is distinctly yours.',
                  },
                },
                {
                  sessionId: 7,
                  score: 4,
                  feedback: {
                    good: 'Strong final presentation — clear, engaging, and well-paced.',
                    improve:
                      'Continue refining your written communication to match your verbal strength.',
                  },
                },
                {
                  sessionId: 8,
                  score: 3,
                  feedback: {
                    good: 'Demonstrated real growth in communication across the program.',
                    improve: 'Seek opportunities to present to larger, more diverse audiences.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Stakeholder Pitch Deck',
                  type: 'image',
                  url: 'https://picsum.photos/seed/comm-1/400/300',
                },
                {
                  title: 'Written Case Summary',
                  type: 'image',
                  url: 'https://picsum.photos/seed/comm-2/400/300',
                },
              ],
            },
            {
              id: 'collaboration',
              name: 'Collaboration',
              description:
                'Working effectively within teams to achieve shared goals while respecting diverse perspectives.',
              overallScore: 2.8,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: {
                    good: 'Contributed positively to team dynamics from the start.',
                    improve: 'Take on more initiative in driving the team toward decisions.',
                  },
                },
                {
                  sessionId: 2,
                  score: 2,
                  feedback: {
                    good: "Supportive of teammates' ideas during ideation.",
                    improve:
                      'Balance supporting others with advocating for your own contributions.',
                  },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: {
                    good: 'Effective conflict resolution during the team disagreement.',
                    improve: 'Formalize team agreements earlier in the process.',
                  },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: {
                    good: 'Excellent team leadership during the sprint planning session.',
                    improve: 'Ensure all voices are heard, especially quieter team members.',
                  },
                },
                {
                  sessionId: 5,
                  score: 2,
                  feedback: {
                    good: 'Reliable and consistent contributor to team deliverables.',
                    improve:
                      'Develop your facilitation skills for running effective team meetings.',
                  },
                },
                {
                  sessionId: 6,
                  score: 3,
                  feedback: {
                    good: 'Strong peer feedback quality — specific and actionable.',
                    improve: 'Apply the same quality of feedback to your own self-assessment.',
                  },
                },
                {
                  sessionId: 7,
                  score: 3,
                  feedback: {
                    good: 'Great team spirit and positive attitude throughout.',
                    improve: 'Build on collaborative skills in cross-functional settings.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Team Charter Document',
                  type: 'image',
                  url: 'https://picsum.photos/seed/collab-1/400/300',
                },
                {
                  title: 'Peer Feedback Report',
                  type: 'image',
                  url: 'https://picsum.photos/seed/collab-2/400/300',
                },
                {
                  title: 'Collaborative Design Sprint',
                  type: 'image',
                  url: 'https://picsum.photos/seed/collab-3/400/300',
                },
              ],
            },
            {
              id: 'adaptability',
              name: 'Adaptability',
              description:
                'Thriving in dynamic environments by embracing change, learning quickly, and adjusting approaches as needed.',
              overallScore: 3.0,
              sessions: [
                {
                  sessionId: 1,
                  score: 2,
                  feedback: {
                    good: 'Open to feedback and willing to pivot when needed.',
                    improve: 'Develop strategies for managing uncertainty without losing momentum.',
                  },
                },
                {
                  sessionId: 2,
                  score: 3,
                  feedback: {
                    good: 'Handled the unexpected constraint well during the design challenge.',
                    improve: 'Reflect on what mental models help you adapt quickly.',
                  },
                },
                {
                  sessionId: 3,
                  score: 4,
                  feedback: {
                    good: 'Excellent response to mid-sprint pivot — reframed the problem effectively.',
                    improve:
                      'Share your adaptation strategies with the team to build collective resilience.',
                  },
                },
                {
                  sessionId: 4,
                  score: 3,
                  feedback: {
                    good: 'Quick to learn new tools introduced during the session.',
                    improve: 'Balance speed of adoption with depth of understanding.',
                  },
                },
                {
                  sessionId: 5,
                  score: 2,
                  feedback: {
                    good: 'Maintained performance quality despite changing requirements.',
                    improve: 'Build more robust contingency plans for high-ambiguity situations.',
                  },
                },
                {
                  sessionId: 6,
                  score: 4,
                  feedback: {
                    good: 'Demonstrated impressive flexibility in the final sprint.',
                    improve: 'Document your adaptation journey as a learning resource.',
                  },
                },
                {
                  sessionId: 7,
                  score: 3,
                  feedback: {
                    good: 'Strong growth in adaptability across the program.',
                    improve:
                      'Continue seeking out novel, ambiguous challenges to sharpen this skill.',
                  },
                },
                {
                  sessionId: 8,
                  score: 4,
                  feedback: {
                    good: 'Outstanding adaptability demonstrated in the capstone project.',
                    improve: 'Mentor others in developing their own adaptability mindset.',
                  },
                },
              ],
              assignments: [
                {
                  title: 'Change Management Plan',
                  type: 'image',
                  url: 'https://picsum.photos/seed/adapt-1/400/300',
                },
                {
                  title: 'Pivot Analysis Report',
                  type: 'image',
                  url: 'https://picsum.photos/seed/adapt-2/400/300',
                },
              ],
            },
          ],
        },
      ],
      certificates: [
        {
          id: 'cert-1',
          title: 'Certificate of Distinction',
          recipient: 'Emily (TL A)',
          program: 'Design Thinking Training',
          imageUrl: 'https://picsum.photos/seed/certificate/600/400',
        },
      ],
      innovations: [
        {
          id: 'inno-1',
          title: 'Model Choices',
          completedOn: 'July 2025',
          subtitle: 'LLM vs SLM',
          tag: 'Financial Engineering',
          imageUrl: 'https://picsum.photos/seed/innovation-1/1200/500',
          problem:
            'Financial institutions rely on large language models (LLMs) that are costly to run, slow to respond, and difficult to deploy in regulated environments with strict data privacy requirements.',
          solution:
            'Replacing LLMs with small language models (SLMs) fine-tuned on domain-specific financial data — achieving comparable accuracy at a fraction of the compute cost while meeting compliance requirements.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        {
          id: 'inno-2',
          title: 'Prompt Engineering at Scale',
          completedOn: 'August 2025',
          subtitle: 'Automating Workflows',
          tag: 'Operations',
          imageUrl: 'https://picsum.photos/seed/innovation-2/1200/500',
          problem:
            'Operations teams spend excessive time on repetitive manual tasks that could be automated, but lack the technical skills to build traditional software pipelines.',
          solution:
            'A prompt engineering playbook that enables non-technical staff to automate workflows using AI tools — reducing manual effort by 60% without writing a single line of code.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
      ],
    },
    {
      id: 'course-2',
      name: 'AI Design Sprint - Cohort 3 (Jan 2026)',
      categories: [
        {
          id: 'augmented-intelligence-2',
          name: 'Augmented Intelligence',
          score: 3.6,
          skills: [
            {
              id: 'human-ai-collaboration-2',
              name: 'Human-AI Collaboration',
              description:
                'The ability to work alongside AI systems effectively, leveraging their strengths while contributing uniquely human judgment and creativity.',
              overallScore: 3.8,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: { good: 'Strong start.', improve: 'Go deeper.' },
                },
                {
                  sessionId: 2,
                  score: 4,
                  feedback: { good: 'Excellent framework.', improve: 'Document more.' },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: { good: 'Good iteration.', improve: 'Be bolder.' },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: { good: 'Outstanding.', improve: 'Share learnings.' },
                },
                {
                  sessionId: 5,
                  score: 5,
                  feedback: { good: 'Exceptional contribution.', improve: 'Teach others.' },
                },
              ],
              assignments: [
                {
                  title: 'AI Workflow Blueprint',
                  type: 'image',
                  url: 'https://picsum.photos/seed/c2-1/400/300',
                },
                {
                  title: 'Collaboration Report',
                  type: 'image',
                  url: 'https://picsum.photos/seed/c2-2/400/300',
                },
              ],
            },
            {
              id: 'effective-prompting-2',
              name: 'Effective Prompting',
              description:
                'Turning tacit know-how into instructions that make machines genuinely useful.',
              overallScore: 3.4,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: { good: 'Solid base.', improve: 'Add specificity.' },
                },
                {
                  sessionId: 2,
                  score: 4,
                  feedback: { good: 'Creative prompts.', improve: 'Test edge cases.' },
                },
                {
                  sessionId: 3,
                  score: 3,
                  feedback: { good: 'Good variety.', improve: 'Refine structure.' },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: { good: 'Impressive results.', improve: 'Document templates.' },
                },
                {
                  sessionId: 5,
                  score: 3,
                  feedback: { good: 'Consistent quality.', improve: 'Push further.' },
                },
              ],
              assignments: [
                {
                  title: 'Prompt Library',
                  type: 'image',
                  url: 'https://picsum.photos/seed/c2-3/400/300',
                },
              ],
            },
          ],
        },
        {
          id: 'durable-skills-2',
          name: 'Durable Skills',
          score: 3.8,
          skills: [
            {
              id: 'critical-thinking-2',
              name: 'Critical Thinking',
              description:
                'The capacity to analyze information objectively, evaluate evidence, and form well-reasoned judgments.',
              overallScore: 4.0,
              sessions: [
                {
                  sessionId: 1,
                  score: 4,
                  feedback: { good: 'Sharp analysis.', improve: 'Go broader.' },
                },
                {
                  sessionId: 2,
                  score: 4,
                  feedback: { good: 'Well-reasoned.', improve: 'Challenge assumptions.' },
                },
                {
                  sessionId: 3,
                  score: 5,
                  feedback: { good: 'Outstanding depth.', improve: 'Mentor peers.' },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: { good: 'Consistent rigor.', improve: 'Apply cross-domain.' },
                },
                {
                  sessionId: 5,
                  score: 4,
                  feedback: { good: 'Excellent synthesis.', improve: 'Document frameworks.' },
                },
              ],
              assignments: [
                {
                  title: 'Strategic Analysis',
                  type: 'image',
                  url: 'https://picsum.photos/seed/c2-4/400/300',
                },
              ],
            },
            {
              id: 'communication-2',
              name: 'Communication',
              description:
                'The ability to convey ideas clearly and persuasively across different formats and audiences.',
              overallScore: 3.6,
              sessions: [
                {
                  sessionId: 1,
                  score: 3,
                  feedback: { good: 'Clear delivery.', improve: 'Simplify language.' },
                },
                {
                  sessionId: 2,
                  score: 4,
                  feedback: { good: 'Excellent visuals.', improve: 'Pace yourself.' },
                },
                {
                  sessionId: 3,
                  score: 4,
                  feedback: { good: 'Engaging story.', improve: 'Stronger close.' },
                },
                {
                  sessionId: 4,
                  score: 4,
                  feedback: { good: 'Persuasive pitch.', improve: 'Handle Q&A better.' },
                },
                {
                  sessionId: 5,
                  score: 3,
                  feedback: { good: 'Growth evident.', improve: 'Build on strengths.' },
                },
              ],
              assignments: [
                {
                  title: 'Executive Presentation',
                  type: 'image',
                  url: 'https://picsum.photos/seed/c2-5/400/300',
                },
              ],
            },
          ],
        },
      ],
      certificates: [
        {
          id: 'cert-2',
          title: 'Certificate of Excellence',
          recipient: 'Emily (TL A)',
          program: 'AI Design Sprint',
          imageUrl: 'https://picsum.photos/seed/certificate2/600/400',
        },
      ],
      innovations: [
        {
          id: 'inno-3',
          title: 'Generative UI Patterns',
          completedOn: 'February 2026',
          subtitle: 'AI-driven interfaces',
          tag: 'Product Design',
          imageUrl: 'https://picsum.photos/seed/innovation-3/1200/500',
          problem:
            'Designers are bottlenecked by manual UI creation processes that cannot keep pace with the speed of AI-generated content, leading to inconsistent and slow product iterations.',
          solution:
            'A generative UI pattern library powered by AI that automatically produces accessible, consistent interface components from natural language descriptions — cutting design-to-prototype time by 70%.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
      ],
    },
  ],
}
