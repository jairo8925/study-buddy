from flask import Flask, jsonify
from focus import connect_and_use, data

app = Flask(__name__)

@app.route("/start_focus")
def start_focus():
    connect_and_use()

@app.route('/focus', methods=['GET'])
def get_focus():
    response = jsonify({'state': data["focus"]})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
