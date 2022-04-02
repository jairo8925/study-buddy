from flask import Flask
from focus import get_focus

app = Flask(__name__)

@app.route('/focus')
def focus_state():
    return { "state": get_focus() }