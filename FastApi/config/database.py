from pymongo import MongoClient

client= MongoClient("mongodb+srv://Hamza:mongodb@cluster0.4nppq.mongodb.net/?retryWrites=true&w=majority")

db=client.parking

collection_name = db["client.parking"]