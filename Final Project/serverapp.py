# from flask import Flask, render_template, request, jsonify

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('webpage.html')

# @app.route('/save_booking', methods=['POST'])
# def save_booking():
#     destination = request.form.get('destination')
#     date = request.form.get('date')
#     attendees = request.form.get('attendee')

#     # Your server-side logic to save the booking to a file goes here
#     with open('booking.txt', 'w') as file:
#         file.write(f"Booking for {destination} on {date} for {attendees} attendees.")

#     return jsonify({"message": "Booking saved successfully!"})

# @app.route('/get_booking')
# def get_booking():
#     # Your server-side logic to retrieve the booking from the file goes here
#     try:
#         with open('booking.txt', 'r') as file:
#             booking_text = file.read()
#         return jsonify({"booking": booking_text})
#     except FileNotFoundError:
#         return jsonify({"booking": "No booking found."})

# if __name__ == '__main__':
#     app.run(debug=True)
