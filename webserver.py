"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask,request,render_template

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
import requests
import os
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def hello_world():
	"""
	If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
	returns will be sent to the browser
	"""
	return render_template("index.html") # Render the template located in "templates/index.html"


@app.route('/index')
def index():
	return render_template("index.html") 

@app.route('/about')
def about():
	return render_template("AboutUs.html") 

@app.route('/contact', methods=['GET'])
def contact():
	return render_template("contact.html") 

@app.route('/contact', methods=['POST'])
def send_email():
	name = request.form["name"]
	email = request.form["email"]
	subject = request.form["subject"]
	message = request.form["message"]
	notifications = []

	data = {
		'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
		'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
		'subject': "You just was sent a message",
		'text': "Name: "+ name + "\n" + "Email: "+ email +"\n" + "Subject: " + subject +"\n" + "Message: " +message 
	}

	auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

	r = requests.post(
		'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
		auth=auth,
		data=data)

	if r.status_code == requests.codes.ok:
		notifications.append("Hi " + name +" your email was sent")
	else:
		notifications.append("You email was not sent. Please try again later")

	return render_template("contact.html", notifications=notifications)



@app.route('/blog/8-experiments-in-motivation')
def Article1():
	return render_template("Article1.html")

@app.route('/blog/a-mindful-shift-of-focus')
def Article2():
	return render_template("Article2.html")

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def Article3():
	return render_template("Article3.html")


@app.route('/blog/training-to-be-a-good-writer')
def Article4():
	return render_template("Article4.html")


@app.route('/blog/what-productivity-systems-wont-solve')
def Article5():
	return render_template("Article5.html")

