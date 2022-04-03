from flask import Flask, jsonify, request, session

app = Flask(__name__)

app.secret_key = 'dljsaklqk24e21cjn!Ew@@dsa5'

@app.route("/index")
def index():
    focus = True
    session["focus"] = focus

@app.route('/focus', methods=['GET', 'POST'])
def focus_state():
    if request.method == 'POST':
        data = request.get_json().get("focus")
        print(data)
        session["focus"] = data
        return jsonify(data), 200
    else:
        response = jsonify({'state': session.get("focus", None)})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
