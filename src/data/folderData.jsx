const explorer = {
  name: "VSCODE FOLDER STRUCTURE",
  IsFolder: true,
  items: [
    {
      name: "node_modules",
      IsFolder: true,
      items: [
        {
          name: "node_module nested 1",
          IsFolder: true,
          items: [
            {
              name: "react_jsx-dev-runtime.js",
              IsFolder: false,
            },
            {
              name: "eslint.cmd",
              IsFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      IsFolder: true,
      items: [
        {
          name: "images",
          IsFolder: true,
          items: [
            {
              name: "image.svg",
              IsFolder: false,
            },
          ],
        },
        {
          name: "vite.svg",
          IsFolder: false,
        },
      ],
    },
    {
      name: "src",
      IsFolder: true,
      items: [
        {
          name: "assets",
          IsFolder: true,
          items: [
            {
              name: "react.svg",
              IsFolder: false,
            },
          ],
        },
        {
          name: "components",
          IsFolder: true,
          items: [
            {
              name: "Folder.jsx",
              IsFolder: false,
            },
          ],
        },
        {
          name: "data",
          IsFolder: true,
          items: [
            {
              name: "folderData.jsx",
              IsFolder: false,
            },
          ],
        },
        {
          name: "App.css",
          IsFolder: false,
        },
        {
          name: "App.jsx",
          IsFolder: false,
        },
        {
          name: "index.css",
          IsFolder: false,
        },
        {
          name: "main.jsx",
          IsFolder: false,
        },
      ],
    },
    {
      name: ".eslintrc.cjs",
      IsFolder: false,
    },
    {
      name: ".gitignore",
      IsFolder: false,
    },
    {
      name: "index.html",
      IsFolder: false,
    },
    {
      name: "package-lock.json",
      IsFolder: false,
    },
    {
      name: "package.json",
      IsFolder: false,
    },
    {
      name: "README.md",
      IsFolder: false,
    },
    {
      name: "vite.config.js",
      IsFolder: false,
    },
  ],
};

export default explorer;
