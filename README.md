# annalouisep.com
Website

To deploy, ssh into my DigitalOcean droplet root@IP address.
Then, /deploy.sh to run the bash script and deploy.

To renew SSL cert for the website, ssh into the server and run sudo certbot --nginx -d annalouisep.com -d www.annalouisep.com . 
