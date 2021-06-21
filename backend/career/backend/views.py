# from django.shortcuts import render
from rest_framework.response import Response
from azure.ai.formrecognizer import FormRecognizerClient
from azure.core.credentials import AzureKeyCredential
# import json
from rest_framework import viewsets, status, generics


# Create your views here.
# ruta = "AC201941311901.pdf"
json_file = "results.json"
endpoint = "https://southcentralus.api.cognitive.microsoft.com/"
credential = AzureKeyCredential("21e184065b864942b0915c655bbf3560")


class ReportView(generics.RetrieveAPIView):

    def get(self, request):

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
