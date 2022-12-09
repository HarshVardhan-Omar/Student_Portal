echo "BUILD START"
python3.11.1 -m pip install -r requirements.txt
python3.11.1 manage.py collectstatic --noinput --clear
echo "BUILD END"