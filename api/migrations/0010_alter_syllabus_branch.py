# Generated by Django 3.2.7 on 2021-11-14 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20211114_1521'),
    ]

    operations = [
        migrations.AlterField(
            model_name='syllabus',
            name='Branch',
            field=models.CharField(max_length=50, null=True, unique=True),
        ),
    ]
