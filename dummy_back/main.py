from flask import Flask,request,jsonify

app = Flask(__name__)


@app.route('/test', methods=['POST'])
def test_connectifity():
    request_data = request.get_json()
    print(f'--- ALL parameters:{request.args}')
    print(f'--- Request BODY  :{request_data}')
    return jsonify({"start":"ok"})


@app.route('/config', methods=['GET'])
def save_config():
    return jsonify([
        {"name":"ZR1","ID":7001,"ip":"12.112.12.12","port":"8084","pos":[
            {"id":801,"name":"pos801"},{"id":802,"name":"pos802"},{"id":803,"name":"pos803"}
            ]},
             {"name":"ZR2","ID":7002,"ip":"12.112.12.12","port":"8085","pos":[
            {"id":801,"name":"pos801"},{"id":802,"name":"pos802"},{"id":803,"name":"pos803"}
            ]},
             {"name":"ZR3","ID":7003,"ip":"12.112.12.12","port":"8086","pos":[
            {"id":801,"name":"pos801"},{"id":802,"name":"pos802"},{"id":803,"name":"pos803"}
            ]},
       
    ])


@app.route('/')
def index():
    return 'Web App with Python Flask!'

app.run(host='0.0.0.0', port=8000, threaded=True ,debug=True)