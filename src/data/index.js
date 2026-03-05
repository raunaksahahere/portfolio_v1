// ═══════════════════════════════════════════
//  DATA — Egyptian Portfolio
// ═══════════════════════════════════════════

export const PROFILE = {
  name: 'Raunak Saha',
  title: 'Full-Stack Developer & Language Creator',
  tagline: 'Code is the new civilization.',
  subtitle: 'From ancient scrolls to modern programming languages.',
  bio: `I am 18 yr old, based in Kolkata, India. I am a Full-Stack Developer & Language Creator with an experience of 2 years. I love to build things that matter. I am currently a student at Meghnad Saha Institute of Technology pursuing B.Tech in Artificial Intelligence and Data Science. I am also a language creator and have created the B# programming language. Interested in AI/ML, Web Development, and Language Design.`,
  available: true,
}

export const SKILLS = [
  {
    glyph: '𓂀', name: 'AI / Machine Learning', desc: 'Eye of Ra — Seeing patterns in data', techs: [
      { label: 'Python', icon: 'python' }, { label: 'TensorFlow', icon: 'tensorflow' }, { label: 'PyTorch', icon: 'pytorch' },
    ]
  },
  {
    glyph: '𓏏', name: 'Backend Systems', desc: 'Sacred Scroll — Foundation of all systems', techs: [
      { label: 'Node.js', icon: 'nodejs' }, { label: 'Supabase', icon: 'supabase' }, { label: 'PostgreSQL', icon: 'postgres' },
    ]
  },
  {
    glyph: '𓎛', name: 'Web Development', desc: 'The Weaver — Crafting digital experiences', techs: [
      { label: 'React', icon: 'react' }, { label: 'Next.js', icon: 'nextjs' }, { label: 'TypeScript', icon: 'ts' }, { label: 'Tailwind', icon: 'tailwind' },
    ]
  },
  {
    glyph: '⚡', name: 'JavaScript', desc: 'Lightning of Amun — Powering the modern web', techs: [
      { label: 'JavaScript', icon: 'js' }, { label: 'Node.js', icon: 'nodejs' }, { label: 'React', icon: 'react' },
    ]
  },
  {
    glyph: '𓁹', name: 'Language Design', desc: 'Eye of Horus — Creating new tongues', techs: [
      { label: 'B# Language', icon: 'local:/icon.png' }, { label: 'Interpreters', icon: 'cpp' }, { label: 'Compilers', icon: 'c' },
    ]
  },
  {
    glyph: '𓆣', name: 'Version Control', desc: 'Scarab of Order — Keeping history intact', techs: [
      { label: 'Git', icon: 'git' }, { label: 'GitHub', icon: 'github' }, { label: 'GitLab', icon: 'gitlab' },
    ]
  },
  {
    glyph: '🔺', name: 'Architecture', desc: 'The Great Pyramid — Building to last', techs: [
      { label: 'Docker', icon: 'docker' }, { label: 'AWS', icon: 'aws' }, { label: 'Linux', icon: 'linux' },
    ]
  },
  {
    glyph: '𓋹', name: 'DevOps & Tools', desc: 'Ankh of Life — Tools that breathe life', techs: [
      { label: 'Figma', icon: 'figma' }, { label: 'VS Code', icon: 'vscode' }, { label: 'Unity', icon: 'unity' },
    ]
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'B# Programming Language',
    tag: 'Language',
    structure: 'pyramid',
    desc: 'A complete programming language with its own interpreter, package manager, and VS Code extension. Built from the ground up.',
    techs: ['Python', 'Interpreter', 'Compiler Design', 'AST'],
    gh: 'https://github.com/raunaksahahere/Bsharp-b-',
    featured: true,
  },
  {
    id: 2,
    title: 'BuggyButBrilliant',
    tag: 'Startup',
    structure: 'obelisk',
    desc: 'A startup company for digital marketing and web development.',
    techs: ['VS Code API', 'JSON'],
    gh: 'https://github.com/buggybutbrilliant',
  },
  {
    id: 3,
    title: 'B# Package Manager',
    tag: 'CLI Tool',
    structure: 'tomb',
    desc: 'A package manager for B# — install, manage, and publish packages for the B# ecosystem.',
    techs: ['Python', 'CLI', 'Package Registry', 'PyPI', 'JSON'],
    gh: 'https://github.com/raunaksahahere/bsharp-b--packages',
  },
  {
    id:4,
    title: 'FAST ATTENDANCE PORTAL',
    tag: 'Website And PWA',
    structure: 'temple',
    desc: 'A website for attendance in colleges, schools and offices to maintain decorum and reduce issues like bunking or proxy attendance.',
    techs: ['React', 'Tailwind', 'TypeScript'],
    gh: '#',
  },
  {
    id: 5,
    title: 'Smart Campus Issue Reporter',
    tag: 'Website',
    structure: 'temple',
    desc: 'A website for reporting issues in the campus directly to the concerned authorities.',
    techs: ['VanillaJS', 'HTML', 'CSS', 'Firebase',],
    gh: 'https://github.com/raunaksahahere/Smart-Campus-Issue-Reporter',
  },
  {
    id: 6,
    title: 'Smart Hotel Room Allocation System',
    tag: 'Website',
    structure: 'sphinx',
    desc: 'A website for allocating rooms to guests in a hotel without the need for a receptionist or a heavy staff. The system is designed to be used by both guests and hotel staff.',
    techs: ['VanillaJS', 'HTML', 'CSS', 'Firebase',],
    gh: 'https://github.com/raunaksahahere/Smart-Hotel-Room-Allocation-System',
  }
]

export const ACHIEVEMENTS = [
  { artifact: 'Golden Tablet', icon: '📜', title: 'B# Programming Language', desc: 'Created an entire programming language from scratch' },
  { artifact: 'Magic Scroll', icon: '📦', title: 'BuggyButBrilliant', desc: 'A startup company for digital marketing and web development' },
  { artifact: 'Crystal Orb', icon: '🔮', title: 'FAST Attendance Portal', desc: 'Machine learning and intelligent systems' },
  { artifact: 'Ancient Chisel', icon: '🛠️', title: 'VS Code Extension', desc: 'Developer tooling for the B# language' },
]

export const CONTACTS = [
  { icon: '🔗', label: 'GitHub', url: 'https://github.com/raunaksahahere', color: '#c9d1d9' },
  { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/raunak-saha-855375399/', color: '#0a66c2' },
  { icon: '📧', label: 'Email', url: 'mailto:raunaksaha22@gmail.com', color: '#f0c040' },
  { icon: '📄', label: 'Resume', url: '#', color: '#60ff90' },
]

export const SCARAB_MESSAGES = {
  intro: 'Welcome, explorer. Unroll the ancient scroll to begin your journey...',
  about: 'You\'ve found the oasis. Here lies the story of Raunak Saha.',
  skills: 'Each hieroglyph holds ancient wisdom. Hover to decode the knowledge within.',
  projects: 'These ruins hold great creations. Interact to uncover what lies inside.',
  temple: 'The Temple of Creation — where the greatest artifacts were forged.',
  contact: 'The portal to the future awaits. Step through to connect.',
  sphinx: 'The Sphinx guards a secret. Can you solve its riddle?',
}
