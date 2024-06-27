from flask import Flask, request, jsonify
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Path to your JSON file
JSON_FILE = 'data.json'

# Initialize appointments list
appointments = []

def save_appointments():
    with open(JSON_FILE, 'w') as file:
        json.dump(appointments, file)

def load_appointments():
    global appointments
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as file:
            appointments = json.load(file)
    else:
        appointments = []

load_appointments()

def send_email(to_email, subject, body):
    from_email = "123@gmail.com"  # Update with your email
    password = "password"       # Update with your email password
    smtp_server = "smtp.example.com"       # Update with your SMTP server
    port = 587

    message = MIMEMultipart()
    message["From"] = from_email
    message["To"] = to_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP(smtp_server, port)
        server.starttls()
        server.login(from_email, password)
        server.sendmail(from_email, to_email, message.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    gender = data.get('gender')
    dob = data.get('dob')
    age = data.get('age')
    address = data.get('address')
    contact_number = data.get('contact_number')
    email = data.get('email')

    # Example: Save user data to the database or any other processing
    # For demonstration, let's assume signup is successful and send an email
    subject = "Welcome to Clinic Appointment System"
    body = f"""Dear {first_name},
    Your account has been created successfully.
    Username: {email}
    Password: Change@123

    Best regards,
    Clinic Appointment System"""
    
    if send_email(email, subject, body):
        return jsonify({"message": "Signup successful, email sent"}), 200
    else:
        return jsonify({"message": "Signup successful, but email failed to send"}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Example: Validate user credentials with the database or any other method
    # For demonstration, let's assume a simple validation for the example
    if email == "test@example.com" and password == "Change@123":
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route('/book_appointment', methods=['POST'])
def book_appointment():
    data = request.json
    appointment = {
        "first_name": data.get('first_name'),
        "last_name": data.get('last_name'),
        "gender": data.get('gender'),
        "dob": data.get('dob'),
        "age": data.get('age'),
        "appointment_date": data.get('appointment_date'),
        "time": data.get('time'),
        "doctor_name": data.get('doctor_name'),
        "purpose_of_visit": data.get('purpose_of_visit')
    }
    appointments.append(appointment)
    save_appointments()  # Save to JSON file
    return jsonify({"message": "Appointment booked successfully"}), 200

@app.route('/appointments', methods=['GET'])
def get_appointments():
    return jsonify(appointments), 200

if __name__ == '__main__':
    app.run(debug=True)
