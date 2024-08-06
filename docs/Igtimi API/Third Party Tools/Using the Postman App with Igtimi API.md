---
title: "Using the Postman App with Igtimi API"
date: 2021-08-18
---
# Using the Postman App with Igtimi API

Installing Postman and Importing Igtimi API calls
-------------------------------------------------

Postman is a tool that can help you quickly start using the Igtimi API.

  

Download and familiarise yourself with the Postman Tool [here](https://www.getpostman.com/apps).

Once you have downloaded Postman, you can import a selection of Igtimi API calls by clicking on the "Import" button, then click on the "Import from Link" tab and copy the following link into the entry box.   

```https://www.getpostman.com/collections/19c03e80bb76d5a47d03```

  

If you have trouble with the import from the link above, you can import the postman-collection file attached to this article.

  

  

Using an Environment for the Access\_token
------------------------------------------

Nearly every Igtimi API call uses an access\_token.

  

By using an 'Environment' inside Postman will enable you to enter the access\_token in one place and use it for every call. 

To create an 'Environment', click on the 'gear' icon next to the "No environment" drop down menu in the top right corner, and select "Manage Environments". 

Click 'Import' and load the "Igtimi Public Access\_token\_environment" file that is attached to the article. This environment has a Public access\_token loaded and will help you get started.

  

See the help documentation on "Creating a new App" to get the access\_token for a newly created App.

  

  

Using OAuth 2.0 inside Postman
------------------------------

Postman can retrieve your access\_token from your app by using a OAuth 2.0 built-in to postman. For the Igtimi API calls loaded into Postman, there is an Authorization tab. Select OAuth2.0 from the drop down list.

Change your "Redirect uri" from your App page in the Igtimi API website, to the link suggested by Postman called "Callback URL".

1.  Set the Postman "Authoriszation URL" to [https://www.igtimi.com/oauth/authorize](https://www.igtimi.com/oauth/authorize)
2.  Set the Postman "Access Token URL" to [https://www.igtimi.com/oauth/token](https://www.igtimi.com/oauth/token)
3.  Set the Postman "Client ID" to the "Client ID" from the App page in the Igtimi API website.
4.  Set the Postman "Client Secret" to the "Client Secret" from the App page in the Igtimi API website.
5.  Leave "Scope" blank

  

Click the "Get Access Token" button. Enter your login details and Authorize access for your app to your account.