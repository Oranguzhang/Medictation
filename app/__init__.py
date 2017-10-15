# app/__init__.py

from flask import Flask
from flask import request, redirect

# Initialize the app
app = Flask(__name__, instance_relative_config=True)

# Load the views
from app import views
from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/user/account

client = Client(account_sid, auth_token)


# # Load the config file
# app.config.from_object('config')

@app.route('/send-receive', methods=['POST'])
def sendR():
    
    print('phone')

    """
        to = what # to send reminder to
        body = what reminder text should you send

    """

    message = client.messages.create(
            to=request.form['phoneNumber'],
            body="Don't forget to take your medication in 30 minutes!",
            from_="+19082937475")

    print(message.sid)

    return redirect('/refillrequest')
    


