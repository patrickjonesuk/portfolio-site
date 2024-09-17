import { Category } from './categories';
import {
  LinkSiteIcon,
  LanguageIcon,
  DatabaseIcon,
  FrameworkIcon,
  ToolIcon,
  labelled,
} from './icons';
import { projectImage } from './images';
import { type Project, type TechCategory } from './types';

export const projects: Project[] = [
  {
    name: 'Goldsprout',
    description: `A web application for tracking investments over time, either individually or across a group or organisation with fine-grained permissions. User-provided data is processed to generate statistics and charts to provide insights and inform decisions. Holdings can be tracked over time across providers, accounts and users to provide performance and composition metrics by selected groupings.
    <br>&nbsp;<br>
The web frontend is a SPA, built with VueJS and Primevue components, and uses Chart.JS to create informative and intuitive visualisations. This interfaces with a backend API, written in Go with the Gin web framework and GORM ORM.
        `,
    dates: 'Feb 2024 - Present',
    featured: true,
    links: [
      LinkSiteIcon.github('https://github.com/goldsproutapp'),
      LinkSiteIcon.website('https://goldsprout.app'),
    ],
    technologies: [
      Category.Languages(
        LanguageIcon.Go,
        LanguageIcon.TypeScript,
        LanguageIcon.HTML5,
        LanguageIcon.CSS3,
      ),
      Category.Databases(DatabaseIcon.MariaDB),
      Category.Frameworks(
        FrameworkIcon.VueJS,
        FrameworkIcon.PrimeVue,
        FrameworkIcon.ChartJS,
        FrameworkIcon.GinGonic,
      ),
      Category.Tools(
        ToolIcon.Docker,
        ToolIcon.Vite,
        ToolIcon.ESLint,
        ToolIcon.Nginx,
        ToolIcon.Trello,
      ),
    ],
    images: [
      projectImage('goldsprout/overview.png', 'Demo overview page.'),
      projectImage('goldsprout/account.png', 'Account info page, showing holdings.'),
      projectImage(
        'goldsprout/trends_2.png',
        'Trends page, showing performance over time for accounts, grouped by user.',
      ),
      projectImage(
        'goldsprout/composition.png',
        'Composition page, showing overall asset breakdown across visible accounts.',
      ),
      projectImage('goldsprout/stock.png', 'Stock info page, showing performance over time.'),
    ],
  },
  {
    name: 'Hypixel Skybot',
    description: `
The first open-source project that I was involved in, as one of three main contributors, this was a program to allow players of a specific game to view information in the popular chat application Discord, and to assist in managing groups of players. The main program was written in python, and used the game's public API to gather and present statistics about players and in-game events, and to synchronise players' in-game and Discord profiles.
    <br>&nbsp;<br>
In addition to creating several user-facing features, I was responsible for maintaining a separate API, written in Javascript with Node.JS, which processed the limited available data to produce useful insights, for use by the main program and third-party applications.
    <br>&nbsp;<br>
It was used over 600,000 times by more than 25,000 users in the
year following its release.
<br><br> `,
    dates: 'Jun 2020 - Aug 2021',
    links: [LinkSiteIcon.github('https://github.com/skybot-dev/')],
    technologies: [
      Category.Languages(LanguageIcon.Python, LanguageIcon.JavaScript),
      Category.Databases(DatabaseIcon.MongoDB),
      Category.Frameworks(FrameworkIcon.ExpressJS),
    ],
    images: [
      projectImage('skybot/usage-stats.png', "Stats of the bot's usage."),
      projectImage('skybot/help.png', 'List of commands.'),
      projectImage('skybot/skills.png', "Example of a command to view a player's statistics."),
    ],
  },
  {
    name: 'Skyblock Tools',
    description: `A set of tools to assist players of a popular multiplayer game by analysing large quantities of data in real-time to
identify anomalies. It comprised web and in-game frontends, as well as a backend service for authentication and to
produce and serve the data. 
    <br>&nbsp;<br>
The backend system was implemented as microservices, using Redis for IPC. The flexiblity afforded by this architecture allowed us to switch the most performance-critical component to an implementation written in Rust once further optimisations in Python were impractical.
    <br>&nbsp;<br>
As one of eight key contributors, I was responsible for developing the backend services and deploying them to cloud
infrastructure, as well as contributing to the in-game frontend, written in Java as a game modification. I worked across multiple teams to ensure integration
of all components.
    <br>&nbsp;<br>
It was used by over 10,000 people, including more than 300 paying users.`,
    dates: 'Apr 2021 - Sep 2022',
    links: [LinkSiteIcon.github('https://github.com/skyblock-tools')],
    technologies: [
      Category.Languages(LanguageIcon.Python, LanguageIcon.Java, LanguageIcon.JavaScript),
      Category.Databases(DatabaseIcon.MongoDB, DatabaseIcon.Redis),
      Category.Frameworks(FrameworkIcon.Flask, FrameworkIcon.VueJS),
      Category.Tools(ToolIcon.Docker, ToolIcon.Gradle, ToolIcon.Nginx, ToolIcon.YouTrack),
    ],
    images: [
      projectImage('skyhouse/credits.png', 'Skyhouse mod main page.'),
      projectImage('skyhouse/config-ah-overlays.png', 'Configuration options.'),
      projectImage('skyhouse/bits-overlay.png', 'Bits-to-coins overlay.'),
      projectImage('skyhouse/flip-list.png', 'Skyhouse mod auction house flipper.'),
      projectImage('skyhouse/skyhouseWeb.png', 'Skyhouse flipper web interface.'),
    ],
  },
  {
    name: 'Algorithm Visualiser',
    description: `Created for my A Level Computer Science project, this web application visualises the process and output of several of
the algorithms required by the A Level Further Maths course that I was studying, using colourful animations and
textual explanations to aid comprehension.
    <br>&nbsp;<br>
It was developed to a strict specification and timeline in a continuously documented process, in accordance with the qualification's requirements.
    `,
    dates: 'Nov 2022 - Apr 2023',
    links: [
      LinkSiteIcon.github('https://github.com/patrickjonesuk/algorithm-visualiser'),
      LinkSiteIcon.website('https://algorithm-visualiser.patrickjones.uk'),
    ],
    technologies: [
      Category.Languages(LanguageIcon.JavaScript, LanguageIcon.HTML5, LanguageIcon.CSS3),
      Category.Frameworks(FrameworkIcon.VueJS),
      Category.Tools(ToolIcon.Vite, ToolIcon.ESLint),
    ],
    images: [
      projectImage('algorithm-visualiser/home.png', 'Website home page'),
      projectImage('algorithm-visualiser/bubble_sort.png', 'Execution of bubble sort algorithm.'),
      projectImage('algorithm-visualiser/floyds.png', "Execution of Floyd's algorithm."),
      projectImage(
        'algorithm-visualiser/simplex_options.png',
        'Input of linear programming problem for the simplex algorithm.',
      ),
      projectImage(
        'algorithm-visualiser/simplex_complete.png',
        'Completion of the simplex algorithm using the Big-M method.',
      ),
    ],
  },
  {
    name: 'Portfolio Site',
    description: `This website. A compilation of information about me, including a collection of some of the things I've made and the technologies I've learnt, as well as information about what I'm working on and what I'd like to learn in the future.
        <br>&nbsp;<br>
    It is a SPA built using VueJS and Primevue components.
        
        `,
    dates: 'Nov 2023 - Present',
    links: [
      LinkSiteIcon.github('https://github.com/patrickjonesuk/portfolio-site'),
      LinkSiteIcon.website('https://patrickjones.uk'),
    ],
    technologies: [
      Category.Languages(LanguageIcon.TypeScript, LanguageIcon.HTML5, LanguageIcon.CSS3),
      Category.Frameworks(FrameworkIcon.VueJS, FrameworkIcon.PrimeVue),
      Category.Tools(ToolIcon.Vite, ToolIcon.ESLint),
    ],
    images: [],
  },
  {
    name: 'CS Notes',
    description: `The notes I've written for the BSc Computer Science programme that I'm studying at the University of Manchester. They have been written in Obsidian and rendered with Quartz.`,
    dates: 'Sep 2023 - Present',
    links: [
      LinkSiteIcon.github('https://github.com/patrickjonesuk/cs-notes'),
      LinkSiteIcon.website('https://cs.patrickjones.uk'),
    ],
    technologies: [
      Category.Languages(LanguageIcon.Markdown, LanguageIcon.LaTeX),
      Category.Tools(ToolIcon.Obsidian),
    ],
    images: [],
    hidden: true,
  },
];

export const skills: TechCategory[] = [
  labelled(
    Category.Languages(
      LanguageIcon.Python,
      LanguageIcon.JavaScript,
      LanguageIcon.TypeScript,
      LanguageIcon.Java,
      LanguageIcon.Kotlin,
      LanguageIcon.Go,
      LanguageIcon.CSharp,
    ),
    'I have developed proficiency in these programming languages, having used them in depth to develop multiple projects.',
  ),
  labelled(
    Category.Frameworks(
      FrameworkIcon.ExpressJS,
      FrameworkIcon.Flask,
      FrameworkIcon.GinGonic,
      FrameworkIcon.VueJS,
      FrameworkIcon.React,
      FrameworkIcon.PrimeVue,
      FrameworkIcon.ChartJS,
    ),
    'In addition to using smaller libraries, I have worked on projects structured around several popular frameworks.',
  ),
  labelled(
    Category.Databases(
      DatabaseIcon.MongoDB,
      DatabaseIcon.Redis,
      DatabaseIcon.MySQL,
      DatabaseIcon.MariaDB,
      DatabaseIcon.SQLite,
    ),
    'I have used these database systems across multiple projects, selecting the most applicable based on the overall system architecture and the nature and structure of the data.',
  ),
  labelled(
    Category.Tools(
      ToolIcon.Docker,
      ToolIcon.Gradle,
      ToolIcon.Git,
      ToolIcon.Bash,
      ToolIcon.Trello,
      ToolIcon.YouTrack,
    ),
    'I have used these tools to efficiently manage development, collaboration and deployment of projects.',
  ),
];
export const about_description = `
Currently in my second year of a Computer Science degree at the University of Manchester, I am a keen programmer and developer.
<br>&nbsp;<br>
I have worked on numerous projects with teams from across the world, using a variety of languages, tools and other technologies. I have also developed and deployed several applications independently.
<br>&nbsp;<br>
            I am particularly interested in the management of server-side applications and
            infrastructure, including secure development and deployment, distribution and scaling of
            resources.
        `;
export const cv_url = 'https://drive.google.com/file/d/1QEivV5sRH9nLZnuKGqqvLlOlE0wSi2Cd/view';
export const project_description = `
            The majority of the projects in which I have played a major role have been released
            publicly under an open-source licence. I am currently building a full-stack web
            application for investment tracking, called
            <a href="https://goldsprout.app" target="_blank">Goldsprout</a>.
            `;
const email_addr = 'contact@patrickjones.uk';

export const Contact = {
  Github: 'https://github.com/patrickjonesuk',
  LinkedIn: 'https://linkedin.com/in/patrickjonesuk',
  Twitter: 'https://twitter.com/ukpjones',
};

export const contact_html = `For most enquiries, please send an email to <a href="mailto:${email_addr}">${email_addr}</a>`;
export const contact_links: TechCategory = {
  name: 'Other sites:',
  description: ' ', // add an extra line of spacing between heading and links
  icons: [
    LinkSiteIcon.github(Contact.Github),
    LinkSiteIcon.linkedIn(Contact.LinkedIn),
    LinkSiteIcon.twitter(Contact.Twitter),
  ],
};

export const streak_stats_url =
  import.meta.env.VITE_STREAK_STATS_URL || 'https://streak-stats.demolab.com?';
