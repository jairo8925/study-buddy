import re
from flask import Flask
from flask import jsonify
from focus import get_focus

app = Flask(__name__)

@app.route('/focus', methods=['GET'])
def focus_state():
    response = jsonify({'state': get_focus()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response