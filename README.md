# Moodee
// TODO Explanation of Project

## Design File
The Figma design file can be found [here](https://www.figma.com/design/5WOZnhoqN0xe2P2VnCp1St/Moodee?node-id=0%3A1&t=p3JQJYMTtNuD2NJ9-1)

# Getting Started
For more in depth info, see [Node Version Setup](#node-version-setup)

1. `cd` into either the `frontend/` or `backend/` of the project and run `npm install`
2. run `npm run dev` to start the project, first in the backend, then in the frontend

# Node Version Setup
This project is currently set to use `node 20.11.1`

You can use `npm` version `9.3.1` to work with the project and older versions of nodejs if you need them on your system. Newer versions of npm are fine if there is no need for older nodejs versions elsewhere on your system.

<details>
  <summary><strong>NVM Explanation</strong></summary>

  ## What is NVM?
  - NVM stands for Node Version Manager. It's a tool that allows you to manage multiple installations of Node.js on a single system.
  - With NVM, you can easily install, switch between, and manage different versions of Node.js to match the requirements of your projects.

  ## What does NVM need?
  - NVM is primarily a shell script that manages Node.js installations in your user directory.
  - It requires a Unix-like environment (such as Linux or macOS) or a Unix-like terminal emulator on Windows.
  - NVM also requires curl or wget to download and install Node.js versions.

  ## What does NVM come with?
  - A set of shell scripts for installation, configuration, and management.
  - Utility commands to install, list, use, and uninstall different Node.js versions.
  - Version management capabilities to switch between different Node.js versions seamlessly.
  - The ability to set a default Node.js version to be used globally or per-project.
</details>

<details>
  <summary><strong>NPM Explanation</strong></summary>

  ## What is NPM?
  - NPM stands for Node Package Manager. It's the default package manager for Node.js and JavaScript.
  - NPM is used to install, manage, and share code packages and dependencies.
  - It's a central repository for JavaScript packages, where developers can publish and distribute their code.

  ## What does NPM need?
  - NPM is bundled with Node.js, so it's automatically installed when you install Node.js using NVM or any other method.
  - It requires a Node.js runtime environment to function, as it's primarily a package manager for Node.js projects.

  ## What does NPM come with?
  - A command-line interface (CLI) for package management tasks such as installing, updating, and removing packages. (`npm [command]`)
  - Access to the npm registry, which hosts thousands of packages of reusable code.
  - Dependency management capabilities, including the ability to specify and manage project dependencies in a package.json file.
  - Versioning and publishing tools for developers to publish their own packages to the npm registry.
</details>

## Windows Setup Info
- use `nvm list` to view the available versions of `nodejs` on your system.
  - use `nvm install [nodejs version]` to install the node version that is used if its not listed
  - use `nvm use [nodejs version]` to use the correct node version in this project
- run `node -v` to ensure that you are using the correct version.
- use `npm install` in the appropriate directories containing a `package.json` file to install dependencies needed for the project
  
## MacOS & Linux Setup Info
- install `asdf` through [`homebrew`](https://docs.brew.sh/Installation) using `brew install asdf`
> You'll want to update your `.zshrc` file to contain a pointer to the correct node version such as `export PATH="$HOME/.asdf/shims:$PATH"` but make sure it works for your particular system. This is the setup for a macbook on intel.
- install the needed `nodejs` version via the root of the project with `asdf install`.
> This will read the `.tool-versions` file and install the appropriate version and set it for use
- if `nodejs` is not an available plugin use `asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git` to add it in the command line. Then run  `asdf install` again.

<details>
  <summary><strong>ASDF Explanation</strong></summary>

  ## What is ASDF?
  - ASDF is a version manager that allows you to manage multiple programming language runtimes and tools on your system.
  - It provides a unified interface for installing, managing, and switching between different versions of programming languages and their associated tools.

  ## What does ASDF need?
  - ASDF requires a Unix-like environment (such as Linux or macOS) or a compatible terminal emulator on Windows.
  - It also requires dependencies specific to the programming languages and tools you intend to manage with ASDF. For example, if you're managing Node.js, you'll need Node.js and npm installed on your system.

  ## What does ASDF come with?
  - ASDF comes with:
    - A core set of functionality for managing different versions of programming languages and tools.
    - A plugin system that allows you to extend ASDF's capabilities to support additional programming languages and tools.
    - Integration with your shell environment to seamlessly manage version switching.
    - A command-line interface (CLI) for performing version management tasks such as installing, listing, and switching between versions.

  ## How does ASDF work?
  - ASDF works by leveraging plugins for each supported programming language or tool.
  - Each plugin provides functionality to install, manage, and switch between versions of the corresponding language or tool.
  - When you install a plugin for a specific language or tool (e.g., Node.js, Python, Ruby), ASDF sets up the necessary environment to manage that language or tool's versions.
  - You can then use ASDF's CLI commands to install, list, and switch between versions as needed.

  ## Why use ASDF?
  - ASDF simplifies the management of multiple programming language runtimes and tools on your system.
  - It allows you to avoid conflicts between different versions of languages and tools, enabling you to work on multiple projects with different requirements simultaneously.
  - ASDF's plugin system makes it easy to extend its functionality to support new languages or tools, providing a flexible and customizable version management solution.
</details>