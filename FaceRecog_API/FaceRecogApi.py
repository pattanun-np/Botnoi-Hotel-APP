from flask import Flask,request
from flask_restful import Resource, Api, reqparse
import json
import face_recognition
import numpy as np
from numpy.linalg import norm
from PIL import Image
import io

app = Flask(__name__)
api = Api(app)


def load_image(image_data):
    im = Image.open(io.BytesIO(image_data))
    im = im.convert("RGB")
    unknown_image = np.array(im)
    unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
    return unknown_encoding

def load_database():
    with open('database.txt' ) as json_file:  
        data = json.load(json_file)
    return data

def compare_image(encoding_image,image_db):
    theshold = 0.4
    compare_result={}
    for name in image_db:
        compare_result[name] = (np.linalg.norm(encoding_image - image_db[name]) <= theshold)
    return compare_result

def check_result(image_compare):
    check = 0
    for name in image_compare:
        if image_compare[name] == True:
            result = name
            check = check+1
        if check > 1:
            result = "unknown"
            break
        if check == 0:
            result =  "unknown"
    return result




@app.route('/')
def index():
  return "test the system"


@app.route('/faceRecog', methods=['POST','GET','DELETE'])
def faceRecog():
    unknown_image = request.files["file"].read()
    print(type(unknown_image))
    #unknown_image = bytearray(unknown_image)
    #print(unknown_image)
    encoding_image = load_image(unknown_image)
    image_db = load_database()
    
    image_compare = compare_image(encoding_image,image_db)
    print(image_compare)
    result = check_result(image_compare)
    return result






if __name__=="__main__":
    app.run()


