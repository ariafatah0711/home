let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Depok",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962", // merah chill
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "YouTube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    s: "search-bar",
    q: "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://ariaf.my.id/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "Social Media",
          links: [
            {
              name: "Whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: "#a9b665",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "#7daea3",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "Games",
          links: [
            {
              name: "Chess",
              url: "https://www.chess.com/home",
              icon: "chess-queen-filled",
              icon_color: "#a9b665",
            },
            {
              name: "Monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "Entertainment",
          links: [
            {
              name: "Nonton Anime",
              url: "https://s4.nontonanimeid.boats/",
              icon: "movie",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Repositories",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/ariafatah0711",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "Docker Hub",
              url: "https://dockerhub.com/",
              icon: "brand-docker",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Development",
          links: [
            {
              name: "VS Code",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            // {
            //   name: "Markdown Docs",
            //   url: "https://getbootstrap.com/docs/",
            //   icon: "code",
            //   icon_color: "#a9b665",
            // },
            {
              name: "Markdown Table",
              url: "https://www.tablesgenerator.com/markdown_tables",
              icon: "table",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Coding Challenges",
          links: [
            {
              name: "HackerRank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "ctf",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Platforms",
          links: [
            {
              name: "TryHackMe",
              url: "https://tryhackme.com/dashboard",
              icon: "shield",
              icon_color: "#ea6962",
            },
            {
              name: "Hack The Box",
              url: "https://www.hackthebox.com/",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "HackTrace Ranges",
              url: "https://www.hacktrace-ranges.id/home/",
              icon: "box",
              icon_color: "#d3869b",
            },
            {
              name: "CryptoHack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "Pwn College",
              url: "https://pwn.college/dojos",
              icon: "school",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Tools",
          links: [
            {
              name: "CyberChef",
              url: "https://cyberchef.org/",
              icon: "tools",
              icon_color: "#ea6962",
            },
            {
              name: "RevShell Generator",
              url: "https://www.revshells.com/",
              icon: "terminal-2",
              icon_color: "#89b482",
            },
            {
              name: "CrackStation",
              url: "https://crackstation.net/",
              icon: "lock",
              icon_color: "#d3869b",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Communication",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Storage",
          links: [
            {
              name: "Drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "Dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "Photos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "Learning",
          links: [
            {
              name: "Dicoding",
              url: "https://www.dicoding.com/academies/my",
              icon: "school",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Inspiration",
          links: [
            {
              name: "Pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "palette",
              icon_color: "#ea6962",
            },
            {
              name: "ArtStation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "Dribbble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "Tools",
          links: [
            {
              name: "Figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "Canva",
              url: "https://www.canva.com/",
              icon: "palette",
              icon_color: "#d3869b",
            },
            {
              name: "Adobe Color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "UX Pro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "UnDraw",
              url: "https://undraw.co/illustrations",
              icon: "brush",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
    {
      name: "tools",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "Converters",
          links: [
            {
              name: "Smallpdf",
              url: "https://smallpdf.com/",
              icon: "pdf",
              icon_color: "#ea6962",
            },
            {
              name: "Zamzar",
              url: "https://www.zamzar.com/",
              icon: "file",
              icon_color: "#8ec07c",
            },
            {
              name: "CloudConvert",
              url: "https://cloudconvert.com/",
              icon: "cloud",
              icon_color: "#d8a657",
            },
          ],
        },
        {
          name: "AI Tools",
          links: [
            {
              name: "ChatGPT",
              url: "https://chat.openai.com/",
              icon: "robot",
              icon_color: "#7daea3",
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/",
              icon: "sparkles",
              icon_color: "#d8a657",
            },
            {
              name: "Leonardo AI",
              url: "https://leonardo.ai/",
              icon: "palette",
              icon_color: "#d3869b",
            },
            {
              name: "Phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons) document.getElementsByTagName("head")[0].appendChild(css);
})();
