from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("hands.html")

@app.route("/write", methods=["POST"])
def write():
    whisper = request.form["whisper"]
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("yethands.txt", "a", encoding="utf-8") as f:
        f.write(f"[{timestamp}] {whisper}\n")
    return "Whisper written."

if __name__ == "__main__":
    app.run(debug=True)