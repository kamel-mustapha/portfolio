FROM python:3.8-alpine
RUN mkdir code
COPY . /code/
WORKDIR /code/
RUN pip install -r req.txt
EXPOSE 8000
CMD ["gunicorn", "core.wsgi", "-b", "0.0.0.0:8000", "-k", "gthread", "--threads", "5", "--log-level", "debug"]