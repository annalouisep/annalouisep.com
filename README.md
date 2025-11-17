# annalouisep.com
Website

To deploy, run the deploy.sh script from the root folder of the website on local machine.

To add photos to the Pottery tab, add the photo (at a middling quality so as to not overload performance) to the /pottery folder. Update index.html with the image and description. Ensure that the title of the .jpg file and the html reference match. Don't forget to update git with the image as well!

To renew SSL cert for the website, ssh into the server and run sudo certbot --nginx -d annalouisep.com -d www.annalouisep.com . 
