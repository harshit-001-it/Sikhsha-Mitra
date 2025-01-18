from flask import Flask, request, jsonify, render_template
import mysql.connector
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",           # Replace with your MySQL username
    password="merijaan",   # Replace with your MySQL password
    database="siksha_mitra"   # Replace with your database name
)

cursor = db.cursor()

# Home route for testing
@app.route("/")
def home():
    return render_template("signup.html")  # Ensure the signup HTML is in a `templates` folder.

# API endpoint for sign-up
@app.route("/signup", methods=["POST"])
def signup():
    try:
        # Get data from the request
        data = request.json
        username = data.get("username") # type: ignore
        email_mobile = data.get("email_mobile") # type: ignore
        password = data.get("password") # type: ignore
        confirm_password = data.get("confirm_password") # type: ignore

        # Basic validation
        if not all([username, email_mobile, password, confirm_password]):
            return jsonify({"error": "All fields are required"}), 400

        if password != confirm_password:
            return jsonify({"error": "Passwords do not match"}), 400

        # Check if the user already exists
        cursor.execute("SELECT * FROM signup WHERE email_mobile = %s", (email_mobile,))
        if cursor.fetchone():
            return jsonify({"error": "Email/Mobile already registered"}), 400

        # Hash the password for security
        password_hash = generate_password_hash(password)

        # Insert user into the database
        cursor.execute(
            "INSERT INTO signup (username, email_mobile, password_hash) VALUES (%s, %s, %s)",
            (username, email_mobile, password_hash)
        )
        db.commit()

        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Something went wrong"}), 500

if __name__ == "__main__":
    app.run(debug=True)
