import code
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from ipware import get_client_ip
import json
from web.models import Contact



def index(req, *args, **kwargs):
    return render(req, 'index.html')


def contact(req):
    res = {'status': 'error', 'message':'unknown error'}
    res_code = 500
    try:
        data = json.loads(req.body)
        name = data.get('name')
        purpose = data.get('purpose')
        message = data.get('message')
        client_ip = ""
        
        try:
            client_ip, is_routable = get_client_ip(req)
        except Exception as e:
            print(e)

        if name and purpose and message :
            res_code = 200
            res['status'] = 'success'
            res['message'] = 'message saved'
            Contact.create(
                name = name,
                purpose = purpose,
                text = message,
                ip = client_ip
            )
    except Exception as e:
        print(e)
    return JsonResponse(res, status = res_code)