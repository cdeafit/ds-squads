# from django.shortcuts import render
from rest_framework.response import Response
from azure.ai.formrecognizer import FormRecognizerClient
from azure.core.credentials import AzureKeyCredential
# import json
from rest_framework import viewsets, status, generics
import tensorflow as tf
from tensorflow.contrib import predictor
from rest_framework import viewsets

# Create your views here.
# ruta = "AC201941311901.pdf"
json_file = "results.json"
endpoint = "https://southcentralus.api.cognitive.microsoft.com/"
credential = AzureKeyCredential("21e184065b864942b0915c655bbf3560")


class ReportView(generics.RetrieveAPIView):

    def post(self, request):

        form_recognizer_client = FormRecognizerClient(endpoint, credential)
        model_id = "854c6870-3a84-4e76-963f-ad1edd7f1364"
        poller = form_recognizer_client.begin_recognize_custom_forms(
            model_id=model_id, form=request.data['script'])
        result = poller.result()
        cleaned_data = {}
        values = result[0].fields['pruebas'].value['puntajes'].value
        for key, value1 in values.items():
            cleaned_data[key] = value1.value
        return Response(cleaned_data, status=status.HTTP_200_OK)


class ModelView(generics.RetrieveAPIView):

    def predict_career(self, biologia, ciencias_sociales, filosofia, fisica, ingles, lenguaje, matematicas, quimica):
        loaded = predictor.from_saved_model(
            "./backend/1624347292")
        feature = {
            'punt_biologia': tf.train.Feature(float_list=tf.train.FloatList(value=[biologia])),
            'punt_ciencias_sociales': tf.train.Feature(float_list=tf.train.FloatList(value=[ciencias_sociales])),
            'punt_filosofia': tf.train.Feature(float_list=tf.train.FloatList(value=[filosofia])),
            'punt_fisica': tf.train.Feature(float_list=tf.train.FloatList(value=[fisica])),
            'punt_ingles': tf.train.Feature(float_list=tf.train.FloatList(value=[ingles])),
            'punt_lenguaje': tf.train.Feature(float_list=tf.train.FloatList(value=[lenguaje])),
            'punt_matematicas': tf.train.Feature(float_list=tf.train.FloatList(value=[matematicas])),
            'punt_quimica': tf.train.Feature(float_list=tf.train.FloatList(value=[quimica]))
        }
        example = tf.train.Example(
            features=tf.train.Features(
                feature=feature
            )
        )
        serialized_example = example.SerializeToString()
        predictions = loaded({"inputs": [serialized_example]})
        return predictions

    def get(self, request):

        biologia = float(request.query_params.get("biologia", 0))
        ciencias_sociales = float(request.query_params.get("ciencias_sociales", 0))
        filosofia = float(request.query_params.get("filosofia", 0))
        fisica = float(request.query_params.get("fisica", 0))
        ingles = float(request.query_params.get("ingles", 0))
        lenguaje = float(request.query_params.get("lenguaje", 0))
        matematicas = float(request.query_params.get("matematicas", 0))
        quimica = float(request.query_params.get("quimica", 0))

        prediction = self.predict_career(
            float(biologia), float(ciencias_sociales), float(filosofia), float(fisica), float(ingles), float(lenguaje), float(matematicas), float(quimica))
        return Response(prediction, status=status.HTTP_200_OK)
