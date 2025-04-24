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
              name: "LinkedIn",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
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
          name: "Video",
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
              name: "ArtStation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "Leonardo AI",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "Dribbble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
            {
              name: "Canva",
              url: "https://www.canva.com/",
              icon: "palette",
              icon_color: "#d3869b",
            },
            {
              name: "UnDraw",
              url: "https://undraw.co/illustrations",
              icon: "brush",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "UX Pro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "Color Hunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
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
          name: "3D Resources",
          links: [
            {
              name: "Thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
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
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "Docker Hub",
              url: "https://dockerhub.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "VS Code",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            {
              name: "Bootstrap Docs",
              url: "https://getbootstrap.com/docs/",
              icon: "code",
              icon_color: "#a9b665",
            },
            {
              name: "Markdown Table",
              url: "https://www.tablesgenerator.com/markdown_tables",
              icon: "table",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Challenges",
          links: [
            {
              name: "HackTheBox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "CryptoHack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "TryHackMe",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
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
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Mails",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
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
          name: "Stuff",
          links: [
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
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
          name: "Challenges",
          links: [
            {
              name: "TryHackMe",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "Hack The Box",
              url: "https://www.hackthebox.com/",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "Crypto Hack",
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
          name: "Resources",
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
      name: "tools",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Convert Tools",
          links: [
            {
              name: "Smallpdf",
              url: "https://smallpdf.com/",
              icon: "pdf",
              icon_color: "#ea6962",
            },
            {
              name: "ILovePDF",
              url: "https://www.ilovepdf.com/",
              icon: "pdf",
              icon_color: "#89b482",
            },
            {
              name: "PDFCandy",
              url: "https://pdfcandy.com/",
              icon: "file-text",
              icon_color: "#d3869b",
            },
            {
              name: "Zamzar",
              url: "https://www.zamzar.com/",
              icon: "file",
              icon_color: "#8ec07c",
            },
            {
              name: "Convertio",
              url: "https://convertio.co/",
              icon: "repeat",
              icon_color: "#a9b665",
            },
            {
              name: "Online Convert",
              url: "https://www.online-convert.com/",
              icon: "refresh",
              icon_color: "#83a598",
            },
            {
              name: "CloudConvert",
              url: "https://cloudconvert.com/",
              icon: "cloud",
              icon_color: "#d8a657",
            },
            {
              name: "FreeConvert",
              url: "https://www.freeconvert.com/",
              icon: "repeat",
              icon_color: "#7daea3",
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
              name: "DALL-E",
              url: "https://openai.com/dall-e/",
              icon: "file",
              icon_color: "#ea6962",
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/",
              icon: "sparkles",
              icon_color: "#d8a657",
            },
            {
              name: "Claude",
              url: "https://claude.ai/",
              icon: "brain",
              icon_color: "#89b482",
            },
            {
              name: "Perplexity",
              url: "https://www.perplexity.ai/",
              icon: "search",
              icon_color: "#b16286",
            },
            {
              name: "Leonardo AI",
              url: "https://leonardo.ai/",
              icon: "palette",
              icon_color: "#d3869b",
            },
            {
              name: "Runway ML",
              url: "https://runwayml.com/",
              icon: "video",
              icon_color: "#8ec07c",
            },
            {
              name: "Copy.ai",
              url: "https://www.copy.ai/",
              icon: "file-text",
              icon_color: "#a89984",
            },
          ],
        },
      ],
    },
  ],
};
//   tabs: [
//     {
//       name: "chi ll",
//       background_url: "src/img/banners/cbg-2.gif",
//       categories: [
//         {
//           name: "Social Media",
//           links: [
//             {
//               name: "Whatsapp",
//               url: "https://web.whatsapp.com/",
//               icon: "brand-whatsapp",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "Instagram",
//               url: "https://www.instagram.com/",
//               icon: "brand-instagram",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "LinkedIn",
//               url: "https://www.linkedin.com/feed/",
//               icon: "brand-linkedin",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "YouTube",
//               url: "https://www.youtube.com/",
//               icon: "brand-youtube-filled",
//               icon_color: "#ea6962",
//             },
//           ],
//         },
//         {
//           name: "Games",
//           links: [
//             {
//               name: "Chess",
//               url: "https://www.chess.com/home",
//               icon: "chess-queen-filled",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "Monkeytype",
//               url: "https://monkeytype.com/",
//               icon: "keyboard",
//               icon_color: "#e78a4e",
//             },
//           ],
//         },
//         {
//           name: "Video",
//           links: [
//             {
//               name: "Nonton Anime",
//               url: "https://s4.nontonanimeid.boats/",
//               icon: "movie",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "design",
//       background_url: "src/img/banners/cbg-6.gif",
//       categories: [
//         {
//           name: "Inspiration",
//           links: [
//             {
//               name: "Pinterest",
//               url: "https://www.pinterest.es/",
//               icon: "brand-pinterest",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "ArtStation",
//               url: "https://www.artstation.com/?sort_by=community",
//               icon: "chart-area",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "Leonardo AI",
//               url: "https://app.leonardo.ai/",
//               icon: "brand-openai",
//               icon_color: "#89b482",
//             },
//             {
//               name: "Dribbble",
//               url: "https://dribbble.com/following",
//               icon: "brand-dribbble-filled",
//               icon_color: "#d3869b",
//             },
//           ],
//         },
//         {
//           name: "Resources",
//           links: [
//             {
//               name: "Figma",
//               url: "https://www.figma.com",
//               icon: "brand-figma",
//               icon_color: "#d3869b",
//             },
//             {
//               name: "UX Pro",
//               url: "https://uxpro.cc/",
//               icon: "components",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "Color Hunt",
//               url: "https://colorhunt.co/",
//               icon: "color-picker",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "Adobe Color",
//               url: "https://color.adobe.com/es/create/color-wheel",
//               icon: "brand-adobe",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//         {
//           name: "3D Resources",
//           links: [
//             {
//               name: "Thingiverse",
//               url: "https://www.thingiverse.com/",
//               icon: "circle-letter-t",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "dev",
//       background_url: "src/img/banners/cbg-7.gif",
//       categories: [
//         {
//           name: "Repositories",
//           links: [
//             {
//               name: "GitHub",
//               url: "https://github.com/",
//               icon: "brand-github",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "Docker Hub",
//               url: "https://dockerhub.com/",
//               icon: "brand-gitlab",
//               icon_color: "#e78a4e",
//             },
//           ],
//         },
//         {
//           name: "Resources",
//           links: [
//             {
//               name: "Phind",
//               url: "https://www.phind.com/",
//               icon: "brand-openai",
//               icon_color: "#89b482",
//             },
//             {
//               name: "VS Code",
//               url: "https://vscode.dev/",
//               icon: "brand-vscode",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//         {
//           name: "Challenges",
//           links: [
//             {
//               name: "HackTheBox",
//               url: "https://app.hackthebox.com",
//               icon: "box",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "CryptoHack",
//               url: "https://cryptohack.org/challenges/",
//               icon: "brain",
//               icon_color: "#e78a4e",
//             },
//             {
//               name: "TryHackMe",
//               url: "https://tryhackme.com/dashboard",
//               icon: "brand-onedrive",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "HackerRank",
//               url: "https://www.hackerrank.com/dashboard",
//               icon: "code-asterix",
//               icon_color: "#a9b665",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "myself",
//       background_url: "src/img/banners/cbg-9.gif",
//       categories: [
//         {
//           name: "Mails",
//           links: [
//             {
//               name: "Gmail",
//               url: "https://mail.google.com/mail/u/0/",
//               icon: "brand-gmail",
//               icon_color: "#ea6962",
//             },
//           ],
//         },
//         {
//           name: "Storage",
//           links: [
//             {
//               name: "Drive",
//               url: "https://drive.google.com/drive/u/0/my-drive",
//               icon: "brand-google-drive",
//               icon_color: "#e78a4e",
//             },
//             {
//               name: "Dropbox",
//               url: "https://www.dropbox.com/h?role=personal&di=left_nav",
//               icon: "box-seam",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "Photos",
//               url: "https://photos.google.com/u/1",
//               icon: "photo-filled",
//               icon_color: "#ea6962",
//             },
//           ],
//         },
//         {
//           name: "Stuff",
//           links: [
//             {
//               name: "LinkedIn",
//               url: "https://www.linkedin.com/feed/",
//               icon: "brand-linkedin",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "dev",
//       background_url: "src/img/banners/cbg-7.gif",
//       categories: [
//         {
//           name: "Repositories",
//           links: [
//             {
//               name: "GitHub",
//               url: "https://github.com/ariafatah0711",
//               icon: "brand-github",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "Docker Hub",
//               url: "https://hub.docker.com/",
//               icon: "brand-gitlab", // bisa diganti brand-docker kalo punya
//               icon_color: "#e78a4e",
//             },
//           ],
//         },
//         {
//           name: "Resources",
//           links: [
//             {
//               name: "Phind",
//               url: "https://www.phind.com/",
//               icon: "brand-openai",
//               icon_color: "#89b482",
//             },
//             {
//               name: "VS Code",
//               url: "https://vscode.dev/",
//               icon: "brand-vscode",
//               icon_color: "#7daea3",
//             },
//             {
//               name: "Bootstrap Docs",
//               url: "https://getbootstrap.com/docs/",
//               icon: "code",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "Markdown Table",
//               url: "https://www.tablesgenerator.com/markdown_tables",
//               icon: "table",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "design",
//       background_url: "src/img/banners/cbg-6.gif",
//       categories: [
//         {
//           name: "Inspiration",
//           links: [
//             {
//               name: "Canva",
//               url: "https://www.canva.com/",
//               icon: "palette",
//               icon_color: "#d3869b",
//             },
//             {
//               name: "Color Hunt",
//               url: "https://colorhunt.co/",
//               icon: "color-picker",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "UnDraw",
//               url: "https://undraw.co/illustrations",
//               icon: "brush",
//               icon_color: "#89b482",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "ctf",
//       background_url: "src/img/banners/cbg-8.gif",
//       categories: [
//         {
//           name: "Challenges",
//           links: [
//             {
//               name: "TryHackMe",
//               url: "https://tryhackme.com/dashboard",
//               icon: "brand-onedrive",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "Hack The Box",
//               url: "https://www.hackthebox.com/",
//               icon: "box",
//               icon_color: "#a9b665",
//             },
//             {
//               name: "CryptoHack",
//               url: "https://cryptohack.org/challenges/",
//               icon: "brain",
//               icon_color: "#e78a4e",
//             },
//             {
//               name: "Pwn College",
//               url: "https://pwn.college/dojos",
//               icon: "school",
//               icon_color: "#7daea3",
//             },
//           ],
//         },
//         {
//           name: "Resources",
//           links: [
//             {
//               name: "CyberChef",
//               url: "https://cyberchef.org/",
//               icon: "tools",
//               icon_color: "#ea6962",
//             },
//             {
//               name: "RevShell Generator",
//               url: "https://www.revshells.com/",
//               icon: "terminal-2",
//               icon_color: "#89b482",
//             },
//             {
//               name: "CrackStation",
//               url: "https://crackstation.net/",
//               icon: "lock",
//               icon_color: "#d3869b",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons) document.getElementsByTagName("head")[0].appendChild(css);
})();
