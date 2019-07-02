
<h1 align="center">
  Gatsby and Snipcart e-commerce starter
</h1>

Create a simple and effective e-commerce shop using this starter.   
This starter uses Snipcart to create an easy-to-use shopping cart for an e-commerce site. Use this as a boilerplate to create your own Snipcart powered Gatsby shop!

---
## 🚀 Quick start

1.  **Create a Gatsby site using the starter.**

    Use the Gatsby CLI to create a new site, specifying the snipcart starter.

    ```sh
    # create a new Gatsby site using the snipcart starter
    gatsby new my-shop-starter https://github.com/gatsbyjs/gatsby-starter-blog
    ```

1. **Create a Snipcart account.**

    Go to [snipcart.com](https://snipcart.com/) and make an account. When using the test environment in Snipcart, everything is free and fake transactions can be made to test all aspects of your shop.
    You will be able to access a test public API from your dashboard. This will be needed in the `gatsby-config.js` file.


1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-shop-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

---
## 🔍 What does it use?

This starter uses the following major packages to make it easy to use:

- **Snipcart**  
  Snipcart provides an out-of-the-box shopping cart and checkout for e-commerce websites and works brilliantly with static sites. Some comments have been added to the files in this starter to provide some information and explanation. See the [Snipcart documentation](https://docs.snipcart.com/) for extra guidance.
- **Styled Components**  
  SC is used sparingly in this project. No themes are used but a global reset is applied and components are styled at the top of each component file. See the [Styled Components documentation](https://www.styled-components.com/docs) if you're unsure how to use this. Alternatively, you can remove all references to styled-components and use your own method of applying styles and css.

---
## 📁 Important files

  There are a few important files to take note of:
  
  - `src/pages/index.js`  
    This file is the homepage of your shop. 

  - `src/components/layout.js`  
    This file provides a basic layout to all the pages of your shop.

  - `src/styles/globalStyle.js`  
    This file is used by the styled-components package to reset styles and provide some basic global styling to your shop via the layout  file described above.

  - `content/items`  
    This **folder** contains all the markdown files representing items in your shop. Each item consists of a folder containing a markdown file (`index.md`) and an image. Edit or create more of these with the same markdown structure to change/add items to the shop.

---
## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

