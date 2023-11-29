from flask import Flask,request,jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return 'Web App with Python Flask!'


@app.route('/config', methods=['GET'])
def get_data():
    return jsonify([
        {"name":"ZR1","id":7001,"ip":"12.112.12.12","port":"8084","pos":[
            {"id":801,"name":"pos801"},{"id":802,"name":"pos802"},{"id":803,"name":"pos803"}
            ]
            },
             {"name":"ZR2","id":7002,"ip":"12.112.12.12","port":"8085","pos":[
            {"id":804,"name":"pos804"},{"id":805,"name":"pos805"},{"id":806,"name":"pos806"}
            ]},
             {"name":"ZR3","id":7003,"ip":"12.112.12.12","port":"8086","pos":[
            {"id":807,"name":"pos807"},{"id":808,"name":"pos808"},{"id":809,"name":"pos809"}
            ]},
    ])


@app.route('/config', methods=['POST'])
def post_data():
    request_data = request.get_json()
    print(f'--- ALL parameters:{request.args}')
    print(f'--- Request BODY  :{request_data}')
    return jsonify({"start":"Saved Successfully"})


app.run(host='0.0.0.0', port=8000, threaded=True ,debug=True)