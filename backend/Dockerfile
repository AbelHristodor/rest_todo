FROM python:3.7.3

RUN apt-get update -y \
    && apt-get upgrade -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/backend

COPY requirements.txt /app/backend
RUN pip install -r requirements.txt 

COPY . /app/backend

EXPOSE 8000

CMD python manage.py runserser 0.0.0.0:8000