---
path: '/gatsby-contentful-lesson'
title: Gatsby & Contentful Tutorial
date: "2018-08-17"
---
#### Setting up a quick Gatsby Site with Contentful CMS

###### *this guide assumes you already installed GatsbyJS

GatsbyJS is a powerful static site generator for React and Contentful helps you keep your content organized without a complicated database. Similar to database schemas though, contentful uses content models to define the structure of your entries. 


1. [Create](https://www.contentful.com/sign-up/) a free Contentful Account
2. Using the Gatsby Command Line Interface (CLI) in your terminal run: 
`gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
`
and then `npm install`. 
This will create a new gatsby project with a contentful starter template and install it's required dependencies
3. Create a new Space within Contentful. Creating a new space is similar to creating a new database file. Open up the sidebar on the contentful website and click  + Add space
4. Generate access tokens. You will need to create 3 contentful API tokens before your website can request data from it.  
These API's are: [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/) , [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/), and the [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). To generate the API tokens navigate to your Space Settings dropdown menu > API Keys and then + Add API Key. After generating a token and giving it a name make sure you copy the tokens value and store that in a safe place. You will only be able to view it once from the dashboard. Do this for all 3 APIs.
1. Configuration. In terminal: `npm run setup` which will ask you for the ID of the space you along with the 3 API tokens you just created. Now you are ready to [import content](https://www.contentful.com/developers/docs/tutorials/general/import-and-export/) to your website via the contentful API
2. Publish. You can see how your website looks like locally before deployment by running in terminal `npm run dev`. If the results look satisfactory run `npm run deploy` to publish your production build straight onto GitHub pages.
3. Deploy. Although I mentioned Github pages previously, contentful is platform agnostic and can be deployed on other hosts such as [Netlify](https://www.netlify.com/) and [BitBalloon](https://www.bitballoon.com/)

Thank you for reading this guide! I hope this was a simple introduction to creating a new Gatsby site that uses contentful as to manage content. 

<small>Originally published on [Medium](https://medium.com/@igor.yermak/setting-up-a-quick-gatsby-site-with-contentful-cms-b04cda399a7e)</small>