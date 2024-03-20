#################################################
#################################################

#Step 1: Navigate to your project directory
#cd /path/to/your/flask/project

#Step 2: Set the FLASK_APP environment variable
#Replace 'app.py' with the name of your Flask application file if it's different
#export FLASK_APP=app.py

#Step 3 (Optional): Set the FLASK_ENV environment variable to 'development'
#export FLASK_ENV=development

# Step 4: Run the Flask application
#flask run"""

#################################################
#################################################


from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

#login page
@app.route('/signin', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('home'))
    return render_template('signin.html', error=error)

#region page
@app.route('/regions')
def regions():
    return render_template('regions.html')

#lodging page
@app.route('/lodging')
def lodging():
    return render_template('lodging.html')

#resort page
@app.route('/resort')
def resort():
    return render_template('resort.html')

#passes page
@app.route('/passes')
def passes():
    return render_template('passes.html')


if __name__ == '__main__':
    app.run(debug=True)