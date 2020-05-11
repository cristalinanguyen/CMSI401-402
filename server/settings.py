# Application settings. Can (and should be) be overridden from by environment
# variables. The ones that must appear in an environment variables are read in
# with [] rather than .get.

import os
import binascii

# The default is your local box, good for playing around during development, and testing
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI', 'mysql+pymysql://root@localhost/schedule')
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = False