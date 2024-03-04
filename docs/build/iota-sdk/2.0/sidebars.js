/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const fs = require('fs');

function directoryExists(path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (err) {
    return false;
  }
}

var python_references = {};
if (directoryExists(__dirname + '/docs/references/python')) {
  python_references = {
    type: 'category',
    label: 'Python',
    items: [
      {
        type: 'autogenerated',
        dirName: 'references/python/iota_sdk',
      },
    ],
  };
}

var nodejs_references = {};
if (directoryExists(__dirname + '/docs/references/nodejs')) {
  nodejs_references = {
    type: 'category',
    label: 'Node.js',
    items: [
      {
        type: 'doc',
        id: 'references/nodejs/api_ref',
      },
      {
        type: 'category',
        label: 'Classes',
        items: [
          {
            type: 'autogenerated',
            dirName: 'references/nodejs/classes',
          },
        ],
      },
      {
        type: 'category',
        label: 'Enums',
        items: [
          {
            type: 'autogenerated',
            dirName: 'references/nodejs/enums',
          },
        ],
      },
      {
        type: 'category',
        label: 'Interfaces',
        items: [
          {
            type: 'autogenerated',
            dirName: 'references/nodejs/interfaces',
          },
        ],
      },
    ],
  };
}

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          label: 'Rust',
          type: 'doc',
          id: 'getting-started/rust',
        },
        {
          label: 'Node.js',
          type: 'doc',
          id: 'getting-started/nodejs',
        },
        {
          label: 'Python',
          type: 'doc',
          id: 'getting-started/python',
        },
        {
          label: 'Wasm',
          type: 'doc',
          id: 'getting-started/wasm',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          id: 'explanations/testnet-and-test-tokens',
        },
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-tos/introduction',
        {
          type: 'category',
          label: 'Client',
          items: [
            {
              type: 'autogenerated',
              dirName: 'how-tos/client',
            },
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'references/rust-api-reference',
          label: 'Rust',
        },
        nodejs_references,
        python_references,
        {
          type: 'doc',
          id: 'references/wasm-api-reference',
          label: 'WASM',
        },
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting',
    },
    {
      type: 'doc',
      id: 'contribute',
      label: 'Contribute',
    },
  ],
};
