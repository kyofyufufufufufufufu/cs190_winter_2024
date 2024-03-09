from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

#route to homepage
@app.route('/')
def index():
    return render_template('webpage.html')

#route to signin page
@app.route('/signin')
def signin():
    return render_template('signin.html')

#getting data to save
@app.route('/save_booking', methods=['POST'])
def save_booking():
    destination = request.form.get('destination')
    date = request.form.get('date')
    attendees = request.form.get('attendee')

    # server-side
    with open('booking.txt', 'w') as file:
        file.write(f"Booking for {destination} on {date} for {attendees} attendees.")

    return jsonify({"message": "Booking saved successfully!"})

#getting data
@app.route('/get_booking')
def get_booking():
    # retrieve booking
    try:
        with open('booking.txt', 'r') as file:
            booking_text = file.read()
        return jsonify({"booking": booking_text})
    except FileNotFoundError:
        return jsonify({"booking": "No booking found."})

if __name__ == '__main__':
    app.run(debug=True, extra_files=['static/styles.css', 'static/app.js'])
